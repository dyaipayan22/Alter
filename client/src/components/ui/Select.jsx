const Select = ({ id, options, onChange }) => {
  return (
    <select
      id={id}
      onChange={onChange}
      className="h-8 outline-none border-[1.5px] border-primary rounded-md"
    >
      {options?.map((option, index) => (
        <option key={index} value={option.value} className="p-1 text-bold">
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
