import Footer from "@/app/components/footer";
import Template from "@/app/components/ItemsTemplate/template";
import Navbar from "@/app/components/navbar";
import HotelItems from "@/app/data/hoteldata";
export default function Roti() {
  const Roti = HotelItems.filter((item) => item.category === "Roti");
  return (
    <>
      <Navbar />
      <Template
        items={Roti}
        title="Best Roti in Town"
        title1="A collection of everyone's favorite Roti"
        noslice={false}
        taste="/items/Roti"
        buttonText="More Roti"
      />
      <Footer />
    </>
  );
}
