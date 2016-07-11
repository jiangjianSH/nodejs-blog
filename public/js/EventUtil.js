/**
 * 添加事件,兼容iE9(但是不传递this参数)
 * @param elem
 * @param type
 * @param handler
 */
function addEvent(elem, type, handler) {
    if (document.addEventListener) {
        var addEvent = function(elem, type, handler) {
            elem.addEventListener(type, handler, false);
        }
        var removeEvent = function(elem, type, handler) {
            elem.removeEventListener(type, handler, false);
        }
    } else {
        var addEvent = function(elem, type, handler) {
            elem.attachEvent("on" + type, handler);
        }
        
        var removeEvent = function(elem, type, handler) {
            elem.detachEvent("on" + type, handler);
        }
    }
}
