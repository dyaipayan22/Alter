import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import Input from '../components/inputs/Input';
import Button from '../components/ui/Button';

const SignUp = () => {
  const formSchema = z.object({
    name: z.string().min(1, 'Enter your name'),
    email: z.string().min(1, 'Enter your email').email('Invalid email'),
    password: z.string().min(1, 'Enter your password'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values) => {
    console.log(values);
    setIsLoading(true);
  };

  return (
    <div className="w-full h-screen">
      <div className="flex items-center">
        <div className="w-1/2 h-full">
          <Input
            id="name"
            label="Name"
            type="text"
            disabled={isSubmitting}
            register={register}
            errors={errors}
          />
          <Input
            id="email"
            label="Email"
            type="text"
            disabled={isSubmitting}
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            type="text"
            disabled={isSubmitting}
            register={register}
            errors={errors}
          />
          <Button label="Sign Up" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
