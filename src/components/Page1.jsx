import BackgroundGrid from "./BackgroundGrid";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Spline from "@splinetool/react-spline";


const Page1 = () => {
  return (
    <div className="Page1">
      <Header />
      <Spline
        className="spline-viewer"
        scene="https://prod.spline.design/6zsbsRa6BhXiJ1JT/scene.splinecode"
      />
      <BackgroundGrid />
      <Content />
      <Footer />
    </div>
  );
};

export default Page1;


