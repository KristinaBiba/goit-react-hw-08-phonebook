
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authOperations';
import { selectUser } from "../../redux/selectors";

export function UserMenu() {

    const dispatch = useDispatch();
    const { email } = useSelector(selectUser);

  const  handleLogOut = () => {
      dispatch(logOut());
    }
    return (
    <div>
        <p>{email}</p>
        <button onClick={handleLogOut}>Logout</button>
    </div>           
);
}
