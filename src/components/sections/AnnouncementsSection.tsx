
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Pin, Calendar, Users, AlertTriangle, Info, CheckCircle } from 'lucide-react';

interface AnnouncementsSectionProps {
  userRole: 'student' | 'faculty' | 'admin';
}

export const AnnouncementsSection = ({ userRole }: AnnouncementsSectionProps) => {
  const [filter, setFilter] = useState('all');

  const announcements = [
    {
      id: 1,
      title: 'Exam Schedule Released',
      content: 'The examination schedule for Spring 2024 has been published. Please check your admit cards.',
      type: 'important',
      date: '2024-06-25',
      author: 'Exam Controller',
      pinned: true,
      department: 'All',
    },
    {
      id: 2,
      title: 'Library Hours Extended',
      content: 'Library will remain open until 10 PM during exam period from July 1-31.',
      type: 'info',
      date: '2024-06-20',
      author: 'Library Department',
      pinned: false,
      department: 'All',
    },
    {
      id: 3,
      title: 'Fee Payment Deadline',
      content: 'Last date for semester fee payment is July 15, 2024. Late fee will be applicable after this date.',
      type: 'warning',
      date: '2024-06-15',
      author: 'Finance Department',
      pinned: true,
      department: 'All',
    },
    {
      id: 4,
      title: 'New Course Registration',
      content: 'Registration for Summer 2024 elective courses is now open. Deadline: June 30, 2024.',
      type: 'info',
      date: '2024-06-10',
      author: 'Academic Office',
      pinned: false,
      department: 'Computer Science',
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'important':
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-600" />;
      default:
        return <Bell className="h-5 w-5 text-gray-600" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'important':
        return 'from-red-50 to-pink-50 border-red-200';
      case 'warning':
        return 'from-yellow-50 to-orange-50 border-yellow-200';
      case 'info':
        return 'from-blue-50 to-cyan-50 border-blue-200';
      default:
        return 'from-gray-50 to-slate-50 border-gray-200';
    }
  };

  const filteredAnnouncements = announcements.filter(announcement => {
    if (filter === 'pinned') return announcement.pinned;
    if (filter === 'important') return announcement.type === 'important';
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Announcements
          </h1>
          <p className="text-gray-600 mt-2">Stay updated with the latest university news and notices</p>
        </div>
        {userRole === 'admin' && (
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
            Create Announcement
          </Button>
        )}
      </div>

      {/* Filter Buttons */}
      <Card>
        <CardContent className="p-4">
          <div className="flex space-x-2 overflow-x-auto">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button
              variant={filter === 'pinned' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('pinned')}
            >
              <Pin className="h-4 w-4 mr-1" />
              Pinned
            </Button>
            <Button
              variant={filter === 'important' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('important')}
            >
              <AlertTriangle className="h-4 w-4 mr-1" />
              Important
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Announcements List */}
      <div className="space-y-4">
        {filteredAnnouncements.map((announcement) => (
          <Card key={announcement.id} className={`bg-gradient-to-r ${getTypeColor(announcement.type)} transition-all hover:shadow-lg`}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  {announcement.pinned && (
                    <Pin className="h-4 w-4 text-blue-600 mt-1 transform rotate-45" />
                  )}
                  <div className="flex-1">
                    <CardTitle className="flex items-center space-x-2">
                      {getTypeIcon(announcement.type)}
                      <span>{announcement.title}</span>
                    </CardTitle>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {announcement.date}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {announcement.author}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {announcement.department}
                      </Badge>
                    </div>
                  </div>
                </div>
                <Badge 
                  variant="outline"
                  className={`${
                    announcement.type === 'important' ? 'bg-red-100 text-red-700 border-red-300' :
                    announcement.type === 'warning' ? 'bg-yellow-100 text-yellow-700 border-yellow-300' :
                    'bg-blue-100 text-blue-700 border-blue-300'
                  }`}
                >
                  {announcement.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 leading-relaxed">{announcement.content}</p>
              <div className="flex items-center justify-between mt-4">
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                  Read More
                </Button>
                {userRole === 'admin' && (
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Pin/Unpin
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats for Admin */}
      {userRole === 'admin' && (
        <Card>
          <CardHeader>
            <CardTitle>Announcement Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">12</p>
                <p className="text-sm text-gray-600">Total Announcements</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <p className="text-2xl font-bold text-red-600">3</p>
                <p className="text-sm text-gray-600">Important</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <p className="text-2xl font-bold text-yellow-600">2</p>
                <p className="text-sm text-gray-600">Pinned</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">85%</p>
                <p className="text-sm text-gray-600">Read Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
