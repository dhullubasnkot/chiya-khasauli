import Footer from "@/app/components/footer";
import Template from "@/app/components/ItemsTemplate/template";
import Navbar from "@/app/components/navbar";
import HotelItems from "@/app/data/hoteldata";

export default function Chiya() {
  const Hukka = HotelItems.filter((item) => item.category === "Hukka");
  return (
    <>
      <Navbar />
      <Template
        title="Best Hukka In Town"
        title1=""
        items={Hukka}
        noslice={false}
        taste=""
        buttonText=""
      />
      <Footer />
    </>
  );
}
