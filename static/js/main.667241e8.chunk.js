(this["webpackJsonprealtime-news"]=this["webpackJsonprealtime-news"]||[]).push([[0],{31:function(e,t,n){},51:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n(0),a=n.n(r),i=n(22),o=n.n(i),s=(n(31),n(12)),l=n.n(s),u=n(23),d=n(13),j=n(24),f=n.n(j),m=(n(51),n(52),n(58)),b=n(61),g=n(59),h=n(25),x=n(60);var O=function(){var e=Object(r.useState)(null),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(0),o=Object(d.a)(i,2),s=o[0],j=o[1],O=function(){var e=document.getElementById("heading");if(e&&e.getBoundingClientRect()){var t=document.getElementById("heading").getBoundingClientRect().y;localStorage.setItem("scrollPosition",t.toString())}};return Object(r.useEffect)((function(){localStorage.getItem("scrollPosition")&&"0"!==localStorage.getItem("scrollPosition")&&window.scrollTo(0,Number(localStorage.getItem("scrollPosition")))})),Object(r.useEffect)((function(){return window.addEventListener("scroll",O),function(){window.removeEventListener("scroll",O)}}),[]),Object(r.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://ruanyf.github.io/sina-news/rss.json");case 2:t=e.sent,n=t.data,a(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsx)(m.a,{fluid:"xl",children:n&&Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"text-center mt-2 text-secondary",id:"heading",children:"\u65b0\u6d6a\u5168\u7403\u5b9e\u65f6\u65b0\u95fb\u76f4\u64ad"}),Object(c.jsx)(b.a,{className:"pl-5 pr-5",children:Object(c.jsxs)(b.a.Group,{children:[Object(c.jsx)(b.a.Label,{children:"\u8c03\u8282\u5b57\u4f53\u5927\u5c0f"}),Object(c.jsx)(b.a.Control,{type:"range",custom:!0,min:"1",max:"20",step:"1",value:s,onChange:function(e){var t;t=e.target.value,j(Number(t))}})]})}),Object(c.jsx)(g.a,{className:"justify-content-md-center",children:Object(c.jsx)(h.a,{xs:!0,md:"auto",children:Object(c.jsx)(x.a,{children:n.items.map((function(e,t){return Object(c.jsxs)(x.a.Item,{className:"main-font-size",style:{fontSize:"".concat(20+s,"px")},children:[t+1,".",e.title,"(",Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.url,children:new Date(e.date_modified).toLocaleTimeString()}),")"]},e.id)}))})})})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),p()}},[[56,1,2]]]);
//# sourceMappingURL=main.667241e8.chunk.js.map