import React, { Component } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";
import {projects} from '../profile'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === projects.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === projects.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? projects.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div id="projects" className="mt-8 flex flex-col items-center m-2 rounded-md p-4 mb-8 backgound-card">
        <h1 className="text-center text-lg pb-2">PROJECTS</h1>
        <div className="max-w-lg h-40 md:h-72 flex overflow-hidden relative">
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 text-pink-500 cursor-pointer"
          />
          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            <div>
            {projects.map((slide, index) => {
              return (
                <div key={index}>
                  <div className="flex flex-end text-lg m-1">
                  <p className={
                      index === this.state.currentSlide
                        ? "block w-full h-auto object-cover"
                        : "hidden"
                    }>{slide.name}</p>
                    <div className={
                        index === this.state.currentSlide
                          ? "block w-full h-auto object-cover"
                          : "hidden"
                      }>
                      <Link  href={slide.url} >
                        <a className="hover:bg-pink-200 text-black">Source<FontAwesomeIcon classNameName="text-black" icon={faGithub} /></a>
                        
                      </Link>
                    </div>
                    {/* <p className={
                      index === this.state.currentSlide
                        ? "block w-full h-auto object-cover"
                        : "hidden"
                    }>{slide.url}</p> */}
                    </div>
                  <img
                    src={slide.image}
                    alt="This is a carousel slide"
                    className={
                      index === this.state.currentSlide
                        ? "block w-full h-auto object-cover"
                        : "hidden"
                    }
                    onMouseEnter={() => {
                      this.setState({ paused: true });
                    }}
                    onMouseLeave={() => {
                      this.setState({ paused: false });
                    }}
                  />
                </div>
              );
            })}
            </div>
          </Swipe>
          <div className="absolute w-full flex justify-center bottom-0">
            {projects.map((element, index) => {
              return (
                <div
                  className={
                    index === this.state.currentSlide
                      ? "h-2 w-2 bg-pink-600 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>
          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-pink-500 cursor-pointer"
          />
        </div>
        
      </div>
    );
  }
}

export default Projects;
