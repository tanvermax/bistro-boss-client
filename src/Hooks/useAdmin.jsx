import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "../Provider/useAxiossecure";

const useAdmin = () => {
  const { user } = useContext(AuthContext);

  const axiosSecure = useAxiossecure();
  const { data: isAdmin,isPending :isAdminLoading } = useQuery({
    queryKey : [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      // console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin,isAdminLoading];
};

export default useAdmin;
