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
      <div className="w-10 h-10 bg-white text-sm text-text-200 font-semibold flex items-center justify-center rounded-full border border-gray-300 hover:border-accent-100  peer-checked:text-accent-100 peer-checked:border-accent-100 transition">
        {value}
      </div>
    </label>
  );
};

export default Radio;
