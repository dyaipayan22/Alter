const Select = ({ id, options, register }) => {
  return (
    <select
      id={id}
      {...register(id)}
      className="h-8 outline-none border-[1.5px] border-primary rounded-md"
    >
      {options?.map((option, index) => (
        <option key={index} value={option.value} className="p-1">
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
