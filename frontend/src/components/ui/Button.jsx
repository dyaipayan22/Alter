// import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva('outline-none rounded-md', {
  variants: {
    variant: {
      default: 'bg-orange-300 hover:bg-indigo-400',
      outline: 'bg-black hover:bg-white',
    },
    size: {
      sm: 'p-2',
      md: 'p-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'sm',
  },
});

const Button = ({
  ref,
  label,
  onClick,
  disabled,
  variant,
  size,
  icon,
  className,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(buttonVariants({ variant, size, className }))}
      //ref={ref}
      {...props}
    >
      {label}
    </button>
  );
};
export default Button;
