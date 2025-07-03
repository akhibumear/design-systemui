import{R as e}from"./iframe-Cqy-rCMJ.js";import{T as t}from"./Pagination-CBFu9Hqx.js";import"./Textarea-CQv7R1U3.js";import"./Checkbox-CedMCt2U.js";import"./Radio-dQSR6adN.js";import"./Tabs-BaO5psEy.js";import"./Accordion-yMz8LAdv.js";import"./cn-DuMXYCiK.js";import"./index-Dykr6vKl.js";const W={title:"Components/Toast",component:t,parameters:{layout:"centered"}},s={args:{children:"This is a default toast message."}},a={args:{title:"Toast Title",children:"This toast has a title and description."}},n={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"}},[e.createElement(t,{key:"success",variant:"success",title:"Success!",closable:!1,style:{fontSize:"0.875rem"}},"Your action was completed successfully."),e.createElement(t,{key:"info",variant:"info",title:"Information",closable:!1,style:{fontSize:"0.875rem"}},"Here is some important information."),e.createElement(t,{key:"warning",variant:"warning",title:"Warning",closable:!1,style:{fontSize:"0.875rem"}},"Please be careful with this action."),e.createElement(t,{key:"error",variant:"error",title:"Error",closable:!1,style:{fontSize:"0.875rem"}},"Something went wrong. Please try again.")])},r={render:()=>e.createElement("div",{style:{width:"400px"}},e.createElement(t,{variant:"success",title:"Auto-dismiss Toast",duration:3e3,style:{fontSize:"0.875rem"}},"This toast will disappear after 3 seconds."))},i={render:()=>e.createElement("div",{style:{width:"400px"}},e.createElement(t,{variant:"info",title:"Persistent Toast",duration:0,style:{fontSize:"0.875rem"}},"This toast will not auto-dismiss. Click the X to close."))};var o,l,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'This is a default toast message.'
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Toast Title',
    children: 'This toast has a title and description.'
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,f,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '400px'
    }
  }, [React.createElement(Toast, {
    key: 'success',
    variant: 'success',
    title: 'Success!',
    closable: false,
    style: {
      fontSize: '0.875rem'
    }
  }, 'Your action was completed successfully.'), React.createElement(Toast, {
    key: 'info',
    variant: 'info',
    title: 'Information',
    closable: false,
    style: {
      fontSize: '0.875rem'
    }
  }, 'Here is some important information.'), React.createElement(Toast, {
    key: 'warning',
    variant: 'warning',
    title: 'Warning',
    closable: false,
    style: {
      fontSize: '0.875rem'
    }
  }, 'Please be careful with this action.'), React.createElement(Toast, {
    key: 'error',
    variant: 'error',
    title: 'Error',
    closable: false,
    style: {
      fontSize: '0.875rem'
    }
  }, 'Something went wrong. Please try again.')])
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,T,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      width: '400px'
    }
  }, React.createElement(Toast, {
    variant: 'success',
    title: 'Auto-dismiss Toast',
    duration: 3000,
    style: {
      fontSize: '0.875rem'
    }
  }, 'This toast will disappear after 3 seconds.'))
}`,...(g=(T=r.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var w,E,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      width: '400px'
    }
  }, React.createElement(Toast, {
    variant: 'info',
    title: 'Persistent Toast',
    duration: 0,
    style: {
      fontSize: '0.875rem'
    }
  }, 'This toast will not auto-dismiss. Click the X to close.'))
}`,...(S=(E=i.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const C=["Default","WithTitle","Variants","AutoDismiss","Persistent"];export{r as AutoDismiss,s as Default,i as Persistent,n as Variants,a as WithTitle,C as __namedExportsOrder,W as default};
