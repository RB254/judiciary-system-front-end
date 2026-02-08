import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import {
  FileText,
  FolderOpen,
  Clock,
  Calendar,
  Bell,
  Upload,
  Eye,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  MoreHorizontal,
  Plus,
  Search,
  Filter,
  ArrowUpRight,
  Gavel,
} from "lucide-react";

// Mock dashboard data
const stats = [
  {
    title: "Total Cases",
    value: "24",
    change: "+3 this month",
    icon: FolderOpen,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Pending Filings",
    value: "5",
    change: "2 require action",
    icon: Clock,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Upcoming Hearings",
    value: "3",
    change: "Next: Tomorrow",
    icon: Calendar,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Documents Filed",
    value: "87",
    change: "+12 this month",
    icon: FileText,
    color: "text-judiciary-emerald",
    bgColor: "bg-judiciary-emerald/10",
  },
];

const recentFilings = [
  {
    id: 1,
    caseNumber: "HCCC/001/2024",
    title: "Motion for Summary Judgment",
    type: "Motion",
    status: "Submitted",
    date: "2024-01-15",
    progress: 100,
  },
  {
    id: 2,
    caseNumber: "ELCC/015/2024",
    title: "Witness Statement - John Doe",
    type: "Evidence",
    status: "Under Review",
    date: "2024-01-14",
    progress: 60,
  },
  {
    id: 3,
    caseNumber: "HCCC/001/2024",
    title: "Response to Counterclaim",
    type: "Pleading",
    status: "Pending Payment",
    date: "2024-01-13",
    progress: 40,
  },
  {
    id: 4,
    caseNumber: "FECC/042/2024",
    title: "Expert Report - Land Survey",
    type: "Evidence",
    status: "Submitted",
    date: "2024-01-12",
    progress: 100,
  },
];

const upcomingHearings = [
  {
    id: 1,
    caseNumber: "HCCC/001/2024",
    title: "Republic vs. John Kamau",
    date: "2024-01-20",
    time: "09:00 AM",
    court: "High Court - Court 1",
    judge: "Hon. Justice M. Wanjiku",
    type: "Hearing",
  },
  {
    id: 2,
    caseNumber: "ELCC/015/2024",
    title: "ABC Ltd vs. XYZ Corp",
    date: "2024-01-22",
    time: "10:30 AM",
    court: "High Court - Court 3",
    judge: "Hon. Justice P. Omondi",
    type: "Mention",
  },
  {
    id: 3,
    caseNumber: "FECC/042/2024",
    title: "Mary Wambui vs. State",
    date: "2024-01-25",
    time: "02:00 PM",
    court: "Environment Court - Court 5",
    judge: "Hon. Justice K. Nyaga",
    type: "Ruling",
  },
];

