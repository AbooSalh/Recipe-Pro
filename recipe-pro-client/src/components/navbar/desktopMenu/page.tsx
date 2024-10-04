"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { classNames, navigation } from "../utils";

export const DesktopMenu = () => {
  const currentPath = usePathname();

  return (
    <div className="hidden sm:ml-6 sm:flex items-center">
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            aria-current={
              currentPath.startsWith(item.href) ? "page" : undefined
            }
            className={classNames(
              currentPath.startsWith(item.href)
                ? "bg-mainColor text-white"
                : "text-black hover:bg-mainColor  hover:text-white",
              "rounded-2xl px-3 py-2 text-sm font-medium transition-all"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
