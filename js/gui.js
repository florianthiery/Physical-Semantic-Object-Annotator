var GUI = {}; // Namespace

GUI.changeMode = function(MODE) {
	if (MODE=="mode1") {
		showMode1();
	} else if (MODE=="mode2") {
		showMode2();
	} else if (MODE=="mode3") {
		showMode3();
	} else if (MODE=="mode4") {
		showMode4();
	} else if (MODE=="mode5") {
		showMode5();
	} 
}

this.showMode1 = function() { 
    document.getElementById("modeheader").innerHTML = '<h2>Modus: IBR Feature annotieren</h2><img src="img/info.png" height="20px">&nbsp;<i>Erstellt ein neues semantisches HTTP Objekt und verkn&uuml;pft es mit einer Annotation mit einem IBR Feature.</i>';
	document.getElementById("annotator").style.display = 'block';
	document.getElementById("labeling").style.display = 'block';
	document.getElementById("labelinglinking").style.display = 'block';
	document.getElementById("objects").style.display = 'block';
	document.getElementById("objects_feature").style.display = 'block';
	document.getElementById("objects_semantic").style.display = 'none';
	document.getElementById("button_mode1").style.display = 'block';
	document.getElementById("button_mode2").style.display = 'none';
	document.getElementById("button_mode3").style.display = 'none';
	document.getElementById("button_mode4").style.display = 'none';
	document.getElementById("button_mode5").style.display = 'none';
	document.getElementById("button_plusuri1").style.display = 'inline';
	document.getElementById("button_plusuri2").style.display = 'none';
	document.getElementById("button_plusuri3").style.display = 'inline';
	document.getElementById("button_plusuri4").style.display = 'none';
	document.getElementById("button_plusuri5").style.display = 'none';
	document.getElementById("link1").style.display = 'inline';
	document.getElementById("link2").style.display = 'none';
	document.getElementById("link3").style.display = 'none';
	document.getElementById("link4").style.display = 'inline';
	document.getElementById("link5").style.display = 'none';
	document.getElementById("link6").style.display = 'none';
	document.getElementById("link7").style.display = 'none';
	document.getElementById("pl_check").disabled = true;
	document.getElementById("pl_check").checked = true;
	GUI.displayForm("pl_check");
	document.getElementById("al_check").disabled = false;
	document.getElementById("al_check").checked = false;
	GUI.displayForm("al_check");
	document.getElementById("sn_check").disabled = false;
	document.getElementById("sn_check").checked = false;
	GUI.displayForm("sn_check");
	document.getElementById("label_check").disabled = false;
	document.getElementById("label_check").checked = false;
	GUI.displayForm("label_check");
	document.getElementById("ed_check").disabled = false;
	document.getElementById("ed_check").checked = false;
	GUI.displayForm("ed_check");
	document.getElementById("feature_check").disabled = true;
	document.getElementById("feature_check").checked = true;
	GUI.displayForm("feature_check");
	document.getElementById("uri_check").disabled = false;
	document.getElementById("uri_check").checked = false;
	GUI.displayForm("uri_check");
	document.getElementById("literal_check").disabled = false;
	document.getElementById("literal_check").checked = false;
	GUI.displayForm("literal_check");
	document.getElementById("so2").style.display = 'none';
	document.getElementById("annotations").style.display = 'none';
}

this.showMode2 = function() { 
    document.getElementById("modeheader").innerHTML = '<h2>Modus: Semantisches Objekt annotieren</h2><img src="img/info.png" height="20px">&nbsp;<i>Erstellt eine neue Annotation f&uuml;r ein semantisches Objekt.</i>';
	document.getElementById("annotator").style.display = 'block';
	document.getElementById("labeling").style.display = 'block';
	document.getElementById("labelinglinking").style.display = 'block';
	document.getElementById("objects").style.display = 'block';
	document.getElementById("objects_feature").style.display = 'block';
	document.getElementById("objects_semantic").style.display = 'block';
	document.getElementById("button_mode1").style.display = 'none';
	document.getElementById("button_mode2").style.display = 'block';
	document.getElementById("button_mode3").style.display = 'none';
	document.getElementById("button_mode4").style.display = 'none';
	document.getElementById("button_mode5").style.display = 'none';
	document.getElementById("button_plusuri1").style.display = 'inline';
	document.getElementById("button_plusuri2").style.display = 'none';
	document.getElementById("button_plusuri3").style.display = 'inline';
	document.getElementById("button_plusuri4").style.display = 'none';
	document.getElementById("button_plusuri5").style.display = 'none';
	document.getElementById("link1").style.display = 'inline';
	document.getElementById("link2").style.display = 'none';
	document.getElementById("link3").style.display = 'none';
	document.getElementById("link4").style.display = 'inline';
	document.getElementById("link5").style.display = 'none';
	document.getElementById("link6").style.display = 'none';
	document.getElementById("link7").style.display = 'none';
	document.getElementById("pl_check").disabled = false;
	document.getElementById("pl_check").checked = false;
	GUI.displayForm("pl_check");
	document.getElementById("al_check").disabled = false;
	document.getElementById("al_check").checked = false;
	GUI.displayForm("al_check");
	document.getElementById("sn_check").disabled = false;
	document.getElementById("sn_check").checked = false;
	GUI.displayForm("sn_check");
	document.getElementById("label_check").disabled = false;
	document.getElementById("label_check").checked = false;
	GUI.displayForm("label_check");
	document.getElementById("ed_check").disabled = false;
	document.getElementById("ed_check").checked = false;
	GUI.displayForm("ed_check");
	document.getElementById("feature_check").disabled = false;
	document.getElementById("feature_check").checked = false;
	GUI.displayForm("feature_check");
	document.getElementById("uri_check").disabled = false;
	document.getElementById("uri_check").checked = false;
	GUI.displayForm("uri_check");
	document.getElementById("literal_check").disabled = false;
	document.getElementById("literal_check").checked = false;
	GUI.displayForm("literal_check");
	document.getElementById("so2").style.display = 'none';
	document.getElementById("annotations").style.display = 'none';
}

