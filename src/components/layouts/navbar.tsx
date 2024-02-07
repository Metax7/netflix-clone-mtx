// import React from "react";
// import data from "@/data/navbar.json";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <div className="mx-auto max-w-screen-2xl px-7 py-10 sm:px-20 2xl:px-0">
//       <div className="flex items-center">
//         <div className="flex items-center gap-10  ">
//           <div>
//             <img src={"/images/logo.png"} alt="logo" className="h-12" />
//           </div>
//           <div>
//             <ul className="flex gap-5">
//               {data.map((item, index) => (
//                 <li key={index} className="font-bold text-white ">
//                   <Link href={item.href}>{item.title}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div></div>
//       </div>
//     </div>
//   );
// }
