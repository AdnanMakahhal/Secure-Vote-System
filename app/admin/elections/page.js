"use client";

import { useState, useMemo } from "react";
import { CirclePlus } from "lucide-react";
import { EyeOff, SquarePen, Trash2, Clock4, X } from "lucide-react";

const formatNumber = (num) => {
  if (num === undefined || num === null) return "0";
  return Number(num).toLocaleString();
};

const parseNumber = (str) => {
  if (typeof str === "number") return str;
  if (!str || str === "-") return 0;
  return parseInt(str.replace(/,/g, ""), 10);
};

const formatDateForDisplay = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const initialElections = [
  {
    id: "1",
    title: "Presidential Election 2026",
    date: "Apr 15, 2026",
    rawDate: "2026-04-15",
    type: "Single-choice • 1 of 4",
    status: "Active",
    turnout: "39.3%",
    votes: "487,230",
    voters: "1,240,580",
  },
  {
    id: "2",
    title: "University Student Council",
    date: "Apr 2, 2026",
    rawDate: "2026-04-02",
    type: "Single-choice • 1 of 4",
    status: "Active",
    turnout: "27.4%",
    votes: "3,420",
    voters: "12,500",
  },
  {
    id: "3",
    title: "Municipal District 7 Rep.",
    date: "May 10, 2026",
    rawDate: "2026-05-10",
    type: "Single-choice • 1 of 4",
    status: "Upcoming",
    turnout: "-",
    votes: "-",
    voters: "85,645",
  },
  {
    id: "4",
    title: "Faculty Board Referendum",
    date: "Mar 20, 2026",
    rawDate: "2026-03-20",
    type: "Single-choice • 1 of 4",
    status: "Closed",
    turnout: "92.6%",
    votes: "3,891",
    voters: "112,340",
  },
];

const statusStyles = {
  Active: "border border-[#A7E3B1] bg-[#F0FDF4] text-[#15803D]",
  Upcoming: "border border-[#F5D48A] bg-[#FFF7E6] text-[#D97706]",
  Closed: "border border-[#D1D5DB] bg-[#F3F4F6] text-[#374151]",
};

