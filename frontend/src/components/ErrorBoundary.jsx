import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-500 text-white p-4 rounded-lg">
            Something went wrong. Please try refreshing the page.
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;