(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{18:function(e,t,n){e.exports=n(42)},23:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(11),i=n.n(r),o=(n(23),n(12)),s=n(13),p=n(16),u=n(14),l=n(17),m=(n(24),n(15)),h=n.n(m),d=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(p.a)(this,Object(u.a)(t).call(this))).state={recipes:[]},e}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://api.edamam.com/search?q=".concat("banana","&app_id=").concat("caed25b5","&app_key=").concat("09a9d503749688f8a251838da8089fca");h.a.get(t).then((function(t){return e.setState({recipes:t.data.hits})}))}},{key:"render",value:function(){var e=this.state.recipes.map((function(e){return e.recipe})).map((function(e){return c.a.createElement("div",null,c.a.createElement("div",null,e.label),c.a.createElement("img",{src:e.image}))}));return console.log(this.state.recipes.map((function(e){return e.recipe}))),c.a.createElement("div",{className:"App"},e)}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.fadbe97d.chunk.js.map