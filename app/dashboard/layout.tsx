"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconFileAnalytics,
  IconSearch,
  IconMessageCircle,
  IconShare,
  IconHelpCircle,
} from "@tabler/icons-react";
import Navbar from "@/components/Navbar";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineTimer, MdOutlineContactSupport } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";
import logo from "@/public/Logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const links = [
    {
      label: "Account",
      href: "/dashboard/account",
      icon: (
        <IoHomeOutline className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Analytics",
      href: "/dashboard/analytics",
      icon: (
        <IoAnalyticsOutline className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Recents",
      href: "/dashboard/recents",
      icon: (
        <IconFileAnalytics className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Remedials",
      href: "/dashboard/remedials",
      icon: (
        <MdOutlineContactSupport className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Pomodoro",
      href: "/dashboard/pomodoro",
      icon: (
        <MdOutlineTimer className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Search",
      href: "/dashboard/search",
      icon: (
        <IconSearch className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Contact",
      href: "/dashboard/contact",
      icon: (
        <IconMessageCircle className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Share App",
      href: "/dashboard/share",
      icon: (
        <IconShare className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "FAQs",
      href: "/dashboard/faqs",
      icon: (
        <IconHelpCircle className="text-neutral-200 h-5 w-5 flex-shrink-0" />
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
        "h-screen w-full relative" // Changed to fill full screen height
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
      <div className="flex-1 ">
        
        <Navbar/>
        <div className="h-full w-full  p-3">
        {children}
        </div>
        {/* <div className="absolute z-10 top-0"> */}
          {/* <Navbar/> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export const Logo = () => {
  return (
    <Image
      width={150}
      height={100}
      className="scale-75"
      alt="logo"
      src={logo}
    />
  );
};

export const LogoIcon = () => {
  return <div>icon</div>;
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
