import { Link } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" end>
            Home
          </Link>
        </li>
        <li>
          <Link to="user">User</Link>
        </li>
        <li>
          <Link to="login">login</Link>
        </li>
        <li>
          <Link to="register">registration</Link>
        </li>
      </ul>
    </nav>
  );
};
