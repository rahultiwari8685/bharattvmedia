import Link from "next/link";


type CardProps = {
  card: {
    img: string;
    linkPost: string;
    title: string;
    bg: string;
  };
  idx: number;
};

export default function CategoryCard2({ card, idx }: CardProps) {
  return (
    <>
      <div className={`category-card style-2 w-100 ${card.bg}`} key={idx}>
        <div className="post-content text-center">
          <Link href={card.linkPost}>
            <h6 className="mb-0 changeless">{card.title}</h6>
          </Link>
        </div>
      </div>
    </>
  );
}
