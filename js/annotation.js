var ANNO = {}; // Namespace

// Create Semantic Object and Annotation Object
ANNO.createAnnotationFeature = function() {
	// Checks
	var check = true;
	var uri1 = document.getElementById('uri1_check');
	var uri2 = document.getElementById('uri2_check');
	var uri3 = document.getElementById('uri3_check');
	var lit1 = document.getElementById('lit1_check');
	var lit2 = document.getElementById('lit2_check');
	var lit3 = document.getElementById('lit3_check');
	var lit4 = document.getElementById('lit4_check');
	var pl = document.getElementById('pl_check');
	if (uri1.checked) {
		if (UTILS.HTTPverification(document.getElementById("uri1").value)) {
			check = true;
		} else {
			check = false;
			document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>URI starts not with http://</b>";
			console.error("URI starts not with http://");
		}
	}
	if (uri2.checked) {
		if (check==true) {
			if (UTILS.HTTPverification(document.getElementById("uri2").value)) {
				check = true;
			} else {
				check = false;
				document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>URI starts not with http://</b>";
				console.error("URI starts not with http://");
			}
		} else {
			document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>URI error</b>";
			console.error("URI error");
		}
	}
	if (uri3.checked) {
		if (check==true) {
			if (UTILS.HTTPverification(document.getElementById("uri3").value)) {
				check = true;
			} else {
				check = false;
				document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>URI starts not with http://</b>";
				console.error("URI starts not with http://");
			}
		} else {
			document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>URI error</b>";
			console.error("URI error");
		}
	}
	if (pl.checked) {
		if (check==true) {
			if (document.getElementById("prefLabel").value != "" && document.getElementById("prefLabelLang").value != "") {
				check = true;
			} else {
				check = false;
				document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>prefLabel empty</b>";
				console.error("prefLabel empty");
			}
		} else {
			document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>URI error</b>";
			console.error("URI error");
		}
	}
	
	// BlankNode with RDF types if check = true
	if (check==true) {
		var TurtleInput = '_:bnode <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://purl.org/dc/dcmitype/PhysicalObject>';
		TurtleInput += ",<http://www.w3.org/2004/02/skos/core#Concept>";
		TurtleInput += ",<http://www.w3.org/2000/01/rdf-schema#Resource>";
		TurtleInput += ",<http://www.w3.org/2002/07/owl#Thing> .";
		console.info(TurtleInput);
		createSemanticObject(TurtleInput);
	}
}

// Create Semantic Object and Annotation Object
ANNO.createAnnotationNewSemanticObject = function() {
	// Checks
	var check = true;
	var uri1 = document.getElementById('uri1_check');
	var uri2 = document.getElementById('uri2_check');
	var uri3 = document.getElementById('uri3_check');
	var lit1 = document.getElementById('lit1_check');
	var lit2 = document.getElementById('lit2_check');
	var lit3 = document.getElementById('lit3_check');
	var lit4 = document.getElementById('lit4_check');
	var pl = document.getElementById('pl_check');
	if (uri1.checked) {
		if (UTILS.HTTPverification(document.getElementById("uri1").value)) {
			check = true;
		} else {
			check = false;
			document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>URI starts not with http://</b>";
			console.error("URI starts not with http://");
		}
	}
	if (uri2.checked) {
		if (check==true) {
			if (UTILS.HTTPverification(document.getElementById("uri2").value)) {
				check = true;
			} else {
				check = false;
				document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>URI starts not with http://</b>";
				console.error("URI starts not with http://");
			}
		} else {
			document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>URI error</b>";
			console.error("URI error");
		}
	}
	if (uri3.checked) {
		if (check==true) {
			if (UTILS.HTTPverification(document.getElementById("uri3").value)) {
				check = true;
			} else {
				check = false;
				document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>URI starts not with http://</b>";
				console.error("URI starts not with http://");
			}
		} else {
			document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>URI error</b>";
			console.error("URI error");
		}
	}
	if (pl.checked) {
		if (check==true) {
			if (document.getElementById("prefLabel").value != "" && document.getElementById("prefLabelLang").value != "") {
				check = true;
			} else {
				check = false;
				document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>prefLabel empty</b>";
				console.error("prefLabel empty");
			}
		} else {
			document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>URI error</b>";
			console.error("URI error");
		}
	}
	
	// BlankNode with RDF types if check = true
	if (check==true) {
		var TurtleInput = '_:bnode <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://purl.org/dc/dcmitype/PhysicalObject>';
		TurtleInput += ",<http://www.w3.org/2004/02/skos/core#Concept>";
		TurtleInput += ",<http://www.w3.org/2000/01/rdf-schema#Resource>";
		TurtleInput += ",<http://www.w3.org/2002/07/owl#Thing> .";
		console.info(TurtleInput);
		createNewSemanticObject(TurtleInput);
	}
}

