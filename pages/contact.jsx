import React from "react";
import Layout from "@/components/Layout";
import {motion} from "framer-motion"

const Contact = () => {
  return (
  <Layout>
      <div className="w-full h-full bg-red-400 p-5 text-3xl">
        <motion.main
          whileHover={{scale: 1.1}}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
        >
          <div className="flex justify-center items-center w-40 h-40 rounded-full bg-blue-800">
              Amarbold
          </div>
        </motion.main>
      </div>
  </Layout>)
};

export default Contact;
