import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import Input from '../components/inputs/Input';
import Button from '../components/ui/Button';

import { login } from '../features/auth/authSlice';

const SignIn = () => {
  const dispatch = useDispatch();

  const formSchema = z.object({
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
    dispatch(login(values));
  };

  return (
    <div className="w-full h-screen container">
      <div className="flex items-center">
        <div className="w-1/2 h-full flex flex-col gap-4">
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
          <Button label="Sign In" onClick={handleSubmit(onSubmit)} size="md" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
