export interface LinkLikeComponentProps extends React.HTMLProps<HTMLAnchorElement> {
  url?: string;
  children?: React.ReactNode;
  external?: boolean;
  download?: string | boolean;
  [key: string]: any;
}

export type LinkLikeComponent = React.ComponentType<LinkLikeComponentProps>;
