import{R as e}from"./iframe-Cqy-rCMJ.js";import{I as r}from"./Pagination-CBFu9Hqx.js";import"./Textarea-CQv7R1U3.js";import"./Checkbox-CedMCt2U.js";import"./Radio-dQSR6adN.js";import"./Tabs-BaO5psEy.js";import"./Accordion-yMz8LAdv.js";import"./cn-DuMXYCiK.js";import"./index-Dykr6vKl.js";const j={title:"Components/Input",component:r,parameters:{layout:"centered"}},n={args:{label:"Default Input",placeholder:"Enter text..."}},a={args:{label:"Email Address",placeholder:"your@email.com",helperText:"We'll never share your email."}},t={args:{label:"Required Field",placeholder:"This field is required",required:!0}},l={args:{label:"Password",placeholder:"Enter password",error:"Password is required"}},o={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"}},[e.createElement(r,{key:"sm",label:"Small Input",size:"sm",placeholder:"Small size"}),e.createElement(r,{key:"md",label:"Medium Input",size:"md",placeholder:"Medium size"}),e.createElement(r,{key:"lg",label:"Large Input",size:"lg",placeholder:"Large size"})])},s={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"}},[e.createElement(r,{key:"search",label:"Search",placeholder:"Search...",leftIcon:e.createElement("svg",{style:{width:"14px",height:"14px"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))}),e.createElement(r,{key:"email",label:"Email",type:"email",placeholder:"your@email.com",leftIcon:e.createElement("svg",{style:{width:"14px",height:"14px"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"}))})])};var i,c,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Default Input',
    placeholder: 'Enter text...'
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'your@email.com',
    helperText: "We'll never share your email."
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,g,E;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true
  }
}`,...(E=(g=t.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var x,y,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    error: 'Password is required'
  }
}`,...(k=(y=l.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var f,I,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '300px'
    }
  }, [React.createElement(Input, {
    key: 'sm',
    label: 'Small Input',
    size: 'sm',
    placeholder: 'Small size'
  }), React.createElement(Input, {
    key: 'md',
    label: 'Medium Input',
    size: 'md',
    placeholder: 'Medium size'
  }), React.createElement(Input, {
    key: 'lg',
    label: 'Large Input',
    size: 'lg',
    placeholder: 'Large size'
  })])
}`,...(b=(I=o.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var w,z,R;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '300px'
    }
  }, [React.createElement(Input, {
    key: 'search',
    label: 'Search',
    placeholder: 'Search...',
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
      d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
    }))
  }), React.createElement(Input, {
    key: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'your@email.com',
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
      d: 'M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
    }))
  })])
}`,...(R=(z=s.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const B=["Default","WithHelperText","Required","WithError","Sizes","WithIcons"];export{n as Default,t as Required,o as Sizes,l as WithError,a as WithHelperText,s as WithIcons,B as __namedExportsOrder,j as default};
