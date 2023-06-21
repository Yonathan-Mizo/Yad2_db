// import React, { useState } from "react";
// import { navItems } from "./NavItems";
// import { Link } from "react-router-dom";


// export default function Dropdown() {
//   const [dropdown, setDropdown] = useState(false);

//   return (
//     <>
//       <ul
//         className={dropdown ? "services-submenu clicked" : "services-submenu"}
//         onClick={() => setDropdown(!dropdown)}
//       >
//         {navItems.map((item) => {
//           return (
//             <li key={item.id}>
//               <Link
//                 to={item.path}
//                 className={item.cName}
//                 onClick={() => setDropdown(false)}
//               >
//                 {item.info},
//                 {item.items}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   )
// }
