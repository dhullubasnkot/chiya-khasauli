import Template from "../components/ItemsTemplate/template";
import HotelItems from "../data/hoteldata";

export default function SpecialItems() {
  const SpecialItems = HotelItems.filter(
    (item) => item.subcategory === "Special Items"
  );
  return (
    <Template
      title="Batauli Special Items"
      title1="Everyone's Favorite"
      items={SpecialItems}
      noslice={true}
      taste=""
      buttonText="More Items"
    />
  );
}
