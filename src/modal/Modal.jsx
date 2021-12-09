/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import ReactDOM from 'react-dom'

const Modal = props => {
	const closeOnEscapeKeyDown = e => {
		if ((e.charCode || e.keyCode) === 27) {
			props.onClose()
		}
	}

	useEffect(() => {
		document.body.addEventListener('keydown', closeOnEscapeKeyDown)
		return function cleanup() {
			document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
		}
	}, [])

	return ReactDOM.createPortal(
		<CSSTransition
			in={props.show}
			unmountOnExit
			timeout={{ enter: 0, exit: 300 }}
		>
			<div className='modal' onClick={props.onClose}>
				<div className='modal-content' onClick={e => e.stopPropagation()}>
					<div className='modal-body'>{props.children}</div>
					<div className='modal-footer'>
						<button className='buttons' onClick={props.onClose}>
							Close
						</button>
					</div>
				</div>
			</div>
		</CSSTransition>,
		document.getElementById('root')
	)
}

export default Modal
