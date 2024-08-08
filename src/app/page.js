"use client";
import React from "react";

// export default function page() {
//   // PUT THE SPOTIFY AUTH FUNCTIONS HERE

//   const handleSignIn = async () => {
//     await gitHubSignIn();
//     router.push("");
//   };
//   return (
//     <div className="h-screen w-screen bg-gradient-to-b from-[#AB4FE4] to-[#FF8B8B] flex justify-center items-center">
//       <main className="flex flex-col items-center justify-center">
//         <h1 className="text-white text-4xl font-bold mb-4">
//           Discover songs with
//         </h1>
//         <img
//           src="/assets/whitelogo.png"
//           width={300}
//           height={300}
//           alt="Musikahan Logo"
//           className="mb-4"
//         />
//         <button
//           onClick={handleSignIn}
//           className="bg-teal-950 text-white px-4 py-2 rounded-md hover:scale-110 transition duration-300 ease-in-out"
//         >
//           Login with Spotify
//         </button>
//       </main>
//     </div>
//   );
// }

import Sidebar from "../app/components/Sidebar";

export default function Homepage() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#14121F] to-[#5200FF] flex justify-center items-center">
      <div className="w-[90%] h-[90%] bg-indigo-500 rounded-lg shadow-lg">
        <Sidebar />
      </div>
    </div>
  );
}
