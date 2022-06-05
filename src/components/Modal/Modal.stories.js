import React from 'react';
import Modal from '.';
import Button from '../Button';

export default {
  title: 'Modal',
  component: Modal,
};

export const Primary = () => {
  const [modal, updateModal] = React.useState(false)
  return <div>
    <Button
      onClick={() => updateModal(true)}
      label={modal ? 'Modal Open' : 'Show Modal'}
    />
    {
      modal && <Modal onClose={() => updateModal(false)}>
        Message
      </Modal>
    }
  </div>
}

export const Title = () => {
  const [modal, updateModal] = React.useState(false)
  return <div>
    <Button
      onClick={() => updateModal(true)}
      label={modal ? 'Modal Open' : 'Show Modal'}
    />
    {
      modal && <Modal
        onClose={() => updateModal(false)}
        title='Modal with title'
        onConfirm={() => console.log('confirm')}
        onCancel={() => console.log('cancel')}
        showCancel
      >
        Message
      </Modal>
    }
  </div>
}