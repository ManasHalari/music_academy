import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import Sticky from "@/components/Sticky";
import HoverCards from "@/components/HoverCards";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
   <HeroSection/>
   <FeaturedCourses/>
   <Sticky/>
   <TestimonialCards/>
   <HoverCards/>
   <Instructors/>
   <Footer/>
   </main>
  );
}
