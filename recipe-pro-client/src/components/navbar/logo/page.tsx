import Image from "next/image";

export const Logo = () => (
  <div className="flex flex-shrink-0 items-center">
    <Image
      alt="Your Company"
      src="/assets/images/logos/logo-no-background-scaled.png"
      height={50}
      width={50}
    />
  </div>
);
