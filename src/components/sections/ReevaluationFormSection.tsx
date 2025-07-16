import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { RotateCcw, FileText, CreditCard, CheckCircle } from 'lucide-react';

export const ReevaluationFormSection = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    semester: '',
    subject: '',
    examMonth: '',
    reason: '',
    paymentMode: ''
  });

  const [submittedForms, setSubmittedForms] = useState([
    {
      id: 'REV001',
      subject: 'Advanced Java Programming',
      semester: '6th Semester',
      status: 'Under Review',
      submittedDate: '2024-03-15',
      paymentStatus: 'Paid',
      amount: 1500
    },
    {
      id: 'REV002', 
      subject: 'Database Management Systems',
      semester: '5th Semester',
      status: 'Approved',
      submittedDate: '2024-02-20',
      paymentStatus: 'Paid',
      amount: 1500
    }
  ]);

  const subjects = [
    'Advanced Java Programming',
    'Database Management Systems',
    'Software Engineering',
    'Computer Networks',
    'Operating Systems',
    'Data Structures and Algorithms'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newForm = {
      id: `REV${String(submittedForms.length + 3).padStart(3, '0')}`,
      subject: formData.subject,
      semester: formData.semester,
      status: 'Pending Payment',
      submittedDate: new Date().toISOString().split('T')[0],
      paymentStatus: 'Pending',
      amount: 1500
    };
    setSubmittedForms([newForm, ...submittedForms]);
    setFormData({
      studentId: '',
      semester: '',
      subject: '',
      examMonth: '',
      reason: '',
      paymentMode: ''
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Reevaluation Form
          </h1>
          <p className="text-gray-600 mt-2">Apply for answer sheet reevaluation</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reevaluation Form */}
        <Card className="shadow-lg border-orange-100">
          <CardHeader>
            <CardTitle className="flex items-center text-orange-800">
              <RotateCcw className="mr-2 h-5 w-5" />
              New Reevaluation Request
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="studentId">Student ID</Label>
                <Input
                  id="studentId"
                  value={formData.studentId}
                  onChange={(e) => setFormData({...formData, studentId: e.target.value})}
                  placeholder="Enter your student ID"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="semester">Semester</Label>
                <Select onValueChange={(value) => setFormData({...formData, semester: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1st Semester">1st Semester</SelectItem>
                    <SelectItem value="2nd Semester">2nd Semester</SelectItem>
                    <SelectItem value="3rd Semester">3rd Semester</SelectItem>
                    <SelectItem value="4th Semester">4th Semester</SelectItem>
                    <SelectItem value="5th Semester">5th Semester</SelectItem>
                    <SelectItem value="6th Semester">6th Semester</SelectItem>
                    <SelectItem value="7th Semester">7th Semester</SelectItem>
                    <SelectItem value="8th Semester">8th Semester</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select onValueChange={(value) => setFormData({...formData, subject: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="examMonth">Exam Month/Year</Label>
                <Input
                  id="examMonth"
                  value={formData.examMonth}
                  onChange={(e) => setFormData({...formData, examMonth: e.target.value})}
                  placeholder="e.g., March 2024"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Reevaluation</Label>
                <Textarea
                  id="reason"
                  value={formData.reason}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  placeholder="Please provide reason for reevaluation request"
                  className="min-h-[80px]"
                  required
                />
              </div>

              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">Reevaluation Fee: ₹1,500</h4>
                <p className="text-sm text-orange-700">
                  Fee is non-refundable and must be paid within 7 days of form submission.
                </p>
              </div>

              <Button type="submit" className="w-full university-gradient">
                <FileText className="mr-2 h-4 w-4" />
                Submit Reevaluation Request
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Previous Requests */}
        <Card className="shadow-lg border-orange-100">
          <CardHeader>
            <CardTitle className="flex items-center text-orange-800">
              <CheckCircle className="mr-2 h-5 w-5" />
              Your Reevaluation Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {submittedForms.map((form) => (
                <div key={form.id} className="p-4 border rounded-lg hover:bg-orange-50/50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{form.subject}</h4>
                      <p className="text-sm text-gray-600">{form.semester}</p>
                    </div>
                    <Badge 
                      variant={
                        form.status === 'Approved' ? 'default' :
                        form.status === 'Under Review' ? 'secondary' : 'outline'
                      }
                    >
                      {form.status}
                    </Badge>
                  </div>
                  
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Application ID:</span>
                      <span className="font-medium">{form.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Submitted:</span>
                      <span className="font-medium">{form.submittedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment:</span>
                      <span className={`font-medium ${form.paymentStatus === 'Paid' ? 'text-green-600' : 'text-orange-600'}`}>
                        {form.paymentStatus} - ₹{form.amount}
                      </span>
                    </div>
                  </div>

                  {form.paymentStatus === 'Pending' && (
                    <Button size="sm" className="w-full mt-3 university-gradient">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Pay Fee
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};