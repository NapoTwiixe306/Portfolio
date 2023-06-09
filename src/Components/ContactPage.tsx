import React from 'react'

const ContactPage = () => {
  return (
    <>
    <div id="contact"/>
    <div className='contact-container'>
        <div className="contact">        
            <form  className="contact-form">
                <div className="form-group">
                    <label htmlFor="name" className='form-label'>Nom : </label>
                    <input 
                        type="text"
                        id='name'
                        name="name"
                        placeholder='Name'
                        className='form-control'/>
                </div>
                <div className="form-group">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message" className='form-label'>Message : </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message">
                    </textarea>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default ContactPage
