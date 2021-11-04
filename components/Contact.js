import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div>
            <h1>Contact me</h1>
            <div>
                <ul>
                    <li>
                        <a href="https://twitter.com/valeforero01"><FontAwesomeIcon icon={faTwitter} /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/valentinaforero2/"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li>
                    <li>
                        <a href="https://github.com/ValentinaForeroConde"><FontAwesomeIcon icon={faGithub} /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/valeforero01"><FontAwesomeIcon icon={faGoogle} /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;