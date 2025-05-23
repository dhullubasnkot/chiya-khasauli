import Footer from "@/app/components/footer";
import Template from "@/app/components/ItemsTemplate/template";
import Navbar from "@/app/components/navbar";
import HotelItems from "@/app/data/hoteldata";
export default function Chatpate() {
  const Momo = HotelItems.filter((item) => item.category === "Chatpate");
  return (
    <>
      <Navbar />
      <Template
        items={Momo}
        title="Best Chatpate in Town"
        title1="A collection of everyone's favorite Chatpate"
        noslice={false}
        taste="/items/momo"
        buttonText="More Chatpate"
      />
      <Footer />
    </>
  );
}