export default function Page() {
  const [elections, setElections] = useState(initialElections);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    type: "Single-choice • 1 of 4",
    status: "Upcoming",
    voters: "",
  });

  const stats = useMemo(() => {
    let totalElections = elections.length;
    let activeNow = elections.filter((e) => e.status === "Active").length;
    let totalRegistered = 0;
    let votesToday = 0;

    elections.forEach((election) => {
      const voterCount = parseNumber(election.voters);
      totalRegistered += voterCount;

      if (election.votes !== "-") {
        const voteCount = parseNumber(election.votes);
        votesToday += voteCount;
      }
    });

    return { totalElections, activeNow, totalRegistered, votesToday };
  }, [elections]);

  const resetForm = () => {
    setFormData({
      title: "",
      date: "",
      type: "Single-choice • 1 of 4",
      status: "Upcoming",
      voters: "",
    });
    setEditingId(null);
  };

  const handleNewElectionClick = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const handleEditClick = (election) => {
    setEditingId(election.id);
    setFormData({
      title: election.title,
      date: election.rawDate || "",
      type: election.type,
      status: election.status,
      voters: parseNumber(election.voters).toString(),
    });
    setIsModalOpen(true);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this election?")) {
      setElections(elections.filter((e) => e.id !== id));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.title.trim()) {
      alert("Please enter an election title");
      return;
    }
    if (!formData.date) {
      alert("Please select a date");
      return;
    }
    const votersNum = parseInt(formData.voters, 10);
    if (isNaN(votersNum) || votersNum <= 0) {
      alert("Please enter a valid number of registered voters (greater than 0)");
      return;
    }

    const formattedDate = formatDateForDisplay(formData.date);
    const formattedVoters = formatNumber(votersNum);

    if (editingId) {
      setElections(
        elections.map((e) =>
          e.id === editingId
            ? {
                ...e,
                title: formData.title,
                date: formattedDate,
                rawDate: formData.date,
                type: formData.type,
                status: formData.status,
                voters: formattedVoters,
                votes: e.votes,
                turnout: e.turnout,
              }
            : e
        )
      );
    } else {
      const newElection = {
        id: Date.now().toString(),
        title: formData.title,
        date: formattedDate,
        rawDate: formData.date,
        type: formData.type,
        status: formData.status,
        turnout: "-",
        votes: "-",
        voters: formattedVoters,
      };
      setElections([...elections, newElection]);
    }

    setIsModalOpen(false);
    resetForm();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    resetForm();
  };

  return (
    <div className="p-6 sm:p-8 lg:p-12">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-[#4E5562] sm:text-3xl">
          Election Management
        </h1>

        <button
          onClick={handleNewElectionClick}
          className="group relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-lg border border-black/20 border-b-[3px] border-r-[3px] border-b-black/60 border-r-black/60 bg-[#435FF2] px-5 text-[15px] font-medium text-white shadow-md transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:border-b-[2px] hover:border-r-[2px] active:translate-x-[2px] active:translate-y-[2px]"
        >
          <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[130%]" />
          <CirclePlus className="relative z-10 size-4" />
          <span className="relative z-10">New Election</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-8">
        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#EFF6FF]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>
          <p className="text-2xl font-bold text-[#4E5562]">{stats.totalElections}</p>
          <p className="font-medium text-[#4E5562]">Total Elections</p>
        </div>

        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#F0FDF4]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>
          <p className="text-2xl font-bold text-[#4E5562]">{stats.activeNow}</p>
          <p className="font-medium text-[#4E5562]">Active Now</p>
        </div>

        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#FAF5FF]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>
          <p className="text-2xl font-bold text-[#4E5562]">{formatNumber(stats.totalRegistered)}</p>
          <p className="font-medium text-[#4E5562]">Total Registered</p>
        </div>

        <div className="rounded-xl border border-[#4E5562]/30 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4E5562]/20 bg-[#FFFBEB]">
            <div className="h-6 w-6 rounded-full border border-[#4E5562]/50 bg-white" />
          </div>
          <p className="text-2xl font-bold text-[#4E5562]">{formatNumber(stats.votesToday)}</p>
          <p className="font-medium text-[#4E5562]">Votes Today</p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-[#4E5562]/20 bg-white shadow-sm">
        <table className="min-w-[1000px] w-full">
          <thead>
            <tr className="border-b border-[#4E5562]/20 text-left">
              <th className="px-5 py-4 text-xl font-bold text-[#6B7280]">Election</th>
              <th className="px-5 py-4 text-xl font-bold text-[#6B7280]">Ballot Type</th>
              <th className="px-5 py-4 text-xl font-bold text-[#6B7280]">Status</th>
              <th className="px-5 py-4 text-xl font-bold text-[#6B7280]">Turnout</th>
              <th className="px-5 py-4 text-xl font-bold text-[#6B7280]">Voters</th>
              <th className="px-5 py-4 text-xl font-bold text-[#6B7280] text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {elections.map((election) => (
              <tr key={election.id} className="border-b border-[#4E5562]/20 last:border-0">
                <td className="px-5 py-4">
                  <h3 className="text-xl font-bold text-[#111827]">{election.title}</h3>
                  <div className="mt-1 flex items-center gap-1 text-[#6B7280]">
                    <Clock4 className="h-4 w-4" />
                    <span className="font-medium">{election.date}</span>
                  </div>
                </td>
                <td className="px-5 py-4 font-semibold text-[#4B5563]">{election.type}</td>
                <td className="px-5 py-4">
                  <span
                    className={`rounded-xl px-4 py-2 font-semibold ${
                      statusStyles[election.status]
                    }`}
                  >
                    {election.status}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <p className="text-2xl font-medium text-[#4B5563]">{election.turnout}</p>
                  {election.votes !== "-" && (
                    <p className="text-sm text-[#6B7280]">{election.votes}</p>
                  )}
                </td>
                <td className="px-5 py-4 text-2xl text-[#4B5563]">{election.voters}</td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg border border-black/20 border-b-[3px] border-r-[3px] border-b-black/60 border-r-black/60 bg-white text-[#4E5562] shadow-md transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:border-b-[2px] hover:border-r-[2px] hover:bg-[#435FF2] hover:text-white active:translate-x-[2px] active:translate-y-[2px]">
                      <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-blue-200/50 blur-md opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />
                      <EyeOff className="relative z-10 h-5 w-5" />
                    </button>

                    <button
                      onClick={() => handleEditClick(election)}
                      className="group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg border border-black/20 border-b-[3px] border-r-[3px] border-b-black/60 border-r-black/60 bg-white text-[#4E5562] shadow-md transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:border-b-[2px] hover:border-r-[2px] hover:bg-[#D6A85F] hover:text-white active:translate-x-[2px] active:translate-y-[2px]"
                    >
                      <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-amber-200/60 blur-md opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />
                      <SquarePen className="relative z-10 h-5 w-5" />
                    </button>

                    <button
                      onClick={() => handleDeleteClick(election.id)}
                      className="group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg border border-black/20 border-b-[3px] border-r-[3px] border-b-black/60 border-r-black/60 bg-white text-[#4E5562] shadow-md transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:border-[#EF4444]/40 hover:border-b-[#B91C1C] hover:border-r-[#B91C1C] hover:border-b-[2px] hover:border-r-[2px] hover:bg-[#EF4444] hover:text-white active:translate-x-[2px] active:translate-y-[2px]"
                    >
                      <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-white/90 blur-lg transition-all duration-700 group-hover:left-[130%]" />
                      <Trash2 className="relative z-10 h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md rounded-2xl border border-[#4E5562]/20 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-[#4E5562]/20 px-6 py-4">
              <h2 className="text-xl font-bold text-[#4E5562]">
                {editingId ? "Edit Election" : "Create New Election"}
              </h2>
              <button
                onClick={handleCancel}
                className="rounded-lg p-1 text-[#4E5562] hover:bg-[#F3F4F6] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-6 py-5 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-[#4E5562]">
                  Election Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Presidential Election 2026"
                  className="w-full rounded-lg border border-[#4E5562]/30 px-4 py-2 text-[#111827] focus:border-[#435FF2] focus:outline-none focus:ring-1 focus:ring-[#435FF2]"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[#4E5562]">
                  Election Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-[#4E5562]/30 px-4 py-2 text-[#111827] focus:border-[#435FF2] focus:outline-none focus:ring-1 focus:ring-[#435FF2]"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[#4E5562]">
                  Ballot Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-[#4E5562]/30 px-4 py-2 text-[#111827] focus:border-[#435FF2] focus:outline-none focus:ring-1 focus:ring-[#435FF2]"
                >
                  <option value="Single-choice • 1 of 4">Single-choice • 1 of 4</option>
                  <option value="Multi-choice • 3 of 7">Multi-choice • 3 of 7</option>
                  <option value="Ranked Choice">Ranked Choice</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[#4E5562]">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-[#4E5562]/30 px-4 py-2 text-[#111827] focus:border-[#435FF2] focus:outline-none focus:ring-1 focus:ring-[#435FF2]"
                >
                  <option value="Upcoming">Upcoming</option>
                  <option value="Active">Active</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[#4E5562]">
                  Registered Voters *
                </label>
                <input
                  type="number"
                  name="voters"
                  value={formData.voters}
                  onChange={handleInputChange}
                  placeholder="e.g., 50000"
                  min="1"
                  className="w-full rounded-lg border border-[#4E5562]/30 px-4 py-2 text-[#111827] focus:border-[#435FF2] focus:outline-none focus:ring-1 focus:ring-[#435FF2]"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-[#4E5562]/20 px-6 py-4">
              <button
                onClick={handleCancel}
                className="rounded-lg border border-[#4E5562]/30 bg-white px-4 py-2 text-sm font-medium text-[#4E5562] transition-all hover:bg-[#F3F4F6]"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="group relative inline-flex h-10 items-center justify-center gap-2 overflow-hidden rounded-lg border border-black/20 border-b-[3px] border-r-[3px] border-b-black/60 border-r-black/60 bg-[#435FF2] px-5 text-sm font-medium text-white shadow-md transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:border-b-[2px] hover:border-r-[2px] active:translate-x-[2px] active:translate-y-[2px]"
              >
                <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[130%]" />
                {editingId ? "Save Changes" : "Add Election"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}