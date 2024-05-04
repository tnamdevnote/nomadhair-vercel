"use client";

import React, { useEffect, useState } from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { CalendarIcon, LogOutIcon } from "lucide-react";
import { Container } from "@/components/templates/container";
import { Button } from "@/components/atoms/button";
import Logo from "@/components/atoms/logo";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/molecules/popover";

interface HeaderProps {
  photo?: string | null;
  isAuthenticated: boolean;
}

function Header({ photo, isAuthenticated }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  // scroll lock when navMenu is open
  useEffect(() => {
    const doc = document.querySelector("html");
    if (doc) {
      doc.classList.toggle("overflow-hidden", isOpen);
    }
  }, [isOpen]);

  // close the navMenu when screen resizes
  useEffect(() => {
    const closeNaveMenu = () => setIsOpen(false);
    window.addEventListener("orientationchange", closeNaveMenu);
    window.addEventListener("resize", closeNaveMenu);

    return () => {
      window.removeEventListener("orientationchange", closeNaveMenu);
      window.removeEventListener("resize", closeNaveMenu);
    };
  }, []);

  return (
    <header className="fixed top-0 z-10 h-navbar-height-sm w-full border-b-[0.5px] border-primary-10/90 bg-secondary-10 md:bg-transparent md:backdrop-blur-md">
      <Container className="flex items-center py-4">
        <Link href="/" aria-label="Home">
          <Logo className="h-5 lg:h-7" />
        </Link>
        <nav className={`top-0 ml-auto bg-secondary-10 bg-transparent`}>
          {isAuthenticated ? (
            <Popover>
              <PopoverTrigger className="hover:cursor-pointer" asChild>
                <Avatar className="ring-1 ring-neutral-15">
                  <AvatarImage src={photo ?? ""} alt="profile" />
                  <AvatarFallback>TN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent
                className="flex w-fit flex-col items-start p-2"
                align="end"
              >
                <Button
                  className="w-full justify-start rounded-md"
                  aria-label="My appointments"
                  variant="ghost"
                  size="sm"
                  icon={<CalendarIcon size={16} />}
                  asChild
                >
                  <Link href="/my-appointments">My Appointments</Link>
                </Button>
                <Button
                  className="w-full justify-start rounded-md"
                  aria-label="Sign out"
                  variant="ghost"
                  size="sm"
                  icon={<LogOutIcon size={16} />}
                  asChild
                >
                  <LogoutLink>Sign out</LogoutLink>
                </Button>
              </PopoverContent>
            </Popover>
          ) : (
            <Button aria-label="Sign in" iconPosition="after" size="sm" asChild>
              <Link href="/sign-in">Sign in</Link>
            </Button>
          )}
        </nav>
      </Container>
    </header>
  );
}

export { Header };
