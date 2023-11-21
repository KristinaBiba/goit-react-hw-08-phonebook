"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[383],{3383:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var a,r,o,i=t(9439),c=t(9434),s=t(2791),l=t(168),d=t(7691),u=d.ZP.h2(a||(a=(0,l.Z)(["\n  margin: 0;\n  padding: 16px;\n  font-size: 32px;\n"]))),h=d.ZP.section(r||(r=(0,l.Z)(["\n  margin-top: 12px;\n  margin-bottom: 12px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n"]))),p=t(3329),x=function(e){var n=e.title,t=e.children;return(0,p.jsxs)(h,{children:[n&&(0,p.jsx)(u,{children:n}),t]})},m=t(1413),f=d.ZP.ul(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 350px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 24px;\n  padding: 0;\n"]))),g=t(2580),v=t(773),Z=t(6934),j=t(4554),b=t(493),y=t(4852),w=t(653),C=t(9900),k=t(3044),P=t(3400),z=t(1889),M=t(2716),A=t(7247),_=function(e){var n=e._id,t=e.name,a=e.phone,r=(0,c.I0)(),o=(0,Z.ZP)("div")((function(e){return{backgroundColor:e.theme.palette.background.paper}}));return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(j.Z,{sx:{flexGrow:1,maxWidth:"100%"},children:(0,p.jsx)(z.ZP,{item:!0,xs:12,md:6,children:(0,p.jsx)(o,{children:(0,p.jsx)(b.Z,{children:(0,p.jsxs)(y.ZP,{secondaryAction:(0,p.jsx)(P.Z,{edge:"end","aria-label":"delete",onClick:function(){!function(e){r((0,v.GK)(e))}(n)},children:(0,p.jsx)(A.Z,{})}),children:[(0,p.jsx)(w.Z,{children:(0,p.jsx)(k.Z,{children:(0,p.jsx)(M.Z,{})})}),(0,p.jsxs)(C.Z,{children:[t,": ",a]})]})})})})})})},S=function(){var e=(0,c.v9)(g.K2),n=(0,c.v9)(g.zK),t=function(){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return(0,p.jsx)(f,{children:t.map((function(e){return(0,p.jsx)(_,(0,m.Z)({},e),e._id)}))})},L=t(2627),K=t(722),B=function(){var e=(0,c.v9)(g.zK),n=(0,c.I0)();return(0,p.jsx)(K.Z,{id:"outlined-search",label:"Find contact",type:"search",variant:"filled",name:"filter",value:e,onChange:function(e){var t=e.target.value;n((0,L.M)(t))}})},E=t(8439),F=t(890),I=t(6151),N=t(4164),T=t(2007),q=t.n(T);function G(e){var n=e.toggleModal,t=(0,s.useState)(""),a=(0,i.Z)(t,2),r=a[0],o=a[1],l=(0,s.useState)(""),d=(0,i.Z)(l,2),u=d[0],h=d[1],x=(0,c.v9)(g.K2),m=(0,c.I0)(),f=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"contactName":o(a);break;case"contactPhone":h(a);break;default:o(""),h("")}};return(0,p.jsxs)(j.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements,a=t.contactName,r=t.contactPhone,i=a.value.toLowerCase();x.find((function(e){return e.name.toLowerCase()===i}))?alert("".concat(a.value," is already incontacts")):m((0,v.uK)({name:a.value,phone:r.value})),o(""),h(""),n()},children:[(0,p.jsxs)("div",{children:[(0,p.jsx)(K.Z,{type:"text",name:"contactName",label:"Name",onChange:f,value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,style:{width:"38ch"}}),(0,p.jsx)(K.Z,{required:!0,type:"tel",label:"Phone",name:"contactPhone",onChange:f,value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",style:{width:"38ch"}})]}),(0,p.jsx)(I.Z,{size:"small",type:"submit",text:"Add contact",style:{marginLeft:"8px"},children:"Add contact"})]})}var O=t(2739),V=t(1993),D=t(2003),J=t(9823),R=document.getElementById("modal-root"),W={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function $(e){var n=e.toggleModal,t=e.isModalOpen;(0,s.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}));var a=function(e){"Escape"===e.code&&n()};return(0,N.createPortal)((0,p.jsx)(V.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:t,onClose:function(e){e.currentTarget===e.target&&n()},closeAfterTransition:!0,BackdropComponent:O.Z,BackdropProps:{timeout:500},children:(0,p.jsx)(D.Z,{in:t,children:(0,p.jsxs)(j.Z,{sx:W,style:{borderColor:"primary"},children:[(0,p.jsx)(I.Z,{style:{left:"88%"},onClick:function(e){n()},children:(0,p.jsx)(J.Z,{})}),(0,p.jsx)(G,{toggleModal:n})]})})}),R)}V.Z.propTypes={toggleModal:q().func,src:q().string};var H=t(5403);var Q=function(){var e=(0,c.I0)(),n=(0,c.v9)(g.K2),t=(0,c.v9)(g.Vc),a=(0,c.v9)(g.by),r=(0,s.useState)(!1),o=(0,i.Z)(r,2),l=o[0],d=o[1],u=(0,s.useState)(!1),h=(0,i.Z)(u,2),m=h[0],f=h[1];(0,s.useEffect)((function(){e((0,v.yF)())}),[e]);var Z=function(){return d(!l)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(x,{children:[(0,p.jsx)(F.Z,{variant:"h4",component:"h2",style:{textAlign:"center",marginBottom:"12px"},children:"My contacts"}),(0,p.jsxs)("div",{style:{marginBottom:"12px"},children:[(0,p.jsx)(I.Z,{type:"button",onClick:function(){Z()},children:(0,p.jsx)(E.Z,{color:"primary",fontSize:"large"})}),(0,p.jsx)(I.Z,{type:"button",onClick:function(){f(!m)},children:(0,p.jsx)(H.Z,{color:"primary",fontSize:"large"})})]}),m&&(0,p.jsx)(B,{}),t&&!a&&0===n.length&&(0,p.jsx)("b",{style:{paddingLeft:"12px",fontSize:"24px"},children:"Request in progress..."}),(0,p.jsx)(S,{})]}),l&&(0,p.jsx)($,{isModalOpen:l,toggleModal:Z})]})}}}]);
//# sourceMappingURL=383.9f46f54b.chunk.js.map