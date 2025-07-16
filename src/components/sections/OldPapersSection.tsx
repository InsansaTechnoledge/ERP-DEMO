import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  FileArchive, Download, Search, Filter, BookOpen, Calendar, 
  GraduationCap, FileText, Star, Eye
} from 'lucide-react';

export const OldPapersSection = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const oldPapers = [
    {
      id: 'OP001',
      course: 'B.Tech Computer Science',
      semester: '6th Semester',
      subject: 'Advanced Java Programming',
      year: '2023',
      examType: 'End Semester',
      fileName: 'advanced_java_2023_end_sem.pdf',
      size: '3.2 MB',
      downloads: 245,
      uploadDate: '2024-01-15',
      difficulty: 'Medium',
      marks: 100
    },
    {
      id: 'OP002',
      course: 'B.Tech Computer Science', 
      semester: '6th Semester',
      subject: 'Database Management Systems',
      year: '2023',
      examType: 'Mid Semester',
      fileName: 'dbms_2023_mid_sem.pdf',
      size: '2.8 MB',
      downloads: 198,
      uploadDate: '2024-01-12',
      difficulty: 'Hard',
      marks: 50
    },
    {
      id: 'OP003',
      course: 'B.Tech Computer Science',
      semester: '5th Semester',
      subject: 'Software Engineering',
      year: '2023',
      examType: 'End Semester',
      fileName: 'software_eng_2023_end_sem.pdf',
      size: '4.1 MB',
      downloads: 312,
      uploadDate: '2024-01-10',
      difficulty: 'Easy',
      marks: 100
    },
    {
      id: 'OP004',
      course: 'B.Tech Computer Science',
      semester: '5th Semester',
      subject: 'Operating Systems',
      year: '2023',
      examType: 'End Semester',
      fileName: 'os_2023_end_sem.pdf',
      size: '3.6 MB',
      downloads: 287,
      uploadDate: '2024-01-08',
      difficulty: 'Medium',
      marks: 100
    },
    {
      id: 'OP005',
      course: 'B.Tech Computer Science',
      semester: '4th Semester',
      subject: 'Computer Networks',
      year: '2023',
      examType: 'End Semester',
      fileName: 'networks_2023_end_sem.pdf',
      size: '2.9 MB',
      downloads: 156,
      uploadDate: '2024-01-05',
      difficulty: 'Hard',
      marks: 100
    },
    {
      id: 'OP006',
      course: 'B.Tech Computer Science',
      semester: '3rd Semester',
      subject: 'Data Structures & Algorithms',
      year: '2023',
      examType: 'End Semester',
      fileName: 'dsa_2023_end_sem.pdf',
      size: '3.8 MB',
      downloads: 421,
      uploadDate: '2024-01-03',
      difficulty: 'Medium',
      marks: 100
    },
    {
      id: 'OP007',
      course: 'B.Tech Computer Science',
      semester: '6th Semester',
      subject: 'Advanced Java Programming',
      year: '2022',
      examType: 'End Semester',
      fileName: 'advanced_java_2022_end_sem.pdf',
      size: '3.5 MB',
      downloads: 189,
      uploadDate: '2023-12-28',
      difficulty: 'Medium',
      marks: 100
    },
    {
      id: 'OP008',
      course: 'B.Tech Computer Science',
      semester: '5th Semester',
      subject: 'Computer Graphics',
      year: '2023',
      examType: 'Mid Semester',
      fileName: 'graphics_2023_mid_sem.pdf',
      size: '2.1 MB',
      downloads: 134,
      uploadDate: '2023-12-25',
      difficulty: 'Easy',
      marks: 50
    }
  ];

  const courses = ['B.Tech Computer Science', 'B.Tech Electronics', 'B.Tech Mechanical', 'BCA', 'MCA'];
  const semesters = ['1st Semester', '2nd Semester', '3rd Semester', '4th Semester', '5th Semester', '6th Semester', '7th Semester', '8th Semester'];

  const filteredPapers = oldPapers.filter(paper => {
    const matchesCourse = !selectedCourse || paper.course === selectedCourse;
    const matchesSemester = !selectedSemester || paper.semester === selectedSemester;
    const matchesSubject = !selectedSubject || paper.subject === selectedSubject;
    const matchesSearch = !searchTerm || 
      paper.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.year.includes(searchTerm) ||
      paper.examType.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCourse && matchesSemester && matchesSubject && matchesSearch;
  });

  const uniqueSubjects = [...new Set(oldPapers.map(paper => paper.subject))];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Hard':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const topDownloads = [...oldPapers].sort((a, b) => b.downloads - a.downloads).slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Previous Year Papers
          </h1>
          <p className="text-gray-600 mt-2">Access previous examination papers for better preparation</p>
        </div>
        <Button className="university-gradient">
          <BookOpen className="mr-2 h-4 w-4" />
          Request Paper
        </Button>
      </div>

      {/* Top Downloads */}
      <Card className="shadow-lg border-orange-100 bg-gradient-to-r from-orange-50/50 to-red-50/30">
        <CardHeader>
          <CardTitle className="flex items-center text-orange-800">
            <Star className="mr-2 h-5 w-5" />
            Most Downloaded Papers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {topDownloads.map((paper, index) => (
              <div key={paper.id} className="p-3 bg-white rounded-lg border border-orange-100 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="university-gradient text-white">#{index + 1}</Badge>
                  <span className="text-xs text-gray-500">{paper.downloads} downloads</span>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">{paper.subject}</h4>
                <p className="text-xs text-gray-600">{paper.semester} • {paper.year}</p>
                <Button size="sm" variant="outline" className="w-full mt-2">
                  <Download className="h-3 w-3 mr-1" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card className="shadow-lg border-orange-100">
        <CardHeader>
          <CardTitle className="flex items-center text-orange-800">
            <Filter className="mr-2 h-5 w-5" />
            Filter Papers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search papers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
              <SelectTrigger>
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Courses</SelectItem>
                {courses.map((course) => (
                  <SelectItem key={course} value={course}>{course}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSemester} onValueChange={setSelectedSemester}>
              <SelectTrigger>
                <SelectValue placeholder="Select semester" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Semesters</SelectItem>
                {semesters.map((semester) => (
                  <SelectItem key={semester} value={semester}>{semester}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Subjects</SelectItem>
                {uniqueSubjects.map((subject) => (
                  <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" className="w-full" onClick={() => {
              setSelectedCourse('');
              setSelectedSemester('');
              setSelectedSubject('');
              setSearchTerm('');
            }}>
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Papers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPapers.map((paper) => (
          <Card key={paper.id} className="shadow-lg border-orange-100 hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
                    {paper.subject}
                  </CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <GraduationCap className="h-4 w-4" />
                    <span>{paper.course}</span>
                  </div>
                </div>
                <Badge className={getDifficultyColor(paper.difficulty)}>
                  {paper.difficulty}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-600">Semester:</span>
                    <p className="font-medium">{paper.semester}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Year:</span>
                    <p className="font-medium">{paper.year}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Exam Type:</span>
                    <p className="font-medium">{paper.examType}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Max Marks:</span>
                    <p className="font-medium">{paper.marks}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <FileText className="h-4 w-4" />
                    <span>{paper.size}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>{paper.downloads} downloads</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="h-4 w-4 mr-1" />
                    Preview
                  </Button>
                  <Button size="sm" className="flex-1 university-gradient">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPapers.length === 0 && (
        <Card className="shadow-lg border-orange-100">
          <CardContent className="text-center py-12">
            <FileArchive className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Papers Found</h3>
            <p className="text-gray-600">No papers match your current filters. Try adjusting your search criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};