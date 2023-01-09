"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[299],{130:function(e,t,r){var n=r(689),a=r(450),c=r(184);t.Z=function(e){var t=e.movies,r=(0,n.TH)();return(0,c.jsx)("ul",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, 320px)",gap:"16px",justifyContent:"center",justifyItems:"center"},children:t.map((function(e){var t=e.id,n=e.title,u=e.poster_path,i=e.release_date;return(0,c.jsx)("li",{style:{border:"2px solid #87ceeb",borderRadius:"15px",marginTop:"15px",padding:"15px",width:"240px"},children:(0,c.jsxs)(a.Fg,{to:"/movies/".concat(t),state:{from:r},children:[u?(0,c.jsx)(a.Ee,{src:"https://image.tmdb.org/t/p/w500/".concat(u),alt:n}):(0,c.jsx)(a.Dy,{children:" "}),(0,c.jsx)("br",{}),n,(0,c.jsx)("br",{}),"Release date: ",i]})},t)}))})}},450:function(e,t,r){r.d(t,{Ee:function(){return f},Dy:function(){return p},Fg:function(){return l}});var n=r(168),a=r(87),c=r(444);r(791);var u,i,o,s=r.p+"static/media/no-image.f9db13c5f6963815666d104105243935.svg",p=c.ZP.div(u||(u=(0,n.Z)(["\n  background-image: url(",");\n  height: 250px;\n  background-repeat: no-repeat;\n  background-position: center center;\n"])),s),f=c.ZP.img(i||(i=(0,n.Z)(["\n  width: 200px;\n  margin: 0 auto;\n"]))),l=(0,c.ZP)(a.OL)(o||(o=(0,n.Z)(["\n  text-decoration: none;\n  color: #212121;\n"])))},299:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(861),a=r(439),c=r(757),u=r.n(c),i=r(791),o=r(87),s=r(815),p=r(130),f=r(184);var l=function(){var e,t=(0,i.useState)([]),r=(0,a.Z)(t,2),c=r[0],l=r[1],v=(0,i.useState)(!1),d=(0,a.Z)(v,2),h=d[0],m=d[1],g=(0,i.useState)(""),x=(0,a.Z)(g,2),b=x[0],y=x[1],Z=(0,o.lr)(),w=(0,a.Z)(Z,2),k=w[0],j=w[1],_=null!==(e=k.get("query"))&&void 0!==e?e:"";return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,s.HI)(_);case 5:t=e.sent,l(t.data.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0.message);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[_]),(0,f.jsxs)("main",{children:[(0,f.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===b||b===_)return m(!1);var t,r,n;j((t={},r=e.currentTarget.name,n=b,r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t)),m(!0)},name:"query",value:_,children:[(0,f.jsx)("input",{placeholder:"Search movie",onChange:function(e){y(e.currentTarget.value.trim())}}),(0,f.jsx)("button",{type:"submit",children:"\ud83d\udd0e"})]}),h&&(0,f.jsx)("p",{children:"Loading..."}),c.length>0&&!h&&(0,f.jsx)(p.Z,{movies:c})]})}},815:function(e,t,r){r.d(t,{HI:function(){return p},Hg:function(){return o},IQ:function(){return d},Jh:function(){return m},TP:function(){return l}});var n=r(861),a=r(757),c=r.n(a),u=r(263),i="d06f3f881af415394d900f66e6d54b92";function o(){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/trending/movie/day?api_key=".concat(i));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=299.c91a3157.chunk.js.map