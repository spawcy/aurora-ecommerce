import { HEADER_CARD_ITEMS } from "@/const/static/header-card-items";

export default function HeaderCard() {
  return (
    <>
      {HEADER_CARD_ITEMS.map(({ title, text }, index) => (
        <div key={index}>
          <b className="text-xl md:text-2xl font-bold">{title}</b>
          <p className="mt-1.5">{text}</p>
        </div>
      ))}
    </>
  );
}
