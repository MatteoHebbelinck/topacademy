import '../styles/globals.css'

import { storyblokInit, apiPlugin } from "@storyblok/react";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Specific Components
import Person from "../components/specificComponents/Person/Person";
import Teacher from "../components/specificComponents/Teacher/Teacher";
import Experience from "../components/specificComponents/Experience/Experience";
import Snack from "../components/specificComponents/Snack/Snack";
import SnackCategory from "../components/specificComponents/SnackCategory/SnackCategory";

// Generic Components
import Hero from "../components/genericComponents/Hero/Hero";
import Headermenu from "../components/genericComponents/Headermenu/Headermenu";
import Menulink from "../components/genericComponents/Menulink/Menulink";
import Paragraph from "../components/genericComponents/Paragraph/Paragraph";
import Intro from "../components/genericComponents/Intro/Intro";
import LeftRightBlock from "../components/genericComponents/LeftRightBlock/LeftRightBlock";
import List from "../components/genericComponents/List/List";
import Element from "../components/genericComponents/Element/Element";
import ImageCarousel from "../components/genericComponents/ImageCarousel/ImageCarousel";
import ImageWithText from "../components/genericComponents/ImageWithText/ImageWithText";
import Footer from "../components/genericComponents/Footer/Footer";

// Layout components
import Page from "../components/layoutComponents/Page/Page";
import OneCol from "../components/layoutComponents/OneCol/OneCol";
import TwoCol from "../components/layoutComponents/TwoCol/TwoCol";
import ThreeCol from "../components/layoutComponents/ThreeCol/ThreeCol";
import Teaser from "../components/layoutComponents/Teaser/Teaser";
import Colorcode from "../components/layoutComponents/Colorcode/Colorcode";

// Remaining specific components
import Product from "../components/specificComponents/Product/Product";
import Location from "../components/specificComponents/Location/Location";
import Artist from "../components/specificComponents/Artist/Artist";
import Song from "../components/specificComponents/Song/Song";
import Contact from "../components/specificComponents/Contact/Contact";


const components = {
  // specific
  person: Person,
  teachers: Teacher,
  experience: Experience,
  snack: Snack,
  snackcategory: SnackCategory,

  // generic
  hero: Hero,
  headermenu: Headermenu,
  menulink: Menulink,
  paragraph: Paragraph,
  intro: Intro,
  leftrightblock: LeftRightBlock,
  list: List,
  element: Element,
  imagecarousel: ImageCarousel,
  imagewithtext: ImageWithText,
  footer: Footer,


  // layout
  page: Page,
  onecol: OneCol,
  twocol: TwoCol,
  threecol: ThreeCol,
  teaser: Teaser,
  colorcode: Colorcode,

  // other specific
  product: Product,
  location: Location,
  artist: Artist,
  song: Song,
  contact: Contact,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_API_KEY,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {};
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
