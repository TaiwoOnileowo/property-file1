"use client"

import logoMobile from "@/public/logo-mobile.svg";
import logo from "@/public/logo.svg";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

const LogoIcon = () => {
    const mobileQuery = useMediaQuery({ query: "(max-width: 768px)" });
    const isMobile = mobileQuery;

  return (
    <>
    {isMobile ? (
                <Image src={logoMobile} alt="Property File" width={60} />
              ) : (
                <Image src={logo} alt="Property File" width={180} />
              )}
    </>
  )
};

export default LogoIcon;
