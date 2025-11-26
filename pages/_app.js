import '../styles/globals.css'

import { storyblokInit, apiPlugin } from "@storyblok/react";
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Specific Components
import Person from "../components/specificComponents/Person/Person";
import Teacher from "../components/specificComponents/Teacher/Teacher";
import Experience from "../components/specificComponents/Experience/Experience";
import Snack from "../components/specificComponents/Snack/Snack";   // ← JUIST

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

// Layout components
import Page from "../components/layoutComponents/Page/Page";
import OneCol from "../components/layoutComponents/OneCol/OneCol";
import TwoCol from "../components/layoutComponents/TwoCol/TwoCol";
import ThreeCol from "../components/layoutComponents/ThreeCol/ThreeCol";

// Remaining components
import Product from "../components/specificComponents/Product/Product";
import Location from "../components/specificComponents/Location/Location";
import Artist from "../components/specificComponents/Artist/Artist";
import Song from "../components/specificComponents/Song/Song";
import Contact from "../components/specificComponents/Contact/contact";

// Storyblok component mapping (IMPORTANT)
const components = {
  person: Person,
  teacher: Teacher,
  experience: Experience,
  hero: Hero,
  page: Page,
  headermenu: Headermenu,
  menulink: Menulink,
  paragraph: Paragraph,
  intro: Intro,
  leftrightblock: LeftRightBlock,
  snack: Snack,            // ← BELANGRIJK: Storyblok componentnaam "snack"
  list: List,
  element: Element,
  onecol: OneCol,
  twocol: TwoCol,
  threecol: ThreeCol,
  imagecarousel: ImageCarousel,
  product: Product,
  location: Location,
  artist: Artist,
  song: Song,
  contact: Contact,
};

// Initialize Storyblok
storyblokInit({
  accessToken: process.env.STORYBLOK_API_KEY,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // placeholder if you add GA
    }

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    }
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
