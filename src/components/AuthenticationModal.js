import { useState } from 'react'
import Modal from 'react-modal'
import './AuthenticationModal.css'
import InformationModal from './InformationModal'

export default function AuthenticationModal({
    isOpen,
    onRequestClose,
    onClose,
    onSuccess
}) {
    const [code, setCode] = useState('')
    const [showInfo, setShowInfo] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        onClose()
        onSuccess()
    }

    const handleCloseInfo = () => {
        setShowInfo(false)
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                className="auth"
                overlayClassName="authOverlay"
                closeTimeoutMS={0}>
                <button className="auth__close" onClick={onClose}>
                    ✕
                </button>

                <h2 className="auth__title">Authentication</h2>
                <div id="modal-inner-content">
                    <label className="auth-modal__form">
                        <input
                            type="text"
                            placeholder="Code"
                            value={code}
                            onChange={e => setCode(e.target.value)}
                        />
                        <p className="auth-modal__form-warning">
                            We have sent you an email with the code. Check your mail
                            and enter the code for the authentication
                        </p>
                    </label>

                    <button
                        type="submit"
                        className="auth-modal__primary-auth"
                        onClick={handleSubmit}>
                        Continue
                    </button>
                </div>
            </Modal>

            <InformationModal
                isOpen={showInfo}
                onCloseAll={handleCloseInfo}
            />
        </>
    )
}
