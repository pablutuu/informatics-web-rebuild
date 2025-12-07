"use client";

import SmoothScroll from '../../component/home/smooth-scroll';
import Hero from '../../component/organization/hero';
import Organization from '../../component/organization/organization';

export default function OrganizationPage() {
  return (
    <SmoothScroll>
      <div className="w-full min-h-screen bg-[#E3F3FF] text-[#1E1E1E] relative flex flex-col">

        <Hero />
        <Organization />

      </div>
    </SmoothScroll>
  );
}
