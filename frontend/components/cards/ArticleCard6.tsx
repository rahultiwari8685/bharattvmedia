import Link from "next/link";
import Image from "next/image";

type CardProps = {
    card: {
        linkPost: string;
        img: string;
        title: string;
        date: string;
        readTime: string;
        linkComment: string;
        comment: string;
        cardClass: string;
        cardTitle: string;
        textColor: string;
        classList: string;
    };
    idx: number;
};

export default function ArticleCard6({ card, idx }: CardProps) {
    return (
        <>
            <div className={card.classList}>
                <div className={`article card-6 ${card.cardClass}`} key={idx}>
                    <Link href={card.linkPost} className="thumbnail">
                        <Image src={card.img} alt="magzin" width={500} height={500} />
                    </Link>
                    <div className="card-body mt-md-0 mt-4">
                        <Link href={card.linkPost}>
                            <h6 className={`card-title cardTitle mb-2 ${card.cardTitle}`}>{card.title}</h6>
                        </Link>
                        <ul className={`d-flex align-items-center gap-4 text-600 m-0 ps-0 ${card.textColor}`}>
                            <li className="list-unstyled">
                                <p className={`fs-8 m-0 ${card.textColor}`}>{card.date}</p>
                            </li>
                            <li>
                                <p className={`fs-8 m-0 pe-5 ${card.textColor}`}>{card.readTime}</p>
                            </li>
                        </ul>
                        <Link href={card.linkComment} className="comment ms-auto fs-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.50018 5.43423C2.50018 4.26961 3.44494 3.3255 4.61035 3.3255H15.39C16.5554 3.3255 17.5002 4.26961 17.5002 5.43422V13.1078C17.5002 14.2724 16.5554 15.2165 15.39 15.2165H6.3295L3.41902 17.3786C3.24443 17.5083 3.01159 17.5285 2.81722 17.4309C2.62285 17.3333 2.50018 17.1345 2.50018 16.9171V5.43423ZM4.61035 4.47571C4.08062 4.47571 3.65118 4.90485 3.65118 5.43423V15.7729L5.79569 14.1799C5.89495 14.1062 6.01534 14.0663 6.13902 14.0663H15.39C15.9197 14.0663 16.3492 13.6372 16.3492 13.1078V5.43422C16.3492 4.90485 15.9197 4.47571 15.39 4.47571H4.61035Z" fill="#626568" />
                            </svg>
                            <span className={card.textColor}>{card.comment}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
