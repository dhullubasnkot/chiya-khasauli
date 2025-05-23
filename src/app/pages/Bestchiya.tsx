import Template from "../components/ItemsTemplate/template";
import HotelItems from "../data/hoteldata";

export default function BestChiyaPage() {
  const Chiya = HotelItems.filter((item) => item.category === "Tea");
  return (
    <Template
      title="Best Sip of Chiya"
      title1="A collection of everyone's favorite tea"
      items={Chiya}
      noslice={true}
      taste="/pages/Chiya"
      buttonText="More Taste"
    />
  );
}
