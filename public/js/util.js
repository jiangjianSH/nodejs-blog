var FormUtil = new Object;

FormUtil.focusOnFirst = function() {
    if (document.forms.length > 0 ) {
        for (var i = 0; i < document.forms[0].elements.length; i++) {
            var oField = document.forms[0].elements[i];
            if (oField.type != "hidden") {
                oField.focus();
                return;
            }
        }
    }
}

FormUtil.tabForward = function(oTextbox) {
    var oForm = oTextbox.form;
    if (oForm.elements[oForm.elements.length - 1] != oTextbox 
        && oTextbox.value.length == oTextbox.getAttribute("maxlength")) {
        for (var i = 0; i < oForm.elements.length; i++) {
            if (oForm.elements[i] == oTextbox) {
             for(var j=i+1; j < oForm.elements.length; j++) {
                if (oForm.elements[j].type != "hidden") {
                    oForm.elements[j].focus(); 
                    return;
                }
             }
            return;
            }
        }
    }
}
