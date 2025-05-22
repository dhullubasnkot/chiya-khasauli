import Navbar from "./components/navbar";
import FirstPage from "./pages/home";

import BestChiyaPage from "./pages/Bestchiya";
import ChiyaReviewsPage from "./pages/customerreview";
import BestNastaPage from "./pages/BestNasta";
import GuffGaff from "./pages/GuffGaf/page";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <FirstPage />
      <BestChiyaPage />
      <ChiyaReviewsPage />
      <BestNastaPage />
      <GuffGaff noSlice={true} noNavbar={true} />
      <Footer />
    </>
  );
}
