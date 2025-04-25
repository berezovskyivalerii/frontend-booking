import React from 'react'
import './Header.css'

export function Header() {
    return (
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
                    <div className="sign-in-container">
                        <p>Sign In</p>
                        <img src="../images/user-icon.png" alt="user" />
                    </div>

                    {/* Кнопка Account (видна только на мобильных) */}
                    <div className="account-container">
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
    )
}
