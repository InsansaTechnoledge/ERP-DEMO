import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  GraduationCap, Download, BookOpen, Clock, FileText, 
  CheckCircle, Calendar, Users, Target
} from 'lucide-react';

export const SyllabusSection = () => {
  const [selectedCourse, setSelectedCourse] = useState('btech-cs');
  const [selectedSemester, setSelectedSemester] = useState('6');

  const syllabusData = {
    'btech-cs': {
      name: 'B.Tech Computer Science Engineering',
      semesters: {
        '6': {
          subjects: [
            {
              code: 'CS601',
              name: 'Advanced Java Programming',
              credits: 4,
              type: 'Core',
              instructor: 'Dr. Priya Singh Rajput',
              duration: '60 Hours',
              units: [
                {
                  title: 'Unit 1: Java Fundamentals Review',
                  duration: '12 Hours',
                  topics: [
                    'Object-Oriented Programming Concepts',
                    'Exception Handling',
                    'Collections Framework',
                    'Generics and Annotations'
                  ]
                },
                {
                  title: 'Unit 2: Advanced Java Features',
                  duration: '15 Hours', 
                  topics: [
                    'Multithreading and Concurrency',
                    'Java I/O and NIO',
                    'Reflection API',
                    'Lambda Expressions and Streams'
                  ]
                },
                {
                  title: 'Unit 3: Enterprise Java',
                  duration: '18 Hours',
                  topics: [
                    'Servlets and JSP',
                    'JDBC and Database Connectivity',
                    'Enterprise JavaBeans (EJB)',
                    'Web Services (REST/SOAP)'
                  ]
                },
                {
                  title: 'Unit 4: Frameworks and Tools',
                  duration: '15 Hours',
                  topics: [
                    'Spring Framework Basics',
                    'Hibernate ORM',
                    'Maven Build Tool',
                    'Testing with JUnit'
                  ]
                }
              ],
              assessment: {
                internal: 40,
                external: 60,
                practical: 25,
                assignment: 15
              },
              textbooks: [
                'Java: The Complete Reference by Herbert Schildt',
                'Effective Java by Joshua Bloch'
              ],
              references: [
                'Head First Java by Kathy Sierra',
                'Java Concurrency in Practice by Brian Goetz'
              ]
            },
            {
              code: 'CS602',
              name: 'Database Management Systems',
              credits: 4,
              type: 'Core',
              instructor: 'Dr. Rajesh Kumar Gupta',
              duration: '60 Hours',
              units: [
                {
                  title: 'Unit 1: Database Fundamentals',
                  duration: '15 Hours',
                  topics: [
                    'Database System Concepts',
                    'Entity-Relationship Model',
                    'Relational Model',
                    'SQL Basics and Advanced Queries'
                  ]
                },
                {
                  title: 'Unit 2: Database Design',
                  duration: '15 Hours',
                  topics: [
                    'Functional Dependencies',
                    'Normalization (1NF to BCNF)',
                    'Schema Design',
                    'Database Design Process'
                  ]
                },
                {
                  title: 'Unit 3: Query Processing and Optimization',
                  duration: '15 Hours',
                  topics: [
                    'Query Processing Steps',
                    'Query Optimization Algorithms',
                    'Indexing Strategies',
                    'Cost-based Optimization'
                  ]
                },
                {
                  title: 'Unit 4: Transaction Management',
                  duration: '15 Hours',
                  topics: [
                    'ACID Properties',
                    'Concurrency Control',
                    'Deadlock Handling',
                    'Recovery Systems'
                  ]
                }
              ],
              assessment: {
                internal: 40,
                external: 60,
                practical: 25,
                assignment: 15
              },
              textbooks: [
                'Database System Concepts by Silberschatz, Korth, and Sudarshan',
                'Fundamentals of Database Systems by Elmasri and Navathe'
              ],
              references: [
                'Database Management Systems by Raghu Ramakrishnan',
                'An Introduction to Database Systems by C.J. Date'
              ]
            },
            {
              code: 'CS603',
              name: 'Software Engineering',
              credits: 3,
              type: 'Core',
              instructor: 'Prof. Anita Sharma',
              duration: '45 Hours',
              units: [
                {
                  title: 'Unit 1: Software Process Models',
                  duration: '12 Hours',
                  topics: [
                    'Software Development Life Cycle',
                    'Waterfall Model',
                    'Agile Methodologies',
                    'DevOps Practices'
                  ]
                },
                {
                  title: 'Unit 2: Requirements Engineering',
                  duration: '11 Hours',
                  topics: [
                    'Requirements Elicitation',
                    'Requirements Analysis',
                    'Requirements Specification',
                    'Requirements Validation'
                  ]
                },
                {
                  title: 'Unit 3: System Design',
                  duration: '11 Hours',
                  topics: [
                    'Architectural Design',
                    'User Interface Design',
                    'Component-level Design',
                    'Design Patterns'
                  ]
                },
                {
                  title: 'Unit 4: Testing and Maintenance',
                  duration: '11 Hours',
                  topics: [
                    'Software Testing Strategies',
                    'Unit and Integration Testing',
                    'System Testing',
                    'Software Maintenance'
                  ]
                }
              ],
              assessment: {
                internal: 40,
                external: 60,
                practical: 0,
                assignment: 40
              },
              textbooks: [
                'Software Engineering: A Practitioner\'s Approach by Roger Pressman',
                'Software Engineering by Ian Sommerville'
              ],
              references: [
                'Clean Code by Robert C. Martin',
                'The Mythical Man-Month by Frederick Brooks'
              ]
            }
          ]
        }
      }
    }
  };

  const currentSyllabus = syllabusData[selectedCourse as keyof typeof syllabusData];
  const currentSemesterData = currentSyllabus?.semesters[selectedSemester as keyof typeof currentSyllabus.semesters];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Course Syllabus
          </h1>
          <p className="text-gray-600 mt-2">Detailed curriculum and course structure</p>
        </div>
        <Button className="university-gradient">
          <Download className="mr-2 h-4 w-4" />
          Download Complete Syllabus
        </Button>
      </div>

      {/* Course Selection */}
      <Card className="shadow-lg border-orange-100">
        <CardHeader>
          <CardTitle className="flex items-center text-orange-800">
            <GraduationCap className="mr-2 h-5 w-5" />
            Select Course & Semester
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Course</label>
              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger>
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="btech-cs">B.Tech Computer Science Engineering</SelectItem>
                  <SelectItem value="btech-ec">B.Tech Electronics & Communication</SelectItem>
                  <SelectItem value="btech-me">B.Tech Mechanical Engineering</SelectItem>
                  <SelectItem value="bca">Bachelor of Computer Applications</SelectItem>
                  <SelectItem value="mca">Master of Computer Applications</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Semester</label>
              <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                <SelectTrigger>
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1st Semester</SelectItem>
                  <SelectItem value="2">2nd Semester</SelectItem>
                  <SelectItem value="3">3rd Semester</SelectItem>
                  <SelectItem value="4">4th Semester</SelectItem>
                  <SelectItem value="5">5th Semester</SelectItem>
                  <SelectItem value="6">6th Semester</SelectItem>
                  <SelectItem value="7">7th Semester</SelectItem>
                  <SelectItem value="8">8th Semester</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course Overview */}
      {currentSyllabus && (
        <Card className="shadow-lg border-orange-100 bg-gradient-to-r from-orange-50/50 to-red-50/30">
          <CardHeader>
            <CardTitle className="text-orange-800">{currentSyllabus.name}</CardTitle>
            <p className="text-gray-600">Semester {selectedSemester} - Academic Year 2024-25</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="text-sm text-gray-600">Total Subjects</p>
                  <p className="font-semibold">{currentSemesterData?.subjects.length || 0}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">Total Credits</p>
                  <p className="font-semibold">
                    {currentSemesterData?.subjects.reduce((sum, subject) => sum + subject.credits, 0) || 0}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Core Subjects</p>
                  <p className="font-semibold">
                    {currentSemesterData?.subjects.filter(s => s.type === 'Core').length || 0}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold">6 Months</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Subject Details */}
      {currentSemesterData && (
        <div className="space-y-4">
          {currentSemesterData.subjects.map((subject, index) => (
            <Card key={subject.code} className="shadow-lg border-orange-100">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {subject.code}: {subject.name}
                    </CardTitle>
                    <div className="flex items-center space-x-4 mt-2">
                      <Badge className="university-gradient text-white">{subject.type}</Badge>
                      <span className="text-sm text-gray-600">{subject.credits} Credits</span>
                      <span className="text-sm text-gray-600">{subject.duration}</span>
                      <span className="text-sm text-gray-600">Instructor: {subject.instructor}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="syllabus">
                    <AccordionTrigger className="text-orange-800 hover:text-orange-900">
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Course Content & Units
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        {subject.units.map((unit, unitIndex) => (
                          <div key={unitIndex} className="border-l-4 border-orange-200 pl-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{unit.title}</h4>
                              <Badge variant="outline">{unit.duration}</Badge>
                            </div>
                            <ul className="space-y-1">
                              {unit.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="flex items-center text-sm text-gray-700">
                                  <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="assessment">
                    <AccordionTrigger className="text-orange-800 hover:text-orange-900">
                      <div className="flex items-center">
                        <Target className="h-4 w-4 mr-2" />
                        Assessment Pattern
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm text-blue-700">Internal Assessment</p>
                          <p className="text-xl font-bold text-blue-900">{subject.assessment.internal}%</p>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <p className="text-sm text-green-700">External Exam</p>
                          <p className="text-xl font-bold text-green-900">{subject.assessment.external}%</p>
                        </div>
                        {subject.assessment.practical > 0 && (
                          <div className="text-center p-3 bg-purple-50 rounded-lg">
                            <p className="text-sm text-purple-700">Practical</p>
                            <p className="text-xl font-bold text-purple-900">{subject.assessment.practical}%</p>
                          </div>
                        )}
                        <div className="text-center p-3 bg-orange-50 rounded-lg">
                          <p className="text-sm text-orange-700">Assignment</p>
                          <p className="text-xl font-bold text-orange-900">{subject.assessment.assignment}%</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="books">
                    <AccordionTrigger className="text-orange-800 hover:text-orange-900">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        Recommended Books & References
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Textbooks</h4>
                          <ul className="space-y-2">
                            {subject.textbooks.map((book, bookIndex) => (
                              <li key={bookIndex} className="flex items-start">
                                <BookOpen className="h-4 w-4 mr-2 mt-0.5 text-orange-600" />
                                <span className="text-sm text-gray-700">{book}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Reference Books</h4>
                          <ul className="space-y-2">
                            {subject.references.map((book, bookIndex) => (
                              <li key={bookIndex} className="flex items-start">
                                <FileText className="h-4 w-4 mr-2 mt-0.5 text-gray-600" />
                                <span className="text-sm text-gray-700">{book}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};