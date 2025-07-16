
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Plus, Calendar, Settings, Users, FileText, Clock } from 'lucide-react';

export const ExamManagementSection = () => {
  const [activeTab, setActiveTab] = useState('sessions');

  const examSessions = [
    {
      id: 1,
      name: 'Spring 2024 Final Examination',
      startDate: '2024-07-15',
      endDate: '2024-07-30',
      status: 'active',
      registrations: 1834,
      subjects: 45,
    },
    {
      id: 2,
      name: 'Winter 2023 Supplementary',
      startDate: '2024-06-01',
      endDate: '2024-06-15',
      status: 'completed',
      registrations: 245,
      subjects: 25,
    },
    {
      id: 3,
      name: 'Fall 2024 Mid-term',
      startDate: '2024-09-15',
      endDate: '2024-09-25',
      status: 'scheduled',
      registrations: 0,
      subjects: 40,
    },
  ];

  const examSchedule = [
    { date: '2024-07-15', time: '09:00 AM', subject: 'Mathematics', hall: 'A-101', students: 120 },
    { date: '2024-07-15', time: '02:00 PM', subject: 'Physics', hall: 'A-102', students: 115 },
    { date: '2024-07-16', time: '09:00 AM', subject: 'Chemistry', hall: 'A-101', students: 108 },
    { date: '2024-07-17', time: '09:00 AM', subject: 'English', hall: 'B-201', students: 145 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'completed':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'scheduled':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Exam Management
          </h1>
          <p className="text-gray-600 mt-2">Create and manage examination sessions and schedules</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
          <Plus className="h-4 w-4 mr-2" />
          Create New Session
        </Button>
      </div>

      {/* Tab Navigation */}
      <Card>
        <CardContent className="p-4">
          <div className="flex space-x-2 overflow-x-auto">
            <Button
              variant={activeTab === 'sessions' ? 'default' : 'outline'}
              onClick={() => setActiveTab('sessions')}
            >
              Exam Sessions
            </Button>
            <Button
              variant={activeTab === 'schedule' ? 'default' : 'outline'}
              onClick={() => setActiveTab('schedule')}
            >
              Schedule Management
            </Button>
            <Button
              variant={activeTab === 'settings' ? 'default' : 'outline'}
              onClick={() => setActiveTab('settings')}
            >
              Exam Settings
            </Button>
          </div>
        </CardContent>
      </Card>

      {activeTab === 'sessions' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Examination Sessions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {examSessions.map((session) => (
                <div key={session.id} className="p-4 border rounded-xl hover:shadow-md transition-all bg-gradient-to-r from-white to-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-lg">{session.name}</h3>
                        <Badge variant="outline" className={getStatusColor(session.status)}>
                          {session.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {session.startDate} to {session.endDate}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {session.registrations} registrations
                        </div>
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-1" />
                          {session.subjects} subjects
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {session.status === 'active' ? 'Ongoing' : 
                           session.status === 'completed' ? 'Finished' : 'Upcoming'}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4 mr-1" />
                        Configure
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'schedule' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Examination Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {examSchedule.map((exam, index) => (
                <div key={index} className="p-4 border rounded-xl hover:shadow-md transition-all bg-gradient-to-r from-white to-blue-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{exam.subject}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exam.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {exam.time}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {exam.students} students
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-blue-600">{exam.hall}</p>
                      <p className="text-sm text-gray-500">Exam Hall</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
                <Plus className="h-4 w-4 mr-2" />
                Add New Schedule
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'settings' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Exam Duration
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>3 Hours</option>
                  <option>2 Hours</option>
                  <option>1 Hour</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Registration Deadline
                </label>
                <input 
                  type="number" 
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Days before exam"
                  defaultValue="7"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Late Fee Amount
                </label>
                <input 
                  type="number" 
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Amount in INR"
                  defaultValue="500"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Email Notifications
                </label>
                <input type="checkbox" className="rounded" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  SMS Notifications
                </label>
                <input type="checkbox" className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Auto-generate Admit Cards
                </label>
                <input type="checkbox" className="rounded" defaultChecked />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reminder Days
                </label>
                <input 
                  type="number" 
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Days before exam"
                  defaultValue="3"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
