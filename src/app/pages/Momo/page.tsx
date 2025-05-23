import Template from "@/app/components/ItemsTemplate/template";
import Navbar from "@/app/components/navbar";
import HotelItems from "@/app/data/hoteldata";
export default function Momo() {
  const Momo = HotelItems.filter((item) => item.category === "Momo");
  return (
    <>
      <Navbar />
      <Template
        items={Momo}
        title="Best Momo in Town"
        title1="A collection of everyone's favorite Momo"
        noslice={false}
        taste="/items/momo"
        buttonText="More Momo"
      />
    </>
  );
}
