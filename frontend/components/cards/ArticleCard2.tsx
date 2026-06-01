import Link from "next/link";
import Image from "next/image";

type CardProps = {
    card: {
        img: string;
        linkBadge: string;
        linkPost: string;
        linkAuthor: string;
        badge: string;
        bgBadge: string;
        date: string;
        readTime: string;
        title: string;
        author: string;
        imgAuthor: string;
    };
    idx: number;
};

export default function ArticleCard2({ card, idx }: CardProps) {
    return (
        <>
            <div className="article card-2 position-relative" key={idx}>
                <div className="post-link">
                    <Link href={card.linkPost} className="card-img-top thumbnail">
                        <Image src={card.img} alt={card.title} className="cover-image" width={684} height={524} priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw" placeholder="blur" blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" quality={90} />
                    </Link>
                    <div className="card-corner">
                        <Link href={card.linkPost} className="arrow-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="#0E0E0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19 12H4.75" stroke="#0E0E0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <div className="curve-one" />
                        <div className="curve-two" />
                    </div>
                    <div className="card-body">
                        <Link href={card.linkBadge} className={`badge ${card.bgBadge} fs-8 mb-2`}>
                            {card.badge}
                        </Link>
                        <Link href={card.linkPost}>
                            <h4 className="card-title mb-0">{card.title}</h4>
                        </Link>
                        <div className="card-info d-flex flex-wrap gap-2 align-items-center mt-2">
                            <Link href={card.linkAuthor} className="author d-flex align-items-center gap-2">
                                <Image className="avatar avatar-sm rounded-circle" src={card.imgAuthor} alt={card.author} width={500} height={500} />
                                <span className="fs-7 text-500 fw-semibold">{card.author}</span>
                            </Link>
                            <ul className="d-flex align-items-center gap-4 text-600 m-0 ps-4">
                                <li>
                                    <p className="fs-8 m-0">{card.date}</p>
                                </li>
                                <li>
                                    <p className="fs-8 m-0">{card.readTime}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
