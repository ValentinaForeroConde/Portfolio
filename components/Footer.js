import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapPin} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-row justify-between">
                <p>© 2021 Copyright: Valentina Forero Conde</p>
                <div className="flex flex-row mr-3">
                    <i className="mr-1"><FontAwesomeIcon icon={faMapPin}/> </i>
                    <p> Colombia</p>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
