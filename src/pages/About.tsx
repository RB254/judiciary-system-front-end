import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Shield, Users, BookOpen, Award } from "lucide-react";

const objectives = [
  {
    icon: Target,
    title: "Streamline Filing Process",
    description: "Simplify the submission and retrieval of legal documents through an intuitive digital platform.",
  },
  {
    icon: Shield,
    title: "Enhance Security",
    description: "Implement role-based access control ensuring only authorized personnel access sensitive documents.",
  },
  {
    icon: Users,
    title: "Improve Accessibility",
    description: "Enable stakeholders to file, track, and manage cases from anywhere with internet access.",
  },
  {
    icon: Eye,
    title: "Increase Transparency",
    description: "Provide real-time case tracking and updates to all parties involved in legal proceedings.",
  },
  {
    icon: BookOpen,
    title: "Reduce Paper Usage",
    description: "Transition from paper-based processes to digital workflows, promoting environmental sustainability.",
  },
  {
    icon: Award,
    title: "Minimize Errors",
    description: "Automated validation checks ensure document compliance and reduce filing errors.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero-gradient py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground">
              About the System
            </span>
            <h1 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              Transforming Kenya's
              <span className="block text-secondary">Judicial System</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              A comprehensive digital solution designed to modernize court administration and improve access to justice across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Card className="border-secondary/20 bg-card shadow-judiciary">
              <CardContent className="p-8 lg:p-12">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <BookOpen className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold">System Overview</h2>
                </div>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    The <strong className="text-foreground">NASSA Court Judiciary Filing System</strong> is a digital solution designed to streamline the submission, management, and retrieval of legal documents within the Kenyan courts environment.
                  </p>
                  <p>
                    This platform replaces traditional paper-based processes with a secure, efficient digital workflow that enhances transparency, reduces operational costs, and improves accessibility for all court stakeholders.
                  </p>
                  <p>
                    By leveraging modern technology, the system ensures that judges, court clerks, attorneys, and litigants can efficiently manage court proceedings while maintaining the highest standards of data security and compliance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Our Mission
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Key Objectives</h2>
            <p className="text-lg text-muted-foreground">
              The NASSA Court Filing System is built on core principles that guide our mission to transform judicial administration.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {objectives.map((objective, index) => (
              <Card
                key={index}
                className="group border-border/50 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-card-hover"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <objective.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{objective.title}</h3>
                  <p className="text-muted-foreground">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                Our Vision
              </span>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                A Modern, Efficient Judiciary for All Kenyans
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  We envision a judicial system where technology empowers efficient case management, transparent proceedings, and equal access to justice for all citizens.
                </p>
                <p>
                  The NASSA Court Filing System is a cornerstone of Kenya's digital transformation agenda, aligning with Vision 2030 goals for improved public service delivery.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-hero-gradient p-8 text-primary-foreground">
                <h3 className="mb-6 text-xl font-semibold">System Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span>24/7 access to case filing and document submission</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span>Real-time case tracking and status updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span>Secure document storage and retrieval</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span>Automated notifications for hearings and deadlines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span>Reduced operational costs and processing time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
