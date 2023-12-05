import { useCallback } from 'react';
import Button from '../ui/Button';

const Form = ({
  title,
  body,
  footer,
  onSubmit,
  actionLabel,
  secondaryActionLabel,
  secondaryAction,
  disabled,
}) => {
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [secondaryAction, disabled]);

  return (
    <div className="flex flex-col">
      {/**Header */}
      <div className="flex items-center p-6 justify-center border-b-[1px]">
        <span className="text-xl font-semibold">{title}</span>
      </div>

      {/**Body */}
      <div className="p-6 flex-auto">{body}</div>

      {/**Footer */}
      <div className="flex flex-col gap-2 p-6">
        <div className="flex flex-row items-center gap-4 w-full">
          {secondaryAction && secondaryActionLabel && (
            <Button
              label={secondaryActionLabel}
              onClick={handleSecondaryAction}
              disabled={disabled}
            />
          )}
          <Button
            label={actionLabel}
            onClick={handleSubmit}
            disabled={disabled}
          />
        </div>
        {footer}
      </div>
    </div>
  );
};

export default Form;
