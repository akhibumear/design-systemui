import{R as e,r as s}from"./iframe-Cqy-rCMJ.js";import{C as c}from"./Checkbox-CedMCt2U.js";import"./cn-DuMXYCiK.js";const G={title:"Components/Checkbox",component:c,parameters:{layout:"centered"},tags:["autodocs"]},l={render:()=>{const[n,t]=s.useState(!1);return e.createElement(c,{checked:n,onChange:t})}},o={render:()=>{const[n,t]=s.useState(!1);return e.createElement(c,{label:"Accept terms and conditions",checked:n,onChange:t})}},d={render:()=>{const[n,t]=s.useState(!1);return e.createElement(c,{label:"Email notifications",description:"Receive email updates about your account activity",checked:n,onChange:t})}},i={render:()=>{const[n,t]=s.useState(!1);return e.createElement(c,{label:"Required checkbox",description:"This checkbox must be checked",error:"You must accept the terms",checked:n,onChange:t})}},m={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"}},e.createElement(c,{label:"Disabled unchecked",disabled:!0,checked:!1}),e.createElement(c,{label:"Disabled checked",disabled:!0,checked:!0}))},h={render:()=>{const[n,t]=s.useState({sm:!1,md:!1,lg:!1});return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"}},e.createElement(c,{label:"Small checkbox",size:"sm",checked:n.sm,onChange:a=>t(r=>({...r,sm:a}))}),e.createElement(c,{label:"Medium checkbox (default)",size:"md",checked:n.md,onChange:a=>t(r=>({...r,md:a}))}),e.createElement(c,{label:"Large checkbox",size:"lg",checked:n.lg,onChange:a=>t(r=>({...r,lg:a}))}))}},u={render:()=>{const[n,t]=s.useState({newsletter:!1,updates:!1,marketing:!1});return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"}},e.createElement("h3",{style:{margin:0,fontSize:"1rem",fontWeight:"600"}},"Email Preferences"),e.createElement(c,{label:"Newsletter",description:"Weekly newsletter with updates and tips",checked:n.newsletter,onChange:a=>t(r=>({...r,newsletter:a}))}),e.createElement(c,{label:"Product Updates",description:"Notifications about new features and improvements",checked:n.updates,onChange:a=>t(r=>({...r,updates:a}))}),e.createElement(c,{label:"Marketing",description:"Promotional offers and marketing communications",checked:n.marketing,onChange:a=>t(r=>({...r,marketing:a}))}))}};var k,p,b;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return React.createElement(Checkbox, {
      checked: checked,
      onChange: setChecked
    });
  }
}`,...(b=(p=l.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,f,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return React.createElement(Checkbox, {
      label: 'Accept terms and conditions',
      checked: checked,
      onChange: setChecked
    });
  }
}`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var x,E,v;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return React.createElement(Checkbox, {
      label: 'Email notifications',
      description: 'Receive email updates about your account activity',
      checked: checked,
      onChange: setChecked
    });
  }
}`,...(v=(E=d.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var S,R,y;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return React.createElement(Checkbox, {
      label: 'Required checkbox',
      description: 'This checkbox must be checked',
      error: 'You must accept the terms',
      checked: checked,
      onChange: setChecked
    });
  }
}`,...(y=(R=i.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var D,w,z;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }
  }, React.createElement(Checkbox, {
    label: 'Disabled unchecked',
    disabled: true,
    checked: false
  }), React.createElement(Checkbox, {
    label: 'Disabled checked',
    disabled: true,
    checked: true
  }))
}`,...(z=(w=m.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var V,W,P;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = useState({
      sm: false,
      md: false,
      lg: false
    });
    return React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }
    }, React.createElement(Checkbox, {
      label: 'Small checkbox',
      size: 'sm',
      checked: values.sm,
      onChange: checked => setValues(prev => ({
        ...prev,
        sm: checked
      }))
    }), React.createElement(Checkbox, {
      label: 'Medium checkbox (default)',
      size: 'md',
      checked: values.md,
      onChange: checked => setValues(prev => ({
        ...prev,
        md: checked
      }))
    }), React.createElement(Checkbox, {
      label: 'Large checkbox',
      size: 'lg',
      checked: values.lg,
      onChange: checked => setValues(prev => ({
        ...prev,
        lg: checked
      }))
    }));
  }
}`,...(P=(W=h.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var L,M,N;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = useState({
      newsletter: false,
      updates: false,
      marketing: false
    });
    return React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }
    }, React.createElement('h3', {
      style: {
        margin: 0,
        fontSize: '1rem',
        fontWeight: '600'
      }
    }, 'Email Preferences'), React.createElement(Checkbox, {
      label: 'Newsletter',
      description: 'Weekly newsletter with updates and tips',
      checked: values.newsletter,
      onChange: checked => setValues(prev => ({
        ...prev,
        newsletter: checked
      }))
    }), React.createElement(Checkbox, {
      label: 'Product Updates',
      description: 'Notifications about new features and improvements',
      checked: values.updates,
      onChange: checked => setValues(prev => ({
        ...prev,
        updates: checked
      }))
    }), React.createElement(Checkbox, {
      label: 'Marketing',
      description: 'Promotional offers and marketing communications',
      checked: values.marketing,
      onChange: checked => setValues(prev => ({
        ...prev,
        marketing: checked
      }))
    }));
  }
}`,...(N=(M=u.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const T=["Default","WithLabel","WithDescription","WithError","Disabled","Sizes","CheckboxGroup"];export{u as CheckboxGroup,l as Default,m as Disabled,h as Sizes,d as WithDescription,i as WithError,o as WithLabel,T as __namedExportsOrder,G as default};
