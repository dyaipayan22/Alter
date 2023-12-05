const Input = ({ id, label, type, disabled, register, options, errors }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        disabled={disabled}
        {...register(id, options)}
        className={`outline-none p-2 border rounded-md bg-transparent ${
          errors[id] ? 'border-red-500' : 'border-blue-500'
        }`}
      />
      {errors[id] && <span>{errors[id]?.message}</span>}
    </div>
  );
};

export default Input;
