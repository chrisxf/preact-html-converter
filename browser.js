var e=require("preact"),r="#text",t="#comment";function n(a,i,u){if(a.nodeName===r||a.nodeName===t)return a.value||a.nodeValue;var l=u.get(a.nodeName.toLowerCase()),s=o(a.attrs||a.attributes,i),c=l||a.tagName.toLowerCase();if(0===a.childNodes.length)return e.h(c,s);for(var d=[],f=0;f<a.childNodes.length;f++)d.push(n(a.childNodes[f],f,u));return e.h(c,s,d)}function o(e,r){var t={key:r};if(!e)return t;for(var n=0;n<e.length;n++)t[e[n].name]="style"===e[n].name?(void 0,e[n].value.split(";").reduce(function(e,r){if(r){for(var t=r.split(":"),n=t[0].trim().split(""),o=0;o<n;o++)"-"===n[o]&&(n[o+1]=n[o+1].toUpperCase(),n[o]=null);e[n.join("")]=t[1]}return e},{})):e[n].value;return t}function a(e){var r=new Map;return{convert:function(t){if("string"!=typeof t)return null;var o=e.parseFragment(t);return o.childNodes.length>0?function(e,r){for(var t=[],o=0;o<e.childNodes.length;o++)t.push(n(e.childNodes[o],o,r));return 1===t.length?t[0]:t}(o,r):null},registerComponent:function(e,t){r.set(e.toLowerCase(),t)}}}var i={parseFragment:function(e){return(new DOMParser).parseFromString(e,"text/html").body},serialize:function(e){return e.innerHTML}};exports.PreactHTMLConverter=function(){return a(i)},exports.convertStatic=function(r){return function(r,t){if("string"!=typeof r)return null;var n=t.parseFragment(r);if(n.childNodes.length>0){var a;if(1===n.childNodes.length){var i=n.childNodes[0];a=e.h(i.nodeName.toLowerCase(),function(e,r){for(var t in r)e[t]=r[t];return e}({dangerouslySetInnerHTML:{__html:t.serialize(i)}},o(i.attrs||i.attributes,0)))}else a=e.h("div",{dangerouslySetInnerHTML:{__html:r}});return a}return null}(r,i)};
