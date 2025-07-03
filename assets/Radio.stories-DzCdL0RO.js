import{R as e,r}from"./iframe-Cqy-rCMJ.js";import{R as a,a as d}from"./Radio-dQSR6adN.js";import"./cn-DuMXYCiK.js";const L={title:"Components/Radio",component:a,parameters:{layout:"centered"},tags:["autodocs"]},l={render:()=>{const[t,n]=r.useState("");return e.createElement(a,{label:"Option 1",value:"option1",checked:t==="option1",onChange:()=>n("option1")})}},o={render:()=>{const[t,n]=r.useState("");return e.createElement(a,{label:"Premium Plan",description:"Access to all features with priority support",value:"premium",checked:t==="premium",onChange:()=>n("premium")})}},s={render:()=>{const[t,n]=r.useState("medium");return e.createElement(d,{value:t,onChange:n,name:"size"},e.createElement(a,{label:"Small",description:"Perfect for personal use",value:"small"}),e.createElement(a,{label:"Medium",description:"Great for small teams",value:"medium"}),e.createElement(a,{label:"Large",description:"Best for large organizations",value:"large"}))}},c={render:()=>{const[t,n]=r.useState("md");return e.createElement(d,{value:t,onChange:n,name:"sizes"},e.createElement(a,{label:"Small radio",size:"sm",value:"sm"}),e.createElement(a,{label:"Medium radio (default)",size:"md",value:"md"}),e.createElement(a,{label:"Large radio",size:"lg",value:"lg"}))}},i={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"}},e.createElement(a,{label:"Disabled unchecked",disabled:!0,checked:!1}),e.createElement(a,{label:"Disabled checked",disabled:!0,checked:!0}))},u={render:()=>{const[t,n]=r.useState("");return e.createElement(d,{value:t,onChange:n,name:"required"},e.createElement(a,{label:"Option 1",value:"option1",error:t===""?"Please select an option":""}),e.createElement(a,{label:"Option 2",value:"option2"}))}},m={render:()=>{const[t,n]=r.useState("card");return e.createElement("div",{style:{width:"300px"}},e.createElement("h3",{style:{margin:"0 0 1rem 0",fontSize:"1rem",fontWeight:"600"}},"Payment Method"),e.createElement(d,{value:t,onChange:n,name:"payment"},e.createElement(a,{label:"Credit Card",description:"Pay with Visa, Mastercard, or American Express",value:"card"}),e.createElement(a,{label:"PayPal",description:"Pay securely with your PayPal account",value:"paypal"}),e.createElement(a,{label:"Bank Transfer",description:"Direct transfer from your bank account",value:"bank"}),e.createElement(a,{label:"Cryptocurrency",description:"Pay with Bitcoin, Ethereum, or other crypto",value:"crypto"})))}};var p,h,v;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return React.createElement(Radio, {
      label: 'Option 1',
      value: 'option1',
      checked: value === 'option1',
      onChange: () => setValue('option1')
    });
  }
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var E,R,b;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return React.createElement(Radio, {
      label: 'Premium Plan',
      description: 'Access to all features with priority support',
      value: 'premium',
      checked: value === 'premium',
      onChange: () => setValue('premium')
    });
  }
}`,...(b=(R=o.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var y,g,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('medium');
    return React.createElement(RadioGroup, {
      value: value,
      onChange: setValue,
      name: 'size'
    }, React.createElement(Radio, {
      label: 'Small',
      description: 'Perfect for personal use',
      value: 'small'
    }), React.createElement(Radio, {
      label: 'Medium',
      description: 'Great for small teams',
      value: 'medium'
    }), React.createElement(Radio, {
      label: 'Large',
      description: 'Best for large organizations',
      value: 'large'
    }));
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var S,P,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('md');
    return React.createElement(RadioGroup, {
      value: value,
      onChange: setValue,
      name: 'sizes'
    }, React.createElement(Radio, {
      label: 'Small radio',
      size: 'sm',
      value: 'sm'
    }), React.createElement(Radio, {
      label: 'Medium radio (default)',
      size: 'md',
      value: 'md'
    }), React.createElement(Radio, {
      label: 'Large radio',
      size: 'lg',
      value: 'lg'
    }));
  }
}`,...(C=(P=c.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var k,V,z;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }
  }, React.createElement(Radio, {
    label: 'Disabled unchecked',
    disabled: true,
    checked: false
  }), React.createElement(Radio, {
    label: 'Disabled checked',
    disabled: true,
    checked: true
  }))
}`,...(z=(V=i.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var D,x,M;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return React.createElement(RadioGroup, {
      value: value,
      onChange: setValue,
      name: 'required'
    }, React.createElement(Radio, {
      label: 'Option 1',
      value: 'option1',
      error: value === '' ? 'Please select an option' : ''
    }), React.createElement(Radio, {
      label: 'Option 2',
      value: 'option2'
    }));
  }
}`,...(M=(x=u.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var w,G,O;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [method, setMethod] = useState('card');
    return React.createElement('div', {
      style: {
        width: '300px'
      }
    }, React.createElement('h3', {
      style: {
        margin: '0 0 1rem 0',
        fontSize: '1rem',
        fontWeight: '600'
      }
    }, 'Payment Method'), React.createElement(RadioGroup, {
      value: method,
      onChange: setMethod,
      name: 'payment'
    }, React.createElement(Radio, {
      label: 'Credit Card',
      description: 'Pay with Visa, Mastercard, or American Express',
      value: 'card'
    }), React.createElement(Radio, {
      label: 'PayPal',
      description: 'Pay securely with your PayPal account',
      value: 'paypal'
    }), React.createElement(Radio, {
      label: 'Bank Transfer',
      description: 'Direct transfer from your bank account',
      value: 'bank'
    }), React.createElement(Radio, {
      label: 'Cryptocurrency',
      description: 'Pay with Bitcoin, Ethereum, or other crypto',
      value: 'crypto'
    })));
  }
}`,...(O=(G=m.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};const _=["Default","WithDescription","RadioGroupExample","Sizes","Disabled","WithError","PaymentMethod"];export{l as Default,i as Disabled,m as PaymentMethod,s as RadioGroupExample,c as Sizes,o as WithDescription,u as WithError,_ as __namedExportsOrder,L as default};
