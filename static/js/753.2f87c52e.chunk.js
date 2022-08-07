"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[753],{3983:function(n,e,t){t.d(e,{Ai:function(){return d},L_:function(){return l},Mc:function(){return f},uV:function(){return p},wr:function(){return s}});var r=t(5861),a=t(7757),u=t.n(a),o=t(4569),c=t.n(o),i="3a3d464bfa5c4e0090fb8ce329cb5fcf";c().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&").concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},3071:function(n,e,t){t.d(e,{O:function(){return g}});var r,a,u,o=t(6871),c=t(168),i=t(6031),s=i.ZP.ul(r||(r=(0,c.Z)(["\n"]))),f=t(501),p=i.ZP.li(a||(a=(0,c.Z)(["\n"]))),l=(0,i.ZP)(f.OL)(u||(u=(0,c.Z)(["\ndisplay:inline-block;\ntext-decoration:none;\ncolor:#44474a;\nfont-weight:600;\nmargin-bottom:2px;"]))),d=t(184),v=function(n){var e=n.movie,t=n.id,r=n.location;return(0,d.jsx)(p,{id:t,children:(0,d.jsx)(l,{to:"/movies/".concat(t),state:{from:r},children:e})})},g=function(n){var e=n.movies,t=(0,o.TH)();return(0,d.jsx)(s,{children:e.map((function(n){return(0,d.jsx)(v,{id:n.id,movie:n.title,location:t},n.id)}))})}},6753:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,u,o=t(2982),c=t(5861),i=t(885),s=t(7757),f=t.n(s),p=t(2791),l=t(501),d=t(743),v=(t(5462),t(3983)),g=t(168),h=t(6031),m=h.ZP.form(r||(r=(0,g.Z)(["\ndisplay:flex;\nmargin-bottom:20px;\n"]))),x=h.ZP.input(a||(a=(0,g.Z)(["\npadding:4px;\nborder-radius:4px;\nmargin-right:4px;\nbackground-color:#e1e4fa;\n"]))),b=h.ZP.button(u||(u=(0,g.Z)(["\ncursor:pointer;\nbackground-color:#02f73c;\ncolor:#414a45;\nborder-radius:4px;\n&:hover,\n&:focus{\n    background-color:#266943;\n    color:white;\n    border:1px solid green;\n}\n\n"]))),y=t(184),Z=function(n){var e=n.onSubmit,t=n.getQuery,r=n.notify;return(0,y.jsxs)(m,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget.elements.query.value;""!==t.trim()?e(t):r()},children:[(0,y.jsx)(x,{name:"query",type:"text",value:t,placeholder:"Enter something for search",autoFocus:!0}),(0,y.jsx)(b,{type:"submit",children:"Search Movie"})]})},k=t(3071),w=function(){var n=(0,p.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,l.lr)(),u=(0,i.Z)(a,2),s=u[0],g=u[1];(0,p.useEffect)((function(){if(null!==s.get("query")){var n=function(){var n=(0,c.Z)(f().mark((function n(e){var t,a;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.Ai(e);case 3:t=n.sent,0===(a=t.results).length&&(0,d.qO)(),r((0,o.Z)(a)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),(0,d.cB)();case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();n(s)}}),[s]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Z,{onSubmit:function(n){n&&g({query:n})},value:function(){s.get("")},notify:d.Zd}),(0,y.jsx)(k.O,{movies:t}),(0,y.jsx)(d.Ix,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}}]);
//# sourceMappingURL=753.2f87c52e.chunk.js.map