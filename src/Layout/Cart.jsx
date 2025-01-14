import { FaTrash } from "react-icons/fa6";
import useCart from "../Provider/useCart";
import Swal from "sweetalert2";
import useAxiossecure from "../Provider/useAxiossecure";

const Cart = () => {
  const [cart,refetch] = useCart();
  const totalprice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiossecure();

  const handledelete = (id) => {
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
        axiosSecure.delete(`/carts/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });

        //
      }
    });
  };
  return (
    <>
      {/* <div className="flex gap-16 ">
            <h1 className="text-5xl">Item : {cart.length}</h1>
            <h1 className="text-5xl">Total Price : {totalprice}$</h1>
            <h1 className="btn btn-primary">Pay</h1>
        </div> */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>image</th>
              <th>name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
              <>
                <tr key={item._id}>
                  <th>{index + 1}</th>

                  <td>
                    <p className="text-2xl">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={item.image}
                        alt=""
                      />
                    </p>
                  </td>
                  <td>
                    <p className="text-2xl">{item.name}</p>
                  </td>
                  <td>
                    <p className="btn btn-primary">{item.price}$</p>
                  </td>
                  <td>
                    <button
                      onClick={() => handledelete(item._id)}
                      className="btn btn-ghost"
                    >
                      <FaTrash className="text-red-600"></FaTrash> Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
            {/* row 2 */}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <h1 className="text-2xl">Item : {cart.length}</h1>
              </td>
              <td>
                <h1 className="text-2xl">Total Price : {totalprice}$</h1>
              </td>
              <h1 className="btn btn-primary">Pay</h1>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Cart;
