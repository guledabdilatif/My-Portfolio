
import coffee from "../../Assets/web/portfolio1.png";
import TourandTravelWebsite from "../../Assets/web/portfolio2.png";
import FoodWebsite from "../../Assets/web/portfolio3.png";
import FacebookUI from "../../Assets/web/facebookClone-UI.png";
import portfolio from "../../Assets/web/portfolio.png";
import YouTubeUI from "../../Assets/web/YoutubeClone-UI.png";
import rashco from "../../Assets/web/rashco.png";
import youngbuck from "../../Assets/web/ybv.png";
import FoodWebDesign from "../../Assets/Designs/portfolio4.png";
import PCLoginDesign from "../../Assets/Designs/portfolio6.png";
import mobileLoginUI from "../../Assets/Designs/mobile-login-ui.png";
import Brochure from "../../Assets/Designs/Brochure.jpg";
import SignUP from "../../Assets/Designs/Sign-Up.png";
import Checkout from "../../Assets/Designs/Checkout.png";
import eBike from "../../Assets/Designs/e-Bike-Web-UI.png";
import FoodAppUI from "../../Assets/Mobile/food-mobile-app-UI.png";
import TravelAppUI from "../../Assets/Mobile/travel-app-ui (1).png";
import OnboardingUI from "../../Assets/Mobile/Onboarding-UI.png";
import { IoIosLink } from "react-icons/io";
import { FiFigma } from 'react-icons/fi'

// Web Links
var coffeeLink = "https://caffeine-site.netlify.app";
var TourandTravelWebsiteLink = "https://travel-travel-site.netlify.app";
var FoodWebsiteLink = "https://refreshment.netlify.app";
var YouTubeLink = "https://youtubeclone-ui.netlify.app/";
var facebookLink = "https://superb-clafoutis-65679d.netlify.app/";
var rashcolink = "https://rashcoltd.com/";
var youngbucklink = "https://youngbucks.co.ke/";
var portfoliolink = "https://abdiladif-mohamud.netlify.app/";

//Web file Link



// var WeatherApp = "https://github.com/guledabdilatif/Food-website";
// var WeatherAppGithubLink = "https://github.com/guledabdilatif/weather-app";

// Mobile github Link
var FoodAppUiGithubLink = "https://github.com/guledabdilatif/food-app-ui-react-native"
var TravelAppUiGithubLink = "https://github.com/guledabdilatif/travel-mobile-app-ui"
var OnboardingUiGithubLink = "https://github.com/guledabdilatif/Onboarding-UI-react-native"

export const DesignsDetails = [
    {
        figmaIcon: <FiFigma />,
        desingname: "Food Website Design",
        downloaddesign: FoodWebDesign,
        desingimage: FoodWebDesign,
    },
    {
        figmaIcon: <FiFigma />,
        desingname: "e-Bike Landing Page",
        downloaddesign: eBike,
        desingimage: eBike,
    },
    {
        figmaIcon: <FiFigma />,
        downloaddesign: FoodWebDesign,
        desingname: " PC Login Design",
        desingimage: PCLoginDesign,
    },
    {
        figmaIcon: <FiFigma />,        
        downloaddesign: Checkout,
        desingname: " Checkout",
        desingimage: Checkout,
    },
    {
        figmaIcon: <FiFigma />,
        downloaddesign: SignUP,
        desingname: " Sign-Up",
        desingimage: SignUP,
    },
    {
        figmaIcon: <FiFigma />,
        downloaddesign: mobileLoginUI,
        desingname: " Mobile Login UI",
        desingimage: mobileLoginUI,
    },
    {
        downloaddesign: Brochure,
        desingname: " Brochure",
        desingimage: Brochure,
    },
]
export const WebsitesDetails = [
    {
        webname: "Portfolio",
        webimage: portfolio,
        weblink:portfoliolink,
        linkIcon: <IoIosLink />,

    },
    {
        webname: "Facebook Clone UI",
        webimage: FacebookUI,
        weblink: facebookLink,
        linkIcon: <IoIosLink />,

    },
    {
        webname: "Coffee",
        webimage: coffee,
        weblink: coffeeLink,
        linkIcon: <IoIosLink />,

    },
    {
        webname: "Food Website",
        webimage: FoodWebsite,
        weblink: FoodWebsiteLink,
        linkIcon: <IoIosLink />,
    },
    {
        webname: "Tour and Travel Website",
        webimage: TourandTravelWebsite,
        weblink: TourandTravelWebsiteLink,
        linkIcon: <IoIosLink />,

    },
    {
        webname: "Rashco Ltd",
        webimage: rashco,
        weblink: rashcolink,
        linkIcon: <IoIosLink />,

    },
    {
        webname: "You-Tube Clone UI",
        webimage: YouTubeUI,
        weblink: YouTubeLink,
        linkIcon: <IoIosLink />,

    },
    {
        webname: "Young Bucks Ltd",
        webimage: youngbuck,
        weblink: youngbucklink,
        linkIcon: <IoIosLink />,

    },

]
export const mobileDetails = [
    {
        name: "Food App UI",
        image: FoodAppUI,
        // githubIcon:<AiFillGithub />,
        githubLink: FoodAppUiGithubLink
    },
    {
        name: "Travel App UI",
        image: TravelAppUI,
        // githubIcon:<AiFillGithub />,
        githubLink: TravelAppUiGithubLink

    },
    {
        name: "Onboarding App UI",
        image: OnboardingUI,
        // githubIcon:<AiFillGithub />,
        githubLink: OnboardingUiGithubLink
    }


]
