import{r as M,R as e}from"./iframe-Cqy-rCMJ.js";import{M as a,b as t,h as s,i as u}from"./Pagination-CBFu9Hqx.js";import"./Textarea-CQv7R1U3.js";import"./Checkbox-CedMCt2U.js";import"./Radio-dQSR6adN.js";import"./Tabs-BaO5psEy.js";import"./Accordion-yMz8LAdv.js";import"./cn-DuMXYCiK.js";import"./index-Dykr6vKl.js";const h={title:"Components/Modal",component:a,parameters:{layout:"centered"}},l={render:()=>{const[o,n]=M.useState(!1);return e.createElement("div",{},[e.createElement(t,{key:"trigger",onClick:()=>n(!0)},"Open Modal"),e.createElement(a,{key:"modal",isOpen:o,onClose:()=>n(!1),title:"Example Modal",description:"This is a demonstration modal",size:"md"},[e.createElement(s,{key:"body"},e.createElement("p",{style:{fontSize:"0.875rem",color:"var(--color-secondary-600)"}},"This is the modal content. You can put any content here.")),e.createElement(u,{key:"footer"},[e.createElement(t,{key:"cancel",variant:"outline",size:"sm",onClick:()=>n(!1)},"Cancel"),e.createElement(t,{key:"confirm",size:"sm",onClick:()=>n(!1)},"Confirm")])])])}},r={render:()=>{const[o,n]=M.useState(null);return e.createElement("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"}},[e.createElement(t,{key:"sm",size:"sm",onClick:()=>n("sm")},"Small Modal"),e.createElement(t,{key:"md",size:"sm",onClick:()=>n("md")},"Medium Modal"),e.createElement(t,{key:"lg",size:"sm",onClick:()=>n("lg")},"Large Modal"),e.createElement(a,{key:"modal-sm",isOpen:o==="sm",onClose:()=>n(null),title:"Small Modal",size:"sm"},e.createElement(s,{},e.createElement("p",{style:{fontSize:"0.875rem",color:"var(--color-secondary-600)"}},"This is a small modal."))),e.createElement(a,{key:"modal-md",isOpen:o==="md",onClose:()=>n(null),title:"Medium Modal",size:"md"},e.createElement(s,{},e.createElement("p",{style:{fontSize:"0.875rem",color:"var(--color-secondary-600)"}},"This is a medium modal with more content space."))),e.createElement(a,{key:"modal-lg",isOpen:o==="lg",onClose:()=>n(null),title:"Large Modal",size:"lg"},e.createElement(s,{},e.createElement("p",{style:{fontSize:"0.875rem",color:"var(--color-secondary-600)"}},"This is a large modal with even more content space for complex forms or detailed information.")))])}};var m,c,i;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return React.createElement('div', {}, [React.createElement(Button, {
      key: 'trigger',
      onClick: () => setIsOpen(true)
    }, 'Open Modal'), React.createElement(Modal, {
      key: 'modal',
      isOpen: isOpen,
      onClose: () => setIsOpen(false),
      title: 'Example Modal',
      description: 'This is a demonstration modal',
      size: 'md'
    }, [React.createElement(ModalBody, {
      key: 'body'
    }, React.createElement('p', {
      style: {
        fontSize: '0.875rem',
        color: 'var(--color-secondary-600)'
      }
    }, 'This is the modal content. You can put any content here.')), React.createElement(ModalFooter, {
      key: 'footer'
    }, [React.createElement(Button, {
      key: 'cancel',
      variant: 'outline',
      size: 'sm',
      onClick: () => setIsOpen(false)
    }, 'Cancel'), React.createElement(Button, {
      key: 'confirm',
      size: 'sm',
      onClick: () => setIsOpen(false)
    }, 'Confirm')])])]);
  }
}`,...(i=(c=l.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,p,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [openModal, setOpenModal] = useState(null);
    return React.createElement('div', {
      style: {
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }
    }, [React.createElement(Button, {
      key: 'sm',
      size: 'sm',
      onClick: () => setOpenModal('sm')
    }, 'Small Modal'), React.createElement(Button, {
      key: 'md',
      size: 'sm',
      onClick: () => setOpenModal('md')
    }, 'Medium Modal'), React.createElement(Button, {
      key: 'lg',
      size: 'sm',
      onClick: () => setOpenModal('lg')
    }, 'Large Modal'),
    // Small Modal
    React.createElement(Modal, {
      key: 'modal-sm',
      isOpen: openModal === 'sm',
      onClose: () => setOpenModal(null),
      title: 'Small Modal',
      size: 'sm'
    }, React.createElement(ModalBody, {}, React.createElement('p', {
      style: {
        fontSize: '0.875rem',
        color: 'var(--color-secondary-600)'
      }
    }, 'This is a small modal.'))),
    // Medium Modal
    React.createElement(Modal, {
      key: 'modal-md',
      isOpen: openModal === 'md',
      onClose: () => setOpenModal(null),
      title: 'Medium Modal',
      size: 'md'
    }, React.createElement(ModalBody, {}, React.createElement('p', {
      style: {
        fontSize: '0.875rem',
        color: 'var(--color-secondary-600)'
      }
    }, 'This is a medium modal with more content space.'))),
    // Large Modal
    React.createElement(Modal, {
      key: 'modal-lg',
      isOpen: openModal === 'lg',
      onClose: () => setOpenModal(null),
      title: 'Large Modal',
      size: 'lg'
    }, React.createElement(ModalBody, {}, React.createElement('p', {
      style: {
        fontSize: '0.875rem',
        color: 'var(--color-secondary-600)'
      }
    }, 'This is a large modal with even more content space for complex forms or detailed information.')))]);
  }
}`,...(y=(p=r.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const v=["Default","Sizes"];export{l as Default,r as Sizes,v as __namedExportsOrder,h as default};
