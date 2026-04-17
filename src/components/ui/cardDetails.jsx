import Image from "next/image";
import React from "react";

const hobbyDesign = (hobby) => {
    if(!hobby) return [];
    if(Array.isArray(hobby)) return hobby;
    if(typeof hobby === "string") {
        return hobby.split(", ").map((h) => h.trim());
    }
    return [];
}

const CardDetailsPage = ({ item }) => {

    const hobbies = hobbyDesign(item?.hobby);

  const getStatusColor = (status) => {
    if (["Overdue"].includes(status))
      return "bg-red-500";

    if (["Almost Due"].includes(status))
      return "bg-yellow-400";

    if (["On-Track"].includes(status))
      return "bg-green-700";

    return "bg-gray-400"; // fallback
  };

  return (
    <div className="w-full">
      <div className="w-full h-full bg-white border border-gray-200 shadow-md rounded-2xl p-10 text-center hover:shadow-xl transition duration-300">
        <div className="flex justify-center mb-4">
          <Image
            src={item.picture}
            alt={item.name}
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
        </div>

        <h1 className="text-[24px] font-semibold text-black">{item.name}</h1>

        <p className="text-gray-500 text-sm mt-1">
          {item.days_since_contact} days ago
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
            {
                hobbies?.map((hobby, index) => (
                    <p key={index} className="bg-green-400 text-white text-xs py-1 px-2 rounded-full text-[14px]">{hobby}</p>
                ))
            }
        </div>

        <p
          className={`mt-3 w-fit mx-auto text-[14px] font-medium px-3 py-1 rounded-full text-white ${getStatusColor(
            item.status
          )}`}
        >
          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default CardDetailsPage;
