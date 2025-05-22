import Template from "@/app/components/ItemsTemplate/page";
import Navbar from "@/app/components/navbar";
import HotelItems from "@/app/data/page";

export default function Chiya() {
  const chiya = HotelItems.filter((item) => item.category === "Tea");
  return (
    <>
      <Navbar />
      <Template
        title="Best Sip of Chiya"
        title1="A collection of everyone's favorite tea"
        items={chiya}
        noslice={false}
        taste="/items/tea"
        buttonText="More Taste"
      />
    </>
  );
}
