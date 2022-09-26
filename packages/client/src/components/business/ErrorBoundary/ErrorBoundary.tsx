import React from 'react'
import { ErrorFallbackType } from '@/components/business/ErrorBoundary/types'

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
