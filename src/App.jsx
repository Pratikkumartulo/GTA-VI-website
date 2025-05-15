import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'

function App() {
  let [showContent, setShowContent] = useState(false)
  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.to('.vi-mask-group', {
      rotate:10,
      duration:2,
      ease:"Power4.easeInOut",
      transformOrigin:"50% 50%",
    })
    .to('.vi-mask-group', {
      scale:10,
      duration:2,
      delay:-1.8,
      ease:"Expo.easeInOut",
      transformOrigin:"50% 50%",
      opacity:0,
      onUpdate:function(){
        if(this.progress()>0.9){
          document.querySelector('.svg').remove()
          setShowContent(true);
          this.kill();
        }
      }
    })
  })

  useGSAP(()=>{

    if(!showContent) return;

    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      delay:"-1",
      ease:"Expo.easeInOut",
    });
    gsap.to(".sky",{
      scale:1.3,
      rotate:0,
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut",
    });
    gsap.to(".bg",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut",
    });
    gsap.to(".girl",{
      scale:0.7,
      x:"-50%",
      bottom:"-80%",
      rotate:0,
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut",
    });
    gsap.to(".text",{
      scale:1,
      rotate:0,
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut",
    });

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove",(e)=>{
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text",{
        x: `${xMove*.4}%`
      }) 
      gsap.to(".sky",{
        x: `${xMove}`
      }) 
      gsap.to(".bg",{
        x: `${xMove*1.7}`
      }) 
    })
  },[showContent])

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className='main w-full bg-black rotate-[-10deg] scale-[1.7] overflow-hidden'>
          <div className='landing w-full h-screen bg-black relative overflow-hidden'>
            <div className="navbar w-full absolute top-0 left-0 py-10 px-10 z-[10]">
              <div className="logo flex gap-7 items-center">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-10 h-2 bg-white"></div>
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                </div>
                <h3 className='text-3xl text-white leading-none'>Rockstar</h3>
              </div>
            </div> 
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img className='sky absolute top-0 left-0 w-full h-full object-cover scale-[1.5] rotate-[-20deg]' src="./sky.png" alt="" />
              <img className='bg scale-[1.8] rotate-[25deg] absolute top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="" />
              <div className="text absolute top-10 flex flex-col gap-3 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className='text-7xl text-white leading-none'>grand</h1>
                <h1 className='text-7xl text-white leading-none ml-20'>theft</h1>
                <h1 className='text-7xl text-white leading-none'>auto</h1>
              </div>
              <img className='girl absolute -bottom-[250%] left-1/2 -translate-x-1/2 scale-[2] rotate-[-10deg]' src="./girlbg.png" alt="" />
              
            </div>
            <div className="bottombar text-white w-full py-15 px-10 absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent">
              <div className='flex gap-4 items-center'>
                <i className="ri-arrow-down-fill text-4xl"></i>
                <h3 className='font-[Helvetica] text-xl'>Scroll Down</h3>
              </div>
              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[55px]' src="./ps5.png" alt="" />
            </div>
          </div>
          <div className='w-full h-screen flex bg-black items-center justiy-center'>
            <div className="cntr w-full h-[80%] flex text-white">
              <div className="limg w-1/2 h-full relative">
                <img className='absolute scale-[0.8] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./imag.png" alt="" />
              </div>
              <div className="rimg">
                <h1 className='text-8xl'>
                  Still running
                </h1>
                <h1 className='text-8xl'>
                  Not Hunting
                </h1>
                <p className='mt-10 font-[Helvetica]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illo quasi a aliquid, veniam in deserunt quaerat fuga magni amet! Unde, officia corrupti?
                </p>
                <p className='font-[Helvetica]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugiat placeat animi cupiditate voluptatem iure tempore voluptate debitis dolor ducimus.
                </p>
                <button className='bg-yellow-500 px-10 py-10 text-3xl text-black mt-10 rounded-md'>Download Now</button>
              </div>
            </div>
          </div>
        </div>
      )}    
    </>
  )
}

export default App