// Create Semantic Object and Annotation Object
ANNO.createAnnotationSemanticObject = function() {
	// Checks
	var check = true;
	var uri1 = document.getElementById('uri1_check');
	var uri2 = document.getElementById('uri2_check');
	var uri3 = document.getElementById('uri3_check');
	var pl = document.getElementById('pl_check');
	if (uri1.checked) {
		if (UTILS.HTTPverification(document.getElementById("uri1").value)) {
			check = true;
		} else {
			check = false;
			document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>URI starts not with http://</b>";
			console.error("URI starts not with http://");
		}
	}
	if (uri2.checked) {
		if (check==true) {
			if (UTILS.HTTPverification(document.getElementById("uri2").value)) {
				check = true;
			} else {
				check = false;
				document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>URI starts not with http://</b>";
				console.error("URI starts not with http://");
			}
		} else {
			document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>URI error</b>";
			console.error("URI error");
		}
	}
	if (uri3.checked) {
		if (check==true) {
			if (UTILS.HTTPverification(document.getElementById("uri3").value)) {
				check = true;
			} else {
				check = false;
				document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>URI starts not with http://</b>";
				console.error("URI starts not with http://");
			}
		} else {
			document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>URI error</b>";
			console.error("URI error");
		}
	}
	if (pl.checked) {
		if (check==true) {
			if (document.getElementById("prefLabel").value != "" && document.getElementById("prefLabelLang").value != "") {
				check = true;
			} else {
				check = false;
				document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>prefLabel empty</b>";
				console.error("prefLabel empty");
			}
		} else {
			document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>URI error</b>";
			console.error("URI error");
		}
	}
	
	// BlankNode with RDF types if check = true
	if (check==true) {
			var d = new Date();
			var n = d.toISOString();
			// BlankNode with Annotation metadata
			var TurtleInput = '_:bnode <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/ns/oa#Annotation>';
			TurtleInput += ';<http://www.w3.org/ns/oa#motivatedBy> <http://www.w3.org/ns/oa#describing>';
			TurtleInput += ';<http://www.w3.org/ns/oa#annotatedAt> "'+n+'"^^<http://www.w3.org/2001/XMLSchema#dateTime>';
			TurtleInput += ';<http://www.w3.org/ns/oa#annotatedBy> <'+document.getElementById("agent").value.split(" : ")[1]+'>';
			// Target --> Semantic Object
			TurtleInput += ';<http://www.w3.org/ns/oa#hasTarget> <'+document.getElementById("semobj").value.split(" : ")[1]+'> ';
			// Body --> BlankNode
			TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
			// BlankNode Body with SKOS Label, Labeling and Feature Connection
			TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
			TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
			TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
			TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
			//Connect feature
			var faet = document.getElementById('feature_check');
			if (faet.checked) {
				TurtleInput += ';<http://www.w3.org/2004/02/skos/core#relatedMatch> <'+document.getElementById("feature").value+'>';
			}
			// Label set?
			var lab = document.getElementById('label_check');
			if (lab.checked) {
				TurtleInput += ';<http://www.w3.org/2004/02/skos/core#exactMatch> <'+document.getElementById("label").value.split(" : ")[1]+'>';
			}
			// prefLabel set?
			var pl = document.getElementById('pl_check');
			if (pl.checked) {
				TurtleInput += ';<http://www.w3.org/2004/02/skos/core#prefLabel> "'+document.getElementById("prefLabel").value+'"@'+document.getElementById("prefLabelLang").value;
			}
			// altLabel set?
			var al = document.getElementById('al_check');
			if (al.checked) {
				TurtleInput += ';<http://www.w3.org/2004/02/skos/core#altLabel> "'+document.getElementById("altLabel").value+'"@'+document.getElementById("altLabelLang").value;
			}
			// scopeNote set?
			var sn = document.getElementById('sn_check');
			if (sn.checked) {
				TurtleInput += ';<http://www.w3.org/2004/02/skos/core#scopeNote> "'+document.getElementById("scopeNote").value+'"@'+document.getElementById("scopeNoteLang").value;
			}
			// End of BlankNode
			TurtleInput += ' ]';
			// BlankNode ExpertData
			var expertData = document.getElementById('ed_check');
			if (expertData.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("predicate").value+'> <'+document.getElementById("resource").value.split(" : ")[1]+'>';
				TurtleInput += ' ]';
			} 
			// BlankNode URI1
			var uri1 = document.getElementById('uri1_check');
			if (uri1.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("predicate1").value+'> <'+document.getElementById("uri1").value+'>';
				TurtleInput += ' ]';
			} 
			// BlankNode URI2
			var uri2 = document.getElementById('uri2_check');
			if (uri2.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("predicate2").value+'> <'+document.getElementById("uri2").value+'>';
				TurtleInput += ' ]';
			} 
			// BlankNode URI3
			var uri3 = document.getElementById('uri3_check');
			if (uri3.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("predicate3").value+'> <'+document.getElementById("uri3").value+'>';
				TurtleInput += ' ]';
			} 
			// BlankNode Lit1
			var lit1 = document.getElementById('lit1_check');
			if (lit1.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("literal1").value+'> "'+document.getElementById("lit1").value+'"';
				TurtleInput += ' ]';
			} 
			// BlankNode Lit2
			var lit2 = document.getElementById('lit2_check');
			if (lit2.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("literal2").value+'> "'+document.getElementById("lit2").value+'"';
				TurtleInput += ' ]';
			} 
			// BlankNode Lit3
			var lit3 = document.getElementById('lit3_check');
			if (lit3.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("literal3").value+'> "'+document.getElementById("lit3").value+'"';
				TurtleInput += ' ]';
			}
			// BlankNode Lit4
			var lit4 = document.getElementById('lit4_check');
			if (lit4.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("literal4").value+'> "'+document.getElementById("lit4").value+'"^^<http://www.w3.org/2001/XMLSchema#decimal>';
				TurtleInput += ' ]';
			} 
			// End of Turtle
			TurtleInput += ' .';
			console.info(TurtleInput);
			createAnnotationObject(TurtleInput);
	}
}

