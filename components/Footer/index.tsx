import Link from "next/link";
import Image from "next/image";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import FooterMenu from "./FooterMenu";
import SocialIcon from "./SocialIcon";
import logo from "@/public/logo-black1.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-t-black fixed bottom-0 bg-white w-full">
      <FooterMenu />
      <div className="border-t border-t-black/10 px-10 lg:px-24 py-6 w-full">
        <div className="flex max-md:flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex max-md:flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <Link href="/" className="flex justify-center">
              <Image src={logo} alt="Property File" width={200} />
            </Link>
            <p className="text-sm text-black text-center md:text-left">
              © {currentYear} Property File. All rights reserved.
            </p>
          </div>

          <div className="flex gap-3 justify-center">
            <SocialIcon
              href="https://instagram.com"
              icon={IconBrandInstagram}
              label="Follow us on Instagram"
            />
            <SocialIcon
              href="https://facebook.com"
              icon={IconBrandFacebook}
              label="Follow us on Facebook"
            />
            <SocialIcon
              href="https://twitter.com"
              icon={IconBrandTwitter}
              label="Follow us on Twitter"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
