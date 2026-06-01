import Link from "next/link";
import cardCollections from "@/public/data/cardHome-1.json";
import ArticleCard5 from "@/components/cards/ArticleCard5";
import MainMenuInteractive from "./MainMenuInteractive";

export default function MainMenuServer() {
    const cardCollectionsData = cardCollections.cardCollections;

    return (
        <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle link-effect-1 data-link-alt" href="#">
                    <span>Home</span>
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item" href="/">
                            Home 1 - Magazine
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/index-2">
                            Home 2 - Publisher
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/index-3">
                            Home 3 - Blog
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/index-4">
                            Home 4 - Personal
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle link-effect-1 data-link-alt" href="#">
                    <span>Features</span>
                </a>
                <ul className="dropdown-menu">
                    <li className="nav-item-has-child">
                        <Link className="dropdown-item has-child" href="#">
                            Archive layout
                        </Link>
                        <ul className="sub-menu">
                            <li>
                                <Link className="dropdown-item" href="/archive-1">
                                    Archive 1
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/archive-2">
                                    Archive 2
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/archive-3">
                                    Archive 3
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/archive-4">
                                    Archive 4
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/archive-5">
                                    Archive 5
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item-has-child">
                        <Link className="dropdown-item has-child" href="#">
                            Post layouts
                        </Link>
                        <ul className="sub-menu">
                            <li>
                                <Link className="dropdown-item" href="/single-1">
                                    Single 1
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/single-2">
                                    Single 2
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/single-3">
                                    Single 3
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item-has-child">
                        <Link className="dropdown-item has-child" href="#">
                            Portfolio layouts
                        </Link>
                        <ul className="sub-menu">
                            <li>
                                <Link className="dropdown-item" href="/portfolio-archive-1">
                                    Portfolio Archive
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/portfolio-details">
                                    Portfolio Details
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/page-about">
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/page-author">
                            Author posts
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/page-search-results">
                            Search results
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/page-contact">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/page-404">
                            404
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item mega-menu-item">
                <a className="nav-link dropdown-toggle dropdown-mega-menu link-effect-1 data-link-alt" href="#">
                    <span>Collections</span>
                </a>
                <div className="sub-mega-menu">
                    <div className="container">
                        <div className="row">
                            {cardCollectionsData.map((card, idx) => (
                                <div className="col-6 col-md-4 col-lg-3" key={idx}>
                                    <ArticleCard5 card={card} idx={idx} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </li>
            <li className="nav-item position-relative">
                <span className="badge-new">
                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10" fill="none">
                        <path d="M2.18102 5.83336H4.02138L3.64143 9.42543C3.63976 9.43626 3.6393 9.46831 3.6393 9.47914C3.6393 9.76624 3.87306 10 4.16016 10C4.3235 10 4.47929 9.92165 4.58267 9.78294L8.22266 4.58336C8.28972 4.49371 8.3268 4.38293 8.3268 4.27086C8.3268 3.98376 8.09311 3.75 7.80602 3.75H5.55351L5.9285 0.582047C5.92972 0.569992 5.93056 0.532913 5.93056 0.520859C5.93102 0.233765 5.69725 0 5.41016 0C5.24681 0 5.09102 0.0783539 4.98436 0.221252L1.7643 5C1.69724 5.08957 1.66016 5.20042 1.66016 5.3125C1.66016 5.59959 1.89392 5.83336 2.18102 5.83336Z" fill="#0E0E0F" />
                    </svg>
                </span>
                <Link className="nav-link link-effect-1 data-link-alt" href="/archive-2">
                    <span>Trending</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link link-effect-1 data-link-alt" href="/archive-3">
                    <span>Latest</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link link-effect-1 data-link-alt" href="/page-contact">
                    <span>Contact</span>
                </Link>
            </li>

            {/* Client component for interactive effects */}
            <MainMenuInteractive />
        </ul>
    );
}
