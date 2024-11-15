"use client";
import { useCounterStore } from "@/states/store";
import CounterValue from "./CounterValue";
import { useEffect } from "react";

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log("count", count);
};

const setState = () => {
  useCounterStore.setState({ count: 0 });
};

const Counter = () => {
  const { increment } = useCounterStore((state) => state); // Extract the value can be easier but worse performance
  const decrment = useCounterStore((state) => state.decrement);
  const count = useCounterStore((state) => state.count);

  useEffect(() => {
    logCount();
  }, [count]);

  return (
    <div>
      <h1 className="mb-4">The Number of The Counter is :</h1>
      <CounterValue />
      <button
        onClick={() => increment()}
        className="bg-gray-300 mr-3 text-gray-800 py-1 px-3 mt-3 rounded-md"
      >
        Increment
      </button>
      <button
        onClick={() => decrment()}
        className="bg-gray-300 text-gray-800 py-1 px-3 mt-3 mr-3 rounded-md"
      >
        Decrement
      </button>
      <button
        className="bg-gray-300 text-gray-800 py-1 px-3 mt-3 rounded-md"
        onClick={() => setState()}
      >
        Clear Count
      </button>
    </div>
  );
};

export default Counter;
