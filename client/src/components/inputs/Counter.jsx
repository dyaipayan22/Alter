import { useCallback } from 'react';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Counter = ({ value = 1, maxValue, onChange }) => {
  const onAdd = useCallback(() => {
    if (value === maxValue) {
      return;
    }

    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex items-center gap-2 border p-2 max-w-fit">
      <div
        onClick={onReduce}
        className=" 
            w-6
            h-6
            rounded-full
            border-[1px]
            border-neutral-400
            flex
            items-center
            justify-center
            text-neutral-600
            cursor-pointer
            hover:opacity-80
            transition"
      >
        <AiOutlineMinus />
      </div>
      <span className="font-semibold">{value}</span>
      <div
        onClick={onAdd}
        className=" 
            w-6
            h-6
            rounded-full
            border-[1px]
            border-neutral-400
            flex
            items-center
            justify-center
            text-neutral-600
            cursor-pointer
            hover:opacity-80
            transition"
      >
        <AiOutlinePlus />
      </div>
    </div>
  );
};

export default Counter;
