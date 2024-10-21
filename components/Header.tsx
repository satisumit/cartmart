"use client";
import React, { useState } from "react";
import TopHeader from "./TopHeader";
import MidHeader from "./MidHeader";
import BottomHeader from "./BottomHeader";

const Header: React.FC = () => {
  
  return (
    <header>
      <TopHeader />
      <MidHeader />
      <BottomHeader />
    </header>
  );
};

export default Header;
