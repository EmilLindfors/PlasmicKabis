(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{8120:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plasmic-host",function(){return n(1523)}])},1523:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893),s=(n(7294),n(4298)),i=n(6983),o=n(1935);function a(){return o.p&&(0,r.jsxs)("div",{children:[(0,r.jsx)(s.default,{src:"https://static1.plasmic.app/preamble.js",strategy:"beforeInteractive"}),(0,r.jsx)(i.nh,{})]})}},1935:function(e,t,n){"use strict";n.d(t,{p:function(){return g}});var r=n(6983),s=n(8520),i=n.n(s),o=n(5893),a=n(7294);function c(e,t,n,r,s,i,o){try{var a=e[i](o),c=a.value}catch(l){return void n(l)}a.done?t(c):Promise.resolve(c).then(r,s)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}var d=(0,a.createContext)(void 0);function p(e,t,n,r,s,i,o){try{var a=e[i](o),c=a.value}catch(l){return void n(l)}a.done?t(c):Promise.resolve(c).then(r,s)}function m(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function f(e){var t=e.className,n=(e.verbose,e.id),r=e.children,s=(0,a.useState)(void 0),c=s[0],l=s[1];return(0,a.useEffect)((function(){var e;(e=i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://depurator.duckdns.org/api",{headers:{"x-hasura-admin-secret":"Limeapelsin1","content-type":"application/json"},method:"POST",referrer:"http://*.plasmic.app/",referrerPolicy:"strict-origin-when-cross-origin",body:JSON.stringify({query:"\n  query getPost($id: uuid!) {\n    posts_by_pk(id: $id) {\n      title\n      id\n      content\n      created_at\n      cover_img\n    }\n  }",variables:{id:n}}),mode:"cors",credentials:"omit"});case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,l(r.data);case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,s){var i=e.apply(t,n);function o(e){p(i,r,s,o,a,"next",e)}function a(e){p(i,r,s,o,a,"throw",e)}o(void 0)}))})()}),[]),c?(0,o.jsx)("div",{className:t,children:(0,o.jsx)(v.Provider,{value:{title:c.posts_by_pk.title,content:c.posts_by_pk.content,id:c.posts_by_pk.id,date:c.posts_by_pk.created_at,image:c.posts_by_pk.cover_img},children:r},n)}):(0,o.jsx)(o.Fragment,{children:"loading..."})}var v=(0,a.createContext)(void 0);function h(){return(0,a.useContext)(v)}var g=(0,r.fZ)({projects:[{id:"mTFhLQAdTx9rG8foqvTzPe",token:"8FnakDw3lj7BizLVRjceIfyJk0ldK5H1qQt9m6nRHsUv4qo8vmRBSgZVTjnWz8osrX8bKEXc7Fk5oCURUp4g"}],preview:!0});g.registerComponent((function(e){var t=e.children,n=e.className,s=(e.verbose,(0,a.useState)(void 0)),l=s[0],p=s[1];return(0,a.useEffect)((function(){var e;(e=i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://depurator.duckdns.org/api",{headers:{"x-hasura-admin-secret":"Limeapelsin1","content-type":"application/json"},method:"POST",referrer:"http://*.plasmic.app/",referrerPolicy:"strict-origin-when-cross-origin",body:JSON.stringify({query:"\nquery allPosts {\n  posts {\n    title\n    id\n    content\n  }\n}"}),mode:"cors",credentials:"omit"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,p(n.data);case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,s){var i=e.apply(t,n);function o(e){c(i,r,s,o,a,"next",e)}function a(e){c(i,r,s,o,a,"throw",e)}o(void 0)}))})()}),[]),l?(0,o.jsx)("div",{className:n,style:{padding:"20px"},children:l.posts.map((function(e,n){return(0,o.jsx)(d.Provider,{value:u({},e),children:(0,r.xH)(0===n,t)},e.id)}))}):(0,o.jsx)(o.Fragment,{children:"loading"})}),{name:"PostList",props:{verbose:"boolean",children:"slot"}}),g.registerComponent((function(e){var t=e.className,n=e.field,r=(0,a.useContext)(d);return r?n?(0,o.jsx)("div",{className:t,children:r[n]}):(0,o.jsx)("div",{className:t,children:"(Must specify a field)"}):(0,o.jsx)("div",{className:t,children:"(Must display in a CMS item)"})}),{name:"PostItemField",props:{field:"string"}}),g.registerComponent((function(e){var t=e.className,n=e.verbose,r=e.id,s=(e.title,e.content,e.image,e.date,e.children);return m(e,["className","verbose","id","title","content","image","date","children"]),(0,o.jsx)(f,{className:t,id:r,verbose:n,children:s})}),{name:"singlePost",displayName:"Single Post",props:{verbose:"boolean",children:"slot",id:"string",title:"string",content:"string"}}),g.registerComponent((function(e){var t=e.className,n=h();return n?(0,o.jsx)("div",{className:t,children:n.title}):null}),{name:"PostTitle",displayName:"Post Title",props:{}}),g.registerComponent((function(e){var t=e.className,n=h();return n?(0,o.jsx)("div",{className:t,dangerouslySetInnerHTML:{__html:n.content}}):null}),{name:"PostContent",displayName:"Post Content",props:{}}),g.registerComponent((function(e){return(0,o.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,o.jsx)("div",{className:e.className,dangerouslySetInnerHTML:{__html:e.content}})})}),{name:"PostBody",props:{content:"slot"}}),g.registerComponent((function(e){var t=e.className,n=h();return n?(0,o.jsx)("img",{src:n.image,alt:n.title,className:t}):null}),{name:"PostImage",props:{image:"slot",title:"slot"}}),g.registerComponent((function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:e.className,children:e.title}),(0,o.jsx)("div",{className:e.className,children:e.date})]})}),{name:"PostHeader",props:{title:"slot",date:"slot"}})},4298:function(e,t,n){e.exports=n(699)}},function(e){e.O(0,[774,983,888,179],(function(){return t=8120,e(e.s=t);var t}));var t=e.O();_N_E=t}]);