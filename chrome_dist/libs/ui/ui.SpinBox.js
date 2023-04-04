
Std.ui.module("SpinBox",{b:"LineEdit",e:{type:"number",step:1,value:0,minWidth:32,minHeight:12,defaultClass:"StdUI_SpinBox",validator:"Number",float:2},n:{initKeybordEvents:function(){var n=this;n[0].on("keydown",function(e){e=e.keyCode;n.enable()&&(38===e?n.value(float(n.value())+n.step()).select():40===e&&n.value(float(n.value())-n.step()).select())})},initSpinHandle:function(){function e(){t.enable()&&t.value(float(t.value())+t.step()).select()}function n(){t.enable()&&t.value(float(t.value())-t.step()).select()}var t=this,i=t.DOMMap;t[0].append(i.handles=newDiv("_handles").append([i.add=newDiv("_handle _add").mouse({down:e,interval:50,longpress:e}),i.subtract=newDiv("_handle _subtract").mouse({down:n,interval:50,longpress:n})]).on("mousedown",function(e){e.preventDefault()}))}},g:{render:function(){this.initKeybordEvents()}},j:{step:function(e){return this.opt("step",e)},float:function(e){return this.opt("float",e)},value:function(e){var n=this,t=n.opts,i=n.DOMMap;return void 0===e?float(i.input.value()):(isNumber(e)||(e=float(e)),"infinite"!==t.min&&e<t.min&&(e=t.min),"infinite"!==t.max&&e>t.max&&(e=t.max),n.placeHolderVisible(""===e),"number"==t.type?i.input.value(float(e).toFixed(t.float)):"int"==t.type&&i.input.value(int(e)),n)}},k:function(e){e.initSpinHandle()}});
"undefined;"