import React from 'react'
import Swal from 'sweetalert2'


const About = () => {

    const modal = () => {
        Swal.fire({
            title: 'I will receive this message in my email inbox',
            html:
              '<input id="swal-input1" class="swal2-input">' +
              '<input id="swal-input2" class="swal2-input">',
            showCancelButton: true,
            confirmButtonText: "Send",
            preConfirm: () => {
              return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value
              ]
            }
          })
      };

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
            <div className="flex flex-col justify-center bg-pink-200 m-2 rounded-md p-6 mb-6">
                <p className="flex mr-5 text-justify">Hi there, i´m biomedical engineer passionate about tecnology and web development, I am constantly taking online courses and practice by myself to improve my dev skills, I like collaborative work, I also interact constantly with the community of developers.
                During my university studies I participated in research groups like Parkinson’s, where we analyzed and processed electroencephalographic signals. I also did my capstone project with the automation research group for isolated cubicles of the ICU of a clinic, where I designed a prototype of an electronic call nurse bell, in arduino with IoT applications. From this path has arisen my interest in research, I belong to a program of young women researchers of the Ministry of Science of Colombia.
                Recently, my interests are related to becoming a web developer, I dream to belong of the great technology industry. </p>
                <div className="flex justify-center mt-4">
                    <button onClick={()=>modal()}
                    className="rainbow  flex rounded-md justify-center h-8 w-24">
                        Hire me
                    </button>
                </div>
            </div>  
        </div>
    )
}

export default About;