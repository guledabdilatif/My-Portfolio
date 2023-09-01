
import coffee from "../../Assets/portfolio1.png";
import TourandTravelWebsite from "../../Assets/portfolio2.png";
import FoodWebsite from "../../Assets/portfolio3.png";
import FoodWebDesign from "../../Assets/portfolio4.png";
import PCLoginDesign from "../../Assets/portfolio6.png";
import mobileLoginUI from "../../Assets/mobile-login-ui.png";
import SignUP from "../../Assets/Sign-Up.png";
import Checkout from "../../Assets/Checkout.png";
import eBike from "../../Assets/e-Bike-Web-UI.png";
import { AiFillGithub } from 'react-icons/ai'
import { FiFigma } from 'react-icons/fi'

// Web Links
var coffeeLink = "https://caffeine-site.netlify.app";
var coffeeGithubLink = "https://github.com/guledabdilatif/Coffee-Website";
var TourandTravelWebsiteLink = "https://travel-travel-site.netlify.app";
var TourandTravelGithubLink = "https://github.com/guledabdilatif/tour-and-travel-website";
var FoodWebsiteLink = "https://refreshment.netlify.app";
var FoodWebsiteGithubLink = "https://github.com/guledabdilatif/Food-website";

//Web file Link
// var YouTubeLink = "https://github.com/guledabdilatif/Food-website";
// var facebookLink = "https://github.com/guledabdilatif/Food-website";
// var WeatherApp = "https://github.com/guledabdilatif/Food-website";
// var YouTubeGithubLink = "https://github.com/guledabdilatif/You-Tube-Clone";
// var WeatherAppGithubLink = "https://github.com/guledabdilatif/weather-app";
// var facebookGithubLink = "https://github.com/guledabdilatif/facebook-clone";

// Design file Link
var FoodDesignFigmaFile = "https://www.figma.com/file/svNxChr2lqChjwjDTGcjSO/Food-web-App-Design?type=design&node-id=0-1&mode=design&t=INYtwN4CHhFtWKpu-0"
var LoginDesignPCfigmaLink = "https://www.figma.com/file/IeTsYdYhKgcUw9uUKX6lvt/Login-iMac-1?type=design&node-id=6-15&mode=design&t=8mUEk4zNLbtnTVrI-0"
var eBikeFigmaFile = "https://www.figma.com/file/DDQA1aMQkjzOKiQ1fTLjzE/e-Bike-landing-page-UI?type=design&node-id=2-2&mode=design&t=TULHXHCvPrwdi4L7-0"
var checkOutFigmaFile = "https://www.figma.com/file/YQvbjSExU7ttRRWMwPuCY5/Checkout?type=design&node-id=1-2&mode=design&t=Zf9fAn8BH9sMhE6G-0"
var SignUPFigmaFile = "https://www.figma.com/file/pp31dOwNYijZxQbsln8Aca/Sign-Up?type=design&node-id=1-2&mode=design&t=JBagjJarFrl4cruI-0"
var LoginMobileFigmaFile = "https://www.figma.com/file/fUJ65ylKSkAjPggsf8D5Qc/login-mobile-page?type=design&node-id=1-4&mode=design&t=svJwE7D677Wxe0cY-0"


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
        desingname: " Mobile Login UiI",
        desingimage: mobileLoginUI,
    },
]
export const WebsitesDetails = [
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
]
export const portfolioDetails = [


]
