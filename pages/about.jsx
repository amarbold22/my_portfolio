import React from "react";
import Layout from "@/components/Layout";
import { AnimatePresence } from "framer-motion";

const About = () => {
  return (
  <AnimatePresence>
      <Layout>
        <div className="w-full h-full bg-orange-400 text-3xl p-5">About</div>
      </Layout>
  </AnimatePresence>
  ) 
};

export default About;
