const colors = ["#ecebde", "#d3f1df", "#ebeaff", "#fef3e2"];

import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

function ColorContainer() {
  const { changeColor } = useContext(GlobalContext);

  return (
    <div className="align-element w-full mb-10 flex justify-end">
      <ul className="flex gap-3">
        {colors.map((color) => {
          return (
            <li
              onClick={() => changeColor(color)}
              key={color}
              className="w-7 h-7 border rounded-full cursor-pointer hover:border-gray-600"
              style={{ backgroundColor: color }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}

export default ColorContainer;
