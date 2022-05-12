import React, { forwardRef, memo } from 'react';

import { LinkLikeComponentProps } from '@/types/LinkLikeComponent';

export interface UnstyledLinkProps extends LinkLikeComponentProps {
  custom?: boolean;
}

export const UnstyledLink = memo(
  forwardRef<HTMLAnchorElement, UnstyledLinkProps>(function UnstyledLink(
    { custom, ...props },
    ref
  ) {
    const { url, external, ...restProps } = props;

    const externalAttributes = {
      ...(external && { target: '_blank', rel: 'noopener noreferrer' }),
    };

    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a ref={ref} href={url} {...externalAttributes} {...restProps} />;
  })
);
