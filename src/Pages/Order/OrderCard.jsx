import Swal from "sweetalert2";
import useAuth from "../../Provider/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiossecure from "../../Provider/useAxiossecure";

const OrderCard = ({ item }) => {
  const { name, price, recipe, image,_id } = item;

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiossecure();

  const handleaddcart = (food, user) => {
    if (user && user.email) {
      console.log(user.email , food);
      const cartitem = {
        menuId : _id,
        email : user.email,
        name ,
        image ,
        price
      }
      axiosSecure.post('/carts',cartitem)
      .then(res=> {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            title: "Add to Cart!",
            text: "You clicked the button!",
            icon: "success"
          });
        }
        
      } )
      // send the datbase
    } else {
      alert("You dont have acccouitnt");
      Swal.fire({
        title: "you are not logged in",
        text: "Please login to the add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "please login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
    console.log(food, user.email);
  };
  return (
    <div>
      <div class="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="relative">
          <img
            src={image}
            alt="Caesar Salad"
            class="w-full h-40 object-cover"
          />
          <span class="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
            {price}
            <span className="text-yellow-500 font-bold">$</span>
          </span>
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">{name}</h3>
          <p class="text-sm text-gray-600 mb-4">{recipe}</p>
          <button
            onClick={() => handleaddcart(item, user)}
            class="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
