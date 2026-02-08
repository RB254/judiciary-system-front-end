import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Shield,
  Search,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Scale,
  Gavel,
  Building,
  FileCheck,
  Calendar,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Digital Case Filing",
    description: "Submit court documents online with automated validation to reduce filing errors.",
  },
  {
    icon: Search,
    title: "Document Management",
    description: "Store, link, and retrieve case documents with advanced search capabilities.",
  },
  {
    icon: Clock,
    title: "Case Tracking",
    description: "Monitor submission status and view real-time case progress updates.",
  },
  {
    icon: Calendar,
    title: "Court Sessions",
    description: "View upcoming hearings, cause lists, and receive session notifications.",
  },
  {
    icon: Lock,
    title: "Secure Access",
    description: "Role-based authentication for judges, clerks, attorneys, and litigants.",
  },
  {
    icon: CheckCircle,
    title: "Reduced Errors",
    description: "Automated checks ensure document compliance before submission.",
  },
];

const stats = [
  { value: "50,000+", label: "Cases Filed" },
  { value: "1,200+", label: "Registered Attorneys" },
  { value: "47", label: "Court Stations" },
  { value: "99.9%", label: "System Uptime" },
];

const userTypes = [
  {
    icon: Gavel,
    title: "Judges",
    description: "Access case files, review documents, and manage court proceedings.",
  },
  {
    icon: Building,
    title: "Court Clerks",
    description: "Process filings, manage case records, and update session schedules.",
  },
  {
    icon: Scale,
    title: "Attorneys",
    description: "File cases, submit documents, and track case progress for clients.",
  },
  {
    icon: Users,
    title: "Litigants",
    description: "View case status, access documents, and receive hearing notifications.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient py-20 lg:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAzMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnpNNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02UzkuMzE0IDYgNiA2IDAgOC42ODYgMCAxMnMyLjY4NiA2IDYgNnptMCAzMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')]" />
        </div>

        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
              <Shield className="h-4 w-4" />
              Official Kenyan Judiciary Digital Platform
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              NASSA Court
              <span className="block text-secondary">Judiciary Filing System</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
              Streamlining the submission, management, and retrieval of legal documents across Kenyan courts. Experience efficient, transparent, and secure court proceedings.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <Link to="/dashboard">
                  <FileText className="h-5 w-5" />
                  File a Case
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/login">
                  <Users className="h-5 w-5" />
                  Login to Portal
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-muted/30 py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              Core Features
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Modernizing Court Administration
            </h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive digital platform transforms how legal documents are filed, managed, and tracked across the Kenyan judiciary system.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-card-hover"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/features">
                Explore All Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Role-Based Access
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Secure Portals for Every User
            </h2>
            <p className="text-lg text-muted-foreground">
              Dedicated access points designed for different court stakeholders, ensuring secure and relevant functionality for each role.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {userTypes.map((user, index) => (
              <Card
                key={index}
                className="group text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <CardHeader className="pb-2">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <user.icon className="h-8 w-8" />
                  </div>
                  <CardTitle>{user.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{user.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl bg-hero-gradient p-8 md:p-12 lg:p-16">
            {/* Background decoration */}
            <div className="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
                Ready to File Your Case?
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/80">
                Join thousands of legal professionals using NASSA Court Filing System. Start your digital filing journey today.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/dashboard">
                    <FileCheck className="h-5 w-5" />
                    Start Filing Now
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
