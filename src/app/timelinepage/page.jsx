"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";


const TimeLinePage = () => {
  const searchParams = useSearchParams();
  const action = searchParams.get("action");
  const id = searchParams.get("id");

  const [timeline, setTimeline] = useState([]);

  // Load from localStorage
  const loadTimeline = () => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(stored);
  };

  // Load from localStorage
  useEffect(() => {
    loadTimeline();
  }, []);

  // Add new activity
  useEffect(() => {
    if (action && id) {
      const newEntry = {
        id: Date.now(),
        type: action,
        name: id,
        date: new Date().toISOString(),
      };

      setTimeline((prev) => {
        const updated = [newEntry, ...prev];
        localStorage.setItem("timeline", JSON.stringify(updated));
        return updated;
      });

      // URL
      window.history.replaceState({}, "", "/timelinepage");
    }
  }, [action, id]);


  // Format Date
  const formattedTimeline = useMemo(() => {
    return timeline.map((item) => ({
      ...item,
      formattedDate: new Date(item.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    }));
  }, [timeline]);

  // Icon
  const getIcon = (type) => {
    switch (type?.toLowerCase()) {
      case "meetup":
        return "🤝";
      case "text":
        return "💬";
      case "video":
        return "📹";
      case "call":
        return "📞";
      default:
        return "📅";
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Timeline</h1>
          <button
            onClick={loadTimeline}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
          >
            Refresh
          </button>
        </div>

        {/* Filter Dropdown */}
        <div className="mb-6">
          <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Filter timeline</option>
            <option value="meetup">Meetups only</option>
            <option value="text">Texts only</option>
            <option value="video">Video calls</option>
            <option value="call">Phone calls</option>
          </select>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-4">
          {formattedTimeline.length === 0 ? (
            <div className="text-center py-12 text-gray-500 bg-white rounded-2xl p-8">
              No activity yet
            </div>
          ) : (
            formattedTimeline.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex items-start gap-4 hover:shadow transition-all"
              >
                <div className="text-4xl flex-shrink-0 mt-1">
                  {getIcon(item.type)}
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg text-gray-900">
                      {item.type} with {item.bio}
                    </h3>
                    <span className="text-sm text-gray-500 whitespace-nowrap ml-6">
                      {item.formattedDate}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeLinePage;