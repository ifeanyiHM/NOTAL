function ErrorHandling({ error, resetErrorBoundary }) {
  return (
    <div className="empty">
      <div>
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    </div>
  );
}

export default ErrorHandling;
