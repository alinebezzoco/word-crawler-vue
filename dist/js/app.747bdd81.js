(function(e){function t(t){for(var n,u,c=t[0],i=t[1],s=t[2],f=0,d=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("div",{staticClass:"search"},[r("label",{attrs:{for:"name"}},[e._v(" Digite uma palavra ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.word,expression:"word"}],attrs:{id:"name"},domProps:{value:e.word},on:{input:function(t){t.target.composing||(e.word=t.target.value)}}}),r("button",{on:{click:function(t){return t.preventDefault(),e.crawlerThis(t)}}},[e._v(" Buscar ")])]),e.word?r("h2",[e._v(" Palavras relacionadas a "),r("strong",[e._v(e._s(e.word))])]):e._e(),r("ul",e._l(e.results,(function(t){return r("li",{key:t.related_word},[e._v(" "+e._s(t.related_word)+" ")])})),0)])},a=[],u=r("bc3a"),c=r.n(u),i=r("2ef0"),s={data:function(){return{word:"",results:[]}},methods:{crawlerThis:function(){var e=this;c.a.get("https://words-crawler.herokuapp.com/related_words?term="+this.word).then((function(t){e.results=t.data})).catch((function(e){console.log(e)}))}},created:function(){this.debounceName=Object(i["debounce"])(this.crawlerThis,1e3)},watch:{word:function(){this.word&&this.debounceName()}}},l=s,f=(r("034f"),r("7bff"),r("2877")),d=Object(f["a"])(l,o,a,!1,null,"4a616fe0",null),p=d.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(p)}}).$mount("#app")},"7bff":function(e,t,r){"use strict";var n=r("e530"),o=r.n(n);o.a},"85ec":function(e,t,r){},e530:function(e,t,r){}});
//# sourceMappingURL=app.747bdd81.js.map