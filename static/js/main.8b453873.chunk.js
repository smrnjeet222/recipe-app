(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],[,function(e,a,t){e.exports={recipe:"recipe_recipe__d2qMe",title:"recipe_title__393XA",cont:"recipe_cont__3D4qg",ingr:"recipe_ingr__1jecB",image:"recipe_image__1noiB"}},,,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),n=t(5),i=t.n(n),s=(t(13),t(3)),l=t.n(s),o=t(6),p=t(2),m=t(17),u=(t(15),t(1)),f=t.n(u);function h(e){var a=e.title,t=e.cal,c=e.img,n=e.ingrs,i=e.url;return r.a.createElement("div",{className:f.a.recipe},r.a.createElement("h1",null,r.a.createElement("a",{className:f.a.title,href:i,rel:"noopener noreferrer",target:"_blank"},a)),r.a.createElement("div",{className:f.a.cont},r.a.createElement("ol",{className:f.a.ingr},n.map((function(e){return r.a.createElement("li",{key:Object(m.a)()},e.text)}))),r.a.createElement("img",{className:f.a.image,src:c,alt:"".concat(a,"-img")})),r.a.createElement("h4",null,"Calories: ",parseInt(t)))}var g=function(){var e=["egg","banana","mango","grapes","chocolate","pizza","pasta"],a=Object(c.useState)([]),t=Object(p.a)(a,2),n=t[0],i=t[1],s=Object(c.useState)(""),u=Object(p.a)(s,2),f=u[0],g=u[1],b=Object(c.useState)(e[Math.floor(Math.random()*e.length)]),E=Object(p.a)(b,2),_=E[0],d=E[1],v=function(){var e=Object(o.a)(l.a.mark((function e(){var a,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(_,"&app_id=").concat("c594c7f3","&app_key=").concat("4fbcce559a9d3505fe77f3332ef64359"));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,i(t.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){v()}),[_]);return r.a.createElement("div",{className:"App"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d(f),g("")},className:"search-form"},r.a.createElement("input",{type:"text",className:"search-bar",value:f,onChange:function(e){g(e.target.value)},placeholder:"Search here ...."}),r.a.createElement("button",{className:"search-btn",type:"submit"},"Search")),r.a.createElement("h2",{className:"query"},"Search results for ",_.toUpperCase()),r.a.createElement("div",{className:"recipes"},n.map((function(e){return r.a.createElement(h,{key:Object(m.a)(),title:e.recipe.label,cal:e.recipe.calories,img:e.recipe.image,ingrs:e.recipe.ingredients,url:e.recipe.url})}))))};i.a.render(r.a.createElement(g,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.8b453873.chunk.js.map