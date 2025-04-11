"use client";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import type { NavbarLinksProps } from "@/config/config";
import { navbarSocialLinks } from "@/config/config";
import { Book, Home } from "lucide-react";
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { motion } from "framer-motion";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { useTheme } from "next-themes";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

const NavBar = () => {
  const { theme } = useTheme();
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <header className="fixed inset-x-0 bottom-0 z-50 mx-auto mb-4 flex h-full max-h-16 items-center justify-center">
      <nav className="flex h-full items-center rounded-xl border bg-background/80 px-2 py-2 backdrop-blur-2xl">
        <ul
          onMouseLeave={() => {
            setPosition((pv) => ({ ...pv, opacity: 0 }));
          }}
          className="relative flex h-full items-center gap-x-1"
        >
          <Tooltip>
            <TooltipTrigger>
              <NavItem setPosition={setPosition} href="/">
                <Home />
                <span className="sr-only">Home</span>
              </NavItem>
            </TooltipTrigger>
            <TooltipContent>Home</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <NavItem setPosition={setPosition} href="/blog">
                <Book />
                <span className="sr-only">Blog</span>
              </NavItem>
            </TooltipTrigger>
            <TooltipContent>Blog</TooltipContent>
          </Tooltip>
          <li
            className="h-3/4 w-[1px] shrink-0 self-center bg-border"
            aria-hidden="true"
          />
          {navbarSocialLinks.map((link: NavbarLinksProps, index: number) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <NavItem
                  key={link.label}
                  setPosition={setPosition}
                  href={link.link}
                  target="_blank"
                >
                  {link.icon}
                  <span className="sr-only">{link.label}</span>
                </NavItem>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
          <li
            className="h-3/4 w-[1px] shrink-0 self-center bg-border"
            aria-hidden="true"
          />
          <Tooltip>
            <TooltipTrigger>
              <NavItem setPosition={setPosition}>
                <ThemeSwitch />
              </NavItem>
            </TooltipTrigger>
            <TooltipContent>
              {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
            </TooltipContent>
          </Tooltip>
          <Cursor position={position} />
        </ul>
      </nav>
    </header>
  );
};

const NavItem = ({
  children,
  setPosition,
  href,
  target,
}: {
  children: React.ReactNode;
  setPosition: Dispatch<SetStateAction<Position>>;
  href?: string;
  target?: string;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        const left = ref.current.offsetLeft;
        setPosition({ left, width, opacity: 1 });
      }}
      className="relative z-10 block cursor-pointer rounded-md mix-blend-exclusion [&_svg]:size-5"
    >
      {href ? (
        <Link
          href={href}
          target={target}
          className="relative z-20 block text-white dark:text-foreground px-3 py-1.5"
        >
          {children}
        </Link>
      ) : (
        <div className="relative z-20 block text-white dark:text-foreground">
          {children}
        </div>
      )}
    </li>
  );
};

// --- Cursor Component (No changes needed) ---
const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      aria-hidden="true"
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      initial={{ opacity: 0 }}
      className="absolute left-0 top-0 z-0 h-full rounded-md bg-foreground" // z-0 places it behind NavItem content (z-10/z-20)
      transition={{ type: "spring", stiffness: 350, damping: 30 }}
    />
  );
};

export default NavBar;
