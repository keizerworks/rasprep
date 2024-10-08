"use client";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import DialogDemo from "../Dialog";
import Account from "@/components/modals/Account";
import Analytics from "@/components/modals/Analytics"
import Contact from "@/components/modals/Contact"
import FAQs from "@/components/modals/FAQs"
import Pomodoro from "@/components/modals/Pomodoro"
import Recents from "@/components/modals/Recents"
import Remedials from "@/components/modals/Remedials"
import Search from "@/components/modals/Search"
import Share from "@/components/modals/Share"

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
    
      <motion.div
        className={cn(
          "h-full px-4 py-4 hidden  md:flex md:flex-col bg-[#5155c3] dark:bg-neutral-800 w-[250px] flex-shrink-0 border border-r-2  border-y-0 border-l-0 ",
          className
        )}
        animate={{
          width: animate ? (open ? "250px" : "60px") : "300px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "h-10 px-4 py-4 flex flex-row md:hidden  items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
        )}
        {...props}
      >
        <div className="flex justify-end z-20 w-full">
          <IconMenu2
            className="atext-neutral-200"
            onClick={() => setOpen(!open)}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
                className
              )}
            >
              <div
                className="absolute right-10 top-10 z-50 text-neutral-200"
                onClick={() => setOpen(!open)}
              >
                <IconX />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
  props?: LinkProps;
}) => {
  const { open, animate } = useSidebar();
  return (
    <Link
      href={link.href}
    className={cn(
      "flex items-center justify-start gap-2    group/sidebar py-2 hover:bg-[#2f307d] hover:font-bold px-2 rounded-md",
    )}
    {...props}
  >
    {/* <button 
      className={cn(
        "flex items-center justify-start gap-2    group/sidebar py-2 hover:bg-[#2f307d] hover:font-bold px-2 rounded-md",
        
      )}
      {...props}
    > */}
      {link.icon}

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-200 dark:text-neutral-200  group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre pr-28  flex justify-start  !m-0 "
      >
        {link.label}
        {/* {link.label === "Analytics" && <Analytics />}
        {link.label === "Account" && <Account />}
        {link.label === "Contact" && <Contact />}
        {link.label === "FAQs" && <FAQs />}
        {link.label === "Pomodoro" && <Pomodoro />}
        {link.label === "Recents" && <Recents />}
        {link.label === "Remedials" && <Remedials />}
        {link.label === "Search" && <Search />}
        {link.label === "Share" && <Share />}
        {!["Analytics", "Account", "Contact", "FAQs", "Pomodoro", "Recents", "Remedials", "Search", "Share"].includes(link.label) && link.label} */}
      </motion.span>
      </Link>

  );
};