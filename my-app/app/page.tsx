import HeroSection from "./_components/hero-section/hero-section";
import LiveAuctionSection from "./_components/live-auction-section/live-auction-section";
import PopularCollectionsSection from "./_components/popular-collection-section/popular-collection-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-[40px] pt-[40px] lg:gap-[145px] lg:py-[11px]">
      <HeroSection />
      <LiveAuctionSection />
      <PopularCollectionsSection />
    </div>
  );
}
