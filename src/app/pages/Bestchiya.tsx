import Template from "../components/ItemsTemplate/page";
import HotelItems from "../data/page";

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
