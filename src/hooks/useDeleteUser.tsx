import { useState } from "react";

const useDeleteUser = (userId: string) => {
  const [response, setResponse] = useState({});

  const deleteUser = () => {
    fetch(`http://localhost:5038/api/user/delete?userId=${userId}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        setResponse({ error: "Error deleting user" });
      });
  };

  return [deleteUser, response];
};

export default useDeleteUser;