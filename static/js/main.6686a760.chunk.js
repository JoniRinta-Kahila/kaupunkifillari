(this.webpackJsonpkaupunkifillari=this.webpackJsonpkaupunkifillari||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(30),i=n.n(o),c=n(10),s=n(16),l=n(15),u={},f=Object(a.createContext)(u),d=f.Provider,b=function(){var e=Object(a.useContext)(f);if(e===u)throw new Error("RootStore Consumer present without provider! This likely implies mistake in code, make sure that you have provider somewhere lower in the component tree (usually at or near app.tsx).");return e},j=n(42),v=n(1),O=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(Object(l.b)(b())),i=Object(c.a)(o,2),u=i[0],f=i[1];return Object(l.c)(b(),(function(e){return f(e)})),Object(a.useEffect)((function(){console.info("Favorites ue running ...");var e=u.stations.filter((function(e){var t=u.favorites.find((function(t){return t.favoriteName===e.name}));return e.name===(null===t||void 0===t?void 0:t.favoriteName)}));r(e)}),[u]),u.favorites.length>1?Object(v.jsx)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",width:"300px",margin:"8px"},children:n.map((function(e){return Object(v.jsx)("div",{style:{background:"azure",width:"fit-content",padding:"3px 5px",borderRadius:"5px",margin:"5px"},children:Object(v.jsx)(j.b,{style:{color:"black",textDecoration:"none",fontSize:"20px"},to:"station/".concat(e.name),children:"".concat(e.name,": ").concat(e.bikesAvailable)})})}))}):1===u.favorites.length?Object(v.jsx)(s.a,{to:"station/".concat(u.favorites[0].favoriteName)}):null},p=n(49),x=n(156),m=n(157),h=n(80),y=n.n(h),k=n(58),g=Object(k.a)((function(e){var t=e.displayHeader,n=void 0===t||t,r=b().stations,o=Object(a.useState)(),i=Object(c.a)(o,2),l=i[0],u=i[1];if(l)return Object(v.jsx)(s.a,{to:"/station/".concat(l)});return Object(v.jsxs)("div",{className:y.a.container,children:[n?Object(v.jsx)("h1",{style:{color:"azure",textAlign:"center"},children:"Kaupunkifillarit"}):null,Object(v.jsx)(x.a,{disablePortal:!0,onChange:function(e){return u(e.target.textContent)},id:"combo-box-demo",options:r.map((function(e){return e.name})).filter((function(e,t,n){return n.indexOf(e)===t})),sx:{width:300,background:"azure"},renderInput:function(e){return Object(v.jsx)(m.a,Object(p.a)(Object(p.a)({},e),{},{label:"Valitse polkupy\xf6r\xe4asema"}))}})]})})),S=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(g,{}),Object(v.jsx)(O,{})]})},N=n(83),w=n.n(N),E=n(71),T=Object(k.a)((function(){var e=Object(a.useState)(),t=Object(c.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!1),i=Object(c.a)(o,2),u=i[0],f=i[1],d=b(),j=d.addFavorite,O=d.delFavorite,p=Object(a.useState)(Object(l.b)(b())),x=Object(c.a)(p,2),m=x[0],h=x[1];Object(l.c)(b(),(function(e){return h(e)}));var y=Object(s.g)().stationName;Object(a.useEffect)((function(){console.info("stationInfo ue running ..."),console.info(m.favorites);var e=m.stations.find((function(e){return e.name===y}));if(r(e),n){var t=m.favorites.find((function(e){return e.favoriteName===n.name}));f(!!t)}}),[m.favorites,m.stations,n,y]);return n?Object(v.jsxs)("div",{className:w.a.container,children:[Object(v.jsxs)("span",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[Object(v.jsx)("h1",{style:{color:"azure"},children:n.name}),Object(v.jsx)("i",{onClick:function(){return function(){if(n){var e=m.favorites.find((function(e){return e.favoriteName===n.name}));f(!e),e?O(n.name):j(n.name)}}()},children:u?Object(v.jsx)(E.b,{size:"32",color:"yellow"}):Object(v.jsx)(E.a,{size:"32"})})]}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("p",{style:n.bikesAvailable<1?{color:"red"}:{color:"snow"},children:["Fillareita vapaana ",n.bikesAvailable]}),Object(v.jsxs)("p",{style:n.active?{color:"greenyellow"}:{color:"red"},children:["Asema ",n.active?"on k\xe4yt\xf6ss\xe4":"ei ole k\xe4yt\xf6ss\xe4"]})]}),Object(v.jsx)(g,{displayHeader:!1})]}):Object(v.jsx)("div",{children:Object(v.jsx)("p",{children:"NO_DATA"})})})),A=n(84),C=n.n(A),F=n(70),I=n.n(F),R=l.d.model("Station",{id:l.d.string,lat:l.d.number,lon:l.d.number,name:l.d.string,bikesAvailable:l.d.number,spacesAvailable:l.d.number,active:l.d.boolean}),_=(l.d.model("Stations",{bikeRentalStations:l.d.array(R)}),l.d.model("Favorite",{favoriteName:l.d.maybe(l.d.string)})),z=l.d.model("Root",{stations:l.d.array(R),favorites:l.d.array(_)}).actions((function(e){return{addFavorite:function(t){e.favorites.find((function(e){return e.favoriteName===t}))?console.info(t,"is allready in favorites"):(e.favorites.push({favoriteName:t}),console.log("favorite added"))},delFavorite:function(t){e.favorites.find((function(e){return e.favoriteName===t}))?(e.favorites.replace(e.favorites.filter((function(e){return e.favoriteName!==t}))),console.log("favorite deleted")):console.info(t,"is not part of favoritelist")},fetchStationDataAsync:Object(l.a)(I.a.mark((function t(){var n,a,r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://us-central1-kaupunkifillarit-aed04.cloudfunctions.net/api/getStations",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return n=t.sent,t.next=6,n.text();case 6:if(a=t.sent,r=JSON.parse(a),!n.ok){t.next=11;break}return e.stations.replace(r.bikeRentalStations),t.abrupt("return");case 11:console.error("NOTHING TO FETCH"),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error("MST:",t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))}})),D="ROOT_STORE",J=function(e){var t=e.children,n=b().fetchStationDataAsync;return Object(a.useEffect)((function(){console.log("USEEFFECT"),n();var e=setInterval((function(){console.info("Updating data..."),n()}),6e4);return function(){return clearInterval(e)}}),[n]),Object(v.jsx)("div",{children:t})},H=function(){var e=Object(a.useState)(),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){r(function(){var e,t,n=l.d.snapshotProcessor(z,{postProcessor:function(e){var t=Object(p.a)({},e);return delete t.Stations,t}});try{var a;t=JSON.parse(null!==(a=localStorage.getItem(D))&&void 0!==a?a:"{}"),e=n.create(t)}catch(r){console.error("MST ERROR:",r),e=n.create()}return Object(l.c)(e,(function(e){return localStorage.setItem(D,JSON.stringify(e))})),e}())}),[]),n?Object(v.jsx)(d,{value:n,children:Object(v.jsx)(J,{children:Object(v.jsx)("div",{className:C.a.container,children:Object(v.jsxs)(s.d,{children:[Object(v.jsx)(s.b,{exact:!0,path:"/",component:S}),Object(v.jsx)(s.b,{exact:!0,path:"/search",component:g}),Object(v.jsx)(s.b,{exact:!0,path:"/station/:stationName",component:T})]})})})}):null};i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(j.a,{children:Object(v.jsx)(H,{})})}),document.getElementById("root"))},80:function(e,t,n){},83:function(e,t,n){e.exports={container:"stationInfo_container__3H6VT"}},84:function(e,t,n){e.exports={container:"App_container__eSJ6i"}}},[[117,1,2]]]);
//# sourceMappingURL=main.6686a760.chunk.js.map