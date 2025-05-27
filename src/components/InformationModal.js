import { useState } from 'react'
import Modal from 'react-modal'
import './InformationModal.css'
import SuccessModal from './SuccessModal'

export default function InformationModal({ isOpen, onCloseAll }) {
    const [showSuccess, setShowSuccess] = useState(false)
    const [formData, setFormData] = useState({
        country: '',
        city: '',
        reason: '',
        pet: '',
    })

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        onCloseAll()
        setShowSuccess(true)
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onCloseAll}
                className="info-modal"
                overlayClassName="info-overlay"
                closeTimeoutMS={0}>
                <button className="info-close" onClick={onCloseAll}>
                    ✕
                </button>

                <h2 className="info-title">Information</h2>
                <p className="info-subtext">
                    Tell us about yourself so we can better <br />
                    choose options for you :)
                </p>

                <form onSubmit={handleSubmit} className="info-form">
                    <select
                        name="country"
                        onChange={handleChange}
                        value={formData.country}>
                        <option value="">Country</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="Germany">Germany</option>
                    </select>

                    <select
                        name="city"
                        onChange={handleChange}
                        value={formData.city}>
                        <option value="">City</option>
                        <option value="Kyiv">Kyiv</option>
                        <option value="Berlin">Berlin</option>
                    </select>

                    <select
                        name="reason"
                        onChange={handleChange}
                        value={formData.reason}>
                        <option value="">Why do you travel?</option>
                        <option value="work">Work</option>
                        <option value="vacation">Vacation</option>
                    </select>

                    <div className="radio-group">
                        <label>Travelling with a pet?</label>
                        <div className="radio-options">
                            <label>
                                <input
                                    type="radio"
                                    name="pet"
                                    value="yes"
                                    onChange={handleChange}
                                />{' '}
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="pet"
                                    value="no"
                                    onChange={handleChange}
                                />{' '}
                                No
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn-continue"
                        disabled={
                            !formData.country ||
                            !formData.city ||
                            !formData.reason ||
                            !formData.pet
                        }>
                        Continue
                    </button>

                    <button type="submit" className="btn-later">
                        Later
                    </button>
                </form>
            </Modal>

            <SuccessModal
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
            />
        </>
    )
}
