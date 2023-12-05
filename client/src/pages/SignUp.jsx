import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import Input from '../components/inputs/Input';
import Form from '../components/form/Form';
import { registerUser } from '../features/user/userApi';

const SignUp = () => {
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
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(registerUser(data)).unwrap();
      if (response) {
        toast.success('Account created successfully!');
        setTimeout(() => navigate(from, { replace: true }), 1000);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
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
    </div>
  );

  const footerContent = (
    <div className="w-full ">
      <p className="text-center text-sm">
        Already have an account? <a href="/sign-in">Sign In</a>
      </p>
    </div>
  );

  return (
    <div className="w-full min-h-screen container flex items-center justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 rounded-md shadow-md">
        <Form
          title={'Sign Up'}
          body={bodyContent}
          footer={footerContent}
          actionLabel={'Sign Up'}
          onSubmit={handleSubmit(onSubmit)}
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
};

export default SignUp;
