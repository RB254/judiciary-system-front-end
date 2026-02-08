import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Building,
  HelpCircle,
  FileQuestion,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Supreme Court Building", "City Hall Way", "Nairobi, Kenya"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 20 221 1000", "+254 20 221 2000"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["support@nassacourt.go.ke", "help@nassacourt.go.ke"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 8:00 AM - 12:00 PM"],
  },
];

const supportCategories = [
  { value: "filing", label: "Case Filing Support" },
  { value: "technical", label: "Technical Issues" },
  { value: "account", label: "Account & Access" },
  { value: "documents", label: "Document Upload" },
  { value: "sessions", label: "Court Sessions" },
  { value: "other", label: "Other Inquiries" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    caseNumber: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Your message has been sent successfully!", {
      description: "Our support team will respond within 24-48 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "",
      caseNumber: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero-gradient py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground">
              Get in Touch
            </span>
            <h1 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              Contact
              <span className="block text-secondary">Judiciary Support</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Have questions about the NASSA Court Filing System? Our support team is here to help you with any inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border/50 shadow-judiciary">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                      <MessageSquare className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <CardTitle>Send us a Message</CardTitle>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Fill out the form and we'll respond within 24-48 hours
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+254 700 000 000"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Support Category *</Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => handleChange("category", value)}
                          required
                        >
                          <SelectTrigger id="category">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            {supportCategories.map((category) => (
                              <SelectItem key={category.value} value={category.value}>
                                {category.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="caseNumber">Case Number (if applicable)</Label>
                      <Input
                        id="caseNumber"
                        placeholder="e.g., HCCC/001/2024"
                        value={formData.caseNumber}
                        onChange={(e) => handleChange("caseNumber", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Describe your inquiry or issue in detail..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details Card */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Help Card */}
              <Card className="border-secondary/20 bg-secondary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-secondary" />
                    Need Quick Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Check our frequently asked questions for immediate answers to common queries.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#">
                      <FileQuestion className="h-4 w-4" />
                      View FAQs
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