this.showMode3 = function() { 
    document.getElementById("modeheader").innerHTML = '<h2>Modus: Semantisches Objekt erstellen</h2><img src="img/info.png" height="20px">&nbsp;<i>Erstellt ein neues semantisches HTTP Objekt und verkn&uuml;pft ees mit einer Annotation, welches Metadaten enth&auml;lt.</i>';
	document.getElementById("annotator").style.display = 'block';
	document.getElementById("labeling").style.display = 'block';
	document.getElementById("labelinglinking").style.display = 'block';
	document.getElementById("objects").style.display = 'none';
	document.getElementById("objects_feature").style.display = 'none';
	document.getElementById("objects_semantic").style.display = 'none';
	document.getElementById("button_mode1").style.display = 'none';
	document.getElementById("button_mode2").style.display = 'none';
	document.getElementById("button_mode3").style.display = 'block';
	document.getElementById("button_mode4").style.display = 'none';
	document.getElementById("button_mode5").style.display = 'none';
	document.getElementById("button_plusuri1").style.display = 'inline';
	document.getElementById("button_plusuri2").style.display = 'none';
	document.getElementById("button_plusuri3").style.display = 'inline';
	document.getElementById("button_plusuri4").style.display = 'none';
	document.getElementById("button_plusuri5").style.display = 'none';
	document.getElementById("link1").style.display = 'inline';
	document.getElementById("link2").style.display = 'none';
	document.getElementById("link3").style.display = 'none';
	document.getElementById("link4").style.display = 'inline';
	document.getElementById("link5").style.display = 'none';
	document.getElementById("link6").style.display = 'none';
	document.getElementById("link7").style.display = 'none';
	document.getElementById("pl_check").disabled = true;
	document.getElementById("pl_check").checked = true;
	GUI.displayForm("pl_check");
	document.getElementById("al_check").disabled = false;
	document.getElementById("al_check").checked = false;
	GUI.displayForm("al_check");
	document.getElementById("sn_check").disabled = false;
	document.getElementById("sn_check").checked = false;
	GUI.displayForm("sn_check");
	document.getElementById("label_check").disabled = false;
	document.getElementById("label_check").checked = false;
	GUI.displayForm("label_check");
	document.getElementById("ed_check").disabled = false;
	document.getElementById("ed_check").checked = false;
	GUI.displayForm("ed_check");
	document.getElementById("feature_check").disabled = true;
	document.getElementById("feature_check").checked = false;
	GUI.displayForm("feature_check");
	document.getElementById("uri_check").disabled = false;
	document.getElementById("uri_check").checked = false;
	GUI.displayForm("uri_check");
	document.getElementById("literal_check").disabled = false;
	document.getElementById("literal_check").checked = false;
	GUI.displayForm("literal_check");
	document.getElementById("so2").style.display = 'none';
	document.getElementById("annotations").style.display = 'none';
}

