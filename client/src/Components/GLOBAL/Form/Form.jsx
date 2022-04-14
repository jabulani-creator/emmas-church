import React from 'react'

export const Form = () => {
  return (
    <form className="form">
        <div className="form-row">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" placeholder='john doe' name='name' className='form-input' />
        </div>
        <div className="form-row">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="text" placeholder='victoria@gmail.com' name='email' className='form-input' />
        </div>
        <div className="form-row">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input type="phone" placeholder='+260972975737' name='phone' className='form-input' />
        </div>
        <div className="form-row">
        <label htmlFor="date" className="form-label">Planned visit date</label>
        <input type="date"  name='date' className='form-input' />
        </div>
        <div className="form-row">
        <label htmlFor="purpose" className="form-label">Purpose</label>
        <select id="purpose" className='form-select'>
                <option value="baptism">Baptism</option>
                <option value="prayer">Prayer</option>
                <option value="membership">Membership</option>
                <option value="wedding">Wedding</option>   
            </select>
        </div>
        <div className="form-row">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea name="message" className='form-textarea' placeholder='Anything that you want to share with us regarding your family? Special needs we want to serve you!'></textarea>
        </div>
        <button className="btnn">SEND MESSAGE</button>
        
    </form>
  )
}
