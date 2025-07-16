
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Banknote, TrendingUp, Download, Filter, Search, AlertCircle } from 'lucide-react';

export const PaymentManagementSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const paymentStats = [
    { label: 'Total Revenue', value: '₹1,45,67,890', change: '+12%', color: 'green' },
    { label: 'Pending Payments', value: '₹23,45,670', change: '-5%', color: 'yellow' },
    { label: 'Failed Transactions', value: '₹1,23,450', change: '+2%', color: 'red' },
    { label: 'Refunds Processed', value: '₹87,650', change: '+8%', color: 'blue' },
  ];

  const payments = [
    {
      id: 1,
      student: 'John Doe',
      rollNo: '2024CS001',
      type: 'Semester Fee',
      amount: 15000,
      status: 'completed',
      date: '2024-06-25',
      method: 'UPI',
      transactionId: 'TXN123456789',
    },
    {
      id: 2,
      student: 'Jane Smith',
      rollNo: '2024CS002',
      type: 'Exam Fee',
      amount: 2500,
      status: 'pending',
      date: '2024-06-24',
      method: 'Card',
      transactionId: 'TXN123456790',
    },
    {
      id: 3,
      student: 'Mike Johnson',
      rollNo: '2024CS003',
      type: 'Late Fee',
      amount: 500,
      status: 'failed',
      date: '2024-06-23',
      method: 'Net Banking',
      transactionId: 'TXN123456791',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'failed':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const filteredPayments = payments.filter(payment => {
    if (selectedFilter === 'all') return true;
    return payment.status === selectedFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Payment Management
          </h1>
          <p className="text-gray-600 mt-2">Monitor and manage all payment transactions</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
            Generate Invoice
          </Button>
        </div>
      </div>

      {/* Payment Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {paymentStats.map((stat, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className={`text-sm mt-1 ${
                    stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <span className="font-medium">{stat.change}</span> from last month
                  </p>
                </div>
                <div className={`p-3 rounded-xl ${
                  stat.color === 'green' ? 'bg-green-100' :
                  stat.color === 'yellow' ? 'bg-yellow-100' :
                  stat.color === 'red' ? 'bg-red-100' : 'bg-blue-100'
                }`}>
                  <Banknote className={`h-6 w-6 ${
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'yellow' ? 'text-yellow-600' :
                    stat.color === 'red' ? 'text-red-600' : 'text-blue-600'
                  }`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by student name, roll number, or transaction ID..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                <option value="all">All Payments</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Transactions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Banknote className="mr-2 h-5 w-5" />
            Payment Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredPayments.map((payment) => (
              <div key={payment.id} className="p-4 border rounded-xl hover:shadow-md transition-all bg-gradient-to-r from-white to-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                      <Banknote className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-lg">{payment.type}</h3>
                        <Badge variant="outline" className={getStatusColor(payment.status)}>
                          {payment.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div>
                          <p className="font-medium">Student</p>
                          <p>{payment.student}</p>
                          <p className="text-xs">{payment.rollNo}</p>
                        </div>
                        <div>
                          <p className="font-medium">Amount</p>
                          <p className="text-lg font-bold text-gray-900">₹{payment.amount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="font-medium">Method</p>
                          <p>{payment.method}</p>
                          <p className="text-xs">{payment.date}</p>
                        </div>
                        <div>
                          <p className="font-medium">Transaction ID</p>
                          <p className="text-xs font-mono">{payment.transactionId}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    {payment.status === 'pending' && (
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                        Verify
                      </Button>
                    )}
                    {payment.status === 'failed' && (
                      <Button variant="outline" size="sm" className="text-orange-600 border-orange-200 hover:bg-orange-50">
                        Retry
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Failed Payment Alerts */}
      <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center text-red-800">
            <AlertCircle className="mr-2 h-5 w-5" />
            Payment Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border border-red-200">
              <p className="text-sm font-medium text-red-700">High Failed Transaction Rate</p>
              <p className="text-xs text-red-600">15% increase in failed payments this week. Consider reviewing payment gateway settings.</p>
            </div>
            <div className="p-3 bg-white rounded border border-yellow-200">
              <p className="text-sm font-medium text-yellow-700">Pending Verification</p>
              <p className="text-xs text-yellow-600">45 payments are pending manual verification. Average resolution time: 2.4 hours.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
