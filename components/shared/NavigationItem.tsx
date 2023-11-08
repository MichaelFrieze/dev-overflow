"use client";

import { usePathname } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { SidebarLink } from "@/types";

const NavigationItem = ({ item }: { item: SidebarLink }) => {
  const { userId } = useAuth();
  const pathname = usePathname();

  const isActive =
    (pathname.includes(item.route) && item.route.length > 1) ||
    pathname === item.route;

  if (item.route === "/profile") {
    if (userId) {
      item.route = `${item.route}/${userId}`;
    } else {
      return null;
    }
  }

  return (
    <Link
      href={item.route}
      key={item.label}
      className={`${
        isActive
          ? "primary-gradient rounded-lg text-light-900"
          : "text-dark300_light900"
      }  flex items-center justify-start gap-4 bg-transparent p-4`}
    >
      <Image
        src={item.imgURL}
        alt={item.label}
        width={20}
        height={20}
        className={`${isActive ? "" : "invert-colors"}`}
      />
      <p className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}>
        {item.label}
      </p>
    </Link>
  );
};

export default NavigationItem;
