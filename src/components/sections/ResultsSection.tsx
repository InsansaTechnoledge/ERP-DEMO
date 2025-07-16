
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Award, TrendingUp, BookOpen, Calendar } from 'lucide-react';

interface ResultsSectionProps {
  isAdmin?: boolean;
}

export const ResultsSection = ({ isAdmin = false }: ResultsSectionProps) => {
  const [selectedSemester, setSelectedSemester] = useState('current');

  const semesterResults = [
    {
      semester: 'Spring 2024',
      status: 'published',
      subjects: [
        { name: 'Mathematics', marks: 85, total: 100, grade: 'A' },
        { name: 'Physics', marks: 78, total: 100, grade: 'B+' },
        { name: 'Chemistry', marks: 92, total: 100, grade: 'A+' },
        { name: 'English', marks: 88, total: 100, grade: 'A' },
      ],
      cgpa: 8.6,
      percentage: 85.75,
    },
    {
      semester: 'Winter 2023',
      status: 'published',
      subjects: [
        { name: 'Data Structures', marks: 90, total: 100, grade: 'A+' },
        { name: 'Operating Systems', marks: 82, total: 100, grade: 'A' },
        { name: 'Database Systems', marks: 87, total: 100, grade: 'A' },
        { name: 'Computer Networks', marks: 79, total: 100, grade: 'B+' },
      ],
      cgpa: 8.45,
      percentage: 84.5,
    },
  ];

  const currentResult = semesterResults[0];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {isAdmin ? 'Results Management' : 'Academic Results'}
          </h1>
          <p className="text-gray-600 mt-2">
            {isAdmin ? 'Manage and publish student results' : 'View your academic performance and download certificates'}
          </p>
        </div>
      </div>

      {!isAdmin && (
        <>
          {/* Overall Performance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-600 font-medium">Current CGPA</p>
                    <p className="text-3xl font-bold text-green-700">{currentResult.cgpa}</p>
                  </div>
                  <Award className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Percentage</p>
                    <p className="text-3xl font-bold text-blue-700">{currentResult.percentage}%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-purple-600 font-medium">Rank</p>
                    <p className="text-3xl font-bold text-purple-700">#12</p>
                  </div>
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Semester Selector */}
          <Card>
            <CardHeader>
              <CardTitle>Select Semester</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2 overflow-x-auto">
                {semesterResults.map((result, index) => (
                  <Button
                    key={index}
                    variant={selectedSemester === result.semester ? 'default' : 'outline'}
                    className="whitespace-nowrap"
                    onClick={() => setSelectedSemester(result.semester)}
                  >
                    {result.semester}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {/* Detailed Results */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            {isAdmin ? 'Published Results' : 'Subject-wise Results'}
          </CardTitle>
          <div className="flex space-x-2">
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              Published
            </Badge>
            <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600">
              <Download className="h-4 w-4 mr-2" />
              Download Marksheet
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {currentResult.subjects.map((subject, index) => (
              <div key={index} className="p-4 border rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{subject.name}</h3>
                      <p className="text-sm text-gray-600">Out of {subject.total} marks</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">{subject.marks}</p>
                      <p className="text-sm text-gray-600">{((subject.marks / subject.total) * 100).toFixed(1)}%</p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`${
                        subject.grade === 'A+' ? 'bg-green-100 text-green-700 border-green-300' : 
                        subject.grade === 'A' ? 'bg-blue-100 text-blue-700 border-blue-300' : 
                        'bg-yellow-100 text-yellow-700 border-yellow-300'
                      }`}
                    >
                      {subject.grade}
                    </Badge>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(subject.marks / subject.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Academic Timeline */}
      {!isAdmin && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Academic Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {semesterResults.map((result, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold">{result.semester}</h3>
                    <p className="text-sm text-gray-600">CGPA: {result.cgpa} | Percentage: {result.percentage}%</p>
                  </div>
                  <Badge variant="outline" className="bg-blue-100 text-blue-700">
                    {result.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
