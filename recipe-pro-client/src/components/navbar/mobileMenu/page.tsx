"use client";
import { DisclosurePanel, DisclosureButton } from "@headlessui/react";
import { classNames, navigation } from "../utils";
import { usePathname } from "next/navigation"; // Import usePathname

export const MobileMenu = () => {
  const currentPath = usePathname(); // Get the current path

  return (
    <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            aria-current={
              currentPath.startsWith(item.href) ? "page" : undefined
            } // Check if the link is active
            className={classNames(
              currentPath.startsWith(item.href)
                ? "bg-mainColor text-white"
                : "text-black hover:bg-mainColor hover:text-white",
              "block rounded-md px-3 py-2 text-base font-medium"
            )}
          >
            {item.name}
          </DisclosureButton>
        ))}
      </div>
    </DisclosurePanel>
  );
};
