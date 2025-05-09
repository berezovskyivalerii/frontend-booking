import React, { useState } from 'react'
import Modal from 'react-modal'
import './RegisterModal.css'
import SuccessModal from './SuccessModal'

export default function RegisterModal({ isOpen, onRequestClose }) {
    /* простая локальная валидация */
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [repeat, setRepeat] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setShowSuccess(true)
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="reg"
            overlayClassName="regOverlay"
            closeTimeoutMS={200}>
            <button className="reg__close" onClick={onRequestClose}>
                ✕
            </button>

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
                onClick={handleSubmit}>
                Continue
            </button>

            <SuccessModal
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
            />

            {/* ----- social ----- */}
            <button className="sign-modal__oauth-reg google">
                <img src="../images/logos_google-icon.png" alt="" />
                  Sign In with Google
            </button>
            <button className="sign-modal__oauth-reg facebook">
                <img src="../images/logos_facebook.png" alt="" />
                  Sign In with Facebook
            </button>
            <button className="sign-modal__oauth-reg apple">
                <img src="../images/logos_apple.png" alt="" />
                  Sign In with Apple
            </button>
        </Modal>
    )
}
