import{a as Ue,r as n,c as ae,_ as f,b as pt,$ as ft,j as k,d as Ye,g as Je,s as _,e as Xe,f as Qe,h as _e,i as Q,m as Ge,k as gt,a1 as mt,a2 as ht,l as Pe,G as K,a3 as vt,q as me,a4 as bt,t as y,S as C,v as i,y as Ae,I as De,T as A,x as Le,R as xt,F as St,E as Ze,N as Ct,O as yt,P as Oe,X as kt,L as It}from"./index-cQVb0eqe.js";import{p as Rt,q as Pt,C as wt,r as zt,D as Dt,A as Lt,s as Mt,B as Bt,P as Te,t as Vt,v as Ht,e as Ee}from"./index-Xl4cXyRr.js";import{d as At,c as Ot,m as we,l as Tt,L as ze,u as Et,a as Wt,C as Ft,b as $t,S as jt,R as Nt,e as Ut,s as Yt,f as Jt,g as Xt,I as Qt,p as ge,r as We,i as _t}from"./Projects-gUZLnAWd.js";function Gt(e){const{value:t,label:a,disabled:l,rootRef:d,id:s}=e,{getRootProps:r,rootRef:h,highlighted:u,selected:x}=At({item:t}),m=Ue(s),I=n.useRef(null),D=n.useMemo(()=>({disabled:l,label:a,value:t,ref:I,id:m}),[l,a,t,m]),{index:M}=Ot(t,D),w=ae(d,I,h);return{getRootProps:(R={})=>f({},R,r(R),{id:m,ref:w,role:"option","aria-selected":x}),highlighted:u,index:M,selected:x,rootRef:w}}const qe={buttonClick:"buttonClick"},Zt=e=>{const{label:t,value:a}=e;return typeof t=="string"?t:typeof a=="string"?a:String(e)};function qt(e,t){const{open:a}=e,{context:{selectionMode:l}}=t;if(t.type===qe.buttonClick){var d;const u=(d=e.selectedValues[0])!=null?d:we(null,"start",t.context);return f({},e,{open:!a,highlightedValue:a?null:u})}const s=Tt(e,t);switch(t.type){case ze.keyDown:if(e.open){if(t.event.key==="Escape")return f({},s,{open:!1});if(l==="single"&&(t.event.key==="Enter"||t.event.key===" "))return f({},s,{open:!1})}else{if(t.event.key==="Enter"||t.event.key===" "||t.event.key==="ArrowDown"){var r;return f({},e,{open:!0,highlightedValue:(r=e.selectedValues[0])!=null?r:we(null,"start",t.context)})}if(t.event.key==="ArrowUp"){var h;return f({},e,{open:!0,highlightedValue:(h=e.selectedValues[0])!=null?h:we(null,"end",t.context)})}}break;case ze.itemClick:if(l==="single")return f({},s,{open:!1});break;case ze.blur:return f({},s,{open:!1});default:return s}return s}function Fe(e,t){return a=>{const l=f({},a,e(a));return f({},l,t(l))}}function Kt(e){e.preventDefault()}function eo(e){const{areOptionsEqual:t,buttonRef:a,defaultOpen:l=!1,defaultValue:d,disabled:s=!1,listboxId:r,listboxRef:h,multiple:u=!1,onChange:x,onHighlightChange:m,onOpenChange:I,open:D,options:M,getOptionAsString:w=Zt,value:R}=e,L=n.useRef(null),$=ae(a,L),S=n.useRef(null),O=Ue(r);let B;R===void 0&&d===void 0?B=[]:d!==void 0&&(u?B=d:B=d==null?[]:[d]);const T=n.useMemo(()=>{if(R!==void 0)return u?R:R==null?[]:[R]},[R,u]),{subitems:o,contextValue:g}=Et(),v=n.useMemo(()=>M!=null?new Map(M.map((c,p)=>[c.value,{value:c.value,label:c.label,disabled:c.disabled,ref:n.createRef(),id:`${O}_${p}`}])):o,[M,o,O]),E=ae(h,S),{getRootProps:W,active:ee,focusVisible:G,rootRef:j}=pt({disabled:s,rootRef:$}),N=n.useMemo(()=>Array.from(v.keys()),[v]),V=n.useCallback(c=>{if(t!==void 0){const p=N.find(b=>t(b,c));return v.get(p)}return v.get(c)},[v,t,N]),he=n.useCallback(c=>{var p;const b=V(c);return(p=b==null?void 0:b.disabled)!=null?p:!1},[V]),le=n.useCallback(c=>{const p=V(c);return p?w(p):""},[V,w]),ie=n.useMemo(()=>({selectedValues:T,open:D}),[T,D]),te=n.useCallback(c=>{var p;return(p=v.get(c))==null?void 0:p.id},[v]),ve=n.useCallback((c,p)=>{if(u)x==null||x(c,p);else{var b;x==null||x(c,(b=p[0])!=null?b:null)}},[u,x]),be=n.useCallback((c,p)=>{m==null||m(c,p??null)},[m]),xe=n.useCallback((c,p,b)=>{if(p==="open"&&(I==null||I(b),b===!1&&(c==null?void 0:c.type)!=="blur")){var H;(H=L.current)==null||H.focus()}},[I]),P={getInitialState:()=>{var c;return{highlightedValue:null,selectedValues:(c=B)!=null?c:[],open:l}},getItemId:te,controlledProps:ie,itemComparer:t,isItemDisabled:he,rootRef:j,onChange:ve,onHighlightChange:be,onStateChange:xe,reducerActionContext:n.useMemo(()=>({multiple:u}),[u]),items:N,getItemAsString:le,selectionMode:u?"multiple":"single",stateReducer:qt},{dispatch:se,getRootProps:ce,contextValue:de,state:{open:U,highlightedValue:F,selectedValues:Y},rootRef:ue}=Wt(P),pe=c=>p=>{var b;if(c==null||(b=c.onClick)==null||b.call(c,p),!p.defaultMuiPrevented){const H={type:qe.buttonClick,event:p};se(H)}};ft(()=>{if(F!=null){var c;const p=(c=V(F))==null?void 0:c.ref;if(!S.current||!(p!=null&&p.current))return;const b=S.current.getBoundingClientRect(),H=p.current.getBoundingClientRect();H.top<b.top?S.current.scrollTop-=b.top-H.top:H.bottom>b.bottom&&(S.current.scrollTop+=H.bottom-b.bottom)}},[F,V]);const oe=n.useCallback(c=>V(c),[V]),Se=(c={})=>f({},c,{onClick:pe(c),ref:ue,role:"combobox","aria-expanded":U,"aria-controls":O}),Ce=(c={})=>{const p=Fe(W,ce);return Fe(p,Se)(c)},ye=(c={})=>f({},c,{id:O,role:"listbox","aria-multiselectable":u?"true":void 0,ref:E,onMouseDown:Kt});n.useDebugValue({selectedOptions:Y,highlightedOption:F,open:U});const ke=n.useMemo(()=>f({},de,g),[de,g]);let re;return e.multiple?re=Y:re=Y.length>0?Y[0]:null,{buttonActive:ee,buttonFocusVisible:G,buttonRef:j,contextValue:ke,disabled:s,dispatch:se,getButtonProps:Ce,getListboxProps:ye,getOptionMetadata:oe,listboxRef:ue,open:U,options:N,value:re,highlightedOption:F}}function to(e){const{value:t,children:a}=e,{dispatch:l,getItemIndex:d,getItemState:s,registerHighlightChangeHandler:r,registerSelectionChangeHandler:h,registerItem:u,totalSubitemCount:x}=t,m=n.useMemo(()=>({dispatch:l,getItemState:s,getItemIndex:d,registerHighlightChangeHandler:r,registerSelectionChangeHandler:h}),[l,d,s,r,h]),I=n.useMemo(()=>({getItemIndex:d,registerItem:u,totalSubitemCount:x}),[u,d,x]);return k.jsx(Ft.Provider,{value:I,children:k.jsx($t.Provider,{value:m,children:a})})}const oo=n.createContext(void 0);function ro(e){return Je("MuiOption",e)}const no=Ye("MuiOption",["root","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","focusVisible","disabled","selected","highlighted","variantPlain","variantSoft","variantOutlined","variantSolid"]),ao=["component","children","disabled","value","label","variant","color","slots","slotProps"],lo=e=>{const{disabled:t,highlighted:a,selected:l}=e;return Ge({root:["root",t&&"disabled",a&&"highlighted",l&&"selected"]},ro,{})},io=_(jt,{name:"JoyOption",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e,ownerState:t})=>{var a;const l=(a=e.variants[`${t.variant}Hover`])==null?void 0:a[t.color];return{[`&.${no.highlighted}`]:{backgroundColor:l==null?void 0:l.backgroundColor}}}),so=n.forwardRef(function(t,a){var l;const d=Xe({props:t,name:"JoyOption"}),{component:s="li",children:r,disabled:h=!1,value:u,label:x,variant:m="plain",color:I="neutral",slots:D={},slotProps:M={}}=d,w=Qe(d,ao),R=n.useContext(Nt),L=n.useRef(null),$=ae(L,a),S=x??(typeof r=="string"?r:(l=L.current)==null?void 0:l.innerText),{getRootProps:O,selected:B,highlighted:T,index:o}=Gt({disabled:h,label:S,value:u,rootRef:$}),{getColor:g}=_e(m),v=g(t.color,B?"primary":I),E=f({},d,{disabled:h,selected:B,highlighted:T,index:o,component:s,variant:m,color:v,row:R}),W=lo(E),ee=f({},w,{component:s,slots:D,slotProps:M}),[G,j]=Q("root",{ref:a,getSlotProps:O,elementType:io,externalForwardedProps:ee,className:W.root,ownerState:E});return k.jsx(G,f({},j,{children:r}))}),co=Rt(k.jsx("path",{d:"m12 5.83 2.46 2.46c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 3.7a.9959.9959 0 0 0-1.41 0L8.12 6.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 5.83zm0 12.34-2.46-2.46a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L12 18.17z"}),"Unfold");function uo(e){return Je("MuiSelect",e)}const ne=Ye("MuiSelect",["root","button","indicator","startDecorator","endDecorator","popper","listbox","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","sizeSm","sizeMd","sizeLg","focusVisible","disabled","expanded"]);var $e;const po=["action","autoFocus","children","defaultValue","defaultListboxOpen","disabled","getSerializedValue","placeholder","listboxId","listboxOpen","onChange","onListboxOpenChange","onClose","renderValue","value","size","variant","color","startDecorator","endDecorator","indicator","aria-describedby","aria-label","aria-labelledby","id","name","slots","slotProps"];function fo(e){var t;return(t=e==null?void 0:e.label)!=null?t:""}function go(e){return(e==null?void 0:e.value)==null?"":typeof e.value=="string"||typeof e.value=="number"?e.value:JSON.stringify(e.value)}const mo=[{name:"offset",options:{offset:[0,4]}},{name:"equalWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`}}],ho=e=>{const{color:t,disabled:a,focusVisible:l,size:d,variant:s,open:r}=e,h={root:["root",a&&"disabled",l&&"focusVisible",r&&"expanded",s&&`variant${Pe(s)}`,t&&`color${Pe(t)}`,d&&`size${Pe(d)}`],button:["button"],startDecorator:["startDecorator"],endDecorator:["endDecorator"],indicator:["indicator",r&&"expanded"],listbox:["listbox",r&&"expanded",a&&"disabled"]};return Ge(h,uo,{})},vo=_("div",{name:"JoySelect",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e,ownerState:t})=>{var a,l,d,s;const r=(a=e.variants[`${t.variant}`])==null?void 0:a[t.color];return[f({"--Select-radius":e.vars.radius.sm,"--Select-gap":"0.5rem","--Select-placeholderOpacity":.5,"--Select-focusedThickness":e.vars.focus.thickness},t.color==="context"?{"--Select-focusedHighlight":e.vars.palette.focusVisible}:{"--Select-focusedHighlight":(l=e.vars.palette[t.color==="neutral"?"primary":t.color])==null?void 0:l[500]},{"--Select-indicatorColor":r!=null&&r.backgroundColor?r==null?void 0:r.color:e.vars.palette.text.tertiary},t.size==="sm"&&{"--Select-minHeight":"2rem","--Select-paddingInline":"0.5rem","--Select-decoratorChildHeight":"min(1.5rem, var(--Select-minHeight))","--Icon-fontSize":"1.25rem"},t.size==="md"&&{"--Select-minHeight":"2.5rem","--Select-paddingInline":"0.75rem","--Select-decoratorChildHeight":"min(2rem, var(--Select-minHeight))","--Icon-fontSize":"1.5rem"},t.size==="lg"&&{"--Select-minHeight":"3rem","--Select-paddingInline":"1rem","--Select-decoratorChildHeight":"min(2.375rem, var(--Select-minHeight))","--Icon-fontSize":"1.75rem"},{"--Select-decoratorChildOffset":"min(calc(var(--Select-paddingInline) - (var(--Select-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Select-decoratorChildHeight)) / 2), var(--Select-paddingInline))","--_Select-paddingBlock":"max((var(--Select-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Select-decoratorChildHeight)) / 2, 0px)","--Select-decoratorChildRadius":"max(var(--Select-radius) - var(--variant-borderWidth, 0px) - var(--_Select-paddingBlock), min(var(--_Select-paddingBlock) + var(--variant-borderWidth, 0px), var(--Select-radius) / 2))","--Button-minHeight":"var(--Select-decoratorChildHeight)","--IconButton-size":"var(--Select-decoratorChildHeight)","--Button-radius":"var(--Select-decoratorChildRadius)","--IconButton-radius":"var(--Select-decoratorChildRadius)",boxSizing:"border-box",minWidth:0,minHeight:"var(--Select-minHeight)",position:"relative",display:"flex",alignItems:"center",borderRadius:"var(--Select-radius)",cursor:"pointer"},!r.backgroundColor&&{backgroundColor:e.vars.palette.background.surface},t.size&&{paddingBlock:{sm:2,md:3,lg:4}[t.size]},{paddingInline:"var(--Select-paddingInline)",fontFamily:e.vars.fontFamily.body,fontSize:e.vars.fontSize.md},t.size==="sm"&&{fontSize:e.vars.fontSize.sm},{"&::before":{boxSizing:"border-box",content:'""',display:"block",position:"absolute",pointerEvents:"none",top:0,left:0,right:0,bottom:0,zIndex:1,borderRadius:"inherit",margin:"calc(var(--variant-borderWidth, 0px) * -1)"},[`&.${ne.focusVisible}`]:{"--Select-indicatorColor":r==null?void 0:r.color,"&::before":{boxShadow:"inset 0 0 0 var(--Select-focusedThickness) var(--Select-focusedHighlight)"}},[`&.${ne.disabled}`]:{"--Select-indicatorColor":"inherit"}}),f({},r,{"&:hover":(d=e.variants[`${t.variant}Hover`])==null?void 0:d[t.color],[`&.${ne.disabled}`]:(s=e.variants[`${t.variant}Disabled`])==null?void 0:s[t.color]})]}),bo=_("button",{name:"JoySelect",slot:"Button",overridesResolver:(e,t)=>t.button})(({ownerState:e})=>f({border:0,outline:0,background:"none",padding:0,fontSize:"inherit",color:"inherit",alignSelf:"stretch",display:"flex",alignItems:"center",flex:1,fontFamily:"inherit",cursor:"pointer",whiteSpace:"nowrap",overflow:"hidden"},(e.value===null||e.value===void 0)&&{opacity:"var(--Select-placeholderOpacity)"},{"&::before":{content:'""',display:"block",position:"absolute",top:"calc(-1 * var(--variant-borderWidth, 0px))",left:"calc(-1 * var(--variant-borderWidth, 0px))",right:"calc(-1 * var(--variant-borderWidth, 0px))",bottom:"calc(-1 * var(--variant-borderWidth, 0px))",borderRadius:"var(--Select-radius)"}})),xo=_(Ut,{name:"JoySelect",slot:"Listbox",overridesResolver:(e,t)=>t.listbox})(({theme:e,ownerState:t})=>{var a;const l=t.color==="context"||(a=e.variants[t.variant])==null?void 0:a[t.color];return f({"--focus-outline-offset":`calc(${e.vars.focus.thickness} * -1)`,"--List-radius":e.vars.radius.sm,"--ListItem-stickyBackground":(l==null?void 0:l.backgroundColor)||(l==null?void 0:l.background)||e.vars.palette.background.popup,"--ListItem-stickyTop":"calc(var(--List-padding, var(--ListDivider-gap)) * -1)"},Yt,{minWidth:"max-content",maxHeight:"44vh",overflow:"auto",outline:0,boxShadow:e.shadow.md,zIndex:e.vars.zIndex.popup},!(l!=null&&l.backgroundColor)&&{backgroundColor:e.vars.palette.background.popup})}),So=_("span",{name:"JoySelect",slot:"StartDecorator",overridesResolver:(e,t)=>t.startDecorator})(({theme:e,ownerState:t})=>f({"--Button-margin":"0 0 0 calc(var(--Select-decoratorChildOffset) * -1)","--IconButton-margin":"0 0 0 calc(var(--Select-decoratorChildOffset) * -1)","--Icon-margin":"0 0 0 calc(var(--Select-paddingInline) / -4)",display:"inherit",alignItems:"center",marginInlineEnd:"var(--Select-gap)",color:e.vars.palette.text.tertiary},t.focusVisible&&{color:"var(--Select-focusedHighlight)"})),Co=_("span",{name:"JoySelect",slot:"EndDecorator",overridesResolver:(e,t)=>t.endDecorator})(({theme:e,ownerState:t})=>{var a;const l=(a=e.variants[t.variant])==null?void 0:a[t.color];return{"--Button-margin":"0 calc(var(--Select-decoratorChildOffset) * -1) 0 0","--IconButton-margin":"0 calc(var(--Select-decoratorChildOffset) * -1) 0 0","--Icon-margin":"0 calc(var(--Select-paddingInline) / -4) 0 0",display:"inherit",alignItems:"center",marginInlineStart:"var(--Select-gap)",color:l==null?void 0:l.color}}),yo=_("span",{name:"JoySelect",slot:"Indicator"})(({ownerState:e})=>f({},e.size==="sm"&&{"--Icon-fontSize":"1.125rem"},e.size==="md"&&{"--Icon-fontSize":"1.25rem"},e.size==="lg"&&{"--Icon-fontSize":"1.5rem"},{color:"var(--Select-indicatorColor)",display:"inherit",alignItems:"center",marginInlineStart:"var(--Select-gap)",marginInlineEnd:"calc(var(--Select-paddingInline) / -4)",[`.${ne.endDecorator} + &`]:{marginInlineStart:"calc(var(--Select-gap) / 2)"}})),ko=n.forwardRef(function(t,a){var l,d,s,r,h;const u=Xe({props:t,name:"JoySelect"}),x=u,{action:m,autoFocus:I,children:D,defaultValue:M,defaultListboxOpen:w=!1,disabled:R,getSerializedValue:L=go,placeholder:$,listboxId:S,listboxOpen:O,onChange:B,onListboxOpenChange:T,onClose:o,renderValue:g,value:v,size:E="md",variant:W="outlined",color:ee="neutral",startDecorator:G,endDecorator:j,indicator:N=$e||($e=k.jsx(co,{})),"aria-describedby":V,"aria-label":he,"aria-labelledby":le,id:ie,name:te,slots:ve={},slotProps:be={}}=x,xe=Qe(x,po),P=n.useContext(Pt),se=(l=(d=t.disabled)!=null?d:P==null?void 0:P.disabled)!=null?l:R,ce=(s=(r=t.size)!=null?r:P==null?void 0:P.size)!=null?s:E,{getColor:de}=_e(W),U=de(t.color,P!=null&&P.error?"danger":(h=P==null?void 0:P.color)!=null?h:ee),F=g??fo,[Y,ue]=n.useState(null),pe=n.useRef(null),oe=n.useRef(null),Se=n.useRef(null),Ce=ae(a,pe);n.useImperativeHandle(m,()=>({focusVisible:()=>{var z;(z=oe.current)==null||z.focus()}}),[]),n.useEffect(()=>{ue(pe.current)},[]),n.useEffect(()=>{I&&oe.current.focus()},[I]);const ye=n.useCallback(z=>{T==null||T(z),z||o==null||o()},[o,T]),{buttonActive:ke,buttonFocusVisible:re,contextValue:c,disabled:p,getButtonProps:b,getListboxProps:H,getOptionMetadata:Me,open:Be,value:Ie}=eo({buttonRef:oe,defaultOpen:w,defaultValue:M,disabled:se,listboxId:S,multiple:!1,onChange:B,onOpenChange:ye,open:O,value:v}),J=f({},u,{active:ke,defaultListboxOpen:w,disabled:p,focusVisible:re,open:Be,renderValue:F,value:Ie,size:ce,variant:W,color:U}),Z=ho(J),q=f({},xe,{slots:ve,slotProps:be}),Re=n.useMemo(()=>{var z;return(z=Me(Ie))!=null?z:null},[Me,Ie]),[Ke,et]=Q("root",{ref:Ce,className:Z.root,elementType:vo,externalForwardedProps:q,ownerState:J}),[tt,ot]=Q("button",{additionalProps:{"aria-describedby":V??(P==null?void 0:P["aria-describedby"]),"aria-label":he,"aria-labelledby":le??(P==null?void 0:P.labelId),id:ie??(P==null?void 0:P.htmlFor),name:te},className:Z.button,elementType:bo,externalForwardedProps:q,getSlotProps:b,ownerState:J}),[rt,X]=Q("listbox",{additionalProps:{ref:Se,anchorEl:Y,disablePortal:!0,open:Be,placement:"bottom",keepMounted:!0},className:Z.listbox,elementType:xo,externalForwardedProps:q,getSlotProps:H,ownerState:f({},J,{nesting:!1,row:!1,wrap:!1}),getSlotOwnerState:z=>({size:z.size||ce,variant:z.variant||"outlined",color:z.color||"neutral",disableColorInversion:!z.disablePortal})}),[nt,at]=Q("startDecorator",{className:Z.startDecorator,elementType:So,externalForwardedProps:q,ownerState:J}),[lt,it]=Q("endDecorator",{className:Z.endDecorator,elementType:Co,externalForwardedProps:q,ownerState:J}),[st,ct]=Q("indicator",{className:Z.indicator,elementType:yo,externalForwardedProps:q,ownerState:J}),dt=n.useMemo(()=>f({},c,{color:U}),[U,c]),ut=n.useMemo(()=>[...mo,...X.modifiers||[]],[X.modifiers]);let fe=null;if(Y){var Ve,He;fe=k.jsx(rt,f({},X,{className:gt(X.className,((Ve=X.ownerState)==null?void 0:Ve.color)==="context"&&ne.colorContext),modifiers:ut},!((He=u.slots)!=null&&He.listbox)&&{as:mt,slots:{root:X.as||"ul"}},{children:k.jsx(to,{value:dt,children:k.jsx(oo.Provider,{value:"select",children:k.jsx(Jt,{nested:!0,children:D})})})})),X.disablePortal||(fe=k.jsx(ht.Provider,{value:void 0,children:fe}))}return k.jsxs(n.Fragment,{children:[k.jsxs(Ke,f({},et,{children:[G&&k.jsx(nt,f({},at,{children:G})),k.jsx(tt,f({},ot,{children:Re?F(Re):$})),j&&k.jsx(lt,f({},it,{children:j})),N&&k.jsx(st,f({},ct,{children:N}))]})),fe,te&&k.jsx("input",{type:"hidden",name:te,value:L(Re)})]})});function je(e){return K({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"},child:[]}]})(e)}function Io(e){return K({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M70.5 265.4l59.6-59.4c2.6-2.6 6.1-4.1 9.9-4.1 3.7 0 7.3 1.4 9.9 4.1 2.6 2.6 4.1 6.1 4.1 9.9s-1.5 7.3-4.1 9.9l-.1.1-41.1 40.1H370c13.2 0 25.8-5.2 35.3-14.7 9.5-9.4 14.7-21.9 14.7-35.3v-48c0-7.7 6.3-14 14-14s14 6.3 14 14v48c0 20.8-8.1 40.3-22.9 55.1-14.8 14.8-34.3 22.9-55.1 22.9H108.3l39.6 40.2c2.6 2.6 4.1 6.1 4.1 9.9 0 3.7-1.4 7.3-4.1 9.9l-.1.1c-2.7 2.5-6.2 3.9-9.8 3.9-3.9 0-7.3-1.4-9.9-4.1l-57.6-57.4c-4.2-4.2-6.5-9.8-6.5-15.7 0-5.8 2.3-11.3 6.5-15.4z"},child:[]}]})(e)}function Ro(e){return K({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"},child:[]}]})(e)}function Po(e){return K({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405.9 288.1c-2.6-2.6-6.2-4.1-9.9-4.1s-7.2 1.4-9.9 4.1c-2.7 2.6-4.1 6.2-4.1 9.9s1.5 7.2 4.1 9.9l16.3 16.2h-75.5l-124-155-.1-.1c-2.6-3.1-6.7-5-10.8-5H78c-7.7 0-14 6.3-14 14s6.3 14 14 14h107.4l52.5 66-52.5 66H78c-7.7 0-14 6.3-14 14s6.3 14 14 14h114c4.1 0 8-1.8 10.7-5l.1-.1 53.2-66.8 53.2 66.8.1.1c2.7 3.2 6.6 5 10.7 5h84.4l-16.3 16.2c-2.7 2.6-4.1 6.1-4.1 9.9 0 3.7 1.5 7.2 4.1 9.9 2.6 2.6 6.2 4.1 9.9 4.1s7.2-1.4 9.9-4.1l33.6-33.4c4.2-4.1 6.5-9.6 6.5-15.5s-2.3-11.4-6.5-15.5l-35.6-35.5z"},child:[]},{tag:"path",attr:{d:"M279.4 235.4c1.1 1.4 2.8 2.1 4.6 2.1h.1c1.8 0 3.5-.8 4.6-2.2l37.9-47.3h75.8l-16.3 16.2c-2.7 2.6-4.1 6.1-4.1 9.9 0 3.7 1.5 7.2 4.1 9.9 2.6 2.6 6.2 4.1 9.9 4.1s7.2-1.4 9.9-4.1l35.6-35.4c4.2-4.1 6.5-9.7 6.5-15.5 0-5.9-2.3-11.4-6.5-15.5l-33.6-33.4c-2.6-2.6-6.2-4.1-9.9-4.1s-7.2 1.4-9.9 4.1c-2.7 2.6-4.1 6.2-4.1 9.9s1.5 7.2 4.1 9.9l16.3 16.2H320c-4.1 0-8 1.8-10.7 5l-.1.1-40.3 50.2c-1.8 2.2-1.8 5.4.1 7.6l10.4 12.3z"},child:[]}]})(e)}function wo(e){return K({tag:"svg",attr:{version:"1.1",id:"search",x:"0px",y:"0px",viewBox:"0 0 24 24",style:"enable-background:new 0 0 24 24;"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:`M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z`},child:[]}]}]})(e)}function zo(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Wi-Fi_Off"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M10.37,6.564a12.392,12.392,0,0,1,10.71,3.93c.436.476,1.141-.233.708-.708A13.324,13.324,0,0,0,10.37,5.564c-.631.076-.638,1.077,0,1Z"},child:[]},{tag:"path",attr:{d:"M13.907,10.283A8.641,8.641,0,0,1,18.349,12.9c.434.477,1.139-.232.707-.707a9.586,9.586,0,0,0-4.883-2.871c-.626-.146-.893.818-.266.965Z"},child:[]},{tag:"circle",attr:{cx:"12.003",cy:"16.922",r:"1.12"},child:[]},{tag:"path",attr:{d:"M19.773,19.06a.5.5,0,0,1-.71.71l-5.84-5.84A4.478,4.478,0,0,0,8.7,15.24c-.43.48-1.14-.23-.71-.7a5.47,5.47,0,0,1,4.06-1.78l-2.37-2.37a8.693,8.693,0,0,0-4.03,2.53c-.43.48-1.13-.23-.7-.71A9.439,9.439,0,0,1,8.893,9.6L6.883,7.59a12.557,12.557,0,0,0-3.96,2.94.5.5,0,1,1-.7-.71,13.109,13.109,0,0,1,3.91-2.98l-1.9-1.9a.5.5,0,0,1,.71-.71Z"},child:[]}]}]}]})(e)}function Ne({children:e,title:t,subtitle:a}){const l=me();return y(C,{direction:"row",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:l?3:5,padding:l?"2rem 3rem":15,sx:l?d=>({background:d.palette.background.body,width:"100vw",marginX:"-1rem",zIndex:1}):void 0,children:[e,y(C,{direction:"column",gap:.5,maxWidth:"25rem",textAlign:l?"center":"left",children:[i(A,{level:"h3",fontSize:"clamp(1.2rem, 5vw, 1.875rem)",children:t}),i(A,{level:"body2",children:a})]})]})}function Do({project:e,open:t,onClick:a}){const[l,d]=n.useState(!1),s=me();return y(C,{id:e.title,direction:s?"column":"row",padding:2,gap:2,onClick:()=>a(),onMouseDown:()=>d(!0),onMouseUp:()=>d(!1),className:`${t?"open":""} ${l?"pressed":""}`,alignItems:"stretch",flexWrap:"wrap",sx:r=>({willChange:"filter",transition:"all ease .2s",position:"relative",cursor:"pointer",borderRadius:"1rem",backgroundColor:r.palette.background.body,border:"1px solid transparent",overflow:"hidden","&:hover, &.open, &.pressed":{zIndex:1,border:`1px solid ${r.palette.text.primary}`,filter:`drop-shadow(0 .4rem 0 ${r.palette.text.primary})`,transform:"translateY(-.4rem)","&:after":{content:'""',position:"absolute",bottom:"-.4rem",left:0,width:"100%",height:".4rem",backgroundColor:"transparent"},"& .illustration":{opacity:.8},"& .icon":{backgroundColor:r.palette.text.primary,color:r.palette.background.level1},"& + hr":{display:"none"}},"&.open":{marginY:".8rem"},"&.pressed":{filter:`drop-shadow(0 .2rem 0 ${r.palette.text.primary})`,transform:"translateY(-.2rem)"}}),children:[y(C,{direction:s?"row":"column",gap:s?2:1,children:[i(Lt,{component:"span",className:"icon",variant:"plain",size:"md",sx:{borderRadius:".5rem",transition:"all ease .2s",zIndex:1},children:ge[e.platform].icon({size:"1.3rem"})}),i(C,{component:"div",className:`interactions${t?" open":""}`,direction:s?"row":"column",gap:s?2:1,sx:{transition:"all ease .4s",opacity:0,maxHeight:0,transform:`${s?"translateX(-100%)":"translateY(-100%)"} scale(.8)`,"&.open":{opacity:1,maxHeight:"100vmax",transform:`${s?"translateX(0)":"translateY(0)"} translateY(0) scale(1)`}},children:Object.entries(_t).map(([r,h])=>e.interactions!==void 0&&Object.keys(e.interactions).includes(r)?i(C,{direction:s?"row":"column",alignItems:"center",children:y(C,{direction:s?"row":"column",alignItems:"center",gap:.8,sx:{fontSize:s?"1rem":"0.8rem",padding:".3rem .1rem",lineHeight:.9},children:[h.icon({}),i("span",{style:{fontSize:"0.9em"},children:e.interactions[r]})]})},r):null)})]}),y(C,{zIndex:1,gap:.5,flex:1,sx:{minWidth:"min(100%, 20rem)"},children:[y(A,{level:"h3",alignItems:"baseline",children:[e.title,i(A,{textColor:"text.tertiary",fontWeight:"300",marginLeft:1,children:ge[e.platform].sublabel.toLocaleLowerCase()})]}),i(A,{level:"body2",sx:{flex:1,"& p":{margin:0}},children:i("span",{dangerouslySetInnerHTML:{__html:e.description||""}})}),i(A,{level:"body3",marginTop:1,children:i(St,{children:i(A,{textColor:"text.primary",children:e.language})})})]}),i(C,{direction:"row",zIndex:1,gap:1,alignItems:"start",marginTop:s?".5rem":"initial",justifyContent:s?"end":"initial",width:s?"100%":"initial",children:e.demo&&i(Le,{component:"a",href:e.demo,target:"_blank",size:s?"md":"sm",color:"neutral",variant:"outlined",sx:r=>({transition:"all ease .2s",borderRadius:".5rem",width:"fit-content",flexShrink:0,padding:"1 2",borderColor:r.palette.text.primary,background:r.palette.text.primary,color:r.palette.background.level1,"&:hover":{backgroundColor:r.palette.background.body,color:r.palette.text.primary},"&:active":{transform:"scale(.98)"}}),startDecorator:i(Mt,{}),children:"Run demo"})}),e.thumbnail&&i(Bt,{component:"img",src:e.thumbnail,alt:e.title,className:"illustration",sx:{transition:"all ease .2s",position:"absolute",minHeight:"100%",minWidth:"61%",left:"40%",top:"50%",WebkitMaskImage:"linear-gradient(to left,black 10%,transparent 80%)",maskImage:"linear-gradient(to left,black 10%,transparent 80%)",opacity:0,filter:"blur(5px)",transform:"translateY(-50%)"}})]})}function Lo(){const[e,t]=vt(),[a,l]=n.useState(""),d=me(),s=bt(),[r,h]=n.useState(""),[u,x]=n.useState(e.get("search")||""),[m,I]=n.useState(e.get("platform")||null),[D,M]=n.useState([]),[w,R]=n.useState(!1),[L,$]=n.useState(),[S,O]=n.useState([]);n.useEffect(()=>{R(!0),Xt().then(o=>{M(o)}).catch(()=>{$(new Error("There was an error loading the projects. Please try again later."))}).finally(()=>{R(!1)})},[]),n.useEffect(()=>{const o=new URLSearchParams;u&&o.set("search",u),m&&o.set("platform",m),t(o)},[u,m]),n.useEffect(()=>{const o=setTimeout(()=>h(u),300);return()=>clearTimeout(o)},[u]),n.useEffect(()=>{O(D.filter(o=>{var g,v;return(m===null||o.platform===m)&&(r===""||o.title.toLowerCase().includes(r.toLowerCase())||o.platform.toLowerCase().includes(r.toLowerCase())||((g=o.description)==null?void 0:g.toLowerCase().includes(r.toLowerCase()))||((v=o.language)==null?void 0:v.toLowerCase().includes(r.toLowerCase())))})),a!==""&&!D.find(o=>o.title===a)&&l("")},[D,r,m]);const B=()=>{var v;const o=Math.floor(Math.random()*S.length),g=S[o];l(g.title),(v=document.getElementById(g.title))==null||v.scrollIntoView({behavior:"smooth",block:"center"})},T=()=>{const o=document.getElementById("search");if(o){const{top:g}=o.getBoundingClientRect();window.scrollTo({top:g-16,behavior:"smooth"})}};return n.useEffect(()=>{const o=g=>{var v;g.key==="f"&&(g.preventDefault(),(v=document.getElementById("search"))==null||v.focus())};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[]),y(C,{paddingY:1,width:"100%",children:[y(C,{direction:"row",flexWrap:"wrap",gap:1,children:[i(Qt,{size:"lg",id:"search",placeholder:`Search ${S.length} project${S.length===1?"":"s"}`,variant:"outlined",value:u,className:r!==u?"loading":"",onChange:o=>x(o.target.value),onFocus:d?T:()=>{},startDecorator:r!==u?i(Ae,{size:"sm",color:"neutral",variant:"soft",sx:{margin:"-4px","& circle":{transition:"all ease .05s"}}}):i(Ro,{}),endDecorator:u!==""&&i(De,{variant:"plain",color:"neutral",sx:{fontSize:"1.5rem"},onClick:()=>x(""),children:i(je,{})}),sx:o=>({transition:"all ease .2s",width:d||s?"100%":"min(100%, 30rem)",cursor:"pointer",borderRadius:"0",outline:"none",backgroundColor:o.palette.background.body,"--Input-focusedHighlight":o.palette.text.secondary,"&:before":{transition:"all ease .2s"},"&:has(:focus), &.loading":{borderRadius:d||s?"100vmax":"100vmax 0 0 100vmax"}})}),i(ko,{placeholder:"Filter by platform",color:"neutral",variant:"outlined",sx:o=>({transition:"all ease .2s",borderRadius:"0",flex:d||s?1:"initial",backgroundColor:o.palette.background.body,width:"12rem","& + ul":{borderRadius:"0",padding:0}}),value:m,onChange:(o,g)=>I(g),endDecorator:m!==null&&i(De,{variant:"plain",color:"neutral",sx:{fontSize:"1.5rem"},onClick:()=>I(null),children:i(je,{})}),indicator:m!==null?null:void 0,renderValue:o=>{const g=ge[o==null?void 0:o.value];return o&&g&&y(C,{direction:"row",gap:1,alignItems:"center",children:[i(g.icon,{}),o.label]})},children:Object.entries(ge).map(([o,g])=>{const v=m===o,E=S.filter(W=>W.platform===o).length;return y(so,{color:"neutral",component:C,label:g.label,value:o,direction:"row",disabled:E===0,gap:1,children:[i(g.icon,{}),i(A,{flex:"1",textColor:"inherit",children:g.label}),i(wt,{size:"sm",variant:v?"solid":"soft",color:"neutral",disabled:E===0,children:E})]},o)})}),i(Le,{size:"lg",variant:"outlined",color:"neutral",startDecorator:i(Po,{style:{fontSize:"1.5rem"}}),onClick:B,sx:o=>({transition:"all ease .2s",position:"relative",borderRadius:"0",width:"fit-content",flexShrink:0,paddingInline:"1rem",borderColor:o.palette.text.primary,background:o.palette.text.primary,color:o.palette.background.level1,"& > span > svg":{transition:"all ease .2s"},"&:hover":{backgroundColor:o.palette.background.body,color:o.palette.text.primary,"& > span > svg":{transform:"rotate3d(1, 0, 0, 540deg) scale(1.2)"}},"&:active":{transform:"scale(.98)"}}),children:"Randomize"})]}),y(C,{paddingBlockStart:4,children:[w?i(Ne,{title:"Working on it...",subtitle:"We are fetching the projects for you. This should only take a few seconds.",children:i(Ae,{size:"lg",color:"neutral",variant:"outlined",children:i(zt,{size:"1.5rem"})})}):S.sort((o,g)=>We(g,S)-We(o,S)).map((o,g)=>y(xt.Fragment,{children:[i(Do,{project:o,open:a===o.title,onClick:()=>a===o.title?l(""):l(o.title)}),g<S.length-1&&i(Dt,{sx:{"&:has(+ .open)":{display:"none"}}})]},`${o.platform}-${o.title}-${o.source}`)),S.length===0&&!w&&r===u&&i(Ne,{title:L?"This usually never happens...":"Well that's embarrassing...",subtitle:L?L.message:"We couldn't find any projects matching your search criteria. Try a different search term or platform.",children:L?i(zo,{size:"5rem"}):i(wo,{size:"5rem"})})]})]})}const Mo="data:image/webp;base64,UklGRgYCAABXRUJQVlA4IPoBAADQCgCdASo1AC8APrVOpU0nI6OiKBqo4OAWiWkAE96V+V1stHS6NNn8sUtJDip+KXKOm5NCRvL8lbvF/EpylbMMoI/JzazQnTYXy/AOuncUyxXalU8xuGMZundD5xHhEAD++WZ72X+ZsJc7TM8ElldbDDB/RDCrmIM+YwFWvmjyHcXuWa/7dS/m/m0CKp4Mugbj1sMIcPSnLCDA+ENPPjQftb5i8yzdgZoGVMens51d1WI1XyahtPIilRKvYAAXTwJZlDjk2Gg3PfpZCChZphPC2a8P8Eh57otpQfhYqP0z/s7hyuzeZOnp6A4N5E4hahrc1gi1C18x3merSEt1wi75jB51RI8plYoH6BZbFQItyVYwnfvl6+nsKQ3uqvT/+qyGztvZOu563eah/SVATFYr1K0kwX9by91SZGU2PvmX/khe37S3+w+UdTfvJaZD+tOT4gTeuyIjGJ9C0aE+v/oSz8MXNkDooxetteQq0iMCXHhTXKLa9uPs8TIWibOcPtQ8kIjdOYCcoqFnMVCJ8kvTp2k4fNTk9q0/YGd+fJytmNV6Xv/tw2ug1Tf6CF+y5Nt66e1EY67jgkxXslJIt4CCsDspduTNHjlOqV+5Lnx5Kmj+KrreBP9Cdxt+A3sRM+FBTjy51wqDVSL7ENlf3tjTrBVSBx+gFhkAAA==",Bo="/assets/architecture_dark-BCPFyQWx.webp",Vo="data:image/webp;base64,UklGRuACAABXRUJQVlA4INQCAADQDQCdASo5ACsAPrVSoUunJKMhpWzI4BaJaQATJB5q1utGstvSlTS/Jh9W+wR+sPVfKp8UslMKZypbMJ+xfzfstz+eVgDHNLltnMthHZfjH8o9hp5s9V+cqDhbi7Z7Q1x40Ltr9mg/BnGxilCCYZ5XBnnzHHugAAD+5vJt4jUyd6jJUGOdRFzZWCEacJCOAmorBnXDfVCoADzjyFMb8txjRNCkKrX/V4jIa9wsueEWh4Qo5y9sxQD7obfYqpry6781Yt+m8fbjk35DAvHPxvv8EJ1Yf9ARn+7PjBWDqZCaFkspXsbOl+ShCr5kqV0F6BCUFeiDk8ua9b9H+9eX6ObZKdFUN0981+LfLu+u9POfEFw3f7FI3hramUdtWnd85lC5KkgGq1IJAvEJGfF+w77spi/CYcUHNJ+tGFc2+YUUls1SiEH/mc6xZnIR8FfzVI3+F0xEkYPAe5uyE6flBQHog59YmixM6g5drQITRWZ8GWrCmlfDvYrxSrPihuxQ7We9UvD9oXuvYKWndM7o9c/rJNkv2o5TCAuqzPiYM/1ikDLWxpRjyUzVnDq3YzFUazvl1np1L18aH2Xnx1C2C/0kFngA/gIQVWbXo6YYFsj1Gws2dRIvbBU2EJRwNpFCNqTN8b1j+fDyRSS3guZmRfx/o7bemj+1DmkX8oi3/6On575T0uITrEQaH11tgusDV52aQXop4CmDpcjC6O53bRQuzgnLd3RY4WC+3wQZI+OytvYVVoWevYQNHUynuDv4On5g+NG0dMF2pkLMncf6wqAtq4hOJemoItcXcV4k9/68CcTtxXM2Hq0VDMAnnLmfCHXdItBtzHmeeqQbvXuk/LEUmPBl5TAaXuu7IbQMGUM7SSxuKMtLzQSpwgSABAB4DT4PM55HvTdt5YJGpO2el/YRpsHLj19hBjrZfuaNeGFGv4mVZfHf2Gcf6/mUrYF19a5IAAAA",Ho="/assets/architecture_light-BzQ3zSSF.webp";function Ao(){const{colorScheme:e}=Ze(),[t,a]=n.useState(!1),l=Ct(),d=yt(e,{ref:l,keys:null,from:{opacity:0},enter:{opacity:1},leave:{opacity:0,filter:"blur(10px)",position:"absolute"}});n.useEffect(()=>{t&&l.start()},[e,t]);const s={position:"relative",marginTop:"-23rem",width:"100%",WebkitMaskImage:"linear-gradient(to left,black 10%,transparent 80%)",maskImage:"linear-gradient(to left,black 10%,transparent 80%)",filter:"grayscale(1)"};return i(C,{sx:{position:"absolute",right:"min(0rem, calc(100vw - 100rem))",width:"100rem",height:"min(100%, 31rem)",overflow:"hidden",paddingTop:"var(--nav-safe-area-inset-top)","&:after":{content:'""',position:"absolute",top:0,left:0,width:"100%",height:"100%",backdropFilter:"blur(20px)",mask:"linear-gradient(to left, transparent, black 60%)"}},children:d((r,h)=>{switch(h){case"light":return i(Oe.div,{style:r,children:i(Te,{src:Ho,placeholder:Vo,alt:"Brutalist building by Arthur Swiffen",onLoad:()=>a(!0),style:s})});case"dark":return i(Oe.div,{style:r,children:i(Te,{src:Bo,placeholder:Mo,alt:"Red lamps in Subway in Hamburg by Travel with Lenses",onLoad:()=>a(!0),style:s})});default:return null}})})}function Oo(){const{colorScheme:e,setMode:t}=Ze();return i(De,{variant:"outlined",color:"neutral",size:"lg",className:`state-${e}`,onClick:()=>{t(e==="light"?"dark":"light")},sx:a=>({transition:"all ease .2s",position:"relative",borderRadius:"0",width:"fit-content",flexShrink:0,padding:"1 2",overflow:"hidden",background:a.palette.background.body,"& > svg":{transition:"all ease .2s"},"&:hover":{background:a.palette.text.primary,color:a.palette.background.level1,borderColor:a.palette.text.primary,"& > svg":{transform:"rotate(-45deg)"}},"&:active":{transform:"scale(.98)"},"& > div":{transition:"all ease .2s"},"&.state-light > div":{transform:"translate(-50%, calc(-50% - 21px))"},"&.state-dark > div":{transform:"translate(-50%, calc(-50% + 21px))"},"&:hover > div":{transform:"translate(-50%, -50%)"}}),children:y(C,{direction:"column",gap:3,sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:[i(Vt,{}),i(Ht,{})]})})}function Fo(){const e=me();return y(C,{width:"100vw",position:"relative",overflow:"hidden",sx:{paddingLeft:"var(--nav-safe-area-inset-left)",paddingBottom:"var(--nav-safe-area-inset-bottom)"},children:[i(kt,{title:`Projects and experiments - ${Ee.name.first} ${Ee.name.last}`}),i(Ao,{}),y(C,{padding:e?"1rem":"5rem",gap:2,alignItems:"start",children:[y(C,{marginBottom:"min(10vw, 3rem)",marginTop:e?"10vw":0,children:[y(A,{level:"display1",fontSize:"clamp(3rem, 15vw, 10rem)",fontWeight:200,lineHeight:1,sx:{position:"relative",marginLeft:".25em",marginBottom:".05em"},children:[i(A,{level:"h2",sx:{position:"absolute",left:"-.6em",bottom:"1.7em",transform:"translateX(-50%) rotate(-90deg)",fontSize:"clamp(.5rem, 3vw, 2rem)"},children:"Featured"}),"Projects &"]}),i(A,{level:"display1",fontSize:"clamp(3rem, 15vw, 10rem)",fontWeight:300,lineHeight:.6,zIndex:1,fontFamily:'"Righteous", sans-serif',children:"Experiments"})]}),y(C,{direction:"row",gap:1,sx:e?{width:"100%","& > *:first-child":{flex:1}}:{},children:[i(Le,{size:"lg",component:It,to:"/",variant:"outlined",color:"neutral",endDecorator:i(Io,{size:"1.3em"}),sx:t=>({transition:"all ease .2s",position:"relative",borderRadius:"0",width:"fit-content",flexShrink:0,padding:"1 2",background:t.palette.background.body,"&:hover":{background:t.palette.text.primary,color:t.palette.background.level1,borderColor:t.palette.text.primary,"& > span > svg":{transform:"translate(.6rem, .3rem) scale(1.2)",filter:`drop-shadow(-.3rem -.3rem 0 ${t.palette.text.tertiary}) drop-shadow(-.3rem -.3rem 0 ${t.palette.text.secondary})`}},"&:active":{transform:"scale(.98)","& > span > svg":{transform:"translate(.6rem, .3rem) scale(1.1)",filter:`drop-shadow(-.3rem -.3rem 0 ${t.palette.background.level1}) drop-shadow(-.3rem -.3rem 0 ${t.palette.background.level1})`}},"& > span > svg":{transition:"all ease .2s"}}),children:"Back to homepage"}),i(Oo,{})]}),i(Lo,{})]})]})}export{Fo as default};
