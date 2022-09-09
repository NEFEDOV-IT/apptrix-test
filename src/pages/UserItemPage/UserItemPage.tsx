import React, {FC, useEffect, useState} from 'react';
import './UserItemPage.scss'
import {Link, useParams} from "react-router-dom";
import {TOKEN, URL} from "../../utils";
import {IUsers} from "../../types/types";

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUsers | null>(null)
  const params = useParams()

  useEffect(() => {
    fetch(URL.YOUTRACK.USERS + params.id + '?fields=id,login,name,email', {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Accept': 'application/json',
        'Authorization': `Bearer ${TOKEN.YOUTRACK}`
      },
    })
      .then(response => response.json())
      .then(response => {
        setUser(response)
      })
      .catch(e => console.log(e))
  }, [params.id])

  return (
    <div className={'container'}>
      <div className="user">
        <h1>Page User</h1>
        <div className={'user-name'}>
          Name: {user?.name}
        </div>
        <div className={'user-email'}>
          E-mail: {user?.email}
        </div>
        <div className={'user-type'}>
          Type: {user?.$type}
        </div>
        <Link to={'/users'}>Back</Link>
      </div>
    </div>
  );
};

export default UserItemPage;