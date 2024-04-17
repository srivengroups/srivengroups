import '../App.css';
import SgNavbar from './SgNavbar';
import MainSection from './MainSection';
import Gallery from './OurProjects';
import WhySG from './WhySG';
import Footer from './Footer';
import KnowMore from './KnowMore';
import AboutUs from './AboutUs';
import OurPartners from './OurPartners';
import Services from './Services';
import apartmentImg1 from "../images/apartmentImg1.jpg";
import apartmentImg2 from "../images/apartmentImg2.jpg";


const images = [
   [apartmentImg1, apartmentImg2],
   [apartmentImg2, apartmentImg1],
   [apartmentImg1, apartmentImg2]
]

function LandingPage({properties}) {
  return (
    <div className="App">
      <SgNavbar fixedTop={true} />
      <MainSection />
      <AboutUs />
      <WhySG />
      <OurPartners />
      <Services />
      <Gallery images={images} properties={properties} />
      {/* <Testimonials /> */}
      {/* <ContactUs /> */}
      <KnowMore />
      <Footer />
    </div>
  );
}

export default LandingPage;