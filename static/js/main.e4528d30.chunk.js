(this.webpackJsonpkaupunkifillari=this.webpackJsonpkaupunkifillari||[]).push([[0],{109:function(e,t,n){},111:function(e,t,n){e.exports={container:"App_container__eSJ6i"}},150:function(e,t,n){"use strict";n.r(t);var a,i=n(1),c=n.n(i),r=n(41),o=n.n(r),s=n(10),l=n(19),j=n(17),b={},d=Object(i.createContext)(b),u=d.Provider,O=function(){var e=Object(i.useContext)(d);if(e===b)throw new Error("RootStore Consumer present without provider! This likely implies mistake in code, make sure that you have provider somewhere lower in the component tree (usually at or near app.tsx).");return e},f=n(32),h=n(2),x=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(Object(j.b)(O())),r=Object(s.a)(c,2),o=r[0],b=r[1];return Object(j.c)(O(),(function(e){return b(e)})),Object(i.useEffect)((function(){var e=o.stations.filter((function(e){var t=o.favorites.find((function(t){return t.name===e.name}));return e.name===(null===t||void 0===t?void 0:t.name)}));a(e)}),[o]),o.favorites.length>1?Object(h.jsx)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",width:"300px",margin:"8px"},children:n.map((function(e){return Object(h.jsx)("div",{style:{background:"azure",width:"fit-content",padding:"3px 5px",borderRadius:"5px",margin:"5px"},children:Object(h.jsx)(f.b,{style:{color:"black",textDecoration:"none",fontSize:"20px"},to:"station/".concat(e.id),children:"".concat(e.name,": ").concat(e.bikesAvailable)})})}))}):1===o.favorites.length?Object(h.jsx)(l.a,{to:"station/".concat(o.favorites[0].id)}):null},v=n(38),p=n(197),m=n(198),k=n(109),y=n.n(k),g=n(62),_=Object(g.a)((function(e){var t=e.displayHeader,n=void 0===t||t,a=O().stations,c=Object(i.useState)(),r=Object(s.a)(c,2),o=r[0],j=r[1];if(o)return Object(h.jsx)(l.a,{to:"/station/".concat(o)});return Object(h.jsxs)("div",{className:y.a.container,children:[n?Object(h.jsx)("h1",{style:{color:"azure",textAlign:"center"},children:"Omat kaupunkifillarit"}):null,Object(h.jsx)(p.a,{renderOption:function(e,t,n){return Object(i.createElement)("li",Object(v.a)(Object(v.a)({},e),{},{key:t.id}),t.name)},disablePortal:!0,onChange:function(e,t){return j(null===t||void 0===t?void 0:t.id)},getOptionLabel:function(e){return e.name},id:"combo-box-demo",options:a.map((function(e){return e})).filter((function(e,t,n){return n.indexOf(e)===t})),sx:{width:300,background:"azure"},renderInput:function(e){return Object(h.jsx)(m.a,Object(v.a)(Object(v.a)({},e),{},{label:"Valitse polkupy\xf6r\xe4asema"}))}})]})})),S=n.p+"static/media/fillari192.9d853bc1.png",A=n(76),w=n.n(A),I=Object(i.createContext)(void 0),N=function(e){var t=e.children,n=Object(i.useState)(),a=Object(s.a)(n,2),c=a[0],r=a[1];return Object(i.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){r({lat:e.coords.latitude,lon:e.coords.longitude})}))}),[]),Object(h.jsx)(I.Provider,{value:{location:c},children:t})},E=function(e,t){var n=function(e){return e*(180/Math.PI)},a=e.lat,i=t.lat,c=e.lon,r=t.lon,o=n(a),s=n(i),l=n(i-a),j=n(r-c),b=Math.sin(l/2)*Math.sin(l/2)+Math.cos(o)*Math.cos(s)*Math.sin(j/2)*Math.sin(j/2);return 6371e3*(2*Math.atan2(Math.sqrt(b),Math.sqrt(1-b)))},z=Object(g.a)((function(){var e=Object(i.useState)(Object(j.b)(O())),t=Object(s.a)(e,2),n=t[0],a=t[1];Object(j.c)(O(),(function(e){return a(e)}));var c=function(){var e=Object(i.useContext)(I);if(void 0===e)throw new Error('Call "useLocationContext" only inside a LocationContextProvider');return e}().location,r=Object(i.useState)([]),o=Object(s.a)(r,2),l=o[0],b=o[1];return Object(i.useEffect)((function(){if(console.log(c),c){var e=n.stations.slice().sort((function(e,t){return E(c,{lat:e.lat,lon:e.lon})-E(c,{lat:t.lat,lon:t.lon})})).slice(0,1);b(e)}}),[c,n.stations]),Object(h.jsxs)("div",{className:w.a.container,children:[Object(h.jsxs)("div",{className:w.a.header,children:[Object(h.jsx)("img",{src:S,alt:"fillari"}),Object(h.jsx)("u",{style:{color:"darkgreen"},children:Object(h.jsx)("h1",{style:{marginTop:0,fontSize:"5vh",color:"#fff"},children:"Omat kaupunkifillarit"})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{style:{margin:0},children:"L\xe4hell\xe4:"}),l.map((function(e){return Object(h.jsx)(f.b,{to:"/station/".concat(e.id),children:e.name})}))]}),Object(h.jsxs)("div",{className:w.a.content,children:[Object(h.jsx)(_,{displayHeader:!1}),Object(h.jsx)(x,{})]}),Object(h.jsx)("div",{className:w.a.footer,children:Object(h.jsxs)("p",{children:["Asenna mobiilisovellus ",Object(h.jsx)(f.b,{to:"/help",children:"OHJE"})]})})]})})),C=n(58),R=n.n(C),F=n(98),M=Object(g.a)((function(){var e=Object(i.useState)(),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!1),r=Object(s.a)(c,2),o=r[0],b=r[1],d=O(),u=d.addFavorite,x=d.delFavorite,v=Object(i.useState)(Object(j.b)(O())),p=Object(s.a)(v,2),m=p[0],k=p[1];Object(j.c)(O(),(function(e){return k(e)}));var y=Object(l.g)().stationId;Object(i.useEffect)((function(){var e=m.stations.find((function(e){return e.id===y}));if(a(e),n){var t=m.favorites.find((function(e){return e.name===n.name}));b(!!t)}}),[m.favorites,m.stations,n,y]);var g=function(){return m.favorites.length<2?Object(h.jsx)(_,{displayHeader:!1}):Object(h.jsx)("button",{children:Object(h.jsx)(f.b,{to:"/",children:"Valitse toinen asemat"})})};return n?Object(h.jsxs)("div",{className:R.a.container,children:[Object(h.jsxs)("div",{className:R.a.header,children:[Object(h.jsx)(f.b,{to:"/",children:Object(h.jsx)("img",{src:S,alt:"fillari"})}),Object(h.jsxs)("span",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[Object(h.jsx)("h1",{style:{color:"azure",margin:0,fontSize:"5vh"},children:n.name}),Object(h.jsx)("i",{onClick:function(){return function(){if(n){var e=m.favorites.find((function(e){return e.name===n.name}));b(!e),e?x(n):u(n)}}()},children:o?Object(h.jsx)(F.b,{size:"32",color:"yellow"}):Object(h.jsx)(F.a,{size:"32"})})]}),Object(h.jsxs)("p",{style:n.active?{color:"greenyellow",margin:0,textAlign:"center",fontSize:"15px"}:{color:"red",textAlign:"center",fontSize:"15px"},children:["Asema ",n.active?"on k\xe4yt\xf6ss\xe4":"ei ole k\xe4yt\xf6ss\xe4"]})]}),Object(h.jsxs)("div",{className:R.a.bikesAvailable,children:[Object(h.jsx)("div",{className:R.a.len,children:Object(h.jsx)("p",{children:n.bikesAvailable})}),Object(h.jsx)("h1",{style:n.bikesAvailable<1?{color:"#bd0000",textShadow:"2px 2px #b59a9a"}:{color:"snow",textShadow:"2px 2px #61a6e7"},children:"Fillaria vapaana"})]}),Object(h.jsxs)("div",{className:R.a.content,children:[Object(h.jsx)(g,{})," "]}),Object(h.jsx)("div",{className:R.a.footer,children:Object(h.jsxs)("p",{children:["Asenna mobiilisovellus ",Object(h.jsx)(f.b,{to:"/help",children:"OHJE"})]})})]}):Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:"NO_DATA"})})})),P=n(111),T=n.n(P),H=n(16),L=n.n(H),D=n(112),J=n(113),V=n(100),Z=n(80),q={apiKey:"AIzaSyA0zZzBan7E3YmvAon4l4h7ZOA9hamvlHE",authDomain:"kaupunkifillarit-aed04.firebaseapp.com",projectId:"kaupunkifillarit-aed04",storageBucket:"kaupunkifillarit-aed04.appspot.com",messagingSenderId:"746873844238",appId:"1:746873844238:web:33ffbe49354f2cb420825f",measurementId:"G-S8P5Z3F6S5"},B={getFunctionsInstance:function(){var e=(a||(a=Object(J.a)(q)),Object(V.b)(a,{provider:new V.a("6LdyvQYdAAAAAKZD7R1vWhl5PrCyfhHS4zaa6dii"),isTokenAutoRefreshEnabled:!0}));return Object(Z.a)(e.app)}},Y=j.d.model("Station",{id:j.d.string,lat:j.d.number,lon:j.d.number,name:j.d.string,bikesAvailable:j.d.number,spacesAvailable:j.d.number,active:j.d.boolean}),W=(j.d.model("Stations",{bikeRentalStations:j.d.array(Y)}),j.d.model("Root",{stations:j.d.array(Y),favorites:j.d.array(Y)}).actions((function(e){return{addFavorite:function(t){e.favorites.find((function(e){return e.name===t.name}))?console.info(t.name,"is allready in favorites"):e.favorites.push(t)},delFavorite:function(t){e.favorites.find((function(e){return e.name===t.name}))?e.favorites.replace(e.favorites.filter((function(e){return e.name!==t.name}))):console.info(t.name,"is not part of favoritelist")},fetchStationDataAsync:Object(j.a)(L.a.mark((function t(){var n,a,i,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=B.getFunctionsInstance(),a=D.a(n,"getStationsData",{timeout:7e4}),i=a().then((function(e){return e})),t.next=5,i;case 5:c=t.sent.data,e.stations.replace(c.bikeRentalStations);case 7:case"end":return t.stop()}}),t)})))}}))),G="ROOT_STORE",K=function(e){var t=e.updateFrequency,n=void 0===t?12e4:t,a=e.children,c=O().fetchStationDataAsync;return Object(i.useEffect)((function(){c();var e=setInterval((function(){console.info("Updating data..."),c()}),n);return function(){return clearInterval(e)}}),[c,n]),Object(h.jsx)("div",{children:a})},U=n(114),Q=n(77),X=n.n(Q),$=n(204),ee=n(200),te=n(202),ne=n(201),ae=n(99),ie=["children","value","index"],ce=function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}},re=function(e){var t=e.children,n=e.value,a=e.index,i=Object(U.a)(e,ie);return Object(h.jsx)("div",Object(v.a)(Object(v.a)({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},i),{},{children:n===a&&Object(h.jsx)($.a,{sx:{p:3},children:Object(h.jsx)(ne.a,{children:t})})}))},oe=function(){var e=Object(i.useState)(0),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{className:X.a.container,children:[Object(h.jsxs)("div",{className:X.a.header,children:[Object(h.jsx)("img",{src:S,alt:"fillari"}),Object(h.jsx)("h1",{children:"Omat kaupunkifillarit"})]}),Object(h.jsx)("div",{className:X.a.content,children:Object(h.jsxs)($.a,{children:[Object(h.jsxs)(ee.a,{value:n,onChange:function(e,t){a(t)},centered:!0,children:[Object(h.jsx)(te.a,Object(v.a)({icon:Object(h.jsx)(ae.a,{size:30}),label:"Android"},ce(0))),Object(h.jsx)(te.a,Object(v.a)({icon:Object(h.jsx)(ae.b,{size:30}),label:"iPad tai iPhone"},ce(1)))]}),Object(h.jsx)(re,{value:n,index:0,children:Object(h.jsxs)("ol",{children:[Object(h.jsxs)("li",{children:["Avaa ",Object(h.jsx)("b",{children:"Omat kaupunkifillarit"})," sovelus ",Object(h.jsx)("b",{children:"Chrome"})," selaimella."]}),Object(h.jsx)("li",{children:"Avaa selaimen valikko (3 pistett\xe4 oikeassa yl\xe4 kulmassa)."}),Object(h.jsxs)("li",{children:["Valitse valikosta ",Object(h.jsx)("b",{children:"Lis\xe4\xe4 aloitusn\xe4ytt\xf6\xf6n."})]})]})}),Object(h.jsx)(re,{value:n,index:1,children:Object(h.jsxs)("ol",{children:[Object(h.jsxs)("li",{children:["Avaa ",Object(h.jsx)("b",{children:"Omat kaupunkifillarit"})," sovelus ",Object(h.jsx)("b",{children:"Safari"})," selaimella."]}),Object(h.jsx)("li",{children:"Avaa selaimen pudotusvalikko, selaimen yl\xe4osassa n\xe4kyv\xe4st\xe4 kuvakkeesta jossa laatikosta osoittaa nuoli oikealle."}),Object(h.jsxs)("li",{children:["Napauta ",Object(h.jsx)("b",{children:"Lis\xe4\xe4 aloitusn\xe4ytt\xf6\xf6n"}),"."]})]})})]})}),Object(h.jsx)(f.b,{className:X.a.back,to:"/",children:"SULJE OHJE"})]})},se=n(115),le=n.n(se),je=function(){var e=Object(i.useState)(),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){a(function(){var e,t,n=j.d.snapshotProcessor(W,{postProcessor:function(e){var t=Object(v.a)({},e);return delete t.Stations,t}});try{var a;t=JSON.parse(null!==(a=localStorage.getItem(G))&&void 0!==a?a:"{}"),e=n.create(t)}catch(i){console.error("MST ERROR:",i),e=n.create()}return Object(j.c)(e,(function(e){return localStorage.setItem(G,JSON.stringify(e))})),e}())}),[]),n?Object(h.jsx)(u,{value:n,children:Object(h.jsx)(N,{children:Object(h.jsx)(K,{children:Object(h.jsxs)("div",{className:T.a.container,children:[Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{exact:!0,path:"/",component:z}),Object(h.jsx)(l.b,{exact:!0,path:"/search",component:_}),Object(h.jsx)(l.b,{exact:!0,path:"/station/:stationId",component:M}),Object(h.jsx)(l.b,{exact:!0,path:"/help",component:oe})]}),Object(h.jsxs)(le.a,{buttonText:"Ymm\xe4rr\xe4n",location:"bottom",visible:"byCookieValue",children:["Omat kaupunkifillarit k\xe4ytt\xe4\xe4 keksej\xe4 paremman k\xe4ytt\xf6kokemuksen luomiseen. Lis\xe4\xe4 tietoa ev\xe4steist\xe4 voit lukea t\xe4\xe4ll\xe4 ",Object(h.jsx)("a",{href:"https://policies.google.com/technologies/cookies?hl=fi-FI",children:"Googlen ev\xe4stek\xe4yt\xe4nt\xf6"})]})]})})})}):null};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(f.a,{children:Object(h.jsx)(je,{})})}),document.getElementById("root"))},58:function(e,t,n){e.exports={container:"stationInfo_container__3H6VT",header:"stationInfo_header__151sH",content:"stationInfo_content__1yvd1",footer:"stationInfo_footer__7Nw_g",bikesAvailable:"stationInfo_bikesAvailable__9agL0",len:"stationInfo_len__CjFpV"}},76:function(e,t,n){e.exports={container:"main_container__1Wj1w",header:"main_header__2Ty8i",content:"main_content__IA-9v",footer:"main_footer__1_F-6"}},77:function(e,t,n){e.exports={container:"help_container__lBfRu",header:"help_header__qTCiX",content:"help_content__-xnzE",back:"help_back__2YpZr"}}},[[150,1,2]]]);
//# sourceMappingURL=main.e4528d30.chunk.js.map