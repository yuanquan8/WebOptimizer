
Std.ui.module("TaskBarItem",{b:"Item",c:"active select",e:{activated:!1,selected:!1,defaultClass:"StdUI_Item StdUI_TaskBarItem"},j:{selected:function(t){var e=this;return e.opt("selected",t,function(){e[0].toggleClass("selected",t),e.emit("select",t),e.parent().emit("itemSelect",[t,e],!0)})},activated:function(e){var i=this;return i.opt("activated",e,function(){var t=i.parent();i[0].toggleClass("activated",e),i.emit("active",e),t.emit("itemActive",[e,i],!0),!1===e&&(i.selected()&&t.reselect(i),i[0].removeClass("hover"),i.selected(!1))})},updateStyle:function(t,e,i){var n=this;!n.iconHeight()!==e/2&&n.iconHeight(e/2).iconWidth(e/2),t!==n._spacing&&n[0].marginRight(n._spacing=t),n.height(e).width(i)}},k:function(t){t.call_opts({activated:!1,selected:!1},!0)}}),Std.ui.module("TaskBar",{b:"widget",c:"itemClick itemActive itemSelect itemContextMenu",e:{level:3,defaultClass:"StdUI_TaskBar",items:null,spacing:8,minItemHeight:26,tabIndex:null,multiRow:!0,taskMenu:null},h:{selectedItem:null},n:{initDocEvents:function(){var e=this;Std.dom(document).on("mousedown",e._docEvents=function(t){e._taskMenu&&!e._taskMenu[0].contains(t.target)&&e._taskMenu.hide()})},initTaskMenu:function(){var t=this,e=t.opts;isWidget(e.taskMenu)?t._taskMenu=e.taskMenu:t._taskMenu=Std.ui("Menu",e.taskMenu),isWidget(t._taskMenu)&&(t._taskMenu[0].css("position","absolute"),t._taskMenu.on({itemPress:function(){t._taskMenu.hide()}}).renderTo("body"))},initEvents:function(){var u=this,d=u.opts;u[0].on("contextmenu",function(t){t.preventDefault()}),u[0].on("mouseenter",">.StdUI_Item",function(t){this.mouse({auto:!1,unselect:!0,click:function(t){return u.itemClick(t,this)}})}).on("contextmenu",">.StdUI_Item",function(t){var e,i,n,s,a;!u._taskMenu&&isObject(d.taskMenu)&&u.initTaskMenu(),isWidget(u._taskMenu)&&(e=u._taskMenu.show(),i=t.pageX,n=t.pageY,s=e.width(),a=e.height(),i+s>Std.dom(window).width()&&(i=Std.dom(window).width()-s),e.toForeground()[0].css({top:n-a,left:i})),u.emit("itemContextMenu",[t,this.ui()],!0),t.preventDefault()})}},g:{render:function(){var t=this;isEmpty(t._items)||(Std.each(t._items,function(t,e){e.render()}),t.update()),t.initEvents(),t.initDocEvents()},destroy:function(){var t=this;isWidget(t._taskMenu)&&t._taskMenu.remove(),t._docEvents&&Std.dom(document).off("mousedown",t._docEvents)},remove:function(t){var e,i=this,n=i._items;isNumber(t)?(i.reselect(n[t]),n[t].remove(),n.remove(t)):isWidget(t)&&-1!==(e=n.indexOf(t))&&(i.reselect(t),n[e].remove(),n.remove(e))}},i:{reselect:function(t){for(var e=this,i=e._items,t=i.indexOf(t),n=i.length,s=-1,a=t+1;a<n;a++)if(i[a].activated()){s=a;break}if(-1==s)for(a=t-1;0<=a;a--)if(i[a].activated()){s=a;break}return-1!==s&&(e._selectedItem=i[s].selected(!0)),e},itemClick:function(t,e){var i=this,e=e.index(),n=i._items[e];i.select(n,!n.selected()),i.emit("itemClick",[t,e,n],!0)},createItem:function(t){var e=this,i=null;return isWidget(t)?i=t:isObject(t)?i=Std.ui(t.ui||"TaskBarItem",t||{}):(isString(t)||isNumber(t))&&(i=Std.ui("TaskBarItem",{text:t})),isWidget(i)&&(i.parent(e),i.verticalAlign("middle"),i.appendTo(e[0]),e.rendered&&i.render()),i},update:function(){var t=this,e=t.opts,i=t._items.length,n=t.width()-t.boxSize.width-t.boxSize.extraWidth,s=t.height()-t.boxSize.height-t.boxSize.extraHeight,a=e.spacing,u=5,d=n/u<200?n/(u=Math.floor(n/200)):n/u;return n<d*i&&(2<=s/e.minItemHeight&&e.multiRow?d*(s/=2)>=n&&2*u<=i&&(d=i%2==0?Math.floor(2*n/i):Math.floor(2*n/(i+1))):d=Math.floor((n-a)/i)),Std.each(t._items,function(t,e){e.updateStyle(a,s,d-a<s/2+e.boxSize.width?s/2+e.boxSize.width:d-a)}),t}},j:{items:function(t,e){return this._items.items(t,e)},itemCount:function(){return this._items.length},add:function(t){t=this.createItem(t);return null!==t&&this._items.push(t),t},taskMenu:function(t){var e=this;return e.opt("taskMenu",t,function(){e._taskMenu&&(e._taskMenu.remove(),e._taskMenu=null)})},select:function(t,e){var i=this;if(isNumber(t)&&(t=i._items[t]),!0===e){if(i._selectedItem===t&&t.selected())return i;t.activated()||t.activated(!0),i._selectedItem&&i._selectedItem.selected(!1),i._selectedItem=t.selected(!0)}else t.activated()&&t.activated(!1),t.selected(!1),i.reselect(t);return i},append:function(t){var i=this;return isArray(t)?Std.each(t,function(t,e){i.add(e)}):i.add(t),i.rendered&&i.update(),i}},k:function(t,e){t._items=Std.items(),e.items&&t.append(e.items)},m:{rule:{children:"append"},html:{create:function(t,e){this.append(Std.each(e,function(t,e){var i=e.attr("type"),n=e.attr("std-ui");return n&&Std.ui(n)?Std.ui.build(e,!1):"data"===i?e.html().toObject():Std.options.get(e)},!0))}}}});
"undefined;"