const Input = ({ id, label, type, disabled, register, required, errors }) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        disabled={disabled}
        {...register(id, { required })}
        className=""
      />
      <label>{label}</label>
    </div>
  );
};

export default Input;
