
import React from 'react';
import { StatCard } from './StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Users, FileText, CreditCard, Calendar, TrendingUp, AlertTriangle,
  CheckCircle, Clock, BarChart3, PieChart, Activity
} from 'lucide-react';

export const AdminDashboard = () => {
  const stats = [
    { title: 'Total Students', value: '12,543', icon: Users, color: 'blue' as const, trend: { value: 5.2, label: 'from last month' } },
    { title: 'Forms Submitted', value: '8,921', icon: FileText, color: 'green' as const, trend: { value: 12.5, label: 'this week' } },
    { title: 'Total Revenue', value: '₹2.4M', icon: CreditCard, color: 'yellow' as const, trend: { value: 8.3, label: 'this month' } },
    { title: 'Admit Cards Issued', value: '7,832', icon: Calendar, color: 'purple' as const, trend: { value: 15.2, label: 'today' } },
  ];

  const departmentStats = [
    { name: 'Engineering', students: 3540, forms: 3210, percentage: 90.7 },
    { name: 'Arts & Science', students: 2890, forms: 2650, percentage: 91.7 },
    { name: 'Commerce', students: 2340, forms: 2100, percentage: 89.7 },
    { name: 'Management', students: 1890, forms: 1680, percentage: 88.9 },
    { name: 'Law', students: 1230, forms: 1150, percentage: 93.5 },
  ];

  const recentActions = [
    { action: 'Result published for B.Tech Semester 6', time: '30 mins ago', status: 'success' },
    { action: 'Payment gateway maintenance completed', time: '2 hours ago', status: 'info' },
    { action: 'New exam session created for M.Com', time: '4 hours ago', status: 'success' },
    { action: 'Bulk admit cards generated', time: '6 hours ago', status: 'success' },
    { action: 'System backup completed', time: '12 hours ago', status: 'info' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome to Rajasthan Vidhyapeeth ERP System</p>
        </div>
        <div className="flex space-x-2">
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Create Exam Session
          </Button>
          <Button variant="outline">
            <BarChart3 className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChart className="mr-2 h-5 w-5" />
              Department Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentStats.map((dept, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{dept.name}</span>
                    <div className="text-right text-xs text-gray-500">
                      <div>{dept.forms}/{dept.students}</div>
                      <div className="text-sm font-medium text-gray-900">{dept.percentage}%</div>
                    </div>
                  </div>
                  <Progress value={dept.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="mr-2 h-5 w-5" />
              Recent System Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActions.map((action, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-1">
                    {action.status === 'success' && (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    )}
                    {action.status === 'info' && (
                      <Clock className="h-4 w-4 text-blue-500" />
                    )}
                    {action.status === 'warning' && (
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {action.action}
                    </p>
                    <p className="text-xs text-gray-500">{action.time}</p>
                  </div>
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
                <h3 className="text-lg font-semibold">Pending Approvals</h3>
                <p className="text-blue-100">245 forms awaiting verification</p>
              </div>
              <FileText className="h-8 w-8 text-blue-200" />
            </div>
            <Button variant="secondary" className="mt-4 w-full">
              Review Now
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Payment Issues</h3>
                <p className="text-green-100">12 failed payments to resolve</p>
              </div>
              <CreditCard className="h-8 w-8 text-green-200" />
            </div>
            <Button variant="secondary" className="mt-4 w-full">
              Resolve Issues
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Support Tickets</h3>
                <p className="text-purple-100">38 enquiries need response</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-purple-200" />
            </div>
            <Button variant="secondary" className="mt-4 w-full">
              Handle Tickets
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
