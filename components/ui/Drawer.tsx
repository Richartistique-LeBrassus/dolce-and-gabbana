"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState<string>(""); 

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 
          backdrop-blur-3xl transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.4 }}
        className="fixed top-0 right-0 h-full w-full sm:w-1/2
       bg-slate-950 z-[9999] shadow-xl px-6 py-8 sm:px-10 sm:py-12 overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          title="Close"
          aria-label="Close drawer"
          className="absolute top-4 right-4 text-white hover:text-red-300 
          transition p-2 rounded-full focus:outline-none"
        >
          <X size={24} />
        </button>

        <h2 className="text-white text-xl sm:text-2xl mb-6">Search</h2>

        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-3 rounded-md border border-slate-700 
          bg-slate-900 text-white placeholder-slate-400 
          focus:outline-none focus:ring-1 focus:ring-yellow-100 transition"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </motion.aside>
    </>
  );
};

export default Drawer;