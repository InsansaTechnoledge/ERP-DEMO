
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Download, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export const PaymentSection = () => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const paymentHistory = [
    { id: 1, type: 'Semester Fee', amount: 15000, status: 'completed', date: '2024-01-15', receipt: 'REC001' },
    { id: 2, type: 'Exam Fee', amount: 2500, status: 'completed', date: '2024-02-10', receipt: 'REC002' },
    { id: 3, type: 'Late Fee', amount: 500, status: 'pending', date: '2024-03-01', receipt: null },
  ];

  const pendingPayments = [
    { id: 1, type: 'Semester Fee - Spring 2024', amount: 15000, dueDate: '2024-07-15' },
    { id: 2, type: 'Library Fee', amount: 1000, dueDate: '2024-07-20' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Payment Center
          </h1>
          <p className="text-gray-600 mt-2">Manage your fees and payment history</p>
        </div>
      </div>

      {/* Pending Payments */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center text-orange-800">
            <AlertCircle className="mr-2 h-5 w-5" />
            Pending Payments
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {pendingPayments.map((payment) => (
            <div key={payment.id} className="flex items-center justify-between p-4 bg-white rounded-xl border border-orange-100">
              <div>
                <h3 className="font-semibold text-gray-900">{payment.type}</h3>
                <p className="text-sm text-gray-600">Due: {payment.dueDate}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-xl font-bold text-orange-600">₹{payment.amount.toLocaleString()}</span>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Pay Now
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2 hover:bg-blue-50">
              <CreditCard className="h-6 w-6 text-blue-600" />
              <span>Credit/Debit Card</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 hover:bg-green-50">
              <div className="w-6 h-6 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">UPI</div>
              <span>UPI Payment</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 hover:bg-purple-50">
              <div className="w-6 h-6 bg-purple-600 rounded text-white text-xs flex items-center justify-center font-bold">NB</div>
              <span>Net Banking</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {paymentHistory.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-full ${
                    payment.status === 'completed' ? 'bg-green-100' : 'bg-yellow-100'
                  }`}>
                    {payment.status === 'completed' ? 
                      <CheckCircle className="h-5 w-5 text-green-600" /> : 
                      <Clock className="h-5 w-5 text-yellow-600" />
                    }
                  </div>
                  <div>
                    <h3 className="font-semibold">{payment.type}</h3>
                    <p className="text-sm text-gray-600">{payment.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-bold">₹{payment.amount.toLocaleString()}</span>
                  <Badge variant={payment.status === 'completed' ? 'default' : 'secondary'}>
                    {payment.status}
                  </Badge>
                  {payment.receipt && (
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Receipt
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
