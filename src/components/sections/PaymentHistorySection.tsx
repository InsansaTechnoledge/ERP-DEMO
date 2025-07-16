import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  History, Download, RefreshCw, CheckCircle, XCircle, Clock, AlertTriangle,
  Search, Filter, CreditCard, Receipt
} from 'lucide-react';

export const PaymentHistorySection = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const paymentHistory = [
    {
      id: 'TXN001',
      type: 'Semester Fee',
      amount: 15000,
      status: 'Success',
      date: '2024-03-15',
      time: '14:30',
      transactionId: 'UPI2024031514301234',
      method: 'UPI',
      description: 'B.Tech 6th Semester Fee',
      receipt: 'REC001.pdf'
    },
    {
      id: 'TXN002',
      type: 'Exam Fee',
      amount: 2500,
      status: 'Success', 
      date: '2024-03-10',
      time: '10:15',
      transactionId: 'CARD2024031010151234',
      method: 'Debit Card',
      description: 'Semester End Examination Fee',
      receipt: 'REC002.pdf'
    },
    {
      id: 'TXN003',
      type: 'Backlog Fee',
      amount: 3000,
      status: 'Failed',
      date: '2024-03-08',
      time: '16:45',
      transactionId: 'UPI2024030816451234',
      method: 'UPI',
      description: 'Backlog Examination - 2 Subjects',
      receipt: null,
      failureReason: 'Insufficient balance'
    },
    {
      id: 'TXN004',
      type: 'Reevaluation Fee',
      amount: 1500,
      status: 'Pending',
      date: '2024-03-05',
      time: '11:20',
      transactionId: 'NB2024030511201234',
      method: 'Net Banking',
      description: 'Answer Sheet Reevaluation',
      receipt: null
    },
    {
      id: 'TXN005',
      type: 'Late Fee',
      amount: 500,
      status: 'Success',
      date: '2024-02-28',
      time: '09:30',
      transactionId: 'UPI2024022809301234',
      method: 'UPI',
      description: 'Late Form Submission Penalty',
      receipt: 'REC005.pdf'
    },
    {
      id: 'TXN006',
      type: 'Hostel Fee',
      amount: 12000,
      status: 'Failed',
      date: '2024-02-25',
      time: '15:00',
      transactionId: 'CARD2024022515001234',
      method: 'Credit Card',
      description: 'Hostel Accommodation Fee',
      receipt: null,
      failureReason: 'Card declined'
    }
  ];

  const filteredPayments = paymentHistory.filter(payment => {
    const matchesFilter = filter === 'all' || payment.status.toLowerCase() === filter;
    const matchesSearch = payment.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Success':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Failed':
        return <XCircle className="h-4 w-4 text-red-600" />;
      case 'Pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Success':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Success</Badge>;
      case 'Failed':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Failed</Badge>;
      case 'Pending':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const totalPaid = paymentHistory
    .filter(p => p.status === 'Success')
    .reduce((sum, p) => sum + p.amount, 0);

  const totalFailed = paymentHistory
    .filter(p => p.status === 'Failed')
    .reduce((sum, p) => sum + p.amount, 0);

  const totalPending = paymentHistory
    .filter(p => p.status === 'Pending')
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Payment History
          </h1>
          <p className="text-gray-600 mt-2">Complete transaction history and payment records</p>
        </div>
        <Button className="university-gradient">
          <Download className="mr-2 h-4 w-4" />
          Export History
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700">Total Paid</p>
                <p className="text-2xl font-bold text-green-900">₹{totalPaid.toLocaleString()}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-red-700">Failed Payments</p>
                <p className="text-2xl font-bold text-red-900">₹{totalFailed.toLocaleString()}</p>
              </div>
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-700">Pending</p>
                <p className="text-2xl font-bold text-yellow-900">₹{totalPending.toLocaleString()}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="shadow-lg border-orange-100">
        <CardHeader>
          <CardTitle className="flex items-center text-orange-800">
            <Filter className="mr-2 h-5 w-5" />
            Filter & Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Transactions</SelectItem>
                <SelectItem value="success">Successful Only</SelectItem>
                <SelectItem value="failed">Failed Only</SelectItem>
                <SelectItem value="pending">Pending Only</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="w-full">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Payment History Table */}
      <Card className="shadow-lg border-orange-100">
        <CardHeader>
          <CardTitle className="flex items-center text-orange-800">
            <History className="mr-2 h-5 w-5" />
            Transaction History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPayments.map((payment) => (
                  <TableRow key={payment.id} className="hover:bg-orange-50/50">
                    <TableCell className="font-mono text-sm">
                      {payment.transactionId}
                    </TableCell>
                    <TableCell className="font-medium">{payment.type}</TableCell>
                    <TableCell>{payment.description}</TableCell>
                    <TableCell className="font-semibold">₹{payment.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <CreditCard className="h-4 w-4 mr-1 text-gray-500" />
                        {payment.method}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{payment.date}</div>
                        <div className="text-sm text-gray-500">{payment.time}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(payment.status)}
                        {getStatusBadge(payment.status)}
                      </div>
                      {payment.status === 'Failed' && payment.failureReason && (
                        <div className="text-xs text-red-600 mt-1">{payment.failureReason}</div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        {payment.receipt && (
                          <Button size="sm" variant="outline">
                            <Receipt className="h-4 w-4 mr-1" />
                            Receipt
                          </Button>
                        )}
                        {payment.status === 'Failed' && (
                          <Button size="sm" className="university-gradient">
                            <RefreshCw className="h-4 w-4 mr-1" />
                            Retry
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredPayments.length === 0 && (
            <div className="text-center py-8">
              <AlertTriangle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No transactions found matching your criteria</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};