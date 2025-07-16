import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { History, FileText, CreditCard, CheckCircle, AlertCircle } from 'lucide-react';

export const BacklogFormSection = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    semester: '',
    subjects: [] as string[],
    examType: '',
    reason: ''
  });

  const [submittedForms, setSubmittedForms] = useState([
    {
      id: 'BLG001',
      subjects: ['Operating Systems', 'Computer Networks'],
      semester: '5th Semester',
      status: 'Registered',
      submittedDate: '2024-03-10',
      examDate: '2024-04-15',
      paymentStatus: 'Paid',
      amount: 3000
    },
    {
      id: 'BLG002',
      subjects: ['Database Management'],
      semester: '4th Semester', 
      status: 'Under Review',
      submittedDate: '2024-03-05',
      examDate: 'TBD',
      paymentStatus: 'Paid',
      amount: 1500
    }
  ]);

  const availableSubjects = [
    'Data Structures and Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'Software Engineering',
    'Advanced Java Programming',
    'Web Technologies',
    'Computer Graphics',
    'Artificial Intelligence',
    'Machine Learning'
  ];

  const handleSubjectChange = (subject: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      subjects: checked 
        ? [...prev.subjects, subject]
        : prev.subjects.filter(s => s !== subject)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newForm = {
      id: `BLG${String(submittedForms.length + 3).padStart(3, '0')}`,
      subjects: formData.subjects,
      semester: formData.semester,
      status: 'Pending Payment',
      submittedDate: new Date().toISOString().split('T')[0],
      examDate: 'TBD',
      paymentStatus: 'Pending',
      amount: formData.subjects.length * 1500
    };
    setSubmittedForms([newForm, ...submittedForms]);
    setFormData({
      studentId: '',
      semester: '',
      subjects: [],
      examType: '',
      reason: ''
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Backlog Examination Form
          </h1>
          <p className="text-gray-600 mt-2">Register for backlog/supplementary examinations</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Backlog Form */}
        <Card className="shadow-lg border-orange-100">
          <CardHeader>
            <CardTitle className="flex items-center text-orange-800">
              <History className="mr-2 h-5 w-5" />
              New Backlog Registration
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
                <Label>Backlog Subjects (Select multiple)</Label>
                <div className="max-h-48 overflow-y-auto border rounded-lg p-3 space-y-2">
                  {availableSubjects.map((subject) => (
                    <div key={subject} className="flex items-center space-x-2">
                      <Checkbox
                        id={subject}
                        checked={formData.subjects.includes(subject)}
                        onCheckedChange={(checked) => handleSubjectChange(subject, checked as boolean)}
                      />
                      <Label htmlFor={subject} className="text-sm font-normal cursor-pointer">
                        {subject}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="examType">Exam Type</Label>
                <Select onValueChange={(value) => setFormData({...formData, examType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select exam type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Regular Backlog">Regular Backlog</SelectItem>
                    <SelectItem value="Improvement">Improvement</SelectItem>
                    <SelectItem value="Supplementary">Supplementary</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.subjects.length > 0 && (
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">
                    Selected Subjects: {formData.subjects.length}
                  </h4>
                  <div className="space-y-1 mb-3">
                    {formData.subjects.map((subject, index) => (
                      <Badge key={index} variant="outline" className="mr-1 mb-1">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-orange-700">
                    <strong>Total Fee: ₹{formData.subjects.length * 1500}</strong><br />
                    (₹1,500 per subject)
                  </p>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full university-gradient"
                disabled={formData.subjects.length === 0}
              >
                <FileText className="mr-2 h-4 w-4" />
                Submit Backlog Application
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Previous Applications */}
        <Card className="shadow-lg border-orange-100">
          <CardHeader>
            <CardTitle className="flex items-center text-orange-800">
              <CheckCircle className="mr-2 h-5 w-5" />
              Your Backlog Applications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {submittedForms.map((form) => (
                <div key={form.id} className="p-4 border rounded-lg hover:bg-orange-50/50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{form.semester}</h4>
                      <p className="text-sm text-gray-600">{form.subjects.length} subject(s)</p>
                    </div>
                    <Badge 
                      variant={
                        form.status === 'Registered' ? 'default' :
                        form.status === 'Under Review' ? 'secondary' : 'outline'
                      }
                    >
                      {form.status}
                    </Badge>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-sm font-medium text-gray-700 mb-1">Subjects:</p>
                    <div className="flex flex-wrap gap-1">
                      {form.subjects.map((subject, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
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
                      <span className="text-gray-600">Exam Date:</span>
                      <span className="font-medium">{form.examDate}</span>
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
                      Pay Fee (₹{form.amount})
                    </Button>
                  )}

                  {form.status === 'Registered' && (
                    <div className="mt-3 p-2 bg-green-50 rounded border border-green-200">
                      <div className="flex items-center text-green-700">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">Ready for examination</span>
                      </div>
                    </div>
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