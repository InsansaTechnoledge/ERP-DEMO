
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { FileText, Upload, CreditCard, User, BookOpen } from 'lucide-react';

export const ExamForm = () => {
  const [formData, setFormData] = useState({
    semester: '',
    examType: '',
    subjects: [],
    backlogPapers: [],
  });

  const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'];
  const examTypes = ['Regular', 'Supplementary', 'Revaluation', 'Improvement'];
  
  const subjects = [
    { id: 'sub1', name: 'Data Structures', code: 'CS301', credits: 4, fee: 500 },
    { id: 'sub2', name: 'Database Management', code: 'CS302', credits: 4, fee: 500 },
    { id: 'sub3', name: 'Computer Networks', code: 'CS303', credits: 3, fee: 400 },
    { id: 'sub4', name: 'Operating Systems', code: 'CS304', credits: 4, fee: 500 },
    { id: 'sub5', name: 'Software Engineering', code: 'CS305', credits: 3, fee: 400 },
  ];

  const backlogSubjects = [
    { id: 'back1', name: 'Mathematics III', code: 'MA201', semester: 'Semester 3', fee: 600 },
    { id: 'back2', name: 'Digital Electronics', code: 'EC201', semester: 'Semester 2', fee: 550 },
  ];

  const calculateFees = () => {
    const subjectFees = subjects
      .filter(sub => formData.subjects.includes(sub.id))
      .reduce((total, sub) => total + sub.fee, 0);
    
    const backlogFees = backlogSubjects
      .filter(sub => formData.backlogPapers.includes(sub.id))
      .reduce((total, sub) => total + sub.fee, 0);
    
    const lateFee = new Date() > new Date('2024-01-15') ? 200 : 0;
    
    return { subjectFees, backlogFees, lateFee, total: subjectFees + backlogFees + lateFee };
  };

  const fees = calculateFees();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Exam Form Registration</h1>
        <Badge variant="outline" className="text-sm">
          Last Date: 31st January 2024
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Student Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Student Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Student Name</Label>
                  <Input value="Rahul Sharma" disabled className="bg-gray-50" />
                </div>
                <div>
                  <Label>Registration Number</Label>
                  <Input value="21CS001" disabled className="bg-gray-50" />
                </div>
                <div>
                  <Label>Department</Label>
                  <Input value="Computer Science" disabled className="bg-gray-50" />
                </div>
                <div>
                  <Label>Course</Label>
                  <Input value="B.Tech" disabled className="bg-gray-50" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exam Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Exam Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Semester</Label>
                  <Select value={formData.semester} onValueChange={(value) => setFormData({...formData, semester: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Semester" />
                    </SelectTrigger>
                    <SelectContent>
                      {semesters.map(sem => (
                        <SelectItem key={sem} value={sem}>{sem}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Exam Type</Label>
                  <Select value={formData.examType} onValueChange={(value) => setFormData({...formData, examType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Exam Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {examTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Subject Selection */}
              <div>
                <Label className="text-base font-medium">Select Subjects</Label>
                <div className="grid grid-cols-1 gap-3 mt-2">
                  {subjects.map(subject => (
                    <div key={subject.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <Checkbox
                        checked={formData.subjects.includes(subject.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setFormData({
                              ...formData,
                              subjects: [...formData.subjects, subject.id]
                            });
                          } else {
                            setFormData({
                              ...formData,
                              subjects: formData.subjects.filter(id => id !== subject.id)
                            });
                          }
                        }}
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{subject.name}</span>
                          <span className="text-sm text-gray-500">₹{subject.fee}</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {subject.code} • {subject.credits} Credits
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backlog Papers */}
              <div>
                <Label className="text-base font-medium">Backlog Papers (if any)</Label>
                <div className="grid grid-cols-1 gap-3 mt-2">
                  {backlogSubjects.map(subject => (
                    <div key={subject.id} className="flex items-center space-x-3 p-3 border rounded-lg bg-yellow-50">
                      <Checkbox
                        checked={formData.backlogPapers.includes(subject.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setFormData({
                              ...formData,
                              backlogPapers: [...formData.backlogPapers, subject.id]
                            });
                          } else {
                            setFormData({
                              ...formData,
                              backlogPapers: formData.backlogPapers.filter(id => id !== subject.id)
                            });
                          }
                        }}
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{subject.name}</span>
                          <span className="text-sm text-gray-500">₹{subject.fee}</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {subject.code} • {subject.semester}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Document Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="mr-2 h-5 w-5" />
                Document Upload
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Passport Size Photo</Label>
                  <Input type="file" accept="image/*" />
                </div>
                <div>
                  <Label>Signature</Label>
                  <Input type="file" accept="image/*" />
                </div>
                <div>
                  <Label>Previous Marksheet</Label>
                  <Input type="file" accept=".pdf,.jpg,.png" />
                </div>
                <div>
                  <Label>ID Proof</Label>
                  <Input type="file" accept=".pdf,.jpg,.png" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fee Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="mr-2 h-5 w-5" />
                Fee Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subject Fees</span>
                  <span>₹{fees.subjectFees}</span>
                </div>
                <div className="flex justify-between">
                  <span>Backlog Papers</span>
                  <span>₹{fees.backlogFees}</span>
                </div>
                <div className="flex justify-between">
                  <span>Late Fee</span>
                  <span>₹{fees.lateFee}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span>₹{fees.total}</span>
                </div>
              </div>
              <Button className="w-full" size="lg">
                Proceed to Payment
              </Button>
            </CardContent>
          </Card>

          {/* Important Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>Important Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Ensure all documents are clear and legible</li>
                <li>• Photo and signature should be recent</li>
                <li>• Last date for form submission: 31st Jan 2024</li>
                <li>• Late fee of ₹200 will be charged after due date</li>
                <li>• Payment must be completed to confirm registration</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
