import Link from "next/link";
import Image from "next/image";

type CardSideBarType = {
  img: string;
  title: string;
  link: string;
  date: string;
  time: string;
  style: string;
  fontSize: string;
};

type CardProps = {
  card: CardSideBarType;
  idx: number;
};

export default function ArticleCard10({ card, idx }: CardProps) {
  return (
    <>
      <div className={`article card-10 ${card.style}`} key={idx}>
        <Link href={card.link} className="card-img">
          <img
            className="w-100"
            src={card.img}
            alt={card.title}
            width={500}
            height={500}
          />
        </Link>

        <div className="card-body">
          <Link href={card.link}>
            <h6 className={`${card.fontSize} mb-2 text-truncate-2`}>
              {card.title}
            </h6>
          </Link>

          <div className="d-flex align-items-center text-600">
            <span className="fs-8">{card.date}</span>

            <ul className="ps-4 m-0">
              <li>
                <span className="fs-8">{card.time}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
