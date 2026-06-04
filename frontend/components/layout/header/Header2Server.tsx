import Image from "next/image";
import Link from "next/link";
import MainMenu2 from "@/components/layout/MainMenu2Server";
import ThemeSwitcher from "@/util/ThemeSwitcherServer";
import SideBar from "@/components/layout/SideBarServer";
import Header2Interactive from "./Header2Interactive";
import Header1Interactive from "./Header1Interactive";
import GoldPrice from "@/components/GoldPrice";
import WeatherWidget from "@/components/WeatherWidget";

export default function Header2Server() {
  return (
    <>
      <header>
        {/* <div className="topbar d-none d-lg-block bg-white text-dark border-bottom">
          <div className="overflow-hidden">
            <div className="d-flex justify-content-between align-items-center">
              <div className="left">
                <WeatherWidget />
              </div>

              <div className="right">
        <GoldPrice/>
      </div>
            </div>
          </div>
        </div> */}

        <nav className="navbar style-2">
          <div className="d-flex align-items-center w-100">
            {/* Logo */}
            <div>
              <Link className="navbar-brand fw-bold fs-3" href="/">
                <Image
                  className="dark-mode-invert"
                  src="/assets/imgs/template/logo/Bharat_Logo.png"
                  width={143}
                  height={70}
                  alt="logo"
                />
              </Link>
            </div>

            {/* Menu */}
            <div
              className="navbar-collapse d-none d-lg-flex justify-content-center flex-grow-1"
              id="navbarNav"
            >
              <MainMenu2 />
            </div>

            {/* Right Side */}
            <div className="d-flex align-items-center gap-4">
              <ThemeSwitcher />

              <a href="#" className="navbar-toggler">
                {/* menu icon */}
              </a>
            </div>
          </div>
        </nav>
      </header>
      <SideBar />

      {/* Client component for interactive logic */}
      <Header2Interactive />
    </>
  );
}
