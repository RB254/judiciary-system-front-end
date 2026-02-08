import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calendar,
  Search,
  Filter,
  Clock,
  MapPin,
  User,
  Scale,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Mock cause list data
const causeListData = [
  {
    id: 1,
    caseNumber: "HCCC/001/2024",
    caseTitle: "Republic vs. John Kamau",
    caseType: "Criminal",
    court: "High Court - Nairobi",
    judge: "Hon. Justice M. Wanjiku",
    time: "09:00 AM",
    courtroom: "Court 1",
    status: "Scheduled",
  },
  {
    id: 2,
    caseNumber: "ELCC/015/2024",
    caseTitle: "ABC Ltd vs. XYZ Corp",
    caseType: "Commercial",
    court: "High Court - Nairobi",
    judge: "Hon. Justice P. Omondi",
    time: "09:30 AM",
    courtroom: "Court 3",
    status: "Scheduled",
  },
  {
    id: 3,
    caseNumber: "FECC/042/2024",
    caseTitle: "Mary Wambui vs. State",
    caseType: "Civil",
    court: "Environment & Land Court",
    judge: "Hon. Justice K. Nyaga",
    time: "10:00 AM",
    courtroom: "Court 5",
    status: "In Progress",
  },
  {
    id: 4,
    caseNumber: "SPMCC/089/2024",
    caseTitle: "Estate of Late James Mwangi",
    caseType: "Succession",
    court: "Family Court - Nairobi",
    judge: "Hon. Justice S. Mutua",
    time: "11:00 AM",
    courtroom: "Court 2",
    status: "Scheduled",
  },
  {
    id: 5,
    caseNumber: "HCCC/112/2024",
    caseTitle: "Republic vs. Peter Otieno",
    caseType: "Criminal",
    court: "High Court - Nairobi",
    judge: "Hon. Justice M. Wanjiku",
    time: "02:00 PM",
    courtroom: "Court 1",
    status: "Scheduled",
  },
  {
    id: 6,
    caseNumber: "ELCC/023/2024",
    caseTitle: "Nation Media vs. Daily Post",
    caseType: "Commercial",
    court: "High Court - Nairobi",
    judge: "Hon. Justice P. Omondi",
    time: "02:30 PM",
    courtroom: "Court 3",
    status: "Adjourned",
  },
  {
    id: 7,
    caseNumber: "MISC/045/2024",
    caseTitle: "Jane Achieng vs. County Govt",
    caseType: "Civil",
    court: "Magistrate Court - Nairobi",
    judge: "Hon. Magistrate L. Kipchoge",
    time: "03:00 PM",
    courtroom: "Court 7",
    status: "Scheduled",
  },
  {
    id: 8,
    caseNumber: "HCREV/008/2024",
    caseTitle: "Review Application - Tax Matter",
    caseType: "Tax",
    court: "Tax Appeals Tribunal",
    judge: "Hon. Justice R. Karanja",
    time: "03:30 PM",
    courtroom: "Tribunal Room A",
    status: "Scheduled",
  },
];

const courts = [
  "All Courts",
  "High Court - Nairobi",
  "Environment & Land Court",
  "Family Court - Nairobi",
  "Magistrate Court - Nairobi",
  "Tax Appeals Tribunal",
];

const caseTypes = [
  "All Types",
  "Criminal",
  "Civil",
  "Commercial",
  "Succession",
  "Tax",
];

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case "In Progress":
      return "badge-processing";
    case "Scheduled":
      return "badge-approved";
    case "Adjourned":
      return "badge-pending";
    default:
      return "";
  }
};

const CauseList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourt, setSelectedCourt] = useState("All Courts");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  const filteredData = causeListData.filter((item) => {
    const matchesSearch =
      item.caseNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.caseTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.judge.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourt = selectedCourt === "All Courts" || item.court === selectedCourt;
    const matchesType = selectedType === "All Types" || item.caseType === selectedType;
    return matchesSearch && matchesCourt && matchesType;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-KE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero-gradient py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground">
              Daily Schedule
            </span>
            <h1 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              Court
              <span className="block text-secondary">Cause List</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              View the daily schedule of court hearings across all court stations. Filter by court, case type, and date.
            </p>
          </div>
        </div>
      </section>

      {/* Cause List Content */}
      <section className="py-12 lg:py-16">
        <div className="container">
          {/* Filters */}
          <Card className="mb-8 border-border/50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Filter className="h-5 w-5 text-primary" />
                Filter Cause List
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Date Picker */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Court Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Court Station</label>
                  <Select value={selectedCourt} onValueChange={setSelectedCourt}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select court" />
                    </SelectTrigger>
                    <SelectContent>
                      {courts.map((court) => (
                        <SelectItem key={court} value={court}>
                          {court}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Case Type Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Case Type</label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {caseTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Search */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Case number, title, or judge..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Date Navigation */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <span className="text-lg font-semibold">{formatDate(selectedDate)}</span>
              <Button variant="outline" size="sm">
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Showing {filteredData.length} of {causeListData.length} cases
            </p>
          </div>

          {/* Cause List Table */}
          <Card className="border-border/50 shadow-judiciary">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-semibold">Time</TableHead>
                      <TableHead className="font-semibold">Case Number</TableHead>
                      <TableHead className="font-semibold">Case Title</TableHead>
                      <TableHead className="font-semibold">Type</TableHead>
                      <TableHead className="font-semibold">Court</TableHead>
                      <TableHead className="font-semibold">Presiding Judge</TableHead>
                      <TableHead className="font-semibold">Courtroom</TableHead>
                      <TableHead className="font-semibold">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredData.map((item) => (
                      <TableRow key={item.id} className="hover:bg-muted/30">
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{item.time}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="font-mono text-sm font-medium text-primary">
                            {item.caseNumber}
                          </span>
                        </TableCell>
                        <TableCell className="max-w-[200px] truncate">
                          {item.caseTitle}
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="font-normal">
                            {item.caseType}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Scale className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{item.court}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{item.judge}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{item.courtroom}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusBadgeClass(item.status)}>
                            {item.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                    {filteredData.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={8} className="py-12 text-center">
                          <div className="text-muted-foreground">
                            <Scale className="mx-auto mb-4 h-12 w-12 opacity-50" />
                            <p className="text-lg font-medium">No cases found</p>
                            <p className="text-sm">Try adjusting your filters</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default CauseList;
