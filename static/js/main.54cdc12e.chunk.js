(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},24:function(e,t,a){},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),c=a.n(r),s=(a(24),a(12)),o=a(13),l=a(14),m=a(17),u=a(15),d=a(18),p=(a(25),a(16)),h=a.n(p),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={recipes:[],ing:[],gradient:""},a.getData=function(){var e="https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=".concat(a.state.gradient,"&app_id=").concat("caed25b5","&app_key=").concat("09a9d503749688f8a251838da8089fca");h.a.get(e).then((function(e){return a.setState({recipes:e.data.hits})}))},a.handleChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(s.a)({},n,i))},a.handleKeyPress=function(e){"Enter"===e.key&&a.getData()},a.showIng=function(e){var t=e.map((function(e){return i.a.createElement("li",{className:"ingredients-li"},e.text)}));return i.a.createElement("p",{className:"ings"},t)},a.showItems=function(){return a.state.recipes.map((function(e){return e.recipe})).map((function(e){return i.a.createElement("div",{className:"recipe-div"},i.a.createElement("div",{className:"label-img"},i.a.createElement("div",{className:"item-label-div"},e.label),i.a.createElement("div",{className:"img-inner-div"},i.a.createElement("img",{className:"recipe-img",src:e.image}))),i.a.createElement("div",null,i.a.createElement("div",{className:"ingredients-div"},a.showIng(e.ingredients))))}))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this;return console.log(this.state.gradient),i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"app-second-div"},i.a.createElement("input",{className:"input-box",type:"text",name:"gradient",value:this.state.gradient,onChange:function(t){return e.handleChange(t)},placeholder:"Please enter ingredients..",onKeyPress:this.handleKeyPress}),i.a.createElement("button",{className:"submit-button",onClick:this.getData},"Get Recipe"),i.a.createElement("div",null,this.showItems())))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.54cdc12e.chunk.js.map