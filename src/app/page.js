"use client"; 
import Image from "next/image";
import { useEffect } from "react";


export default function Home() {
  
  useEffect(() => {
    const callback = function (entries) {
      entries.forEach((entry) => {
        console.log(entry);
    
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        } else {
          entry.target.classList.remove("animate-fadeIn");
        }
      });
    };
    
    const observer = new IntersectionObserver(callback);
    
    const targets = document.querySelectorAll(".js-show-on-scroll");
    targets.forEach(function (target) {
      target.classList.add("opacity-0");
      observer.observe(target);
    });

    var replacers = document.querySelectorAll('[data-replace]');
        for(var i=0; i<replacers.length; i++){
            let replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
            Object.keys(replaceClasses).forEach(function(key) {
                replacers[i].classList.remove(key);
                replacers[i].classList.add(replaceClasses[key]);
            });
        }
  },[])


  return (
    <>
      <main className='m-auto pt-16 flex flex-col'>
        <div className="flex flex-row h-screen">
          <div className="w-full justify-center items-center">
            <div className="building_career_video relative h-full">
              <video className="bottom-0 w-full h-full absolute" autoPlay loop muted preload="true">
                <source src="https://ik.imagekit.io/v24zntfh1/JustAquib/building_careers.mp4" type="video/mp4"></source>
              </video>
              <Image width="1200" height="1200" className="building_career_footer" src="https://ik.imagekit.io/v24zntfh1/JustAquib/careers_foot.png" type="image"/>
            </div>
            
          </div>
          <div className="w-full flex flex-col items-end">
            <div className='w-10/12 mx-auto grid gap-36'>
              <h1 className='text-white font-extrabold text-7xl my-24 transition duration-200 animate-pulse text-right'>Aquib<br/>Shahbaz</h1>
              <p className='text-white mt-36 mb-12 font-medium text-5xl text-right transform transition-all duration-700 translate-y-24 ease-out' data-replace='{ "translate-y-24": "translate-y-0" }'>
                Software engineer with 6+ yrs of experience building nice things for good people.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white p-8">
          <div className="flex flex-col w-10/12 mx-auto"> 
            <div className="w-8/12 rounded-lg">
              <div className="flex flex-col pb-10">
                  <h1 className='text-gray-600 font-bold text-7xl my-24 text-left'>Introduction</h1>
                  <p className='text-gray-600 mb-24 leading-loose font-regular text-2xl transform transition-all duration-700 translate-y-24 ease-out' data-replace='{ "translate-y-24": "translate-y-0" }'>
                    Experienced Software Developer skilled in frontend and backend technologies like Figma, Next.js, React, React Native, Prisma, and Node.js, 
                    Git/Bitbucket with deployment on Virtual Servers like AWS,Digital Ocean,Time4VPS, CPanel,WHM. Committed to creating innovative and user-friendly 
                    software solutions, leveraging expertise in databases and programming languages. Strong background in Technical Operations, adept at 
                    problem-solving. Thrives in collaborative environments, delivering high-quality projects. Committed to continuous learning and staying current 
                    with industry trends for career growth and excellence.
                  </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-8">
          <div className="flex flex-col w-10/12 mx-auto"> 
            <div className="w-8/12 mx-auto rounded-lg">
              <div className="flex flex-col pb-20 mt-24">
                  <p className="text-white font-light text-2xl text-center">What I have done so far</p>
                  <h1 className='text-white font-bold text-6xl mb-24 text-center'>Work Experience.</h1>
                  <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2">
                      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
                          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                              <h3 className="text-lg font-semibold text-gray-900 ">Brushingup the learned technologies</h3>
                              <p className="my-4"> React Js, Node Js, Express Js, Prisma with writing frontend and also some backend part for the project. 
                              With making some Ui design on Figma and Learning Agility of the project and project structuring</p>
                          </blockquote>
                          <figcaption className="flex items-center justify-center space-x-3">
                              <img className="rounded-full w-9 h-9" src="https://ik.imagekit.io/yhoez8no8al/brand/favicon/favicon-310x310.png?tr=w-196,h-196,f-auto" alt="profile picture"/>
                              <div className="space-y-0.5 font-medium text-left">
                                  <div>Collegify, West Bengal India</div>
                                  <div className="text-sm text-gray-500 text-center">Software Engineer</div>
                              </div>
                          </figcaption>    
                      </figure>
                      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg">
                          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                              <h3 className="text-lg font-semibold text-gray-900 ">A new experience of knowing Arabian land</h3>
                              <p className="my-4">Basically wasn't a developer but once you are developer you will bring tech with yourself. 
                              And passion to learn more of tech got a hand to learn Tailwind,Inkscape and created an sales analysis application for the company.</p>
                          </blockquote>
                          <figcaption className="flex items-center justify-center space-x-3">
                              <img className="rounded-full w-9 h-9" src="data:image/png;base64,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" alt="profile picture"/>
                              <div className="space-y-0.5 font-medium  text-left">
                                  <div>Abdullah Rashid And Dossary, Dammam KSA</div>
                                  <div className="text-sm text-gray-500 text-center">IT Engineer</div>
                              </div>
                          </figcaption>    
                      </figure>
                      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r ">
                          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                              <h3 className="text-lg font-semibold text-gray-900 ">Fintech world is really a worth knowing</h3>
                              <p className="my-4">
                                With the experience on Codeigniter a PHP framework and Bootstrap and knowledge of MySql with Ionic framework helped to get me win the heart of my supervisor. 
                                Got chance to deal with 80K+ data of banks all around India to make jobs more simpler for the fellow people
                              </p>
                          </blockquote>
                          <figcaption className="flex items-center justify-center space-x-3">
                              <img className="rounded-full w-9 h-9" src="https://resources.freemi.in/wordpress/wp-content/uploads/2020/03/freemi-min-1.png" alt="profile picture"/>
                              <div className="space-y-0.5 font-medium  text-left">
                                  <div>Arthaduth Services PVT LTD, West Bengal India</div>
                                  <div className="text-sm text-gray-500 text-center">Fullstack Developer</div>
                              </div>
                          </figcaption>    
                      </figure>
                      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 md:rounded-br-lg">
                          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                              <h3 className="text-lg font-semibold text-gray-900 ">Landing to the first job was great experience</h3>
                              <p className="my-4">
                                Learning more of how tourism industry works and creating micro-tools and web applications for the company benefited the company with increase in sales. 
                                Basic framework used like Codeigniter and Bootstrap with Mysql.  
                              </p>
                          </blockquote>
                          <figcaption className="flex items-center justify-center space-x-3">
                              <img className="rounded-full w-9 h-9" src="https://eb-prod-business-images-thumbnail.s3.amazonaws.com/2087344_1515659398_0logo.jpg" alt="profile picture"/>
                              <div className="space-y-0.5 font-medium  text-left">
                                  <div>Andaman Live Holidays, West Bengal India</div>
                                  <div className="text-sm text-gray-500 text-center">Fullstack Developer</div>
                              </div>
                          </figcaption>    
                      </figure>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-8">
          <div className="flex flex-col w-10/12 mx-auto"> 
            <div className="w-8/12 mx-auto rounded-lg">
              <div className="flex flex-col pb-20">
                <div className="py-14 rounded-se-lg rounded-ss-lg">
                  <p className="text-white font-light text-2xl">My Works</p>
                  <p className="text-white font-bold text-6xl">Projects.</p>
                </div>
                <div className="rounded-es-lg rounded-ee-lg">
                  <p className="text-white text-2xl">
                    Following projects showcases my skills and experience through real-world examples of my work. 
                    Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to 
                    solve complex problems, work with different technologies, and manage projects effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-8">
          <div className="flex flex-col w-10/12 mx-auto"> 
            <div className="w-8/12 mx-auto rounded-lg">
              <div className="flex flex-col pb-20">
                <div className="bg-blue-800 px-8 py-14 rounded-se-lg rounded-ss-lg">
                  <p className="text-white font-light text-2xl">What other says</p>
                  <p className="text-white font-bold text-6xl">Testimonials.</p>
                </div>
                <div className="rounded-es-lg rounded-ee-lg p-8 bg-white">

                </div>
              </div>
            </div>
          </div>
        </div>


        <footer className="bg-white shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="http://justaquib.com/" className="flex items-center mb-4 sm:mb-0">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">JustAquib</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">© 2023 <a href="https://justaquib.com/" className="hover:underline">JustAquib™</a>. All Rights Reserved.</span>
            </div>
        </footer>


      </main>
    </>
  )
}
