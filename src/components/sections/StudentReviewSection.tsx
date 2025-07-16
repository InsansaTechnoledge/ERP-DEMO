
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Search, Eye, MessageSquare, TrendingUp, Calendar } from 'lucide-react';

export const StudentReviewSection = () => {
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const students = [
    {
      id: 1,
      name: 'John Doe',
      rollNo: '2024CS001',
      course: 'Computer Science',
      semester: '4th',
      attendance: 85,
      performance: 'Good',
      cgpa: 8.5,
      subjects: [
        { name: 'Data Structures', marks: 85, attendance: 90 },
        { name: 'Operating Systems', marks: 78, attendance: 80 },
        { name: 'Database Systems', marks: 92, attendance: 95 },
      ],
      feedback: 'Excellent academic performance with consistent attendance.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      rollNo: '2024CS002',
      course: 'Computer Science',
      semester: '4th',
      attendance: 92,
      performance: 'Excellent',
      cgpa: 9.2,
      subjects: [
        { name: 'Data Structures', marks: 95, attendance: 98 },
        { name: 'Operating Systems', marks: 88, attendance: 90 },
        { name: 'Database Systems', marks: 91, attendance: 95 },
      ],
      feedback: 'Outstanding student with excellent academic record.',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      rollNo: '2024CS003',
      course: 'Computer Science',
      semester: '4th',
      attendance: 68,
      performance: 'Average',
      cgpa: 7.2,
      subjects: [
        { name: 'Data Structures', marks: 72, attendance: 70 },
        { name: 'Operating Systems', marks: 65, attendance: 65 },
        { name: 'Database Systems', marks: 78, attendance: 70 },
      ],
      feedback: 'Needs improvement in attendance and academic performance.',
    },
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'Excellent':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'Good':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Average':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getAttendanceColor = (attendance: number) => {
    if (attendance >= 90) return 'text-green-600';
    if (attendance >= 75) return 'text-blue-600';
    if (attendance >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Student Review
          </h1>
          <p className="text-gray-600 mt-2">Review student performance and provide feedback</p>
        </div>
      </div>

      {/* Search and Overview */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search students by name or roll number..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{students.length}</p>
                <p className="text-xs text-gray-600">Total Students</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">
                  {Math.round(students.reduce((sum, s) => sum + s.attendance, 0) / students.length)}%
                </p>
                <p className="text-xs text-gray-600">Avg Attendance</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">
                  {(students.reduce((sum, s) => sum + s.cgpa, 0) / students.length).toFixed(1)}
                </p>
                <p className="text-xs text-gray-600">Avg CGPA</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Student List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5" />
            Student Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredStudents.map((student) => (
              <div key={student.id} className="p-4 border rounded-xl hover:shadow-md transition-all bg-gradient-to-r from-white to-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold">
                      {student.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{student.name}</h3>
                      <p className="text-sm text-gray-600">{student.rollNo} • {student.course} • {student.semester} Semester</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                          <span className={`text-sm font-medium ${getAttendanceColor(student.attendance)}`}>
                            {student.attendance}% Attendance
                          </span>
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="h-4 w-4 mr-1 text-gray-500" />
                          <span className="text-sm font-medium text-gray-700">CGPA: {student.cgpa}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className={getPerformanceColor(student.performance)}>
                      {student.performance}
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedStudent(selectedStudent === student.id ? null : student.id)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedStudent === student.id && (
                  <div className="mt-4 pt-4 border-t space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Subject Performance */}
                      <div>
                        <h4 className="font-semibold mb-3">Subject Performance</h4>
                        <div className="space-y-2">
                          {student.subjects.map((subject, index) => (
                            <div key={index} className="p-3 bg-white rounded border">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{subject.name}</span>
                                <div className="flex space-x-4 text-sm">
                                  <span className="text-blue-600">Marks: {subject.marks}</span>
                                  <span className={getAttendanceColor(subject.attendance)}>
                                    Att: {subject.attendance}%
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Feedback Section */}
                      <div>
                        <h4 className="font-semibold mb-3">Faculty Feedback</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-blue-50 rounded border">
                            <p className="text-sm text-gray-700">{student.feedback}</p>
                          </div>
                          <div className="space-y-2">
                            <textarea
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              rows={3}
                              placeholder="Add new feedback..."
                            />
                            <div className="flex space-x-2">
                              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                Add Feedback
                              </Button>
                              <Button variant="outline" size="sm">
                                Send to Student
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
