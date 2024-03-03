(self.webpackChunkv4=self.webpackChunkv4||[]).push([[29],{1927:function(e,t,n){"use strict";n.r(t);var r=n(3696),o=n(9215),i=n(1605),a=n.n(i),l=n(9814),u=n(9503),s=n(209),f=n(1626);const c=u.default.main.withConfig({displayName:"pensieve__StyledMainContainer",componentId:"sc-jb5p05-0"})(["& > header{margin-bottom:100px;text-align:center;a{&:hover,&:focus{cursor:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>\") 20 0,auto;}}}footer{",";width:100%;margin-top:20px;}"],(e=>{let{theme:t}=e;return t.mixins.flexBetween})),p=u.default.ul.withConfig({displayName:"pensieve__StyledGrid",componentId:"sc-jb5p05-1"})(["",";display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;margin-top:50px;position:relative;@media (max-width:1080px){grid-template-columns:repeat(auto-fill,minmax(250px,1fr));}"],(e=>{let{theme:t}=e;return t.mixins.resetList})),d=u.default.li.withConfig({displayName:"pensieve__StyledPost",componentId:"sc-jb5p05-2"})(["transition:var(--transition);cursor:default;@media (prefers-reduced-motion:no-preference){&:hover,&:focus-within{.post__inner{transform:translateY(-7px);}}}a{position:relative;z-index:1;}.post__inner{",";",";flex-direction:column;align-items:flex-start;position:relative;height:100%;padding:2rem 1.75rem;border-radius:var(--border-radius);transition:var(--transition);background-color:var(--light-navy);header,a{width:100%;}}.post__icon{",";color:var(--green);margin-bottom:30px;margin-left:-5px;svg{width:40px;height:40px;}}.post__title{margin:0 0 10px;color:var(--lightest-slate);font-size:var(--fz-xxl);a{position:static;&:before{content:'';display:block;position:absolute;z-index:0;width:100%;height:100%;top:0;left:0;}}}.post__desc{color:var(--light-slate);font-size:17px;}.post__date{color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xxs);text-transform:uppercase;}ul.post__tags{display:flex;align-items:flex-end;flex-wrap:wrap;padding:0;margin:0;list-style:none;li{color:var(--green);font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1.75;&:not(:last-of-type){margin-right:15px;}}}"],(e=>{let{theme:t}=e;return t.mixins.boxShadow}),(e=>{let{theme:t}=e;return t.mixins.flexBetween}),(e=>{let{theme:t}=e;return t.mixins.flexBetween}));t.default=e=>{let{location:t,data:n}=e;const i=n.allMarkdownRemark.edges;return r.createElement(s.PE,{location:t},r.createElement(l.m,{title:"Pensieve"}),r.createElement(c,null,r.createElement("header",null,r.createElement("h1",{className:"big-heading"},"Pensieve"),r.createElement("p",{className:"subtitle"},r.createElement("a",{href:"https://www.wizardingworld.com/writing-by-jk-rowling/pensieve"},"a collection of memories"))),r.createElement(p,null,i.length>0&&i.map(((e,t)=>{let{node:n}=e;const{frontmatter:i}=n,{title:l,description:u,slug:s,date:c,tags:p}=i,x=new Date(c).toLocaleDateString();return r.createElement(d,{key:t},r.createElement("div",{className:"post__inner"},r.createElement("header",null,r.createElement("div",{className:"post__icon"},r.createElement(f.Ed,null)),r.createElement("h5",{className:"post__title"},r.createElement(o.Link,{to:s},l)),r.createElement("p",{className:"post__desc"},u)),r.createElement("footer",null,r.createElement("span",{className:"post__date"},x),r.createElement("ul",{className:"post__tags"},p.map(((e,t)=>r.createElement("li",{key:t},r.createElement(o.Link,{to:"/pensieve/tags/"+a()(e)+"/",className:"inline-link"},"#",e))))))))})))))}},2781:function(e,t,n){var r=n(1433).Symbol;e.exports=r},4272:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},2814:function(e){e.exports=function(e,t,n,r){var o=-1,i=null==e?0:e.length;for(r&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n}},8273:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},7148:function(e,t,n){var r=n(2781),o=n(7903),i=n(1738),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},6764:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},6584:function(e,t,n){var r=n(2781),o=n(4272),i=n(6397),a=n(5414),l=r?r.prototype:void 0,u=l?l.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return o(t,e)+"";if(a(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},6983:function(e,t,n){var r=n(2814),o=n(3768),i=n(7385),a=RegExp("['’]","g");e.exports=function(e){return function(t){return r(i(o(t).replace(a,"")),e,"")}}},8795:function(e,t,n){var r=n(6764)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},5380:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},7903:function(e,t,n){var r=n(2781),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,l=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,l),n=e[l];try{e[l]=void 0;var r=!0}catch(u){}var o=a.call(e);return r&&(t?e[l]=n:delete e[l]),o}},5854:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},1738:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},1433:function(e,t,n){var r=n(5380),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},5701:function(e){var t="\\ud800-\\udfff",n="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",o="A-Z\\xc0-\\xd6\\xd8-\\xde",i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+i+"]",l="\\d+",u="["+n+"]",s="["+r+"]",f="[^"+t+i+l+n+r+o+"]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",p="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+o+"]",x="(?:"+s+"|"+f+")",m="(?:"+d+"|"+f+")",g="(?:['’](?:d|ll|m|re|s|t|ve))?",v="(?:['’](?:D|LL|M|RE|S|T|VE))?",h="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",b="[\\ufe0e\\ufe0f]?",y=b+h+("(?:\\u200d(?:"+["[^"+t+"]",c,p].join("|")+")"+b+h+")*"),E="(?:"+[u,c,p].join("|")+")"+y,w=RegExp([d+"?"+s+"+"+g+"(?="+[a,d,"$"].join("|")+")",m+"+"+v+"(?="+[a,d+x,"$"].join("|")+")",d+"?"+x+"+"+g,d+"+"+v,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",l,E].join("|"),"g");e.exports=function(e){return e.match(w)||[]}},3768:function(e,t,n){var r=n(8795),o=n(3506),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(i,r).replace(a,"")}},6397:function(e){var t=Array.isArray;e.exports=t},2934:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},5414:function(e,t,n){var r=n(7148),o=n(2934);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},1605:function(e,t,n){var r=n(6983)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},3506:function(e,t,n){var r=n(6584);e.exports=function(e){return null==e?"":r(e)}},7385:function(e,t,n){var r=n(8273),o=n(5854),i=n(3506),a=n(5701);e.exports=function(e,t,n){return e=i(e),void 0===(t=n?void 0:t)?o(e)?a(e):r(e):e.match(t)||[]}}}]);
//# sourceMappingURL=component---src-pages-pensieve-index-js-7c12d6ef67263cefa8cc.js.map