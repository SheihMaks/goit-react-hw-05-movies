"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[304],{3983:function(n,t,e){e.d(t,{Ai:function(){return d},L_:function(){return v},Mc:function(){return f},uV:function(){return p},wr:function(){return s}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u),o="3a3d464bfa5c4e0090fb8ce329cb5fcf";i().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3071:function(n,t,e){e.d(t,{O:function(){return l}});var r,a,c,u=e(168),i=e(6031),o=i.ZP.ul(r||(r=(0,u.Z)(["\n"]))),s=e(501),f=i.ZP.li(a||(a=(0,u.Z)(["\n"]))),p=(0,i.ZP)(s.OL)(c||(c=(0,u.Z)(["\ndisplay:inline-block;\ntext-decoration:none;\ncolor:#44474a;\nfont-weight:600;\nmargin-bottom:2px;"]))),v=e(184),d=function(n){var t=n.movie,e=n.id;return(0,v.jsx)(f,{id:e,children:(0,v.jsx)(p,{to:"/movies/".concat(e),children:t})})},l=function(n){var t=n.movies;return(0,v.jsx)(o,{children:t.map((function(n){return(0,v.jsx)(d,{id:n.id,movie:n.title},n.id)}))})}},304:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a=e(2982),c=e(5861),u=e(885),i=e(7757),o=e.n(i),s=e(2791),f=e(743),p=(e(5462),e(3983)),v=e(168),d=e(6031).ZP.h1(r||(r=(0,v.Z)(["\npadding:15px;\n"]))),l=e(3071),h=e(184),g=function(){var n=(0,s.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,c.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.wr();case 3:t=n.sent,e=t.results,r((0,a.Z)(e)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),(0,f.cB)();case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{children:"Trending today"}),(0,h.jsx)(l.O,{movies:e})]})}}}]);
//# sourceMappingURL=304.88ee0dab.chunk.js.map