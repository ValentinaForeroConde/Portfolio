import React from 'react'

const About = () => {
    return (
        <div>
            <div id="about" className="flex flex-col items-center bg-pink-200 m-2 rounded-md p-2 mb-8">
                <div className="flex-none w-40 m-4">
                    <img src="pic.jpg" alt="" className=" inset-0 w-full h-full object-cover rounded-full border-black border-2 "/>
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
            <div className="flex justify-center bg-pink-200 m-2 rounded-md p-6 mb-6">
                <p className="flex mr-5">Hi there, i´m biomedical engineer passionate about tecnology and web development</p>
                <button className="rainbow  flex items-center rounded-md bg-black text-white">Hire me</button>
            </div>  
        </div>
    )
}

export default About;