(this.webpackJsonpkaupunkifillari=this.webpackJsonpkaupunkifillari||[]).push([[0],{109:function(e,t,n){},111:function(e,t,n){e.exports={container:"App_container__eSJ6i"}},149:function(e,t,n){"use strict";n.r(t);var a,i=n(1),c=n.n(i),r=n(41),s=n.n(r),o=n(11),l=n(19),j=n(18),d={},b=Object(i.createContext)(d),u=b.Provider,O=function(){var e=Object(i.useContext)(b);if(e===d)throw new Error("RootStore Consumer present without provider! This likely implies mistake in code, make sure that you have provider somewhere lower in the component tree (usually at or near app.tsx).");return e},f=n(34),x=n(2),h=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(Object(j.b)(O())),r=Object(o.a)(c,2),s=r[0],d=r[1];return Object(j.c)(O(),(function(e){return d(e)})),Object(i.useEffect)((function(){var e=s.stations.filter((function(e){var t=s.favorites.find((function(t){return t.name===e.name}));return e.name===(null===t||void 0===t?void 0:t.name)}));a(e)}),[s]),s.favorites.length>1?Object(x.jsx)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",width:"300px",margin:"8px"},children:n.map((function(e){return Object(x.jsx)("div",{style:{background:"azure",width:"fit-content",padding:"3px 5px",borderRadius:"5px",margin:"5px"},children:Object(x.jsx)(f.b,{style:{color:"black",textDecoration:"none",fontSize:"20px"},to:"station/".concat(e.id),children:"".concat(e.name,": ").concat(e.bikesAvailable)})})}))}):1===s.favorites.length?Object(x.jsx)(l.a,{to:"station/".concat(s.favorites[0].id)}):null},p=n(38),v=n(196),m=n(197),k=n(109),_=n.n(k),y=n(84),g=Object(y.a)((function(e){var t=e.displayHeader,n=void 0===t||t,a=O().stations,c=Object(i.useState)(),r=Object(o.a)(c,2),s=r[0],j=r[1];if(s)return Object(x.jsx)(l.a,{to:"/station/".concat(s)});return Object(x.jsxs)("div",{className:_.a.container,children:[n?Object(x.jsx)("h1",{style:{color:"azure",textAlign:"center"},children:"Omat kaupunkifillarit"}):null,Object(x.jsx)(v.a,{renderOption:function(e,t,n){return Object(i.createElement)("li",Object(p.a)(Object(p.a)({},e),{},{key:t.id}),t.name)},disablePortal:!0,onChange:function(e,t){return j(null===t||void 0===t?void 0:t.id)},getOptionLabel:function(e){return e.name},id:"combo-box-demo",options:a.map((function(e){return e})).filter((function(e,t,n){return n.indexOf(e)===t})),sx:{width:300,background:"azure"},renderInput:function(e){return Object(x.jsx)(m.a,Object(p.a)(Object(p.a)({},e),{},{label:"Valitse polkupy\xf6r\xe4asema"}))}})]})})),S=n.p+"static/media/fillari192.9d853bc1.png",A=n(75),w=n.n(A),I=function(){return Object(x.jsxs)("div",{className:w.a.container,children:[Object(x.jsxs)("div",{className:w.a.header,children:[Object(x.jsx)("img",{src:S,alt:"fillari"}),Object(x.jsx)("u",{style:{color:"darkgreen"},children:Object(x.jsx)("h1",{style:{marginTop:0,fontSize:"5vh",color:"#fff"},children:"Omat kaupunkifillarit"})})]}),Object(x.jsxs)("div",{className:w.a.content,children:[Object(x.jsx)(g,{displayHeader:!1}),Object(x.jsx)(h,{})]}),Object(x.jsx)("div",{className:w.a.footer,children:Object(x.jsxs)("p",{children:["Asenna mobiilisovellus ",Object(x.jsx)(f.b,{to:"/help",children:"OHJE"})]})})]})},N=n(58),z=n.n(N),E=n(98),R=Object(y.a)((function(){var e=Object(i.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!1),r=Object(o.a)(c,2),s=r[0],d=r[1],b=O(),u=b.addFavorite,h=b.delFavorite,p=Object(i.useState)(Object(j.b)(O())),v=Object(o.a)(p,2),m=v[0],k=v[1];Object(j.c)(O(),(function(e){return k(e)}));var _=Object(l.g)().stationId;Object(i.useEffect)((function(){var e=m.stations.find((function(e){return e.id===_}));if(a(e),n){var t=m.favorites.find((function(e){return e.name===n.name}));d(!!t)}}),[m.favorites,m.stations,n,_]);var y=function(){return m.favorites.length<2?Object(x.jsx)(g,{displayHeader:!1}):Object(x.jsx)("button",{children:Object(x.jsx)(f.b,{to:"/",children:"Valitse toinen asemat"})})};return n?Object(x.jsxs)("div",{className:z.a.container,children:[Object(x.jsxs)("div",{className:z.a.header,children:[Object(x.jsx)(f.b,{to:"/",children:Object(x.jsx)("img",{src:S,alt:"fillari"})}),Object(x.jsxs)("span",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[Object(x.jsx)("h1",{style:{color:"azure",margin:0,fontSize:"5vh"},children:n.name}),Object(x.jsx)("i",{onClick:function(){return function(){if(n){var e=m.favorites.find((function(e){return e.name===n.name}));d(!e),e?h(n):u(n)}}()},children:s?Object(x.jsx)(E.b,{size:"32",color:"yellow"}):Object(x.jsx)(E.a,{size:"32"})})]}),Object(x.jsxs)("p",{style:n.active?{color:"greenyellow",margin:0,textAlign:"center",fontSize:"15px"}:{color:"red",textAlign:"center",fontSize:"15px"},children:["Asema ",n.active?"on k\xe4yt\xf6ss\xe4":"ei ole k\xe4yt\xf6ss\xe4"]})]}),Object(x.jsxs)("div",{className:z.a.bikesAvailable,children:[Object(x.jsx)("div",{className:z.a.len,children:Object(x.jsx)("p",{children:n.bikesAvailable})}),Object(x.jsx)("h1",{style:n.bikesAvailable<1?{color:"#bd0000",textShadow:"2px 2px #b59a9a"}:{color:"snow",textShadow:"2px 2px #61a6e7"},children:"Fillaria vapaana"})]}),Object(x.jsxs)("div",{className:z.a.content,children:[Object(x.jsx)(y,{})," "]}),Object(x.jsx)("div",{className:z.a.footer,children:Object(x.jsxs)("p",{children:["Asenna mobiilisovellus ",Object(x.jsx)(f.b,{to:"/help",children:"OHJE"})]})})]}):Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:"NO_DATA"})})})),C=n(111),F=n.n(C),H=n(16),T=n.n(H),D=n(112),J=n(113),P=n(100),L=n(79),V={apiKey:"AIzaSyA0zZzBan7E3YmvAon4l4h7ZOA9hamvlHE",authDomain:"kaupunkifillarit-aed04.firebaseapp.com",projectId:"kaupunkifillarit-aed04",storageBucket:"kaupunkifillarit-aed04.appspot.com",messagingSenderId:"746873844238",appId:"1:746873844238:web:33ffbe49354f2cb420825f",measurementId:"G-S8P5Z3F6S5"},Z={getFunctionsInstance:function(){var e=(a||(a=Object(J.a)(V)),Object(P.b)(a,{provider:new P.a("6LdyvQYdAAAAAKZD7R1vWhl5PrCyfhHS4zaa6dii"),isTokenAutoRefreshEnabled:!0}));return Object(L.a)(e.app)}},B=j.d.model("Station",{id:j.d.string,lat:j.d.number,lon:j.d.number,name:j.d.string,bikesAvailable:j.d.number,spacesAvailable:j.d.number,active:j.d.boolean}),W=(j.d.model("Stations",{bikeRentalStations:j.d.array(B)}),j.d.model("Root",{stations:j.d.array(B),favorites:j.d.array(B)}).actions((function(e){return{addFavorite:function(t){e.favorites.find((function(e){return e.name===t.name}))?console.info(t.name,"is allready in favorites"):e.favorites.push(t)},delFavorite:function(t){e.favorites.find((function(e){return e.name===t.name}))?e.favorites.replace(e.favorites.filter((function(e){return e.name!==t.name}))):console.info(t.name,"is not part of favoritelist")},fetchStationDataAsync:Object(j.a)(T.a.mark((function t(){var n,a,i,c;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Z.getFunctionsInstance(),a=D.a(n,"getStationsData",{timeout:7e4}),i=a().then((function(e){return e})),t.next=5,i;case 5:c=t.sent.data,e.stations.replace(c.bikeRentalStations);case 7:case"end":return t.stop()}}),t)})))}}))),Y="ROOT_STORE",q=function(e){var t=e.updateFrequency,n=void 0===t?12e4:t,a=e.children,c=O().fetchStationDataAsync;return Object(i.useEffect)((function(){c();var e=setInterval((function(){console.info("Updating data..."),c()}),n);return function(){return clearInterval(e)}}),[c,n]),Object(x.jsx)("div",{children:a})},K=n(114),M=n(76),U=n.n(M),G=n(203),Q=n(199),X=n(201),$=n(200),ee=n(99),te=["children","value","index"],ne=function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}},ae=function(e){var t=e.children,n=e.value,a=e.index,i=Object(K.a)(e,te);return Object(x.jsx)("div",Object(p.a)(Object(p.a)({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},i),{},{children:n===a&&Object(x.jsx)(G.a,{sx:{p:3},children:Object(x.jsx)($.a,{children:t})})}))},ie=function(){var e=Object(i.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(x.jsxs)("div",{className:U.a.container,children:[Object(x.jsxs)("div",{className:U.a.header,children:[Object(x.jsx)("img",{src:S,alt:"fillari"}),Object(x.jsx)("h1",{children:"Omat kaupunkifillarit"})]}),Object(x.jsx)("div",{className:U.a.content,children:Object(x.jsxs)(G.a,{children:[Object(x.jsxs)(Q.a,{value:n,onChange:function(e,t){a(t)},centered:!0,children:[Object(x.jsx)(X.a,Object(p.a)({icon:Object(x.jsx)(ee.a,{size:30}),label:"Android"},ne(0))),Object(x.jsx)(X.a,Object(p.a)({icon:Object(x.jsx)(ee.b,{size:30}),label:"iPad tai iPhone"},ne(1)))]}),Object(x.jsx)(ae,{value:n,index:0,children:Object(x.jsxs)("ol",{children:[Object(x.jsxs)("li",{children:["Avaa ",Object(x.jsx)("b",{children:"Omat kaupunkifillarit"})," sovelus ",Object(x.jsx)("b",{children:"Chrome"})," selaimella."]}),Object(x.jsx)("li",{children:"Avaa selaimen valikko (3 pistett\xe4 oikeassa yl\xe4 kulmassa)."}),Object(x.jsxs)("li",{children:["Valitse valikosta ",Object(x.jsx)("b",{children:"Lis\xe4\xe4 aloitusn\xe4ytt\xf6\xf6n."})]})]})}),Object(x.jsx)(ae,{value:n,index:1,children:Object(x.jsxs)("ol",{children:[Object(x.jsxs)("li",{children:["Avaa ",Object(x.jsx)("b",{children:"Omat kaupunkifillarit"})," sovelus ",Object(x.jsx)("b",{children:"Safari"})," selaimella."]}),Object(x.jsx)("li",{children:"Avaa selaimen pudotusvalikko, selaimen yl\xe4osassa n\xe4kyv\xe4st\xe4 kuvakkeesta jossa laatikosta osoittaa nuoli oikealle."}),Object(x.jsxs)("li",{children:["Napauta ",Object(x.jsx)("b",{children:"Lis\xe4\xe4 aloitusn\xe4ytt\xf6\xf6n"}),"."]})]})})]})}),Object(x.jsx)(f.b,{className:U.a.back,to:"/",children:"SULJE OHJE"})]})},ce=function(){var e=Object(i.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){a(function(){var e,t,n=j.d.snapshotProcessor(W,{postProcessor:function(e){var t=Object(p.a)({},e);return delete t.Stations,t}});try{var a;t=JSON.parse(null!==(a=localStorage.getItem(Y))&&void 0!==a?a:"{}"),e=n.create(t)}catch(i){console.error("MST ERROR:",i),e=n.create()}return Object(j.c)(e,(function(e){return localStorage.setItem(Y,JSON.stringify(e))})),e}())}),[]),n?Object(x.jsx)(u,{value:n,children:Object(x.jsx)(q,{children:Object(x.jsx)("div",{className:F.a.container,children:Object(x.jsxs)(l.d,{children:[Object(x.jsx)(l.b,{exact:!0,path:"/",component:I}),Object(x.jsx)(l.b,{exact:!0,path:"/search",component:g}),Object(x.jsx)(l.b,{exact:!0,path:"/station/:stationId",component:R}),Object(x.jsx)(l.b,{exact:!0,path:"/help",component:ie})]})})})}):null};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(f.a,{children:Object(x.jsx)(ce,{})})}),document.getElementById("root"))},58:function(e,t,n){e.exports={container:"stationInfo_container__3H6VT",header:"stationInfo_header__151sH",content:"stationInfo_content__1yvd1",footer:"stationInfo_footer__7Nw_g",bikesAvailable:"stationInfo_bikesAvailable__9agL0",len:"stationInfo_len__CjFpV"}},75:function(e,t,n){e.exports={container:"main_container__1Wj1w",header:"main_header__2Ty8i",content:"main_content__IA-9v",footer:"main_footer__1_F-6"}},76:function(e,t,n){e.exports={container:"help_container__lBfRu",header:"help_header__qTCiX",content:"help_content__-xnzE",back:"help_back__2YpZr"}}},[[149,1,2]]]);
//# sourceMappingURL=main.553767e7.chunk.js.map