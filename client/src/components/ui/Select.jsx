import { ChevronDown } from 'lucide-react';

const Select = ({ id, options, onChange }) => {
  return (
    <div className="relative flex items-center w-full bg-background-200">
      <select
        id={id}
        onChange={onChange}
        className="w-full outline-none p-[10px] bg-background-200 rounded-sm text-text-200 appearance-none border-none font-medium text-sm"
      >
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute h-5 w-5 right-2" />
    </div>
  );
};

export default Select;
