const Checkbox = ({ id, label, value, register, options }) => {
  return (
    <>
      <input type="checkbox" id={id} value={value} {...register(id, options)} />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default Checkbox;
