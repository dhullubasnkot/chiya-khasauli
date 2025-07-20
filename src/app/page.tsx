import Navbar from "./components/navbar";
import FirstPage from "./pages/home";
import BestChiyaPage from "./pages/Bestchiya";
// import ChiyaReviewsPage from "./pages/customerreview";
import BestNastaPage from "./pages/BestNasta";
import Footer from "./components/footer";
import GuffGaffMain from "./pages/GuffGaff";
import SpecialItems from "./pages/specialitems";

export default function Home() {
  return (
    <>
      <Navbar />
      <FirstPage />
      <BestChiyaPage />
      <BestNastaPage />
      <SpecialItems />
      <GuffGaffMain />
      {/* <ChiyaReviewsPage /> */}
      <Footer />
    </>
  );
}
