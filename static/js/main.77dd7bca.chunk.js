(this.webpackJsonpumin=this.webpackJsonpumin||[]).push([[0],{67:function(e,t,r){"use strict";r.r(t);var n=r(2),i=r(1),o=r(48),c=r.n(o),a=r(70),s=r(86),l=r(84),u=r(77),b=r(85),j=r(33),d=r(78),m=r(79),x=r(80),p=r(56),h=r(81),g=r(82),O=r(49),f=r(76),w=r(35),v=function(e){var t=Object(a.b)().toggleColorMode,r=Object(a.c)("dark","light"),i=Object(a.c)(w.a,w.b);return Object(n.jsx)(f.a,Object(O.a)({size:"sm",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(n.jsx)(i,{}),"aria-label":"Switch to ".concat(r," mode")},e))},C=r(36),B=r(15),k=[{id:1,name:"\u63a2\u7d22",url:"https://www.chenxii.xyz"},{id:2,name:"\u9898\u5e93",url:"https://www.chenxii.xyz"},{id:3,name:"\u8ba8\u8bba",url:"https://www.chenxii.xyz"},{id:4,name:"\u7ade\u8d5b",url:"https://www.chenxii.xyz"},{id:5,name:"\u4f01\u4e1a",url:"https://www.chenxii.xyz"}],y=function(){var e=Object(a.c)("white","#1A202C"),t=Object(a.c)("rgba(38, 38, 38, 1)","white"),r=Object(a.c)("rgba(240, 240, 240, 1)","#2D3748");return Object(n.jsx)(u.a,{borderBottom:"1px solid ".concat(r),fontSize:"sm",fontWeight:"450",color:t,bg:e,"data-testid":"navigationBar",children:Object(n.jsxs)(u.a,{d:"flex",justifyContent:"space-between",flexWrap:"nowrap",minW:"992px",maxW:"1200px",w:"100%",mx:"auto",px:"20px",py:"6px",position:"relative",children:[Object(n.jsx)(d.a,{spacing:"30px","data-testid":"links",children:k.map((function(e){return Object(n.jsx)(m.a,{href:e.url,isExternal:!0,_hover:{textColor:"rgba(34, 34, 34, 1)",fontWeight:400},children:Object(n.jsx)(x.a,{cursor:"pointer",children:e.name})},e.id)}))}),Object(n.jsxs)(d.a,{spacing:"30px",children:[Object(n.jsx)(p.a,{size:"sm",leftIcon:Object(n.jsx)(C.a,{}),colorScheme:"teal",variant:"outline",cursor:"pointer","data-testid":"btn__download",children:"\u4e0b\u8f7dApp"}),Object(n.jsx)(p.a,{size:"sm",leftIcon:Object(n.jsx)(C.b,{}),colorScheme:"yellow",variant:"outline",cursor:"pointer","data-testid":"btn__premium",children:"Plus\u4f1a\u5458"}),Object(n.jsx)(u.a,{_hover:{color:"blue",stroke:"blue"},children:Object(n.jsx)(B.e,{size:18,cursor:"pointer",color:"rgba(140, 140, 140, 1)","data-testid":"icon__clipboard"})}),Object(n.jsx)(u.a,{_hover:{color:"rgba(89, 89, 89, 1)"},children:Object(n.jsx)(B.c,{size:18,cursor:"pointer",color:"rgba(140, 140, 140, 1)","data-testid":"icon__bell"})}),Object(n.jsx)(h.a,{size:"xs",cursor:"pointer","data-testid":"avatar",children:Object(n.jsx)(h.b,{boxSize:"1em",bg:"green.500"})}),Object(n.jsx)(v,{})]}),Object(n.jsx)(g.a,{src:"https://assets.leetcode-cn.com/support/new.svg",alt:"new feature",position:"absolute",right:"510px",top:"-9px",cursor:"pointer",transition:"all 0.3s",_hover:{top:"-3px"}})]})})},S=r(9),z=r(83),q=[[{key:"analysis",name:"\u505a\u9898\u5206\u6790",icon:"BsBarChart"},{key:"progress",name:"\u8fdb\u5ea6\u7ba1\u7406",icon:"BsTerminalFill"}],[{key:"points",name:"\u79ef\u5206",icon:"BsAward"},{key:"coupon",name:"\u4f18\u60e0\u5238",icon:"BsCreditCard"},{key:"order",name:"\u8ba2\u5355",icon:"BsClipboardData"}],[{key:"account",name:"\u4e2a\u4eba\u8d44\u6599",icon:"BsPerson"},{key:"security",name:"\u8d26\u53f7\u5b89\u5168",icon:"BsShieldLock"},{key:"notification",name:"\u901a\u77e5\u4e0e\u9690\u79c1",icon:"BsBell"},{key:"plan",name:"\u4f53\u9a8c\u8ba1\u5212",icon:"BsBootstrapReboot"}]],_=function(e){switch(e.iconName){case"BsBarChart":return Object(n.jsx)(B.b,{});case"BsTerminalFill":return Object(n.jsx)(B.i,{});case"BsAward":return Object(n.jsx)(B.a,{});case"BsCreditCard":return Object(n.jsx)(B.f,{});case"BsClipboardData":return Object(n.jsx)(B.e,{});case"BsPerson":return Object(n.jsx)(B.g,{});case"BsShieldLock":return Object(n.jsx)(B.h,{});case"BsBell":return Object(n.jsx)(B.c,{});case"BsBootstrapReboot":return Object(n.jsx)(B.d,{});default:return Object(n.jsx)(B.b,{})}},W=function(e){var t=e.section;return Object(n.jsxs)(n.Fragment,{children:[t&&t.map((function(e,t){return Object(n.jsx)(I,{item:e},t)})),Object(n.jsx)(z.a,{})]})},I=function(e){var t=e.item,r=Object(i.useContext)(M),o=r.colorMode,c=r.clickedItem,a=r.setClickedItem;return Object(n.jsx)(u.a,{as:"button",d:"flex",justifyContent:"flex-start",alignItems:"center",p:4,fontSize:16,fontWeight:450,mt:6,w:"100%",cursor:"pointer",borderRadius:"5px",_hover:{color:"rgba(45, 181, 93, 1)",bgColor:"light"===o?"rgba(0, 0, 0, 0.04)":"rgba(255, 255, 255, 0.04)"},bgColor:c===t.key?"light"===o?"rgba(0, 0, 0, 0.04)":"rgba(255, 255, 255, 0.04)":"",color:c===t.key?"rgba(45, 181, 93, 1)":"rgba(140, 140, 140, 1)",outline:"none",onClick:function(){return a(t.key)},children:Object(n.jsxs)(d.a,{spacing:3,children:[Object(n.jsx)(_,{iconName:t.icon}),Object(n.jsx)(u.a,{as:"span",children:t.name})]})})},M=Object(i.createContext)({}),F=function(){var e=Object(a.b)(),t=e.colorMode,r=(e.toggleColorMode,Object(i.useState)("")),o=Object(S.a)(r,2),c=o[0],s=o[1],l=Object(i.useState)(null),u=Object(S.a)(l,2),b=u[0],j=u[1];Object(i.useEffect)((function(){var e=0!==q.length?m(q):null;j(e)}),[]);var m=function(e){return e.map((function(e,t){return Object(n.jsx)(W,{section:e},t)}))};return Object(n.jsx)(M.Provider,{value:{colorMode:t,clickedItem:c,setClickedItem:s},children:Object(n.jsx)(d.b,{children:b})})},A=function(){var e=Object(a.b)(),t=e.colorMode;e.toggleColorMode;return Object(n.jsx)(u.a,{mt:6,p:5,bgColor:"light"===t?"rgba(255, 255, 255, 1)":"rgba(29, 37, 53, 1)",color:"light"===t?"#1A202C":"rgba(219, 219, 219, 1)",fontSize:"lg",fontWeight:"450",boxShadow:"light"===t?"0px 1px 5px rgba(0, 0, 0, 0.1)":"0 1px 7px rgba(0, 0, 0, 0.3)",children:"hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio commodi voluptate cumque, quod rerum quasi iure maxime eaque fuga voluptatibus voluptates voluptatum. Consequatur ab veritatis consectetur assumenda dignissimos in obcaecati ratione, pariatur quidem enim architecto, illo error itaque, at adipisci distinctio laboriosam impedit sed qui iure neque ipsa a! Fugiat enim, sunt odio mollitia veniam ipsum! Commodi, vel quae a nesciunt, quam temporibus possimus reprehenderit maiores veniam magni excepturi totam? Maxime minus sequi distinctio non consectetur earum harum exercitationem, nesciunt optio eaque unde? Reprehenderit esse architecto aut. Accusamus aspernatur esse nulla voluptatum dicta illo reprehenderit beatae voluptatem, sunt facilis dolore?"})},L=function(){var e=Object(a.c)("white",""),t=Object(a.c)("rgba(138, 138, 138, 1)","white");return Object(n.jsxs)(s.a,{theme:j.a,children:[Object(n.jsx)(l.a,{}),Object(n.jsxs)(u.a,{textAlign:"center",fontSize:"md",bgColor:e,color:t,children:[Object(n.jsx)(y,{}),Object(n.jsxs)(b.a,{templateColumns:"repeat(4, 1fr)",gap:4,minW:"960px",maxW:"1120px",w:"100%",mx:"auto",minH:"800px",children:[Object(n.jsx)(b.b,{colSpan:1,children:Object(n.jsx)(F,{})}),Object(n.jsx)(b.b,{colSpan:3,children:Object(n.jsx)(A,{})})]})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,87)).then((function(t){var r=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;r(e),n(e),i(e),o(e),c(e)}))};c.a.render(Object(n.jsx)(i.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),P()}},[[67,1,2]]]);
//# sourceMappingURL=main.77dd7bca.chunk.js.map