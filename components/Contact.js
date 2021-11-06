import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

const Contact = () => {
    return (
        <div id="contact" className="flex flex-col align-center  m-2 rounded-md">
            <h1 className="text-center text-lg">CONTACT ME</h1>
            <div>
                <ul className="flex justify-center p-4">
                    <li >
                        <a className="hover:text-pink-400 text-3xl p-2" href="https://twitter.com/valeforero01"><FontAwesomeIcon icon={faTwitter} /></a>
                    </li>
                    <li>
                        <a className="hover:text-pink-400 text-3xl p-2" href="https://www.instagram.com/valentinaforero2/"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li>
                    <li>
                        <a className="hover:text-pink-400 text-3xl p-2" href="https://github.com/ValentinaForeroConde"><FontAwesomeIcon icon={faGithub} /></a>
                    </li>
                    <li>
                        <a className="hover:text-pink-400 text-3xl p-2" href="https://contacts.google.com/person/c1690416318744411006?hl=es-419"><FontAwesomeIcon icon={faGoogle} /></a>
                    </li>
                    <li>
                        <a className="hover:text-pink-400 text-3xl p-2" href="https://www.linkedin.com/in/valentina-forero-conde-911936203/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                </ul>
            </div>
            <div className="flex justify-center p-2">
                <i className="mr-1"><FontAwesomeIcon icon={faEnvelope} /> </i>
                <p> valeforero98@gmail.com</p>
            </div>
            
        </div>
    )
}

export default Contact;