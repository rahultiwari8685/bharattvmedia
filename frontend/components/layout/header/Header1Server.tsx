import Link from "next/link";
import Image from "next/image";
import MainMenu from "@/components/layout/MainMenuServer";
import ThemeSwitcher from "@/util/ThemeSwitcherServer";
import SideBar from "@/components/layout/SideBarServer";
import Header1Interactive from "./Header1Interactive";

export default function Header1Server() {
    return (
        <>
            <header>
                     <div className="topbar d-none d-lg-block">
                    <div className="overflow-hidden">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="left">
                                <ul className="list-unstyled d-inline-flex gap-3">
                                    <li>
                                        <a href="#" className="btn btn-sm fs-7 border-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                                                <g opacity="0.5">
                                                    <path d="M10 16.5417C13.3368 16.5417 16.0417 13.8367 16.0417 10.5C16.0417 7.16327 13.3368 4.45833 10 4.45833C6.66332 4.45833 3.95837 7.16327 3.95837 10.5C3.95837 13.8367 6.66332 16.5417 10 16.5417Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12.7083 10.5C12.7083 14.25 11.0355 16.5417 9.99996 16.5417C8.96446 16.5417 7.29163 14.25 7.29163 10.5C7.29163 6.74999 8.96446 4.45833 9.99996 4.45833C11.0355 4.45833 12.7083 6.74999 12.7083 10.5Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M4.16663 10.5H9.99996H15.8333" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </svg>
                                            <span className="text-white dark-mode-invert">Breaking</span>
                                        </a>
                                    </li>
                                    <li className="mw-350px">
                                        {/* Swiper will be handled by client component */}
                                        <div className="swiper-container swiper-topbar" style={{ height: "27px", overflow: "hidden" }}>
                                            {/* SwiperDynamic will be rendered here by Header1Interactive */}

                                            <Header1Interactive />
                                        </div>
                                    </li>
                                    <li className="switch-btn">
                                        <button type="button" className="btn btn-sm fs-7 switch-btn-prev border-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <path d="M6.83335 4.5L3.16669 8L6.83335 11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.8333 8H3.33331" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <button type="button" className="btn btn-sm fs-7 switch-btn-next border-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <path d="M9.16669 4.5L12.8334 8L9.16669 11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.6667 8H3.16669" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="right">
                                <ul className="list-unstyled d-flex ps-0">
                                    <li>
                                        <a href="#" className="d-flex align-items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                                                <g opacity="0.5">
                                                    <path d="M3.95833 6.95834C3.95833 6.03786 4.70452 5.29167 5.62499 5.29167H14.375C15.2955 5.29167 16.0417 6.03786 16.0417 6.95834V14.0417C16.0417 14.9622 15.2955 15.7083 14.375 15.7083H5.62499C4.70452 15.7083 3.95833 14.9622 3.95833 14.0417V6.95834Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M4.58333 5.91667L10 10.7083L15.4167 5.91667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </svg>
                                            <span className="text-white fs-7 text-nowrap dark-mode-invert">Subscribe Our Newsletter</span>
                                        </a>
                                    </li>
                                    <li className="ps-4" />
                                    <li className="border-end-700" />
                                    <li className="pe-4" />
                                    <li>
                                        <div className="d-flex align-items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={15} viewBox="0 0 14 15" fill="none">
                                                <path
                                                    d="M11.0943 1.85763H10.5967V1.35416C10.5967 1.06651 10.3635 0.833328 10.0759 0.833328C9.78823 0.833328 9.55505 1.06651 9.55505 1.35416V1.85763H4.44495V1.35416C4.44495 1.06651 4.21177 0.833328 3.92412 0.833328C3.63646 0.833328 3.40328 1.06651 3.40328 1.35416V1.85763H2.90575C1.48567 1.85763 0.330353 3.01295 0.330353 4.433V11.5913C0.330353 13.0114 1.48567 14.1667 2.90575 14.1667H11.0943C12.5144 14.1667 13.6697 13.0114 13.6697 11.5913V4.433C13.6697 3.01295 12.5144 1.85763 11.0943 1.85763ZM2.90575 2.8993H3.40328V3.91493C3.40328 4.20259 3.63646 4.43576 3.92412 4.43576C4.21177 4.43576 4.44495 4.20259 4.44495 3.91493V2.8993H9.55507V3.91493C9.55507 4.20259 9.78825 4.43576 10.0759 4.43576C10.3636 4.43576 10.5967 4.20259 10.5967 3.91493V2.8993H11.0943C11.94 2.8993 12.628 3.58732 12.628 4.433V4.93056H1.37202V4.433C1.37202 3.58732 2.06005 2.8993 2.90575 2.8993ZM11.0943 13.125H2.90575C2.06005 13.125 1.37202 12.437 1.37202 11.5913V5.97223H12.628V11.5913C12.628 12.437 11.94 13.125 11.0943 13.125ZM4.95711 8.02085C4.95711 8.30851 4.72394 8.54169 4.43628 8.54169H3.41198C3.12432 8.54169 2.89114 8.30851 2.89114 8.02085C2.89114 7.7332 3.12432 7.50002 3.41198 7.50002H4.43628C4.72391 7.50002 4.95711 7.7332 4.95711 8.02085ZM11.1089 8.02085C11.1089 8.30851 10.8757 8.54169 10.5881 8.54169H9.56377C9.27612 8.54169 9.04294 8.30851 9.04294 8.02085C9.04294 7.7332 9.27612 7.50002 9.56377 7.50002H10.5881C10.8757 7.50002 11.1089 7.7332 11.1089 8.02085ZM8.03004 8.02085C8.03004 8.30851 7.79686 8.54169 7.50921 8.54169H6.48491C6.19725 8.54169 5.96407 8.30851 5.96407 8.02085C5.96407 10.8061 6.19725 10.5729 6.48491 10.5729H7.50921C7.79684 10.5729 8.03004 10.8061 8.03004 8.02085ZM4.95711 11.0938C4.95711 11.3814 4.72394 11.6146 4.43628 11.6146H3.41198C3.12432 11.6146 2.89114 11.3814 2.89114 11.0938C2.89114 10.8061 3.12432 10.5729 3.41198 10.5729H4.43628C4.72391 10.5729 4.95711 10.8061 4.95711 11.0938ZM11.1089 11.0938C11.1089 11.3814 10.8757 11.6146 10.5881 11.6146H9.56377C9.27612 11.6146 9.04294 11.3814 9.04294 11.0938C9.04294 10.8061 9.27612 10.5729 9.56377 10.5729H10.5881C10.8757 10.5729 11.1089 10.8061 11.1089 11.0938ZM8.03004 11.0938C8.03004 11.3814 7.79686 11.6146 7.50921 11.6146H6.48491C6.19725 11.6146 5.96407 11.3814 5.96407 11.0938C5.96407 10.8061 6.19725 10.5729 6.48491 10.5729H7.50921C7.79684 10.5729 8.03004 10.8061 8.03004 11.0938Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            <span className="text-white fs-7 text-nowrap dark-mode-invert">June 24, 2026</span>
                                        </div>
                                    </li>
                                    <li className="pe-4" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="topbar d-none d-lg-block">
                    <div className="overflow-hidden">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="left">
                                <ul className="list-unstyled d-inline-flex gap-3">
                                    <li>
                                        <a href="#" className="btn btn-sm fs-7 border-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                                                <g opacity="0.5">
                                                    <path d="M10 16.5417C13.3368 16.5417 16.0417 13.8367 16.0417 10.5C16.0417 7.16327 13.3368 4.45833 10 4.45833C6.66332 4.45833 3.95837 7.16327 3.95837 10.5C3.95837 13.8367 6.66332 16.5417 10 16.5417Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12.7083 10.5C12.7083 14.25 11.0355 16.5417 9.99996 16.5417C8.96446 16.5417 7.29163 14.25 7.29163 10.5C7.29163 6.74999 8.96446 4.45833 9.99996 4.45833C11.0355 4.45833 12.7083 6.74999 12.7083 10.5Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M4.16663 10.5H9.99996H15.8333" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </svg>
                                            <span className="text-white dark-mode-invert">Breaking</span>
                                        </a>
                                    </li>
                                    <li className="mw-350px">
                                        {/* Swiper will be handled by client component */}
                                        <div className="swiper-container swiper-topbar" style={{ height: "27px", overflow: "hidden" }}>
                                            {/* SwiperDynamic will be rendered here by Header1Interactive */}

                                            <Header1Interactive />
                                        </div>
                                    </li>
                                    <li className="switch-btn">
                                        <button type="button" className="btn btn-sm fs-7 switch-btn-prev border-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <path d="M6.83335 4.5L3.16669 8L6.83335 11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.8333 8H3.33331" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <button type="button" className="btn btn-sm fs-7 switch-btn-next border-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <path d="M9.16669 4.5L12.8334 8L9.16669 11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.6667 8H3.16669" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="right">
                                <ul className="list-unstyled d-flex ps-0">
                                    <li>
                                        <a href="#" className="d-flex align-items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                                                <g opacity="0.5">
                                                    <path d="M3.95833 6.95834C3.95833 6.03786 4.70452 5.29167 5.62499 5.29167H14.375C15.2955 5.29167 16.0417 6.03786 16.0417 6.95834V14.0417C16.0417 14.9622 15.2955 15.7083 14.375 15.7083H5.62499C4.70452 15.7083 3.95833 14.9622 3.95833 14.0417V6.95834Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M4.58333 5.91667L10 10.7083L15.4167 5.91667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </svg>
                                            <span className="text-white fs-7 text-nowrap dark-mode-invert">Subscribe Our Newsletter</span>
                                        </a>
                                    </li>
                                    <li className="ps-4" />
                                    <li className="border-end-700" />
                                    <li className="pe-4" />
                                    <li>
                                        <div className="d-flex align-items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={15} viewBox="0 0 14 15" fill="none">
                                                <path
                                                    d="M11.0943 1.85763H10.5967V1.35416C10.5967 1.06651 10.3635 0.833328 10.0759 0.833328C9.78823 0.833328 9.55505 1.06651 9.55505 1.35416V1.85763H4.44495V1.35416C4.44495 1.06651 4.21177 0.833328 3.92412 0.833328C3.63646 0.833328 3.40328 1.06651 3.40328 1.35416V1.85763H2.90575C1.48567 1.85763 0.330353 3.01295 0.330353 4.433V11.5913C0.330353 13.0114 1.48567 14.1667 2.90575 14.1667H11.0943C12.5144 14.1667 13.6697 13.0114 13.6697 11.5913V4.433C13.6697 3.01295 12.5144 1.85763 11.0943 1.85763ZM2.90575 2.8993H3.40328V3.91493C3.40328 4.20259 3.63646 4.43576 3.92412 4.43576C4.21177 4.43576 4.44495 4.20259 4.44495 3.91493V2.8993H9.55507V3.91493C9.55507 4.20259 9.78825 4.43576 10.0759 4.43576C10.3636 4.43576 10.5967 4.20259 10.5967 3.91493V2.8993H11.0943C11.94 2.8993 12.628 3.58732 12.628 4.433V4.93056H1.37202V4.433C1.37202 3.58732 2.06005 2.8993 2.90575 2.8993ZM11.0943 13.125H2.90575C2.06005 13.125 1.37202 12.437 1.37202 11.5913V5.97223H12.628V11.5913C12.628 12.437 11.94 13.125 11.0943 13.125ZM4.95711 8.02085C4.95711 8.30851 4.72394 8.54169 4.43628 8.54169H3.41198C3.12432 8.54169 2.89114 8.30851 2.89114 8.02085C2.89114 7.7332 3.12432 7.50002 3.41198 7.50002H4.43628C4.72391 7.50002 4.95711 7.7332 4.95711 8.02085ZM11.1089 8.02085C11.1089 8.30851 10.8757 8.54169 10.5881 8.54169H9.56377C9.27612 8.54169 9.04294 8.30851 9.04294 8.02085C9.04294 7.7332 9.27612 7.50002 9.56377 7.50002H10.5881C10.8757 7.50002 11.1089 7.7332 11.1089 8.02085ZM8.03004 8.02085C8.03004 8.30851 7.79686 8.54169 7.50921 8.54169H6.48491C6.19725 8.54169 5.96407 8.30851 5.96407 8.02085C5.96407 10.8061 6.19725 10.5729 6.48491 10.5729H7.50921C7.79684 10.5729 8.03004 10.8061 8.03004 8.02085ZM4.95711 11.0938C4.95711 11.3814 4.72394 11.6146 4.43628 11.6146H3.41198C3.12432 11.6146 2.89114 11.3814 2.89114 11.0938C2.89114 10.8061 3.12432 10.5729 3.41198 10.5729H4.43628C4.72391 10.5729 4.95711 10.8061 4.95711 11.0938ZM11.1089 11.0938C11.1089 11.3814 10.8757 11.6146 10.5881 11.6146H9.56377C9.27612 11.6146 9.04294 11.3814 9.04294 11.0938C9.04294 10.8061 9.27612 10.5729 9.56377 10.5729H10.5881C10.8757 10.5729 11.1089 10.8061 11.1089 11.0938ZM8.03004 11.0938C8.03004 11.3814 7.79686 11.6146 7.50921 11.6146H6.48491C6.19725 11.6146 5.96407 11.3814 5.96407 11.0938C5.96407 10.8061 6.19725 10.5729 6.48491 10.5729H7.50921C7.79684 10.5729 8.03004 10.8061 8.03004 11.0938Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            <span className="text-white fs-7 text-nowrap dark-mode-invert">June 24, 2026</span>
                                        </div>
                                    </li>
                                    <li className="pe-4" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar style-1">
                    <div className="d-flex align-items-center">
                        <Link className="navbar-brand fw-bold fs-3" href="/">
                            <Image src="/assets/imgs/template/logo/logo-dark.svg" width={143} height={18} alt="logo" priority={true} quality={100} />
                        </Link>
                        <span className="text-muted fs-7 d-none d-lg-block">The colors of Life.</span>
                    </div>
                    <div className="navbar-collapse d-none d-lg-block" id="navbarNav">
                        <MainMenu />
                    </div>
                    <div className="d-flex align-items-center gap-4">
                        <a href="#" className="search-btn fs-7 d-none d-md-flex" aria-label="Open search">
                            <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                <path d="M25.6667 25.6667L20.6667 20.6667M6.33337 14.6667C6.33337 10.0643 10.0643 6.33337 14.6667 6.33337C19.2691 6.33337 23 10.0643 23 14.6667C23 19.2691 19.2691 23 14.6667 23C10.0643 23 6.33337 19.2691 6.33337 14.6667Z" stroke="#0E0E0F" strokeWidth="1.74463" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Search
                        </a>
                        <div className="group-btn-right d-flex align-items-center">
                            <ThemeSwitcher />
                            <a href="#" className="navbar-toggler">
                                <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                                    <path d="M6.5 5.19999C6.5 4.48205 7.08206 3.89999 7.8 3.89999H24.7C25.4179 3.89999 26 4.48205 26 5.19999C26 5.91794 25.4179 6.49999 24.7 6.49999H7.8C7.08206 6.49999 6.5 5.91789 6.5 5.19999ZM24.7 11.7H1.3C0.582055 11.7 0 12.2821 0 13C0 13.7179 0.582055 14.3 1.3 14.3H24.7C25.4179 14.3 26 13.7179 26 13C26 12.2821 25.4179 11.7 24.7 11.7ZM24.7 19.5H13C12.2821 19.5 11.7 20.082 11.7 20.8C11.7 21.5179 12.2821 22.1 13 22.1H24.7C25.4179 22.1 26 21.5179 26 20.8C26 20.082 25.4179 19.5 24.7 19.5Z" fill="#0E0E0F" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
            <SideBar />
        </>
    );
}
