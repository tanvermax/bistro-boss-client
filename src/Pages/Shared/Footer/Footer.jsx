import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer class="bg-[#0e1624] text-white ">
        <div class="container mx-auto grid grid-cols-2 items-center md:items-start">
          {/* <!-- Contact Us Section --> */}
          <div class="text-center  md:w-1/2 mb-6 md:mb-0 py-10 w-full mx-auto">
            <h3 class="text-xl font-semibold mb-4">CONTACT US</h3>
            <p>123 ABS Street, Unit 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
          {/* <!-- Follow Us Section --> */}
          <div class="text-center bg-yellow-700 w-full h-full py-10">
            <h3 class="text-xl font-semibold mb-4">Follow US</h3>
            <p>Join us on social media</p>
            <div class="flex justify-center md:justify-end space-x-4 mt-4">
              <a href="#" class="hover:text-gray-400">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#" class="hover:text-gray-400">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="hover:text-gray-400">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          Copyright © CulinaryCloud. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
