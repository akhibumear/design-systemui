import React, { useState } from 'react';
import { Modal, ModalBody, ModalFooter, Button } from '../src';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return React.createElement('div', {}, [
      React.createElement(Button, {
        key: 'trigger',
        onClick: () => setIsOpen(true)
      }, 'Open Modal'),
      React.createElement(Modal, {
        key: 'modal',
        isOpen: isOpen,
        onClose: () => setIsOpen(false),
        title: 'Example Modal',
        description: 'This is a demonstration modal',
        size: 'md'
      }, [
        React.createElement(ModalBody, { key: 'body' },
          React.createElement('p', {
            style: { fontSize: '0.875rem', color: 'var(--color-secondary-600)' }
          }, 'This is the modal content. You can put any content here.')
        ),
        React.createElement(ModalFooter, { key: 'footer' }, [
          React.createElement(Button, {
            key: 'cancel',
            variant: 'outline',
            size: 'sm',
            onClick: () => setIsOpen(false)
          }, 'Cancel'),
          React.createElement(Button, {
            key: 'confirm',
            size: 'sm',
            onClick: () => setIsOpen(false)
          }, 'Confirm'),
        ]),
      ]),
    ]);
  },
};

export const Sizes = {
  render: () => {
    const [openModal, setOpenModal] = useState(null);
    
    return React.createElement('div', {
      style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }
    }, [
      React.createElement(Button, {
        key: 'sm',
        size: 'sm',
        onClick: () => setOpenModal('sm')
      }, 'Small Modal'),
      React.createElement(Button, {
        key: 'md',
        size: 'sm',
        onClick: () => setOpenModal('md')
      }, 'Medium Modal'),
      React.createElement(Button, {
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
      }, React.createElement(ModalBody, {},
        React.createElement('p', {
          style: { fontSize: '0.875rem', color: 'var(--color-secondary-600)' }
        }, 'This is a small modal.')
      )),
      
      // Medium Modal
      React.createElement(Modal, {
        key: 'modal-md',
        isOpen: openModal === 'md',
        onClose: () => setOpenModal(null),
        title: 'Medium Modal',
        size: 'md'
      }, React.createElement(ModalBody, {},
        React.createElement('p', {
          style: { fontSize: '0.875rem', color: 'var(--color-secondary-600)' }
        }, 'This is a medium modal with more content space.')
      )),
      
      // Large Modal
      React.createElement(Modal, {
        key: 'modal-lg',
        isOpen: openModal === 'lg',
        onClose: () => setOpenModal(null),
        title: 'Large Modal',
        size: 'lg'
      }, React.createElement(ModalBody, {},
        React.createElement('p', {
          style: { fontSize: '0.875rem', color: 'var(--color-secondary-600)' }
        }, 'This is a large modal with even more content space for complex forms or detailed information.')
      )),
    ]);
  },
}; 