
Std.ui.module("ToolBar",{b:"widget",e:{level:3,minHeight:20,iconWidth:24,iconHeight:24,toolHeight:null,items:null,styleType:"textBesideIcon",defaultClass:"StdUI_ToolBar"},g:{beforeRender:function(){this._items.items(function(t,e){isFunction(e.render)&&e.render()})},height:function(n){var s=this;isNumber(n)||(n=s.height()),s._items.items(function(t,e){var i=0;"sep"===e.ui?e.height(i=n-s.boxSize.height-s.boxSize.extraHeight):i=e.height(),n<i&&e.height(i=n),Std.dom(e).css("marginTop",(n-i)/2)})},enable:function(i){this._items.items(function(t,e){isWidget(e)&&e.enable(i)})},destroy:function(){this.clear()},remove:function(t){var e=this,i=null;isObject(t)&&(t=e._items.indexOf(t)),(isNumber(t)||isString(t))&&(i=e._items.items(t))&&(i.destroy(),e._items.remove(t))}},i:{createTool:function(t){var e=this.opts,i=null,n={iconWidth:e.iconWidth,iconHeight:e.iconHeight};return isWidget(t)?i=t:isString(t)?i=Std.ui("ToolButton",Std.extend(n,{text:t,styleType:e.styleType})):Std.is.action(t)?i=Std.ui("ToolButton",Std.extend(n,{styleType:e.styleType,action:t})):isObject(t)&&(t.ui&&"ToolButton"===t.ui||t.styleType||(n.styleType=e.styleType),i=Std.ui(t.ui||"ToolButton",Std.extend(n,t))),isWidget(i)&&(e.toolHeight&&i.height(e.toolHeight),i.parent(this)),i}},j:{items:function(t,e){return this._items.items(t,e)},itemCount:function(){return this._items.length},insertSep:function(t){return this.insert({ui:"sep"},t)},appendSep:function(){return this.append({ui:"sep"})},prepend:function(t,e){return this.insert(t,e,0)},insert:function(t,e,i){return this._items.insert(t,e,i)},append:function(t,e){var i=this;return isArray(t)?Std.each(t,function(t,e){return i._items.append(e)},!0):i._items.append(t,e)},clear:function(){var t=this._items;return t.items(function(t,e){e.destroy()}),t.clear(),this}},k:function(i,t,e){i.DOMMap={buttons:newDiv("_buttons").appendTo(e)},i._items=Std.items(function(t,e){if(isObject(t=i.createTool(t)))return isString(e.name)?t.name(e.name):isString(t.name())&&(e.name=t.name()),i.DOMMap.buttons.insert(t,e.index),i.rendered&&t.render(),t}),t.items&&i.append(t.items)},m:{rule:{children:"append"},html:{create:function(t){function s(t){var i,e=t.trimHTML(),n=(i={icon:t.attr("std-icon"),name:t.attr("std-name"),action:t.attr("std-action")},Std.each("styleType iconWidth iconHeight",function(t,e){e in o&&(i[e]=o[e])}),i);return isEmpty(e)||(n.text=e),Std.extend(n,Std.options.get(t))}var o=this.opts,r=this;t.children(function(t,e){var i=null,n=e.attr("std-ui"),i=isString(n)&&Std.ui(n)?Std.ui.build(e,!1,{}):s(e);r.append(e.attr("std-name"),i)})}}}});
"undefined;"