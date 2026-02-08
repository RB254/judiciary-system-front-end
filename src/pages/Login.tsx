import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import {
  Scale,
  LogIn,
  User,
  Lock,
  Mail,
  Building,
  Gavel,
  Users,
  Briefcase,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

const userRoles = [
  {
    id: "judge",
    icon: Gavel,
    title: "Judge",
    description: "Access case files and manage proceedings",
  },
  {
    id: "clerk",
    icon: Building,
    title: "Court Clerk",
    description: "Process filings and manage records",
  },
  {
    id: "attorney",
    icon: Briefcase,
    title: "Attorney/Lawyer",
    description: "File cases and track client matters",
  },
  {
    id: "litigant",
    icon: Users,
    title: "Litigant",
    description: "View case status and documents",
  },
];

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    lawSocietyNumber: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Login successful!", {
      description: "Redirecting to your dashboard...",
    });
    setIsLoading(false);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!registerData.agreeTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Registration successful!", {
      description: "Please check your email to verify your account.",
    });
    setIsLoading(false);
  };

  return (
    <Layout>
      <section className="min-h-[calc(100vh-theme(spacing.16))] bg-muted/30 py-12 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-lg">
            {/* Logo Header */}
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary">
                <Scale className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold">NASSA Court</h1>
              <p className="text-muted-foreground">Judiciary Filing System</p>
            </div>

            <Card className="border-border/50 shadow-judiciary">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <CardHeader className="pb-0">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Sign In</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                  </TabsList>
                </CardHeader>

                <CardContent className="pt-6">
                  {/* Login Tab */}
                  <TabsContent value="login" className="mt-0">
                    <form onSubmit={handleLogin} className="space-y-4">
                      {/* Role Selection */}
                      <div className="space-y-3">
                        <Label>Select Your Role</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {userRoles.map((role) => (
                            <button
                              key={role.id}
                              type="button"
                              onClick={() => setSelectedRole(role.id)}
                              className={`flex flex-col items-center rounded-lg border p-4 text-center transition-all ${
                                selectedRole === role.id
                                  ? "border-secondary bg-secondary/10"
                                  : "border-border hover:border-primary/50 hover:bg-muted/50"
                              }`}
                            >
                              <role.icon
                                className={`h-6 w-6 ${
                                  selectedRole === role.id
                                    ? "text-secondary"
                                    : "text-muted-foreground"
                                }`}
                              />
                              <span className="mt-2 text-sm font-medium">
                                {role.title}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="login-email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="login-email"
                            type="email"
                            placeholder="you@example.com"
                            value={loginData.email}
                            onChange={(e) =>
                              setLoginData({ ...loginData, email: e.target.value })
                            }
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="login-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="login-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={loginData.password}
                            onChange={(e) =>
                              setLoginData({ ...loginData, password: e.target.value })
                            }
                            className="pl-10 pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="remember"
                            checked={loginData.rememberMe}
                            onCheckedChange={(checked) =>
                              setLoginData({ ...loginData, rememberMe: !!checked })
                            }
                          />
                          <label
                            htmlFor="remember"
                            className="text-sm text-muted-foreground"
                          >
                            Remember me
                          </label>
                        </div>
                        <Link
                          to="#"
                          className="text-sm text-primary hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>

                      <Button
                        type="submit"
                        variant="gold"
                        size="lg"
                        disabled={isLoading || !selectedRole}
                        className="w-full"
                      >
                        {isLoading ? (
                          <>
                            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Signing in...
                          </>
                        ) : (
                          <>
                            <LogIn className="h-4 w-4" />
                            Sign In
                          </>
                        )}
                      </Button>
                    </form>
                  </TabsContent>

                  {/* Register Tab */}
                  <TabsContent value="register" className="mt-0">
                    <form onSubmit={handleRegister} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="fullName"
                            placeholder="Enter your full name"
                            value={registerData.fullName}
                            onChange={(e) =>
                              setRegisterData({ ...registerData, fullName: e.target.value })
                            }
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="register-email"
                            type="email"
                            placeholder="you@example.com"
                            value={registerData.email}
                            onChange={(e) =>
                              setRegisterData({ ...registerData, email: e.target.value })
                            }
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="role">User Role</Label>
                        <Select
                          value={registerData.role}
                          onValueChange={(value) =>
                            setRegisterData({ ...registerData, role: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            {userRoles.map((role) => (
                              <SelectItem key={role.id} value={role.id}>
                                {role.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {registerData.role === "attorney" && (
                        <div className="space-y-2">
                          <Label htmlFor="lawSociety">Law Society Number</Label>
                          <Input
                            id="lawSociety"
                            placeholder="e.g., LSK/12345"
                            value={registerData.lawSocietyNumber}
                            onChange={(e) =>
                              setRegisterData({
                                ...registerData,
                                lawSocietyNumber: e.target.value,
                              })
                            }
                          />
                        </div>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="register-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="register-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                            value={registerData.password}
                            onChange={(e) =>
                              setRegisterData({ ...registerData, password: e.target.value })
                            }
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="confirmPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={registerData.confirmPassword}
                            onChange={(e) =>
                              setRegisterData({
                                ...registerData,
                                confirmPassword: e.target.value,
                              })
                            }
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          checked={registerData.agreeTerms}
                          onCheckedChange={(checked) =>
                            setRegisterData({ ...registerData, agreeTerms: !!checked })
                          }
                        />
                        <label htmlFor="terms" className="text-sm text-muted-foreground">
                          I agree to the{" "}
                          <Link to="#" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link to="#" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>

                      <Button
                        type="submit"
                        variant="gold"
                        size="lg"
                        disabled={isLoading}
                        className="w-full"
                      >
                        {isLoading ? (
                          <>
                            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Creating account...
                          </>
                        ) : (
                          <>
                            Create Account
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </TabsContent>
                </CardContent>
              </Tabs>
            </Card>

            {/* Help Link */}
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Need help?{" "}
              <Link to="/contact" className="text-primary hover:underline">
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
