import React, { useMemo } from 'react';
import { ImSpinner9 } from 'react-icons/im';

import { handleMouseUpByBlurring, MouseUpBlurHandler } from '@/types/Focus';
import { mergeClasses } from '@/utils/mergeClasses';
import { UnstyledButton } from './UnstyledButton';
import { ButtonProps } from './Type';

interface CommonButtonProps
  extends Pick<
    ButtonProps,
    | 'id'
    | 'accessibilityLabel'
    | 'ariaDescribedBy'
    | 'role'
    | 'onClick'
    | 'onFocus'
    | 'onBlur'
    | 'onMouseEnter'
    | 'onTouchStart'
    | 'className'
  > {
  onMouseUp: MouseUpBlurHandler;
}

type LinkButtonProps = Pick<ButtonProps, 'url' | 'external' | 'download'>;

type ActionButtonProps = Pick<
  ButtonProps,
  | 'htmlType'
  | 'disabled'
  | 'loading'
  | 'ariaControls'
  | 'ariaExpanded'
  | 'pressed'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'onKeyPress'
  | 'form'
>;

const DEFAULT_SIZE = 'medium';

const DEFAULT_THEME = 'basic';

const Button = ({
  id,
  children,
  url,
  disabled = false,
  external,
  download,
  htmlType,
  form,
  loading = false,
  pressed,
  accessibilityLabel,
  role,
  ariaControls,
  ariaExpanded,
  ariaDescribedBy,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onMouseEnter,
  onTouchStart,
  icon,
  type = DEFAULT_THEME,
  size = DEFAULT_SIZE,
  fullWidth,
  className,
  ...rest
}: ButtonProps) => {
  const commonProps: CommonButtonProps = {
    id,
    accessibilityLabel,
    ariaDescribedBy,
    role,
    onClick,
    onFocus,
    onBlur,
    onMouseUp: handleMouseUpByBlurring,
    onMouseEnter,
    onTouchStart,
  };
  const linkProps: LinkButtonProps = {
    url,
    external,
    download,
  };
  const actionProps: ActionButtonProps = {
    htmlType,
    form,
    disabled: disabled || loading,
    loading,
    ariaControls,
    ariaExpanded,
    pressed,
    onKeyDown,
    onKeyUp,
    onKeyPress,
  };

  const classes = useMemo(() => {
    const classData = mergeClasses(
      'cursor-pointer px-6 py-2 text-white transition-colors duration-200 ease-in-out bg-orange-500 rounded-xl',
      disabled && 'cursor-not-allowed',
      loading && 'cursor-wait flex items-center',
      !(disabled || loading) && 'hover:bg-orange-400',
      className ?? ''
    );
    return classData;
  }, [className, disabled, loading]);

  const loadingMarkup = <ImSpinner9 className="w-4 h-4 mr-2 animate-spin" />;

  return (
    <UnstyledButton className={classes} {...commonProps} {...linkProps} {...actionProps} {...rest}>
      <>
        {loading && loadingMarkup}
        {children}
      </>
    </UnstyledButton>
  );
};

export default Button;
