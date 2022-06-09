import React from 'react';

import { handleMouseUpByBlurring } from '@/types/Focus';
import type { BaseButton } from '../Button/Type';

export function UnstyledButton({
  id,
  children,
  className,
  url,
  external,
  download,
  type,
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
      type={type ?? 'button'}
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
