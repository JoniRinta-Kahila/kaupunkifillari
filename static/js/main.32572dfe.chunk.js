(this.webpackJsonpkaupunkifillari=this.webpackJsonpkaupunkifillari||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(30),o=n.n(c),i=n(10),s=n(15),l=n(49),u=n(155),b=n(156),j=n(78),d=n.n(j),O=n(58),f={},p=Object(r.createContext)(f),h=p.Provider,x=function(){var e=Object(r.useContext)(p);if(e===f)throw new Error("RootStore Consumer present without provider! This likely implies mistake in code, make sure that you have provider somewhere lower in the component tree (usually at or near app.tsx).");return e},v=n(2),m=Object(O.a)((function(){var e=x().stations,t=Object(r.useState)(),n=Object(i.a)(t,2),a=n[0],c=n[1];if(a)return Object(v.jsx)(s.a,{to:"station/".concat(a)});return Object(v.jsxs)("div",{className:d.a.container,children:[Object(v.jsx)("h1",{style:{color:"azure",textAlign:"center"},children:"Kaupunkifillarit"}),Object(v.jsx)(u.a,{disablePortal:!0,onChange:function(e){return c(e.target.textContent)},id:"combo-box-demo",options:e.map((function(e){return e.name})).filter((function(e,t,n){return n.indexOf(e)===t})),sx:{width:300,background:"azure"},renderInput:function(e){return Object(v.jsx)(b.a,Object(l.a)(Object(l.a)({},e),{},{label:"Select your station"}))}})]})})),S=n(47),k=n(82),y=n.n(k),g=n(18),T=Object(O.a)((function(){var e=Object(r.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(Object(g.b)(x())),o=Object(i.a)(c,2),l=o[0],u=o[1];Object(g.c)(x(),(function(e){return u(e)}));var b=Object(s.g)().stationName;return Object(r.useEffect)((function(){a(l.stations.find((function(e){return e.name===b})))}),[l.stations,b]),n?Object(v.jsxs)("div",{className:y.a.container,children:[Object(v.jsx)("h1",{style:{color:"azure"},children:n.name}),Object(v.jsxs)("p",{style:n.bikesAvailable<1?{color:"red"}:{color:"snow"},children:["Bikes available ",n.bikesAvailable]}),Object(v.jsxs)("p",{style:n.active?{color:"greenyellow"}:{color:"red"},children:["Station is ",n.active?"online":"offline"]}),Object(v.jsx)("button",{children:Object(v.jsx)(S.b,{to:"/",children:" Back to main "})})]}):Object(v.jsx)("div",{children:Object(v.jsx)("p",{children:"NO_DATA"})})})),w=n(83),E=n.n(w),N=n(70),A=n.n(N),R=g.d.model("Station",{id:g.d.string,lat:g.d.number,lon:g.d.number,name:g.d.string,bikesAvailable:g.d.number,spacesAvailable:g.d.number,active:g.d.boolean}),C=(g.d.model("Stations",{bikeRentalStations:g.d.array(R)}),g.d.model("Root",{stations:g.d.array(R)}).actions((function(e){return{fetchStationDataAsync:Object(g.a)(A.a.mark((function t(){var n,r,a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://us-central1-kaupunkifillarit-aed04.cloudfunctions.net/api/getStations",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return n=t.sent,t.next=6,n.text();case 6:if(r=t.sent,a=JSON.parse(r),!n.ok){t.next=11;break}return e.stations.replace(a.bikeRentalStations),t.abrupt("return");case 11:console.error("NOTHING TO FETCH"),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error("MST:",t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))}}))),I="ROOT_STORE",_=function(e){var t=e.children,n=x().fetchStationDataAsync;return Object(r.useEffect)((function(){console.log("USEEFFECT"),n();var e=setInterval((function(){console.info("Updating data..."),n()}),6e4);return function(){return clearInterval(e)}}),[n]),Object(v.jsx)("div",{children:t})},J=function(){var e=Object(r.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){a(function(){var e,t,n=g.d.snapshotProcessor(C,{postProcessor:function(e){return Object(l.a)({},e)}});try{var r;t=JSON.parse(null!==(r=localStorage.getItem(I))&&void 0!==r?r:"{}"),e=n.create(t)}catch(a){console.error("MST ERROR:",a),e=n.create()}return Object(g.c)(e,(function(e){return localStorage.setItem(I,JSON.stringify(e))})),e}())}),[]),n?Object(v.jsx)(h,{value:n,children:Object(v.jsx)(_,{children:Object(v.jsx)("div",{className:E.a.container,children:Object(v.jsxs)(s.d,{children:[Object(v.jsx)(s.b,{exact:!0,path:"/",component:m}),Object(v.jsx)(s.b,{exact:!0,path:"/station/:stationName",component:T})]})})})}):null};o.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(S.a,{children:Object(v.jsx)(J,{})})}),document.getElementById("root"))},78:function(e,t,n){},82:function(e,t,n){e.exports={container:"stationInfo_container__3H6VT"}},83:function(e,t,n){e.exports={container:"App_container__eSJ6i"}}},[[116,1,2]]]);
//# sourceMappingURL=main.32572dfe.chunk.js.map