import{R as e,r as T}from"./iframe-Cqy-rCMJ.js";import{T as l,a as o,b as t,c as n}from"./Tabs-BaO5psEy.js";import"./cn-DuMXYCiK.js";const C={title:"Components/Tabs",component:l,parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>e.createElement(l,{defaultValue:"tab1",style:{width:"400px"}},e.createElement(o,{},e.createElement(t,{value:"tab1"},"Tab 1"),e.createElement(t,{value:"tab2"},"Tab 2"),e.createElement(t,{value:"tab3"},"Tab 3")),e.createElement(n,{value:"tab1"},e.createElement("div",{style:{padding:"1rem"}},e.createElement("h3",{style:{margin:"0 0 0.5rem 0"}},"Content for Tab 1"),e.createElement("p",{style:{margin:0,color:"var(--color-secondary-600)"}},"This is the content for the first tab."))),e.createElement(n,{value:"tab2"},e.createElement("div",{style:{padding:"1rem"}},e.createElement("h3",{style:{margin:"0 0 0.5rem 0"}},"Content for Tab 2"),e.createElement("p",{style:{margin:0,color:"var(--color-secondary-600)"}},"This is the content for the second tab."))),e.createElement(n,{value:"tab3"},e.createElement("div",{style:{padding:"1rem"}},e.createElement("h3",{style:{margin:"0 0 0.5rem 0"}},"Content for Tab 3"),e.createElement("p",{style:{margin:0,color:"var(--color-secondary-600)"}},"This is the content for the third tab."))))},r={render:()=>{const[p,b]=T.useState("overview");return e.createElement(l,{value:p,onValueChange:b,style:{width:"500px"}},e.createElement(o,{},e.createElement(t,{value:"overview"},"Overview"),e.createElement(t,{value:"analytics"},"Analytics"),e.createElement(t,{value:"settings"},"Settings")),e.createElement(n,{value:"overview"},e.createElement("div",{style:{padding:"1.5rem"}},e.createElement("h3",{style:{margin:"0 0 1rem 0"}},"Dashboard Overview"),e.createElement("p",{style:{margin:0,color:"var(--color-secondary-600)"}},"Welcome to your dashboard overview."))),e.createElement(n,{value:"analytics"},e.createElement("div",{style:{padding:"1.5rem"}},e.createElement("h3",{style:{margin:"0 0 1rem 0"}},"Analytics"),e.createElement("p",{style:{margin:0,color:"var(--color-secondary-600)"}},"View your analytics data here."))),e.createElement(n,{value:"settings"},e.createElement("div",{style:{padding:"1.5rem"}},e.createElement("h3",{style:{margin:"0 0 1rem 0"}},"Settings"),e.createElement("p",{style:{margin:0,color:"var(--color-secondary-600)"}},"Manage your account settings."))))}},c={render:()=>e.createElement(l,{defaultValue:"profile",orientation:"vertical",style:{width:"600px",height:"300px"}},e.createElement(o,{},e.createElement(t,{value:"profile"},"Profile"),e.createElement(t,{value:"account"},"Account"),e.createElement(t,{value:"security"},"Security")),e.createElement(n,{value:"profile"},e.createElement("div",{style:{padding:"1rem"}},e.createElement("h3",{style:{margin:"0 0 0.5rem 0"}},"Profile Settings"),e.createElement("p",{style:{margin:0,color:"var(--color-secondary-600)"}},"Update your profile information."))),e.createElement(n,{value:"account"},e.createElement("div",{style:{padding:"1rem"}},e.createElement("h3",{style:{margin:"0 0 0.5rem 0"}},"Account Settings"),e.createElement("p",{style:{margin:0,color:"var(--color-secondary-600)"}},"Manage your account details."))),e.createElement(n,{value:"security"},e.createElement("div",{style:{padding:"1rem"}},e.createElement("h3",{style:{margin:"0 0 0.5rem 0"}},"Security Settings"),e.createElement("p",{style:{margin:0,color:"var(--color-secondary-600)"}},"Configure security options."))))};var s,i,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => React.createElement(Tabs, {
    defaultValue: 'tab1',
    style: {
      width: '400px'
    }
  }, React.createElement(TabsList, {}, React.createElement(TabsTrigger, {
    value: 'tab1'
  }, 'Tab 1'), React.createElement(TabsTrigger, {
    value: 'tab2'
  }, 'Tab 2'), React.createElement(TabsTrigger, {
    value: 'tab3'
  }, 'Tab 3')), React.createElement(TabsContent, {
    value: 'tab1'
  }, React.createElement('div', {
    style: {
      padding: '1rem'
    }
  }, React.createElement('h3', {
    style: {
      margin: '0 0 0.5rem 0'
    }
  }, 'Content for Tab 1'), React.createElement('p', {
    style: {
      margin: 0,
      color: 'var(--color-secondary-600)'
    }
  }, 'This is the content for the first tab.'))), React.createElement(TabsContent, {
    value: 'tab2'
  }, React.createElement('div', {
    style: {
      padding: '1rem'
    }
  }, React.createElement('h3', {
    style: {
      margin: '0 0 0.5rem 0'
    }
  }, 'Content for Tab 2'), React.createElement('p', {
    style: {
      margin: 0,
      color: 'var(--color-secondary-600)'
    }
  }, 'This is the content for the second tab.'))), React.createElement(TabsContent, {
    value: 'tab3'
  }, React.createElement('div', {
    style: {
      padding: '1rem'
    }
  }, React.createElement('h3', {
    style: {
      margin: '0 0 0.5rem 0'
    }
  }, 'Content for Tab 3'), React.createElement('p', {
    style: {
      margin: 0,
      color: 'var(--color-secondary-600)'
    }
  }, 'This is the content for the third tab.'))))
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,y,v;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');
    return React.createElement(Tabs, {
      value: activeTab,
      onValueChange: setActiveTab,
      style: {
        width: '500px'
      }
    }, React.createElement(TabsList, {}, React.createElement(TabsTrigger, {
      value: 'overview'
    }, 'Overview'), React.createElement(TabsTrigger, {
      value: 'analytics'
    }, 'Analytics'), React.createElement(TabsTrigger, {
      value: 'settings'
    }, 'Settings')), React.createElement(TabsContent, {
      value: 'overview'
    }, React.createElement('div', {
      style: {
        padding: '1.5rem'
      }
    }, React.createElement('h3', {
      style: {
        margin: '0 0 1rem 0'
      }
    }, 'Dashboard Overview'), React.createElement('p', {
      style: {
        margin: 0,
        color: 'var(--color-secondary-600)'
      }
    }, 'Welcome to your dashboard overview.'))), React.createElement(TabsContent, {
      value: 'analytics'
    }, React.createElement('div', {
      style: {
        padding: '1.5rem'
      }
    }, React.createElement('h3', {
      style: {
        margin: '0 0 1rem 0'
      }
    }, 'Analytics'), React.createElement('p', {
      style: {
        margin: 0,
        color: 'var(--color-secondary-600)'
      }
    }, 'View your analytics data here.'))), React.createElement(TabsContent, {
      value: 'settings'
    }, React.createElement('div', {
      style: {
        padding: '1.5rem'
      }
    }, React.createElement('h3', {
      style: {
        margin: '0 0 1rem 0'
      }
    }, 'Settings'), React.createElement('p', {
      style: {
        margin: 0,
        color: 'var(--color-secondary-600)'
      }
    }, 'Manage your account settings.'))));
  }
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var g,E,u;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => React.createElement(Tabs, {
    defaultValue: 'profile',
    orientation: 'vertical',
    style: {
      width: '600px',
      height: '300px'
    }
  }, React.createElement(TabsList, {}, React.createElement(TabsTrigger, {
    value: 'profile'
  }, 'Profile'), React.createElement(TabsTrigger, {
    value: 'account'
  }, 'Account'), React.createElement(TabsTrigger, {
    value: 'security'
  }, 'Security')), React.createElement(TabsContent, {
    value: 'profile'
  }, React.createElement('div', {
    style: {
      padding: '1rem'
    }
  }, React.createElement('h3', {
    style: {
      margin: '0 0 0.5rem 0'
    }
  }, 'Profile Settings'), React.createElement('p', {
    style: {
      margin: 0,
      color: 'var(--color-secondary-600)'
    }
  }, 'Update your profile information.'))), React.createElement(TabsContent, {
    value: 'account'
  }, React.createElement('div', {
    style: {
      padding: '1rem'
    }
  }, React.createElement('h3', {
    style: {
      margin: '0 0 0.5rem 0'
    }
  }, 'Account Settings'), React.createElement('p', {
    style: {
      margin: 0,
      color: 'var(--color-secondary-600)'
    }
  }, 'Manage your account details.'))), React.createElement(TabsContent, {
    value: 'security'
  }, React.createElement('div', {
    style: {
      padding: '1rem'
    }
  }, React.createElement('h3', {
    style: {
      margin: '0 0 0.5rem 0'
    }
  }, 'Security Settings'), React.createElement('p', {
    style: {
      margin: 0,
      color: 'var(--color-secondary-600)'
    }
  }, 'Configure security options.'))))
}`,...(u=(E=c.parameters)==null?void 0:E.docs)==null?void 0:u.source}}};const w=["Default","Controlled","VerticalTabs"];export{r as Controlled,a as Default,c as VerticalTabs,w as __namedExportsOrder,C as default};
