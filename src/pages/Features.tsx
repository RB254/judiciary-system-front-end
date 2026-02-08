import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  FileText,
  FolderOpen,
  BarChart3,
  Calendar,
  Shield,
  Bell,
  Search,
  CheckCircle,
  Upload,
  Clock,
  Users,
  Lock,
  Zap,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const mainFeatures = [
  {
    icon: Upload,
    title: "Secure Digital Case Filing",
    description: "Upload and submit court documents online with automated validation checks that reduce filing errors and ensure compliance with court requirements.",
    benefits: [
      "Multiple document format support (PDF, DOCX)",
      "Automated validation before submission",
      "Digital signature verification",
      "Instant filing confirmation receipts",
    ],
  },
  {
    icon: FolderOpen,
    title: "Case Document Management",
    description: "Comprehensive document management system to store, organize, and retrieve case files with powerful search and filtering capabilities.",
    benefits: [
      "Centralized document repository",
      "Link documents to specific cases",
      "Version control and audit trails",
      "Advanced full-text search",
    ],
  },
  {
    icon: BarChart3,
    title: "Case Tracking Dashboard",
    description: "Monitor document submission status and case progress through an intuitive dashboard with timeline views and real-time updates.",
    benefits: [
      "Real-time status updates",
      "Visual timeline of case progress",
      "Submission history tracking",
      "Performance analytics",
    ],
  },
  {
    icon: Calendar,
    title: "Court Session & Cause List",
    description: "View upcoming court hearings, access daily cause lists, and receive notifications about scheduled sessions and outcomes.",
    benefits: [
      "Daily cause list publication",
      "Session scheduling and updates",
      "Automated hearing reminders",
      "Post-session outcome records",
    ],
  },
  {
    icon: Shield,
    title: "Role-Based Secure Access",
    description: "Separate login portals for different user types with granular access controls ensuring data security and privacy compliance.",
    benefits: [
      "Dedicated portals for each role",
      "Granular permission controls",
      "Multi-factor authentication",
      "Session management & logging",
    ],
  },
];

const additionalFeatures = [
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Receive timely alerts for case updates, filing deadlines, and hearing schedules.",
  },
  {
    icon: Search,
    title: "Advanced Search",
    description: "Powerful search capabilities to find cases, documents, and parties quickly.",
  },
  {
    icon: CheckCircle,
    title: "Validation Engine",
    description: "Automated checks ensure document compliance with court filing requirements.",
  },
  {
    icon: Clock,
    title: "Deadline Tracking",
    description: "Never miss a filing deadline with automated tracking and reminders.",
  },
  {
    icon: Users,
    title: "Multi-Party Support",
    description: "Support for multiple parties, attorneys, and stakeholders per case.",
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description: "End-to-end encryption for all documents and communications.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Quick document processing and reduced waiting times for filings.",
  },
  {
    icon: FileCheck,
    title: "Compliance Reports",
    description: "Generate compliance and audit reports for administrative purposes.",
  },
];

const Features = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero-gradient py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground">
              Platform Features
            </span>
            <h1 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              Powerful Features for
              <span className="block text-secondary">Modern Court Filing</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Discover the comprehensive tools and capabilities that make NASSA Court Filing System the leading choice for digital judiciary administration.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="space-y-16">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/20">
                    <feature.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                    {feature.title}
                  </h2>
                  <p className="mb-6 text-lg text-muted-foreground">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                          <CheckCircle className="h-3 w-3" />
                        </div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card className="overflow-hidden border-border/50 shadow-judiciary">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 p-8">
                        <div className="flex h-full items-center justify-center">
                          <div className="rounded-xl bg-background/80 p-8 shadow-lg backdrop-blur-sm">
                            <feature.icon className="mx-auto h-16 w-16 text-primary" />
                            <p className="mt-4 text-center font-medium text-foreground">
                              {feature.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              More Capabilities
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Additional Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Beyond core functionality, our platform offers a suite of tools to enhance your court filing experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {additionalFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group border-border/50 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-card-hover"
              >
                <CardHeader className="pb-2">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl bg-hero-gradient p-8 text-center md:p-12">
            <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl">
              Ready to Experience These Features?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Start using the NASSA Court Filing System today and transform how you manage court proceedings.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="lg" asChild>
                <Link to="/dashboard">
                  <FileText className="h-5 w-5" />
                  Get Started
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">
                  Contact Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
