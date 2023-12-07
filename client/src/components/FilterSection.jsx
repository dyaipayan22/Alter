import { useForm } from 'react-hook-form';

const FilterSection = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      category: '',
      brand: '',
      gender: '',
    },
  });

  return (
    <div className="flex flex-col">
      <span className="text-2xl text-primary font-medium text-center">
        Filter Products
      </span>
    </div>
  );
};

export default FilterSection;
