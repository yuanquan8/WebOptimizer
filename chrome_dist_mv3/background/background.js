
"use strict";const manifest_version=chrome.runtime.getManifest().manifest_version;if(3===manifest_version)try{importScripts("../config.js","../libs/functions.js")}catch(e){console.log(e)}chrome.storage.local.get({settings:config.settings,auto_clicks:config.auto_clicks,replace_words:config.replace_words},e=>{function _(e){chrome.runtime.lastError}function s(e){try{chrome.privacy.network.webRTCIPHandlingPolicy&&chrome.privacy.network.webRTCIPHandlingPolicy.set({value:e?"disable_non_proxied_udp":"default"}),chrome.privacy.network.webRTCMultipleRoutesEnabled&&chrome.privacy.network.webRTCMultipleRoutesEnabled.set({value:!e,scope:"regular"})}catch(e){}}function n(e){try{chrome.privacy.websites.thirdPartyCookiesAllowed&&chrome.privacy.websites.thirdPartyCookiesAllowed.set({value:!e})}catch(e){console.log(e)}}function a(e){try{chrome.privacy.websites.doNotTrackEnabled&&chrome.privacy.websites.doNotTrackEnabled.set({value:e})}catch(e){console.log(e)}}function r(e){chrome.contentSettings.notifications.set({primaryPattern:"<all_urls>",setting:e?"block":"ask"})}function g(e){config.auto_clicks[e.host]||(config.auto_clicks[e.host]=[]),config.auto_clicks[e.host].push(e)}config.settings=e.settings,config.auto_clicks=e.auto_clicks,config.replace_words=e.replace_words,config.settings.prevent_webrtc_ip_leaks&&s(!0),config.settings.enable_do_not_track&&a(!0),config.settings.disable_third_party_cookies&&n(!0),config.settings.block_notification&&r(!0);chrome.storage.onChanged.addListener(function(e,t){if(e.settings)for(var[o,{oldValue:c,newValue:i}]of Object.entries(e))switch(config.settings[o]=i,o){case"prevent_webrtc_ip_leaks":s(i);break;case"enable_do_not_track":a(i);break;case"disable_third_party_cookies":n(i);break;case"block_notification":r(i)}}),chrome.runtime.onMessage.addListener((e,i,t)=>{if("load_ui"===e.type){var s=i.tab.id;var n=i.frameId;let t=["Label","Button","Edit","Panel","Item","Menu","ComboBox","SpinBox","List","Image","Window","MessageBox","Notify","SwitchBox","ToggleBox","Grid"],o=0,c=e=>{!chrome.runtime.lastError&&e&&e.length?o<t.length?3===manifest_version?chrome.scripting.executeScript({target:{tabId:s},files:["libs/ui/ui."+t[o++]+".js"]},c):chrome.tabs.executeScript(s,{file:"libs/ui/ui."+t[o++]+".js"},c):chrome.tabs.sendMessage(s,{type:"ui_loaded"},{frameId:n},_):console.log(chrome.runtime.lastError)};3===manifest_version?chrome.scripting.executeScript({target:{tabId:s},files:["libs/std.min.js"]},c):chrome.tabs.executeScript(s,{file:"libs/std.min.js"},c)}else if("add_auto_click"===e.type)g(e.values),chrome.storage.local.set({auto_clicks:config.auto_clicks});else if("add_auto_clicks"===e.type){for(var o=0;o<e.values.length;++o)g(e.values[o]);chrome.storage.local.set({auto_clicks:config.auto_clicks})}else if("query_auto_clicks"===e.type)e.host?t(config.auto_clicks[e.host]):t(config.auto_clicks);else if("query_content_auto_clicks"===e.type){i=new URL(e.url);i.host&&config.auto_clicks[i.host]?t(config.auto_clicks[i.host]):t(null)}else if("remove_auto_clicks"===e.type){for(o=0;o<e.items.length;++o){var c=e.items[o],a=config.auto_clicks[c.host];if(a){for(var r=[],l=0;l<a.length;++l){var u=a[l];u.selector===c.selector&&u.path===c.path||r.push(u)}config.auto_clicks[c.host]=r}}chrome.storage.local.set({auto_clicks:config.auto_clicks})}}),chrome.runtime.onConnect.addListener(e=>{e.onMessage.addListener(e=>{})}),3===manifest_version?chrome.contextMenus.removeAll(function(){chrome.contextMenus.create({id:"web_optimizer_auto_click",title:lang?lang("auto_click"):"Auto click",contexts:["all"],documentUrlPatterns:["*://*/*"]}),chrome.contextMenus.onClicked.addListener(function(e,t){"web_optimizer_auto_click"===e.menuItemId&&chrome.tabs.sendMessage(t.id,{type:"auto_click"},{frameId:e.frameId},_)})}):chrome.contextMenus.create({title:lang("auto_click"),contexts:["all"],documentUrlPatterns:["*://*/*"],onclick:function(e,t){chrome.tabs.sendMessage(t.id,{type:"auto_click"},{frameId:e.frameId},_)}})});