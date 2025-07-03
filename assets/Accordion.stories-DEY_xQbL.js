import{R as e,r as w}from"./iframe-Cqy-rCMJ.js";import{A as r,a as t,b as n,c as a}from"./Accordion-yMz8LAdv.js";import"./cn-DuMXYCiK.js";const x={title:"Components/Accordion",component:r,parameters:{layout:"centered"},tags:["autodocs"]},c={render:()=>e.createElement(r,{type:"single",collapsible:!0,style:{width:"400px"}},e.createElement(t,{value:"item-1"},e.createElement(n,{},"What is React?"),e.createElement(a,{},"React is a JavaScript library for building user interfaces.")),e.createElement(t,{value:"item-2"},e.createElement(n,{},"How do I get started?"),e.createElement(a,{},"You can get started with React by visiting the official documentation.")),e.createElement(t,{value:"item-3"},e.createElement(n,{},"Is it accessible?"),e.createElement(a,{},"Yes! This accordion component follows WAI-ARIA design patterns.")))},l={render:()=>e.createElement(r,{type:"multiple",style:{width:"400px"}},e.createElement(t,{value:"features"},e.createElement(n,{},"Features"),e.createElement(a,{},"Fully customizable, keyboard accessible, smooth animations.")),e.createElement(t,{value:"installation"},e.createElement(n,{},"Installation"),e.createElement(a,{},"Install using: npm install design-systemui")),e.createElement(t,{value:"usage"},e.createElement(n,{},"Usage"),e.createElement(a,{},"Import and use the components in your React application.")))},o={render:()=>{const[s,I]=w.useState("item-1");return e.createElement(r,{type:"single",value:s,onValueChange:I,style:{width:"400px"}},e.createElement(t,{value:"item-1"},e.createElement(n,{},"Controlled Item 1"),e.createElement(a,{},"This accordion is controlled. The current value is: "+(s||"none"))),e.createElement(t,{value:"item-2"},e.createElement(n,{},"Controlled Item 2"),e.createElement(a,{},"You can control which items are open programmatically.")),e.createElement(t,{value:"item-3"},e.createElement(n,{},"Controlled Item 3"),e.createElement(a,{},"This is useful for complex state management scenarios.")))}},i={render:()=>e.createElement(r,{type:"single",collapsible:!0,style:{width:"500px"}},e.createElement(t,{value:"shipping"},e.createElement(n,{},"How long does shipping take?"),e.createElement(a,{},e.createElement("div",{},e.createElement("p",{style:{margin:"0 0 0.75rem 0"}},"Shipping times vary by location:"),e.createElement("ul",{style:{margin:0,paddingLeft:"1.5rem"}},e.createElement("li",{},"Domestic: 3-5 business days"),e.createElement("li",{},"International: 7-14 business days"),e.createElement("li",{},"Express: 1-2 business days (additional cost)"))))),e.createElement(t,{value:"returns"},e.createElement(n,{},"What is your return policy?"),e.createElement(a,{},"We offer a 30-day return policy for all items. Items must be in original condition with tags attached. Return shipping costs are covered by the customer unless the item was defective or incorrect.")),e.createElement(t,{value:"warranty"},e.createElement(n,{},"Do you offer warranties?"),e.createElement(a,{},e.createElement("div",{},e.createElement("p",{style:{margin:"0 0 0.75rem 0"}},"Yes, we offer different warranty options:"),e.createElement("ul",{style:{margin:0,paddingLeft:"1.5rem"}},e.createElement("li",{},"Standard: 1 year manufacturer warranty"),e.createElement("li",{},"Extended: 2-3 years (available for purchase)"),e.createElement("li",{},"Premium: Lifetime warranty on select items"))))),e.createElement(t,{value:"support"},e.createElement(n,{},"How can I contact support?"),e.createElement(a,{},e.createElement("div",{},e.createElement("p",{style:{margin:"0 0 0.75rem 0"}},"You can reach our support team through:"),e.createElement("ul",{style:{margin:0,paddingLeft:"1.5rem"}},e.createElement("li",{},"Email: support@example.com"),e.createElement("li",{},"Phone: 1-800-123-4567"),e.createElement("li",{},"Live Chat: Available 9 AM - 6 PM EST"),e.createElement("li",{},"Help Center: Visit our online help center"))))))};var m,d,u;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => React.createElement(Accordion, {
    type: 'single',
    collapsible: true,
    style: {
      width: '400px'
    }
  }, React.createElement(AccordionItem, {
    value: 'item-1'
  }, React.createElement(AccordionTrigger, {}, 'What is React?'), React.createElement(AccordionContent, {}, 'React is a JavaScript library for building user interfaces.')), React.createElement(AccordionItem, {
    value: 'item-2'
  }, React.createElement(AccordionTrigger, {}, 'How do I get started?'), React.createElement(AccordionContent, {}, 'You can get started with React by visiting the official documentation.')), React.createElement(AccordionItem, {
    value: 'item-3'
  }, React.createElement(AccordionTrigger, {}, 'Is it accessible?'), React.createElement(AccordionContent, {}, 'Yes! This accordion component follows WAI-ARIA design patterns.')))
}`,...(u=(d=c.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var E,p,g;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => React.createElement(Accordion, {
    type: 'multiple',
    style: {
      width: '400px'
    }
  }, React.createElement(AccordionItem, {
    value: 'features'
  }, React.createElement(AccordionTrigger, {}, 'Features'), React.createElement(AccordionContent, {}, 'Fully customizable, keyboard accessible, smooth animations.')), React.createElement(AccordionItem, {
    value: 'installation'
  }, React.createElement(AccordionTrigger, {}, 'Installation'), React.createElement(AccordionContent, {}, 'Install using: npm install design-systemui')), React.createElement(AccordionItem, {
    value: 'usage'
  }, React.createElement(AccordionTrigger, {}, 'Usage'), React.createElement(AccordionContent, {}, 'Import and use the components in your React application.')))
}`,...(g=(p=l.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,R,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('item-1');
    return React.createElement(Accordion, {
      type: 'single',
      value: value,
      onValueChange: setValue,
      style: {
        width: '400px'
      }
    }, React.createElement(AccordionItem, {
      value: 'item-1'
    }, React.createElement(AccordionTrigger, {}, 'Controlled Item 1'), React.createElement(AccordionContent, {}, 'This accordion is controlled. The current value is: ' + (value || 'none'))), React.createElement(AccordionItem, {
      value: 'item-2'
    }, React.createElement(AccordionTrigger, {}, 'Controlled Item 2'), React.createElement(AccordionContent, {}, 'You can control which items are open programmatically.')), React.createElement(AccordionItem, {
      value: 'item-3'
    }, React.createElement(AccordionTrigger, {}, 'Controlled Item 3'), React.createElement(AccordionContent, {}, 'This is useful for complex state management scenarios.')));
  }
}`,...(h=(R=o.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var A,v,f;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => React.createElement(Accordion, {
    type: 'single',
    collapsible: true,
    style: {
      width: '500px'
    }
  }, React.createElement(AccordionItem, {
    value: 'shipping'
  }, React.createElement(AccordionTrigger, {}, 'How long does shipping take?'), React.createElement(AccordionContent, {}, React.createElement('div', {}, React.createElement('p', {
    style: {
      margin: '0 0 0.75rem 0'
    }
  }, 'Shipping times vary by location:'), React.createElement('ul', {
    style: {
      margin: 0,
      paddingLeft: '1.5rem'
    }
  }, React.createElement('li', {}, 'Domestic: 3-5 business days'), React.createElement('li', {}, 'International: 7-14 business days'), React.createElement('li', {}, 'Express: 1-2 business days (additional cost)'))))), React.createElement(AccordionItem, {
    value: 'returns'
  }, React.createElement(AccordionTrigger, {}, 'What is your return policy?'), React.createElement(AccordionContent, {}, 'We offer a 30-day return policy for all items. Items must be in original condition with tags attached. Return shipping costs are covered by the customer unless the item was defective or incorrect.')), React.createElement(AccordionItem, {
    value: 'warranty'
  }, React.createElement(AccordionTrigger, {}, 'Do you offer warranties?'), React.createElement(AccordionContent, {}, React.createElement('div', {}, React.createElement('p', {
    style: {
      margin: '0 0 0.75rem 0'
    }
  }, 'Yes, we offer different warranty options:'), React.createElement('ul', {
    style: {
      margin: 0,
      paddingLeft: '1.5rem'
    }
  }, React.createElement('li', {}, 'Standard: 1 year manufacturer warranty'), React.createElement('li', {}, 'Extended: 2-3 years (available for purchase)'), React.createElement('li', {}, 'Premium: Lifetime warranty on select items'))))), React.createElement(AccordionItem, {
    value: 'support'
  }, React.createElement(AccordionTrigger, {}, 'How can I contact support?'), React.createElement(AccordionContent, {}, React.createElement('div', {}, React.createElement('p', {
    style: {
      margin: '0 0 0.75rem 0'
    }
  }, 'You can reach our support team through:'), React.createElement('ul', {
    style: {
      margin: 0,
      paddingLeft: '1.5rem'
    }
  }, React.createElement('li', {}, 'Email: support@example.com'), React.createElement('li', {}, 'Phone: 1-800-123-4567'), React.createElement('li', {}, 'Live Chat: Available 9 AM - 6 PM EST'), React.createElement('li', {}, 'Help Center: Visit our online help center'))))))
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const S=["Default","Multiple","Controlled","FAQ"];export{o as Controlled,c as Default,i as FAQ,l as Multiple,S as __namedExportsOrder,x as default};
