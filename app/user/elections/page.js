"use client";

import React, { useState } from "react";
import { Clock4, Users, X } from "lucide-react";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(1);

  const candidates = [
    {
      id: 1,
      name: "Adnan Makahhal",
      title: "CEO & Founder",
      desc: "Education part of schools 15 years experience",
      image:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      name: "Rudeus Greyrat",
      title: "Admin of GOV",
      desc: "Control part of the gov in the schools section",
      image:
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      name: "Ibrahim Alnajjar",
      title: "Co-Admin",
      desc: "Helper of admin documentations",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=100&h=100&fit=crop",
    },
    {
      id: 4,
      name: "Adnan Makahhal",
      title: "Eng Streets",
      desc: "Gov street parts sections Amman, Gov 78 years experience",
      image:
        "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=100&h=100&fit=crop",
    },
  ];

  return (
    <div className="p-6 sm:p-8 lg:p-12">
      <h1 className="mb-8 text-2xl font-bold text-[#4E5562] sm:text-3xl">
        My Elections
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-8">
        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#EFF6FF]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>

          <p className="text-2xl font-bold text-[#4E5562]">5</p>
          <p className="font-medium text-[#4E5562]">Active Elections</p>
        </div>

        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#F0FDF4]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>

          <p className="text-2xl font-bold text-[#4E5562]">3</p>
          <p className="font-medium text-[#4E5562]">Votes Cast (You)</p>
        </div>

        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#FAF5FF]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>

          <p className="text-2xl font-bold text-[#4E5562]">1,342,280</p>
          <p className="font-medium text-[#4E5562]">Total Registered Voters</p>
        </div>

        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#FFFBEB]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>

          <p className="text-2xl font-bold text-[#4E5562]">74.8%</p>
          <p className="font-medium text-[#4E5562]">Avg. Participation</p>
        </div>
      </div>

      <div className="grid grid-cols">
        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-4 shadow-sm">
          <div className="flex flex-wrap gap-2 mb-4">
            <button className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-lg border border-black/20 border-b-[3px] border-r-[3px] border-b-black/60 border-r-black/60 bg-[#435FF2] px-5 text-sm font-medium text-white shadow-md transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:border-b-[2px] hover:border-r-[2px] active:translate-x-[2px] active:translate-y-[2px]">
              <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[130%]" />
              <span className="relative z-10">Active</span>
            </button>

            <button className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-lg border border-[#4E5562]/20 bg-white px-5 text-sm font-medium text-[#4E5562] shadow-sm transition-all duration-200 hover:bg-[#435FF2] hover:text-white hover:shadow-md">
              <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[130%]" />
              <span className="relative z-10">Upcoming</span>
            </button>

            <button className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-lg border border-[#4E5562]/20 bg-white px-5 text-sm font-medium text-[#4E5562] shadow-sm transition-all duration-200 hover:bg-[#435FF2] hover:text-white hover:shadow-md">
              <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[130%]" />
              <span className="relative z-10">Closed</span>
            </button>
          </div>

          <div>
            <div className="rounded-xl border border-[#4E5562]/30 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold text-[#0F172A]">
                      Presidential Election 2026
                    </h3>

                    <span className="rounded-lg border border-[#A7E3B1] bg-[#F0FDF4] px-4 py-1 text-base font-semibold text-[#16A34A]">
                      Active
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 text-lg text-[#64748B]">
                    <span>Single-choice • 4 candidates</span>

                    <div className="flex items-center gap-2">
                      <Clock4 className="size-5 text-[#6B7280]" />
                      <span>Apr 15, 2026</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="size-5 text-[#6B7280]" />
                      <span>1,240,580 registered</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg border border-black/20 border-b-[3px] border-r-[3px] border-b-black/60 border-r-black/60 bg-[#435FF2] px-8 text-lg font-medium text-white shadow-md transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:border-b-[2px] hover:border-r-[2px] active:translate-x-[2px] active:translate-y-[2px]"
                >
                  <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[130%]" />
                  <span className="relative z-10">Vote Now</span>
                </button>
              </div>

              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-lg text-[#64748B]">
                    Turnout: 487,230 / 1,240,580 registered
                  </p>

                  <span className="text-2xl font-bold text-[#0F172A]">
                    39.3%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-[#E9EEF5]">
                  <div
                    className="h-full rounded-full bg-[#435FF2]"
                    style={{ width: "39.3%" }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-[#4E5562]/30 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold text-[#0F172A]">
                      University Student Council
                    </h3>

                    <span className="rounded-lg border border-[#A7E3B1] bg-[#F0FDF4] px-4 py-1 text-base font-semibold text-[#16A34A]">
                      Active
                    </span>

                    <span className="rounded-lg border border-[#A7E3B1] bg-[#F0FDF4] px-4 py-1 text-base font-semibold text-[#16A34A]">
                      Voted
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 text-lg text-[#64748B]">
                    <span>Single-choice • 8 candidates</span>

                    <div className="flex items-center gap-2">
                      <Clock4 className="size-5 text-[#6B7280]" />
                      <span>Apr 2, 2026</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="size-5 text-[#6B7280]" />
                      <span>12,500 registered</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-lg text-[#64748B]">
                    Turnout: 3,420 / 12,500 registered
                  </p>

                  <span className="text-2xl font-bold text-[#0F172A]">
                    27.4%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-[#E9EEF5]">
                  <div
                    className="h-full rounded-full bg-[#435FF2]"
                    style={{ width: "27.4%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 sm:p-6">
          <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-[20px] bg-white p-5 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="mb-4 text-black hover:text-gray-600 transition-colors cursor-pointer"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            <div className="flex items-center justify-between mb-1">
              <h2 className="text-lg font-bold text-[#4E5562]">
                Presidential Election 2026
              </h2>
              <div className="flex items-center gap-1.5 rounded-xl border border-[#4E5562]/30 px-2.5 py-1 text-[13px] font-semibold text-[#4E5562]">
                <Clock4 size={16} />
                <span>48:36:40 Left</span>
              </div>
            </div>

            <p className="text-[13px] font-medium text-[#64748B] mb-5">
              Single-choice &middot; Select 1 of 4 &middot; One vote per voter
            </p>

            <div className="flex flex-col gap-2.5 mb-6">
              {candidates.map((candidate) => (
                <label
                  key={candidate.id}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-colors hover:bg-blue-50/30 ${
                    selectedCandidate === candidate.id
                      ? "border-[#435FF2]"
                      : "border-[#4E5562]/40"
                  }`}
                >
                  <img
                    src={candidate.image}
                    alt={candidate.name}
                    className="h-12 w-12 rounded-full object-cover border border-[#4E5562]/20"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#334155] text-[15px]">
                      {candidate.name}
                    </h4>
                    <p className="text-[12px] font-semibold text-[#8099FA]">
                      {candidate.title}
                    </p>
                    <p className="text-[11px] font-medium text-[#8099FA] leading-tight">
                      {candidate.desc}
                    </p>
                  </div>

                  <div className="mr-1 flex-shrink-0">
                    {selectedCandidate === candidate.id ? (
                      <div className="flex h-5 w-5 items-center justify-center rounded-full border-[2px] border-[#435FF2]">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#435FF2]" />
                      </div>
                    ) : (
                      <div className="h-5 w-5 rounded-full border border-[#4E5562]/50" />
                    )}
                  </div>

                  <input
                    type="radio"
                    name="candidate"
                    className="hidden"
                    checked={selectedCandidate === candidate.id}
                    onChange={() => setSelectedCandidate(candidate.id)}
                  />
                </label>
              ))}
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="group relative flex w-full h-12 items-center justify-center overflow-hidden rounded-lg border border-black/20 border-b-[3px] border-r-[3px] border-b-black/60 border-r-black/60 bg-[#435FF2] px-8 text-lg font-medium text-white shadow-md transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:border-b-[2px] hover:border-r-[2px] active:translate-x-[2px] active:translate-y-[2px]"
            >
              <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[130%]" />
              <span className="relative z-10">Confirm Voting</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
