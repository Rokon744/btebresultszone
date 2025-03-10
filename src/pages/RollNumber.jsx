"use client";
import Image from "next/image";
import React, { useState } from "react";
import roll from "../assets/login-interface.png";
import result from "../assets/result-interfacepng.png";
import Link from "next/link";

const RollNumber = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#f8f8ff] overflow-hidden min-h-screen">
      <Image src={roll} alt="roll" className="w-full scale-x-[1.02]" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!rollNumber == Number) {
            alert("Roll Number must be a Number");
          } else {
            setIsModalOpen(true);
          }
        }}
        className="m-5 px-5 bg-white text-black space-y-6 py-8"
      >
        <div className="relative">
          <span className="absolute -top-3 left-5 bg-white px-3 text-[11px]">
            Exam
          </span>
          <select className="w-full p-2 border border-slate-200 rounded-md">
            <option value="">Diploma In Engineering</option>
          </select>
        </div>
        <div className="relative">
          <span className="absolute -top-3 left-5 bg-white px-3 text-[11px]">
            Regulation
          </span>
          <select className="w-full p-2 border border-slate-200 rounded-md">
            <option value="">2022</option>
          </select>
        </div>
        <div className="w-full max-w-sm min-w-[200px]">
          <div className="relative">
            <input
              className="peer w-full bg-transparent border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              maxLength={6}
              minLength={6}
              pattern="\d{6}"
              type="text"
              inputMode="numeric"
              required
            />
            <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-400">
              Roll Number*
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#1976d2] py-2 w-full rounded-md text-white"
        >
          View Result
        </button>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
          <div className="bg-[#F1F5F9] rounded-lg shadow-lg text-center relative w-full">
            <Image src={result} alt="res" className="w-full rounded-lg" />
            <div>
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-3 text-black hover:text-gray-800 text-5xl bg-[#F1F5F9]"
              >
                &times;
              </button>
              <div className="text-[#777] absolute top-11 bg-[#F1F5F9] w-full">
                <h2 className="text-2xl font-semibold">Roll: {rollNumber}</h2>
              </div>
              <div className="text-black py-5">
                <span>Developer: </span>
                <Link
                  href={"https://www.facebook.com/DevRokon"}
                  target="_blank"
                  className="underline text-[#6b6bfa]"
                >
                  Rokon
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RollNumber;