this.showMode4 = function() { 
    document.getElementById("modeheader").innerHTML = '<h2>Modus: Semantic Object Relation erstellen</h2><img src="img/info.png" height="20px">&nbsp;<i>Erstellt eine neue Annotation mit beliebiger Beziehung zweier semantischer Objekte.</i>';
	document.getElementById("annotator").style.display = 'block';
	document.getElementById("labeling").style.display = 'block';
	document.getElementById("labelinglinking").style.display = 'block';
	document.getElementById("objects").style.display = 'block';
	document.getElementById("objects_feature").style.display = 'block';
	document.getElementById("objects_semantic").style.display = 'block';
	document.getElementById("button_mode1").style.display = 'none';
	document.getElementById("button_mode2").style.display = 'none';
	document.getElementById("button_mode3").style.display = 'none';
	document.getElementById("button_mode4").style.display = 'block';
	document.getElementById("button_mode5").style.display = 'none';
	document.getElementById("button_plusuri1").style.display = 'inline';
	document.getElementById("button_plusuri2").style.display = 'none';
	document.getElementById("button_plusuri3").style.display = 'inline';
	document.getElementById("button_plusuri4").style.display = 'none';
	document.getElementById("button_plusuri5").style.display = 'none';
	document.getElementById("link1").style.display = 'inline';
	document.getElementById("link2").style.display = 'none';
	document.getElementById("link3").style.display = 'none';
	document.getElementById("link4").style.display = 'inline';
	document.getElementById("link5").style.display = 'none';
	document.getElementById("link6").style.display = 'none';
	document.getElementById("link7").style.display = 'none';
	document.getElementById("pl_check").disabled = true;
	document.getElementById("pl_check").checked = false;
	GUI.displayForm("pl_check");
	document.getElementById("al_check").disabled = true;
	document.getElementById("al_check").checked = false;
	GUI.displayForm("al_check");
	document.getElementById("sn_check").disabled = true;
	document.getElementById("sn_check").checked = false;
	GUI.displayForm("sn_check");
	document.getElementById("label_check").disabled = true;
	document.getElementById("label_check").checked = false;
	GUI.displayForm("label_check");
	document.getElementById("ed_check").disabled = true;
	document.getElementById("ed_check").checked = false;
	GUI.displayForm("ed_check");
	document.getElementById("feature_check").disabled = true;
	document.getElementById("feature_check").checked = false;
	GUI.displayForm("feature_check");
	document.getElementById("uri_check").disabled = true;
	document.getElementById("uri_check").checked = false;
	GUI.displayForm("uri_check");
	document.getElementById("literal_check").disabled = true;
	document.getElementById("literal_check").checked = false;
	GUI.displayForm("literal_check");
	document.getElementById("so2").style.display = 'block';
	document.getElementById("annotations").style.display = 'none';
}

this.showMode5 = function() { 
    SPARQL.annotations("SELECT ?anno ?date ?motivation WHERE { ?anno <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/ns/oa#Annotation> . ?anno <http://www.w3.org/ns/oa#annotatedAt> ?date. ?anno <http://www.w3.org/ns/oa#motivatedBy> ?motivation. } ORDER BY DESC(?date)");
	document.getElementById("modeheader").innerHTML = '<h2>Modus: Annotation l&ouml;schen</h2><img src="img/info.png" height="20px">&nbsp;<i>L&ouml;schen einer Annotation.</i>';
	document.getElementById("annotator").style.display = 'none';
	document.getElementById("labeling").style.display = 'none';
	document.getElementById("labelinglinking").style.display = 'none';
	document.getElementById("objects").style.display = 'block';
	document.getElementById("objects_feature").style.display = 'none';
	document.getElementById("objects_semantic").style.display = 'none';
	document.getElementById("button_mode1").style.display = 'none';
	document.getElementById("button_mode2").style.display = 'none';
	document.getElementById("button_mode3").style.display = 'none';
	document.getElementById("button_mode4").style.display = 'none';
	document.getElementById("button_mode5").style.display = 'block';
	document.getElementById("button_plusuri1").style.display = 'inline';
	document.getElementById("button_plusuri2").style.display = 'none';
	document.getElementById("button_plusuri3").style.display = 'inline';
	document.getElementById("button_plusuri4").style.display = 'none';
	document.getElementById("button_plusuri5").style.display = 'none';
	document.getElementById("link1").style.display = 'inline';
	document.getElementById("link2").style.display = 'none';
	document.getElementById("link3").style.display = 'none';
	document.getElementById("link4").style.display = 'inline';
	document.getElementById("link5").style.display = 'none';
	document.getElementById("link6").style.display = 'none';
	document.getElementById("link7").style.display = 'none';
	document.getElementById("pl_check").disabled = true;
	document.getElementById("pl_check").checked = false;
	GUI.displayForm("pl_check");
	document.getElementById("al_check").disabled = true;
	document.getElementById("al_check").checked = false;
	GUI.displayForm("al_check");
	document.getElementById("sn_check").disabled = true;
	document.getElementById("sn_check").checked = false;
	GUI.displayForm("sn_check");
	document.getElementById("label_check").disabled = true;
	document.getElementById("label_check").checked = false;
	GUI.displayForm("label_check");
	document.getElementById("ed_check").disabled = true;
	document.getElementById("ed_check").checked = false;
	GUI.displayForm("ed_check");
	document.getElementById("feature_check").disabled = true;
	document.getElementById("feature_check").checked = false;
	GUI.displayForm("feature_check");
	document.getElementById("uri_check").disabled = true;
	document.getElementById("uri_check").checked = false;
	GUI.displayForm("uri_check");
	document.getElementById("literal_check").disabled = true;
	document.getElementById("literal_check").checked = false;
	GUI.displayForm("literal_check");
	document.getElementById("so2").style.display = 'none';
	document.getElementById("annotations").style.display = 'block';
}

