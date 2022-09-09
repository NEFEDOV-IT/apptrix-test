import React, {FC} from 'react';
import './Auth.scss'
import {SignIn} from "./SignIn/SignIn";

const Auth: FC = () => {
  return (
    <div className={'container'}>
      <SignIn/>
    </div>
  );
};

export default Auth;