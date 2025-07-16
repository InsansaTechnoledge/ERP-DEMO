
import React from 'react';
import { StatCard } from './StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  FileText, CreditCard, Calendar, BarChart3, Bell, Clock,
  CheckCircle, AlertCircle, Download
} from 'lucide-react';

export const StudentDashboard = () => {
  const stats = [
    { title: 'Forms Submitted', value: 3, icon: FileText, color: 'blue' as const },
    { title: 'Payments Made', value: '₹4,500', icon: CreditCard, color: 'green' as const },
    { title: 'Admit Cards', value: 2, icon: Calendar, color: 'purple' as const },
    { title: 'Results Available', value: 1, icon: BarChart3, color: 'yellow' as const },
  ];

  const recentActivities = [
    { action: 'Exam form submitted for Semester 6', time: '2 hours ago', status: 'success' },
    { action: 'Payment of ₹2,500 completed', time: '1 day ago', status: 'success' },
    { action: 'Admit card downloaded', time: '3 days ago', status: 'info' },
    { action: 'Result published for Semester 5', time: '1 week ago', status: 'success' },
  ];

  const announcements = [
    { title: 'Exam Schedule Changed', content: 'Semester 6 exams postponed by 1 week', urgent: true },
    { title: 'New Payment Gateway', content: 'UPI payments now available', urgent: false },
    { title: 'Result Declaration', content: 'Semester 5 results published', urgent: false },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Student Dashboard
          </h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's your academic overview</p>
        </div>
        <div className="flex space-x-3">
          <Button className="university-gradient hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transition-all duration-300">
            <FileText className="mr-2 h-4 w-4" />
            Fill Exam Form
          </Button>
          <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300">
            <Download className="mr-2 h-4 w-4" />
            Download Admit Card
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Exam Progress */}
        <Card className="shadow-lg border-orange-100 bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-gray-900">
              <Clock className="mr-3 h-5 w-5 text-orange-500" />
              Exam Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">Semester 6 - Form Submission</span>
                <span className="text-green-600 font-semibold">Completed</span>
              </div>
              <Progress value={100} className="h-3 bg-gray-100" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">Semester 6 - Payment</span>
                <span className="text-green-600 font-semibold">Completed</span>
              </div>
              <Progress value={100} className="h-3 bg-gray-100" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">Semester 6 - Admit Card</span>
                <span className="text-orange-600 font-semibold">Available</span>
              </div>
              <Progress value={75} className="h-3 bg-gray-100" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">Semester 6 - Exam</span>
                <span className="text-gray-500 font-semibold">Upcoming</span>
              </div>
              <Progress value={25} className="h-3 bg-gray-100" />
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="shadow-lg border-orange-100 bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-gray-900">Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 p-3 rounded-xl hover:bg-orange-50/50 transition-colors">
                  <div className="mt-1">
                    {activity.status === 'success' && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                    {activity.status === 'info' && (
                      <AlertCircle className="h-5 w-5 text-orange-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Announcements */}
      <Card className="shadow-lg border-orange-100 bg-white/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center text-gray-900">
            <Bell className="mr-3 h-5 w-5 text-orange-500" />
            Latest Announcements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {announcements.map((announcement, index) => (
              <div key={index} className="flex items-start justify-between p-4 bg-gradient-to-r from-orange-50/50 to-red-50/30 rounded-xl border border-orange-100/50 hover:shadow-md transition-all duration-300">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-gray-900">{announcement.title}</h4>
                    {announcement.urgent && (
                      <Badge className="university-gradient text-white border-0 text-xs px-2 py-1">
                        Urgent
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{announcement.content}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
