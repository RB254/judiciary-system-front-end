import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Upload as UploadIcon,
  FileText,
  File,
  X,
  CheckCircle,
  AlertCircle,
  Cloud,
  FileCheck,
  Info,
} from "lucide-react";

const documentTypes = [
  { value: "pleading", label: "Pleading" },
  { value: "motion", label: "Motion" },
  { value: "affidavit", label: "Affidavit" },
  { value: "evidence", label: "Evidence/Exhibit" },
  { value: "order", label: "Court Order" },
  { value: "judgment", label: "Judgment" },
  { value: "other", label: "Other" },
];

const courts = [
  { value: "hc-nairobi", label: "High Court - Nairobi" },
  { value: "elc-nairobi", label: "Environment & Land Court - Nairobi" },
  { value: "fc-nairobi", label: "Family Court - Nairobi" },
  { value: "mc-nairobi", label: "Magistrate Court - Nairobi" },
  { value: "tat", label: "Tax Appeals Tribunal" },
];

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  status: "uploading" | "processing" | "success" | "error";
  progress: number;
  error?: string;
}

const Upload = () => {
  const [formData, setFormData] = useState({
    caseNumber: "",
    documentType: "",
    court: "",
    description: "",
  });
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFiles(files);
    }
  };

  const handleFiles = (files: File[]) => {
    const validFiles = files.filter((file) => {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(file.type)) {
        toast.error(`Invalid file type: ${file.name}`, {
          description: "Only PDF and Word documents are accepted.",
        });
        return false;
      }
      if (file.size > 10 * 1024 * 1024) {
        toast.error(`File too large: ${file.name}`, {
          description: "Maximum file size is 10MB.",
        });
        return false;
      }
      return true;
    });

    const newFiles: UploadedFile[] = validFiles.map((file) => ({
      id: Math.random().toString(36).substring(7),
      name: file.name,
      size: file.size,
      type: file.type,
      status: "uploading",
      progress: 0,
    }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);

    // Simulate upload progress
    newFiles.forEach((file) => {
      simulateUpload(file.id);
    });
  };

  const simulateUpload = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setUploadedFiles((prev) =>
          prev.map((f) =>
            f.id === fileId
              ? { ...f, progress: 100, status: "processing" }
              : f
          )
        );
        // Simulate processing
        setTimeout(() => {
          setUploadedFiles((prev) =>
            prev.map((f) =>
              f.id === fileId ? { ...f, status: "success" } : f
            )
          );
        }, 1500);
      } else {
        setUploadedFiles((prev) =>
          prev.map((f) => (f.id === fileId ? { ...f, progress } : f))
        );
      }
    }, 500);
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const getFileIcon = (type: string) => {
    if (type === "application/pdf") return <FileText className="h-5 w-5 text-destructive" />;
    return <File className="h-5 w-5 text-primary" />;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (uploadedFiles.length === 0) {
      toast.error("Please upload at least one document.");
      return;
    }

    if (uploadedFiles.some((f) => f.status !== "success")) {
      toast.error("Please wait for all files to finish uploading.");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Documents submitted successfully!", {
      description: `Case ${formData.caseNumber} - ${uploadedFiles.length} document(s) filed.`,
    });

    setFormData({
      caseNumber: "",
      documentType: "",
      court: "",
      description: "",
    });
    setUploadedFiles([]);
    setIsSubmitting(false);
  };

  const allFilesReady = uploadedFiles.length > 0 && uploadedFiles.every((f) => f.status === "success");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero-gradient py-12 lg:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground">
              Document Filing
            </span>
            <h1 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Upload Court
              <span className="block text-secondary">Documents</span>
            </h1>
            <p className="text-primary-foreground/80">
              Submit legal documents securely. Automated validation ensures compliance with court requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Upload Form */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-8 lg:grid-cols-5">
                {/* File Upload Area */}
                <div className="lg:col-span-3">
                  <Card className="border-border/50 shadow-judiciary">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <UploadIcon className="h-5 w-5 text-primary" />
                        Upload Documents
                      </CardTitle>
                      <CardDescription>
                        Drag and drop files or click to browse. Accepted formats: PDF, DOC, DOCX (max 10MB each)
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Drop Zone */}
                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`relative rounded-lg border-2 border-dashed p-8 text-center transition-colors ${
                          isDragging
                            ? "border-secondary bg-secondary/10"
                            : "border-border hover:border-primary/50 hover:bg-muted/30"
                        }`}
                      >
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          multiple
                          onChange={handleFileInput}
                          className="absolute inset-0 cursor-pointer opacity-0"
                        />
                        <Cloud className="mx-auto h-12 w-12 text-muted-foreground" />
                        <p className="mt-4 text-lg font-medium">
                          Drop files here or click to upload
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          PDF, DOC, DOCX • Max 10MB per file
                        </p>
                      </div>

                      {/* Uploaded Files */}
                      {uploadedFiles.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="font-medium">Uploaded Files</h4>
                          {uploadedFiles.map((file) => (
                            <div
                              key={file.id}
                              className="flex items-center gap-4 rounded-lg border border-border/50 p-4"
                            >
                              {getFileIcon(file.type)}
                              <div className="flex-1 min-w-0">
                                <p className="truncate font-medium">{file.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {formatFileSize(file.size)}
                                </p>
                                {file.status === "uploading" && (
                                  <Progress value={file.progress} className="mt-2 h-1.5" />
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                {file.status === "uploading" && (
                                  <span className="text-sm text-muted-foreground">
                                    {Math.round(file.progress)}%
                                  </span>
                                )}
                                {file.status === "processing" && (
                                  <Badge className="badge-processing">Processing</Badge>
                                )}
                                {file.status === "success" && (
                                  <CheckCircle className="h-5 w-5 text-judiciary-emerald" />
                                )}
                                {file.status === "error" && (
                                  <AlertCircle className="h-5 w-5 text-destructive" />
                                )}
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeFile(file.id)}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Case Details */}
                <div className="lg:col-span-2">
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileCheck className="h-5 w-5 text-secondary" />
                        Case Details
                      </CardTitle>
                      <CardDescription>
                        Provide case information for filing
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="caseNumber">Case Number *</Label>
                        <Input
                          id="caseNumber"
                          placeholder="e.g., HCCC/001/2024"
                          value={formData.caseNumber}
                          onChange={(e) => handleChange("caseNumber", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="court">Court Station *</Label>
                        <Select
                          value={formData.court}
                          onValueChange={(value) => handleChange("court", value)}
                          required
                        >
                          <SelectTrigger id="court">
                            <SelectValue placeholder="Select court" />
                          </SelectTrigger>
                          <SelectContent>
                            {courts.map((court) => (
                              <SelectItem key={court.value} value={court.value}>
                                {court.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="documentType">Document Type *</Label>
                        <Select
                          value={formData.documentType}
                          onValueChange={(value) => handleChange("documentType", value)}
                          required
                        >
                          <SelectTrigger id="documentType">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            {documentTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Brief description of the document..."
                          rows={3}
                          value={formData.description}
                          onChange={(e) => handleChange("description", e.target.value)}
                        />
                      </div>

                      {/* Info Box */}
                      <div className="rounded-lg bg-muted/50 p-4">
                        <div className="flex gap-3">
                          <Info className="h-5 w-5 shrink-0 text-primary" />
                          <div className="text-sm text-muted-foreground">
                            <p className="font-medium text-foreground">Filing Guidelines</p>
                            <ul className="mt-2 list-inside list-disc space-y-1">
                              <li>All documents must be in PDF or Word format</li>
                              <li>Ensure documents are properly signed</li>
                              <li>Filing fees may apply based on document type</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        variant="gold"
                        size="lg"
                        disabled={!allFilesReady || isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <FileCheck className="h-4 w-4" />
                            Submit Documents
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Upload;
