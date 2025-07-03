import{r,R as a}from"./iframe-Cqy-rCMJ.js";import{k as c}from"./Pagination-CBFu9Hqx.js";import"./Textarea-CQv7R1U3.js";import"./Checkbox-CedMCt2U.js";import"./Radio-dQSR6adN.js";import"./Tabs-BaO5psEy.js";import"./Accordion-yMz8LAdv.js";import"./cn-DuMXYCiK.js";import"./index-Dykr6vKl.js";const D={title:"Components/Switch",component:c,parameters:{layout:"centered"}},i={render:()=>{const[n,s]=r.useState(!1);return a.createElement(c,{checked:n,onChange:s,label:"Enable notifications",description:"Receive email notifications about updates"})}},d={render:()=>{const[n,s]=r.useState({sm:!1,md:!0,lg:!1});return a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"}},[a.createElement(c,{key:"sm",size:"sm",checked:n.sm,onChange:e=>s(t=>({...t,sm:e})),label:"Small Switch",description:"This is a small switch"}),a.createElement(c,{key:"md",size:"md",checked:n.md,onChange:e=>s(t=>({...t,md:e})),label:"Medium Switch",description:"This is a medium switch (default)"}),a.createElement(c,{key:"lg",size:"lg",checked:n.lg,onChange:e=>s(t=>({...t,lg:e})),label:"Large Switch",description:"This is a large switch"})])}},l={render:()=>{const[n,s]=r.useState({enabled:!0,disabled:!1,disabledChecked:!0});return a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"}},[a.createElement(c,{key:"enabled",checked:n.enabled,onChange:e=>s(t=>({...t,enabled:e})),label:"Enabled Switch",description:"This switch can be toggled"}),a.createElement(c,{key:"disabled",checked:n.disabled,onChange:e=>s(t=>({...t,disabled:e})),disabled:!0,label:"Disabled Switch (Off)",description:"This switch is disabled"}),a.createElement(c,{key:"disabledChecked",checked:n.disabledChecked,onChange:e=>s(t=>({...t,disabledChecked:e})),disabled:!0,label:"Disabled Switch (On)",description:"This switch is disabled but checked"})])}};var h,o,m;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return React.createElement(Switch, {
      checked: checked,
      onChange: setChecked,
      label: 'Enable notifications',
      description: 'Receive email notifications about updates'
    });
  }
}`,...(m=(o=i.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var p,b,k;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [states, setStates] = useState({
      sm: false,
      md: true,
      lg: false
    });
    return React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }
    }, [React.createElement(Switch, {
      key: 'sm',
      size: 'sm',
      checked: states.sm,
      onChange: checked => setStates(prev => ({
        ...prev,
        sm: checked
      })),
      label: 'Small Switch',
      description: 'This is a small switch'
    }), React.createElement(Switch, {
      key: 'md',
      size: 'md',
      checked: states.md,
      onChange: checked => setStates(prev => ({
        ...prev,
        md: checked
      })),
      label: 'Medium Switch',
      description: 'This is a medium switch (default)'
    }), React.createElement(Switch, {
      key: 'lg',
      size: 'lg',
      checked: states.lg,
      onChange: checked => setStates(prev => ({
        ...prev,
        lg: checked
      })),
      label: 'Large Switch',
      description: 'This is a large switch'
    })]);
  }
}`,...(k=(b=d.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var u,S,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [states, setStates] = useState({
      enabled: true,
      disabled: false,
      disabledChecked: true
    });
    return React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }
    }, [React.createElement(Switch, {
      key: 'enabled',
      checked: states.enabled,
      onChange: checked => setStates(prev => ({
        ...prev,
        enabled: checked
      })),
      label: 'Enabled Switch',
      description: 'This switch can be toggled'
    }), React.createElement(Switch, {
      key: 'disabled',
      checked: states.disabled,
      onChange: checked => setStates(prev => ({
        ...prev,
        disabled: checked
      })),
      disabled: true,
      label: 'Disabled Switch (Off)',
      description: 'This switch is disabled'
    }), React.createElement(Switch, {
      key: 'disabledChecked',
      checked: states.disabledChecked,
      onChange: checked => setStates(prev => ({
        ...prev,
        disabledChecked: checked
      })),
      disabled: true,
      label: 'Disabled Switch (On)',
      description: 'This switch is disabled but checked'
    })]);
  }
}`,...(g=(S=l.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const z=["Default","Sizes","States"];export{i as Default,d as Sizes,l as States,z as __namedExportsOrder,D as default};
