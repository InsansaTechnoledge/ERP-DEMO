import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  FolderOpen, Upload, Download, Eye, CheckCircle, XCircle, Clock, 
  FileText, Image, File, AlertCircle, Plus, Trash2
} from 'lucide-react';

export const DocumentsSection = () => {
  const [selectedDocType, setSelectedDocType] = useState('');
  
  const documents = [
    {
      id: 'DOC001',
      name: 'Aadhar Card',
      type: 'Identity Proof',
      fileName: 'aadhar_arjun_kumar.pdf',
      size: '2.1 MB',
      uploadDate: '2024-01-15',
      status: 'Verified',
      required: true,
      description: 'Government issued identity document'
    },
    {
      id: 'DOC002', 
      name: '10th Mark Sheet',
      type: 'Academic Document',
      fileName: '10th_marksheet_cbse.pdf',
      size: '1.8 MB',
      uploadDate: '2024-01-15',
      status: 'Verified',
      required: true,
      description: 'Class 10 examination certificate'
    },
    {
      id: 'DOC003',
      name: '12th Mark Sheet',
      type: 'Academic Document', 
      fileName: '12th_marksheet_rbse.pdf',
      size: '2.3 MB',
      uploadDate: '2024-01-15',
      status: 'Verified',
      required: true,
      description: 'Class 12 examination certificate'
    },
    {
      id: 'DOC004',
      name: 'Transfer Certificate',
      type: 'Academic Document',
      fileName: 'tc_previous_college.pdf',
      size: '1.5 MB',
      uploadDate: '2024-01-20',
      status: 'Under Review',
      required: true,
      description: 'Transfer certificate from previous institution'
    },
    {
      id: 'DOC005',
      name: 'Character Certificate',
      type: 'Academic Document',
      fileName: 'character_cert.pdf',
      size: '1.2 MB',
      uploadDate: '2024-01-20',
      status: 'Pending',
      required: true,
      description: 'Character certificate from previous institution'
    },
    {
      id: 'DOC006',
      name: 'Passport Size Photo',
      type: 'Photograph',
      fileName: 'passport_photo.jpg',
      size: '245 KB',
      uploadDate: '2024-01-15',
      status: 'Verified',
      required: true,
      description: 'Recent passport size photograph'
    },
    {
      id: 'DOC007',
      name: 'Caste Certificate',
      type: 'Certificate',
      fileName: 'caste_certificate.pdf',
      size: '1.8 MB',
      uploadDate: '2024-02-01',
      status: 'Rejected',
      required: false,
      description: 'Government issued caste certificate',
      rejectReason: 'Document is not clear, please upload a clearer copy'
    },
    {
      id: 'DOC008',
      name: 'Income Certificate',
      type: 'Certificate',
      fileName: 'income_certificate.pdf',
      size: '1.6 MB',
      uploadDate: '2024-02-05',
      status: 'Verified',
      required: false,
      description: 'Family income certificate for scholarship'
    }
  ];

  const documentTypes = [
    { value: 'identity', label: 'Identity Proof' },
    { value: 'academic', label: 'Academic Document' },
    { value: 'certificate', label: 'Certificate' },
    { value: 'photograph', label: 'Photograph' },
    { value: 'other', label: 'Other' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Verified':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Rejected':
        return <XCircle className="h-4 w-4 text-red-600" />;
      case 'Under Review':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'Pending':
        return <AlertCircle className="h-4 w-4 text-orange-600" />;
      default:
        return <File className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Verified':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Verified</Badge>;
      case 'Rejected':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Rejected</Badge>;
      case 'Under Review':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Under Review</Badge>;
      case 'Pending':
        return <Badge className="bg-orange-100 text-orange-800 border-orange-200">Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif'].includes(extension || '')) {
      return <Image className="h-5 w-5 text-blue-600" />;
    } else if (['pdf'].includes(extension || '')) {
      return <FileText className="h-5 w-5 text-red-600" />;
    }
    return <File className="h-5 w-5 text-gray-600" />;
  };

  const requiredDocs = documents.filter(doc => doc.required);
  const optionalDocs = documents.filter(doc => !doc.required);
  const verifiedCount = documents.filter(doc => doc.status === 'Verified').length;
  const pendingCount = documents.filter(doc => doc.status === 'Pending' || doc.status === 'Under Review').length;
  const rejectedCount = documents.filter(doc => doc.status === 'Rejected').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Document Management
          </h1>
          <p className="text-gray-600 mt-2">Upload and manage your academic documents</p>
        </div>
        <Button className="university-gradient">
          <Plus className="mr-2 h-4 w-4" />
          Upload New Document
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700">Total Documents</p>
                <p className="text-2xl font-bold text-blue-900">{documents.length}</p>
              </div>
              <FolderOpen className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700">Verified</p>
                <p className="text-2xl font-bold text-green-900">{verifiedCount}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-700">Pending</p>
                <p className="text-2xl font-bold text-yellow-900">{pendingCount}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-red-700">Rejected</p>
                <p className="text-2xl font-bold text-red-900">{rejectedCount}</p>
              </div>
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upload New Document */}
      <Card className="shadow-lg border-orange-100">
        <CardHeader>
          <CardTitle className="flex items-center text-orange-800">
            <Upload className="mr-2 h-5 w-5" />
            Upload New Document
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="docType">Document Type</Label>
              <Select value={selectedDocType} onValueChange={setSelectedDocType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select document type" />
                </SelectTrigger>
                <SelectContent>
                  {documentTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="docName">Document Name</Label>
              <Input id="docName" placeholder="Enter document name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fileUpload">Choose File</Label>
              <Input id="fileUpload" type="file" accept=".pdf,.jpg,.jpeg,.png" />
            </div>
          </div>
          <Button className="w-full mt-4 university-gradient">
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
        </CardContent>
      </Card>

      {/* Required Documents */}
      <Card className="shadow-lg border-orange-100">
        <CardHeader>
          <CardTitle className="flex items-center text-orange-800">
            <AlertCircle className="mr-2 h-5 w-5" />
            Required Documents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            {requiredDocs.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-orange-50/50 transition-colors">
                <div className="flex items-center space-x-4">
                  {getFileIcon(doc.fileName)}
                  <div>
                    <h4 className="font-semibold text-gray-900">{doc.name}</h4>
                    <p className="text-sm text-gray-600">{doc.description}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-500">{doc.fileName}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{doc.size}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{doc.uploadDate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(doc.status)}
                    {getStatusBadge(doc.status)}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    {doc.status === 'Rejected' && (
                      <Button size="sm" className="university-gradient">
                        <Upload className="h-4 w-4 mr-1" />
                        Re-upload
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Optional Documents */}
      <Card className="shadow-lg border-orange-100">
        <CardHeader>
          <CardTitle className="flex items-center text-orange-800">
            <FileText className="mr-2 h-5 w-5" />
            Optional Documents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            {optionalDocs.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-orange-50/50 transition-colors">
                <div className="flex items-center space-x-4">
                  {getFileIcon(doc.fileName)}
                  <div>
                    <h4 className="font-semibold text-gray-900">{doc.name}</h4>
                    <p className="text-sm text-gray-600">{doc.description}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-500">{doc.fileName}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{doc.size}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{doc.uploadDate}</span>
                    </div>
                    {doc.status === 'Rejected' && doc.rejectReason && (
                      <div className="mt-2 p-2 bg-red-50 rounded border border-red-200">
                        <p className="text-sm text-red-700">{doc.rejectReason}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(doc.status)}
                    {getStatusBadge(doc.status)}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    {doc.status === 'Rejected' && (
                      <Button size="sm" className="university-gradient">
                        <Upload className="h-4 w-4 mr-1" />
                        Re-upload
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};