import Header from "./Header";
import Footer from "./Footer";
import Spline from "@splinetool/react-spline";


const Page1 = () => {
  return (
    <div className="Page1">
      <Header />
      <Spline
        className="spline-viewer"
        scene="https://prod.spline.design/2Vf2-lSq5SzFO2jB/scene.splinecode"
      />
      <Footer />
    </div>
  );
};

export default Page1;


