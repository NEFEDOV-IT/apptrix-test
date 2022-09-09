import {getTokenStorage, saveTokenStorage} from "./storage";
import {logOut, register, registerFail} from "./store/auth.slice/auth.slice";
import {TOKEN, URL} from "./utils";
import {addUsers} from "./store/users.slice/users.slice";

function authHeader() {
  const user = JSON.parse(getTokenStorage(TOKEN.ACCESS_TOKEN));
  if (user && user.access) {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + user.access
    };
  } else {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }
}

export function fetchToken(data) {
  return dispatch => {
    fetch(URL.TOKEN, {
      method: 'POST',
      headers: authHeader(),
      body: JSON.stringify(data),
    })
      .then(res => {
        if (res.status === 401) {
          refreshToken(getTokenStorage(TOKEN.REFRESH_TOKEN))
        }
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(tokenData => {
        saveTokenStorage(TOKEN.ACCESS_TOKEN, tokenData.access)
        saveTokenStorage(TOKEN.REFRESH_TOKEN, tokenData.refresh)
        return dispatch(register())
      })
      .catch(e => {
        console.log(e.message)
        localStorage.clear()
        return dispatch(registerFail())
      })
  }
}

function refreshToken(token) {
  return dispatch => {
    fetch(URL.REFRESH, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        token,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          const tokenData = res.json();
          saveTokenStorage(TOKEN.ACCESS_TOKEN, tokenData.access)
          return dispatch(register())
        }
      })
      .catch(e => {
        console.log(e.message)
        return dispatch(logOut())
      })
  }
}

export const fetchUsers = () => {
  return dispatch => {
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
  }
}