var SPARQL = {}; // Namespace

SPARQL.semanticobjects = function(query) {
	readXML(URI_TritleStoreQuery,query,callbackSparql);
}

SPARQL.annotations = function(query) {
	readXML(URI_TritleStoreQuery,query,callbackSparql2);
}

SPARQL.annotation = function(query,anno) {
	readXML(URI_TritleStoreQuery,query,callbackSparql3,anno);
}

this.readXML = function(filename, query, callback, info) {
	var format = "&Accept=application/sparql-results%2Bxml";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET",filename + "?query=" + encodeURIComponent(query) + format,true);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status >= 200 && xmlhttp.status < 300)
				callback(xmlhttp.responseXML,info);
			else
				console.error("TripleStoreError range <200 or >300");
		}
	}
	xmlhttp.send();
}

this.callbackSparql = function(xml) {
	document.getElementById("semobj").options.length = 0;
	document.getElementById("semobj2").options.length = 0;
	var uris = xml.getElementsByTagName("uri");
	var literal = xml.getElementsByTagName("literal");
	for (var i = 0; i < uris.length; i++) {
		URI = uris[i].childNodes[0].nodeValue;
		lit = literal[i].childNodes[0].nodeValue;
		lang = literal[i].getAttribute("xml:lang");
		UTILS.addOption("semobj", lit + "@" + lang + " : " + URI);
		UTILS.addOption("semobj2", lit + "@" + lang + " : " + URI);
	}
	
	// same as LOAD.setResources
	
	UTILS.addOption("semobj", "======================================== Expert Data ========================================");
	UTILS.addOption("semobj2", "======================================== Expert Data ========================================");
	
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}	
	xmlhttp.open("GET",RDF_resources,false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML;
	
	var ns_rdf = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
	var ns_rdfs = "http://www.w3.org/2000/01/rdf-schema#";
	
	var Resource = xmlDoc.getElementsByTagNameNS(ns_rdfs,'Resource');
	var Resource2 = xmlDoc.getElementsByTagNameNS(ns_rdf,'Description');
	
	if (Resource.length > 0) {
		for (var i = 0; i < Resource.length; i++) {
			var url = Resource[i].getAttributeNS(ns_rdf,"about");
			var label = Resource[i].getElementsByTagNameNS(ns_rdfs,"label")[0].innerHTML;
			UTILS.addOption("semobj", label + " : " + url);
			UTILS.addOption("semobj2", label + " : " + url);
		}
	}
	if (Resource2.length > 0) {
		for (var i = 0; i < Resource2.length; i++) {
			var url = Resource2[i].getAttributeNS(ns_rdf,"about");
			if (url) {
				var label = url.split("/")[url.split("/").length-1];
				UTILS.addOption("semobj", label + " : " + url);
				UTILS.addOption("semobj2", label + " : " + url);
			}
		}
	}
	
}

this.callbackSparql2 = function(xml) {
	document.getElementById("anno").options.length = 0;
	var result = xml.getElementsByTagName("result");
	for (var i = 0; i < result.length; i++) {
		var binding = result[i].getElementsByTagName("binding");
		for (var j = 0; j < binding.length; j++) {
			name = binding[j].getAttribute("name");
			if (name=="motivation") {
				motivation = binding[j].getElementsByTagName("uri")[0].innerHTML.replace("http://www.w3.org/ns/oa#","");
			} else if (name=="date") {
				date = binding[j].getElementsByTagName("literal")[0].innerHTML;
			} else if (name=="anno") {
				URI = binding[j].getElementsByTagName("uri")[0].innerHTML;
			}
		}
		UTILS.addOption("anno", date + " : " + URI + " : " + motivation);
	}
	UTILS.raiseEvent("change","anno");
}

this.callbackSparql3 = function(xml, anno) {
	var binding = xml.getElementsByTagName("binding");
	for (var i = 0; i < binding.length; i++) {
		name = binding[i].getAttribute("name");
		if (name=="motivation") {
			motivation = binding[i].getElementsByTagName("uri")[0].innerHTML.replace("http://www.w3.org/ns/oa#","");
		} else if (name=="date") {
			date = binding[i].getElementsByTagName("literal")[0].innerHTML;
		} else if (name=="name") {
			creator = binding[i].getElementsByTagName("literal")[0].innerHTML;
		} 
	}
	document.getElementById("annometa").innerHTML = '<br><b>'+creator+' - '+date+' - '+motivation+'</b><br> &rarr; <a href="'+anno+'" target="_blank">'+anno+'</a>';
}