import React, { useEffect, useState } from "react";
import "./Usercms.css";
import { Alluserstype } from "../../type";
export default function Usercms() {
  const [AllUsers, setAllUsers] = useState<Alluserstype[]>([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    const token = localStorage.getItem("token");
    fetch("http://api.php/api/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAllUsers(data.users));
  };
const hendlerdeleteuser = (id:number)=>{
    const token = localStorage.getItem("token");
    fetch(`http://api.php/api/users/${id}`,{
        method:"DELETE",
        headers:{
            Authorization: `Bearer ${token}`,
        },
    }).then(()=>getAllUsers())
}
  return (
    <table className="w-100 bg-white rounded mt-5">
      <tr className="text-center fw-semibold">
        <th>آیدی</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>شماره ی تلفن</th>
      </tr>
      {AllUsers.map((user) => {
        return (
          <tr>
            <td className="align-middle">{user.id}</td>
            <td className="align-middle">{user.name}</td>
            <td className="align-middle">{user.email}</td>
            <td className="align-middle">{user.phone}</td>

            <td className="align-middle btn-pro-cms">
              <button onClick={()=>hendlerdeleteuser(user.id)} className="rounded">حذف</button>
            </td>
          </tr>
        );
      })}
    </table>
  );
}
