import api from "../api/axios";
import { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const res = await api.get("/users");
    console.log(res);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return <div>Users Crud</div>;
};

export default UserList;
