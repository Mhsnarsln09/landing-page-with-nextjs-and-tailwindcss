import { useState } from "react";

const ButtonGroup: React.FC = () => {
  const [active, setActive] = useState<string>("Sell");

  const handleClick = (button: string) => {
    setActive(button);
  };

  return (
    <div className="flex items-center justify-around gap-7 xl:gap-5">
      <button
        onClick={() => handleClick("All")}
        className={`px-7 py-4 border-2 rounded-[30px] ${
          active === "All"
            ? "bg-primary text-white border-primary"
            : "text-primary border-primary"
        }`}
      >
        All
      </button>
      <button
        onClick={() => handleClick("Sell")}
        className={`px-7 py-4 border-2 rounded-[30px] ${
          active === "Sell"
            ? "bg-primary text-white border-primary"
            : "text-primary border-primary"
        }`}
      >
        Sell
      </button>
      <button
        onClick={() => handleClick("Rent")}
        className={`px-7 py-4 border-2 rounded-[30px] ${
          active === "Rent"
            ? "bg-primary text-white border-primary"
            : "text-primary border-primary"
        }`}
      >
        Rent
      </button>
    </div>
  );
};

export default ButtonGroup;
