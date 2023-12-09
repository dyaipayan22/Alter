import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import Input from '../components/inputs/Input';

import { googleLogin, login } from '../features/auth/authApi';
import Form from '../components/form/Form';
import Button from '../components/ui/Button';

const SignIn = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values) => {
    try {
      const response = await dispatch(login(values)).unwrap();
      if (response) {
        toast.success('Logged in successfully!');
        setTimeout(() => navigate(from, { replace: true }), 1000);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleGoogleSignIn = async () => {
    // try {
    //   const response = await dispatch(googleLogin()).unwrap();
    //   if (response) {
    //     toast.success('Logged in successfully!');
    //     setTimeout(() => navigate(from, { replace: true }), 1000);
    //   }
    // } catch (error) {
    //   toast.error(error);
    // }
    window.open('http://localhost:8000/auth/google', '_self');
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
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
      <Button label={'Google'} onClick={handleGoogleSignIn} />
    </div>
  );

  const footerContent = (
    <div className="w-full ">
      <p className="text-center text-sm">
        Don't have an account? <a href="/sign-up">Sign up</a>
      </p>
    </div>
  );

  return (
    <div className="w-full min-h-screen container flex items-center justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 rounded-md shadow-md">
        <Form
          title={'Sign In'}
          body={bodyContent}
          footer={footerContent}
          actionLabel={'Sign In'}
          onSubmit={handleSubmit(onSubmit)}
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
};

export default SignIn;
