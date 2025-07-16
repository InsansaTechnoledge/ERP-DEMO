
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Plus, Clock, CheckCircle, AlertCircle, User } from 'lucide-react';

interface EnquirySectionProps {
  isAdmin?: boolean;
}

export const EnquirySection = ({ isAdmin = false }: EnquirySectionProps) => {
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);

  const enquiries = [
    {
      id: 1,
      title: 'Fee Payment Issue',
      category: 'Finance',
      status: 'open',
      priority: 'high',
      date: '2024-06-25',
      description: 'Unable to make payment through the portal. Getting error message.',
      responses: 2,
      lastUpdate: '2024-06-26',
    },
    {
      id: 2,
      title: 'Exam Form Submission Problem',
      category: 'Academic',
      status: 'in-progress',
      priority: 'medium',
      date: '2024-06-20',
      description: 'Form is not accepting my uploaded documents. Please help.',
      responses: 1,
      lastUpdate: '2024-06-22',
    },
    {
      id: 3,
      title: 'Transcript Request',
      category: 'Academic',
      status: 'resolved',
      priority: 'low',
      date: '2024-06-15',
      description: 'Need official transcript for job application.',
      responses: 3,
      lastUpdate: '2024-06-18',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'resolved':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      default:
        return <MessageSquare className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'resolved':
        return 'bg-green-100 text-green-700 border-green-300';
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
            {isAdmin ? 'Enquiry Management' : 'Support & Enquiry'}
          </h1>
          <p className="text-gray-600 mt-2">
            {isAdmin ? 'Manage student enquiries and support tickets' : 'Get help and track your support requests'}
          </p>
        </div>
        {!isAdmin && (
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
            <Plus className="h-4 w-4 mr-2" />
            New Enquiry
          </Button>
        )}
      </div>

      {/* Quick Stats for Admin */}
      {isAdmin && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-red-600 font-medium">Open Tickets</p>
                  <p className="text-2xl font-bold text-red-700">12</p>
                </div>
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-yellow-600 font-medium">In Progress</p>
                  <p className="text-2xl font-bold text-yellow-700">8</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 font-medium">Resolved</p>
                  <p className="text-2xl font-bold text-green-700">45</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600 font-medium">Avg Response</p>
                  <p className="text-2xl font-bold text-blue-700">2.4h</p>
                </div>
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Enquiry List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="mr-2 h-5 w-5" />
            {isAdmin ? 'All Enquiries' : 'My Enquiries'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {enquiries.map((enquiry) => (
              <div 
                key={enquiry.id} 
                className="p-4 border rounded-xl hover:shadow-md transition-all cursor-pointer bg-gradient-to-r from-white to-gray-50"
                onClick={() => setSelectedTicket(selectedTicket === enquiry.id ? null : enquiry.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                      {getStatusIcon(enquiry.status)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900">{enquiry.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{enquiry.description}</p>
                      <div className="flex items-center space-x-4 mt-3 text-xs text-gray-500">
                        <span>#{enquiry.id}</span>
                        <span>{enquiry.date}</span>
                        <span>{enquiry.responses} responses</span>
                        <span>Last update: {enquiry.lastUpdate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex space-x-2">
                      <Badge variant="outline" className={getStatusColor(enquiry.status)}>
                        {enquiry.status}
                      </Badge>
                      <Badge variant="outline" className={getPriorityColor(enquiry.priority)}>
                        {enquiry.priority}
                      </Badge>
                    </div>
                    <Badge variant="secondary">{enquiry.category}</Badge>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedTicket === enquiry.id && (
                  <div className="mt-4 pt-4 border-t bg-gray-50 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Student: John Doe (2024CS001)</span>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <p className="text-sm text-gray-700">{enquiry.description}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Reply</Button>
                          {isAdmin && (
                            <>
                              <Button variant="outline" size="sm">Assign</Button>
                              <Button variant="outline" size="sm">Close</Button>
                            </>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">Ticket created: {enquiry.date}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Create New Enquiry Form (for students) */}
      {!isAdmin && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Enquiry</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Academic</option>
                  <option>Finance</option>
                  <option>Technical</option>
                  <option>General</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Brief description of your issue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea 
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Provide detailed information about your enquiry"
              ></textarea>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
              Submit Enquiry
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
