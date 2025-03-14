import Confetti from "@/components/common/confetti/confetti";
import AboutServices from "@/components/home/about-services";
import AboutServicesCard from "@/components/home/about-services-card";
import CardList from "@/components/home/about-services-cards-list";
import HeroSection from "@/components/home/hero-section";
import OrderRules from "@/components/home/order-rules";
import WhyUsSection from "@/components/home/why-us-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
 
  return (
    <div className="">
      <HeroSection />
      {/* <AboutServices /> */}
      <WhyUsSection/>
      <CardList/>
      <OrderRules/>
      {/* <DemoSection /> */}
      {/* <HowItWorksSection /> */}
      {/* <PricingSection /> */}
      {/* <CTA /> */}
   
    </div>
  );
}
