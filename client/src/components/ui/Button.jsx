import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva('outline-none rounded-md ', {
  variants: {
    variant: {
      default: 'bg-primary text-white font-medium',
      outline: 'ring-[1px] ring-primary ring-inset text-primary font-bold',
    },
    size: {
      sm: 'py-2 px-4',
      md: 'py-4 px-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'sm',
  },
});

const Button = ({
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
      {...props}
    >
      {label}
    </button>
  );
};
export default Button;
