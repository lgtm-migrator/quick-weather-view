import { Component, ErrorInfo, ReactNode } from 'react';

import { isDifferentArray } from '@/utils/assertions';

type RenderFallbackProps<ErrorType extends Error = Error> = {
  error: ErrorType;
  reset: (...args: unknown[]) => void;
};

type RenderFallbackType = <ErrorType extends Error>(
  props: RenderFallbackProps<ErrorType>
) => ReactNode;

interface IProps {
  children?: ReactNode;
  renderFallback: RenderFallbackType;
  resetKeys: unknown[];
}

interface IErrorBoundaryState {
  error: Error | null;
}

const initialState: IErrorBoundaryState = { error: null };

class ErrorBoundary extends Component<IProps, IErrorBoundaryState> {
  static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    return { error };
  }

  state = initialState;
  resetErrorBoundary = (...args: unknown[]) => {
    this.reset();
  };

  reset() {
    this.setState(initialState);
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  componentDidUpdate(prevProps: IProps) {
    if (this.state.error == null) {
      return;
    }
    if (isDifferentArray(prevProps.resetKeys, this.props.resetKeys)) {
      this.reset();
    }
  }

  render() {
    const { children, renderFallback } = this.props;
    const { error } = this.state;

    if (error !== null) {
      return renderFallback({ error, reset: this.resetErrorBoundary });
    }

    return children;
  }
}

export default ErrorBoundary;
