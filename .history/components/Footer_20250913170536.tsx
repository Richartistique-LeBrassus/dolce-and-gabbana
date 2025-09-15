'use client';
import React from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import StoreLocator from './ui/StoreLocator';

const Footer = () => {
  return (
    <footer className="relative w-full text-stone-50 text-sm pt-7">

      <div className="w-full text-center border-t 
      pt-9 md:pt-6">

        <div className="h-6 w-6 z-10">
          <Image
            src="/img/logo.svg"
            alt="Dolce & Gabbana Logo"
            width={100}
            height={100}
            className="w-auto h-[19px]
            absolute left-1/2 
            transform -translate-x-1/2 hover:cursor-pointer
            filter brightness-200"
            onClick={() =>
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </div>

      <div className="w-full justify-between gap-12
       flex flex-col 
      md:flex-row items-center md:px-32 pb-6
      mb-3 md:mb-0">
        <div>
          <StoreLocator />
        </div>

        <div className="w-auto h-[9vh] relative overflow-hidden">
           <Image
             src="/img/allyant.png"
             alt="Description"
             width={800}
             height={600}
             className="object-cover w-full h-full rounded-xl"
           />
        </div>
      </div>

      <div className="mx-auto">
        {/* Social Icons Row */}
        <div className="flex flex-wrap w-full font-bold
         xl:inline-flex items-center justify-center sm:justify-between 
         gap-12 border-t border-yellow-100 md:px-32 px-10
         py-9 sm:py-5">

          <div className='flex flex-wrap items-center text-xs
          justify-center
          xl:inline-flex gap-9 '>
            <a href="https://facebook.com" className="hover:underline inline-flex items-center gap-1">
               FOLLOW US
            <Plus size={16} className="inline-block" />
            </a>

            <a href="https://facebook.com" className="hover:underline inline-flex items-center gap-1">
              LEGAL ARE
              <Plus size={16} className="inline-block" />
            </a>

            <a href="https://twitter.com" className="hover:underline inline-flex items-center gap-1">
              CORPORATE
              <Plus size={16} className="inline-block" />
            </a>

            <a href="https://instagram.com" className="hover:underline inline-flex items-center gap-1">
              CONTACT US
              <Plus size={16} className="inline-block" />
            </a>

            <a href="https://youtube.com" className="hover:underline inline-flex items-center gap-1">
              FOLLOW US
              <Plus size={16} className="inline-block" />
            </a>
          </div>


          {/* Language Selection */}
          <div className='inline-flex gap-2 items-center font-bold tracking-wide'>
            <label htmlFor="language" className="text-xs font-semibold block">
              LANGUAGE
            </label>
            <select
              id="language"
              className="bg-black text-white px-1 text-[11px]
              hover:cursor-pointer"
            >
              <option value="en">English</option>
              <option value="it">Italiano</option>
              <option value="fr">Français</option>
              {/* Add more if needed */}
            </select>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-[10px] text-gray-400 py-4 border-y font-serif
        border-cyan-200 text-center px-10 sm:px-0">
          © Dolce & Gabbana S.R.L. 2025 - All rights reserved. 
          VAT NUMBER 09297890155 – SIAE LICENCE N. 637/1/763 – ALL RIGHTS RESERVED
        </div>



      </div>


    </footer>
  );
};

export default Footer;