this.createSemanticObject = function(Turtle) {
    document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>send Semantic Object...</b>";
	var turtle = encodeURIComponent(Turtle);
	$.ajax({
        type: "POST",
        url: URI_semanticObjectService+turtle,
        success: function(xml) {
            document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>send Semantic Object finished....</b>";
			
			// Parse URI
			var SO_URI = xml.getElementsByTagName("newURI");
			for (var i = 0; i < SO_URI.length; i++) {
				SO_URI2 = SO_URI[i].childNodes[0].nodeValue;
			}
			
			document.getElementById("so").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<i>Semantic Object: "+SO_URI2+"</i>";
			var d = new Date();
			var n = d.toISOString();
			// BlankNode with Annotation metadata
			var TurtleInput = '_:bnode <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/ns/oa#Annotation>';
			TurtleInput += ';<http://www.w3.org/ns/oa#motivatedBy> <http://www.w3.org/ns/oa#describing>';
			TurtleInput += ';<http://www.w3.org/ns/oa#annotatedAt> "'+n+'"^^<http://www.w3.org/2001/XMLSchema#dateTime>';
			TurtleInput += ';<http://www.w3.org/ns/oa#annotatedBy> <'+document.getElementById("agent").value.split(" : ")[1]+'>';
			// Target --> Semantic Object
			TurtleInput += ';<http://www.w3.org/ns/oa#hasTarget> <'+SO_URI2+'> ';
			// Body --> BlankNode
			TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
			// BlankNode Body with SKOS Label, Labeling and Feature Connection
			TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
			TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
			//Connect feature
			TurtleInput += ';<http://www.w3.org/2004/02/skos/core#relatedMatch> <'+document.getElementById("feature").value+'>';
			// Label set?
			var lab = document.getElementById('label_check');
			if (lab.checked) {
				TurtleInput += ';<http://www.w3.org/2004/02/skos/core#exactMatch> <'+document.getElementById("label").value.split(" : ")[1]+'>';
			}
			// prefLabel set?
			var pl = document.getElementById('pl_check');
			if (pl.checked) {
				TurtleInput += ';<http://www.w3.org/2004/02/skos/core#prefLabel> "'+document.getElementById("prefLabel").value+'"@'+document.getElementById("prefLabelLang").value;
			}
			// altLabel set?
			var al = document.getElementById('al_check');
			if (al.checked) {
				TurtleInput += ';<http://www.w3.org/2004/02/skos/core#altLabel> "'+document.getElementById("altLabel").value+'"@'+document.getElementById("altLabelLang").value;
			}
			// scopeNote set?
			var sn = document.getElementById('sn_check');
			if (sn.checked) {
				TurtleInput += ';<http://www.w3.org/2004/02/skos/core#scopeNote> "'+document.getElementById("scopeNote").value+'"@'+document.getElementById("scopeNoteLang").value;
			}
			// End of BlankNode
			TurtleInput += ' ]';
			// BlankNode ExpertData
			var expertData = document.getElementById('ed_check');
			if (expertData.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("predicate").value+'> <'+document.getElementById("resource").value.split(" : ")[1]+'>';
				TurtleInput += ' ]';
			} 
			// BlankNode URI1
			var uri1 = document.getElementById('uri1_check');
			if (uri1.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ';<'+document.getElementById("predicate1").value+'> <'+document.getElementById("uri1").value+'>';
				TurtleInput += ' ]';
			} 
			// BlankNode URI2
			var uri2 = document.getElementById('uri2_check');
			if (uri2.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("predicate2").value+'> <'+document.getElementById("uri2").value+'>';
				TurtleInput += ' ]';
			} 
			// BlankNode URI3
			var uri3 = document.getElementById('uri3_check');
			if (uri3.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("predicate3").value+'> <'+document.getElementById("uri3").value+'>';
				TurtleInput += ' ]';
			} 
			// BlankNode Lit1
			var lit1 = document.getElementById('lit1_check');
			if (lit1.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("literal1").value+'> "'+document.getElementById("lit1").value+'"';
				TurtleInput += ' ]';
			} 
			// BlankNode Lit2
			var lit2 = document.getElementById('lit2_check');
			if (lit2.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("literal2").value+'> "'+document.getElementById("lit2").value+'"';
				TurtleInput += ' ]';
			} 
			// BlankNode Lit3
			var lit3 = document.getElementById('lit3_check');
			if (lit3.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("literal3").value+'> "'+document.getElementById("lit3").value+'"';
				TurtleInput += ' ]';
			}
			// BlankNode Lit4
			var lit4 = document.getElementById('lit4_check');
			if (lit4.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("literal4").value+'> "'+document.getElementById("lit4").value+'"';
				TurtleInput += ' ]';
			} 
			// End of Turtle
			TurtleInput += ' .';
			console.info(TurtleInput);
			createAnnotationObject(TurtleInput);
        },
        error: function(err) {
            document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>error createSemanticObject: "+err.toString()+"</b>";
        }
    });
}

