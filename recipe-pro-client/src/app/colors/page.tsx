import React from "react";

function page() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Color Palette</h1>

      <div className="grid grid-cols-2 gap-4">
        {/* Main Color */}
        <div className="p-6 bg-mainColor text-white rounded-md">
          Main Color (Light Mode)
        </div>
        <div className="p-6 bg-mainColor-dark text-white rounded-md">
          Main Color (Dark Mode)
        </div>

        {/* Support Color */}
        <div className="p-6 bg-supportColor text-black rounded-md">
          Support Color (Light Mode)
        </div>
        <div className="p-6 bg-supportColor-dark text-white rounded-md">
          Support Color (Dark Mode)
        </div>

        {/* Background Color */}
        <div className="p-6 bg-bgColor text-black rounded-md">
          Background Color (Light Mode)
        </div>
        <div className="p-6 bg-bgColor-dark text-white rounded-md">
          Background Color (Dark Mode)
        </div>

        {/* Text Color */}
        <div className="p-6 bg-white text-txtColor rounded-md border">
          Text Color (Light Mode)
        </div>
        <div className="p-6 bg-black text-txtColor-dark rounded-md border">
          Text Color (Dark Mode)
        </div>
      </div>
    </div>
  );
}

export default page;
