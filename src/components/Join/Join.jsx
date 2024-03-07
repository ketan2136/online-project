import React, { useRef, useState } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {

    const form = useRef();
    const [email, setEmail] = useState('');
    console.log(email);
    const sendEmail = (e, i) => {
        e.preventDefault();

        emailjs
            .sendForm('service_1gk5fvk', 'template_fcobo2a', form.current, {
                publicKey: 'zvuhB9cqEau9ituWa',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };




    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text' > WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} action="" className='emil-container' onSubmit={sendEmail}>
                    <input type="email" name='user_email' placeholder='Enter Your Email ' onChange={handleEmailChange} />
                    <button className='btn btn-j' >join now</button>
                </form>

            </div>
        </div>
    )
}

export default Join;
