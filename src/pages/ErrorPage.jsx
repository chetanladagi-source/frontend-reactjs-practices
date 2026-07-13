import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <h1>Something went wrong!</h1>

      <p>{error.statusText || error.message}</p>

      <Link to="/">Go Home</Link>
    </>
  );
}

export default ErrorPage;
