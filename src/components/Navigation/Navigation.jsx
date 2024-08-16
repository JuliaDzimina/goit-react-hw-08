import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <div>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        )}
      </div>
    </>
  );
};

export default Navigation;
