import React from 'react';
import './index.scss'
import { useNavigate } from 'react-router-dom';

const ContactMessage = () => {
    return (
            <section className='message'>
                <div className="messageDiv">
                    <div className="messageHead">
                        <h2>You can see the address of our store on the map</h2>
                        <p>There is no such thing as inaccessible</p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.7668350417302!2d-72.19959878465063!3d40.96468647930524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8bb044f2a864b%3A0xf78d0e263f50ee80!2sKing%20St%2C%20East%20Hampton%2C%20NY%2011937%2C%20USA!5e0!3m2!1sen!2saz!4v1677166235733!5m2!1sen!2saz" width="80%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    
                </div>
            </section>
    );
};

export default ContactMessage

