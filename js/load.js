var LOAD = {}; // Namespace

LOAD.setAgents = function() {
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}	
	xmlhttp.open("GET",RDF_agents,false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML; 
	
	var ns_rdf = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
	var ns_foaf = "http://xmlns.com/foaf/0.1/";
	var Agent = xmlDoc.getElementsByTagNameNS(ns_foaf,"Person");
	for (var i = 0; i < Agent.length; i++) {
		var uri = Agent[i].getAttributeNS(ns_rdf,"about");
		var name = Agent[i].getElementsByTagNameNS(ns_foaf,"name")[0].innerHTML;
		UTILS.addOption("agent", name+" : "+uri);
	}
}

LOAD.setLabels = function() {
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}	
	xmlhttp.open("GET",RDF_labels,false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML; 
	
	var ns_rdf = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
	var ns_skos = "http://www.w3.org/2004/02/skos/core#";
	var ns_xml = "http://www.w3.org/XML/1998/namespace";
	var Concept = xmlDoc.getElementsByTagNameNS(ns_skos,"Concept");
	for (var i = 0; i < Concept.length; i++) {
		var url = Concept[i].getAttributeNS(ns_rdf,"about");
		var prefLabel = Concept[i].getElementsByTagNameNS(ns_skos,"prefLabel")[0].innerHTML;
		var prefLabelLang = Concept[i].getElementsByTagNameNS(ns_skos,"prefLabel")[0].getAttributeNS(ns_xml,"lang");
		UTILS.addOption("label", prefLabel+"@"+prefLabelLang+" : "+url);
	}
}

LOAD.setResources = function() {
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
			UTILS.addOption("resource", label+" : "+url);
		}
	}
	if (Resource2.length > 0) {
		for (var i = 0; i < Resource2.length; i++) {
			var url = Resource2[i].getAttributeNS(ns_rdf,"about");
			if (url) {
				var label = url.split("/")[url.split("/").length-1];
				UTILS.addOption("resource", label+" : "+url);
			}
		}
	}

}

LOAD.setPredicates = function() {
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}	
	xmlhttp.open("GET",RDF_predicates,false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML;
	
	var ns_rdf = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
	var ns_rdfs = "http://www.w3.org/2000/01/rdf-schema#";
	var Property = xmlDoc.getElementsByTagNameNS(ns_rdf,'Property');
	for (var i = 0; i < Property.length; i++) {
		var uri = Property[i].getAttributeNS(ns_rdf,"about");
		UTILS.addOption("predicate", uri);
		UTILS.addOption("predicate1", uri);
		UTILS.addOption("predicate2", uri);
		UTILS.addOption("predicate3", uri);
		UTILS.addOption("literal1", uri);
		UTILS.addOption("literal2", uri);
		UTILS.addOption("literal3", uri);
		UTILS.addOption("literal4", uri);
		UTILS.addOption("predrelation", uri);
	}
}