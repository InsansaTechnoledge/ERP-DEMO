
import React from 'react';
import { StatCard } from './StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Users, ClipboardList, UserCheck, BarChart3, Clock, CheckCircle, AlertCircle
} from 'lucide-react';

export const FacultyDashboard = () => {
  const stats = [
    { title: 'Students Assigned', value: 240, icon: Users, color: 'blue' as const },
    { title: 'Marks Entered', value: 180, icon: ClipboardList, color: 'green' as const },
    { title: 'Pending Reviews', value: 12, icon: UserCheck, color: 'yellow' as const },
    { title: 'Reports Generated', value: 8, icon: BarChart3, color: 'purple' as const },
  ];

  const pendingTasks = [
    { task: 'Enter marks for Data Structures', students: 45, deadline: '2 days', priority: 'high' },
    { task: 'Review attendance for Database Management', students: 38, deadline: '3 days', priority: 'medium' },
    { task: 'Verify documents for Computer Networks', students: 42, deadline: '5 days', priority: 'low' },
    { task: 'Submit final grades for Web Development', students: 35, deadline: '1 day', priority: 'high' },
  ];

  const studentProgress = [
    { subject: 'Data Structures', total: 45, completed: 35, percentage: 77.8 },
    { subject: 'Database Management', total: 38, completed: 38, percentage: 100 },
    { subject: 'Computer Networks', total: 42, completed: 28, percentage: 66.7 },
    { subject: 'Web Development', total: 35, completed: 35, percentage: 100 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Faculty Dashboard</h1>
          <p className="text-gray-600">Computer Science Department</p>
        </div>
        <div className="flex space-x-2">
          <Button>
            <ClipboardList className="mr-2 h-4 w-4" />
            Enter Marks
          </Button>
          <Button variant="outline">
            <BarChart3 className="mr-2 h-4 w-4" />
            View Reports
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Pending Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{task.task}</h4>
                    <p className="text-sm text-gray-600">{task.students} students</p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={
                        task.priority === 'high' ? 'destructive' :
                        task.priority === 'medium' ? 'secondary' : 'outline'
                      }
                      className="mb-1"
                    >
                      {task.priority}
                    </Badge>
                    <p className="text-xs text-gray-500">{task.deadline}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subject Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 h-5 w-5" />
              Subject Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {studentProgress.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{subject.subject}</span>
                    <div className="flex items-center space-x-2">
                      {subject.percentage === 100 ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-yellow-500" />
                      )}
                      <span className="text-sm font-medium">{subject.percentage}%</span>
                    </div>
                  </div>
                  <Progress value={subject.percentage} className="h-2" />
                  <p className="text-xs text-gray-500">
                    {subject.completed}/{subject.total} students completed
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Mark Entry</h3>
                <p className="text-blue-100">60 marks pending entry</p>
              </div>
              <ClipboardList className="h-8 w-8 text-blue-200" />
            </div>
            <Button variant="secondary" className="mt-4 w-full">
              Enter Marks
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Student Review</h3>
                <p className="text-green-100">12 students need review</p>
              </div>
              <UserCheck className="h-8 w-8 text-green-200" />
            </div>
            <Button variant="secondary" className="mt-4 w-full">
              Review Students
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Verification</h3>
                <p className="text-purple-100">25 forms to verify</p>
              </div>
              <UserCheck className="h-8 w-8 text-purple-200" />
            </div>
            <Button variant="secondary" className="mt-4 w-full">
              Verify Forms
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
