import Link from "next/link";
import { Building2 } from "lucide-react";
import Image from "next/image";

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image src={"/logo.svg"} alt="PropertyFile" width={150} height={150} />
      </Link>
    </div>
  );
}
