// @ts-nocheck
import React, { useState } from 'react';
import axios from 'axios';

import './inputForm.css';

const InputForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    const sendMessage = async e => {
        e.preventDefault();

        const newMessage = {
            name,
            email,
            subject,
            message
        }

        await axios.post('/contactform', newMessage)
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
      <form onSubmit={sendMessage}>
        <div className='ContactForm'>
          <div className='wrapper'>
            <div className='contact-form'>
              <h2>Send us a Message</h2>
              <div className='contactInputFields'>
                <input
                  type='text'
                  onChange={e => setName(e.target.value)}
                  value={name}
                  className='Input'
                  placeholder='Name'
                />
                <input
                  type='text'
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  className='Input'
                  placeholder='Email'
                />
                <input
                  type='text'
                  onChange={e => setSubject(e.target.value)}
                  value={subject}
                  className='Input'
                  placeholder='Subject'
                />
              </div>
              <div className='contact-msg'>
                <textarea
                  placeholder='Message'
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
                <button className='contact-btn'>Send</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
};
    
export default InputForm;
