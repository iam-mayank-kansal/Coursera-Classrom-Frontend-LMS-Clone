import Link from "next/link";

interface SocialIconProps {
  Icon: React.ElementType;
  href: string;
  label: string;
}

export function SocialIcon({ Icon, href, label }: SocialIconProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 group"
    >
      <Icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
    </Link>
  );
}
