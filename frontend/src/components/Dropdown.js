<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
>>>>>>> d3673a580193d911cdce1a3e1442ad5e3d20de7a
