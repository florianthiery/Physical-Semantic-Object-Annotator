var UTILS = {}; // Namespace

UTILS.addOption = function(ID, TEXT) {
	var select = document.getElementById(ID);
	var option = document.createElement("option");
	option.text = TEXT;
	select.add(option);
}

UTILS.raiseEvent = function(eventType, elementID) { 
    var o = document.getElementById(elementID); 
    if (document.createEvent) { 
        var evt = document.createEvent("Events"); 
        evt.initEvent(eventType, true, true); 
        o.dispatchEvent(evt); 
    } 
    else if (document.createEventObject) 
    {
        var evt = document.createEventObject(); 
        o.fireEvent('on' + eventType, evt); 
    } 
    o = null;
}

UTILS.HTTPverification = function(uri) { 
    if (uri.indexOf("http://") > -1) {
		return true;
	} else {
		return false;
	}
}