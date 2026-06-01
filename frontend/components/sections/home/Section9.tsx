"use client";

import Link from "next/link";
import React, { useState, useRef } from "react";
import SwiperDynamic from "@/components/shared/SwiperDynamic";
import Image from "next/image";

// Import Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Section9({ displayBtn }: { displayBtn: string }) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const swiperRef = useRef<any>(null);

    const slides = [
        {
            bg: "/assets/imgs/page/bg-home1-sec9-1.png",
            badge: "Lifestyle",
            title: "The Future of Work: Remote, AI-Driven, and Flexible",
            link: "/single-3",
            description: "Once dismissed as counterculture, urban fashion has climbed its way from city sidewalks to the catwalks of major fashion capitals.",
            author: "John Doe",
            authorImage: "/assets/imgs/template/author/author-5.png",
            date: "25th July 2026",
        },
        {
            bg: "/assets/imgs/page/bg-home1-sec9-2.png",
            badge: "Technology",
            link: "/single-2",
            title: "AI Revolution: Transforming Industries Worldwide",
            description: "Artificial intelligence is reshaping how we work, live, and interact with technology in unprecedented ways.",
            author: "Jane Smith",
            authorImage: "/assets/imgs/template/author/author-6.png",
            date: "26th July 2026",
        },
        {
            bg: "/assets/imgs/page/bg-home1-sec9-3.png",
            badge: "Health",
            link: "/single-1",
            title: "Wellness Trends: Mindful Living in Modern Times",
            description: "Discover the latest approaches to mental and physical wellness that are gaining popularity worldwide.",
            author: "Mike Johnson",
            authorImage: "/assets/imgs/template/author/author-7.png",
            date: "27th July 2026",
        },
        {
            bg: "/assets/imgs/page/bg-home1-sec9-2.png",
            badge: "Travel",
            title: "Sustainable Tourism: Exploring the World Responsibly",
            link: "/single-2",
            description: "How travelers are making conscious choices to protect the environment while exploring new destinations.",
            author: "Sarah Wilson",
            authorImage: "/assets/imgs/template/author/author-8.png",
            date: "28th July 2026",
        },
    ];

    const handleSlideChange = (swiper: any) => {
        setCurrentSlideIndex(swiper.realIndex);
    };

    const handleSwiperInit = (swiper: any) => {
        swiperRef.current = swiper;
    };

    return (
        <>
            {/*Home 1 Section 9*/}
            <section className="sec-9-home-1">
                <div className="custom-container position-relative">
                    <div className={`swiper-btn ${displayBtn} align-items-center justify-content-between`}>
                        <div className="swiper-btn-next">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M10.25 6.75L4.75 12L10.25 17.25" stroke="#0e0e0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.25 12H5" stroke="#0e0e0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="swiper-btn-prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="#0e0e0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19 12H4.75" stroke="#0e0e0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="block-card-swiper">
                        <div className="container">
                            <div className="row align-items-stretch g-5">
                                <div className="col-lg-6">
                                    <div
                                        id="gallery-background"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            zIndex: 0,
                                            transition: "background-image 0.8s ease-in-out",
                                            backgroundImage: `url(${slides[currentSlideIndex]?.bg})`,
                                        }}
                                    />
                                    <SwiperDynamic
                                        className="gallery-left position-relative"
                                        spaceBetween={10}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                                        pagination={{
                                            clickable: true,
                                            el: ".swiper-pagination",
                                            type: "bullets",
                                        }}
                                        navigation={{
                                            nextEl: ".swiper-btn-next",
                                            prevEl: ".swiper-btn-prev",
                                        }}
                                        onSlideChange={handleSlideChange}
                                        onSwiper={handleSwiperInit}
                                    >
                                        {slides.map((slide, index) => (
                                            <div key={index}>
                                                <div className="article">
                                                    <div className="card-body">
                                                        <a href="#" className="badge bg-2 fs-8 mb-3">
                                                            {slide.badge}
                                                        </a>
                                                        <h5 className="card-title mb-0 text-white changeless">
                                                            <a href={slide.link}>{slide.title}</a>
                                                        </h5>
                                                        <p className="card-text text-white mb-0 fs-7 mt-3 changeless">{slide.description}</p>
                                                        <div className="bottom mt-auto d-flex flex-wrap align-items-center gap-2 pt-5">
                                                            <a href={slide.link} className="author d-flex align-items-center gap-2">
                                                                <Image className="avatar avatar-md rounded-circle" src={slide.authorImage} alt="magzin" width={500} height={500} />
                                                                <span className="fs-7 text-white fw-regular changeless">{slide.author}</span>
                                                            </a>
                                                            <ul className="d-flex align-items-center gap-4 text-white m-0 ps-3 changeless">
                                                                <li>
                                                                    <p className="fs-7 m-0 text-white changeless">{slide.date}</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </SwiperDynamic>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* eslint-disable-next-line react/no-unknown-property */}
                <style jsx global>{`
                    .swiper-pagination-bullet {
                        width: 12px !important;
                        height: 12px !important;
                        background: rgba(255, 255, 255, 0.5) !important;
                        border-radius: 50% !important;
                        cursor: pointer !important;
                        transition: all 0.3s ease !important;
                        opacity: 1 !important;
                        margin: 0 4px !important;
                    }
                    .swiper-pagination-bullet-active {
                        background: #ffffff !important;
                        transform: scale(1.2) !important;
                        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5) !important;
                    }
                    .swiper-pagination-bullet:hover {
                        background: rgba(255, 255, 255, 0.8) !important;
                        transform: scale(1.1) !important;
                    }
                `}</style>
            </section>
        </>
    );
}
