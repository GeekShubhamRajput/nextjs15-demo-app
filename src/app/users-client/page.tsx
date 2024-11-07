"use client";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default function UserClient(){
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function fetchUser(){
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
          if(!response.ok) throw new Error("Failed to fetch users");
          const data = await response.json();
          setUsers(data); 
      } catch (err) {
        setError("Failed to fetch the users");
      } finally{
        setLoad(false);
      }
    }
    fetchUser();
  }, []);

  if(load) return <div>Loading...</div>;
  if(error) return <div>{error}</div>;

  return(
    <ul className="space-y-4 p-4">
      {users.map(user => (
        <li key={user.id} className="p-4 bg-white shadow-md rounded-lg text-grey-700">{user.name} {user.email} </li>
      ))}
    </ul>
  );
}
