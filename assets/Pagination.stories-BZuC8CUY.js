import{r as n,R as e}from"./iframe-Cqy-rCMJ.js";import{P as t}from"./Pagination-CBFu9Hqx.js";import"./Textarea-CQv7R1U3.js";import"./Checkbox-CedMCt2U.js";import"./Radio-dQSR6adN.js";import"./Tabs-BaO5psEy.js";import"./Accordion-yMz8LAdv.js";import"./cn-DuMXYCiK.js";import"./index-Dykr6vKl.js";const T={title:"Components/Pagination",component:t,parameters:{layout:"centered"}},l={render:()=>{const[a,r]=n.useState(1);return e.createElement(t,{currentPage:a,totalPages:10,onPageChange:r})}},c={render:()=>{const[a,r]=n.useState(3),[g,i]=n.useState(3),[o,s]=n.useState(3);return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center"}},[e.createElement("div",{key:"default",style:{textAlign:"center"}},[e.createElement("h3",{key:"title",style:{marginBottom:"1rem",fontSize:"0.875rem",fontWeight:"600"}},"Default"),e.createElement(t,{key:"pagination",variant:"default",currentPage:a,totalPages:8,onPageChange:r})]),e.createElement("div",{key:"outline",style:{textAlign:"center"}},[e.createElement("h3",{key:"title",style:{marginBottom:"1rem",fontSize:"0.875rem",fontWeight:"600"}},"Outline"),e.createElement(t,{key:"pagination",variant:"outline",currentPage:g,totalPages:8,onPageChange:i})]),e.createElement("div",{key:"ghost",style:{textAlign:"center"}},[e.createElement("h3",{key:"title",style:{marginBottom:"1rem",fontSize:"0.875rem",fontWeight:"600"}},"Ghost"),e.createElement(t,{key:"pagination",variant:"ghost",currentPage:o,totalPages:8,onPageChange:s})])])}},m={render:()=>{const[a,r]=n.useState(2),[g,i]=n.useState(2),[o,s]=n.useState(2);return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center"}},[e.createElement("div",{key:"sm",style:{textAlign:"center"}},[e.createElement("h3",{key:"title",style:{marginBottom:"1rem",fontSize:"0.875rem",fontWeight:"600"}},"Small"),e.createElement(t,{key:"pagination",size:"sm",currentPage:a,totalPages:6,onPageChange:r})]),e.createElement("div",{key:"md",style:{textAlign:"center"}},[e.createElement("h3",{key:"title",style:{marginBottom:"1rem",fontSize:"0.875rem",fontWeight:"600"}},"Medium"),e.createElement(t,{key:"pagination",size:"md",currentPage:g,totalPages:6,onPageChange:i})]),e.createElement("div",{key:"lg",style:{textAlign:"center"}},[e.createElement("h3",{key:"title",style:{marginBottom:"1rem",fontSize:"0.875rem",fontWeight:"600"}},"Large"),e.createElement(t,{key:"pagination",size:"lg",currentPage:o,totalPages:6,onPageChange:s})])])}},P={render:()=>{const[a,r]=n.useState(5),[g,i]=n.useState(5),[o,s]=n.useState(5);return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center"}},[e.createElement("div",{key:"no-first-last",style:{textAlign:"center"}},[e.createElement("h3",{key:"title",style:{marginBottom:"1rem",fontSize:"0.875rem",fontWeight:"600"}},"Without First/Last"),e.createElement(t,{key:"pagination",currentPage:a,totalPages:10,showFirstLast:!1,onPageChange:r})]),e.createElement("div",{key:"no-prev-next",style:{textAlign:"center"}},[e.createElement("h3",{key:"title",style:{marginBottom:"1rem",fontSize:"0.875rem",fontWeight:"600"}},"Without Prev/Next"),e.createElement(t,{key:"pagination",currentPage:g,totalPages:10,showPrevNext:!1,onPageChange:i})]),e.createElement("div",{key:"more-siblings",style:{textAlign:"center"}},[e.createElement("h3",{key:"title",style:{marginBottom:"1rem",fontSize:"0.875rem",fontWeight:"600"}},"More Sibling Pages"),e.createElement(t,{key:"pagination",currentPage:o,totalPages:20,siblingCount:2,onPageChange:s})])])}},y={render:()=>{const[a,r]=n.useState(25);return e.createElement("div",{style:{textAlign:"center"}},[e.createElement("p",{key:"info",style:{marginBottom:"1rem",fontSize:"0.875rem",color:"#6b7280"}},`Showing page ${a} of 100`),e.createElement(t,{key:"pagination",currentPage:a,totalPages:100,onPageChange:r})])}},u={render:()=>{const[a,r]=n.useState(1),[g,i]=n.useState(3),[o,s]=n.useState(1);return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center"}},[e.createElement("div",{key:"single",style:{textAlign:"center"}},[e.createElement("h3",{key:"title",style:{marginBottom:"1rem",fontSize:"0.875rem",fontWeight:"600"}},"Single Page (Hidden)"),e.createElement("div",{key:"content"},[e.createElement(t,{key:"pagination",currentPage:o,totalPages:1,onPageChange:s}),e.createElement("p",{key:"note",style:{marginTop:"0.5rem",fontSize:"0.75rem",color:"#6b7280"}},"Pagination is hidden when there's only one page")])]),e.createElement("div",{key:"few-pages",style:{textAlign:"center"}},[e.createElement("h3",{key:"title",style:{marginBottom:"1rem",fontSize:"0.875rem",fontWeight:"600"}},"Few Pages"),e.createElement(t,{key:"pagination",currentPage:g,totalPages:3,onPageChange:i})]),e.createElement("div",{key:"first-page",style:{textAlign:"center"}},[e.createElement("h3",{key:"title",style:{marginBottom:"1rem",fontSize:"0.875rem",fontWeight:"600"}},"First Page"),e.createElement(t,{key:"pagination",currentPage:a,totalPages:10,onPageChange:r})])])}};var p,d,h;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return React.createElement(Pagination, {
      currentPage: currentPage,
      totalPages: 10,
      onPageChange: setCurrentPage
    });
  }
}`,...(h=(d=l.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var f,E,k;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [defaultPage, setDefaultPage] = useState(3);
    const [outlinePage, setOutlinePage] = useState(3);
    const [ghostPage, setGhostPage] = useState(3);
    return React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'center'
      }
    }, [React.createElement('div', {
      key: 'default',
      style: {
        textAlign: 'center'
      }
    }, [React.createElement('h3', {
      key: 'title',
      style: {
        marginBottom: '1rem',
        fontSize: '0.875rem',
        fontWeight: '600'
      }
    }, 'Default'), React.createElement(Pagination, {
      key: 'pagination',
      variant: 'default',
      currentPage: defaultPage,
      totalPages: 8,
      onPageChange: setDefaultPage
    })]), React.createElement('div', {
      key: 'outline',
      style: {
        textAlign: 'center'
      }
    }, [React.createElement('h3', {
      key: 'title',
      style: {
        marginBottom: '1rem',
        fontSize: '0.875rem',
        fontWeight: '600'
      }
    }, 'Outline'), React.createElement(Pagination, {
      key: 'pagination',
      variant: 'outline',
      currentPage: outlinePage,
      totalPages: 8,
      onPageChange: setOutlinePage
    })]), React.createElement('div', {
      key: 'ghost',
      style: {
        textAlign: 'center'
      }
    }, [React.createElement('h3', {
      key: 'title',
      style: {
        marginBottom: '1rem',
        fontSize: '0.875rem',
        fontWeight: '600'
      }
    }, 'Ghost'), React.createElement(Pagination, {
      key: 'pagination',
      variant: 'ghost',
      currentPage: ghostPage,
      totalPages: 8,
      onPageChange: setGhostPage
    })])]);
  }
}`,...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var S,x,v;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [smPage, setSmPage] = useState(2);
    const [mdPage, setMdPage] = useState(2);
    const [lgPage, setLgPage] = useState(2);
    return React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'center'
      }
    }, [React.createElement('div', {
      key: 'sm',
      style: {
        textAlign: 'center'
      }
    }, [React.createElement('h3', {
      key: 'title',
      style: {
        marginBottom: '1rem',
        fontSize: '0.875rem',
        fontWeight: '600'
      }
    }, 'Small'), React.createElement(Pagination, {
      key: 'pagination',
      size: 'sm',
      currentPage: smPage,
      totalPages: 6,
      onPageChange: setSmPage
    })]), React.createElement('div', {
      key: 'md',
      style: {
        textAlign: 'center'
      }
    }, [React.createElement('h3', {
      key: 'title',
      style: {
        marginBottom: '1rem',
        fontSize: '0.875rem',
        fontWeight: '600'
      }
    }, 'Medium'), React.createElement(Pagination, {
      key: 'pagination',
      size: 'md',
      currentPage: mdPage,
      totalPages: 6,
      onPageChange: setMdPage
    })]), React.createElement('div', {
      key: 'lg',
      style: {
        textAlign: 'center'
      }
    }, [React.createElement('h3', {
      key: 'title',
      style: {
        marginBottom: '1rem',
        fontSize: '0.875rem',
        fontWeight: '600'
      }
    }, 'Large'), React.createElement(Pagination, {
      key: 'pagination',
      size: 'lg',
      currentPage: lgPage,
      totalPages: 6,
      onPageChange: setLgPage
    })])]);
  }
}`,...(v=(x=m.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var R,C,z;P.parameters={...P.parameters,docs:{...(R=P.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [page1, setPage1] = useState(5);
    const [page2, setPage2] = useState(5);
    const [page3, setPage3] = useState(5);
    return React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'center'
      }
    }, [React.createElement('div', {
      key: 'no-first-last',
      style: {
        textAlign: 'center'
      }
    }, [React.createElement('h3', {
      key: 'title',
      style: {
        marginBottom: '1rem',
        fontSize: '0.875rem',
        fontWeight: '600'
      }
    }, 'Without First/Last'), React.createElement(Pagination, {
      key: 'pagination',
      currentPage: page1,
      totalPages: 10,
      showFirstLast: false,
      onPageChange: setPage1
    })]), React.createElement('div', {
      key: 'no-prev-next',
      style: {
        textAlign: 'center'
      }
    }, [React.createElement('h3', {
      key: 'title',
      style: {
        marginBottom: '1rem',
        fontSize: '0.875rem',
        fontWeight: '600'
      }
    }, 'Without Prev/Next'), React.createElement(Pagination, {
      key: 'pagination',
      currentPage: page2,
      totalPages: 10,
      showPrevNext: false,
      onPageChange: setPage2
    })]), React.createElement('div', {
      key: 'more-siblings',
      style: {
        textAlign: 'center'
      }
    }, [React.createElement('h3', {
      key: 'title',
      style: {
        marginBottom: '1rem',
        fontSize: '0.875rem',
        fontWeight: '600'
      }
    }, 'More Sibling Pages'), React.createElement(Pagination, {
      key: 'pagination',
      currentPage: page3,
      totalPages: 20,
      siblingCount: 2,
      onPageChange: setPage3
    })])]);
  }
}`,...(z=(C=P.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var W,A,B;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(25);
    return React.createElement('div', {
      style: {
        textAlign: 'center'
      }
    }, [React.createElement('p', {
      key: 'info',
      style: {
        marginBottom: '1rem',
        fontSize: '0.875rem',
        color: '#6b7280'
      }
    }, \`Showing page \${currentPage} of 100\`), React.createElement(Pagination, {
      key: 'pagination',
      currentPage: currentPage,
      totalPages: 100,
      onPageChange: setCurrentPage
    })]);
  }
}`,...(B=(A=y.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var D,w,L;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [page1, setPage1] = useState(1);
    const [page2, setPage2] = useState(3);
    const [page3, setPage3] = useState(1);
    return React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'center'
      }
    }, [React.createElement('div', {
      key: 'single',
      style: {
        textAlign: 'center'
      }
    }, [React.createElement('h3', {
      key: 'title',
      style: {
        marginBottom: '1rem',
        fontSize: '0.875rem',
        fontWeight: '600'
      }
    }, 'Single Page (Hidden)'), React.createElement('div', {
      key: 'content'
    }, [React.createElement(Pagination, {
      key: 'pagination',
      currentPage: page3,
      totalPages: 1,
      onPageChange: setPage3
    }), React.createElement('p', {
      key: 'note',
      style: {
        marginTop: '0.5rem',
        fontSize: '0.75rem',
        color: '#6b7280'
      }
    }, 'Pagination is hidden when there\\'s only one page')])]), React.createElement('div', {
      key: 'few-pages',
      style: {
        textAlign: 'center'
      }
    }, [React.createElement('h3', {
      key: 'title',
      style: {
        marginBottom: '1rem',
        fontSize: '0.875rem',
        fontWeight: '600'
      }
    }, 'Few Pages'), React.createElement(Pagination, {
      key: 'pagination',
      currentPage: page2,
      totalPages: 3,
      onPageChange: setPage2
    })]), React.createElement('div', {
      key: 'first-page',
      style: {
        textAlign: 'center'
      }
    }, [React.createElement('h3', {
      key: 'title',
      style: {
        marginBottom: '1rem',
        fontSize: '0.875rem',
        fontWeight: '600'
      }
    }, 'First Page'), React.createElement(Pagination, {
      key: 'pagination',
      currentPage: page1,
      totalPages: 10,
      onPageChange: setPage1
    })])]);
  }
}`,...(L=(w=u.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const V=["Default","Variants","Sizes","CustomOptions","LargePagination","EdgeCases"];export{P as CustomOptions,l as Default,u as EdgeCases,y as LargePagination,m as Sizes,c as Variants,V as __namedExportsOrder,T as default};
