import { createContext, ReactNode, useEffect, useState } from 'react';
import { User } from '../types/Types';
import axios from 'axios';

interface Props {
  children: ReactNode;
}

interface ContextProps {
  users: User[];
  setusers: (users: User[]) => void;
}

export const UserContext = createContext<ContextProps>({} as ContextProps);

const UserProvider = ({ children }: Props) => {
  const [users, setusers] = useState<User[]>([]);

  useEffect(() => {
    axios.get('./data.json').then(res => setusers(res.data));
  }, []);

  return (
    <UserContext.Provider value={{ users, setusers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
