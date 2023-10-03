import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../components/inputs/Input';

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (values) => {
    setIsLoading(true);
  };

  return (
    <div className="w-full h-screen bg-slate-400">
      <div className="flex items-center">
        <div className="bg-indigo-400 w-1/2 h-full">
          <Input
            id="email"
            label="Email"
            type="text"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="password"
            label="Password"
            type="text"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
