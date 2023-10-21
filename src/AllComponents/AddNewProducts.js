import React from "react";
import sale from ".././assets/sale.svg";

const AddNewProducts = ({ onScroll }) => {

    const AddNewProperty = ({icon,title})=>{
        return (
            <div className="flex justify-center">
                <div className="">
                    <h1 className=" pb-6 2xl:py-16 text-xl 2xl:text-3xl font-bold text-color5">Add New Property</h1>
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                        <div className="flex w-full 2xl:h-44 justify-between px-6 xs:px-4 sm:px-10 py-6 xl:py-9 2xl:py-12 2xl:space-x-16 shadow-md hover:shadow-lg duration-200 border rounded lg:rounded-lg cursor-pointer">
                            <h2 className="my-auto uppercase text-xs sm:text-sm xl:text-base 2xl:text-xl font-semibold text-color5"> commercial</h2>
                            <img className=" w-3/12 2xl:w-max" src={sale} />
                        </div>
                    </div>
                </div>
            </div>
        )
      };

    return (
        <div className="pt-10">



            <AddNewProperty
              icon={sale}
              title={"Sale"}
            />



          

        </div>
    )
}

export default AddNewProducts;