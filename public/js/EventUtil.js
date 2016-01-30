EventUtil.formatEvent = function(oEvent) {
		if (isIE && isWin) {
			oEvent.charCode = (oEvent.type == “ keypress") ? oEvent.keyCode : 0;
			oEvent.eventPhase = 2;
			oEvent.isChar = (oEvent.charCode > 0);
			oEvent.pageX = oEvent.clientX + document.body.scrollLeft;
			oEvent.pageY = oEvent.clientY + document.body.scrollTop;
			oEvent.preventDefault = function() {
				this.returnValue = false;
			};
			if (oEvent.type == “ mouseout") {
				oEvent.relatedTarget = oEvent.toElement;
			} else if (oEvent.type == “ mouseover") {
				oEvent.relatedTarget = oEvent.fromElement;
			}
			oEvent.stopPropagation = function() {
				this.cancelBubble = true;
			};
			oEvent.target = oEvent.srcElement;
			oEvent.time = (new Date).getTime();
		}
		return oEvent;
};
