import NavLayout from "@/components/layouts/main-layout";
import { User } from "@/types/users/CreateUser";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useFetch from "@/hooks/useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/router";
import useDeleteUser from "@/hooks/useDeleteUser";

export default function UsersPage() {
      const router = useRouter();
      const [shouldFetch, setShouldFetch] = useState(false);
      const [user] = useFetch("http://localhost:5038/api/user/get/all", shouldFetch);

      const goToUpdatePage = (id: string) => {
        router.push(`/users/update/${id}`)
      }

     const deleteUser = (userId: string) => {
    fetch(`http://localhost:5038/api/user/delete?userId=${userId}`, {
      method: "DELETE"
    })
    .then(() => setShouldFetch(!shouldFetch)); // trigger refetch by toggling state
  };
        

      const {
        register, 
        handleSubmit, 
        formState: { errors }} = useForm({mode: 'onSubmit'});


  return (
    <div>
      <main className={styles.main}>
        <div className="container d-flex flex-column align-items-center">
          <h1 className="mb-5">User List</h1>
          {user && user.length > 0 ? (
            <table className="table table-bordered custom-table-style text-white">
              <thead className="text-center align-middle">
                <tr>
                  <th>Id</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {user.map((userObj: User) => (
                  <tr key={userObj.id} className="text-center align-middle"> 
                    <td >{userObj.id}</td>
                    <td >{userObj.username}</td>
                    <td >{userObj.email}</td>
                    <td >
                    <button
                        className="btn btn-primary"
                        onClick={() => goToUpdatePage(userObj.id)}
                      >
                        Update
                      </button>
                      <button
                    className="btn btn-danger m-3"
                    onClick={() => deleteUser(userObj.id)}
                  >
                    Delete
                  </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No users found.</p>
          )}
        </div>
        </main>
    <div className="d-flex flex-column align-items-center">
      <div className={`d-flex flex-column align-items-center ${styles['form']}`}>
        <h1 className="mb-4">INSERT NEW USER</h1>
        <input className={"form-control mb-4"} type="text" placeholder="Username" {...register("username", {
          required:
            'Field Username is required',
          validate: (value) => {
            if(!/^[a-zA-Z]+$/.test(value)) {
            return 'For Username use only characters'
            }
            if (value.length < 3) {
            return 'Length of Username must be greater than 3 chars!'
            }
          }
          
        })} />
        <input className={"form-control mb-4"} type="email" placeholder="Email" {...register("email", {
          required:
            'Field Email is required',
          validate: (value) => {
              if (value.length < 3)
              {
                return 'Length of Email must be greater than 3 chars!'
              }
              
            }
          
        })} />
        <input className={"form-control mb-4"} type="password" placeholder="Password" {...register("password", {
          required:
            'Field Password is required',
          validate: (value) => {
              if (value.length < 3)
              {
                return 'Length of Password must be greater than 3 chars!'
              }
              
            }
          
        })} />
        <button 
        className={"btn btn-primary"}
        onClick={(e) => {

          console.log(errors);

          handleSubmit((data) => {
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json'},
              body: JSON.stringify(data)
            };

          fetch('http://localhost:5038/api/user/create', requestOptions)
            .then(response => response.json)
            .then(data => data);

            console.log(data);
          })();
        }}>
          Submit
        </button>
      </div>
    </div>
  </div>
  );
}
