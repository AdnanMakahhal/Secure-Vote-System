import { Clock4, Users } from "lucide-react";

export default function Page() {
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

                <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg border border-black/20 border-b-[3px] border-r-[3px] border-b-black/60 border-r-black/60 bg-[#435FF2] px-8 text-lg font-medium text-white shadow-md transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:border-b-[2px] hover:border-r-[2px] active:translate-x-[2px] active:translate-y-[2px]">
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
    </div>
  );
}
