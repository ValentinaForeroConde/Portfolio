import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div id="contact" className="flex flex-col align-center bg-pink-200 m-2 rounded-md">
            <h1 className="text-center text-lg">CONTACT ME</h1>
            <div>
                <ul className="flex justify-center p-4">
                    <li >
                        <a className="hover:text-pink-500 text-3xl p-2" href="https://twitter.com/valeforero01"><FontAwesomeIcon icon={faTwitter} /></a>
                    </li>
                    <li>
                        <a className="hover:text-pink-500 text-3xl p-2" href="https://www.instagram.com/valentinaforero2/"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li>
                    <li>
                        <a className="hover:text-pink-500 text-3xl p-2" href="https://github.com/ValentinaForeroConde"><FontAwesomeIcon icon={faGithub} /></a>
                    </li>
                    <li>
                        <a className="hover:text-pink-500 text-3xl p-2" href="https://twitter.com/valeforero01"><FontAwesomeIcon icon={faGoogle} /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;