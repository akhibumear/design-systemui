import React, { useState } from 'react';
import { Pagination } from '../src';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    
    return React.createElement(Pagination, {
      currentPage: currentPage,
      totalPages: 10,
      onPageChange: setCurrentPage
    });
  },
};

export const Variants = {
  render: () => {
    const [defaultPage, setDefaultPage] = useState(3);
    const [outlinePage, setOutlinePage] = useState(3);
    const [ghostPage, setGhostPage] = useState(3);
    
    return React.createElement('div', {
      style: { display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }
    }, [
      React.createElement('div', { key: 'default', style: { textAlign: 'center' } }, [
        React.createElement('h3', { key: 'title', style: { marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600' } }, 'Default'),
        React.createElement(Pagination, {
          key: 'pagination',
          variant: 'default',
          currentPage: defaultPage,
          totalPages: 8,
          onPageChange: setDefaultPage
        })
      ]),
      React.createElement('div', { key: 'outline', style: { textAlign: 'center' } }, [
        React.createElement('h3', { key: 'title', style: { marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600' } }, 'Outline'),
        React.createElement(Pagination, {
          key: 'pagination',
          variant: 'outline',
          currentPage: outlinePage,
          totalPages: 8,
          onPageChange: setOutlinePage
        })
      ]),
      React.createElement('div', { key: 'ghost', style: { textAlign: 'center' } }, [
        React.createElement('h3', { key: 'title', style: { marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600' } }, 'Ghost'),
        React.createElement(Pagination, {
          key: 'pagination',
          variant: 'ghost',
          currentPage: ghostPage,
          totalPages: 8,
          onPageChange: setGhostPage
        })
      ])
    ]);
  },
};

export const Sizes = {
  render: () => {
    const [smPage, setSmPage] = useState(2);
    const [mdPage, setMdPage] = useState(2);
    const [lgPage, setLgPage] = useState(2);
    
    return React.createElement('div', {
      style: { display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }
    }, [
      React.createElement('div', { key: 'sm', style: { textAlign: 'center' } }, [
        React.createElement('h3', { key: 'title', style: { marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600' } }, 'Small'),
        React.createElement(Pagination, {
          key: 'pagination',
          size: 'sm',
          currentPage: smPage,
          totalPages: 6,
          onPageChange: setSmPage
        })
      ]),
      React.createElement('div', { key: 'md', style: { textAlign: 'center' } }, [
        React.createElement('h3', { key: 'title', style: { marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600' } }, 'Medium'),
        React.createElement(Pagination, {
          key: 'pagination',
          size: 'md',
          currentPage: mdPage,
          totalPages: 6,
          onPageChange: setMdPage
        })
      ]),
      React.createElement('div', { key: 'lg', style: { textAlign: 'center' } }, [
        React.createElement('h3', { key: 'title', style: { marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600' } }, 'Large'),
        React.createElement(Pagination, {
          key: 'pagination',
          size: 'lg',
          currentPage: lgPage,
          totalPages: 6,
          onPageChange: setLgPage
        })
      ])
    ]);
  },
};

export const CustomOptions = {
  render: () => {
    const [page1, setPage1] = useState(5);
    const [page2, setPage2] = useState(5);
    const [page3, setPage3] = useState(5);
    
    return React.createElement('div', {
      style: { display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }
    }, [
      React.createElement('div', { key: 'no-first-last', style: { textAlign: 'center' } }, [
        React.createElement('h3', { key: 'title', style: { marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600' } }, 'Without First/Last'),
        React.createElement(Pagination, {
          key: 'pagination',
          currentPage: page1,
          totalPages: 10,
          showFirstLast: false,
          onPageChange: setPage1
        })
      ]),
      React.createElement('div', { key: 'no-prev-next', style: { textAlign: 'center' } }, [
        React.createElement('h3', { key: 'title', style: { marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600' } }, 'Without Prev/Next'),
        React.createElement(Pagination, {
          key: 'pagination',
          currentPage: page2,
          totalPages: 10,
          showPrevNext: false,
          onPageChange: setPage2
        })
      ]),
      React.createElement('div', { key: 'more-siblings', style: { textAlign: 'center' } }, [
        React.createElement('h3', { key: 'title', style: { marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600' } }, 'More Sibling Pages'),
        React.createElement(Pagination, {
          key: 'pagination',
          currentPage: page3,
          totalPages: 20,
          siblingCount: 2,
          onPageChange: setPage3
        })
      ])
    ]);
  },
};

export const LargePagination = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(25);
    
    return React.createElement('div', {
      style: { textAlign: 'center' }
    }, [
      React.createElement('p', { 
        key: 'info',
        style: { marginBottom: '1rem', fontSize: '0.875rem', color: '#6b7280' } 
      }, `Showing page ${currentPage} of 100`),
      React.createElement(Pagination, {
        key: 'pagination',
        currentPage: currentPage,
        totalPages: 100,
        onPageChange: setCurrentPage
      })
    ]);
  },
};

export const EdgeCases = {
  render: () => {
    const [page1, setPage1] = useState(1);
    const [page2, setPage2] = useState(3);
    const [page3, setPage3] = useState(1);
    
    return React.createElement('div', {
      style: { display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }
    }, [
      React.createElement('div', { key: 'single', style: { textAlign: 'center' } }, [
        React.createElement('h3', { key: 'title', style: { marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600' } }, 'Single Page (Hidden)'),
        React.createElement('div', { key: 'content' }, [
          React.createElement(Pagination, {
            key: 'pagination',
            currentPage: page3,
            totalPages: 1,
            onPageChange: setPage3
          }),
          React.createElement('p', { 
            key: 'note',
            style: { marginTop: '0.5rem', fontSize: '0.75rem', color: '#6b7280' } 
          }, 'Pagination is hidden when there\'s only one page')
        ])
      ]),
      React.createElement('div', { key: 'few-pages', style: { textAlign: 'center' } }, [
        React.createElement('h3', { key: 'title', style: { marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600' } }, 'Few Pages'),
        React.createElement(Pagination, {
          key: 'pagination',
          currentPage: page2,
          totalPages: 3,
          onPageChange: setPage2
        })
      ]),
      React.createElement('div', { key: 'first-page', style: { textAlign: 'center' } }, [
        React.createElement('h3', { key: 'title', style: { marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600' } }, 'First Page'),
        React.createElement(Pagination, {
          key: 'pagination',
          currentPage: page1,
          totalPages: 10,
          onPageChange: setPage1
        })
      ])
    ]);
  },
}; 