this.createNewSemanticObject = function(Turtle) {
    document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>send Semantic Object...</b>";
	var turtle = encodeURIComponent(Turtle);
	$.ajax({
        type: "POST",
        url: URI_semanticObjectService+turtle,
        success: function(xml) {
            document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>send Semantic Object finished....</b>";
			
			// Parse URI
			var SO_URI = xml.getElementsByTagName("newURI");
			for (var i = 0; i < SO_URI.length; i++) {
				SO_URI2 = SO_URI[i].childNodes[0].nodeValue;
			}
			
			document.getElementById("so").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<i>Semantic Object: "+SO_URI2+"</i>";
			var d = new Date();
			var n = d.toISOString();
			// BlankNode with Annotation metadata
			var TurtleInput = '_:bnode <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/ns/oa#Annotation>';
			TurtleInput += ';<http://www.w3.org/ns/oa#motivatedBy> <http://www.w3.org/ns/oa#describing>';
			TurtleInput += ';<http://www.w3.org/ns/oa#annotatedAt> "'+n+'"^^<http://www.w3.org/2001/XMLSchema#dateTime>';
			TurtleInput += ';<http://www.w3.org/ns/oa#annotatedBy> <'+document.getElementById("agent").value.split(" : ")[1]+'>';
			// Target --> Semantic Object
			TurtleInput += ';<http://www.w3.org/ns/oa#hasTarget> <'+SO_URI2+'> ';
			// Body --> BlankNode
			TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
			// BlankNode Body with SKOS Label, Labeling and Feature Connection
			TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
			TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
			//Connect feature
			var feat = document.getElementById('feature_check');
			if (feat.checked) {
				TurtleInput += ';<http://www.w3.org/2004/02/skos/core#relatedMatch> <'+document.getElementById("feature").value+'>';
			}
			// Label set?
			var lab = document.getElementById('label_check');
			if (lab.checked) {
				TurtleInput += ';<http://www.w3.org/2004/02/skos/core#exactMatch> <'+document.getElementById("label").value.split(" : ")[1]+'>';
			}
			// prefLabel set?
			var pl = document.getElementById('pl_check');
			if (pl.checked) {
				TurtleInput += ';<http://www.w3.org/2004/02/skos/core#prefLabel> "'+document.getElementById("prefLabel").value+'"@'+document.getElementById("prefLabelLang").value;
			}
			// altLabel set?
			var al = document.getElementById('al_check');
			if (al.checked) {
				TurtleInput += ';<http://www.w3.org/2004/02/skos/core#altLabel> "'+document.getElementById("altLabel").value+'"@'+document.getElementById("altLabelLang").value;
			}
			// scopeNote set?
			var sn = document.getElementById('sn_check');
			if (sn.checked) {
				TurtleInput += ';<http://www.w3.org/2004/02/skos/core#scopeNote> "'+document.getElementById("scopeNote").value+'"@'+document.getElementById("scopeNoteLang").value;
			}
			// End of BlankNode
			TurtleInput += ' ]';
			// BlankNode ExpertData
			var expertData = document.getElementById('ed_check');
			if (expertData.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("predicate").value+'> <'+document.getElementById("resource").value.split(" : ")[1]+'>';
				TurtleInput += ' ]';
			} 
			// BlankNode URI1
			var uri1 = document.getElementById('uri1_check');
			if (uri1.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ';<'+document.getElementById("predicate1").value+'> <'+document.getElementById("uri1").value+'>';
				TurtleInput += ' ]';
			} 
			// BlankNode URI2
			var uri2 = document.getElementById('uri2_check');
			if (uri2.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("predicate2").value+'> <'+document.getElementById("uri2").value+'>';
				TurtleInput += ' ]';
			} 
			// BlankNode URI3
			var uri3 = document.getElementById('uri3_check');
			if (uri3.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("predicate3").value+'> <'+document.getElementById("uri3").value+'>';
				TurtleInput += ' ]';
			} 
			// BlankNode Lit1
			var lit1 = document.getElementById('lit1_check');
			if (lit1.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("literal1").value+'> "'+document.getElementById("lit1").value+'"';
				TurtleInput += ' ]';
			} 
			// BlankNode Lit2
			var lit2 = document.getElementById('lit2_check');
			if (lit2.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("literal2").value+'> "'+document.getElementById("lit2").value+'"';
				TurtleInput += ' ]';
			} 
			// BlankNode Lit3
			var lit3 = document.getElementById('lit3_check');
			if (lit3.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("literal3").value+'> "'+document.getElementById("lit3").value+'"';
				TurtleInput += ' ]';
			}
			// BlankNode Lit4
			var lit4 = document.getElementById('lit4_check');
			if (lit4.checked){
				TurtleInput += ';<http://www.w3.org/ns/oa#hasBody>';
				TurtleInput += '[ <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2004/03/trix/rdfg-1/Graph>';
				TurtleInput += ',<http://www.w3.org/2004/02/skos/core#Concept>';
				TurtleInput += ',<http://www.w3.org/2000/01/rdf-schema#Resource>';
				TurtleInput += ',<http://www.w3.org/2002/07/owl#Thing>';
				TurtleInput += ';<'+document.getElementById("literal4").value+'> "'+document.getElementById("lit4").value+'"';
				TurtleInput += ' ]';
			} 
			// End of Turtle
			TurtleInput += ' .';
			console.info(TurtleInput);
			createAnnotationObject(TurtleInput);
        },
        error: function(err) {
            document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>error createSemanticObject: "+err.toString()+"</b>";
        }
    });
}

