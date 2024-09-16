
import coffee from "../../Assets/web/portfolio1.png";
import TourandTravelWebsite from "../../Assets/web/portfolio2.png";
import FoodWebsite from "../../Assets/web/portfolio3.png";
import GithubImage from "../../Assets/web/GithubImage.png";
import FacebookUI from "../../Assets/web/facebookClone-UI.png";
import YouTubeUI from "../../Assets/web/YoutubeClone-UI.png";
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
import { AiFillGithub } from 'react-icons/ai'
import { FiFigma } from 'react-icons/fi'

// Web Links
var coffeeLink = "https://caffeine-site.netlify.app";
var coffeeGithubLink = "https://github.com/guledabdilatif/Coffee-Website";
var TourandTravelWebsiteLink = "https://travel-travel-site.netlify.app";
var TourandTravelGithubLink = "https://github.com/guledabdilatif/tour-and-travel-website";
var FoodWebsiteLink = "https://refreshment.netlify.app";
var FoodWebsiteGithubLink = "https://github.com/guledabdilatif/Food-website";
var GithubLink = "https://github.com/guledabdilatif";

//Web file Link
var YouTubeLink = "https://youtubeclone-ui.netlify.app/";
var facebookLink = "https://facebook-clone-ui-site.netlify.app/";
var YouTubeGithubLink = "https://github.com/guledabdilatif/You-Tube-Clone";
var facebookGithubLink = "https://github.com/guledabdilatif/facebook-clone";
// var WeatherApp = "https://github.com/guledabdilatif/Food-website";
// var WeatherAppGithubLink = "https://github.com/guledabdilatif/weather-app";

// Design file Link
var FoodDesignFigmaFile = "https://www.figma.com/file/svNxChr2lqChjwjDTGcjSO/Food-web-App-Design?type=design&node-id=0-1&mode=design&t=INYtwN4CHhFtWKpu-0"
var LoginDesignPCfigmaLink = "https://www.figma.com/file/IeTsYdYhKgcUw9uUKX6lvt/Login-iMac-1?type=design&node-id=6-15&mode=design&t=8mUEk4zNLbtnTVrI-0"
var eBikeFigmaFile = "https://www.figma.com/file/DDQA1aMQkjzOKiQ1fTLjzE/e-Bike-landing-page-UI?type=design&node-id=2-2&mode=design&t=TULHXHCvPrwdi4L7-0"
var checkOutFigmaFile = "https://www.figma.com/file/YQvbjSExU7ttRRWMwPuCY5/Checkout?type=design&node-id=1-2&mode=design&t=Zf9fAn8BH9sMhE6G-0"
var SignUPFigmaFile = "https://www.figma.com/file/pp31dOwNYijZxQbsln8Aca/Sign-Up?type=design&node-id=1-2&mode=design&t=JBagjJarFrl4cruI-0"
var LoginMobileFigmaFile = "https://www.figma.com/file/fUJ65ylKSkAjPggsf8D5Qc/login-mobile-page?type=design&node-id=1-4&mode=design&t=svJwE7D677Wxe0cY-0"
// Mobile github Link
var FoodAppUiGithubLink = "https://github.com/guledabdilatif/food-app-ui-react-native"
var TravelAppUiGithubLink = "https://github.com/guledabdilatif/travel-mobile-app-ui"
var OnboardingUiGithubLink = "https://github.com/guledabdilatif/Onboarding-UI-react-native"

export const DesignsDetails = [
    {
        figmaIcon: <FiFigma />,
        figmafileLink: FoodDesignFigmaFile,
        desingname: "Food Website Design",
        downloaddesign: FoodWebDesign,
        desingimage: FoodWebDesign,
    },
    {
        figmaIcon: <FiFigma />,
        figmafileLink: eBikeFigmaFile,
        desingname: "e-Bike Landing Page",
        downloaddesign: eBike,
        desingimage: eBike,
    },
    {
        figmaIcon: <FiFigma />,
        figmafileLink: LoginDesignPCfigmaLink,
        downloaddesign: FoodWebDesign,
        desingname: " PC Login Design",
        desingimage: PCLoginDesign,
    },
    {
        figmaIcon: <FiFigma />,
        figmafileLink: checkOutFigmaFile,
        downloaddesign: Checkout,
        desingname: " Checkout",
        desingimage: Checkout,
    },
    {
        figmaIcon: <FiFigma />,
        figmafileLink: SignUPFigmaFile,
        downloaddesign: SignUP,
        desingname: " Sign-Up",
        desingimage: SignUP,
    },
    {
        figmaIcon: <FiFigma />,
        figmafileLink: LoginMobileFigmaFile,
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
        webname: "Facebook Clone UI",
        webimage: FacebookUI,
        weblink: facebookLink,
        view: "Demo",
        GithubIcon: <AiFillGithub />,
        GithubLink: facebookGithubLink
    },
    {
        webname: "You-Tube Clone UI",
        webimage: YouTubeUI,
        weblink: YouTubeLink,
        view: "Demo",
        GithubIcon: <AiFillGithub />,
        GithubLink: YouTubeGithubLink
    },
    {
        webname: "Coffee",
        webimage: coffee,
        weblink: coffeeLink,
        view: "Demo",
        GithubIcon: <AiFillGithub />,
        GithubLink: coffeeGithubLink
    },
    {
        webname: "Tour and Travel Website",
        webimage: TourandTravelWebsite,
        weblink: TourandTravelWebsiteLink,
        view: "Demo",
        GithubIcon: <AiFillGithub />,
        GithubLink: TourandTravelGithubLink,
    },
    {
        webname: "Food Website",
        webimage: FoodWebsite,
        weblink: FoodWebsiteLink,
        view: "Demo",
        GithubIcon: <AiFillGithub />,
        GithubLink: FoodWebsiteGithubLink,
    },
    {
        webname: "Want to see More projects i worked on? Click on github icon, just infront.",
        webimage: GithubImage,
        GithubIcon: <AiFillGithub />,
        GithubLink: GithubLink,
    },
]
export const mobileDetails = [
    {
        name:"Food App UI",
        image:FoodAppUI,
        githubIcon:<AiFillGithub />,
        githubLink:FoodAppUiGithubLink
    },
    {
        name:"Travel App UI",
        image:TravelAppUI,
        githubIcon:<AiFillGithub />,
        githubLink:TravelAppUiGithubLink
        
    },
    {
        name:"Onboarding App UI",
        image:OnboardingUI,
        githubIcon:<AiFillGithub />,
        githubLink:OnboardingUiGithubLink        
    }


]
