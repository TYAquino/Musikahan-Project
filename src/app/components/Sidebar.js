// import Link from "next/link";
// import React from "react";

// export default function Sidebar() {
//   return (
//     <div className="flex items-center gap-3 pl-8 cursor-pointer">
//       <ul>
//         <li>
//           <Link href="/">
//             <p className="block py-2 hover:bg-[#5200FF] rounded-lg">Home</p>
//           </Link>
//         </li>

//         <li>
//           <Link href="/search">
//             <p className="block py-2 hover:bg-[#5200FF] rounded-lg">Search</p>
//           </Link>
//         </li>

//         <li>
//           <Link href="/library">
//             <p className="block py-2 hover:bg-[#5200FF] rounded-lg">Library</p>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// src/app/sidebar.js
"use client";
import Link from "next/link";
import React from "react";
// Importing SideButtons from the same directory

export default function Sidebar() {
  return (
    <div className="w-[20%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-indigo-800 rounded h-full">
        <div className="flex justify-center mt-5">
          <img src="/assets/picture1.png" width={160} height={160} alt="Logo" />
        </div>
        <div className="p-4 flex flex-col items-start gap-7 mt-10">
          <Link
            href="/HomePage"
            passHref
            className="flex items-center gap-3 pl-8 cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
          >
            <img className="w-6" src="/assets/home.png" alt="home" />
            <p className="font-semibold">Home</p>
          </Link>
          <Link
            href="/SearchPage"
            passHref
            className="flex items-center gap-3 pl-8 cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
          >
            <img className="w-6" src="/assets/search.png" alt="search" />
            <p className="font-semibold">Search</p>
          </Link>
          <Link
            href="/LibraryPage"
            passHref
            className="flex items-center gap-3 pl-8 cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
          >
            <img className="w-6" src="/assets/stack.png" alt="library" />
            <p className="font-semibold">Your Library</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
