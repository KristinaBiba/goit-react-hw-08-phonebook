"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[38],{4038:function(e,n,t){t.r(n);var o=t(9439),i=t(2791),a=t(9434),r=t(8361),s=t(9423),l=t(8367),d=t(1614),c=t(890),u=t(7621),m=t(9504),p=t(4554),v=t(8096),h=t(6170),Z=t(4925),f=t(8029),x=t(3466),g=t(3400),b=t(6151),w=t(9569),j=t(3710),C=t(3329);n.default=function(){var e=(0,i.useState)(""),n=(0,o.Z)(e,2),t=n[0],P=n[1],y=(0,i.useState)(""),E=(0,o.Z)(y,2),z=E[0],M=E[1],L=(0,s.a)().isLoading,S=(0,a.I0)(),k=function(e){var n=e.target,t=n.name,o=n.value;switch(t){case"userEmail":P(o);break;case"userPassword":M(o);break;default:P(""),M("")}},I=(0,i.useState)(!1),R=(0,o.Z)(I,2),_=R[0],A=R[1];return L?(0,C.jsx)(l.a,{}):(0,C.jsxs)(d.Z,{component:"main",maxWidth:"xl",children:[(0,C.jsx)(c.Z,{variant:"h5",component:"h2",align:"center",color:"primary",mt:4,sx:{fontWeight:"700"},children:"Log in to start working with contacts"}),(0,C.jsx)(u.Z,{sx:{maxWidth:375,marginRight:"auto",marginLeft:"auto",marginTop:"32px"},children:(0,C.jsx)(m.Z,{children:(0,C.jsxs)(p.Z,{component:"form",autoComplete:"off",onSubmit:function(e){e.preventDefault();var n=e.currentTarget.elements,t=n.userEmail,o=n.userPassword;S((0,r.Ib)({email:t.value,password:o.value})),P(""),M("")},noValidate:!0,sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},children:[(0,C.jsx)(v.Z,{children:(0,C.jsx)(h.Z,{required:!0,label:"Email",autoComplete:"on",type:"email",name:"userEmail",onChange:k,value:t,title:"Email must be digits, letters and contain @",style:{width:"38ch"}})}),(0,C.jsxs)(v.Z,{sx:{m:1,width:"38ch"},variant:"outlined",children:[(0,C.jsx)(Z.Z,{htmlFor:"outlined-adornment-password",required:!0,children:"Password"}),(0,C.jsx)(f.Z,{id:"outlined-adornment-password",type:_?"text":"password",endAdornment:(0,C.jsx)(x.Z,{position:"end",children:(0,C.jsx)(g.Z,{"aria-label":"toggle password visibility",onClick:function(){return A((function(e){return!e}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:_?(0,C.jsx)(w.Z,{}):(0,C.jsx)(j.Z,{})})}),label:"Password",required:!0,pattern:"/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g",title:"Password must contain letters and numbers",name:"userPassword",onChange:k,value:z,autoComplete:"current-password"})]}),(0,C.jsx)(b.Z,{size:"small",type:"submit",text:"LogIn",style:{marginLeft:"8px",marginTop:"12px"},children:"Log In"})]})})})]})}},3710:function(e,n,t){var o=t(9201),i=t(3329);n.Z=(0,o.Z)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},9569:function(e,n,t){var o=t(9201),i=t(3329);n.Z=(0,o.Z)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},9504:function(e,n,t){t.d(n,{Z:function(){return Z}});var o=t(7462),i=t(3366),a=t(2791),r=t(8182),s=t(4419),l=t(6934),d=t(1402),c=t(5878),u=t(1217);function m(e){return(0,u.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var p=t(3329),v=["className","component"],h=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),Z=a.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiCardContent"}),a=t.className,l=t.component,c=void 0===l?"div":l,u=(0,i.Z)(t,v),Z=(0,o.Z)({},t,{component:c}),f=function(e){var n=e.classes;return(0,s.Z)({root:["root"]},m,n)}(Z);return(0,p.jsx)(h,(0,o.Z)({as:c,className:(0,r.Z)(f.root,a),ownerState:Z,ref:n},u))}))},3466:function(e,n,t){t.d(n,{Z:function(){return C}});var o=t(4942),i=t(3366),a=t(7462),r=t(2791),s=t(8182),l=t(4419),d=t(4036),c=t(890),u=t(3840),m=t(2930),p=t(6934),v=t(5878),h=t(1217);function Z(e){return(0,h.Z)("MuiInputAdornment",e)}var f,x=(0,v.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),g=t(1402),b=t(3329),w=["children","className","component","disablePointerEvents","disableTypography","position","variant"],j=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,d.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===t.variant&&(0,o.Z)({},"&.".concat(x.positionStart,"&:not(.").concat(x.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),C=r.forwardRef((function(e,n){var t=(0,g.Z)({props:e,name:"MuiInputAdornment"}),o=t.children,p=t.className,v=t.component,h=void 0===v?"div":v,x=t.disablePointerEvents,C=void 0!==x&&x,P=t.disableTypography,y=void 0!==P&&P,E=t.position,z=t.variant,M=(0,i.Z)(t,w),L=(0,m.Z)()||{},S=z;z&&L.variant,L&&!S&&(S=L.variant);var k=(0,a.Z)({},t,{hiddenLabel:L.hiddenLabel,size:L.size,disablePointerEvents:C,position:E,variant:S}),I=function(e){var n=e.classes,t=e.disablePointerEvents,o=e.hiddenLabel,i=e.position,a=e.size,r=e.variant,s={root:["root",t&&"disablePointerEvents",i&&"position".concat((0,d.Z)(i)),r,o&&"hiddenLabel",a&&"size".concat((0,d.Z)(a))]};return(0,l.Z)(s,Z,n)}(k);return(0,b.jsx)(u.Z.Provider,{value:null,children:(0,b.jsx)(j,(0,a.Z)({as:h,ownerState:k,className:(0,s.Z)(I.root,p),ref:n},M,{children:"string"!==typeof o||y?(0,b.jsxs)(r.Fragment,{children:["start"===E?f||(f=(0,b.jsx)("span",{className:"notranslate",children:"\u200b"})):null,o]}):(0,b.jsx)(c.Z,{color:"text.secondary",children:o})}))})}))}}]);
//# sourceMappingURL=38.35ee9d8c.chunk.js.map