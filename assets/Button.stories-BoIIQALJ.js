import{R as e}from"./iframe-Cqy-rCMJ.js";import{b as r}from"./Pagination-CBFu9Hqx.js";import"./Textarea-CQv7R1U3.js";import"./Checkbox-CedMCt2U.js";import"./Radio-dQSR6adN.js";import"./Tabs-BaO5psEy.js";import"./Accordion-yMz8LAdv.js";import"./cn-DuMXYCiK.js";import"./index-Dykr6vKl.js";const J={title:"Components/Button",component:r,parameters:{layout:"centered"}},n={args:{variant:"primary",children:"Primary Button"}},t={args:{variant:"secondary",children:"Secondary Button"}},a={args:{variant:"outline",children:"Outline Button"}},o={args:{variant:"ghost",children:"Ghost Button"}},s={render:()=>e.createElement("div",{style:{display:"flex",gap:"1rem",alignItems:"center"}},[e.createElement(r,{key:"sm",size:"sm"},"Small"),e.createElement(r,{key:"md",size:"md"},"Medium"),e.createElement(r,{key:"lg",size:"lg"},"Large")])},i={render:()=>e.createElement("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"}},[e.createElement(r,{key:"left",leftIcon:e.createElement("svg",{style:{width:"14px",height:"14px"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"}))},"Add Item"),e.createElement(r,{key:"right",variant:"outline",rightIcon:e.createElement("svg",{style:{width:"14px",height:"14px"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"}))},"Continue")])},c={args:{loading:!0,children:"Loading..."}},l={args:{disabled:!0,children:"Disabled Button"}};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,k,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline Button'
  }
}`,...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var E,B,x;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
}`,...(x=(B=o.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var f,S,L;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center'
    }
  }, [React.createElement(Button, {
    key: 'sm',
    size: 'sm'
  }, 'Small'), React.createElement(Button, {
    key: 'md',
    size: 'md'
  }, 'Medium'), React.createElement(Button, {
    key: 'lg',
    size: 'lg'
  }, 'Large')])
}`,...(L=(S=s.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var R,w,I;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }
  }, [React.createElement(Button, {
    key: 'left',
    leftIcon: React.createElement('svg', {
      style: {
        width: '14px',
        height: '14px'
      },
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, React.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: 2,
      d: 'M12 4v16m8-8H4'
    }))
  }, 'Add Item'), React.createElement(Button, {
    key: 'right',
    variant: 'outline',
    rightIcon: React.createElement('svg', {
      style: {
        width: '14px',
        height: '14px'
      },
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, React.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: 2,
      d: 'M9 5l7 7-7 7'
    }))
  }, 'Continue')])
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var z,W,b;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Loading...'
  }
}`,...(b=(W=c.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var C,M,O;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...(O=(M=l.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const K=["Primary","Secondary","Outline","Ghost","Sizes","WithIcons","Loading","Disabled"];export{l as Disabled,o as Ghost,c as Loading,a as Outline,n as Primary,t as Secondary,s as Sizes,i as WithIcons,K as __namedExportsOrder,J as default};
