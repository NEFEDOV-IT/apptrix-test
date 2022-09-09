import React, {FC} from 'react';
import './Navigation.scss'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ILogged} from "../../types/types";
import {logOut} from "../../store/auth.slice/auth.slice";

const Navigation: FC = () => {
  const logged = useSelector((state: ILogged) => state.authReducer.isLogged)
  const loggedName = logged ? 'SIGN OUT' : 'SIGN IN'
  const dispatch = useDispatch()

  const HandleClick = () => {
    dispatch(logOut())
    localStorage.clear()
  }

  return (
    <div className="container">
      <nav className={'navigation'}>
        <h3 className={'navigation-title'}>Apptrix test</h3>
        <span>
          <Link onClick={HandleClick} className={'navigation-link'} to={'/'}>{loggedName}</Link>
          <Link className={'navigation-link'} to={'/users'}>USERS</Link>
        </span>
      </nav>
    </div>
  );
};

export default Navigation;