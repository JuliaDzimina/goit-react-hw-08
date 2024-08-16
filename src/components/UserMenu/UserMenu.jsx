import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>Welcome, {user.name} </p>
      <button type="button" onClick={handleClick}>
        Logout{" "}
      </button>
    </div>
  );
};

export default UserMenu;
