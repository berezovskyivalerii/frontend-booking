import React, { useState } from 'react'
import RegisterModal from './RegisterModal'
import SignInModal from './SignInModal'
import { useNavigate } from 'react-router-dom'
import './Header.css'

export function Header() {
    const [isSignInOpen, setSignInOpen] = useState(false)
    const [isRegOpen, setRegOpen] = useState(false) // ← NEW

    const navigate = useNavigate()

    const handleSearch = () => {
        navigate('/')
    }

    console.log('RegisterModal open state:', isRegOpen)
    return (
        <>
            <header className="header">
                <div className="header-container">
                    <h1 className="title-header" onClick={handleSearch}>
                        Hotel for <span>you.</span>
                    </h1>

                    <div className="content-header">
                        <img
                            src="../images/language-eng.png"
                            alt="language"
                            className="language-icon"
                        />

                        <div className="register-container">
                            <p onClick={() => setRegOpen(true)}>Register</p>
                        </div>

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
                onSwitchToRegister={() => {
                    setSignInOpen(false)
                    setRegOpen(true)
                }}
            />
            <RegisterModal
                isOpen={isRegOpen}
                onRequestClose={() => setRegOpen(false)}
            />
        </>
    )
}
