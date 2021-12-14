(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={overview:"Overview_overview__3SBa9",selected:"Overview_selected__1XTeH",title:"Overview_title__2hQiy",synopsis:"Overview_synopsis__2Q7Ld",cast:"Overview_cast__1ou4L",description:"Overview_description__2lwkV",rent:"Overview_rent__2rPLp",actions:"Overview_actions__BVv8J",price:"Overview_price__rk93O"}},,,,function(e,t,n){e.exports={poster:"Poster_poster__3THjt",img:"Poster_img__2eQtB",info:"Poster_info__1wCMF",title:"Poster_title__3mB09",icon:"Poster_icon__3-J81",rating:"Poster_rating__17ztQ"}},function(e,t,n){e.exports={movie:"CartMovie_movie__1ji29",overview:"CartMovie_overview__8Vcxt",img:"CartMovie_img__2KPXk",price:"CartMovie_price__1PS18"}},,,,function(e,t,n){e.exports={button:"CartButton_button__2i1CL",title:"CartButton_title__1gUZM",badge:"CartButton_badge__3wOws"}},function(e,t,n){e.exports={header:"Header_header__1pGuA",title:"Header_title__37lhu",login:"Header_login__KOBUZ"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1dHyn",modal:"Modal_modal__1GVQK"}},function(e,t,n){e.exports={cartTitle:"Cart_cartTitle__hiIb-",sum:"Cart_sum__1o3lz",cart:"Cart_cart__hQEra"}},function(e,t,n){e.exports={notification:"Notification_notification__rO7lk",success:"Notification_success__Pv3Uk",error:"Notification_error__11K_3"}},,,,function(e,t,n){e.exports={"form-control":"SearchButton_form-control__1VZ6-",input:"SearchButton_input__24AVt"}},function(e,t,n){e.exports={movie:"Movie_movie__3SHv2"}},function(e,t,n){e.exports={title:"Login_title__EdiAX",form:"Login_form__iEagJ"}},,,,function(e,t,n){e.exports={main:"Main_main__3ElYh"}},,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(8),i=n.n(c),o=(n(34),n(12)),s=(n(35),n(2)),l=n(6),u=Object(l.b)({name:"ui",initialState:{showCart:!1,notification:null},reducers:{toggleCart:function(e){console.log("toggling cart in dispatch"),e.showCart?e.showCart=!1:(e.showCart=!0,console.log(e.showCart))},showNotification:function(e,t){e.notification={status:t.payload.status,title:t.payload.title,description:t.payload.description}}}}),d=u.actions,p=u.reducer,j=n(14),f=n.n(j),v=n(0),b=function(){var e=Object(s.c)((function(e){return e.user.cartMovies})),t=Object(s.b)();return Object(v.jsxs)("button",{onClick:function(){console.log("opening cart"),t(d.toggleCart())},className:f.a.button,children:[Object(v.jsx)("span",{className:f.a.title,children:"Cart"}),Object(v.jsx)("span",{className:f.a.badge,children:e.length})]})},h=n(15),m=n.n(h),_=Object(l.b)({name:"movies",initialState:{movies:[],movieQuery:[]},reducers:{initializeMovies:function(e,t){e.movies=t.payload,console.log(e.movies)},movieSearch:function(e,t){""!==t.payload?(e.movieQuery=e.movies.filter((function(e){return e.original_title.toUpperCase().includes("".concat(t.payload.toUpperCase()))})),console.log(e.movieQuery)):e.movieQuery=[]}}}),O=_.actions,g=_.reducer,x=n(22),w=n.n(x),N=function(){var e=Object(s.b)();return Object(v.jsx)("form",{className:w.a["form-control"],children:Object(v.jsx)("input",{onChange:function(t){e(O.movieSearch(t.target.value))},className:w.a.input,type:"text",placeholder:"Search..."})})},C=function(){var e=Object(s.c)((function(e){return e.user.isLoggedIn})),t=Object(s.b)(),n=Object(v.jsx)("button",{className:m.a.login,onClick:function(){t(d.toggleCart())},children:"LOGIN TO RENT"});return Object(v.jsxs)("div",{className:m.a.header,children:[Object(v.jsx)("h1",{className:m.a.title,children:"RENTFLIX"}),Object(v.jsx)(N,{}),e?Object(v.jsx)(b,{}):n]})},y=n(23),k=n.n(y),S=Object(l.b)({name:"user",initialState:{email:"",password:"",isLoggedIn:!1,cartMovies:[],cartTotal:0,cartChanged:!1},reducers:{addMovieToCart:function(e,t){var n=t.payload;e.cartChanged=!0,e.cartMovies.push(n),e.cartTotal+=t.payload.price},userLogin:function(e,t){e.email=t.payload.email,e.password=t.payload.password,e.isLoggedIn=!0,console.log(e.email),console.log(e.password)},setCart:function(e,t){e.email===t.payload.email&&(e.cartMovies=t.payload.cartMovies,e.cartTotal=t.payload.cartTotal)}}}),M=S.actions,T=S.reducer,E=n(5),L=n.n(E),R=function(e){var t=e.isSelected,n=e.title,r=e.id,a=e.overview,c=e.date,i=e.poster_path,o=e.price,l=Object(s.c)((function(e){return e.user.cartMovies})),u=Object(s.c)((function(e){return e.user.isLoggedIn})),d=Object(s.b)(),p=l.find((function(e){return e.id===r}));return Object(v.jsxs)("div",{className:"".concat(L.a.overview," ").concat(t?L.a.selected:""),children:[Object(v.jsxs)("h3",{className:L.a.title,children:[n," (",c?c.split("-")[0]:"Unknown",")"]}),Object(v.jsx)("h4",{className:L.a.synopsis,children:"Synopsis"}),Object(v.jsx)("p",{className:L.a.description,children:a}),Object(v.jsxs)("div",{className:L.a.actions,children:[u&&Object(v.jsx)("button",{disabled:p,onClick:function(e){e.preventDefault(),d(M.addMovieToCart({id:r,title:n,date:c,poster_path:i,price:o}))},className:L.a.rent,children:p?"IN CART":"RENT"}),Object(v.jsxs)("span",{className:L.a.price,children:["$",o]})]})]})},P=n(9),F=n.n(P),I=n(26),B=n(27),U=function(e){var t=e.title,n=e.rating,r=e.poster_path;return Object(v.jsxs)("div",{className:F.a.poster,children:[Object(v.jsx)("img",{alt:t,className:F.a.img,src:"https://image.tmdb.org/t/p/w500/"+r}),Object(v.jsxs)("span",{className:F.a.rating,children:[Object(v.jsx)(I.a,{className:F.a.icon,icon:B.a}),n]}),Object(v.jsx)("h3",{className:F.a.title,children:t})]})},Q=function(e){var t=e.id,n=e.title,a=e.overview,c=e.poster_path,i=e.date,s=e.rating,l=e.price,u=Object(r.useState)(!1),d=Object(o.a)(u,2),p=d[0],j=d[1];return Object(v.jsxs)("div",{onClick:function(){j(!p)},className:"".concat(k.a.movie," ").concat(p?k.a.selected:""),children:[Object(v.jsx)(U,{title:n,rating:s,poster_path:c}),Object(v.jsx)(R,{poster_path:c,title:n,id:t,overview:a,date:i,price:l,isSelected:p})]})},A=n(28),D=n.n(A),H=function(){var e=Object(s.c)((function(e){return e.movies.movies})),t=Object(s.c)((function(e){return e.movies.movieQuery}));console.log("Movies in main"),console.log(e);var n=0===t.length?e:t;return Object(v.jsx)("main",{className:D.a.main,children:n.map((function(e,t){return Object(v.jsx)(Q,{id:e.id,title:e.original_title,overview:e.overview,poster_path:e.poster_path,date:e.release_date,rating:e.vote_average,price:e.price},e.id)}))})},J=n(29),V=n(4),z=n.n(V),G=n(7),K="https://api.themoviedb.org/3/discover/movie?api_key=".concat("ea82bb5732a9027da04300b3e982fd88","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"),X="&page=",Z=n(10),$=n.n(Z),W=function(e){e.id;var t=e.title,n=e.date,r=e.poster_path,a=e.price;return Object(v.jsxs)("div",{className:$.a.movie,children:[Object(v.jsx)("img",{alt:t,className:$.a.img,src:"https://image.tmdb.org/t/p/w500/"+r}),Object(v.jsxs)("div",{className:$.a.overview,children:[Object(v.jsxs)("h2",{className:$.a.title,children:[t," (",n.split("-")[0],")"]}),Object(v.jsxs)("h3",{className:$.a.price,children:["$",a]})]})]})},Y=n(16),q=n.n(Y),ee=function(e){var t=e.onCloseCart;return Object(v.jsx)("div",{onClick:t,className:q.a.backdrop})},te=function(e){return Object(v.jsx)("div",{className:q.a.modal,children:Object(v.jsx)("div",{className:q.a.content,children:e.children})})},ne=document.getElementById("modal-root"),re=function(e){var t=Object(s.b)();return Object(v.jsxs)(a.a.Fragment,{children:[i.a.createPortal(Object(v.jsx)(ee,{onCloseCart:function(){console.log("closing cart - backdrop"),t(d.toggleCart())}}),ne),i.a.createPortal(Object(v.jsx)(te,{children:e.children}),ne)]})},ae=n(17),ce=n.n(ae),ie=function(){var e=Object(s.c)((function(e){return e.user.cartMovies})),t=Object(s.c)((function(e){return e.user.cartTotal}));return Object(v.jsx)(re,{children:Object(v.jsxs)("div",{className:ce.a.cart,children:[Object(v.jsx)("h2",{className:ce.a.cartTitle,children:"CART"}),e.map((function(e,t){return Object(v.jsx)(W,{id:e.id,title:e.title,date:e.date,poster_path:e.poster_path,price:e.price},e.id)})),Object(v.jsxs)("div",{className:ce.a.sum,children:[Object(v.jsx)("h3",{children:"Total:"}),Object(v.jsxs)("h2",{children:["$",t.toFixed(2)]})]})]})})},oe=n(24),se=n.n(oe),le=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=Object(s.b)();return Object(v.jsxs)(re,{children:[Object(v.jsx)("h2",{className:se.a.title,children:"LOGIN"}),Object(v.jsxs)("form",{className:se.a.form,onSubmit:function(r){r.preventDefault();var a=e.current.value,c=t.current.value,i=a.includes("@");0!==a.trim().length&&i?c.trim().length<5?console.log("Invalid password"):(n(M.userLogin({email:a.trim(),password:c.trim()})),n(d.toggleCart()),console.log(a),console.log(c)):console.log("invalid email")},children:[Object(v.jsx)("label",{htmlFor:"email",children:"EMAIL"}),Object(v.jsx)("input",{ref:e,id:"email",placeholder:"Enter email..."}),Object(v.jsx)("label",{htmlFor:"password",children:"PASSWORD"}),Object(v.jsx)("input",{ref:t,id:"password",placeholder:"Enter password..."}),Object(v.jsx)("button",{children:"Login"})]})]})},ue="https://react-movie-db-6eecd-default-rtdb.europe-west1.firebasedatabase.app/user.json",de=n(18),pe=n.n(de),je=function(e){var t=e.status,n=e.title,r=e.description,a="";"error"===t&&(a=pe.a.error),"success"===t&&(a=pe.a.success);var c="".concat(pe.a.notification," ").concat(a);return Object(v.jsxs)("section",{className:c,children:[Object(v.jsx)("h3",{children:n}),Object(v.jsx)("p",{children:r})]})},fe=!0,ve=!0;var be=function(){var e=Object(r.useState)(1),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(s.c)((function(e){return e.ui.showCart})),i=Object(s.c)((function(e){return e.user.isLoggedIn})),l=Object(s.c)((function(e){return e.user})),u=Object(s.c)((function(e){return e.ui.notification})),p=Object(s.b)();return Object(r.useEffect)((function(){console.log("Fetching movies!"),p(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var t=Object(G.a)(z.a.mark((function t(n){var r,a,c,i;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Dispatching DATA"),n(d.showNotification({status:"",title:"WORKING",description:"Fetching movies from database!"})),r=function(){var t=Object(G.a)(z.a.mark((function t(){var n,r;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(K+X+e);case 2:if((n=t.sent).ok){t.next=5;break}throw new Error("Response failed");case 5:return t.next=7,n.json();case 7:return r=t.sent,t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=3,t.next=6,r();case 6:a=t.sent,c=Object(J.a)(a.results);try{for(c.s();!(i=c.n()).done;)i.value.price=+(5*Math.random()+.99).toFixed(2)}catch(o){c.e(o)}finally{c.f()}n(O.initializeMovies(a.results)),n(d.showNotification({status:"success",title:"SUCCESS",description:"Movies fetched successfully"})),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(3),n(d.showNotification({status:"error",title:"ERROR",description:"Fetching movies failed"})),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}()}(n))}),[p,n]),Object(r.useEffect)((function(){fe?fe=!1:l.cartChanged&&(console.log("Dispatching data to DB"),p(function(e){return function(){var t=Object(G.a)(z.a.mark((function t(n){var r;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Sending data to DB"),r=function(){var t=Object(G.a)(z.a.mark((function t(){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(ue,{method:"PUT",body:JSON.stringify({email:e.email,password:e.password,cartMovies:e.cartMovies,cartTotal:e.cartTotal})});case 2:if(t.sent.ok){t.next=5;break}throw new Error("Putting data failed!");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=2,t.next=5,r();case 5:n(d.showNotification({status:"success",title:"SUCCESS",description:"User data sent successfuly"})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(2),console.log(t.t0),n(d.showNotification({status:"error",title:"ERROR",description:"User data sending failed"}));case 12:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}()}({email:l.email,password:l.password,cartMovies:l.cartMovies,cartTotal:l.cartTotal})))}),[l,p]),Object(r.useEffect)((function(){ve?ve=!1:i&&p(function(){var e=Object(G.a)(z.a.mark((function e(t){var n,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=Object(G.a)(z.a.mark((function e(){var t,n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ue);case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Fetching data failed");case 5:return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,e.next=4,n();case 4:r=e.sent,console.log(r),t(M.setCart(r)),t(d.showNotification({status:"success",title:"SUCCESS",description:"User data fetched successfully"})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),t(d.showNotification({status:"error",title:"ERROR",description:"Fetching user data failed"}));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}),[p,i]),Object(v.jsxs)("div",{className:"App",children:[u&&Object(v.jsx)(je,{status:u.status,title:u.title,description:u.description}),c?i?Object(v.jsx)(ie,{}):Object(v.jsx)(le,{}):"",Object(v.jsx)(C,{}),Object(v.jsx)(H,{}),Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{onClick:function(){console.log(n),1!==n&&a((function(e){return e-1}))},children:"Prev page"}),Object(v.jsx)("button",{onClick:function(){console.log(n),a((function(e){return e+1}))},children:"Next page"})]})]})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},me=Object(l.a)({reducer:{movies:g,ui:p,user:T}});i.a.render(Object(v.jsx)(s.a,{store:me,children:Object(v.jsx)(be,{})}),document.getElementById("root")),he()}],[[46,1,2]]]);
//# sourceMappingURL=main.38ab3e5f.chunk.js.map