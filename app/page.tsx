
import CardList from "@/components/home/about-services-cards-list";
import HeroSection from "@/components/home/hero-section";
import OrderRules from "@/components/home/order-rules";
import WhyUsSection from "@/components/home/why-us-section";
import authConfig from "@/configs/auth";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";


export default async function Home() {
 

 console.log('ID',process.env.GOOGLE_CLIENT_ID);
 console.log('SECRET',process.env.GOOGLE_CLIENT_SECRET);
 
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
