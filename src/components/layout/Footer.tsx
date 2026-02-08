import { Link } from "react-router-dom";
import { Scale, Mail, Phone, MapPin, Facebook, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Cause List", href: "/cause-list" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "User Guide", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Legal Forms", href: "#" },
    { name: "Court Fees", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
  portals: [
    { name: "Judge Portal", href: "/login" },
    { name: "Clerk Portal", href: "/login" },
    { name: "Attorney Portal", href: "/login" },
    { name: "Litigant Portal", href: "/login" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <Scale className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-tight">
                  NASSA Court
                </span>
                <span className="text-xs text-primary-foreground/70">
                  Judiciary Filing System
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Streamlining the submission, management, and retrieval of legal documents in Kenyan courts.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span className="text-sm text-primary-foreground/70">
                  Supreme Court Building, City Hall Way, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                <span className="text-sm text-primary-foreground/70">
                  +254 20 221 1000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <span className="text-sm text-primary-foreground/70">
                  support@nassacourt.go.ke
                </span>
              </li>
            </ul>
            {/* User Portals */}
            <h3 className="mb-3 mt-6 text-sm font-semibold">User Portals</h3>
            <div className="flex flex-wrap gap-2">
              {footerLinks.portals.map((portal) => (
                <Link
                  key={portal.name}
                  to={portal.href}
                  className="rounded-md bg-primary-foreground/10 px-3 py-1.5 text-xs transition-colors hover:bg-primary-foreground/20"
                >
                  {portal.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} NASSA Court Judiciary Filing System. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="#"
              className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              Terms of Use
            </Link>
            <Link
              to="#"
              className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