const notifications = [
  {
    id: 1,
    type: "success",
    message: "Document successfully filed for case HCCC/001/2024",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "warning",
    message: "Filing deadline approaching for case ELCC/015/2024",
    time: "5 hours ago",
  },
  {
    id: 3,
    type: "info",
    message: "Court session scheduled for tomorrow at 9:00 AM",
    time: "1 day ago",
  },
  {
    id: 4,
    type: "error",
    message: "Document rejected - Please resubmit with corrections",
    time: "2 days ago",
  },
];

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "Submitted":
      return "badge-approved";
    case "Under Review":
      return "badge-processing";
    case "Pending Payment":
      return "badge-pending";
    default:
      return "";
  }
};

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "success":
      return <CheckCircle className="h-5 w-5 text-judiciary-emerald" />;
    case "warning":
      return <AlertCircle className="h-5 w-5 text-secondary" />;
    case "error":
      return <AlertCircle className="h-5 w-5 text-destructive" />;
    default:
      return <Bell className="h-5 w-5 text-primary" />;
  }
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Layout>
      {/* Dashboard Header */}
      <section className="border-b border-border bg-muted/30 py-8">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold md:text-3xl">Dashboard</h1>
              <p className="mt-1 text-muted-foreground">
                Welcome back, Advocate John Mwangi
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Search className="h-4 w-4" />
                Search Cases
              </Button>
              <Button variant="gold" asChild>
                <Link to="/upload">
                  <Plus className="h-4 w-4" />
                  File New Document
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container">
          {/* Stats Cards */}
          <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="border-border/50 transition-shadow hover:shadow-card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {stat.change}
                      </p>
                    </div>
                    <div className={`rounded-lg p-3 ${stat.bgColor}`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="filings">Recent Filings</TabsTrigger>
              <TabsTrigger value="hearings">Upcoming Hearings</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Recent Filings */}
                <Card className="border-border/50">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div>
                      <CardTitle className="text-lg">Recent Filings</CardTitle>
                      <CardDescription>Your latest document submissions</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to="/upload">
                        View All
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentFilings.slice(0, 3).map((filing) => (
                        <div
                          key={filing.id}
                          className="flex items-center justify-between rounded-lg border border-border/50 p-4 transition-colors hover:bg-muted/30"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">{filing.title}</p>
                              <p className="text-sm text-muted-foreground">
                                {filing.caseNumber} • {filing.type}
                              </p>
                            </div>
                          </div>
                          <Badge className={getStatusBadgeVariant(filing.status)}>
                            {filing.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Hearings */}
                <Card className="border-border/50">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div>
                      <CardTitle className="text-lg">Upcoming Hearings</CardTitle>
                      <CardDescription>Your scheduled court sessions</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to="/cause-list">
                        View All
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingHearings.map((hearing) => (
                        <div
                          key={hearing.id}
                          className="flex items-start justify-between rounded-lg border border-border/50 p-4 transition-colors hover:bg-muted/30"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                              <Gavel className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                              <p className="font-medium">{hearing.title}</p>
                              <p className="text-sm text-muted-foreground">
                                {hearing.caseNumber}
                              </p>
                              <p className="mt-1 text-xs text-muted-foreground">
                                {hearing.date} at {hearing.time}
                              </p>
                            </div>
                          </div>
                          <Badge variant="secondary">{hearing.type}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Notifications */}
              <Card className="border-border/50">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle className="text-lg">Recent Notifications</CardTitle>
                    <CardDescription>System alerts and updates</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    Mark All Read
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="flex items-start gap-4 rounded-lg border border-border/50 p-4 transition-colors hover:bg-muted/30"
                      >
                        {getNotificationIcon(notification.type)}
                        <div className="flex-1">
                          <p className="text-sm">{notification.message}</p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="filings">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>All Recent Filings</CardTitle>
                  <CardDescription>Complete list of your document submissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentFilings.map((filing) => (
                      <div
                        key={filing.id}
                        className="flex items-center justify-between rounded-lg border border-border/50 p-4 transition-colors hover:bg-muted/30"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{filing.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {filing.caseNumber} • {filing.type} • {filing.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-32">
                            <Progress value={filing.progress} className="h-2" />
                          </div>
                          <Badge className={getStatusBadgeVariant(filing.status)}>
                            {filing.status}
                          </Badge>
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hearings">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>All Upcoming Hearings</CardTitle>
                  <CardDescription>Your scheduled court sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingHearings.map((hearing) => (
                      <div
                        key={hearing.id}
                        className="flex items-start justify-between rounded-lg border border-border/50 p-4 transition-colors hover:bg-muted/30"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                            <Gavel className="h-6 w-6 text-secondary" />
                          </div>
                          <div>
                            <p className="font-medium">{hearing.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {hearing.caseNumber}
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <Badge variant="outline">
                                <Calendar className="mr-1 h-3 w-3" />
                                {hearing.date}
                              </Badge>
                              <Badge variant="outline">
                                <Clock className="mr-1 h-3 w-3" />
                                {hearing.time}
                              </Badge>
                            </div>
                            <p className="mt-2 text-xs text-muted-foreground">
                              {hearing.court} • {hearing.judge}
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary">{hearing.type}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>All Notifications</CardTitle>
                  <CardDescription>System alerts and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="flex items-start gap-4 rounded-lg border border-border/50 p-4 transition-colors hover:bg-muted/30"
                      >
                        {getNotificationIcon(notification.type)}
                        <div className="flex-1">
                          <p className="text-sm">{notification.message}</p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {notification.time}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Dismiss
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