this.createAnnotationObject = function(Turtle) {
    document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>send Annotation Object...</b>";
	var turtle = encodeURIComponent(Turtle);
	$.ajax({
        type: "POST",
        url: URI_semanticObjectService+turtle,
        success: function(xml) {
            document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>send Annotation Object finished....</b>";
			// Parse URI
			var SO_URI = xml.getElementsByTagName("newURI");
			for (var i = 0; i < SO_URI.length; i++) {
				SO_URI2 = SO_URI[i].childNodes[0].nodeValue;
			}
			document.getElementById("a").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<i>Annotation Object: "+SO_URI2+"</i>";
			document.getElementById("semobj").options.length = 0;
			SPARQL.semanticobjects("SELECT DISTINCT ?so ?prefLabel WHERE { ?bn <http://www.w3.org/2004/02/skos/core#prefLabel> ?prefLabel . ?a <http://www.w3.org/ns/oa#hasBody> ?bn . ?a <http://www.w3.org/ns/oa#hasTarget> ?so . ?so <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://purl.org/dc/dcmitype/PhysicalObject> . } ORDER BY ASC(?prefLabel)");
        },
        error: function(err) {
            document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>error createSemanticObject: "+err.toString()+"</b>";
        }
    });
}

// Create Semantic Object and Annotation Object
ANNO.createRelation = function() {
	var d = new Date();
	var n = d.toISOString();
	var TurtleInput = '_:bnode <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/ns/oa#Annotation>';
	TurtleInput += ';<http://www.w3.org/ns/oa#motivatedBy> <http://www.w3.org/ns/oa#linking>';
	TurtleInput += ';<http://www.w3.org/ns/oa#annotatedAt> "'+n+'"^^<http://www.w3.org/2001/XMLSchema#dateTime>';
	TurtleInput += ';<http://www.w3.org/ns/oa#annotatedBy> <'+document.getElementById("agent").value.split(" : ")[1]+'>';
	TurtleInput += ';<http://www.w3.org/ns/oa#hasTarget> <'+document.getElementById("semobj").value.split(" : ")[1]+'> .';
	TurtleInput += "<"+document.getElementById("semobj").value.split(" : ")[1]+"> <"+document.getElementById("predrelation").value+"> <"+document.getElementById("semobj2").value.split(" : ")[1]+"> .";
	TurtleInput += "<"+document.getElementById("semobj2").value.split(" : ")[1]+"> <"+document.getElementById("predrelation").value+"> <"+document.getElementById("semobj").value.split(" : ")[1]+"> .";
	console.info(TurtleInput);
	createAnnotationObject(TurtleInput);
}

