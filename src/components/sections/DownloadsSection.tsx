
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, BookOpen, Calendar, Search, Filter } from 'lucide-react';

export const DownloadsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const downloads = [
    {
      id: 1,
      title: 'Academic Calendar 2024-25',
      category: 'Academic',
      type: 'PDF',
      size: '2.5 MB',
      date: '2024-06-01',
      downloads: 1250,
      description: 'Complete academic calendar with important dates and holidays',
    },
    {
      id: 2,
      title: 'Examination Guidelines',
      category: 'Exam',
      type: 'PDF',
      size: '1.8 MB',
      date: '2024-05-15',
      downloads: 890,
      description: 'Guidelines and rules for examinations',
    },
    {
      id: 3,
      title: 'Fee Structure 2024-25',
      category: 'Finance',
      type: 'PDF',
      size: '800 KB',
      date: '2024-04-20',
      downloads: 2100,
      description: 'Detailed fee structure for all courses',
    },
    {
      id: 4,
      title: 'Computer Science Syllabus',
      category: 'Syllabus',
      type: 'PDF',
      size: '3.2 MB',
      date: '2024-03-10',
      downloads: 756,
      description: 'Complete syllabus for Computer Science Engineering',
    },
    {
      id: 5,
      title: 'Previous Year Question Papers - Mathematics',
      category: 'Question Papers',
      type: 'ZIP',
      size: '15.6 MB',
      date: '2024-02-28',
      downloads: 1840,
      description: 'Mathematics question papers from 2019-2023',
    },
    {
      id: 6,
      title: 'Student Handbook',
      category: 'Guidelines',
      type: 'PDF',
      size: '4.1 MB',
      date: '2024-02-15',
      downloads: 980,
      description: 'Complete guide for new students',
    },
  ];

  const categories = ['all', 'Academic', 'Exam', 'Finance', 'Syllabus', 'Question Papers', 'Guidelines'];

  const filteredDownloads = downloads.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return <FileText className="h-6 w-6 text-red-600" />;
      case 'ZIP':
        return <BookOpen className="h-6 w-6 text-purple-600" />;
      default:
        return <FileText className="h-6 w-6 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Downloads Center
          </h1>
          <p className="text-gray-600 mt-2">Access academic resources, syllabus, and important documents</p>
        </div>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search documents..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Popular Downloads */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Download className="mr-2 h-5 w-5" />
            Popular Downloads
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {downloads.slice(0, 3).map((item) => (
              <div key={item.id} className="p-4 border rounded-xl hover:shadow-md transition-all bg-gradient-to-r from-white to-blue-50">
                <div className="flex items-start space-x-3">
                  {getFileIcon(item.type)}
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{item.downloads} downloads</p>
                    <Button size="sm" className="mt-2 bg-gradient-to-r from-blue-500 to-purple-600">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All Downloads */}
      <Card>
        <CardHeader>
          <CardTitle>All Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredDownloads.map((item) => (
              <div key={item.id} className="p-4 border rounded-xl hover:shadow-md transition-all bg-gradient-to-r from-white to-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="p-3 bg-white rounded-lg border shadow-sm">
                      {getFileIcon(item.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      <div className="flex items-center space-x-4 mt-3 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {item.date}
                        </div>
                        <span>Size: {item.size}</span>
                        <span>{item.downloads} downloads</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge variant="outline" className="bg-blue-100 text-blue-700">
                      {item.category}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {item.type}
                    </Badge>
                    <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Access */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">Quick Access</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 flex-col space-y-1 hover:bg-blue-100">
              <FileText className="h-5 w-5" />
              <span className="text-xs">Syllabus</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-1 hover:bg-purple-100">
              <BookOpen className="h-5 w-5" />
              <span className="text-xs">Question Papers</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-1 hover:bg-green-100">
              <Calendar className="h-5 w-5" />
              <span className="text-xs">Calendar</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-1 hover:bg-yellow-100">
              <FileText className="h-5 w-5" />
              <span className="text-xs">Guidelines</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
