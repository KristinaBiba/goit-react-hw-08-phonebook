"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[383],{3383:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var r,a,o,i=t(9439),c=t(9434),s=t(2791),l=t(168),d=t(7691),u=d.ZP.h2(r||(r=(0,l.Z)(["\n  margin: 0;\n  padding: 16px;\n  font-size: 32px;\n"]))),x=d.ZP.section(a||(a=(0,l.Z)(["\n  margin-top: 12px;\n  margin-bottom: 12px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n"]))),m=t(184),h=function(e){var n=e.title,t=e.children;return(0,m.jsxs)(x,{children:[n&&(0,m.jsx)(u,{children:n}),t]})},p=t(1413),f=d.ZP.ul(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 350px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 24px;\n  padding: 0;\n"]))),g=t(2580),v=t(773),Z=t(6934),j=t(4554),b=t(493),y=t(4852),w=t(653),C=t(9900),k=t(3044),z=t(3400),M=t(1889),A=t(2716),P=t(7247),S=function(e){var n=e.id,t=e.name,r=e.number,a=(0,c.I0)(),o=(0,Z.ZP)("div")((function(e){return{backgroundColor:e.theme.palette.background.paper}}));return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(j.Z,{sx:{flexGrow:1,maxWidth:"100%"},children:(0,m.jsx)(M.ZP,{item:!0,xs:12,md:6,children:(0,m.jsx)(o,{children:(0,m.jsx)(b.Z,{children:(0,m.jsxs)(y.ZP,{secondaryAction:(0,m.jsx)(z.Z,{edge:"end","aria-label":"delete",onClick:function(){!function(e){a((0,v.GK)(e))}(n)},children:(0,m.jsx)(P.Z,{})}),children:[(0,m.jsx)(w.Z,{children:(0,m.jsx)(k.Z,{children:(0,m.jsx)(A.Z,{})})}),(0,m.jsxs)(C.Z,{children:[t,": ",r]})]})})})})})})},L=function(){var e=(0,c.v9)(g.K2),n=(0,c.v9)(g.zK),t=function(){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return(0,m.jsx)(f,{children:t.map((function(e){return(0,m.jsx)(S,(0,p.Z)({},e),e.id)}))})},N=t(2627),_=t(722),K=function(){var e=(0,c.v9)(g.zK),n=(0,c.I0)();return(0,m.jsx)(_.Z,{id:"outlined-search",label:"Find contact",type:"search",variant:"filled",name:"filter",value:e,onChange:function(e){var t=e.target.value;n((0,N.M)(t))}})},B=t(8439),E=t(890),F=t(6151),I=t(4164),T=t(2007),q=t.n(T);function G(e){var n=e.toggleModal,t=(0,s.useState)(""),r=(0,i.Z)(t,2),a=r[0],o=r[1],l=(0,s.useState)(""),d=(0,i.Z)(l,2),u=d[0],x=d[1],h=(0,c.v9)(g.K2),p=(0,c.I0)(),f=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"contactName":o(r);break;case"contactNumber":x(r);break;default:o(""),x("")}};return(0,m.jsxs)(j.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements,r=t.contactName,a=t.contactNumber,i=r.value.toLowerCase();h.find((function(e){return e.name.toLowerCase()===i}))?alert("".concat(r.value," is already incontacts")):p((0,v.uK)({name:r.value,number:a.value})),o(""),x(""),n()},children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(_.Z,{type:"text",name:"contactName",label:"Name",onChange:f,value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,style:{width:"38ch"}}),(0,m.jsx)(_.Z,{required:!0,type:"tel",label:"Phone",name:"contactNumber",onChange:f,value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",style:{width:"38ch"}})]}),(0,m.jsx)(F.Z,{size:"small",type:"submit",text:"Add contact",style:{marginLeft:"8px"},children:"Add contact"})]})}var O=t(2739),V=t(1993),D=t(2003),J=t(9823),R=document.getElementById("modal-root"),W={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function $(e){var n=e.toggleModal,t=e.isModalOpen;(0,s.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&n()};return(0,I.createPortal)((0,m.jsx)(V.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:t,onClose:function(e){e.currentTarget===e.target&&n()},closeAfterTransition:!0,BackdropComponent:O.Z,BackdropProps:{timeout:500},children:(0,m.jsx)(D.Z,{in:t,children:(0,m.jsxs)(j.Z,{sx:W,style:{borderColor:"primary"},children:[(0,m.jsx)(F.Z,{style:{left:"88%"},onClick:function(e){n()},children:(0,m.jsx)(J.Z,{})}),(0,m.jsx)(G,{toggleModal:n})]})})}),R)}V.Z.propTypes={toggleModal:q().func,src:q().string};var H=t(5403);var Q=function(){var e=(0,c.I0)(),n=(0,c.v9)(g.K2),t=(0,c.v9)(g.Vc),r=(0,c.v9)(g.by),a=(0,s.useState)(!1),o=(0,i.Z)(a,2),l=o[0],d=o[1],u=(0,s.useState)(!1),x=(0,i.Z)(u,2),p=x[0],f=x[1];(0,s.useEffect)((function(){e((0,v.yF)())}),[e]);var Z=function(){return d(!l)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(h,{children:[(0,m.jsx)(E.Z,{variant:"h4",component:"h2",style:{textAlign:"center",marginBottom:"12px"},children:"My contacts"}),(0,m.jsxs)("div",{style:{marginBottom:"12px"},children:[(0,m.jsx)(F.Z,{type:"button",onClick:function(){Z()},children:(0,m.jsx)(B.Z,{color:"primary",fontSize:"large"})}),(0,m.jsx)(F.Z,{type:"button",onClick:function(){f(!p)},children:(0,m.jsx)(H.Z,{color:"primary",fontSize:"large"})})]}),p&&(0,m.jsx)(K,{}),t&&!r&&0===n.length&&(0,m.jsx)("b",{style:{paddingLeft:"12px",fontSize:"24px"},children:"Request in progress..."}),(0,m.jsx)(L,{})]}),l&&(0,m.jsx)($,{isModalOpen:l,toggleModal:Z})]})}}}]);
//# sourceMappingURL=383.dc4f6aeb.chunk.js.map