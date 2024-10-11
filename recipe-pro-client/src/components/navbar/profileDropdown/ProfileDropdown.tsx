import Image from "next/image";
import Link from "next/link";

export const ProfileDropdown = () => {
  return (
    <Link href="/profile">
      <Image
        alt="User Profile"
        src="/assets/images/placeholders/user.png"
        width={32}
        height={32}
        className="h-8 w-8 rounded-full shadow-lg"
        title="Profile"
      />
    </Link>
  );
};