GUI.addButton = function(button) {
	if(button=="button_plusuri1") {
		document.getElementById("button_plusuri1").style.display = 'none';
		document.getElementById("button_plusuri2").style.display = 'inline';
		document.getElementById("link1").style.display = 'inline';
		document.getElementById("link2").style.display = 'inline';
	} else if(button=="button_plusuri2") {
		document.getElementById("button_plusuri2").style.display = 'none';
		document.getElementById("button_plusuri3").style.display = 'inline';
		document.getElementById("link2").style.display = 'inline';
		document.getElementById("link3").style.display = 'inline';
	} else if(button=="button_plusuri3") {
		document.getElementById("button_plusuri3").style.display = 'none';
		document.getElementById("button_plusuri4").style.display = 'inline';
		document.getElementById("link4").style.display = 'inline';
		document.getElementById("link5").style.display = 'inline';
	} else if(button=="button_plusuri4") {
		document.getElementById("button_plusuri4").style.display = 'none';
		document.getElementById("button_plusuri5").style.display = 'inline';
		document.getElementById("link5").style.display = 'inline';
		document.getElementById("link6").style.display = 'inline';
	} else if(button=="button_plusuri5") {
		document.getElementById("button_plusuri5").style.display = 'none';
		document.getElementById("link6").style.display = 'inline';
		document.getElementById("link7").style.display = 'inline';
	} 
}

GUI.displayForm = function(form) {
	if (form=="sn_check") {
		if (document.getElementById(form).checked) {
			document.getElementById("linksn").style.display = 'block';
		} else {
			document.getElementById("linksn").style.display = 'none';
		}
	} else if (form=="al_check") {
		if (document.getElementById(form).checked) {
			document.getElementById("linkal").style.display = 'block';
		} else {
			document.getElementById("linkal").style.display = 'none';
		}
	} else if (form=="pl_check") {
		if (document.getElementById(form).checked) {
			document.getElementById("linkpl").style.display = 'block';
		} else {
			document.getElementById("linkpl").style.display = 'none';
		}
	} else if (form=="label_check") {
		if (document.getElementById(form).checked) {
			document.getElementById("linklabel").style.display = 'block';
		} else {
			document.getElementById("linklabel").style.display = 'none';
		}
	} else if (form=="ed_check") {
		if (document.getElementById(form).checked) {
			document.getElementById("linked").style.display = 'block';
		} else {
			document.getElementById("linked").style.display = 'none';
		}
	} else if (form=="feature_check") {
		if (document.getElementById(form).checked) {
			document.getElementById("feature1").style.display = 'block';
		} else {
			document.getElementById("feature1").style.display = 'none';
		}
	} else if (form=="uri_check") {
		if (document.getElementById(form).checked) {
			document.getElementById("linktouri").style.display = 'block';
			document.getElementById("uri1_check").checked = true;
		} else {
			document.getElementById("linktouri").style.display = 'none';
			document.getElementById("uri1_check").checked = false;
		}
	} else if (form=="literal_check") {
		if (document.getElementById(form).checked) {
			document.getElementById("linktoliteral").style.display = 'block';
			document.getElementById("lit1_check").checked = true;
		} else {
			document.getElementById("linktoliteral").style.display = 'none';
			document.getElementById("lit1_check").checked = false;
		}
	}
}

GUI.displayAnnoMetadata = function() {
	var URI = document.getElementById("anno").value.split(" : ")[1];
	if(typeof URI !== "undefined") {
		SPARQL.annotation("SELECT ?motivation ?date ?name WHERE { ?anno a <http://www.w3.org/ns/oa#Annotation> . ?anno <http://www.w3.org/ns/oa#motivatedBy> ?motivation . ?anno <http://www.w3.org/ns/oa#annotatedAt> ?date. ?anno <http://www.w3.org/ns/oa#annotatedBy> ?agent. ?agent <http://xmlns.com/foaf/0.1/name> ?name . FILTER (?anno = <"+URI+"> )  }",URI);
	}
}

GUI.init = function() {
	document.getElementById("changelog").innerHTML = VERSION;
}
