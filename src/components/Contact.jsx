import React from 'react'
import './styles/Contact.css'

function Contact({Icon, link, color}) {
    return (
        <div className="contact">
            <a target="_blank" rel="noreferrer" href={link}>{Icon && <Icon style={{color: color}} />}</a>
        </div>
    )
}

export default Contact
