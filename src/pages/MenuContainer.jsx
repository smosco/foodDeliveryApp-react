import React, { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import RowContainer from "./RowContainer";

export default function MenuContainer() {
  const [filter, setFilter] = useState("chicken");
  const [{ foodItems }, dispatch] = useStateValue();

  return (
    <section className="w-full my-12" id="menu">
      <div className="w-full flex flex-col items-center jutify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-6 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
          Our Hot Dishes
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((item) => (
              <motion.div
                whileTap={{ scale: 0.6 }}
                onClick={() => setFilter(item.urlParamName)}
                key={item.id}
                className={`group ${
                  item.urlParamName === filter ? "bg-cartNumBg" : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg duration-150 transition-all ease-in-out`}
              >
                <div
                  className={`w-10 h-10 rounded-full ${
                    item.urlParamName === filter ? "bg-card" : "bg-cartNumBg"
                  } group-hover:bg-card flex items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      item.urlParamName === filter
                        ? "text-textColor"
                        : "text-card"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === item.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {item.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((item) => item.category === filter)}
          />
        </div>
      </div>
    </section>
  );
}