// Delete Annotation
ANNO.deleteAnnotation = function() {
	var result = confirm("Annotation wirklich l&ouml;schen?");
	var anno = document.getElementById("anno").value.split(" : ")[1];
	var motivation = document.getElementById("anno").value.split(" : ")[2];
	if (result==true) {
		console.info("delete: "+anno);
		//#DELETE blank node und relationen und alle metadaten zur annotation
		//DELETE WHERE {
			//<anno> <http://www.w3.org/ns/oa#hasBody> ?body .
			//?body ?predicate ?object .
			//<anno> ?predicate2 ?object2 .
		//}
		var URL = "http://adwserv58.adwudlit.uni-mainz.de/openrdf-workbench/repositories/thiery/update";
		var query = "DELETE%20WHERE%20";
		if (motivation=="describing") {
			var data = "{ <"+anno+"> <http://www.w3.org/ns/oa#hasBody> ?body . ?body ?predicate ?object . <"+anno+"> ?predicate2 ?object2 . }";
			data = encodeURIComponent(data);
		} else if (motivation=="linking") {
			var data = "{ <"+anno+"> <http://www.w3.org/ns/oa#hasTarget> ?target . ?target ?predicate ?so2 . ?so2 ?predicate ?target . <"+anno+"> ?predicate2 ?object .}";
			data = encodeURIComponent(data);
		}
		console.info(query+data);
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("POST",URL + "?update=" + query+data,true);
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4) {
				if (xmlhttp.status >= 200 && xmlhttp.status < 300) {
					document.getElementById("annometa").innerHTML = '<b></b>';
					SPARQL.annotations("SELECT ?anno ?date ?motivation WHERE { ?anno <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/ns/oa#Annotation> . ?anno <http://www.w3.org/ns/oa#annotatedAt> ?date. ?anno <http://www.w3.org/ns/oa#motivatedBy> ?motivation. } ORDER BY DESC(?date)");
				} else {
					document.getElementById("annometa").innerHTML = '<b></b>';
					console.error("TripleStoreError range <200 or >300");
				}
			}
		}
		xmlhttp.send();
	} else {
		console.info("Annotation "+anno+" nicht gelöscht!");
	}
	
}