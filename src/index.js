import "./sass/main.scss";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";

const mobileMenu = new MobileMenu();
mobileMenu.events();

const features = new RevealOnScroll(".features__container", "85%");
features.hideInit();
features.createWayPoints();

const testimonials = new RevealOnScroll(".card", "60%");
testimonials.hideInit();
testimonials.createWayPoints();
