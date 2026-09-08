import React from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import InfoCard from "../components/InfoCard";

const examInfo = [
  {
    emoji: "📅",
    title: "Matric Date Sheet",
    description:
      "Check the latest 9th and 10th class examination date sheets for BISE Lahore.",
    badge: "View Date Sheet",
    link: "/pdfs/result/bise-lahore-matric-date-sheet-2026.pdf",
  },
  {
    emoji: "📚",
    title: "Intermediate Date Sheet",
    description:
      "Check the latest 11th and 12th class examination schedules for BISE Lahore.",
    badge: "View Date Sheet",
    link: "/pdfs/result/bise-lahore-intermediate-date-sheet-2026.pdf",
  },
  {
    emoji: "🏆",
    title: "All Punjab Boards Results",
    description:
      "Check matric and intermediate examination results from all educational boards across Punjab.",
    badge: "Check Result",
    to: "/results/check",
  },
];

export default function Results() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow="BISE Lahore"
        title="Matric & Intermediate Date Sheets & Results"
        crumb="Results & Date Sheet"
        description="Get the latest BISE Lahore matric and intermediate date sheets, examination schedules, and results."
      />

      {/* Result & Date Sheet Cards */}
      <section className="container-px mx-auto max-w-7xl py-14">
        <SectionTitle
          align="left"
          eyebrow="BISE Lahore"
          title="Result & Date Sheet"
          description="Find examination schedules and result information for matric and intermediate students."
        />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {examInfo.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}
