import React, { Component } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#faf9f6] dark:bg-[#171717] text-[#252525] dark:text-[#f5f5f5] flex items-center justify-center p-6">
          <div className="max-w-md w-full p-8 rounded-3xl bg-white dark:bg-[#222222] border border-gray-200 dark:border-gray-800 shadow-xl text-center space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div>
              <h2 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">
                Something went wrong
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium">
                The application encountered an unexpected issue while loading.
              </p>
            </div>

            {this.state.error && (
              <pre className="p-3 rounded-xl bg-gray-100 dark:bg-[#1a1a1e] text-[11px] text-left text-red-600 dark:text-red-400 overflow-x-auto max-h-32">
                {this.state.error.message || String(this.state.error)}
              </pre>
            )}

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={this.handleReload}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6650a4] text-white text-xs font-bold hover:bg-[#523d8c] transition-all shadow-xs"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reload Page</span>
              </button>
              <button
                type="button"
                onClick={this.handleGoHome}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              >
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
