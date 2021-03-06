import React from 'react'

const About = () => {

    return (
        <div>
            <div id="about" className="flex flex-col items-center  m-2 rounded-md p-2 mb-8">
                <div className="flex flex-wrap justify-center m-5">
                    <h1 className="text-3xl md:text-5xl md:mt-10 text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-purple-500 mb-4"> Welcome to my <br/> personal portfolio!</h1>
                    <div className="flex-none w-40 m-4">
                        <img src="pic.jpg" alt="" className=" inset-0 w-full h-full object-cover rounded-full border-pink-400 border-2 "/>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <h1 className="flex-auto text-center text-4xl font-semibold">
                        Valentina Forero
                    </h1>
                    <h3 className="w-full flex-none text-xl font-medium text-center">
                        Junior Developer
                    </h3>
                </div>
            </div> 
            <div className="flex flex-col justify-center bg-gradient-to-br m-2 rounded-md p-6 mb-6 backgound-card">
                <p className="flex mr-5 text-justify md:text-lg">Hi there, i´m biomedical engineer passionate about tecnology and web development, I am constantly taking online courses and practicing by myself to improve my dev skills. I like collaborative work and to constantly interact with the developing community. During my university studies I participated in research groups like Parkinson’s, where we analyzed and processed electroencephalographic signals. I also did my capstone project with the automation research group for isolated cubicles of the ICU of a clinic, where I designed a prototype of an electronic call nurse bell, in arduino with IoT applications. From this path, my interest in research has arisen , I belong to a program of young women researchers of the Ministry of Science of Colombia and I'm also part of MisionTic, which is another government program but for developers. Recently, my interests are related to becoming a web developer. I dream to be part of the great technology industry.
                Recently, my interests are related to becoming a web developer, I dream to belong of the great technology industry. </p>
                {/* <div className="flex justify-center mt-4">
                    <button className="rainbow  flex rounded-md justify-center h-8 w-24">
                        Hire me
                    </button>
                </div> */}
            </div>  
        </div>
    )
}

export default About;