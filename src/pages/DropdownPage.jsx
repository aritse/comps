import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const [selection, setSelection] = useState();

  const options = [
    {
      label: "Red",
      value: "Red",
    },
    {
      label: "Green",
      value: "Green",
    },
    {
      label: "Blue",
      value: "Blue",
    },
  ];

  const handleSelect = (option) => {
    setSelection(option);
  };

  return (
    <div className="flex">
      <Dropdown value={selection} onChange={handleSelect} options={options} />
      <Dropdown value={selection} onChange={handleSelect} options={options} />
    </div>
  );
}

export default DropdownPage;
