'use client'
import React from 'react';
import { Navigation, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function GameDetails() {
    const breakpoints = {
        375: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
        1536: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    };

    return (
        <div>
            <div className="relative">
                <div className="border-zinc-500 w-full h-[618px]">
                    <img src="/images/game-bg.png" alt="Game background" className="w-full h-full" />
                </div>
                <div className="absolute bottom-[4rem] left-[4rem] flex items-center gap-10">
                    <div className="border-1 border-white w-[80px] h-[80px] rounded-[14px]">
                        <img src="/images/game-user.png" alt="User avatar" className="w-full h-full rounded-[14px]" />
                    </div>
                    <div>
                        <h1 className="font-bold text-[48px] leading-[61.25px]">Save the Monkey</h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 py-10">
                <div className="col-span-8">
                    <h2 className="text-[32px] leading-[40.83px] font-bold">About the Game</h2>
                    <p className="pt-5 font-medium text-[16px] leading-[24px] text-[#ffffffb3]">
                        Hello everyone, welcome to the blog of Save the Monkey. Firstly, I would like to introduce myself, I am Ananta Gupta from Uttarakhand and I have been working on this project (i.e. Save the Monkey) for the last few months this is my first devlog for this project. I want to share my experience and knowledge with you all. I have been working on Unity since April 2020 (i.e. during the first lockdown in India). During that phase, I looked for new hobbies and found a keen interest in game development.
                    </p>
                    <p className="pt-5 font-medium text-[16px] leading-[24px] text-[#ffffffb3]">
                        That’s all about me, now let’s talk about my project.
                    </p>
                    <p className="pt-5 font-medium text-[16px] leading-[24px] text-[#ffffffb3]">
                        Save the monkey is the first project that I actually released on the Google play store (after a few trial projects I have been working on, during my learning phase). Save the monkey is an android game, which is made in Unity, and the sprites are created through Photoshop and Aseprite software. The music is downloaded from a free website.
                    </p>
                </div>
                <div className="col-span-4 bg-[#171816] p-4 rounded-[24px] px-16 py-10">
                    <div className='flex flex-col gap-3 pb-8'>
                        <span className='text-[16px] leading-[20.42px] font-bold text-[#45f882]'>App Link</span>
                        <a href="https://www.linkoftheapp.com" target="_blank" rel="noopener noreferrer" className='underline text-[16px] leading-[24px] font-medium text-[#ffffffe6]'>www.linkoftheapp.com</a>
                    </div>
                    <div className='flex flex-col gap-3 pb-8'>
                        <span className='text-[16px] leading-[20.42px] font-bold text-[#ffffff99]'>tools:</span>
                        <span className='text-[16px] leading-[24px] font-medium text-[#ffffffe6]'>tool names</span>
                    </div>
                    <div className='flex flex-col gap-3 pb-8'>
                        <span className='text-[16px] leading-[20.42px] font-bold text-[#ffffff99]'>Duration:</span>
                        <span className='text-[16px] leading-[24px] font-medium text-[#ffffffe6]'>2 months</span>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <span className='text-[16px] leading-[20.42px] font-bold text-[#ffffff99]'>Published on</span>
                        <span className='text-[16px] leading-[24px] font-medium text-[#ffffffe6]'>01/01/2001</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 py-5">
                <h2 className="text-[32px] leading-[40.83px] font-bold">Screenshots</h2>
                <div className='col-span-12 py-10'>
                    <Swiper
                        cssMode={true}
                        breakpoints={breakpoints}
                        navigation={true}
                        mousewheel={true}
                        keyboard={true}
                        // autoplay={{ delay: 3000 }}
                        modules={[Navigation, Keyboard, Mousewheel]}
                        className="swiper-wrapper"
                    >
                        <SwiperSlide>
                            <div>
                                <img src="/images/slider1.png" alt="" className="w-full h-full" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="/images/slider1.png" alt="" className="w-full h-full" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="/images/slider1.png" alt="" className="w-full h-full" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="/images/slider1.png" alt="" className="w-full h-full" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="/images/slider1.png" alt="" className="w-full h-full" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="/images/slider1.png" alt="" className="w-full h-full" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="/images/slider1.png" alt="" className="w-full h-full" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
