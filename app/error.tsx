'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-secondary-900 px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
        </div>
        
        <h1 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
          Une erreur est survenue
        </h1>
        
        <p className="text-secondary-600 dark:text-secondary-300 mb-6">
          Désolé, une erreur inattendue s&apos;est produite. Veuillez réessayer.
        </p>

        {error.message && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
            <p className="text-sm text-red-800 dark:text-red-200 font-mono">
              {error.message}
            </p>
          </div>
        )}

        <button
          onClick={reset}
          className="btn-primary flex items-center gap-2 mx-auto"
        >
          <RefreshCw className="w-4 h-4" />
          Réessayer
        </button>
      </div>
    </div>
  );
}
