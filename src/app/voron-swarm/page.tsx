import { Hero } from "@/components/Hero";
import { SectionVision } from "@/components/SectionVision";
import { SectionDroneSwarmAnimation } from "@/components/SectionDroneSwarmAnimation";
import { SectionSwarm } from "@/components/SectionSwarm";
import { SectionDefense } from "@/components/SectionDefense";
import { SectionSystemView } from "@/components/SectionSystemView";
import { SectionAI } from "@/components/SectionAI";
import { SectionFuture } from "@/components/SectionFuture";
import { SectionContact } from "@/components/SectionContact";

export const metadata = {
  title: "Voron Swarm — Autonomous Drone Swarm Defense | Voron Dynamics",
  description:
    "Lightweight, AI-controlled drone swarms for defensive grid deployment. Cost-effective Iron Dome alternative.",
};

export default function VoronSwarmPage() {
  return (
    <>
      <Hero />
      <SectionVision />
      <SectionDroneSwarmAnimation />
      <SectionSwarm />
      <SectionDefense />
      <SectionSystemView />
      <SectionAI />
      <SectionFuture />
      <SectionContact />
    </>
  );
}
