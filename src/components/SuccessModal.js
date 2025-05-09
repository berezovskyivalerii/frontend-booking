import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SuccessModal.css'

export default function SuccessModal({ isOpen, onClose }) {
    const navigate = useNavigate()
    if (!isOpen) return null

    const handleProfile = () => {
        navigate('/profile/account')
        onClose()
    }
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>
                    <img src="./images/iconsax.png" alt="close" />
                </button>
                <h2 className="modal-title">All done!</h2>

                <div className="modal-icon">
                    <img src="./images/success.png" alt="success" />
                </div>

                <button className="modal-button primary" onClick={handleProfile}>
                    Check your profile!
                </button>
                <button className="modal-button secondary" onClick={onClose}>
                    Continue booking
                </button>
            </div>
        </div>
    )
}
