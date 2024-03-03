"use client";

// Core Package
import { useState } from "react";

// Third Party
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

// Constants
import { NavLinks } from "@/constants/navbar-menu";

// Components
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
        {NavLinks.map((item, index) =>
          !item.subMenu ? (
            <NavbarItem key={index}>
              <Link className="text-white" href={item?.path}>
                {item?.title}
              </Link>
            </NavbarItem>
          ) : (
            <Dropdown key={index}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button disableRipple className="p-0 bg-transparent text-white data-[hover=true]:bg-transparent">
                    {item?.title}
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu>
                {item.subMenu.map((subItem, subIndex) => (
                  <DropdownItem key={subIndex} href={subItem.path} description={subItem.description}>
                    {subItem.title}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          )
        )}
        {/* <NavbarItem>
          <Link className="text-white" href="/">
            ໜ້າຫຼັກ
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button disableRipple>ກ່ຽວກັບພະແນກ</Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            <DropdownItem href="/duty" key="autoscaling" description="ACME scales apps to meet user demand, automagically, based on load.">
              ພາລະບົດບາດ
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link className="text-white" href="/activity" aria-current="page">
            ວຽກງານການເຄື່ອນໄຫວ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            ເອກະສານເຜີຍແຜ່
          </Link>
        </NavbarItem> */}
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
