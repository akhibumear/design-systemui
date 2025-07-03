import{R as e}from"./iframe-Cqy-rCMJ.js";import{C as t,c as n,d as a,e as r,f as c,g,b as i,B as b}from"./Pagination-CBFu9Hqx.js";import"./Textarea-CQv7R1U3.js";import"./Checkbox-CedMCt2U.js";import"./Radio-dQSR6adN.js";import"./Tabs-BaO5psEy.js";import"./Accordion-yMz8LAdv.js";import"./cn-DuMXYCiK.js";import"./index-Dykr6vKl.js";const F={title:"Components/Card",component:t,parameters:{layout:"centered"}},o={render:()=>e.createElement(t,{style:{width:"300px"}},[e.createElement(n,{key:"header"},[e.createElement(a,{key:"title"},"Card Title"),e.createElement(r,{key:"desc"},"This is a card description that explains what this card is about.")]),e.createElement(c,{key:"content"},e.createElement("p",{style:{fontSize:"0.875rem",color:"var(--color-secondary-600)"}},"This is the main content area of the card. You can put any content here.")),e.createElement(g,{key:"footer"},[e.createElement(i,{key:"btn1",size:"sm"},"Action"),e.createElement(i,{key:"btn2",variant:"outline",size:"sm"},"Cancel")])])},l={render:()=>e.createElement(t,{hoverable:!0,style:{width:"300px"}},[e.createElement(n,{key:"header"},[e.createElement(a,{key:"title"},"Hoverable Card"),e.createElement(r,{key:"desc"},"Hover over this card to see the shadow effect.")]),e.createElement(c,{key:"content"},e.createElement("p",{style:{fontSize:"0.875rem",color:"var(--color-secondary-600)"}},"This card will show an enhanced shadow when you hover over it."))])},d={render:()=>e.createElement(t,{style:{width:"300px"}},[e.createElement(n,{key:"header"},[e.createElement("div",{key:"title-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},[e.createElement(a,{key:"title"},"Project Status"),e.createElement(b,{key:"badge",variant:"success",size:"sm"},"Active")]),e.createElement(r,{key:"desc"},"Current project status and information.")]),e.createElement(c,{key:"content"},e.createElement("p",{style:{fontSize:"0.875rem",color:"var(--color-secondary-600)"}},"This project is currently active and running smoothly."))])},s={render:()=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem",width:"600px"}},[e.createElement(t,{key:"default",hoverable:!0,style:{minHeight:"150px"}},[e.createElement(n,{key:"header"},[e.createElement(a,{key:"title"},"Default Card"),e.createElement(r,{key:"desc"},"Standard card with shadow and hover effect")]),e.createElement(c,{key:"content"},e.createElement("p",{style:{fontSize:"0.875rem",color:"var(--color-secondary-600)"}},"Hover to see the shadow effect."))]),e.createElement(t,{key:"outline",variant:"outline",hoverable:!0,style:{minHeight:"150px"}},[e.createElement(n,{key:"header"},[e.createElement(a,{key:"title"},"Outline Card"),e.createElement(r,{key:"desc"},"Card with border only")]),e.createElement(c,{key:"content"},e.createElement("p",{style:{fontSize:"0.875rem",color:"var(--color-secondary-600)"}},"This card uses the outline variant."))]),e.createElement(t,{key:"filled",variant:"filled",hoverable:!0,style:{minHeight:"150px"}},[e.createElement(n,{key:"header"},[e.createElement(a,{key:"title"},"Filled Card"),e.createElement(r,{key:"desc"},"Card with filled background")]),e.createElement(c,{key:"content"},e.createElement("p",{style:{fontSize:"0.875rem",color:"var(--color-secondary-600)"}},"This card has a filled background."))]),e.createElement(t,{key:"elevated",variant:"elevated",style:{minHeight:"150px"}},[e.createElement(n,{key:"header"},[e.createElement(a,{key:"title"},"Elevated Card"),e.createElement(r,{key:"desc"},"Card with enhanced shadow")]),e.createElement(c,{key:"content"},e.createElement("p",{style:{fontSize:"0.875rem",color:"var(--color-secondary-600)"}},"This card has a permanent elevated shadow."))])])};var m,y,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => React.createElement(Card, {
    style: {
      width: '300px'
    }
  }, [React.createElement(CardHeader, {
    key: 'header'
  }, [React.createElement(CardTitle, {
    key: 'title'
  }, 'Card Title'), React.createElement(CardDescription, {
    key: 'desc'
  }, 'This is a card description that explains what this card is about.')]), React.createElement(CardContent, {
    key: 'content'
  }, React.createElement('p', {
    style: {
      fontSize: '0.875rem',
      color: 'var(--color-secondary-600)'
    }
  }, 'This is the main content area of the card. You can put any content here.')), React.createElement(CardFooter, {
    key: 'footer'
  }, [React.createElement(Button, {
    key: 'btn1',
    size: 'sm'
  }, 'Action'), React.createElement(Button, {
    key: 'btn2',
    variant: 'outline',
    size: 'sm'
  }, 'Cancel')])])
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var E,p,C;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => React.createElement(Card, {
    hoverable: true,
    style: {
      width: '300px'
    }
  }, [React.createElement(CardHeader, {
    key: 'header'
  }, [React.createElement(CardTitle, {
    key: 'title'
  }, 'Hoverable Card'), React.createElement(CardDescription, {
    key: 'desc'
  }, 'Hover over this card to see the shadow effect.')]), React.createElement(CardContent, {
    key: 'content'
  }, React.createElement('p', {
    style: {
      fontSize: '0.875rem',
      color: 'var(--color-secondary-600)'
    }
  }, 'This card will show an enhanced shadow when you hover over it.'))])
}`,...(C=(p=l.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var k,u,v;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => React.createElement(Card, {
    style: {
      width: '300px'
    }
  }, [React.createElement(CardHeader, {
    key: 'header'
  }, [React.createElement('div', {
    key: 'title-row',
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, [React.createElement(CardTitle, {
    key: 'title'
  }, 'Project Status'), React.createElement(Badge, {
    key: 'badge',
    variant: 'success',
    size: 'sm'
  }, 'Active')]), React.createElement(CardDescription, {
    key: 'desc'
  }, 'Current project status and information.')]), React.createElement(CardContent, {
    key: 'content'
  }, React.createElement('p', {
    style: {
      fontSize: '0.875rem',
      color: 'var(--color-secondary-600)'
    }
  }, 'This project is currently active and running smoothly.'))])
}`,...(v=(u=d.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var f,R,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem',
      width: '600px'
    }
  }, [React.createElement(Card, {
    key: 'default',
    hoverable: true,
    style: {
      minHeight: '150px'
    }
  }, [React.createElement(CardHeader, {
    key: 'header'
  }, [React.createElement(CardTitle, {
    key: 'title'
  }, 'Default Card'), React.createElement(CardDescription, {
    key: 'desc'
  }, 'Standard card with shadow and hover effect')]), React.createElement(CardContent, {
    key: 'content'
  }, React.createElement('p', {
    style: {
      fontSize: '0.875rem',
      color: 'var(--color-secondary-600)'
    }
  }, 'Hover to see the shadow effect.'))]), React.createElement(Card, {
    key: 'outline',
    variant: 'outline',
    hoverable: true,
    style: {
      minHeight: '150px'
    }
  }, [React.createElement(CardHeader, {
    key: 'header'
  }, [React.createElement(CardTitle, {
    key: 'title'
  }, 'Outline Card'), React.createElement(CardDescription, {
    key: 'desc'
  }, 'Card with border only')]), React.createElement(CardContent, {
    key: 'content'
  }, React.createElement('p', {
    style: {
      fontSize: '0.875rem',
      color: 'var(--color-secondary-600)'
    }
  }, 'This card uses the outline variant.'))]), React.createElement(Card, {
    key: 'filled',
    variant: 'filled',
    hoverable: true,
    style: {
      minHeight: '150px'
    }
  }, [React.createElement(CardHeader, {
    key: 'header'
  }, [React.createElement(CardTitle, {
    key: 'title'
  }, 'Filled Card'), React.createElement(CardDescription, {
    key: 'desc'
  }, 'Card with filled background')]), React.createElement(CardContent, {
    key: 'content'
  }, React.createElement('p', {
    style: {
      fontSize: '0.875rem',
      color: 'var(--color-secondary-600)'
    }
  }, 'This card has a filled background.'))]), React.createElement(Card, {
    key: 'elevated',
    variant: 'elevated',
    style: {
      minHeight: '150px'
    }
  }, [React.createElement(CardHeader, {
    key: 'header'
  }, [React.createElement(CardTitle, {
    key: 'title'
  }, 'Elevated Card'), React.createElement(CardDescription, {
    key: 'desc'
  }, 'Card with enhanced shadow')]), React.createElement(CardContent, {
    key: 'content'
  }, React.createElement('p', {
    style: {
      fontSize: '0.875rem',
      color: 'var(--color-secondary-600)'
    }
  }, 'This card has a permanent elevated shadow.'))])])
}`,...(w=(R=s.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};const O=["Default","Hoverable","WithBadge","Variants"];export{o as Default,l as Hoverable,s as Variants,d as WithBadge,O as __namedExportsOrder,F as default};
