
Std.ui.module("ToolTip",{parent:"widget",events:"sideChange",option:{level:2,defaultClass:"StdUI_ToolTip",boxShadow:!0,value:null,renderTo:"",arrow:!0,arrowOffset:10,side:"top-center",theme:"default",iframe:null,html:null,url:null,width:"auto",height:"auto",selector:null,tabIndex:null,contentPadding:12},extend:{render:function(){var e=this;e[1].on("load",function(t){e.relocate(),e.emit("load",t)}),e.call_opts({selector:null,boxShadow:!0},!0),e.call_opts(["contentPadding"])},beforeRender:function(){var i=this,o=i.contentPadding();i[1].render(),Std.each(["paddingTop","paddingRight","paddingBottom","paddingLeft"],function(t,e){i[1].boxSize[e]=o})}},protected:{relocate:function(){var t=this,e=t.side().split("-"),i=t[2].removeStyle("left top").width(),o=t[2].height(),n=e[0],e=e[1],r=0,a=0,s=t.opts.arrowOffset;return"top"==n||"bottom"==n?("left"==e?a=s:"center"==e?a=(t.width()-i)/2:"right"==e&&(a=t.width()-i-s),t[2].css("left",a)):"left"!=n&&"right"!=n||("top"==e?r=s:"center"==e?r=(t.height()-o)/2:"bottom"==e&&(r=t.height()-o-s),t[2].css("top",r)),t}},public:{target:function(t){return this.opt("target",t)},arrowWidth:function(){return this.opts.arrow?this[2].width():0},arrowHeight:function(){return this.opts.arrow?this[2].height():0},contentPadding:function(i){var o=this;return this.opt("contentPadding",i,function(){o.rendered&&(Std.each(["paddingTop","paddingRight","paddingBottom","paddingLeft"],function(t,e){o[1].boxSize[e]=i}),o[1]&&o[1][0].css("padding",i),o[1].updateLayout(),o.relocate())})},boxShadow:function(t){return this.opt("boxShadow",t,function(){!1===t?this[1].css("boxShadow","none"):!0===t?this[1].removeStyle("boxShadow"):isString(t)&&this[1].css("boxShadow",t)})},iframe:function(t){var e=this;return e.opt("iframe",t,function(){e[1].iframe(t)})},html:function(t){var e=this;return e.opt("html",t,function(){e[1].html(t)})},layout:function(t){var e=this;return void 0===t?e[1].layout():(e[1].layout(t),e)},selector:function(e){var i=this;return i.opt("selector",e,function(){var t=Std.dom(e);null!==t&&i[1].html(t.html())})},url:function(e){var i=this;return i.opt("url",e,function(){var t=newDiv("_loading");i[1].html(t),t.css("marginTop",(i[1].height()-t.height())/2),i.relocate(),"black"===i.opts.theme&&t.addClass("__white__"),Std.ajax.get(e,function(t){i.html(t)})})},side:function(t){var e=this,i=e.opts;return e.opt("side",t,function(){e[1].className("_client _"+t.split("-")[0]),e[2].className("_arrow _"+t.split("-")[0]),i.theme&&(e[1].addClass("__"+i.theme+"__"),e[2].addClass("__"+i.theme+"__")),e.rendered&&(e.relocate(),e.emit("sideChange",t))})},height:function(e){var i=this,t=i.opts,o=t.contentPadding,n=i.boxSize.height+i.boxSize.extraHeight+2,r=n+2*o+2;switch(t.side.split("-")[0]){case"left":case"right":if(void 0===e)return i[1].height()+n+2*o;isNumber(e)&&(e<r&&(e=r),i[1].height(e-n-2*o)),i.relocate();break;case"top":case"bottom":var a=t.arrow?i[2].height()-1:0;if(void 0===e)return i[1].height()+n+a+2*o;isNumber(e)&&(e<r+a&&(e=r+a),i[1].height(e-n-a-2*o))}return i[1].updateLayout(),t.height=e,i.__final__("height",function(t){i.emit("resize",{type:t,height:e})})},width:function(e){var i=this,t=i.opts,o=t.contentPadding,n=i.boxSize.width+i.boxSize.extraWidth+2,r=n+2*o+2;switch(t.side.split("-")[0]){case"left":case"right":var a=t.arrow?i[2].width()-1:0;if(void 0===e)return i[1].width()+n+a+2*o;isNumber(e)&&(e<r+a&&(e=r+a),i[1].width(e-n-a-2*o));break;case"top":case"bottom":if(void 0===e)return i[1].width()+n+2*o;isNumber(e)&&(e<r&&(e=r),i[1].width(e-n-2*o)),i.relocate()}return i[1].updateLayout(),t.width=e,i.__final__("width",function(t){i.emit("resize",{type:t,width:e})})}},main:function(t,e){t[0].append([t[2]=newDiv("_arrow"),t[1]=Std.ui("widget",{className:"_client",initSize:!1,initBoxSize:!1,tabIndex:null})]),e.arrow||t[2].hide(),t.call_opts(["side"])},m:{rule:{content:"html"},html:{create:function(t){var e=t.children(),i=t.attr("std-content");Std.mold.or("html iframe url selector",i)?this[i](t.trimHTML()):"layout"===i?e&&0<e.length&&(i=e[0].attr("std-ui"),isString(i)&&Std.ui(i)&&Std.ui.build(e[0],!1)):this.html(t.html())}}}}),Std.plugin.module("ToolTip",{e:{delegate:null,side:"top-center",event:null,trigger:"hover",renderTo:"body",showDelay:50,hideDelay:50,spacing:5,duration:100,follow:!1,autoHide:!0,autoAdjust:!0},h:{timer:null,lastTarget:null},i:{removeToolTip:function(){var t=this,e=t._tooltip;return e&&e.destroy(),t._tooltip=null,t._docMove&&Std.dom(t.owner).off("mousemove",t._docMove),t._docPress&&Std.dom(document).off("mousedown",t._docPress),t},destroy:function(){var t=this;return t.clearTimer(),t.removeToolTip(),t._currentTarget&&(t._currentTarget=null),isFunction(t._un)&&t._un(),t}},j:{spacing:function(t){return this.opt("spacing",t)},iframe:function(t){return this.opt("iframe",t,function(){this._tooltip&&this._tooltip.iframe(t)})},html:function(t){return this.opt("html",t,function(){this._tooltip&&this._tooltip.html(t)})},url:function(t){return this.opt("url",t,function(){this._tooltip&&this._tooltip.url(t)})},selector:function(t){return this.opt("selector",t,function(){this._tooltip&&this._tooltip.selector(t)})},layout:function(t){return this.opt("layout",t,function(){this._tooltip&&this._tooltip.layout(t)})},update:function(){return this._update&&this._update(),this},clearTimer:function(){return null!==this._timer&&(clearTimeout(this._timer),this._timer=null),this},lastTarget:function(){return this._lastTarget}},k:function(o,a,M){function n(t,e){w=this.offset(),v=this.offsetWidth(),_=this.offsetHeight(),"focus"!==c&&(s=t.pageX,u=t.pageY),h&&h.visible()&&!this.not(g)||(P=a.side,f=i.width(),p=i.height(),a.autoHide&&!m&&(m=!0,i.on("mousedown",C)),o.clearTimer()._timer=setTimeout(function(){h?h[0].appendTo(a.renderTo):O(),h.show().side(P)[0].css({zIndex:Std.ui.status.zIndex+1}).animateTo({opacity:1},a.duration),d&&i.on("mousemove",H),N(),j(),o.emit("visible",!0)},a.showDelay)),this.not(g)&&o.emit("targetChange",o._lastTarget=this),g=this,isFunction(e)&&e.call(g,t)}function t(t,e){var i=[t],t=a.delegate;isString(t)&&i.push(t),i.push(function(t){n.call(this,t,e)}),r.on.apply(r,i),o._un=function(){r.off.apply(r,i)}}var r=Std.dom(M),s=0,u=0,l=0,h=null,d=a.follow,c=a.trigger,i=Std.dom(document),f=0,p=0,m=!1,g=null,v=0,_=0,w=null,e=!1,b=0,S=0,T=!1,y=0,x=0,z=0,P="",H=o._docMove=function(t){s=t.pageX,u=t.pageY,d&&j()},C=o._docPress=function(t){h&&h[0].contains(t.target)||!g||g.contains(t.target)||(L(),i.off("mousedown",C),m=!1)},N=function(){h&&h.visible()&&(l=a.spacing,b=h.width(),S=h.height(),y=h.arrowWidth(),x=h.arrowHeight(),z=h.opts.arrowOffset)},D=function(t,e){var i=0;return t<0?i=1:p<t+S?i=3:e<0?i=4:f<e+b&&(i=2),i},O=function(){var i;i={renderTo:a.renderTo,css:{position:"absolute",left:0,top:0,opacity:0}},Std.each("className theme arrow arrowOffset boxShadow side width height contentPadding renderTo url html iframe layout selector",function(t,e){e in a&&(i[e]=a[e])}),(h=o._tooltip=Std.ui("ToolTip",i)).on({load:function(t){N(),j(),o.emit("load",t)},sideChange:function(t){N(),o.emit("sideChange",t)},mouseenter:function(){T=!0},mouseleave:function(){T=!1,"hover"==c&&a.autoHide&&L()}}).visible(!1),o.emit("render",h)},L=function(){o.clearTimer()._timer=setTimeout(function(){h&&("hover"!=c||!T&&!e||d)&&(h[0].animateTo({opacity:0},a.duration,function(){h.hide(),h[0].detach()}),d&&i.off("mousemove",H),o.emit("visible",!1))},a.hideDelay)},k=function(t,e){var i=0;return"top"==t?i=(d?u-S:w.y-S)-l:"bottom"==t?i=(d?u:w.y+_)+l:"left"!=t&&"right"!=t||("top"==e?i=d?u-x/2-z:w.y:"center"==e?i=d?u-S/2:w.y+(_-S)/2:"bottom"==e&&(i=d?u-S+x/2+z:w.y+_-S)),i},I=function(t,e){var i=0;return"top"==t||"bottom"==t?"left"==e?i=d?s-~~(y/2)-z:w.x:"center"==e?i=d?s-b/2:w.x+(v-b)/2:"right"==e&&(i=d?s-b+y/2+z:w.x+v-b):"left"==t?i=(d?s-b:w.x-b)-l:"right"==t&&(i=(d?s:w.x+v)+l),i},W=function(t,e,i,o,n,r,a){var s="left"===e||"right"===e,u="top"===e||"bottom"===e;1===t?"top"===e?e=1==a?"right":"bottom":s&&(i="top"):2===t?"right"===e?e=1==a?"bottom":"left":u&&(i="right"):3===t?"bottom"===e?e=1==a?"left":"top":s&&(i="bottom"):4===t&&("left"===e?e=1==a?"top":"right":u&&(i="left")),h.side(P=e+"-"+(i=1==a?"center":i)),0==(t=D(o=k(e,i),n=I(e,i)))?h.move(n,o):++r<12&&W(t,e,i,o,n,r,1==a?0:++a)},j=function(){var t,e,i,o=a.side.split("-"),n=o[0],o=o[1],r=a.autoAdjust;h&&(t=k(n,o),e=I(n,o),h[i=0].css("visibility","hidden"),0!=(i=D(t,e))&&r?W(i,n,o,t,e,0,0):(a.side!==P&&h.side(P=a.side),h.move(e,t)),h[0].removeStyle("visibility"))};"none"===c?n.call(r,a.event):"focus"===c?t("focusin"):"click"===c?t(c):"hover"===c&&t("mouseenter",function(t){a.autoHide&&this.once("mouseleave",function(){e=!1,L()})}),o._update=function(){w=g.offset(),v=g.offsetWidth(),_=g.offsetHeight(),h&&(b=h.width(),S=h.height(),j())}}});
"undefined;"