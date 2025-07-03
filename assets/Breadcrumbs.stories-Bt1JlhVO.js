import{R as e}from"./iframe-Cqy-rCMJ.js";import{a as t}from"./Pagination-CBFu9Hqx.js";import"./Textarea-CQv7R1U3.js";import"./Checkbox-CedMCt2U.js";import"./Radio-dQSR6adN.js";import"./Tabs-BaO5psEy.js";import"./Accordion-yMz8LAdv.js";import"./cn-DuMXYCiK.js";import"./index-Dykr6vKl.js";const j={title:"Components/Breadcrumbs",component:t,parameters:{layout:"centered"}},r={render:()=>e.createElement(t,{},[e.createElement(t.Item,{key:"home",href:"#"},"Home"),e.createElement(t.Item,{key:"category",href:"#"},"Category"),e.createElement(t.Item,{key:"current",active:!0},"Current Page")])},a={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"}},[e.createElement("div",{key:"arrow"},[e.createElement("p",{key:"label",style:{fontSize:"0.875rem",marginBottom:"0.5rem"}},"Arrow Separator"),e.createElement(t,{key:"breadcrumbs",separator:"→"},[e.createElement(t.Item,{key:"home",href:"#"},"Home"),e.createElement(t.Item,{key:"docs",href:"#"},"Documentation"),e.createElement(t.Item,{key:"current",active:!0},"Getting Started")])]),e.createElement("div",{key:"gt"},[e.createElement("p",{key:"label",style:{fontSize:"0.875rem",marginBottom:"0.5rem"}},"Greater Than Separator"),e.createElement(t,{key:"breadcrumbs",separator:">"},[e.createElement(t.Item,{key:"home",href:"#"},"Home"),e.createElement(t.Item,{key:"products",href:"#"},"Products"),e.createElement(t.Item,{key:"current",active:!0},"Product Details")])]),e.createElement("div",{key:"dot"},[e.createElement("p",{key:"label",style:{fontSize:"0.875rem",marginBottom:"0.5rem"}},"Dot Separator"),e.createElement(t,{key:"breadcrumbs",separator:"•"},[e.createElement(t.Item,{key:"dashboard",href:"#"},"Dashboard"),e.createElement(t.Item,{key:"users",href:"#"},"Users"),e.createElement(t.Item,{key:"current",active:!0},"User Profile")])])])},n={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"}},[e.createElement("div",{key:"default"},[e.createElement("p",{key:"label",style:{fontSize:"0.875rem",marginBottom:"0.5rem"}},"Default"),e.createElement(t,{key:"breadcrumbs",variant:"default"},[e.createElement(t.Item,{key:"home",href:"#"},"Home"),e.createElement(t.Item,{key:"category",href:"#"},"Category"),e.createElement(t.Item,{key:"current",active:!0},"Current Page")])]),e.createElement("div",{key:"primary"},[e.createElement("p",{key:"label",style:{fontSize:"0.875rem",marginBottom:"0.5rem"}},"Primary"),e.createElement(t,{key:"breadcrumbs",variant:"primary"},[e.createElement(t.Item,{key:"home",href:"#"},"Home"),e.createElement(t.Item,{key:"category",href:"#"},"Category"),e.createElement(t.Item,{key:"current",active:!0},"Current Page")])]),e.createElement("div",{key:"secondary"},[e.createElement("p",{key:"label",style:{fontSize:"0.875rem",marginBottom:"0.5rem"}},"Secondary"),e.createElement(t,{key:"breadcrumbs",variant:"secondary"},[e.createElement(t.Item,{key:"home",href:"#"},"Home"),e.createElement(t.Item,{key:"category",href:"#"},"Category"),e.createElement(t.Item,{key:"current",active:!0},"Current Page")])])])},m={render:()=>{const R=()=>e.createElement("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20"},e.createElement("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})),v=()=>e.createElement("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20"},e.createElement("path",{d:"M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"}));return e.createElement(t,{},[e.createElement(t.Item,{key:"home",href:"#"},[e.createElement(R,{key:"icon"}),e.createElement("span",{key:"text",style:{marginLeft:"0.25rem"}},"Home")]),e.createElement(t.Item,{key:"projects",href:"#"},[e.createElement(v,{key:"icon"}),e.createElement("span",{key:"text",style:{marginLeft:"0.25rem"}},"Projects")]),e.createElement(t.Item,{key:"current",active:!0},"Project Details")])}},c={render:()=>e.createElement("div",{style:{width:"600px"}},[e.createElement(t,{key:"breadcrumbs"},[e.createElement(t.Item,{key:"root",href:"#"},"E-commerce Platform"),e.createElement(t.Item,{key:"admin",href:"#"},"Admin Dashboard"),e.createElement(t.Item,{key:"products",href:"#"},"Product Management"),e.createElement(t.Item,{key:"categories",href:"#"},"Categories"),e.createElement(t.Item,{key:"electronics",href:"#"},"Electronics"),e.createElement(t.Item,{key:"current",active:!0},"Smartphones")])])};var o,l,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => React.createElement(Breadcrumbs, {}, [React.createElement(Breadcrumbs.Item, {
    key: 'home',
    href: '#'
  }, 'Home'), React.createElement(Breadcrumbs.Item, {
    key: 'category',
    href: '#'
  }, 'Category'), React.createElement(Breadcrumbs.Item, {
    key: 'current',
    active: true
  }, 'Current Page')])
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var y,i,d;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '400px'
    }
  }, [React.createElement('div', {
    key: 'arrow'
  }, [React.createElement('p', {
    key: 'label',
    style: {
      fontSize: '0.875rem',
      marginBottom: '0.5rem'
    }
  }, 'Arrow Separator'), React.createElement(Breadcrumbs, {
    key: 'breadcrumbs',
    separator: '→'
  }, [React.createElement(Breadcrumbs.Item, {
    key: 'home',
    href: '#'
  }, 'Home'), React.createElement(Breadcrumbs.Item, {
    key: 'docs',
    href: '#'
  }, 'Documentation'), React.createElement(Breadcrumbs.Item, {
    key: 'current',
    active: true
  }, 'Getting Started')])]), React.createElement('div', {
    key: 'gt'
  }, [React.createElement('p', {
    key: 'label',
    style: {
      fontSize: '0.875rem',
      marginBottom: '0.5rem'
    }
  }, 'Greater Than Separator'), React.createElement(Breadcrumbs, {
    key: 'breadcrumbs',
    separator: '>'
  }, [React.createElement(Breadcrumbs.Item, {
    key: 'home',
    href: '#'
  }, 'Home'), React.createElement(Breadcrumbs.Item, {
    key: 'products',
    href: '#'
  }, 'Products'), React.createElement(Breadcrumbs.Item, {
    key: 'current',
    active: true
  }, 'Product Details')])]), React.createElement('div', {
    key: 'dot'
  }, [React.createElement('p', {
    key: 'label',
    style: {
      fontSize: '0.875rem',
      marginBottom: '0.5rem'
    }
  }, 'Dot Separator'), React.createElement(Breadcrumbs, {
    key: 'breadcrumbs',
    separator: '•'
  }, [React.createElement(Breadcrumbs.Item, {
    key: 'dashboard',
    href: '#'
  }, 'Dashboard'), React.createElement(Breadcrumbs.Item, {
    key: 'users',
    href: '#'
  }, 'Users'), React.createElement(Breadcrumbs.Item, {
    key: 'current',
    active: true
  }, 'User Profile')])])])
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,E,k;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '400px'
    }
  }, [React.createElement('div', {
    key: 'default'
  }, [React.createElement('p', {
    key: 'label',
    style: {
      fontSize: '0.875rem',
      marginBottom: '0.5rem'
    }
  }, 'Default'), React.createElement(Breadcrumbs, {
    key: 'breadcrumbs',
    variant: 'default'
  }, [React.createElement(Breadcrumbs.Item, {
    key: 'home',
    href: '#'
  }, 'Home'), React.createElement(Breadcrumbs.Item, {
    key: 'category',
    href: '#'
  }, 'Category'), React.createElement(Breadcrumbs.Item, {
    key: 'current',
    active: true
  }, 'Current Page')])]), React.createElement('div', {
    key: 'primary'
  }, [React.createElement('p', {
    key: 'label',
    style: {
      fontSize: '0.875rem',
      marginBottom: '0.5rem'
    }
  }, 'Primary'), React.createElement(Breadcrumbs, {
    key: 'breadcrumbs',
    variant: 'primary'
  }, [React.createElement(Breadcrumbs.Item, {
    key: 'home',
    href: '#'
  }, 'Home'), React.createElement(Breadcrumbs.Item, {
    key: 'category',
    href: '#'
  }, 'Category'), React.createElement(Breadcrumbs.Item, {
    key: 'current',
    active: true
  }, 'Current Page')])]), React.createElement('div', {
    key: 'secondary'
  }, [React.createElement('p', {
    key: 'label',
    style: {
      fontSize: '0.875rem',
      marginBottom: '0.5rem'
    }
  }, 'Secondary'), React.createElement(Breadcrumbs, {
    key: 'breadcrumbs',
    variant: 'secondary'
  }, [React.createElement(Breadcrumbs.Item, {
    key: 'home',
    href: '#'
  }, 'Home'), React.createElement(Breadcrumbs.Item, {
    key: 'category',
    href: '#'
  }, 'Category'), React.createElement(Breadcrumbs.Item, {
    key: 'current',
    active: true
  }, 'Current Page')])])])
}`,...(k=(E=n.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var p,h,b;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const HomeIcon = () => React.createElement('svg', {
      className: 'w-4 h-4',
      fill: 'currentColor',
      viewBox: '0 0 20 20'
    }, React.createElement('path', {
      d: 'M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'
    }));
    const FolderIcon = () => React.createElement('svg', {
      className: 'w-4 h-4',
      fill: 'currentColor',
      viewBox: '0 0 20 20'
    }, React.createElement('path', {
      d: 'M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
    }));
    return React.createElement(Breadcrumbs, {}, [React.createElement(Breadcrumbs.Item, {
      key: 'home',
      href: '#'
    }, [React.createElement(HomeIcon, {
      key: 'icon'
    }), React.createElement('span', {
      key: 'text',
      style: {
        marginLeft: '0.25rem'
      }
    }, 'Home')]), React.createElement(Breadcrumbs.Item, {
      key: 'projects',
      href: '#'
    }, [React.createElement(FolderIcon, {
      key: 'icon'
    }), React.createElement('span', {
      key: 'text',
      style: {
        marginLeft: '0.25rem'
      }
    }, 'Projects')]), React.createElement(Breadcrumbs.Item, {
      key: 'current',
      active: true
    }, 'Project Details')]);
  }
}`,...(b=(h=m.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,I,g;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      width: '600px'
    }
  }, [React.createElement(Breadcrumbs, {
    key: 'breadcrumbs'
  }, [React.createElement(Breadcrumbs.Item, {
    key: 'root',
    href: '#'
  }, 'E-commerce Platform'), React.createElement(Breadcrumbs.Item, {
    key: 'admin',
    href: '#'
  }, 'Admin Dashboard'), React.createElement(Breadcrumbs.Item, {
    key: 'products',
    href: '#'
  }, 'Product Management'), React.createElement(Breadcrumbs.Item, {
    key: 'categories',
    href: '#'
  }, 'Categories'), React.createElement(Breadcrumbs.Item, {
    key: 'electronics',
    href: '#'
  }, 'Electronics'), React.createElement(Breadcrumbs.Item, {
    key: 'current',
    active: true
  }, 'Smartphones')])])
}`,...(g=(I=c.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};const L=["Default","WithCustomSeparator","Variants","WithIcons","ComplexNavigation"];export{c as ComplexNavigation,r as Default,n as Variants,a as WithCustomSeparator,m as WithIcons,L as __namedExportsOrder,j as default};
