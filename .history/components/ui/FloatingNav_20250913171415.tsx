"use client"
import Image from "next/image";
import { Menu, X, Search } from "lucide-react"
import Drawer from "@/components/ui/Drawer"
import React, { useState, useEffect } from "react"
import { ScrollProgress } from "./ScrollProgress"
import { motion, AnimatePresence } from "framer-motion";

export const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen || isSearchOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("blurred");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("blurred");
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("blurred");
    };
  }, [isOpen, isSearchOpen]);

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-50 flex flex-row justify-between items-center pt-0 tracking-wide px-7 h-16 
        transition-opacity duration-700 ease-in-out ${isScrolled ? "bg-black bg-opacity-75" : "bg-transparent opacity-0"}`}
      >
        <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden pointer-events-none">
          <p className="text-[9vh] font-bold text-white opacity-30 whitespace-nowrap repeat-text">
            WORLD WORLD WORLD WORLD WORLD WORLD WORLD WORLD WORLD
          </p>
        </div>

        <motion.button
          className="text-white z-9"
          onClick={() => setIsOpen(!isOpen)}
          initial={{ rotate: 0 }}
          animate={{
            rotate: isOpen ? 90 : 0, 
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          {isOpen ? (
            <X size={24} /> 
          ) : (
            <Menu className="h-5 w-5 lg:h-6 lg:w-6" size={24} />  
          )}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`flex flex-col absolute w-full min-h-[101vh] bg-slate-950 top-16 left-0 transition-all duration-500 ease-in-out`}
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              exit={{
                opacity: 0,
                y: -100,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
            >
              <div className="group font-thin text-white flex flex-col items-center justify-start h-full my-auto gap-12 z-10 tracking-wide pb-24 sm:pb-20 xl:pb-16">
                {["WORLD", "NEWS", "FASHION SHOWS", "MILESTONES", "LIFESTYLES", "CELEBRITIES", "BEAUTY", "CORPORATE"].map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="peer text-white transition-colors duration-300 group-hover:text-zinc-500 hover:!text-white text-sm xl:text-xl font-thin tracking-wide"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="h-6 w-6 z-9">
          <Image
            src="/img/logo.svg"
            alt="Dolce & Gabbana Logo"
            width={100}
            height={100}
            className="w-auto h-[2vh] sm:h-[25px] mt-1 sm:mt-0 absolute left-1/2 transform -translate-x-1/2 hover:cursor-pointer filter brightness-200"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>

        <div className="text-white text-xs tracking-wide z-10">
          <button onClick={() => setSearchOpen(true)} aria-label="Open search" title="Search">
            <Search className="text-white cursor-pointer mt-1 sm:mt-0 w-5 h-[18px] sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>
        </div>

        <Drawer isOpen={isSearchOpen} onClose={() => setSearchOpen(false)}>
          <p>Search</p>
          <input type="text" placeholder="Search..." className="w-full p-2 border mt-4 font-palm" />
        </Drawer>
      </nav>
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 backdrop-blur-3xl transition-opacity duration-300 ease-in-out ${
          isOpen || isSearchOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => {
          setIsOpen(false);
          setSearchOpen(false);
        }}
        aria-hidden="true"
      />
      <ScrollProgress />
    </>
  );
};