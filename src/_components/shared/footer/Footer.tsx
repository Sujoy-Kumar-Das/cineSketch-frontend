import Logo from "../logo/Logo";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Social */}
          <Logo />

          {/* Product Links */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-zinc-400 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-zinc-400 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="./app.html" className="text-zinc-400 hover:text-white">
                  App
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center">
          <div className="text-zinc-500 text-sm mb-4 md:mb-0">
            © 2023 LWS AI Studio. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-400 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-400 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-zinc-400 hover:text-white text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
