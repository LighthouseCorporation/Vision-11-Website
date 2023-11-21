import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ArticleSection from "@/components/Articles";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision-11 - Your trusted Growth Partner",
  description: "Offering Enterprise Growth Research and Research for Humanity",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <AboutSectionOne />
      <AboutSectionTwo />
      <ArticleSection />
      <Video />
      <Contact />
    </>
  );
}
