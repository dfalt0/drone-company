import { Hero } from "@/components/Hero";
import { SectionVision } from "@/components/SectionVision";
import { SectionSwarm } from "@/components/SectionSwarm";
import { SectionDefense } from "@/components/SectionDefense";
import { SectionSystemView } from "@/components/SectionSystemView";
import { SectionAI } from "@/components/SectionAI";
import { SectionFuture } from "@/components/SectionFuture";
import { SectionContact } from "@/components/SectionContact";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionVision />
      <SectionSwarm />
      <SectionDefense />
      <SectionSystemView />
      <SectionAI />
      <SectionFuture />
      <SectionContact />
    </>
  );
}
