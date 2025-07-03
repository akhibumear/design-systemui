import{R as e}from"./iframe-Cqy-rCMJ.js";import{A as t}from"./Pagination-CBFu9Hqx.js";import"./Textarea-CQv7R1U3.js";import"./Checkbox-CedMCt2U.js";import"./Radio-dQSR6adN.js";import"./Tabs-BaO5psEy.js";import"./Accordion-yMz8LAdv.js";import"./cn-DuMXYCiK.js";import"./index-Dykr6vKl.js";const R={title:"Components/Alert",component:t,parameters:{layout:"centered"}},r={args:{children:"This is a default alert message."}},n={args:{title:"Alert Title",children:"This alert has a title and description."}},a={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"}},[e.createElement(t,{key:"success",variant:"success",title:"Success!",style:{fontSize:"0.875rem"}},"Your action was completed successfully."),e.createElement(t,{key:"info",variant:"info",title:"Information",style:{fontSize:"0.875rem"}},"Here is some important information."),e.createElement(t,{key:"warning",variant:"warning",title:"Warning",style:{fontSize:"0.875rem"}},"Please be careful with this action."),e.createElement(t,{key:"error",variant:"error",title:"Error",style:{fontSize:"0.875rem"}},"Something went wrong. Please try again.")])},s={render:()=>e.createElement("div",{style:{width:"400px"}},e.createElement(t,{variant:"success",title:"Dismissible Alert",dismissible:!0,style:{fontSize:"0.875rem"}},"You can close this alert by clicking the X button."))};var i,l,o;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'This is a default alert message.'
  }
}`,...(o=(l=r.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Alert Title',
    children: 'This alert has a title and description.'
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '400px'
    }
  }, [React.createElement(Alert, {
    key: 'success',
    variant: 'success',
    title: 'Success!',
    style: {
      fontSize: '0.875rem'
    }
  }, 'Your action was completed successfully.'), React.createElement(Alert, {
    key: 'info',
    variant: 'info',
    title: 'Information',
    style: {
      fontSize: '0.875rem'
    }
  }, 'Here is some important information.'), React.createElement(Alert, {
    key: 'warning',
    variant: 'warning',
    title: 'Warning',
    style: {
      fontSize: '0.875rem'
    }
  }, 'Please be careful with this action.'), React.createElement(Alert, {
    key: 'error',
    variant: 'error',
    title: 'Error',
    style: {
      fontSize: '0.875rem'
    }
  }, 'Something went wrong. Please try again.')])
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,g,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      width: '400px'
    }
  }, React.createElement(Alert, {
    variant: 'success',
    title: 'Dismissible Alert',
    dismissible: true,
    style: {
      fontSize: '0.875rem'
    }
  }, 'You can close this alert by clicking the X button.'))
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const D=["Default","WithTitle","Variants","Dismissible"];export{r as Default,s as Dismissible,a as Variants,n as WithTitle,D as __namedExportsOrder,R as default};
