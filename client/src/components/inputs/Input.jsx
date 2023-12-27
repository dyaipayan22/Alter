const Input = ({
  id,
  label,
  type,
  disabled,
  register,
  options,
  errors,
  placeholer,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholer}
        {...register(id, options)}
        className={`outline-none p-2 border rounded-md bg-transparent focus:border-text-200 ${
          errors[id] ? 'border-red-500' : 'border-background-300'
        }`}
      />
      {errors[id] && <span>{errors[id]?.message}</span>}
    </div>
  );
};

export default Input;
