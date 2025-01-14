import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiossecure from "../../Provider/useAxiossecure";
import { FaTrash, FaUser, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiossecure();
  const { data: user = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handledeleteuser = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };


  const handlemakeadmin=(item)=>{
    axiosSecure.patch(`/users/admin/${item._id}`)
    .then(res=>{
      console.log(res.data);
      if (res.data.modifiedCount>0) {
        refetch();

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${item.name} is an admin now`,
          showConfirmButton: false,
          timer: 1500
        });
      }
      
    })

  }
  return (
    <div>
      <div className="flex justify-between min-w-[500px] lg:min-w-[1000px] ">
        <div>
          <h1 className="text-3xl">All User</h1>
        </div>
        <div>
          <h1 className="text-3xl">Total User :{user.length}</h1>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {user.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                   { item.role === "admin" ? 'Admin' :
                     <button onClick={()=>handlemakeadmin(item)} className="btn btn-ghost bg-orange-600 text-2xl text-white">
                     <FaUsers></FaUsers>
                   </button>
                   }
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handledeleteuser(item._id)}
                      className="btn btn-ghost bg-orange-600  text-white"
                    >
                      <FaTrash></FaTrash> Delete
                    </button>
                  </td>
                </tr>
              ))}

              {/* row 2 */}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
