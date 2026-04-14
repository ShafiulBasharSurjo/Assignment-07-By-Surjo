import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { LuBellRing, LuMessageSquareMore } from "react-icons/lu";
import { HiMiniArchiveBox } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";

const statusStyles = {
  "On-Track": "badge badge-success",
  Overdue: "badge badge-error",
  "Almost Due": "badge badge-warning",
};

const FreindsDetails = () => {
  const { id } = useParams();

  const friends = useLoaderData();

  const expectedFriend = friends.find((friend) => friend.id == id);
  console.log(expectedFriend, "expectedFriend");

  return (
    <>
      <div className="min-h-screen bg-slate-50 p-4 md:p-10 font-sans">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 space-y-4">
            <div
              key={expectedFriend.id}
              className="card bg-base-100 w-full shadow-sm border border-gray-100"
            >
              <figure className="mb-4 mt-6">
                <img
                  src={expectedFriend.picture}
                  alt={expectedFriend.name}
                  className="w-20 h-20 border-2 border-white rounded-full object-cover shadow-sm"
                />
              </figure>
              <div className="flex flex-col items-center">
                <h2 className="text-[#1A2631] text-lg font-black tracking-tight mb-4">
                  {expectedFriend.name}
                </h2>
                <div className="card-actions justify-center flex-col items-center">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {expectedFriend.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#D1FAE5] text-[#065F46] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`mb-4 px-6 py-2 rounded-full text-xs font-bold shadow-sm ${statusStyles[expectedFriend.status]}`}
                  >
                    {expectedFriend.status}
                  </div>
                  <div className="text-center">
                    <p className="text-[#5D6B82] text-lg font-medium mt-1 mb-4">
                      {expectedFriend.bio}
                    </p>
                    <p className="text-[#5D6B82] text-xs mt-1 mb-4">
                      Preferred: Email
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <button className="btn w-full py-3 px-4 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center gap-3 text-slate-700 font-semibold hover:bg-slate-50 transition">
                <LuBellRing />
                Snooze 2 Weeks
              </button>
              <button className="btn w-full py-3 px-4 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center gap-3 text-slate-700 font-semibold hover:bg-slate-50 transition">
                <HiMiniArchiveBox />
                Archive
              </button>
              <button className="btn btn-soft btn-error w-full py-3 px-4 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center gap-3 text-red-500 font-semibold hover:bg-red-50 transition">
                <MdDeleteOutline />
                Delete
              </button>
            </div>
          </div>

          <div className="grid grid-col-1 gap-4 w-full">
            <div className="flex gap-6">
              <div className="text-center items-center justify-center w-48 shadow-sm bg-white p-6 rounded-xl border border-gray-100 flex flex-col">
                <div className="">
                  <h2 className="text-2xl font-bold text-[#1e3a2f] mb-2">
                    {expectedFriend.days_since_contact}
                  </h2>
                  <p className="text-sm font-medium text-slate-500">
                    Days Since Contact
                  </p>
                </div>
              </div>
              <div className="text-center items-center justify-center w-48 shadow-sm bg-white p-6 rounded-xl border border-gray-100 flex flex-col">
                <div className="">
                  <h2 className="text-2xl font-bold text-[#1e3a2f] mb-2">
                    {expectedFriend.goal}
                  </h2>
                  <p className="text-sm font-medium text-slate-500">
                    Goal (Days)
                  </p>
                </div>
              </div>
              <div className="text-center items-center justify-center w-48 shadow-sm bg-white p-6 rounded-xl border border-gray-100 flex flex-col">
                <div className="">
                  <h2 className="text-2xl font-bold text-[#1e3a2f] mb-2">
                    {expectedFriend.next_due_date}
                  </h2>
                  <p className="text-sm font-medium text-slate-500">Next due</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start">
              <div>
                <h3 className="text-[#1e3a2f] font-bold text-lg mb-2">
                  Relationship Goal
                </h3>
                <p className="text-slate-500 text-sm">
                  Connect every{" "}
                  <span className="font-black text-slate-800">30 days</span>
                </p>
              </div>
              <button className="bg-slate-50 px-4 py-1.5 rounded-lg border border-gray-200 text-xs font-bold text-slate-600 hover:bg-slate-100 transition shadow-sm">
                Edit
              </button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-[#1e3a2f] font-bold text-lg mb-6">
                Quick Check-In
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <button className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-transparent hover:border-emerald-200 hover:bg-emerald-50 transition group">
                  <FiPhoneCall />
                  <span className="text-sm font-semibold text-slate-700">
                    Call
                  </span>
                </button>

                <button className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-transparent hover:border-emerald-200 hover:bg-emerald-50 transition group">
                  <LuMessageSquareMore />
                  <span className="text-sm font-semibold text-slate-700">
                    Text
                  </span>
                </button>

                <button className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-transparent hover:border-emerald-200 hover:bg-emerald-50 transition group">
                  <IoVideocamOutline />
                  <span className="text-sm font-semibold text-slate-700">
                    Video
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreindsDetails;
