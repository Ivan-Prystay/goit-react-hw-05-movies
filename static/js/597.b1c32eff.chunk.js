"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[597],{3597:function(n,e,t){t.r(e);var r=t(5861),c=t(9439),a=t(7757),i=t.n(a),o=t(2791),u=t(7689),s=t(3815),p=t(277),f=t(184);e.default=function(){var n=(0,o.useState)([]),e=(0,c.Z)(n,2),t=e[0],a=e[1],d=(0,u.UO)().id;return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.IQ)(d);case 3:e=n.sent,t=e.data,a(t.cast),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[d]),(0,f.jsx)("div",{children:(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Casts"}),(0,f.jsx)("ul",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, 200px)",gap:"16px",justifyContent:"center",justifyItems:"center"},children:t.map((function(n){var e=n.name,t=n.id,r=n.profile_path,c=n.character;return(0,f.jsxs)("li",{style:{border:"2px solid #87ceeb",borderRadius:"15px",marginTop:"15px",padding:"15px",width:"160px"},children:[r?(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(r),alt:e,style:{width:"150px",borderRadius:"14px",justifyContent:"center"}}):(0,f.jsx)(p.oo,{}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{style:{fontSize:"18px",fontWeight:"bold",lineHeight:"1"},children:e}),(0,f.jsx)("p",{style:{fontSize:"18px",lineHeight:"1"},children:c})]})]},t)}))})]})})}},277:function(n,e,t){t.d(e,{Se:function(){return x},Ee:function(){return Z},Mq:function(){return g},Dy:function(){return m},oo:function(){return y},C8:function(){return w},Fg:function(){return b},Un:function(){return k}});var r=t(168),c=t(1087),a=t(6444);t(2791);var i=t.p+"static/media/no-image.f9db13c5f6963815666d104105243935.svg";var o,u,s,p,f,d,l,h,v=t.p+"static/media/no-photo.ca7765f773a4ef0ee410e652a2a887d3.svg",g=a.ZP.ul(o||(o=(0,r.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 320px);\n  gap: 16px;\n  justify-content: center;\n  justify-items: center;\n"]))),x=a.ZP.li(u||(u=(0,r.Z)(["\n  background-color: #87a7eb;\n  border-radius: 15px;\n  margin-top: 15px;\n  padding: 15px;\n  width: 240px;\n"]))),m=a.ZP.div(s||(s=(0,r.Z)(["\n  background-image: url(",");\n  height: 250px;\n  background-repeat: no-repeat;\n  background-position: center center;\n"])),i),y=a.ZP.div(p||(p=(0,r.Z)(["\n  background-image: url(",");\n  height: 225px;\n  background-repeat: no-repeat;\n  background-position: center center;\n"])),v),Z=a.ZP.img(f||(f=(0,r.Z)(["\n  width: 200px;\n  margin: 0 auto;\n"]))),b=(0,a.ZP)(c.OL)(d||(d=(0,r.Z)(["\n  text-decoration: none;\n  color: #212121;\n"]))),k=a.ZP.p(l||(l=(0,r.Z)(["\n  text-align: center;\n  font-weight: 700;\n  font-size: 20px;\n"]))),w=a.ZP.p(h||(h=(0,r.Z)(["\n  font-size: 16px;\n  padding-left: 14px;\n  color: whitesmoke;\n"])))},3815:function(n,e,t){t.d(e,{HI:function(){return p},Hg:function(){return u},IQ:function(){return h},Jh:function(){return g},TP:function(){return d}});var r=t(5861),c=t(7757),a=t.n(c),i=t(3263),o="d06f3f881af415394d900f66e6d54b92";function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/trending/movie/day?api_key=".concat(o));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/search/movie?api_key=".concat(o,"&query=").concat(e));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/".concat(e,"?api_key=").concat(o));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(o));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function g(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(o));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=597.b1c32eff.chunk.js.map