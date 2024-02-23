"use client";

import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarMenuItem, NavbarItem, Link, Button } from "@nextui-org/react";
import Logo from "@/icons/Logo.jsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} maxWidth={"full"} className="fixed py-2 bg-transparent" isBlurred={true}>
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
        <NavbarBrand>
          <Link href="/" className="gap-4 flexCenter">
            <Logo />
            <div>
              <p className="font-bold text-white">ກະຊວງກະສິກຳ ແລະ ປ່າໄມ້</p>
              <p className="font-bold text-white">ພະແນກກະສິກຳ ແລະ ປ່າໄມ້ແຂວງສະຫວັນນະເຂດ</p>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="end">
        <NavbarItem>
          <Link className="text-white" href="/">
            ໜ້າຫຼັກ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/duty">
            ພາລະບົດບາດ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/activity" aria-current="page">
            ວຽກງານການເຄື່ອນໄຫວ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            ເອກະສານເຜີຍແຜ່
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"} className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
