import { RefreshCcw } from "lucide-react";
import { Cpu, HardDrive, Activity, Wifi } from "lucide-react";

export const metadata = {
  title: "Servers",
};

export default function Page() {
  return (
    <div className="p-6 sm:p-8 lg:p-12">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-[#4E5562] sm:text-3xl">
          Distributed Servers Management
        </h1>

        <button className="group relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-lg border border-black/20 border-b-[3px] border-r-[3px] border-b-black/60 border-r-black/60 bg-[#435FF2] px-5 text-[15px] font-medium text-white shadow-md transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:border-b-[2px] hover:border-r-[2px] active:translate-x-[2px] active:translate-y-[2px]">
          <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[130%]" />

          <RefreshCcw className="relative z-10 size-4" />
          <span className="relative z-10">Refresh</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#EFF6FF]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>

          <p className="text-2xl font-bold text-[#4E5562]">3 / 3</p>
          <p className="font-medium text-[#4E5562]">Active Servers</p>
        </div>

        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#F0FDF4]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>

          <p className="text-2xl font-bold text-[#4E5562]">487,230</p>
          <p className="font-medium text-[#4E5562]">Votes Committed</p>
        </div>

        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#FAF5FF]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>

          <p className="text-2xl font-bold text-[#4E5562]">13.7ms</p>
          <p className="font-medium text-[#4E5562]">Avg Latency</p>
        </div>

        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#FFFBEB]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>

          <p className="text-2xl font-bold text-[#4E5562]">2 / 3 Online</p>
          <p className="font-medium text-[#4E5562]">Consensus Protocol</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <div className="rounded-xl border border-[#4E5562]/20 bg-white p-5 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#F0FDF4]">
              <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
            </div>
            <span className="text-base font-semibold text-[#4E5562]">
              Server - 01
            </span>
            <span className="rounded-full border border-blue-200 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
              Leader
            </span>
            <span className="rounded-full border border-green-200 bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
              Online
            </span>
            <span className="ml-auto hidden text-sm text-[#4E5562]/60 sm:block">
              192.168.10.11&nbsp;&nbsp;|&nbsp;&nbsp;North
              DC&nbsp;&nbsp;|&nbsp;&nbsp;Heartbeat: 0.3s
              ago&nbsp;&nbsp;|&nbsp;&nbsp;Uptime: 99.98%
            </span>
          </div>
          <p className="mb-4 text-xs text-[#4E5562]/60 sm:hidden">
            192.168.10.11 · North DC · Heartbeat: 0.3s ago · Uptime: 99.98%
          </p>
          <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
            <div className="rounded-lg border border-[#4E5562]/15 bg-[#F8FAFC] p-4">
              <div className="mb-2 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-blue-500" />
                <span className="text-xs font-medium text-[#4E5562]/70">
                  CPU Usage
                </span>
              </div>
              <p className="text-lg font-bold text-[#4E5562]">34%</p>
              <p className="mt-0.5 text-xs text-[#4E5562]/50">4 cores active</p>
            </div>
            <div className="rounded-lg border border-[#4E5562]/15 bg-[#F8FAFC] p-4">
              <div className="mb-2 flex items-center gap-2">
                <HardDrive className="h-4 w-4 text-purple-500" />
                <span className="text-xs font-medium text-[#4E5562]/70">
                  Memory
                </span>
              </div>
              <p className="text-lg font-bold text-[#4E5562]">6.2 GB</p>
              <p className="mt-0.5 text-xs text-[#4E5562]/50">of 16 GB used</p>
            </div>
            <div className="rounded-lg border border-[#4E5562]/15 bg-[#F8FAFC] p-4">
              <div className="mb-2 flex items-center gap-2">
                <Activity className="h-4 w-4 text-emerald-500" />
                <span className="text-xs font-medium text-[#4E5562]/70">
                  Throughput
                </span>
              </div>
              <p className="text-lg font-bold text-[#4E5562]">1.2k/s</p>
              <p className="mt-0.5 text-xs text-[#4E5562]/50">requests/sec</p>
            </div>
            <div className="rounded-lg border border-[#4E5562]/15 bg-[#F8FAFC] p-4">
              <div className="mb-2 flex items-center gap-2">
                <Wifi className="h-4 w-4 text-orange-500" />
                <span className="text-xs font-medium text-[#4E5562]/70">
                  Network
                </span>
              </div>
              <p className="text-lg font-bold text-[#4E5562]">48 Mbps</p>
              <p className="mt-0.5 text-xs text-[#4E5562]/50">
                inbound + outbound
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#4E5562]/20 bg-white p-5 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#F0FDF4]">
              <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
            </div>
            <span className="text-base font-semibold text-[#4E5562]">
              Server - 02
            </span>
            <span className="rounded-full border border-gray-200 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
              Follower
            </span>
            <span className="rounded-full border border-green-200 bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
              Online
            </span>
            <span className="ml-auto hidden text-sm text-[#4E5562]/60 sm:block">
              192.168.10.12&nbsp;&nbsp;|&nbsp;&nbsp;Central
              DC&nbsp;&nbsp;|&nbsp;&nbsp;Heartbeat: 0.4s
              ago&nbsp;&nbsp;|&nbsp;&nbsp;Uptime: 99.98%
            </span>
          </div>
          <p className="mb-4 text-xs text-[#4E5562]/60 sm:hidden">
            192.168.10.12 · Central DC · Heartbeat: 0.4s ago · Uptime: 99.98%
          </p>
          <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
            <div className="rounded-lg border border-[#4E5562]/15 bg-[#F8FAFC] p-4">
              <div className="mb-2 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-blue-500" />
                <span className="text-xs font-medium text-[#4E5562]/70">
                  CPU Usage
                </span>
              </div>
              <p className="text-lg font-bold text-[#4E5562]">21%</p>
              <p className="mt-0.5 text-xs text-[#4E5562]/50">4 cores active</p>
            </div>
            <div className="rounded-lg border border-[#4E5562]/15 bg-[#F8FAFC] p-4">
              <div className="mb-2 flex items-center gap-2">
                <HardDrive className="h-4 w-4 text-purple-500" />
                <span className="text-xs font-medium text-[#4E5562]/70">
                  Memory
                </span>
              </div>
              <p className="text-lg font-bold text-[#4E5562]">4.8 GB</p>
              <p className="mt-0.5 text-xs text-[#4E5562]/50">of 16 GB used</p>
            </div>
            <div className="rounded-lg border border-[#4E5562]/15 bg-[#F8FAFC] p-4">
              <div className="mb-2 flex items-center gap-2">
                <Activity className="h-4 w-4 text-emerald-500" />
                <span className="text-xs font-medium text-[#4E5562]/70">
                  Throughput
                </span>
              </div>
              <p className="text-lg font-bold text-[#4E5562]">870/s</p>
              <p className="mt-0.5 text-xs text-[#4E5562]/50">requests/sec</p>
            </div>
            <div className="rounded-lg border border-[#4E5562]/15 bg-[#F8FAFC] p-4">
              <div className="mb-2 flex items-center gap-2">
                <Wifi className="h-4 w-4 text-orange-500" />
                <span className="text-xs font-medium text-[#4E5562]/70">
                  Network
                </span>
              </div>
              <p className="text-lg font-bold text-[#4E5562]">31 Mbps</p>
              <p className="mt-0.5 text-xs text-[#4E5562]/50">
                inbound + outbound
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-amber-300 bg-white p-5 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#FFFBEB]">
              <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
            </div>
            <span className="text-base font-semibold text-[#4E5562]">
              Server - 03
            </span>
            <span className="rounded-full border border-gray-200 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
              Follower
            </span>
            <span className="rounded-full border border-amber-200 bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
              High Load
            </span>
            <span className="ml-auto hidden text-sm text-[#4E5562]/60 sm:block">
              192.168.10.13&nbsp;&nbsp;|&nbsp;&nbsp;South
              DC&nbsp;&nbsp;|&nbsp;&nbsp;Heartbeat: 1.1s
              ago&nbsp;&nbsp;|&nbsp;&nbsp;Uptime: 99.87%
            </span>
          </div>
          <p className="mb-4 text-xs text-[#4E5562]/60 sm:hidden">
            192.168.10.13 · South DC · Heartbeat: 1.1s ago · Uptime: 99.87%
          </p>
          <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
            <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-red-500" />
                <span className="text-xs font-medium text-[#4E5562]/70">
                  CPU Usage
                </span>
              </div>
              <p className="text-lg font-bold text-[#4E5562]">91%</p>
              <p className="mt-0.5 text-xs text-[#4E5562]/50">4 cores active</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-4">
              <div className="mb-2 flex items-center gap-2">
                <HardDrive className="h-4 w-4 text-red-500" />
                <span className="text-xs font-medium text-[#4E5562]/70">
                  Memory
                </span>
              </div>
              <p className="text-lg font-bold text-[#4E5562]">14.1 GB</p>
              <p className="mt-0.5 text-xs text-[#4E5562]/50">of 16 GB used</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Activity className="h-4 w-4 text-emerald-500" />
                <span className="text-xs font-medium text-[#4E5562]/70">
                  Throughput
                </span>
              </div>
              <p className="text-lg font-bold text-[#4E5562]">3.1k/s</p>
              <p className="mt-0.5 text-xs text-[#4E5562]/50">requests/sec</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Wifi className="h-4 w-4 text-orange-500" />
                <span className="text-xs font-medium text-[#4E5562]/70">
                  Network
                </span>
              </div>
              <p className="text-lg font-bold text-[#4E5562]">112 Mbps</p>
              <p className="mt-0.5 text-xs text-[#4E5562]/50">
                inbound + outbound
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
