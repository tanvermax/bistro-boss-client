import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxiossecure";

const useCart = () => {
  const axiosSecure = useAxiossecure();
  //    tanstack
  const {refetch, data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get("/carts");
      return res.data;
    },
  });

  return [cart,refetch];
};

export default useCart;
