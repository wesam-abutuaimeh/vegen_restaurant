import LandingSection from "../components/LandingSection";
import AboutUs from "../components/AboutUS";
import Special from "../components/Special";
import OurMenu from "../components/OurMenu";
import BookTable from "../components/BookTable";
import CookingIngredients from "../components/CookingIngredients";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import Blog from "../components/Blogs";
import Footer from "../components/Footer";
import Subscription from "../components/Subscription";
import Copyright from "../components/CopyRight";

function LandingPage() {
    return (
        <div className="App">
            <LandingSection />
            <AboutUs />
            <Special />
            <OurMenu />
            <BookTable />
            <CookingIngredients />
            <Services />
            <Reviews />
            <Blog />
            <Footer />
            <Subscription />
            <Copyright />
        </div>
    );
}

export default LandingPage;
