import React from 'react'
import './Modal.css'
import { MdCancel } from 'react-icons/md'

const Modal = (props) => {
  return (
    <div className='modal'>
      <div onClick={props.onClick} className='cancel'>{ <MdCancel />}</div>
    </div>
  )
}

export default Modal