import React from "react";
import Sectiontitle from "../../Pages/Shared/Sectiontitle";
import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";
import useAxiospublic from "../../Hooks/useAxiospublic";
import useAxiossecure from "../../Provider/useAxiossecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Additem = () => {
  const { register, handleSubmit } = useForm();

  const axiospublic = useAxiospublic();
  const axiosSecure = useAxiossecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image uploade to image bb
    const imagefile = { image: data.image[0] };
    const res = await axiospublic.post(image_hosting_api,imagefile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuitem = {
        name : data.name,
        category : data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url

      } 
      // 
      const  menures = await axiosSecure.post('/menu', menuitem);
      console.log(menures.data);
      if (menures.data.insertedId) {
        alert("succesfully added")
      }

    }
    console.log(res.data);
  };

  return (
    <div className="w-full min-h-screen flex flex-col  items-center  ">
      <Sectiontitle
        headding={"ADD AN ITEM"}
        subheading={"--What's new?--"}
      ></Sectiontitle>

      <div className="w-full  bg-gray-100 shadow-lg rounded-lg p-16 mt-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}
          <div className="mb-6">
            <label
              className="block text-base font-bold text-gray-800 mb-2"
              htmlFor="recipeName"
            >
              Recipe Name <span className="text-red-500">*</span>
            </label>
            <input
              id="recipeName"
              {...register("name", { required: true })}
              className="w-full   p-3 text-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              type="text"
              placeholder="Enter recipe name"
            />
          </div>

          {/* Category */}
          <div className="lg:flex gap-10 ">
            <div className="mb-6 w-full">
              <label
                className="block text-base font-bold text-gray-800 mb-2"
                htmlFor="category"
              >
                Category <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                {...register("category", { required: true })}
                className="w-full  rounded-lg p-3 text-gray-700 bg-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              >
                <option disabled value="">
                  Select a category
                </option>
                <option value="appetizer">salad</option>
                <option value="main_course">pizza</option>
                <option value="dessert">dessert</option>
                <option value="dessert">soups</option>
                <option value="dessert">drinks</option>
              </select>
            </div>

            {/* Price */}
            <div className="mb-6 w-full">
              <label
                className="block text-base font-bold text-gray-800 mb-2"
                htmlFor="price"
              >
                Price <span className="text-red-500">*</span>
              </label>
              <input
                id="price"
                {...register("price", { required: true })}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                type="number"
                placeholder="Enter price"
              />
            </div>
          </div>

          {/* Recipe Details */}
          <div className="mb-6">
            <label
              className="block text-base font-bold text-gray-800 mb-2"
              htmlFor="details"
            >
              Recipe Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="details"
              {...register("recipe", { required: true })}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              rows="4"
              placeholder="Enter recipe details"
            ></textarea>
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label
              className="block text-base font-bold text-gray-800 mb-2"
              htmlFor="file"
            >
              Upload Image
            </label>
            <input
              id="image"
              {...register("image")}
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gray-200 file:text-gray-800 hover:file:bg-gray-300"
              type="file"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-yellow-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            Add Item <ImSpoonKnife size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Additem;
