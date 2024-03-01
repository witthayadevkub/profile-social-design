import React, { useState, useEffect, useRef } from 'react'
import img from "../assets/bg-tree-2.jpg"
import bg from "../assets/bg-tree-3.jpg"
import photo from "../assets/cute-dev-tiger.jpg"
// import design from "../../../assets/ex. post ui.png"
import { IoMdStar } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Profile = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const containerRef = useRef(null);

    const scrollImages = (scrollOffset) => {
        containerRef.current.scrollBy({
            left: scrollOffset,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-svh w-full ">
            <img src={bg} alt="" className="fixed   object-bottom opacity-20 bottom-0 right-0 w-full h-full  contrast-200  grayscale " />

            <div className=" max-w-[1500px] mx-auto px-5 py-5 h-svh">
                <div className='grid grid-cols-1 lg:grid-cols-[1fr_5fr] md:grid-cols-[200px_5fr] gap-5 md:gap-10 lg:gap-32 '>

                    <div className="w-full z-10 ">
                        <div className="w-full flex justify-center ">
                            <div className="relative ">
                                <img src={photo} alt="" className='rounded-full w-[150px] md:w-[150px]  lg:w-[200px] drop-shadow-xl' />
                                <div className="absolute right-2 top-2 lg:right-4 lg:top-4 drop-shadow rounded-full p-1 bg-black bg-gradient-to-r from-pink-500 to-yellow-500">
                                    <IoMdStar className='text-white text-xl' />
                                </div>
                            </div>
                        </div>

                        <div className="pt-5 ">
                            <p className="text-2xl xl:text-3xl text-nowrap">Witthaya Faengsap</p>
                            <p className="font-bold">Software Developer</p>
                            <button className=' text-white text-sm py-2 mt-5 px-6 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500'>Follow</button>
                        </div>

                        <div className="flex gap-2 justify-between py-7  border-b-2">
                            <div className="">
                                <p className='font-bold text-2xl'>42</p>
                                <p className="font-semibold text-sm text-gray-500">Collections</p>
                            </div>
                            <div className="">
                                <p className='font-bold text-2xl'>1'302</p>
                                <p className="font-semibold text-sm text-gray-500">Followers</p>
                            </div>
                            <div className="">
                                <p className='font-bold text-2xl'>18K</p>
                                <p className="font-semibold text-sm text-gray-500">Likes</p>
                            </div>
                        </div>

                    </div>

                    <div className=" grid grid-rows-[1fr_4fr]  md:grid-rows-[1fr_4fr] lg:grid-rows-[2fr_4fr] gap-10 ">

                        <div className={`relative bg-[url('../assets/bg-tree-3.jpg')] shadow bg-opacity-50 bg-cover bg-center w-full h-full grid place-content-center gap-3 rounded-2xl overflow-hidden`}>

                            <div className="absolute z-10 grid place-content-center w-full h-full">
                                <div className="flex justify-center">
                                    <h1 className=" z-10 font-bold text-white text-2xl lg:text-7xl md:text-4xl drop-shadow-xl ">WITTHAYA</h1>
                                </div>

                                <div className="flex justify-center">
                                    <button className='w-fit text-white text-sm py-1 px-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500'>Developer</button>
                                </div>

                            </div>
                            <div className="absolute bg-black/20 h-full w-full "></div>
                        </div>


                        <div className="grid grid-cols-3 grid-rows-3 gap-8">
                            <div className="relative col-span-3 lg:col-span-2 bg-white z-10 rounded-md shadow-lg p-5 grid gap-5 scroll-px-5">
                                <p className="font-semibold">Popular Collections</p>
                                <div className="flex gap-5 overflow-x-hidden " ref={containerRef}>
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px] ' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                    <img src={img} alt="" className='object-cover rounded-full w-[80px] h-[80px]' />
                                </div>
                                <button className="absolute z-20 left-[-0.5rem] top-1/2 py-2 border bg-white " onClick={() => scrollImages(-500)} >
                                    <IoIosArrowBack className='text-xl' />
                                </button>
                                <button className="absolute z-20 right-[-0.5rem] top-1/2 py-2 border bg-white" onClick={() => scrollImages(500)}>
                                    <IoIosArrowForward className='text-xl  ' />
                                </button>
                            </div>
                            <div className="bg-white row-span-3 col-span-3 lg:col-span-2 z-10 rounded-md shadow-lg p-5 overflow-hidden scrollnone">
                                <div className="flex justify-between items-center">
                                    <p className="font-semibold pb-2">blog content</p>
                                    <IoIosArrowDown />
                                </div>

                                <div className="overflow-y-scroll max-h-[300px] grid gap-2">

                                    <div className="grid grid-cols-[1fr_2fr] gap-3 py-2 shadow">
                                        <img src={img} alt="" className='object-cover rounded ' />
                                        <div className="">
                                            The journey of a developer is a dynamic and rewarding one, filled with challenges, opportunities, and endless possibilities for innovation. From mastering programming languages to navigating the intricacies of collaborative teamwork, developers play a vital role in shaping the digital landscape of the future. As technology continues to evolve, so too will the role of the developer, driven by a passion for innovation and a relentless pursuit of excellence.
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-[1fr_2fr] gap-3 py-2 shadow">
                                        <img src={img} alt="" className='object-cover rounded ' />
                                        <div className="">
                                            The journey of a developer is a dynamic and rewarding one, filled with challenges, opportunities, and endless possibilities for innovation. From mastering programming languages to navigating the intricacies of collaborative teamwork, developers play a vital role in shaping the digital landscape of the future. As technology continues to evolve, so too will the role of the developer, driven by a passion for innovation and a relentless pursuit of excellence.
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[1fr_2fr] gap-3 py-2 shadow">
                                        <img src={img} alt="" className='object-cover rounded ' />
                                        <div className="">
                                            The journey of a developer is a dynamic and rewarding one, filled with challenges, opportunities, and endless possibilities for innovation. From mastering programming languages to navigating the intricacies of collaborative teamwork, developers play a vital role in shaping the digital landscape of the future. As technology continues to evolve, so too will the role of the developer, driven by a passion for innovation and a relentless pursuit of excellence.
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[1fr_2fr] gap-3 py-2 shadow">
                                        <img src={img} alt="" className='object-cover rounded ' />
                                        <div className="">
                                            The journey of a developer is a dynamic and rewarding one, filled with challenges, opportunities, and endless possibilities for innovation. From mastering programming languages to navigating the intricacies of collaborative teamwork, developers play a vital role in shaping the digital landscape of the future. As technology continues to evolve, so too will the role of the developer, driven by a passion for innovation and a relentless pursuit of excellence.
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[1fr_2fr] gap-3 py-2 shadow">
                                        <img src={img} alt="" className='object-cover rounded ' />
                                        <div className="">
                                            The journey of a developer is a dynamic and rewarding one, filled with challenges, opportunities, and endless possibilities for innovation. From mastering programming languages to navigating the intricacies of collaborative teamwork, developers play a vital role in shaping the digital landscape of the future. As technology continues to evolve, so too will the role of the developer, driven by a passion for innovation and a relentless pursuit of excellence.
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[1fr_2fr] gap-3 py-2 shadow">
                                        <img src={img} alt="" className='object-cover rounded ' />
                                        <div className="">
                                            The journey of a developer is a dynamic and rewarding one, filled with challenges, opportunities, and endless possibilities for innovation. From mastering programming languages to navigating the intricacies of collaborative teamwork, developers play a vital role in shaping the digital landscape of the future. As technology continues to evolve, so too will the role of the developer, driven by a passion for innovation and a relentless pursuit of excellence.
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className=" lg:row-start-1 lg:row-span-4  lg:col-start-3 ">
                                <div className="  h-full flex flex-col justify-between">
                                    <div className="hidden lg:block gap-5 font-semibold">
                                        <p className="">Article text</p>
                                        {/* <a href={design} target='_blank'><button class="z-20 flex items-center gap-1 p-2 mt-5 rounded  bg-colorbase hover:bg-hoverbase">Follow Deside</button></a> */}
                                        <p className="">The journey of a developer often begins with a spark of curiosity and a passion for problem-solving. Whether it's building their first website, creating a simple game, or diving into the world of algorithms, many developers find themselves captivated by the endless possibilities that coding offers. As they hone their skills and delve deeper into the realm of software development, they quickly realize that there's always something new to learn.</p>
                                    </div>

                                    <div className="flex justify-between gap-3 z-20 items-center px-1   w-full">
                                        <div className='flex gap-3 justify-between'>
                                            <div className="rounded-full size-10 lg:size-12 border bg-white grid place-content-center cursor-no-drop text-gray-600"><IoChatbox className='text-xl ' /></div>
                                            <div className="rounded-full size-10 lg:size-12 border bg-white grid place-content-center cursor-no-drop text-gray-600"><BsBellFill className='text-xl' /></div>
                                            <div className="rounded-full size-10 lg:size-12 border bg-white grid place-content-center cursor-no-drop text-gray-600"><FaTwitter className='text-xl' /></div>

                                        </div>
                                        <div className="block lg:hidden xl:block">
                                            <p className="text-2xl lg:text-4xl block  font-semibold">{currentTime.toLocaleTimeString()}</p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Profile