import{R as e,r as g}from"./iframe-Cqy-rCMJ.js";import{N as t}from"./Pagination-CBFu9Hqx.js";import"./Textarea-CQv7R1U3.js";import"./Checkbox-CedMCt2U.js";import"./Radio-dQSR6adN.js";import"./Tabs-BaO5psEy.js";import"./Accordion-yMz8LAdv.js";import"./cn-DuMXYCiK.js";import"./index-Dykr6vKl.js";const O={title:"Components/Navbar",component:t,parameters:{layout:"fullscreen"}},n={render:()=>e.createElement(t,{},[e.createElement(t.Brand,{key:"brand"},"Brand"),e.createElement(t.Content,{key:"content",justify:"end"},[e.createElement(t.Item,{key:"home",active:!0},"Home"),e.createElement(t.Item,{key:"about"},"About"),e.createElement(t.Item,{key:"contact"},"Contact")])])},a={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"}},[e.createElement("div",{key:"default"},[e.createElement("h3",{key:"title",style:{margin:"0 0 0.5rem 1rem",fontSize:"0.875rem",fontWeight:"600"}},"Default"),e.createElement(t,{key:"navbar",variant:"default"},[e.createElement(t.Brand,{key:"brand"},"Brand"),e.createElement(t.Content,{key:"content",justify:"end"},[e.createElement(t.Item,{key:"home",active:!0},"Home"),e.createElement(t.Item,{key:"about"},"About")])])]),e.createElement("div",{key:"primary"},[e.createElement("h3",{key:"title",style:{margin:"0 0 0.5rem 1rem",fontSize:"0.875rem",fontWeight:"600"}},"Primary"),e.createElement(t,{key:"navbar",variant:"primary"},[e.createElement(t.Brand,{key:"brand"},"Brand"),e.createElement(t.Content,{key:"content",justify:"end"},[e.createElement(t.Item,{key:"home",active:!0},"Home"),e.createElement(t.Item,{key:"about"},"About")])])]),e.createElement("div",{key:"secondary"},[e.createElement("h3",{key:"title",style:{margin:"0 0 0.5rem 1rem",fontSize:"0.875rem",fontWeight:"600"}},"Secondary"),e.createElement(t,{key:"navbar",variant:"secondary"},[e.createElement(t.Brand,{key:"brand"},"Brand"),e.createElement(t.Content,{key:"content",justify:"end"},[e.createElement(t.Item,{key:"home",active:!0},"Home"),e.createElement(t.Item,{key:"about"},"About")])])])])},r={render:()=>e.createElement(t,{shadow:!0},[e.createElement(t.Brand,{key:"brand"},[e.createElement("div",{key:"logo",style:{width:"32px",height:"32px",backgroundColor:"#3b82f6",borderRadius:"0.375rem",marginRight:"0.5rem"}}),e.createElement("span",{key:"text"},"Company")]),e.createElement(t.Content,{key:"nav",justify:"center"},[e.createElement(t.Item,{key:"products"},"Products"),e.createElement(t.Item,{key:"solutions"},"Solutions"),e.createElement(t.Item,{key:"pricing",active:!0},"Pricing"),e.createElement(t.Item,{key:"docs"},"Documentation")]),e.createElement(t.Content,{key:"actions",justify:"end"},[e.createElement("button",{key:"signin",style:{padding:"0.5rem 1rem",fontSize:"0.875rem",fontWeight:"500",color:"#6b7280",backgroundColor:"transparent",border:"none",borderRadius:"0.375rem",cursor:"pointer"}},"Sign in"),e.createElement("button",{key:"signup",style:{padding:"0.5rem 1rem",fontSize:"0.875rem",fontWeight:"500",color:"white",backgroundColor:"#3b82f6",border:"none",borderRadius:"0.375rem",cursor:"pointer"}},"Sign up")])])},c={render:()=>{const[m,R]=g.useState(!1);return e.createElement("div",{},[e.createElement(t,{key:"navbar"},[e.createElement(t.Brand,{key:"brand"},"Responsive Brand"),e.createElement("div",{key:"desktop",style:{display:"none"},className:"hidden md:flex"},[e.createElement(t.Content,{key:"content",justify:"end"},[e.createElement(t.Item,{key:"home",active:!0},"Home"),e.createElement(t.Item,{key:"about"},"About"),e.createElement(t.Item,{key:"services"},"Services"),e.createElement(t.Item,{key:"contact"},"Contact")])]),e.createElement("div",{key:"mobile",className:"md:hidden"},[e.createElement(t.Toggle,{key:"toggle",isOpen:m,onClick:()=>R(!m)})])]),e.createElement(t.Menu,{key:"menu",isOpen:m},[e.createElement(t.Item,{key:"home",active:!0},"Home"),e.createElement(t.Item,{key:"about"},"About"),e.createElement(t.Item,{key:"services"},"Services"),e.createElement(t.Item,{key:"contact"},"Contact")])])}};var o,i,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => React.createElement(Navbar, {}, [React.createElement(Navbar.Brand, {
    key: 'brand'
  }, 'Brand'), React.createElement(Navbar.Content, {
    key: 'content',
    justify: 'end'
  }, [React.createElement(Navbar.Item, {
    key: 'home',
    active: true
  }, 'Home'), React.createElement(Navbar.Item, {
    key: 'about'
  }, 'About'), React.createElement(Navbar.Item, {
    key: 'contact'
  }, 'Contact')])])
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var s,d,y;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }
  }, [React.createElement('div', {
    key: 'default'
  }, [React.createElement('h3', {
    key: 'title',
    style: {
      margin: '0 0 0.5rem 1rem',
      fontSize: '0.875rem',
      fontWeight: '600'
    }
  }, 'Default'), React.createElement(Navbar, {
    key: 'navbar',
    variant: 'default'
  }, [React.createElement(Navbar.Brand, {
    key: 'brand'
  }, 'Brand'), React.createElement(Navbar.Content, {
    key: 'content',
    justify: 'end'
  }, [React.createElement(Navbar.Item, {
    key: 'home',
    active: true
  }, 'Home'), React.createElement(Navbar.Item, {
    key: 'about'
  }, 'About')])])]), React.createElement('div', {
    key: 'primary'
  }, [React.createElement('h3', {
    key: 'title',
    style: {
      margin: '0 0 0.5rem 1rem',
      fontSize: '0.875rem',
      fontWeight: '600'
    }
  }, 'Primary'), React.createElement(Navbar, {
    key: 'navbar',
    variant: 'primary'
  }, [React.createElement(Navbar.Brand, {
    key: 'brand'
  }, 'Brand'), React.createElement(Navbar.Content, {
    key: 'content',
    justify: 'end'
  }, [React.createElement(Navbar.Item, {
    key: 'home',
    active: true
  }, 'Home'), React.createElement(Navbar.Item, {
    key: 'about'
  }, 'About')])])]), React.createElement('div', {
    key: 'secondary'
  }, [React.createElement('h3', {
    key: 'title',
    style: {
      margin: '0 0 0.5rem 1rem',
      fontSize: '0.875rem',
      fontWeight: '600'
    }
  }, 'Secondary'), React.createElement(Navbar, {
    key: 'navbar',
    variant: 'secondary'
  }, [React.createElement(Navbar.Brand, {
    key: 'brand'
  }, 'Brand'), React.createElement(Navbar.Content, {
    key: 'content',
    justify: 'end'
  }, [React.createElement(Navbar.Item, {
    key: 'home',
    active: true
  }, 'Home'), React.createElement(Navbar.Item, {
    key: 'about'
  }, 'About')])])])])
}`,...(y=(d=a.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,b,k;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => React.createElement(Navbar, {
    shadow: true
  }, [React.createElement(Navbar.Brand, {
    key: 'brand'
  }, [React.createElement('div', {
    key: 'logo',
    style: {
      width: '32px',
      height: '32px',
      backgroundColor: '#3b82f6',
      borderRadius: '0.375rem',
      marginRight: '0.5rem'
    }
  }), React.createElement('span', {
    key: 'text'
  }, 'Company')]), React.createElement(Navbar.Content, {
    key: 'nav',
    justify: 'center'
  }, [React.createElement(Navbar.Item, {
    key: 'products'
  }, 'Products'), React.createElement(Navbar.Item, {
    key: 'solutions'
  }, 'Solutions'), React.createElement(Navbar.Item, {
    key: 'pricing',
    active: true
  }, 'Pricing'), React.createElement(Navbar.Item, {
    key: 'docs'
  }, 'Documentation')]), React.createElement(Navbar.Content, {
    key: 'actions',
    justify: 'end'
  }, [React.createElement('button', {
    key: 'signin',
    style: {
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#6b7280',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: '0.375rem',
      cursor: 'pointer'
    }
  }, 'Sign in'), React.createElement('button', {
    key: 'signup',
    style: {
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: 'white',
      backgroundColor: '#3b82f6',
      border: 'none',
      borderRadius: '0.375rem',
      cursor: 'pointer'
    }
  }, 'Sign up')])])
}`,...(k=(b=r.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var E,v,p;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return React.createElement('div', {}, [React.createElement(Navbar, {
      key: 'navbar'
    }, [React.createElement(Navbar.Brand, {
      key: 'brand'
    }, 'Responsive Brand'), React.createElement('div', {
      key: 'desktop',
      style: {
        display: 'none'
      },
      className: 'hidden md:flex'
    }, [React.createElement(Navbar.Content, {
      key: 'content',
      justify: 'end'
    }, [React.createElement(Navbar.Item, {
      key: 'home',
      active: true
    }, 'Home'), React.createElement(Navbar.Item, {
      key: 'about'
    }, 'About'), React.createElement(Navbar.Item, {
      key: 'services'
    }, 'Services'), React.createElement(Navbar.Item, {
      key: 'contact'
    }, 'Contact')])]), React.createElement('div', {
      key: 'mobile',
      className: 'md:hidden'
    }, [React.createElement(Navbar.Toggle, {
      key: 'toggle',
      isOpen: isOpen,
      onClick: () => setIsOpen(!isOpen)
    })])]), React.createElement(Navbar.Menu, {
      key: 'menu',
      isOpen: isOpen
    }, [React.createElement(Navbar.Item, {
      key: 'home',
      active: true
    }, 'Home'), React.createElement(Navbar.Item, {
      key: 'about'
    }, 'About'), React.createElement(Navbar.Item, {
      key: 'services'
    }, 'Services'), React.createElement(Navbar.Item, {
      key: 'contact'
    }, 'Contact')])]);
  }
}`,...(p=(v=c.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};const A=["Default","Variants","WithLogo","ResponsiveNavbar"];export{n as Default,c as ResponsiveNavbar,a as Variants,r as WithLogo,A as __namedExportsOrder,O as default};
