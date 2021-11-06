import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJava, faHtml5, faCss3, faJsSquare, faReact, faNodeJs, faFigma, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    return (
        <div id="skills" className="flex flex-col m-2 rounded-md mb-6 backgound-card">
            <h1 className="text-center text-lg">SKILLS</h1>
            <ul className="flex justify-center flex-wrap p-4">
                <li>
                    <a className="hover:text-pink-400 text-3xl p-2" href="https://www.python.org/"><FontAwesomeIcon icon={faPython} /></a>
                </li>
                <li>
                    <a className="hover:text-pink-400 text-3xl p-2" href="https://docs.oracle.com/en/java/"><FontAwesomeIcon icon={faJava} /></a>
                </li>
                <li>
                    <a className="hover:text-pink-400 text-3xl p-2" href=""><FontAwesomeIcon icon={faHtml5} /></a>
                </li>
                <li>
                    <a className="hover:text-pink-400 text-3xl p-2" href=""><FontAwesomeIcon icon={faCss3} /></a>
                </li>
                <li>
                    <a className="hover:text-pink-400 text-3xl p-2" href=""><FontAwesomeIcon icon={faJsSquare} /></a>
                </li>
                <li>
                    <a className="hover:text-pink-400 text-3xl p-2" href="https://reactjs.org/"><FontAwesomeIcon icon={faReact} /></a>
                </li>
                <li>
                    <a className="hover:text-pink-400 text-3xl p-2" href="https://nodejs.org/en/"><FontAwesomeIcon icon={faNodeJs} /></a>
                </li>
                <li>
                    <a className="hover:text-pink-400 text-3xl p-2" href="https://www.figma.com/"><FontAwesomeIcon icon={faFigma} /></a>
                </li>
                <li>
                    <a className="hover:text-pink-400 text-3xl p-2" href=""><FontAwesomeIcon icon={faDatabase} /></a>
                </li> 
                <li>
                    <a className="hover:text-pink-400 text-3xl p-2" href="https://git-scm.com/doc"><FontAwesomeIcon icon={faGitAlt} /></a>
                </li> 
            </ul>
        </div>
    )
}

export default Skills;