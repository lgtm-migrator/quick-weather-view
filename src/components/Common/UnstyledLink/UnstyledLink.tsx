import React, { forwardRef, memo } from 'react';

import { LinkLikeComponentProps } from '@/components/Common/UnstyledLink/LinkLikeComponent';

export interface UnstyledLinkProps extends LinkLikeComponentProps {
  custom?: boolean;
}

export const UnstyledLink = memo(
  forwardRef<HTMLAnchorElement, UnstyledLinkProps>(function UnstyledLink(
    { custom, children, ...props },
    ref
  ) {
    const { url, external, ...restProps } = props;

    const externalAttributes = {
      ...(external && { target: '_blank', rel: 'noopener noreferrer' }),
    };

    return (
      <a ref={ref} href={url} {...externalAttributes} {...restProps}>
        {children}
      </a>
    );
  })
);
