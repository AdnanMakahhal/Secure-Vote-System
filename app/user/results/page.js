import { TrendingUp } from "lucide-react";

export default function Page() {
  return (
    <div className="p-6 sm:p-8 lg:p-12">
      <h1 className="mb-8 text-2xl font-bold text-[#4E5562] sm:text-3xl">
        Live Results
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-8">
        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#EFF6FF]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>

          <p className="text-2xl font-bold text-[#4E5562]">487,230</p>
          <p className="font-medium text-[#4E5562]">Votes Cast</p>
        </div>

        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#F0FDF4]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>

          <p className="text-2xl font-bold text-[#4E5562]">39.3%</p>
          <p className="font-medium text-[#4E5562]">
            Turnout 487,230 / 1,240,580
          </p>
        </div>

        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#FAF5FF]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>

          <p className="text-2xl font-bold text-[#4E5562]">1,240,580</p>
          <p className="font-medium text-[#4E5562]">Registered Voters</p>
        </div>

        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#FFFBEB]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>

          <p className="text-2xl font-bold text-[#4E5562]">2 / 3 Online</p>
          <p className="font-medium text-[#4E5562]">Raft Servers</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[2fr_1fr_0.8fr]">
        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#111827]">
              Presidential Election 2026
            </h2>

            <div className="flex items-center gap-2 rounded-lg border border-[#A7E3B1] bg-[#F0FDF4] px-3 py-1">
              <div className="h-3 w-3 rounded-full bg-[#67C46A]" />
              <span className="font-medium text-[#16A34A]">Live</span>
            </div>
          </div>

          <p className="mb-4 flex gap-2 font-semibold text-[#435FF2]">
            <TrendingUp /> Currently Leading
          </p>

          <div className="space-y-6">
            {[
              {
                name: "Dr. Sarah Mitchell",
                party: "Progressive Alliance",
                percent: "41.2%",
                votes: "200,738",
                width: "41.2%",
                color: "#435FF2",
              },
              {
                name: "James Okafor",
                party: "National Unity Party",
                percent: "31.7%",
                votes: "154,451",
                width: "31.7%",
                color: "#43A047",
              },
              {
                name: "Dr. Aisha Rahman",
                party: "Citizens First",
                percent: "17.4%",
                votes: "84,778",
                width: "17.4%",
                color: "#7C4DFF",
              },
              {
                name: "Carlos Mendez",
                party: "Free Democrats",
                percent: "9.7%",
                votes: "47,263",
                width: "9.7%",
                color: "#C7772C",
              },
            ].map((candidate) => (
              <div key={candidate.name}>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{candidate.name}</p>
                    <p className="text-xs text-[#6B7280]">{candidate.party}</p>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold">{candidate.percent}</p>
                    <p className="text-xs text-[#6B7280]">{candidate.votes}</p>
                  </div>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-[#E5E7EB]">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: candidate.width,
                      backgroundColor: candidate.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <h2 className="mb-6 text-xl font-bold">Regional Turnout</h2>

          <div className="space-y-6">
            {[
              ["North District", "82.1%"],
              ["South District", "71.4%"],
              ["East District", "68.9%"],
              ["West District", "75.3%"],
              ["Central District", "88.2%"],
            ].map(([name, percent]) => (
              <div key={name}>
                <div className="mb-2 flex justify-between">
                  <span className="font-medium">{name}</span>
                  <span className="font-semibold">{percent}</span>
                </div>

                <div className="h-2 rounded-full bg-[#E5E7EB]">
                  <div
                    className="h-full rounded-full bg-[#435FF2]"
                    style={{ width: percent }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <h2 className="mb-5 text-xl font-bold">Raft Server Replication</h2>

          <div className="space-y-5">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <span className="font-semibold text-[#6B7280]">
                  Server - 01
                </span>

                <span className="rounded-full bg-[#DBEAFE] px-2 py-0.5 text-xs font-medium text-[#2563EB]">
                  Leader
                </span>
              </div>

              <p className="font-bold">200,738</p>
              <p className="text-sm text-[#6B7280]">votes</p>
            </div>

            <div>
              <div className="mb-1 flex items-center gap-2">
                <span className="font-semibold text-[#6B7280]">
                  Server - 02
                </span>

                <span className="rounded-full bg-[#F3F4F6] px-2 py-0.5 text-xs font-medium text-[#6B7280]">
                  Follower
                </span>
              </div>

              <p className="font-bold">154,451</p>
              <p className="text-sm text-[#6B7280]">votes</p>
            </div>

            <div>
              <div className="mb-1 flex items-center gap-2">
                <span className="font-semibold text-[#6B7280]">
                  Server - 03
                </span>

                <span className="rounded-full bg-[#F3F4F6] px-2 py-0.5 text-xs font-medium text-[#6B7280]">
                  Follower
                </span>
              </div>

              <p className="font-bold">132,041</p>
              <p className="text-sm text-[#6B7280]">votes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
