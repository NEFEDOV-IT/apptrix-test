import React, {useEffect} from 'react';
import './UsersList.scss'
import {TOKEN, URL} from '../../utils'
import {Link, useNavigate} from "react-router-dom";
import {ILogged, IUsers} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {addUsers} from "../../store/users.slice/users.slice";

interface IUsersReducer {
  usersReducer: IUsers[]
}

const UsersList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const users = useSelector((state: IUsersReducer) => state.usersReducer)
  const logged = useSelector((state: ILogged) => state.authReducer.isLogged)

  useEffect(() => {
    fetch(URL.YOUTRACK + '?fields=id,login,name,email', {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Accept': 'application/json',
        'Authorization': `Bearer ${TOKEN.YOUTRACK}`
      },
    })
      .then(response => response.json())
      .then(response => {
        dispatch(addUsers(response))
      })
      .catch(e => console.log(e.message))
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
          : <button onClick={() => navigate('/')}>Sign in now</button>
        }
      </div>
    </div>
  );
};

export default UsersList;