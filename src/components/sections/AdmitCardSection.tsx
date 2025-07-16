
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Calendar, MapPin, Clock, User, BookOpen } from 'lucide-react';

interface AdmitCardSectionProps {
  isAdmin?: boolean;
}

export const AdmitCardSection = ({ isAdmin = false }: AdmitCardSectionProps) => {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);

  const examSchedule = [
    { subject: 'Mathematics', date: '2024-07-15', time: '09:00 AM - 12:00 PM', venue: 'Hall A-101' },
    { subject: 'Physics', date: '2024-07-17', time: '09:00 AM - 12:00 PM', venue: 'Hall A-102' },
    { subject: 'Chemistry', date: '2024-07-19', time: '09:00 AM - 12:00 PM', venue: 'Hall A-103' },
    { subject: 'English', date: '2024-07-21', time: '02:00 PM - 05:00 PM', venue: 'Hall B-201' },
  ];

  const availableAdmitCards = [
    { id: 1, semester: 'Spring 2024', status: 'available', examDate: '2024-07-15' },
    { id: 2, semester: 'Winter 2023', status: 'downloaded', examDate: '2024-01-15' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {isAdmin ? 'Admit Card Management' : 'Admit Card'}
          </h1>
          <p className="text-gray-600 mt-2">
            {isAdmin ? 'Generate and manage admit cards' : 'Download your admit cards and view exam schedule'}
          </p>
        </div>
      </div>

      {!isAdmin && (
        <>
          {/* Student Info Card */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
                  <p className="text-gray-600">Roll No: 2024CS001</p>
                  <p className="text-gray-600">Computer Science Engineering</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Available Admit Cards */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Available Admit Cards
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {availableAdmitCards.map((card) => (
                <div key={card.id} className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 transition-colors">
                  <div>
                    <h3 className="font-semibold text-gray-900">{card.semester}</h3>
                    <p className="text-sm text-gray-600">Exam Date: {card.examDate}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant={card.status === 'available' ? 'default' : 'secondary'}>
                      {card.status}
                    </Badge>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </>
      )}

      {/* Exam Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Exam Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {examSchedule.map((exam, index) => (
              <div key={index} className="p-4 border rounded-xl hover:shadow-md transition-shadow bg-gradient-to-r from-white to-blue-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{exam.subject}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exam.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {exam.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exam.venue}
                        </div>
                      </div>
                    </div>
                  </div>
                  {isAdmin && (
                    <Button variant="outline" size="sm">
                      Edit Schedule
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Important Instructions */}
      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-orange-800">Important Instructions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-orange-700">
          <p>• Bring your admit card and valid ID to the examination hall</p>
          <p>• Report to the examination center 30 minutes before the exam</p>
          <p>• Mobile phones and electronic devices are strictly prohibited</p>
          <p>• Use only blue or black ink pens for writing</p>
          <p>• Follow all COVID-19 safety guidelines</p>
        </CardContent>
      </Card>
    </div>
  );
};
