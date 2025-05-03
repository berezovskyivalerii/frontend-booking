import React, { useState } from 'react'
import SignInModal from './SignInModal'
import './Header.css'

export function Header() {
    const [isSignInOpen, setSignInOpen] = useState(false)

    return (
        <>
            <header className="header">
                <div className="header-container">
                    {/* Заголовок слева */}
                    <h1 className="title-header">
                        Hotel for <span>you.</span>
                    </h1>

                    {/* Правый блок с иконками и кнопками */}
                    <div className="content-header">
                        {/* Иконка языка (видна и на десктопе, и на мобильном) */}
                        <img
                            src="../images/language-eng.png"
                            alt="language"
                            className="language-icon"
                        />

                        {/* Кнопка Register (видна только на десктопе) */}
                        <div className="register-container">
                            <button>Register</button>
                        </div>

                        {/* Кнопка Sign In (видна только на десктопе) */}
                        <div
                            className="sign-in-container"
                            onClick={() => setSignInOpen(true)}>
                            <p>Sign In</p>
                            <img src="../images/user-icon.png" alt="user" />
                        </div>

                        {/* Кнопка Account (видна только на мобильных) */}
                        <div
                            className="account-container"
                            onClick={() => setSignInOpen(true)}>
                            <p>Account</p>
                            <img
                                src="../images/user-icon.png"
                                alt="user"
                                className="user-badge"
                            />
                        </div>
                    </div>
                </div>
            </header>
            <SignInModal
                isOpen={isSignInOpen}
                onRequestClose={() => setSignInOpen(false)}
            />
        </>
    )
}
