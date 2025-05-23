import Template from "../components/ItemsTemplate/template";
import HotelItems from "../data/hoteldata";

export default function BestNastaPage() {
  const Chiya = HotelItems.filter(
    (item) => item.category === "Momo" || item.category === "Chatpate"
  );
  return (
    <Template
      title="Craving Something Light? Try These!"
      title1="Perfect Picks for Your Snack Time"
      items={Chiya}
      noslice={true}
      taste="/pages/Momo"
      buttonText="More Nasta"
    />
  );
}
