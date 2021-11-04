import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJava, faHtml5, faCss3, faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
    return (
        <div>
            <ul>
                <li>
                    <a><FontAwesomeIcon icon={faPython} /></a>
                </li>
                <li>
                    <a><FontAwesomeIcon icon={faJava} /></a>
                </li>
                <li>
                    <a><FontAwesomeIcon icon={faHtml5} /></a>
                </li>
                <li>
                    <a><FontAwesomeIcon icon={faCss3} /></a>
                </li>
                <li>
                    <a><FontAwesomeIcon icon={faJsSquare} /></a>
                </li>
                <li>
                    <a><FontAwesomeIcon icon={faReact} /></a>
                </li>
                <li>
                    <a><FontAwesomeIcon icon={faNodeJs} /></a>
                </li>
            </ul>
        </div>
    )
}

export default Skills;