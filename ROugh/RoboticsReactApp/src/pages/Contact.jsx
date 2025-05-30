import React, { useState } from 'react'
import '../css/Contact.css'
import Navbar from '../components/Navbar'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log(formData)
    alert("Message Sent ")
  }

    return (
        <>
        <Navbar />
        <div className="mainContainer">
            <div className="floating-shapes">
                <div className="shape"></div>
          <div className="shape"></div>
    </div>
    <div className="contact-container">
        <div className="contact-left">
            <h1 className="contact-title">Let's start a conversation</h1>
            
            <div className="contact-info">
                <div className="info-card">
                    <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <i class="ri-map-pin-line"></i>
                    <h3>Location</h3>
                    </div>
                    <p>NIT Hamirpur, HP</p>
                </div>
                
                            <div className="info-card">
                                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <i class="ri-mail-ai-line"></i>
                                    <h3>Email</h3>
                                </div>
                    <p>contact@robosoc.com</p>
                </div>
                
                            <div className="info-card">
                                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <i class="ri-phone-line"></i>
                                    <h3>Phone</h3>
                                </div>
                    <p>+91 1234567890</p>
                </div>

                <div className="social-links">
                    <a href="#"><i class="ri-github-fill"></i></a>
                    <a href="#"><i class="ri-linkedin-fill"></i></a>
                    <a href="#"><i class="ri-twitter-fill"></i></a>
                    <a href="#"><i class="ri-instagram-fill"></i></a>
                </div>
            </div>
        </div>

        <div className="contact-right">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                        value={formData.name} 
                        onChange={handleChange} 
                        type="text" 
                        id="name" 
                        name="name"
                        placeholder="Enter Your Name" 
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        value={formData.email} 
                        onChange={handleChange}
                        type="email" 
                        id="email" 
                        name="email"
                        placeholder="Email Please" 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                        value={formData.subject} 
                        onChange={handleChange}
                        type="text" 
                        id="subject" 
                        name="subject"
                        placeholder="How can we help ?" 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        value={formData.message} 
                        onChange={handleChange}
                        id="message" 
                        name="message"
                        placeholder="Your message here..." 
                        required
                    ></textarea>
                </div>

                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
                </div>
            </div>  
            </div>
            </>
  )
}

export default Contact