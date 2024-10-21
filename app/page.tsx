import Card from "@/components/DisCard";
import Content from "@/components/Content";
import HeroSlider from "@/components/HeroSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <main className="px-4 sm:px-6 md:px-10 lg:px-20 py-3 sm:py-4 md:py-5 font-poppins">
      <HeroSlider />
      <Content />
    </main>
  );
}
