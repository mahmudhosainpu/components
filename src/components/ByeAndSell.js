import React from "react";

const ByeAndSell = ({ onScroll }) => {

  return (
    <div className="mt-12">







      {/* Banner image */}
      <div className="">
        {/* Mobile */}
        <div className="sm:hidden">
          <div className="">
            <div className="flex absolute space-x-3 top-20 left-8 xs:top-28 sm:top-32 xs:left-14">
              <button className="text-white rounded bg-color1 hover:bg-white hover:text-color1 focus:outline-none px-5 py-2.5 font-medium " >Search Auction</button>
              <button className="text-color3 rounded bg-color4 hover:bg-white hover:text-color4 focus:outline-none px-5 py-2.5 font-medium " >Place Auction</button>
            </div>
            <img className="w-full -mt-14" src="Header mobile version-01 1.png" />
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden sm:block">
          <div className="flex absolute space-x-3 top-40 lg:top-52 xl:top-52 2xl:top-72 left-7 lg:left-20 xl:left-20">

            {/* Search Or input */}
            <div className="flex ">
              <input className="w-4/5 lg:w-full py-1.5 px-4 lg:py-2 lg:px-8 text-sm lg:text-base rounded-l outline-none text-gray-500 border-color4 border-t-2 border-l-2 border-b-2" placeholder="Search Auction" />
              <div className="rounded-r border-transparent border-2 hover:bg-white hover:border-color4" style={{ "backgroundColor": "#2695FF", }}>
                <button className="flex w-full h-full  focus:outline-none text-white py-2.5 px-1 text-xs lg:text-base lg:px-4 lg:py-3 rounded-r  hover:bg-white hover:text-color1 font-bold" >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 lg:w-5  lg:h-5 cursor-pointer my-auto">
                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                  </svg>
                  Search
                </button>
              </div>
            </div>

              <button className="py-2 px-4 text-xs text-color3 bg-color4 hover:bg-white hover:text-color4 lg:text-base focus:outline-none lg:px-14 lg:py-3 rounded  font-bold outline-none" >Place Auction</button>
          </div>

          {/* Banner image */}
          <div className=" " style={{ "margin-top": "-52px" }}>
            <img className="w-full hidden md:block h-96 object-cover md:h-full " src="Header 02-01-01 1.png" />
            <img className="w-full md:hidden" src="Header mobile version-01 1.png" />
          </div>
        </div>


      </div>


      <div className=" pb-10 px-4 md:px-8 lg:px-20 xl:px-20 w-full" style={{ "background": "#F8FBFF" }}>

        <h3 className="pb-8 md:pb-8 text-center sm:text-left sm:text-xl lg:text-2xl font-bold text-color5">Buy and Sell Locally In Ireland</h3>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 ">
          <img className=" cursor-pointer" src="Categories_Image/Services-04 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/Cars-04 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/Home-04 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/Clothes-04 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/Garden-04 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/Farming-04 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/Electronic-04-04 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/Sport-04 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/Hobbies-03 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/Pets-03 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/Healthcare_categories 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/Kids-03 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/Wedding_categories 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/Books_categories 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/ANTIQUES_categories 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/Art_categories 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/PROPERTY_categories 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/CONSTRUCTION_categories 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/TICKETS_categories 1.png" />
          <img className=" cursor-pointer" src="Categories_Image/OFFICE_categories 1.png" />

        </div>




      </div>




      {/* Carts */}

      <div className="p-4 md:px-8 lg:px-20">

        <h3 className="py-4 text-center md:py-8 md:text-xl lg:text-2xl font-bold" style={{ "color": "#0E3860" }}>Soon Ending</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">


          {/* Carts 01 */}
          <div className=" cursor-pointer ">
            <div className="">
              <div className="">
                <img className="rounded-t-md " src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              </div>
              <div className="w-11/12 -mt-16 mx-auto py-1  " >
                <div className="flex text-sm">
                  <div className="px-2 w-full py-1 rounded-l-md" style={{ "background": "#2695ffa3" }}>
                    <h3 className="text-white text-center font-bold ">07</h3>
                    <h3 className="text-white text-center text-xs">Days</h3>
                  </div>
                  <div className="px-2 w-full py-1 text-sm" style={{ "background": "#2695ffa3" }}>
                    <h3 className="text-white text-center font-bold">10</h3>
                    <h3 className="text-white text-center text-xs">Hours</h3>
                  </div>
                  <div className="px-2 w-full py-1 text-sm" style={{ "background": "#2695ffa3" }}>
                    <h3 className="text-white text-center font-bold">41</h3>
                    <h3 className="text-white text-center text-xs">Minutes</h3>
                  </div>
                  <div className="px-2 w-full py-1 text-sm rounded-r-md" style={{ "background": "#2695ffa3" }}>
                    <h3 className="text-white text-center font-bold">12</h3>
                    <h3 className="text-white text-center text-xs">Secends</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5 px-3 shadow-md rounded-b-md">
              <h3 className="text-lg font-medium" style={{ "color": "#0E3860" }}>BEETLE CAR</h3>
              <div className="flex py-2">
                <h3 className="text-sm my-auto" style={{ "color": "#0E3860" }}>Current bid:</h3>
                <h3 className="ml-3 font-medium my-auto" style={{ "color": "#0E3860" }}>$501</h3>
              </div>
                <button className=" focus:outline-none bg-color2 hover:bg-white hover:shadow-md hover:text-color2 text-white py-2 px-6 rounded text-sm" >Place a Bid</button>
            </div>
          </div>


          {/* Carts 01 */}
          <div className=" cursor-pointer">
            <div className="">
              <div className="">
                <img className="rounded-t-md" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              </div>
              <div className="w-11/12 -mt-16 mx-auto py-1 rounded-md " >
                <div className="flex text-sm  bg-black">
                  <div className="px-2 w-full py-1 rounded-l-md" style={{ "background": "#2695ffa3" }}>
                    <h3 className="text-white text-center font-bold ">07</h3>
                    <h3 className="text-white text-center text-xs">Days</h3>
                  </div>
                  <div className="px-2 w-full py-1 text-sm" style={{ "background": "#2695ffa3" }}>
                    <h3 className="text-white text-center font-bold">10</h3>
                    <h3 className="text-white text-center text-xs">Hours</h3>
                  </div>
                  <div className="px-2 w-full py-1 text-sm" style={{ "background": "#2695ffa3" }}>
                    <h3 className="text-white text-center font-bold">41</h3>
                    <h3 className="text-white text-center text-xs">Minutes</h3>
                  </div>
                  <div className="px-2 w-full py-1 text-sm rounded-r-md" style={{ "background": "#2695ffa3" }}>
                    <h3 className="text-white text-center font-bold">12</h3>
                    <h3 className="text-white text-center text-xs">Secends</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5 px-3 shadow-md rounded-b-md">
              <h3 className="text-lg font-medium" style={{ "color": "#0E3860" }}>BEETLE CAR</h3>
              <div className="flex py-2">
                <h3 className="text-sm my-auto" style={{ "color": "#0E3860" }}>Current bid:</h3>
                <h3 className="ml-3 font-medium my-auto" style={{ "color": "#0E3860" }}>$501</h3>
              </div>
                <button className=" focus:outline-none bg-color2 hover:bg-white hover:shadow-md hover:text-color2 text-white py-2 px-6 rounded text-sm" >Place a Bid</button>
            </div>
          </div>


          {/* Carts 01 */}
          <div className=" cursor-pointer">
            <div className="">
              <div className="">
                <img className="rounded-t-md" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              </div>
              <div className="w-11/12 -mt-16 mx-auto py-1 rounded-md " >
                <div className="flex text-sm  bg-black">
                  <div className="px-2 w-full py-1 rounded-l-md" style={{ "background": "#2695ffa3" }}>
                    <h3 className="text-white text-center font-bold ">07</h3>
                    <h3 className="text-white text-center text-xs">Days</h3>
                  </div>
                  <div className="px-2 w-full py-1 text-sm" style={{ "background": "#2695ffa3" }}>
                    <h3 className="text-white text-center font-bold">10</h3>
                    <h3 className="text-white text-center text-xs">Hours</h3>
                  </div>
                  <div className="px-2 w-full py-1 text-sm" style={{ "background": "#2695ffa3" }}>
                    <h3 className="text-white text-center font-bold">41</h3>
                    <h3 className="text-white text-center text-xs">Minutes</h3>
                  </div>
                  <div className="px-2 w-full py-1 text-sm rounded-r-md" style={{ "background": "#2695ffa3" }}>
                    <h3 className="text-white text-center font-bold">12</h3>
                    <h3 className="text-white text-center text-xs">Secends</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5 px-3 shadow-md rounded-b-md">
              <h3 className="text-lg font-medium" style={{ "color": "#0E3860" }}>BEETLE CAR</h3>
              <div className="flex py-2">
                <h3 className="text-sm my-auto" style={{ "color": "#0E3860" }}>Current bid:</h3>
                <h3 className="ml-3 font-medium my-auto" style={{ "color": "#0E3860" }}>$501</h3>
              </div>
                <button className=" focus:outline-none bg-color2 hover:bg-white hover:shadow-md hover:text-color2 text-white py-2 px-6 rounded text-sm" >Place a Bid</button>
            </div>
          </div>


          {/* Carts 01 */}
          <div className=" cursor-pointer">
            <div className="">
              <div className="">
                <img className="rounded-t-md" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              </div>
              <div className="w-11/12 -mt-16 mx-auto py-1 rounded-md " >
                <div className="flex text-sm  bg-black">
                  <div className="px-2 w-full py-1 rounded-l-md" style={{ "background": "#2695ffa3" }}>
                    <h3 className="text-white text-center font-bold ">07</h3>
                    <h3 className="text-white text-center text-xs">Days</h3>
                  </div>
                  <div className="px-2 w-full py-1 text-sm" style={{ "background": "#2695ffa3" }}>
                    <h3 className="text-white text-center font-bold">10</h3>
                    <h3 className="text-white text-center text-xs">Hours</h3>
                  </div>
                  <div className="px-2 w-full py-1 text-sm" style={{ "background": "#2695ffa3" }}>
                    <h3 className="text-white text-center font-bold">41</h3>
                    <h3 className="text-white text-center text-xs">Minutes</h3>
                  </div>
                  <div className="px-2 w-full py-1 text-sm rounded-r-md" style={{ "background": "#2695ffa3" }}>
                    <h3 className="text-white text-center font-bold">12</h3>
                    <h3 className="text-white text-center text-xs">Secends</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5 px-3 shadow-md rounded-b-md">
              <h3 className="text-lg font-medium" style={{ "color": "#0E3860" }}>BEETLE CAR</h3>
              <div className="flex py-2">
                <h3 className="text-sm my-auto" style={{ "color": "#0E3860" }}>Current bid:</h3>
                <h3 className="ml-3 font-medium my-auto" style={{ "color": "#0E3860" }}>$501</h3>
              </div>
                <button className=" focus:outline-none bg-color2 hover:bg-white hover:shadow-md hover:text-color2 text-white py-2 px-6 rounded text-sm" >Place a Bid</button>
            </div>
          </div>












        </div>




        <div className="py-10 flex justify-center ">
          <button type="submit" class="w-max h-full font-bold text-white bg-color1 hover:bg-white hover:text-color1 hover:shadow-lg rounded text-base px-12 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"  >View All</button>
        </div>


      </div>










    </div>
  )
}

export default ByeAndSell;
