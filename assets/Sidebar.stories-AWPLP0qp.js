import{R as e}from"./iframe-Cqy-rCMJ.js";import{S as t}from"./Pagination-CBFu9Hqx.js";import"./Textarea-CQv7R1U3.js";import"./Checkbox-CedMCt2U.js";import"./Radio-dQSR6adN.js";import"./Tabs-BaO5psEy.js";import"./Accordion-yMz8LAdv.js";import"./cn-DuMXYCiK.js";import"./index-Dykr6vKl.js";const C={title:"Components/Sidebar",component:t,parameters:{layout:"fullscreen"}},n=()=>e.createElement("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},e.createElement("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})),a=()=>e.createElement("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},e.createElement("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})),k=()=>e.createElement("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},e.createElement("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})),r={render:()=>e.createElement("div",{style:{height:"500px",display:"flex"}},[e.createElement(t,{key:"sidebar"},[e.createElement(t.Header,{key:"header"},[e.createElement("h2",{key:"title",style:{fontSize:"1.125rem",fontWeight:"600"}},"Dashboard")]),e.createElement(t.Content,{key:"content"},[e.createElement(t.Group,{key:"main",title:"Main"},[e.createElement(t.Item,{key:"home",icon:e.createElement(n),active:!0},"Home"),e.createElement(t.Item,{key:"profile",icon:e.createElement(a)},"Profile")]),e.createElement(t.Group,{key:"admin",title:"Administration"},[e.createElement(t.Item,{key:"settings",icon:e.createElement(k)},"Settings")])])]),e.createElement("div",{key:"content",style:{flex:1,padding:"2rem",backgroundColor:"#f9fafb"}},[e.createElement("h1",{key:"title"},"Main Content Area"),e.createElement("p",{key:"desc"},"This is the main content area next to the sidebar.")])])},c={render:()=>e.createElement("div",{style:{height:"500px",display:"flex"}},[e.createElement(t,{key:"sidebar",collapsible:!0,defaultCollapsed:!1},[e.createElement(t.Header,{key:"header"},[e.createElement("div",{key:"header-content",style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},[e.createElement("h2",{key:"title",style:{fontSize:"1.125rem",fontWeight:"600"}},"Dashboard"),e.createElement(t.Toggle,{key:"toggle"})])]),e.createElement(t.Content,{key:"content"},[e.createElement(t.Group,{key:"main",title:"Navigation"},[e.createElement(t.Item,{key:"home",icon:e.createElement(n),active:!0},"Dashboard"),e.createElement(t.Item,{key:"profile",icon:e.createElement(a)},"Profile"),e.createElement(t.Item,{key:"settings",icon:e.createElement(k)},"Settings")])])]),e.createElement("div",{key:"content",style:{flex:1,padding:"2rem",backgroundColor:"#f9fafb"}},[e.createElement("h1",{key:"title"},"Collapsible Sidebar"),e.createElement("p",{key:"desc"},"Click the toggle button in the sidebar header to collapse/expand.")])])},l={render:()=>e.createElement("div",{style:{height:"400px",display:"flex",gap:"1rem"}},[e.createElement("div",{key:"default",style:{flex:1}},[e.createElement("h3",{key:"title",style:{marginBottom:"0.5rem",fontSize:"0.875rem",fontWeight:"600"}},"Default"),e.createElement("div",{key:"container",style:{height:"350px",border:"1px solid #e5e7eb",borderRadius:"0.5rem",overflow:"hidden"}},[e.createElement(t,{key:"sidebar",variant:"default"},[e.createElement(t.Content,{key:"content"},[e.createElement(t.Item,{key:"home",icon:e.createElement(n),active:!0},"Home"),e.createElement(t.Item,{key:"profile",icon:e.createElement(a)},"Profile")])])])]),e.createElement("div",{key:"primary",style:{flex:1}},[e.createElement("h3",{key:"title",style:{marginBottom:"0.5rem",fontSize:"0.875rem",fontWeight:"600"}},"Primary"),e.createElement("div",{key:"container",style:{height:"350px",border:"1px solid #e5e7eb",borderRadius:"0.5rem",overflow:"hidden"}},[e.createElement(t,{key:"sidebar",variant:"primary"},[e.createElement(t.Content,{key:"content"},[e.createElement(t.Item,{key:"home",icon:e.createElement(n),active:!0},"Home"),e.createElement(t.Item,{key:"profile",icon:e.createElement(a)},"Profile")])])])]),e.createElement("div",{key:"secondary",style:{flex:1}},[e.createElement("h3",{key:"title",style:{marginBottom:"0.5rem",fontSize:"0.875rem",fontWeight:"600"}},"Secondary"),e.createElement("div",{key:"container",style:{height:"350px",border:"1px solid #e5e7eb",borderRadius:"0.5rem",overflow:"hidden"}},[e.createElement(t,{key:"sidebar",variant:"secondary"},[e.createElement(t.Content,{key:"content"},[e.createElement(t.Item,{key:"home",icon:e.createElement(n),active:!0},"Home"),e.createElement(t.Item,{key:"profile",icon:e.createElement(a)},"Profile")])])])])])};var i,o,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      height: '500px',
      display: 'flex'
    }
  }, [React.createElement(Sidebar, {
    key: 'sidebar'
  }, [React.createElement(Sidebar.Header, {
    key: 'header'
  }, [React.createElement('h2', {
    key: 'title',
    style: {
      fontSize: '1.125rem',
      fontWeight: '600'
    }
  }, 'Dashboard')]), React.createElement(Sidebar.Content, {
    key: 'content'
  }, [React.createElement(Sidebar.Group, {
    key: 'main',
    title: 'Main'
  }, [React.createElement(Sidebar.Item, {
    key: 'home',
    icon: React.createElement(HomeIcon),
    active: true
  }, 'Home'), React.createElement(Sidebar.Item, {
    key: 'profile',
    icon: React.createElement(UserIcon)
  }, 'Profile')]), React.createElement(Sidebar.Group, {
    key: 'admin',
    title: 'Administration'
  }, [React.createElement(Sidebar.Item, {
    key: 'settings',
    icon: React.createElement(SettingsIcon)
  }, 'Settings')])])]), React.createElement('div', {
    key: 'content',
    style: {
      flex: 1,
      padding: '2rem',
      backgroundColor: '#f9fafb'
    }
  }, [React.createElement('h1', {
    key: 'title'
  }, 'Main Content Area'), React.createElement('p', {
    key: 'desc'
  }, 'This is the main content area next to the sidebar.')])])
}`,...(m=(o=r.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var d,s,y;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      height: '500px',
      display: 'flex'
    }
  }, [React.createElement(Sidebar, {
    key: 'sidebar',
    collapsible: true,
    defaultCollapsed: false
  }, [React.createElement(Sidebar.Header, {
    key: 'header'
  }, [React.createElement('div', {
    key: 'header-content',
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, [React.createElement('h2', {
    key: 'title',
    style: {
      fontSize: '1.125rem',
      fontWeight: '600'
    }
  }, 'Dashboard'), React.createElement(Sidebar.Toggle, {
    key: 'toggle'
  })])]), React.createElement(Sidebar.Content, {
    key: 'content'
  }, [React.createElement(Sidebar.Group, {
    key: 'main',
    title: 'Navigation'
  }, [React.createElement(Sidebar.Item, {
    key: 'home',
    icon: React.createElement(HomeIcon),
    active: true
  }, 'Dashboard'), React.createElement(Sidebar.Item, {
    key: 'profile',
    icon: React.createElement(UserIcon)
  }, 'Profile'), React.createElement(Sidebar.Item, {
    key: 'settings',
    icon: React.createElement(SettingsIcon)
  }, 'Settings')])])]), React.createElement('div', {
    key: 'content',
    style: {
      flex: 1,
      padding: '2rem',
      backgroundColor: '#f9fafb'
    }
  }, [React.createElement('h1', {
    key: 'title'
  }, 'Collapsible Sidebar'), React.createElement('p', {
    key: 'desc'
  }, 'Click the toggle button in the sidebar header to collapse/expand.')])])
}`,...(y=(s=c.parameters)==null?void 0:s.docs)==null?void 0:y.source}}};var E,p,f;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      height: '400px',
      display: 'flex',
      gap: '1rem'
    }
  }, [React.createElement('div', {
    key: 'default',
    style: {
      flex: 1
    }
  }, [React.createElement('h3', {
    key: 'title',
    style: {
      marginBottom: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '600'
    }
  }, 'Default'), React.createElement('div', {
    key: 'container',
    style: {
      height: '350px',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      overflow: 'hidden'
    }
  }, [React.createElement(Sidebar, {
    key: 'sidebar',
    variant: 'default'
  }, [React.createElement(Sidebar.Content, {
    key: 'content'
  }, [React.createElement(Sidebar.Item, {
    key: 'home',
    icon: React.createElement(HomeIcon),
    active: true
  }, 'Home'), React.createElement(Sidebar.Item, {
    key: 'profile',
    icon: React.createElement(UserIcon)
  }, 'Profile')])])])]), React.createElement('div', {
    key: 'primary',
    style: {
      flex: 1
    }
  }, [React.createElement('h3', {
    key: 'title',
    style: {
      marginBottom: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '600'
    }
  }, 'Primary'), React.createElement('div', {
    key: 'container',
    style: {
      height: '350px',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      overflow: 'hidden'
    }
  }, [React.createElement(Sidebar, {
    key: 'sidebar',
    variant: 'primary'
  }, [React.createElement(Sidebar.Content, {
    key: 'content'
  }, [React.createElement(Sidebar.Item, {
    key: 'home',
    icon: React.createElement(HomeIcon),
    active: true
  }, 'Home'), React.createElement(Sidebar.Item, {
    key: 'profile',
    icon: React.createElement(UserIcon)
  }, 'Profile')])])])]), React.createElement('div', {
    key: 'secondary',
    style: {
      flex: 1
    }
  }, [React.createElement('h3', {
    key: 'title',
    style: {
      marginBottom: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '600'
    }
  }, 'Secondary'), React.createElement('div', {
    key: 'container',
    style: {
      height: '350px',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      overflow: 'hidden'
    }
  }, [React.createElement(Sidebar, {
    key: 'sidebar',
    variant: 'secondary'
  }, [React.createElement(Sidebar.Content, {
    key: 'content'
  }, [React.createElement(Sidebar.Item, {
    key: 'home',
    icon: React.createElement(HomeIcon),
    active: true
  }, 'Home'), React.createElement(Sidebar.Item, {
    key: 'profile',
    icon: React.createElement(UserIcon)
  }, 'Profile')])])])])])
}`,...(f=(p=l.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const H=["Default","Collapsible","Variants"];export{c as Collapsible,r as Default,l as Variants,H as __namedExportsOrder,C as default};
