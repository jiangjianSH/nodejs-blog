var TextUtil = new Object;

TextUtil.blockChars = function(oTextbox, oEvent, bBlockPaste) {
    var sInvalidChars = oTextbox.getAttribute("invalidchars");
    var sChar = String.fromCharCode(oEvent.charCode);

    var bIsValidChar = sInvalidChars.indexOf(sChar) == -1;
    
    if (bBlockPaste) {
        return bIsValidChar &&  !(oEvent.ctrlKey && sChar == "v"); 
    }else {
        return bIsValidChar || oEvent.ctrlKey;
    }
}; 

TextUtil.allowChars = function(oTextbox, oEvent, bBlockPaste) {
    var svalidChars = oTextbox.getAttribute("validchars");
    var sChar = String.fromCharCode(oEvent.charCode);

    var bIsValidChar = svalidChars.indexOf(sChar) > -1;

    if (bBlockPaste) {
        return bIsValidChar &&  !(oEvent.ctrlKey && sChar == "v"); 
    }else {
        return bIsValidChar || oEvent.ctrlKey;
    }
}; 

TextUtil.blurAllow = function(oTextbox, oEvent) {
    var svalidChars = oTextbox.getAttribute("validchars");
    var arrTextChars = oTextbox.value.split("");
   
    for (var i = 0; i < arrTextChars.length; i++) {
        if (svalidChars.indexOf(arrTextChars[i]) == -1) {
            alert("Character '" + arrTextChars[i] + "' not allowed");
            oTextbox.focus();
            oTextbox.select();
            return ;
        }
    } 
};

TextUtil.numericScroll = function(oTextbox, oEvent) {
    var iValue = oTextbox.value.length == 0 ? 0:parseInt(oTextbox.value);
    if (oEvent.keyCode == 38) {
        oTextbox.value = (iValue + 1);
    } else if (oEvent.keyCode == 40) {
        oTextbox.value = (iValue - 1);
    }
};

TextUtil.autosuggest = function (oTextbox, arrValues, sListboxId) {
    var oListbox = document.getElementById(sListboxId);
    ListUtil.clear(oListbox);
    var arrMatches = TextUtil.autosuggestMatch(oTextbox.value, arrValues);
    for (var i=0; i < arrMatches.length; i++) {
        ListUtil.add(oListbox, arrMatches[i]);
    }
};
