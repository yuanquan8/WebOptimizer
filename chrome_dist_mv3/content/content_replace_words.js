
var content_replace_words={word_count:0,timeStamp:0,weak_set:new WeakSet,replace_content:function(n){var e,o=0;for(e in config.replace_words)!function(e,t){n=n.replaceAll(e,function(e){return o++,t})}(e,config.replace_words[e]);return{total:o,text:n}},replace_text_node:function(e){var t;e&&0!==content_replace_words.word_count&&!content_replace_words.weak_set.has(e)&&(content_replace_words.weak_set.add(e),0<(t=content_replace_words.replace_content(e.textContent||"")).total&&(e.textContent=t.text))},replace_title:function(){var e;0!==content_replace_words.word_count&&0<(e=content_replace_words.replace_content(document.title)).total&&(document.title=e.text)}};