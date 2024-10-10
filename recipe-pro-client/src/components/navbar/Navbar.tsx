import { Disclosure } from "@headlessui/react";
import { DesktopMenu } from "./desktopMenu/page";
import { Logo } from "./logo/page";
import { MobileMenu } from "./mobileMenu/page";
import { MobileMenuButton } from "./mobileMenuButton/page";
import { ProfileDropdown } from "./profileDropdown/ProfileDropdown";

export default function Navbar({ className }: { className?: string }) {
  return (
    <Disclosure as="nav" className={"bg-slate-200 " + className}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <MobileMenuButton />
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
            <Logo />
            <DesktopMenu />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ProfileDropdown />
          </div>
        </div>
      </div>
      <MobileMenu />
    </Disclosure>
  );
}