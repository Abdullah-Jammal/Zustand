import { useCounterStore } from "@/states/store";
import React from "react";

const CounterValue = () => {
  const count = useCounterStore((state) => state.count);

  return (
    <div className="bg-yellow-400 w-24 h-12 flex justify-center items-center text-gray-800 font-bold text-3xl rounded-md">
      {count}
    </div>
  );
};

export default CounterValue;
