import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

const Copyright = () => {
  return (
    <div className="bg-slate-700 text-white pt-20 pb-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">M ZOHAIB BUTT</h2>
            <p className="leading-relaxed text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident unde eveniet optio corrupti sed. Earum suscipit eaque blanditiis cupiditate illo fugiat minus facilis illum assumenda cum, consequuntur temporibus atque rerum dolorum, dolorem sapiente.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">CONTENT</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#" className="hover:text-yellow-300 transition">Home</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Services</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Our Team</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Image Grid (parallel to links) */}
          <div className="grid grid-cols-2 gap-4">
            {[img1, img2, img4, img5].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`img${index + 1}`}
                className="w-full h-24 object-cover border-4 border-white rounded-md"
              />
            ))}
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white mt-10 pt-6 text-center text-sm">
          <p>
            Copyright © 2025 All Rights Reserved. Design By{" "}
            <span className="text-yellow-300">M ZOHAIB BUTT</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
