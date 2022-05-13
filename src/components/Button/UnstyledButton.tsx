import React from 'react';

import { handleMouseUpByBlurring } from '@/types/Focus';
import type { BaseButton } from './Type';

export function UnstyledButton({
  id,
  children,
  className,
  url,
  external,
  download,
  htmlType,
  disabled,
  loading,
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
  ...rest
}: BaseButton) {
  let buttonMarkup;

  const commonProps = {
    id,
    className,
    'aria-label': accessibilityLabel,
  };
  const interactiveProps = {
    ...commonProps,
    role,
    onClick,
    onFocus,
    onBlur,
    onMouseUp: handleMouseUpByBlurring,
    onMouseEnter,
    onTouchStart,
  };

  buttonMarkup = (
    <button
      {...interactiveProps}
      type={htmlType ?? 'button'}
      disabled={disabled || loading}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-describedby={ariaDescribedBy}
      aria-pressed={pressed}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onKeyPress={onKeyPress}
      {...rest}
    >
      {children}
    </button>
  );

  return buttonMarkup;
}
