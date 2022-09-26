import React from 'react'

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackType) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
