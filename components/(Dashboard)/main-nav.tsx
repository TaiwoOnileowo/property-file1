import Link from "next/link";
import { Building2 } from "lucide-react";

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Building2 className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          PropertyPro Nigeria
        </span>
      </Link>
    </div>
  );
}
