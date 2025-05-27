import React from 'react'
import Modal from 'react-modal'
import './SignInModal.css'

export default function SignInModal({
    isOpen,
    onRequestClose,
    onSwitchToRegister,
}) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="sign-modal__overlay"
            className="sign-modal__content"
            closeTimeoutMS={0}>
            <button className="sign-modal__close" onClick={onRequestClose}>
                &times;
            </button>

            <h2 className="sign-modal__title">Sign In</h2>

            <form className="sign-modal__form">
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit" className="sign-modal__primary">
                    Continue
                </button>
            </form>

            <p className="sign-modal__text">
                Do not have an account?{' '}
                <a
                    href="#"
                    onClick={e => {
                        e.preventDefault()
                        onSwitchToRegister()
                    }}>
                    Register
                </a>
            </p>

            <button className="sign-modal__oauth google">
                <img src="../images/logos_google-icon.png" alt="" />
                  Sign In with Google
            </button>
            <button className="sign-modal__oauth facebook">
                <img src="../images/logos_facebook.png" alt="" />
                  Sign In with Facebook
            </button>
            <button className="sign-modal__oauth apple">
                <img src="../images/logos_apple.png" alt="" />
                  Sign In with Apple
            </button>
        </Modal>
    )
}
