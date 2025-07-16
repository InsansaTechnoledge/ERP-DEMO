
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ClipboardList, Upload, Save, Lock, Users, BookOpen } from 'lucide-react';

export const MarkEntrySection = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [entryMode, setEntryMode] = useState('manual'); // manual or upload

  const subjects = [
    { id: 1, name: 'Data Structures', code: 'CS201', students: 45, status: 'open' },
    { id: 2, name: 'Operating Systems', code: 'CS202', students: 42, status: 'locked' },
    { id: 3, name: 'Database Systems', code: 'CS203', students: 48, status: 'open' },
  ];

  const students = [
    { id: 1, name: 'John Doe', rollNo: '2024CS001', internal: 85, external: '', total: 85 },
    { id: 2, name: 'Jane Smith', rollNo: '2024CS002', internal: 78, external: '', total: 78 },
    { id: 3, name: 'Mike Johnson', rollNo: '2024CS003', internal: 92, external: '', total: 92 },
    { id: 4, name: 'Sarah Wilson', rollNo: '2024CS004', internal: 88, external: '', total: 88 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mark Entry
          </h1>
          <p className="text-gray-600 mt-2">Enter and manage student marks for your subjects</p>
        </div>
      </div>

      {/* Subject Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Select Subject
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {subjects.map((subject) => (
              <div 
                key={subject.id}
                className={`p-4 border rounded-xl cursor-pointer transition-all ${
                  selectedSubject === subject.code 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'hover:border-gray-300 hover:shadow-md'
                }`}
                onClick={() => setSelectedSubject(subject.code)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{subject.name}</h3>
                    <p className="text-sm text-gray-600">{subject.code}</p>
                    <div className="flex items-center mt-2">
                      <Users className="h-4 w-4 mr-1 text-gray-500" />
                      <span className="text-sm text-gray-600">{subject.students} students</span>
                    </div>
                  </div>
                  <Badge 
                    variant={subject.status === 'open' ? 'default' : 'secondary'}
                    className={subject.status === 'locked' ? 'bg-red-100 text-red-700' : ''}
                  >
                    {subject.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedSubject && (
        <>
          {/* Entry Mode Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Entry Mode</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Button
                  variant={entryMode === 'manual' ? 'default' : 'outline'}
                  onClick={() => setEntryMode('manual')}
                  className="flex items-center"
                >
                  <ClipboardList className="h-4 w-4 mr-2" />
                  Manual Entry
                </Button>
                <Button
                  variant={entryMode === 'upload' ? 'default' : 'outline'}
                  onClick={() => setEntryMode('upload')}
                  className="flex items-center"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Bulk Upload
                </Button>
              </div>
            </CardContent>
          </Card>

          {entryMode === 'manual' ? (
            /* Manual Entry Table */
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Mark Entry - {selectedSubject}</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Save className="h-4 w-4 mr-2" />
                    Save Draft
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600">
                    <Lock className="h-4 w-4 mr-2" />
                    Submit & Lock
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        <th className="text-left p-3 font-semibold">Roll No</th>
                        <th className="text-left p-3 font-semibold">Student Name</th>
                        <th className="text-center p-3 font-semibold">Internal (30)</th>
                        <th className="text-center p-3 font-semibold">External (70)</th>
                        <th className="text-center p-3 font-semibold">Total (100)</th>
                        <th className="text-center p-3 font-semibold">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student.id} className="border-b hover:bg-gray-50">
                          <td className="p-3 font-medium">{student.rollNo}</td>
                          <td className="p-3">{student.name}</td>
                          <td className="p-3 text-center">
                            <input
                              type="number"
                              className="w-16 p-1 border border-gray-300 rounded text-center focus:ring-2 focus:ring-blue-500"
                              defaultValue={student.internal}
                              max="30"
                            />
                          </td>
                          <td className="p-3 text-center">
                            <input
                              type="number"
                              className="w-16 p-1 border border-gray-300 rounded text-center focus:ring-2 focus:ring-blue-500"
                              placeholder="--"
                              max="70"
                            />
                          </td>
                          <td className="p-3 text-center font-semibold">{student.total}</td>
                          <td className="p-3 text-center">
                            <Badge variant="outline" className="bg-green-100 text-green-700">
                              A
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ) : (
            /* Bulk Upload */
            <Card>
              <CardHeader>
                <CardTitle>Bulk Upload - {selectedSubject}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Upload Excel File</h3>
                  <p className="text-gray-500 mb-4">Drag and drop your Excel file here, or click to browse</p>
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
                    Choose File
                  </Button>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Upload Instructions:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Download the template Excel file first</li>
                    <li>• Fill in the marks in the specified format</li>
                    <li>• Maximum file size: 5MB</li>
                    <li>• Supported formats: .xlsx, .xls</li>
                  </ul>
                  <Button variant="outline" size="sm" className="mt-3">
                    Download Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
};
