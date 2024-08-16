import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>Error! Page not found.</p>
      <Link to="/"> Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
