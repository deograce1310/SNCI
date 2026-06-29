import { Component, type ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white px-5 text-center">
          <div>
            <p className="font-archivo font-bold text-2xl text-[#0A090E]">
              Une erreur est survenue.
            </p>
            <p className="text-[#475479] mt-2">
              An error occurred — please reload the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 inline-block bg-[#CF0D0D] hover:bg-[#A80B0B] text-white font-archivo font-semibold text-sm uppercase tracking-wider px-7 py-3.5 rounded-[10px] transition-colors"
            >
              Recharger / Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
