const ControlledInput = ({ id, label, type, disabled, field, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        disabled={disabled}
        onChange={onChange}
        {...field}
        className={`outline-none p-2 border rounded-md bg-transparent `}
      />
    </div>
  );
};

export default ControlledInput;
