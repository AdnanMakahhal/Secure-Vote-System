import { FileText } from "lucide-react";

export const metadata = {
  title: "Audit Log",
};

export default function Page() {
    const logs = [
    {
      time: "14:23:07",
      level: "INFO",
      event:
        "Vote committed • Hash: 0x7f4ae293 • Replicated: Server-01 Server-02 Server-03 • Raft 3/3",
    },
    {
      time: "14:23:05",
      level: "INFO",
      event:
        "Voter auth OK • VID: USR-7823-4521 • JWT issued • Blind signature applied • Duplicate check: PASS",
    },
    {
      time: "14:22:58",
      level: "WARNING",
      event:
        "Server-03 CPU at 91% — approaching threshold. Active monitoring.",
    },
    {
      time: "14:22:45",
      level: "INFO",
      event:
        "Raft batch #8823 committed • 1,420 entries • Quorum 3/3 achieved",
    },
    {
      time: "14:21:30",
      level: "ERROR",
      event:
        "Auth failure • VID: USR-9924-0012 • OTP attempt 3/3 • Account locked 30 min",
    },
    {
      time: "14:21:10",
      level: "INFO",
      event:
        "Snapshot checkpoint epoch-8822 replicated to all follower nodes",
    },
    {
      time: "14:20:55",
      level: "INFO",
      event:
        "Batch #8822 committed • 1,388 votes • Digital sigs verified: 1,388/1,388",
    },
  ];

  const levelStyles = {
    INFO: "text-[#22C55E]",
    WARNING: "text-[#D97706]",
    ERROR: "text-[#DC2626]",
  };
  return (
    <div className="mx-auto p-4 sm:p-6 lg:p-8 xl:p-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ">
        <h1 className="text-2xl font-bold text-[#4E5562] sm:text-3xl">
          Audit Log Analysis
        </h1>

        <div className="flex items-center gap-2 self-start rounded-md border border-[#DBF7E0] bg-[#F3FDF5] px-3 py-[0.4rem] text-sm font-medium text-[#4E5562] shadow-sm sm:self-auto">
          <div className="h-2 w-2 rounded-full border border-[#60C561] bg-[#A4DFA6]"></div>
          <p>Live</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 mb-8">
        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#EFF6FF]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>

          <p className="text-2xl font-bold text-[#4E5562]">4</p>
          <p className="font-medium text-[#4E5562]">Total Elections</p>
        </div>

        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#F0FDF4]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>

          <p className="text-2xl font-bold text-[#4E5562]">2</p>
          <p className="font-medium text-[#4E5562]">Active Now</p>
        </div>

        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#FFFBEB]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>

          <p className="text-2xl font-bold text-[#4E5562]">490,650</p>
          <p className="font-medium text-[#4E5562]">Votes Today</p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-[#4E5562]/20 bg-white shadow-sm">
        <table className="min-w-[900px] w-full">
          <thead>
            <tr className="border-b border-[#4E5562]/20">
              <th className="px-6 py-5 text-left text-lg font-bold tracking-wider text-[#6B7280]">
                TIME
              </th>

              <th className="px-6 py-5 text-left text-lg font-bold tracking-wider text-[#6B7280]">
                LEVEL
              </th>

              <th className="px-6 py-5 text-left text-lg font-bold tracking-wider text-[#6B7280]">
                EVENT
              </th>

              <th className="px-6 py-5 text-right">
                <button className="group relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-lg border border-black/20 border-b-[3px] border-r-[3px] border-b-black/60 border-r-black/60 bg-[#435FF2] px-5 text-[15px] font-medium text-white shadow-md transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:border-b-[2px] hover:border-r-[2px] active:translate-x-[2px] active:translate-y-[2px]">
                  <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[130%]" />

                  <FileText className="relative z-10 h-4 w-4" />
                  <span className="relative z-10">Export</span>
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log, index) => (
              <tr
                key={index}
                className="border-b border-[#4E5562]/20 last:border-0"
              >
                <td className="px-6 py-5 font-mono text-[15px] text-[#4B5563]">
                  {log.time}
                </td>

                <td
                  className={`px-6 py-5 text-[15px] font-bold tracking-wider ${
                    levelStyles[log.level]
                  }`}
                >
                  {log.level}
                </td>

                <td className="px-6 py-5 font-medium text-[#111827]">
                  {log.event}
                </td>

                <td />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
