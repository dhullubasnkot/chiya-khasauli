import Footer from "@/app/components/footer";
import Template from "@/app/components/ItemsTemplate/template";
import Navbar from "@/app/components/navbar";
import HotelItems from "@/app/data/hoteldata";

export default function Chiya() {
  const ColdDrinks = HotelItems.filter(
    (item) => item.category === "colddrinks"
  );
  return (
    <>
      <Navbar />
      <Template
        title="Some Refreshing Cold Drinks"
        title1=""
        items={ColdDrinks}
        noslice={false}
        taste=""
        buttonText=""
      />
      <Footer />
    </>
  );
}
