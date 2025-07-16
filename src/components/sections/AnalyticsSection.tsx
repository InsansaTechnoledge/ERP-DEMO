
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PieChart, BarChart3, TrendingUp, Users, FileText, CreditCard, Calendar } from 'lucide-react';

interface AnalyticsSectionProps {
  userRole: 'faculty' | 'admin';
}

export const AnalyticsSection = ({ userRole }: AnalyticsSectionProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const overviewStats = [
    { label: 'Total Students', value: '2,456', change: '+12%', icon: Users, color: 'blue' },
    { label: 'Exam Forms', value: '1,834', change: '+8%', icon: FileText, color: 'green' },
    { label: 'Payments', value: '₹45.2L', change: '+15%', icon: CreditCard, color: 'purple' },
    { label: 'Pass Rate', value: '94.5%', change: '+2.1%', icon: TrendingUp, color: 'orange' },
  ];

  const departmentStats = [
    { department: 'Computer Science', students: 450, passRate: 96.2, avgCGPA: 8.4 },
    { department: 'Electronics', students: 380, passRate: 94.8, avgCGPA: 8.1 },
    { department: 'Mechanical', students: 420, passRate: 92.5, avgCGPA: 7.9 },
    { department: 'Civil', students: 360, passRate: 93.8, avgCGPA: 8.0 },
  ];

  const examStats = [
    { semester: 'Spring 2024', registered: 1834, appeared: 1756, passed: 1659 },
    { semester: 'Winter 2023', registered: 1720, appeared: 1658, passed: 1572 },
    { semester: 'Fall 2023', registered: 1690, appeared: 1621, passed: 1534 },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {userRole === 'admin' ? 'Analytics Dashboard' : 'Faculty Analytics'}
          </h1>
          <p className="text-gray-600 mt-2">Comprehensive insights and performance metrics</p>
        </div>
        <div className="flex space-x-2">
          <Button
            variant={selectedPeriod === 'week' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedPeriod('week')}
          >
            Week
          </Button>
          <Button
            variant={selectedPeriod === 'month' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedPeriod('month')}
          >
            Month
          </Button>
          <Button
            variant={selectedPeriod === 'year' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedPeriod('year')}
          >
            Year
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1">
                      <span className="font-medium">{stat.change}</span> from last period
                    </p>
                  </div>
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${getColorClasses(stat.color)}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Department Performance */}
      {userRole === 'admin' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 h-5 w-5" />
              Department Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentStats.map((dept, index) => (
                <div key={index} className="p-4 border rounded-xl bg-gradient-to-r from-white to-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{dept.department}</h3>
                      <p className="text-sm text-gray-600">{dept.students} students enrolled</p>
                    </div>
                    <div className="flex space-x-6 text-center">
                      <div>
                        <p className="text-xl font-bold text-green-600">{dept.passRate}%</p>
                        <p className="text-xs text-gray-500">Pass Rate</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-blue-600">{dept.avgCGPA}</p>
                        <p className="text-xs text-gray-500">Avg CGPA</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                        style={{ width: `${dept.passRate}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Exam Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <PieChart className="mr-2 h-5 w-5" />
            Examination Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {examStats.map((exam, index) => (
              <div key={index} className="p-4 border rounded-xl hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{exam.semester}</h3>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <span>Registered: {exam.registered}</span>
                      <span>•</span>
                      <span>Appeared: {exam.appeared}</span>
                      <span>•</span>
                      <span>Passed: {exam.passed}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">
                      {Math.round((exam.passed / exam.appeared) * 100)}%
                    </p>
                    <p className="text-xs text-gray-500">Success Rate</p>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="bg-blue-100 rounded p-2 text-center">
                    <p className="text-sm font-medium text-blue-700">Registered</p>
                    <p className="text-lg font-bold text-blue-800">{exam.registered}</p>
                  </div>
                  <div className="bg-yellow-100 rounded p-2 text-center">
                    <p className="text-sm font-medium text-yellow-700">Appeared</p>
                    <p className="text-lg font-bold text-yellow-800">{exam.appeared}</p>
                  </div>
                  <div className="bg-green-100 rounded p-2 text-center">
                    <p className="text-sm font-medium text-green-700">Passed</p>
                    <p className="text-lg font-bold text-green-800">{exam.passed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">156 new exam forms submitted today</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Payment verification completed for CS Department</p>
                <p className="text-xs text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Spring 2024 results published</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
