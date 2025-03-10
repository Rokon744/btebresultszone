import Image from "next/image";
import React from "react";
import check from "../assets/check-interface.png";
import Link from "next/link";

const Home = () => {
  return (
    <div className="relative">
      <Image src={check} alt="check" className="w-full" />
      <Link href={'/roll-number'} className="absolute bottom-12 flex justify-center items-center w-full">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Check Results
        </button>
      </Link>
    </div>
  );
};

export default Home;
