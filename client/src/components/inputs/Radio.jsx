const Radio = ({ id, value, register }) => {
  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        id={id}
        value={value}
        {...register(id)}
        className="peer hidden"
      />
      <div className="w-10 h-10 bg-white font-medium flex items-center justify-center rounded-full border border-gray-300 hover:shadow peer-checked:bg-primary peer-checked:text-white peer-checked:border-none transition">
        {value}
      </div>
    </label>
  );
};

export default Radio;
