
export default function Page() {
  return (
    <div className="mx-auto p-4 sm:p-6 lg:p-8 xl:p-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-[#4E5562] sm:text-3xl">
          Security & Compliance
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 mb-8">
        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm ">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#F0FDF4]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>

          <p className="text-2xl font-bold text-[#4E5562]">2 / 3</p>
          <p className="font-medium text-[#4E5562]">Controls Active</p>
        </div>

        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#FFFBEB]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>

          <p className="text-2xl font-bold text-[#4E5562]">1</p>
          <p className="font-medium text-[#4E5562]">Needs Attention</p>
        </div>

        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#EFF6FF]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>

          <p className="text-2xl font-bold text-[#4E5562]">April 22</p>
          <p className="font-medium text-[#4E5562]">Last Audit</p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="rounded-2xl border border-[#4E5562]/20 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#4E5562]/20 bg-[#F4FBF6]">
                <div className="h-7 w-7 rounded-full border border-[#4E5562]/50 bg-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#4E5562]">
                  RSA-2048 Digital Signatures
                </h3>

                <p className="mt-1 text-lg text-[#6B7280]">
                  Each vote signed by voter's private key; verified by all Raft
                  nodes before commit.
                </p>

                <p className="mt-2 text-sm text-[#6B7280]">
                  AES-256-GCM · ECDH · TLS 1.3
                </p>
              </div>
            </div>

            <span className="inline-flex items-center rounded-xl border border-[#A7E3B1] bg-[#F0FDF4] px-4 py-2 text-sm font-semibold text-[#15803D]">
              Active
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-[#4E5562]/20 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#4E5562]/20 bg-[#F4FBF6]">
                <div className="h-7 w-7 rounded-full border border-[#4E5562]/50 bg-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#4E5562]">
                  RSA-2048 Digital Signatures
                </h3>

                <p className="mt-1 text-lg text-[#6B7280]">
                  Each vote signed by voter's private key; verified by all Raft
                  nodes before commit.
                </p>

                <p className="mt-2 text-sm text-[#6B7280]">
                  RSA-2048 · SHA-256 hash
                </p>
              </div>
            </div>

            <span className="inline-flex items-center rounded-xl border border-[#A7E3B1] bg-[#F0FDF4] px-4 py-2 text-sm font-semibold text-[#15803D]">
              Active
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-[#4E5562]/20 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#4E5562]/20 bg-[#FFF7E6]">
                <div className="h-7 w-7 rounded-full border border-[#D6A85F]/60 bg-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#4E5562]">
                  DDoS & Rate Limiting
                </h3>

                <p className="mt-1 text-lg text-[#6B7280]">
                  Per-IP + per-VID throttling active. node-03 under elevated
                  load — monitoring.
                </p>

                <p className="mt-2 text-sm text-[#6B7280]">
                  Server-03 CPU 91% · Throttle active
                </p>
              </div>
            </div>

            <span className="inline-flex items-center rounded-xl border border-[#F5D48A] bg-[#FFF7E6] px-4 py-2 text-sm font-semibold text-[#B45309]">
              Attention
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
