// ==UserScript==
// @name           zzzz-MultiRowTab_LiteforFx48.uc.js
// @namespace      http://space.geocities.yahoo.co.jp/gl/alice0775
// @description    Mehrzeilige Tableiste, Experimentelle CSS Version
// @include        main
// @compatibility  Firefox 48
// @author         Alice0775
// @version        2016/08/05 00:00 Firefox 48
// @version        2016/05/01 00:01 hide favicon if busy
// @version        2016/03/09 00:01 Bug 1222490 - Actually remove panorama for Fx45+
// @version        2016/02/09 00:01 workaround css for lwt
// @version        2016/02/09 00:00
// ==/UserScript==
    zzzz_MultiRowTabLite();
function zzzz_MultiRowTabLite() {
    gBrowser.tabContainer._getDropIndex = function(event, isLink) {
        var tabs = this.childNodes;
        var tab = this._getDragTargetTab(event, isLink);
        if (window.getComputedStyle(this).direction == "ltr") {
        	for (let i = tab ? tab._tPos : 0; i < tabs.length; i++) {
                let boxObject = tabs[i].boxObject;
        		if (event.screenX < boxObject.screenX + boxObject.width / 2
                 && event.screenY < boxObject.screenY + boxObject.height) // multirow fix
        			return i;
            }
        } else {
        	for (let i = tab ? tab._tPos : 0; i < tabs.length; i++) {
                let boxObject = tabs[i].boxObject;
        		if (event.screenX > boxObject.screenX + boxObject.width / 2
                 && event.screenY < boxObject.screenY + boxObject.height) // multirow fix
        			return i;
            }
        }
        return tabs.length;
    };

    gBrowser.tabContainer._getDropEffectForTabDrag = function(event){return "";}; // multirow fix: to make the default "dragover" handler does nothing

    gBrowser.tabContainer._onDragOver = function(event) {
        event.preventDefault();
        event.stopPropagation();

        var ind = this._tabDropIndicator;

        var effects = orig_getDropEffectForTabDrag(event);
        if (effects == "link") {
        	let tab = this._getDragTargetTab(event, true);
        	if (tab) {
        		if (!this._dragTime)
        			this._dragTime = Date.now();
        		if (!tab.hasAttribute("pending") && // annoying fix
                    Date.now() >= this._dragTime + this._dragOverDelay)
        			this.selectedItem = tab;
        		ind.collapsed = true;
        		return;
        	}
        }

        var newIndex = this._getDropIndex(event, effects == "link");
        if (newIndex == null)
            return;

        var ltr = (window.getComputedStyle(this).direction == "ltr");
        var rect = this.arrowScrollbox.getBoundingClientRect();
        var newMarginX, newMarginY;
        if (newIndex == this.childNodes.length) {
            let tabRect = this.childNodes[newIndex - 1].getBoundingClientRect();
            if (ltr)
                newMarginX = tabRect.right - rect.left;
            else
                newMarginX = rect.right - tabRect.left;
            newMarginY = tabRect.top + tabRect.height - rect.top - rect.height; // multirow fix
        } else {
            let tabRect = this.childNodes[newIndex].getBoundingClientRect();
            if (ltr)
                newMarginX = tabRect.left - rect.left;
            else
                newMarginX = rect.right - tabRect.right;
            newMarginY = tabRect.top + tabRect.height - rect.top - rect.height; // multirow fix
        }

        ind.collapsed = false;

        newMarginX += ind.clientWidth / 2;
        if (!ltr)
            newMarginX *= -1;

        ind.style.transform = "translate(" + Math.round(newMarginX) + "px," + Math.round(newMarginY) + "px)"; // multirow fix
        ind.style.marginInlineStart = (-ind.clientWidth) + "px";
    };
    gBrowser.tabContainer.addEventListener("dragover", gBrowser.tabContainer._onDragOver, true);

    gBrowser.tabContainer.onDrop = function(event) {
        var newIndex;
        var dt = event.dataTransfer;
        var draggedTab;
        if (dt.mozTypesAt(0)[0] == TAB_DROP_TYPE) {
            draggedTab = dt.mozGetDataAt(TAB_DROP_TYPE, 0);
            if (!draggedTab)
                return;
        }
        var dropEffect = dt.dropEffect;
        if (draggedTab && dropEffect == "copy") {}
        else if (draggedTab && draggedTab.parentNode == this) {
            newIndex = this._getDropIndex(event, false);
            if (newIndex > draggedTab._tPos)
                newIndex--;
            gBrowser.moveTabTo(draggedTab, newIndex);
        }
    };
    gBrowser.tabContainer.addEventListener("drop", function(event){this.onDrop(event);}, true);
}

// copy of the original and overrided _getDropEffectForTabDrag method
function orig_getDropEffectForTabDrag(event) {
    var dt = event.dataTransfer;
    if (dt.mozItemCount == 1) {
        var types = dt.mozTypesAt(0);
        // tabs are always added as the first type
        if (types[0] == TAB_DROP_TYPE) {
            let sourceNode = dt.mozGetDataAt(TAB_DROP_TYPE, 0);
            if (sourceNode instanceof XULElement &&
                sourceNode.localName == "tab" &&
                sourceNode.ownerGlobal.isChromeWindow &&
                sourceNode.ownerDocument.documentElement.getAttribute("windowtype") == "navigator:browser" &&
                sourceNode.ownerGlobal.gBrowser.tabContainer == sourceNode.parentNode) {
                // Do not allow transfering a private tab to a non-private window
                // and vice versa.
                if (PrivateBrowsingUtils.isWindowPrivate(window) !=
                    PrivateBrowsingUtils.isWindowPrivate(sourceNode.ownerGlobal))
                    return "none";

                if (window.gMultiProcessBrowser !=
                    sourceNode.ownerGlobal.gMultiProcessBrowser)
                    return "none";

                return dt.dropEffect == "copy" ? "copy" : "move";
            }
        }
    }

    if (browserDragAndDrop.canDropLink(event)) {
        return "link";
    }
    return "none";
}
