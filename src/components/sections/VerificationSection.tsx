
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UserCheck, Eye, CheckCircle, XCircle, Clock, FileText } from 'lucide-react';

export const VerificationSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('pending');

  const verificationItems = [
    {
      id: 1,
      studentName: 'John Doe',
      rollNo: '2024CS001',
      type: 'Exam Form',
      submissionDate: '2024-06-25',
      status: 'pending',
      documents: ['Photo', 'Signature', 'Previous Marksheet'],
      priority: 'high',
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      rollNo: '2024CS002',
      type: 'Document Verification',
      submissionDate: '2024-06-24',
      status: 'approved',
      documents: ['ID Proof', 'Address Proof'],
      priority: 'medium',
    },
    {
      id: 3,
      studentName: 'Mike Johnson',
      rollNo: '2024CS003',
      type: 'Fee Exemption',
      submissionDate: '2024-06-23',
      status: 'rejected',
      documents: ['Income Certificate', 'Caste Certificate'],
      priority: 'low',
      rejectionReason: 'Incomplete documentation',
    },
    {
      id: 4,
      studentName: 'Sarah Wilson',
      rollNo: '2024CS004',
      type: 'Transfer Certificate',
      submissionDate: '2024-06-22',
      status: 'pending',
      documents: ['TC Request', 'Academic Records'],
      priority: 'medium',
    },
  ];

  const categories = [
    { key: 'pending', label: 'Pending', count: 2, color: 'yellow' },
    { key: 'approved', label: 'Approved', count: 1, color: 'green' },
    { key: 'rejected', label: 'Rejected', count: 1, color: 'red' },
  ];

  const filteredItems = verificationItems.filter(item => item.status === selectedCategory);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'approved':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'rejected':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'low':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Verification Center
          </h1>
          <p className="text-gray-600 mt-2">Review and verify student documents and applications</p>
        </div>
      </div>

      {/* Category Tabs */}
      <Card>
        <CardContent className="p-4">
          <div className="flex space-x-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.key)}
                className="whitespace-nowrap"
              >
                {category.label}
                <Badge 
                  variant="secondary" 
                  className={`ml-2 ${
                    category.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' :
                    category.color === 'green' ? 'bg-green-100 text-green-700' :
                    'bg-red-100 text-red-700'
                  }`}
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Verification Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <UserCheck className="mr-2 h-5 w-5" />
            {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Verifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="p-4 border rounded-xl hover:shadow-md transition-all bg-gradient-to-r from-white to-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                      {getStatusIcon(item.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-lg">{item.type}</h3>
                        <Badge variant="outline" className={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                        <Badge variant="outline" className={getPriorityColor(item.priority)}>
                          {item.priority} priority
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-1">
                        Student: {item.studentName} ({item.rollNo})
                      </p>
                      <p className="text-sm text-gray-500 mb-3">
                        Submitted: {item.submissionDate}
                      </p>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <FileText className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Documents:</span>
                        {item.documents.map((doc, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {doc}
                          </Badge>
                        ))}
                      </div>

                      {item.rejectionReason && (
                        <div className="p-2 bg-red-50 border border-red-200 rounded text-sm text-red-700">
                          <strong>Rejection Reason:</strong> {item.rejectionReason}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                    {item.status === 'pending' && (
                      <>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 flex-col space-y-1">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-xs">Bulk Approve</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-1">
              <FileText className="h-5 w-5 text-blue-600" />
              <span className="text-xs">Export Report</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-1">
              <UserCheck className="h-5 w-5 text-purple-600" />
              <span className="text-xs">Assign Reviewer</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-1">
              <Clock className="h-5 w-5 text-orange-600" />
              <span className="text-xs">Set Deadline</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
