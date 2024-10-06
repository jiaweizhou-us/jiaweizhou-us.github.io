import{a0 as ge,r as g,f as ee,c as ve,a1 as fe,j as S,_ as v,a2 as me,d as Ce,g as ye,s as j,e as Te,h as be,i as E,l as A,m as He,G as b,N as we,R as Re,O as Se,v as i,P as U,t as c,S as f,T as p,F as ze}from"./index-wR0Mg5dK.js";import{u as ke,g as q,A as re,P as te,G as De,r as J,C as Ie}from"./index-BKvJNgZM.js";function $e(e,r=166){let a;function t(...o){const l=()=>{e.apply(this,o)};clearTimeout(a),a=setTimeout(l,r)}return t.clear=()=>{clearTimeout(a)},t}function Q(e){return ge(e).defaultView||window}const Ve=["onChange","maxRows","minRows","style","value"];function _(e){return parseInt(e,10)||0}const Me={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function X(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Le=g.forwardRef(function(r,a){const{onChange:t,maxRows:o,minRows:l=1,style:m,value:h}=r,H=ee(r,Ve),{current:w}=g.useRef(h!=null),T=g.useRef(null),C=ve(a,T),z=g.useRef(null),R=g.useRef(0),[$,V]=g.useState({outerHeightStyle:0}),k=g.useCallback(()=>{const n=T.current,s=Q(n).getComputedStyle(n);if(s.width==="0px")return{outerHeightStyle:0};const d=z.current;d.style.width=s.width,d.value=n.value||r.placeholder||"x",d.value.slice(-1)===`
`&&(d.value+=" ");const L=s.boxSizing,Z=_(s.paddingBottom)+_(s.paddingTop),N=_(s.borderBottomWidth)+_(s.borderTopWidth),B=d.scrollHeight;d.value="x";const D=d.scrollHeight;let y=B;l&&(y=Math.max(Number(l)*D,y)),o&&(y=Math.min(Number(o)*D,y)),y=Math.max(y,D);const Y=y+(L==="border-box"?Z+N:0),G=Math.abs(y-B)<=1;return{outerHeightStyle:Y,overflow:G}},[o,l,r.placeholder]),u=(n,x)=>{const{outerHeightStyle:s,overflow:d}=x;return R.current<20&&(s>0&&Math.abs((n.outerHeightStyle||0)-s)>1||n.overflow!==d)?(R.current+=1,{overflow:d,outerHeightStyle:s}):n},M=g.useCallback(()=>{const n=k();X(n)||V(x=>u(x,n))},[k]),O=()=>{const n=k();X(n)||me.flushSync(()=>{V(x=>u(x,n))})};g.useEffect(()=>{const n=$e(()=>{R.current=0,T.current&&O()});let x;const s=T.current,d=Q(s);return d.addEventListener("resize",n),typeof ResizeObserver<"u"&&(x=new ResizeObserver(n),x.observe(s)),()=>{n.clear(),d.removeEventListener("resize",n),x&&x.disconnect()}}),fe(()=>{M()}),g.useEffect(()=>{R.current=0},[h]);const F=n=>{R.current=0,w||M(),t&&t(n)};return S.jsxs(g.Fragment,{children:[S.jsx("textarea",v({value:h,onChange:F,ref:C,rows:l,style:v({height:$.outerHeightStyle,overflow:$.overflow?"hidden":void 0},m)},H)),S.jsx("textarea",{"aria-hidden":!0,className:r.className,readOnly:!0,ref:z,tabIndex:-1,style:v({},Me.shadow,m,{padding:0})})]})});function Be(e){return ye("MuiTextarea",e)}const ae=Ce("MuiTextarea",["root","textarea","startDecorator","endDecorator","formControl","disabled","error","focused","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","sizeSm","sizeMd","sizeLg","variantPlain","variantOutlined","variantSoft"]),We=["propsToForward","rootStateClasses","inputStateClasses","getRootProps","getInputProps","formControl","focused","error","disabled","size","color","variant","startDecorator","endDecorator","minRows","maxRows","component","slots","slotProps"],Pe=e=>{const{disabled:r,variant:a,color:t,size:o}=e,l={root:["root",r&&"disabled",a&&`variant${A(a)}`,t&&`color${A(t)}`,o&&`size${A(o)}`],textarea:["textarea"],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return He(l,Be,{})},Ee=j("div",{name:"JoyTextarea",slot:"Root",overridesResolver:(e,r)=>r.root})(({theme:e,ownerState:r})=>{var a,t,o,l,m;const h=(a=e.variants[`${r.variant}`])==null?void 0:a[r.color];return[v({"--Textarea-radius":e.vars.radius.sm,"--Textarea-gap":"0.5rem","--Textarea-placeholderColor":"inherit","--Textarea-placeholderOpacity":.5,"--Textarea-focused":"0","--Textarea-focusedThickness":e.vars.focus.thickness},r.color==="context"?{"--Textarea-focusedHighlight":e.vars.palette.focusVisible}:{"--Textarea-focusedHighlight":(t=e.vars.palette[r.color==="neutral"?"primary":r.color])==null?void 0:t[500]},r.size==="sm"&&{"--Textarea-minHeight":"2rem","--Textarea-paddingBlock":"calc(0.5rem - var(--variant-borderWidth, 0px))","--Textarea-paddingInline":"0.5rem","--Textarea-decoratorChildHeight":"min(1.5rem, var(--Textarea-minHeight))","--Icon-fontSize":"1.25rem"},r.size==="md"&&{"--Textarea-minHeight":"2.5rem","--Textarea-paddingBlock":"calc(0.5rem - var(--variant-borderWidth, 0px))","--Textarea-paddingInline":"0.75rem","--Textarea-decoratorChildHeight":"min(2rem, var(--Textarea-minHeight))","--Icon-fontSize":"1.5rem"},r.size==="lg"&&{"--Textarea-minHeight":"3rem","--Textarea-paddingBlock":"calc(0.75rem - var(--variant-borderWidth, 0px))","--Textarea-paddingInline":"1rem","--Textarea-gap":"0.75rem","--Textarea-decoratorChildHeight":"min(2.375rem, var(--Textarea-minHeight))","--Icon-fontSize":"1.75rem"},{"--_Textarea-paddingBlock":"max((var(--Textarea-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Textarea-decoratorChildHeight)) / 2, 0px)","--Textarea-decoratorChildRadius":"max(var(--Textarea-radius) - var(--variant-borderWidth, 0px) - var(--_Textarea-paddingBlock), min(var(--_Textarea-paddingBlock) + var(--variant-borderWidth, 0px), var(--Textarea-radius) / 2))","--Button-minHeight":"var(--Textarea-decoratorChildHeight)","--IconButton-size":"var(--Textarea-decoratorChildHeight)","--Button-radius":"var(--Textarea-decoratorChildRadius)","--IconButton-radius":"var(--Textarea-decoratorChildRadius)",boxSizing:"border-box",minWidth:0,minHeight:"var(--Textarea-minHeight)",cursor:"text",position:"relative",display:"flex",flexDirection:"column",paddingInlineStart:"var(--Textarea-paddingInline)",paddingBlock:"var(--Textarea-paddingBlock)",borderRadius:"var(--Textarea-radius)",fontFamily:e.vars.fontFamily.body,fontSize:e.vars.fontSize.md,lineHeight:e.vars.lineHeight.md},r.size==="sm"&&{fontSize:e.vars.fontSize.sm,lineHeight:e.vars.lineHeight.sm},{"&:before":{boxSizing:"border-box",content:'""',display:"block",position:"absolute",pointerEvents:"none",top:0,left:0,right:0,bottom:0,zIndex:1,borderRadius:"inherit",margin:"calc(var(--variant-borderWidth, 0px) * -1)",boxShadow:"var(--Textarea-focusedInset, inset) 0 0 0 calc(var(--Textarea-focused) * var(--Textarea-focusedThickness)) var(--Textarea-focusedHighlight)"}}),v({},h,{backgroundColor:(o=h==null?void 0:h.backgroundColor)!=null?o:e.vars.palette.background.surface,"&:hover":v({},(l=e.variants[`${r.variant}Hover`])==null?void 0:l[r.color],{backgroundColor:null,cursor:"text"}),[`&.${ae.disabled}`]:(m=e.variants[`${r.variant}Disabled`])==null?void 0:m[r.color],"&:focus-within::before":{"--Textarea-focused":"1"}})]}),_e=j(Le,{name:"JoyTextarea",slot:"Textarea",overridesResolver:(e,r)=>r.textarea})({resize:"none",border:"none",minWidth:0,outline:0,padding:0,paddingInlineEnd:"var(--Textarea-paddingInline)",flex:"auto",alignSelf:"stretch",color:"inherit",backgroundColor:"transparent",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontWeight:"inherit",lineHeight:"inherit","&::-webkit-input-placeholder":{color:"var(--Textarea-placeholderColor)",opacity:"var(--Textarea-placeholderOpacity)"},"&::-moz-placeholder":{color:"var(--Textarea-placeholderColor)",opacity:"var(--Textarea-placeholderOpacity)"},"&:-ms-input-placeholder":{color:"var(--Textarea-placeholderColor)",opacity:"var(--Textarea-placeholderOpacity)"},"&::-ms-input-placeholder":{color:"var(--Textarea-placeholderColor)",opacity:"var(--Textarea-placeholderOpacity)"}}),je=j("div",{name:"JoyTextarea",slot:"StartDecorator",overridesResolver:(e,r)=>r.startDecorator})(({theme:e})=>({display:"flex",marginInlineStart:"calc(var(--Textarea-paddingBlock) - var(--Textarea-paddingInline))",marginInlineEnd:"var(--Textarea-paddingBlock)",marginBlockEnd:"var(--Textarea-gap)",color:e.vars.palette.text.tertiary,cursor:"initial"})),Oe=j("div",{name:"JoyTextarea",slot:"EndDecorator",overridesResolver:(e,r)=>r.endDecorator})(({theme:e})=>({display:"flex",marginInlineStart:"calc(var(--Textarea-paddingBlock) - var(--Textarea-paddingInline))",marginInlineEnd:"var(--Textarea-paddingBlock)",marginBlockStart:"var(--Textarea-gap)",color:e.vars.palette.text.tertiary,cursor:"initial"})),Ae=g.forwardRef(function(r,a){var t,o,l,m,h,H,w;const T=Te({props:r,name:"JoyTextarea"}),C=ke(T,ae),{propsToForward:z,rootStateClasses:R,inputStateClasses:$,getRootProps:V,getInputProps:k,formControl:u,focused:M,error:O=!1,disabled:F=!1,size:n="md",color:x="neutral",variant:s="outlined",startDecorator:d,endDecorator:L,minRows:Z,maxRows:N,component:B,slots:D={},slotProps:y={}}=C,Y=ee(C,We),G=(t=(o=r.disabled)!=null?o:u==null?void 0:u.disabled)!=null?t:F,K=(l=(m=r.error)!=null?m:u==null?void 0:u.error)!=null?l:O,oe=(h=(H=r.size)!=null?H:u==null?void 0:u.size)!=null?h:n,{getColor:ne}=be(s),ie=ne(r.color,K?"danger":(w=u==null?void 0:u.color)!=null?w:x),I=v({},T,{color:ie,disabled:G,error:K,focused:M,size:oe,variant:s}),W=Pe(I),P=v({},Y,{component:B,slots:D,slotProps:y}),[le,se]=E("root",{ref:a,className:[W.root,R],elementType:Ee,externalForwardedProps:P,getSlotProps:V,ownerState:I}),[ce,de]=E("textarea",{additionalProps:{id:u==null?void 0:u.htmlFor,"aria-describedby":u==null?void 0:u["aria-describedby"]},className:[W.textarea,$],elementType:_e,internalForwardedProps:v({},z,{minRows:Z,maxRows:N}),externalForwardedProps:P,getSlotProps:k,ownerState:I}),[ue,pe]=E("startDecorator",{className:W.startDecorator,elementType:je,externalForwardedProps:P,ownerState:I}),[he,xe]=E("endDecorator",{className:W.endDecorator,elementType:Oe,externalForwardedProps:P,ownerState:I});return S.jsxs(le,v({},se,{children:[d&&S.jsx(ue,v({},pe,{children:d})),S.jsx(ce,v({},de)),L&&S.jsx(he,v({},xe,{children:L}))]}))});function Ue(e){return b({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"},child:[]}]})(e)}function Je(e){return b({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z"},child:[]}]})(e)}function qe(e){return b({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M4 18V14.3C4 13.4716 3.32843 12.8 2.5 12.8H2V11.2H2.5C3.32843 11.2 4 10.5284 4 9.7V6C4 4.34315 5.34315 3 7 3H8V5H7C6.44772 5 6 5.44772 6 6V10.1C6 10.9858 5.42408 11.7372 4.62623 12C5.42408 12.2628 6 13.0142 6 13.9V18C6 18.5523 6.44772 19 7 19H8V21H7C5.34315 21 4 19.6569 4 18ZM20 14.3V18C20 19.6569 18.6569 21 17 21H16V19H17C17.5523 19 18 18.5523 18 18V13.9C18 13.0142 18.5759 12.2628 19.3738 12C18.5759 11.7372 18 10.9858 18 10.1V6C18 5.44772 17.5523 5 17 5H16V3H17C18.6569 3 20 4.34315 20 6V9.7C20 10.5284 20.6716 11.2 21.5 11.2H22V12.8H21.5C20.6716 12.8 20 13.4716 20 14.3Z"},child:[]}]})(e)}function Ke(e){return b({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 16.3996 19.1598 20.1355 15.2122 21.4732L14.9859 21.5469L12.082 13.997C13.151 13.95 14.001 13.0544 14.001 12C14.001 10.8954 13.1055 10 12.001 10C10.8964 10 10.001 10.8954 10.001 12C10.001 13.0768 10.8519 13.9548 11.918 13.9983L9.01501 21.5466L8.78975 21.4732C4.84212 20.1355 2.00098 16.3996 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 14.9201 5.56547 17.4747 7.90198 18.8715L9.38145 15.023C8.5358 14.2896 8.00098 13.2073 8.00098 12C8.00098 9.79086 9.79184 8 12.001 8C14.2101 8 16.001 9.79086 16.001 12C16.001 13.2075 15.466 14.29 14.62 15.0234C15.1861 16.4969 15.6797 17.7803 16.0998 18.8729C18.4362 17.4751 20.001 14.9203 20.001 12C20.001 7.58172 16.4193 4 12.001 4Z"},child:[]}]})(e)}function Qe(e){return b({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"},child:[]}]})(e)}function Xe(e){return b({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M256 112v288m144-144H112"},child:[]}]})(e)}function er(e){return b({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"},child:[]}]})(e)}function rr(e){return b({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"rect",attr:{width:"320",height:"416",x:"96",y:"48",fill:"none",strokeLinejoin:"round",strokeWidth:"32",rx:"48",ry:"48"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M176 128h160m-160 80h160m-160 80h80"},child:[]}]})(e)}function Fe(e){return b({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M32 192 256 64l224 128-224 128L32 192z"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M112 240v128l144 80 144-80V240m80 128V192M256 320v128"},child:[]}]})(e)}function Ze({wrap:e}={wrap:!1}){return i(f,{direction:e?"row":"column",flexWrap:"wrap",justifyContent:"space-between",gap:2,p:1,children:q.education.map(r=>c(f,{direction:"row",gap:1.5,children:[i(re,{color:"neutral",variant:"soft",size:"lg",sx:a=>({borderRadius:a.getCssVar("radius-md"),border:`1px solid ${a.getCssVar("palette-divider")}`}),children:r.icon?i(te,{src:r.icon,placeholder:r.icon,alt:r.school,style:{width:"100%",height:"100%"}}):i(Fe,{})}),c(f,{children:[c(p,{level:"body1",display:"flex",alignItems:"baseline",flexWrap:"wrap",gap:1,children:[r.url?i(p,{component:"a",href:r.url,textColor:"inherit",target:"_blank",sx:{textDecoration:"none","&:hover":{textDecoration:"underline"}},children:r.school}):r.school,c(p,{level:"body2",component:"span",textColor:"text.secondary",children:[r.start," - ",r.end]})]}),c(p,{level:"body2",children:[r.degree," - ",r.major]})]})]},`${r.school}-${r.major}-${r.start}-${r.end}`))})}function Ne(){return i(f,{gap:2,p:1,children:q.experience.reduce((e,r)=>{const a=e[e.length-1];return a&&a.length&&a[0].company===r.company?(a.push(r),e):[...e,[r]]},[]).map((e,r)=>{const a=r===q.experience.length-1;return c(f,{direction:"row",gap:1.5,children:[i(re,{color:"neutral",variant:"soft",size:"lg",sx:t=>({borderRadius:t.getCssVar("radius-md"),border:`1px solid ${t.getCssVar("palette-divider")}`}),children:e[0].icon?i(te,{src:e[0].icon,placeholder:e[0].icon,alt:e[0].company,style:{width:"100%",height:"100%"}}):i(De,{})}),i(f,{gap:2,sx:t=>({position:"relative","&::before":{content:'""',position:"absolute",width:"1px",height:"calc(100% - 3rem - 12px)",background:a?`linear-gradient(to bottom, ${t.palette.divider}, transparent)`:t.palette.divider,left:"calc(-1.5rem - 12px)",top:"calc(3rem + 12px)"}}),children:e.map((t,o)=>{const l=J(t.start,"MMM YYYY").toDate(),m=J(t.end==="Present"?new Date(Date.now()):t.end,"MMM YYYY").toDate(),h=J.duration(m.getTime()-l.getTime()),H=h.years(),w=h.months()+1,T=`${H>0?`${H} year${H!==1?"s":""} `:""}${w} month${w!==1?"s":""}`;return c(f,{gap:.5,children:[c(p,{level:"body1",display:"flex",alignItems:"baseline",flexWrap:"wrap",columnGap:1,rowGap:.3,children:[o===0&&(t.url?i(p,{component:"a",href:t.url,textColor:"inherit",target:"_blank",sx:{textDecoration:"none","&:hover":{textDecoration:"underline"}},children:t.company}):t.company),e.length===1&&c(ze,{children:[c(p,{level:"body2",component:"span",textColor:"text.secondary",children:[t.start," - ",t.end]}),i(p,{level:"body2",textColor:"text.tertiary",children:` (${T})`})]})]}),c(p,{level:"body2",display:"flex",alignItems:"baseline",flexWrap:"wrap",columnGap:1,rowGap:.3,children:[i(p,{fontWeight:"lg",textColor:"text.primary",children:t.position}),e.length>1?c(p,{level:"body2",component:"span",textColor:"text.secondary",children:[t.start," - ",t.end]}):c(p,{level:"body2",component:"span",textColor:"text.secondary",children:[" ",t.contract," - ",t.location]})]}),e.length>1&&c(p,{level:"body2",textColor:"text.secondary",fontWeight:"md",children:[t.contract," - ",t.location]}),i(f,{direction:"row",alignItems:"start",flexWrap:"wrap",gap:1,paddingY:.5,children:t.skills.map(C=>i(Ie,{variant:"outlined",color:"neutral",size:"sm",sx:z=>({borderColor:z.palette.divider}),children:C},C))}),c(p,{level:"body3",textColor:"text.tertiary",component:"div",children:[typeof t.description=="string"?t.description:null,typeof t.description=="object"?i(f,{children:t.description.map(C=>c(p,{children:["- ",C]},C))}):null]})]},`${t.company}-${t.position}-${t.start}-${t.end}`)})})]},`${e[0].company}-${Math.random()}}`)})})}function tr({category:e}){const r=we(),a=Re.createRef(),t=Se(e,{ref:r,keys:null,from:{opacity:0},enter:{opacity:1},leave:{opacity:0,filter:"blur(10px)",position:"absolute"}});return g.useEffect(()=>{var o,l;(l=(o=a.current)==null?void 0:o.parentElement)==null||l.scrollTo({top:0,behavior:"smooth"}),r.start()},[e]),i(f,{direction:"column",ref:a,children:t((o,l)=>{switch(l){case"education":return i(U.div,{style:o,children:i(Ze,{})});case"experience":return i(U.div,{style:o,children:i(Ne,{})});default:return i(U.div,{style:o,children:c(f,{children:["The currently selected category is ",e," but there is no content for it yet."]})})}})})}export{tr as D,Ne as E,Xe as I,qe as R,Ae as T,Qe as a,rr as b,Ue as c,Ke as d,Je as e,Ze as f,er as g};
