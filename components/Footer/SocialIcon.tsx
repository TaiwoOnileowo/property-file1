import Link from "next/link";

interface SocialIconProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

const SocialIcon = ({ href, icon: Icon, label }: SocialIconProps) => {
  return (
    <Link
      href={href}
      className="w-8 h-8 border border-primary rounded-md hover:bg-primary transition-colors flex items-center justify-center"
      aria-label={label}
    >
      <Icon className="text-black w-5 h-5" />
    </Link>
  );
};

export default SocialIcon;
