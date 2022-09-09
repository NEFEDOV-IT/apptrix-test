import React, {useEffect} from 'react';
import './UsersList.scss'
import {Link, useNavigate} from "react-router-dom";
import {ILogged, IUsers} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../acynsActions";

interface IUsersReducer {
  usersReducer: IUsers[]
}

const UsersList = () => {
  const navigate = useNavigate()
  const dispatch: any = useDispatch()
  const users = useSelector((state: IUsersReducer) => state.usersReducer)
  const logged = useSelector((state: ILogged) => state.authReducer.isLogged)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div className={'container'}>
      <div className="users">
        {logged ?
          <ul>
            {users?.map((user: IUsers) => {
              return <li key={user.id}>
                <div>
                  ID: {user.id}
                </div>
                <div>
                  Name: {user.name}
                </div>
                <div>
                  Login: {user.login}
                </div>
                <div>
                  E-mail: {user.email}
                </div>
                <div className={'users__button'}>
                  <Link to={`/users/${user.id}`}>Подробнее</Link>
                </div>
              </li>
            })}
          </ul>
          : <button
              onClick={() => navigate('/')}
              className={'users__button-not-logged'}
            >
              Sign in now
            </button>
        }
      </div>
    </div>
  );
};

export default UsersList;