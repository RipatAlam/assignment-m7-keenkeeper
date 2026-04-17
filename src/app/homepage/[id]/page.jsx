import React from "react";
import {
  Calendar,
  Clock,
  Phone,
  MessageCircle,
  Video,
  Archive,
  Trash2,
  Bell,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const KeenKeeperData = async () => {
  const res = await fetch("http://localhost:3000//data.json");
  const data = await res.json();
  return data;
};

const DynamicCard = async ({ params }) => {
  const cardData = await KeenKeeperData();
  //console.log(cardData, "cardData");
  const { id } = await params;
  //console.log(id, "id");

  const card = cardData.find((card) => card.id === parseInt(id));
  //console.log(card, "card");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-7xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        {/* Main Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Profile Card */}
            <div className="md:col-span-1 bg-white rounded-2xl border border-gray-200 p-6 flex flex-col">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image
                    src={card.picture}
                    alt={card.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="mt-4 text-2xl font-semibold text-gray-900">
                  {card.name}
                </h2>

                <div className="flex gap-2 mt-3">
                  <span className="px-4 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-full">
                    {card.status}
                  </span>
                  <span className="px-4 py-1 bg-emerald-100 text-emerald-600 text-sm font-medium rounded-full">
                    {card.hobby}
                  </span>
                </div>

                <p className="mt-4 text-gray-600 text-sm italic">{card.bio}</p>
                <p className="text-gray-500 text-xs mt-1">
                  Preferred: {card.email}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-auto pt-8 space-y-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl text-left">
                  <Bell className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Snooze 2 Weeks</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl text-left">
                  <Archive className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Archive</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 rounded-xl text-left text-red-600">
                  <Trash2 className="w-5 h-5" />
                  <span>Delete</span>
                </button>
              </div>
            </div>

            {/* Right Side Stats & Goal */}
            <div className="md:col-span-2 space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-600">
                    {card.days_since_contact}
                  </div>
                  <div className="text-gray-500 mt-1">Days Since Contact</div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-gray-800">
                    {card.goal}
                  </div>
                  <div className="text-gray-500 mt-1">Goal (Days)</div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-semibold text-gray-800">
                    {card.next_due_date}
                  </div>
                  <div className="text-gray-500 mt-1">Next Due</div>
                </div>
              </div>

              {/* Relationship Goal */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Relationship Goal
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Connect every{" "}
                      <span className="font-medium text-emerald-600">
                        {card.goal} days
                      </span>
                    </p>
                  </div>
                  <button className="px-5 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-50 transition">
                    Edit
                  </button>
                </div>
              </div>

              {/* Quick Check-In */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Check-In
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  <Link href={`/timelinepage?action=call&id=${card.id}`}>
                    <button className="flex flex-col items-center gap-3 py-6 bg-gray-50 hover:bg-emerald-50 hover:text-emerald-600 rounded-2xl transition group">
                      <Phone className="w-8 h-8 text-gray-400 group-hover:text-emerald-600" />
                      <span className="font-medium">Call</span>
                    </button>
                  </Link>

                  <Link href={`/timelinepage?action=text&id=${card.id}`}>
                    <button className="flex flex-col items-center gap-3 py-6 bg-gray-50 hover:bg-blue-50 hover:text-blue-600 rounded-2xl transition group">
                      <MessageCircle className="w-8 h-8 text-gray-400 group-hover:text-blue-600" />
                      <span className="font-medium">Text</span>
                    </button>
                  </Link>

                  <Link href={`/timelinepage?action=video&id=${card.id}`}>
                    <button className="flex flex-col items-center gap-3 py-6 bg-gray-50 hover:bg-purple-50 hover:text-purple-600 rounded-2xl transition group">
                      <Video className="w-8 h-8 text-gray-400 group-hover:text-purple-600" />
                      <span className="font-medium">Video</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicCard;
