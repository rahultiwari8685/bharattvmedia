import Link from "next/link";
import Image from "next/image";

type CardProps = {
  card: {
    img: string;
    linkPost: string;
    name: string;
    position: string;
    bgstickyCorner: string;
  };
  idx: number;
};

export default function AuthorCard({ card, idx }: CardProps) {
  return (
    <>
      <div className={`author-grid-wrap ${card.bgstickyCorner} h-100`} key={idx}>
        <Link href={card.linkPost}>
          <Image src={card.img} alt="magzin" className="author-image-avator w-100 h-100" width={280} height={370} />
        </Link>
        <div className="author-sticky-block-left-bottom">
          <Link href={card.linkPost}>
            <h6 className="fs-7 mb-0">{card.name}</h6>
          </Link>
          <p className="fs-7 m-0">{card.position}</p>
        </div>
        <div className="author-sticky-corner-left-top" />
        <div className="author-sticky-corner-right-bottom" />
      </div>
    </>
  );
}
