var IO = {}; // Namespace

IO.readSpatialcontexts = function() {
    document.getElementById("status").innerHTML = "<b>loading spatialcontexts</b>";
	$.ajax({
        type: "GET",
        url: URI_spatialstore,
        dataType: 'xml',
        success: function(xml) {
            document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>loading spatialcontexts finished....</b>";
			// Get Spatialcontexts
			var spatialcontexts = xml.getElementsByTagName("spatialcontext");
			document.getElementById("spatialcontext").options.length = 0;
			for (var i = 0; i < spatialcontexts.length; i++) {
				var sc = spatialcontexts[i].getAttribute("id");
				UTILS.addOption("spatialcontext", sc);
			}
			UTILS.raiseEvent('change', 'spatialcontext');
        },
        error: function(err) {
			document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>error: "+err.toString()+"</b>";
        }
    });
}

IO.readFeatures = function(sc) {
    document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>loading feature URIs...</b>";
	$.ajax({
        type: "GET",
        url: URI_spatialstore+sc+"/features",
        dataType: 'xml',
        success: function(xml) {
            document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>loading feature URIs finished....</b>";
			// Get Spatialcontexts
			var features = xml.getElementsByTagName("feature");
			document.getElementById("feature").options.length = 0;
			var array = new Array();
			for (var i = 0; i < features.length; i++) {
				array.push(features[i].getAttribute("href"));
			}
			array = array.sort();
			for (var i = 0; i < array.length; i++) {
				var f_href = array[i];
				UTILS.addOption("feature", f_href);
			}
			UTILS.raiseEvent("change","feature");
        },
        error: function(err) {
            document.getElementById("status").innerHTML = "<img src='img/info.png' height='25px'>&nbsp;<b>error: "+err.toString()+"</b>";
        }
    });
}

IO.readFeatureImage = function(feature) {
    //console.info(feature + ".png");
	document.getElementById("featureimage").src = feature + ".png";
	document.getElementById("featuretext").innerHTML = '<b>Bild des Feature: <a href="'+feature+'.png" target="_blank">' + feature + '.png</a></b>';
}