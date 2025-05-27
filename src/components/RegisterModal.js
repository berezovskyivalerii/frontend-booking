import React, { useState } from 'react'
import Modal from 'react-modal'
import './RegisterModal.css'
import AuthenticationModal from './AuthenticationModal'
import InformationModal from './InformationModal'

export default function RegisterModal({ isOpen, onRequestClose }) {
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [repeat, setRepeat] = useState('')

    const [showAuth, setShowAuth] = useState(false)
    const [showInfo, setShowInfo] = useState(false)

    const handleRegisterSubmit = e => {
        e.preventDefault()
        onRequestClose()
        setShowAuth(true)
    }

    const handleAuthSuccess = () => {
        setShowAuth(false)
        setShowInfo(true)
    }

    const handleInfoClose = () => {
        setShowInfo(false)
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                className="reg"
                overlayClassName="regOverlay"
                closeTimeoutMS={0}>
                <button className="reg__close" onClick={onRequestClose}>✕</button>

                <h2 className="reg__title">Register</h2>
                <label className="sign-modal__form">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <p className="sign-modal__form-warning">
                        We will send you an email to confirm your email address
                    </p>
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={e => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <input
                        type="password"
                        maxLength="50"
                        placeholder="Repeat password"
                        value={repeat}
                        onChange={e => setRepeat(e.target.value)}
                    />
                </label>

                <p className="reg__policy">
                    *Get acquainted with our <a href="#!">Privacy policy</a>
                </p>

                <button
                    type="submit"
                    className="sign-modal__primary-reg"
                    onClick={handleRegisterSubmit}>
                    Continue
                </button>

                <button className="sign-modal__oauth-reg google">
                    <img src="../images/logos_google-icon.png" alt="" />  Sign In with Google
                </button>
                <button className="sign-modal__oauth-reg facebook">
                    <img src="../images/logos_facebook.png" alt="" />  Sign In with Facebook
                </button>
                <button className="sign-modal__oauth-reg apple">
                    <img src="../images/logos_apple.png" alt="" />  Sign In with Apple
                </button>
            </Modal>

            <AuthenticationModal
                isOpen={showAuth}
                onClose={() => setShowAuth(false)}
                onSuccess={handleAuthSuccess}
            />

            <InformationModal
                isOpen={showInfo}
                onCloseAll={handleInfoClose}
            />
        </>
    )
}
