import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content p-10 mt-auto">
      <aside>
        <h2 className="text-5xl font-black tracking-tight mb-4">KeenKeeper</h2>
        <p className="text-white-100">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </aside>
      <nav>
        <h2 className="text-bold text-3xl">Social Links</h2>
        <div className="grid grid-flow-col gap-4 text-xl">
          <a>
            <FaInstagramSquare />
          </a>
          <a>
            <FaFacebook />
          </a>
          <a>
            <BsTwitterX />
          </a>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} KeenKeeper - All right reserved</p>
          <div className="items-center gap-4 flex mt-4 md:mt-0">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
