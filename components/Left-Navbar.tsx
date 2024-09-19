"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,


  IconFileAnalytics,
  IconUser,
  IconPhone
} from "@tabler/icons-react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { MdOutlineLeaderboard } from "react-icons/md";
import logo from "@/public/Logo.png"
import Image from "next/image";


// import Link from "next/link";
// import { motion } from "framer-motion";
import { cn } from "@/lib/utils";



export default function () {
  const links = [
    {
      label: "Home",
      href: "/dashboard/home",
      icon: (
        <IoHomeOutline className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Prelims",
      href: "/dashboard/prelims",
      icon: (
        <MdOutlineWorkspacePremium className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Mains",
      href: "/dashboard/mains", // Ensure you have a settings route if you want to link to it
      icon: (
        <IconFileAnalytics className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Recall",
      href: "/dashboard/recall", // Ensure you have a settings route if you want to link to it
      icon: (
        <MdOutlineLeaderboard className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Tests",
      href: "/dashboard/tests", // Ensure you have a settings route if you want to link to it
      icon: (
        <IconUser className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Analytics",
      href: "/dashboard/Analytics", // Ensure you have a settings route if you want to link to it
      icon: (
        <IconPhone className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Leaderboard",
      href: "/dashboard/leaderboard", // Ensure you have a settings route if you want to link to it
      icon: (
        <IconPhone className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Account",
      href: "/dashboard/account", // Ensure you have a settings route if you want to link to it
      icon: (
        <IconPhone className="text-neutral-200 hover:font-bold h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "/",
      icon: (
        <IconArrowLeft className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-neutral-100 dark:bg-neutral-800 w-full flex-1 max-w-full mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen w-full" // Changed to fill full screen height
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-2">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-4 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Main content area */}
    </div>
  );
}

export const Logo = () => {
  return (

    
    <Image width={150} height={100}  className="scale-75" alt="logo" src={logo}/>
  );
};

export const LogoIcon = () => {
  return (
    // <Link
    //   href="#"
    //   className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    // >
    //   <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    // </Link>
    <div>icon</div>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex gap-2">
          {[...new Array(4)].map((_, i) => (
            <div
              key={"first-array" + i}
              className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
        <div className="flex gap-2 flex-1">
          {[...new Array(2)].map((_, i) => (
            <div
              key={"second-array" + i}
              className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};



