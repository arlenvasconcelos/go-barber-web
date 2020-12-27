import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/auth';

const SignOut: React.FC = () => {
  const { signOut } = useAuth();

  useEffect(() => {
    signOut();
  });

  return <></>;
};

export default SignOut;
