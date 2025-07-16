import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { StudentDashboard } from '@/components/dashboard/StudentDashboard';
import { FacultyDashboard } from '@/components/dashboard/FacultyDashboard';
import { AdminDashboard } from '@/components/dashboard/AdminDashboard';
import { ExamForm } from '@/components/forms/ExamForm';
import { PaymentSection } from '@/components/sections/PaymentSection';
import { ReevaluationFormSection } from '@/components/sections/ReevaluationFormSection';
import { BacklogFormSection } from '@/components/sections/BacklogFormSection';
import { PaymentHistorySection } from '@/components/sections/PaymentHistorySection';
import { DocumentsSection } from '@/components/sections/DocumentsSection';
import { OldPapersSection } from '@/components/sections/OldPapersSection';
import { SyllabusSection } from '@/components/sections/SyllabusSection';
import { AdmitCardSection } from '@/components/sections/AdmitCardSection';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { AnnouncementsSection } from '@/components/sections/AnnouncementsSection';
import { EnquirySection } from '@/components/sections/EnquirySection';
import { DownloadsSection } from '@/components/sections/DownloadsSection';
import { MarkEntrySection } from '@/components/sections/MarkEntrySection';
import { StudentReviewSection } from '@/components/sections/StudentReviewSection';
import { VerificationSection } from '@/components/sections/VerificationSection';
import { AnalyticsSection } from '@/components/sections/AnalyticsSection';
import { ExamManagementSection } from '@/components/sections/ExamManagementSection';
import { PaymentManagementSection } from '@/components/sections/PaymentManagementSection';
import { UserManagementSection } from '@/components/sections/UserManagementSection';
import { SettingsSection } from '@/components/sections/SettingsSection';

const Index = () => {
  const [currentUser, setCurrentUser] = useState({
    name: 'Arjun Kumar Sharma',
    role: 'student' as 'student' | 'faculty' | 'admin',
    avatar: '',
  });

  const [activeTab, setActiveTab] = useState('dashboard');

  const handleRoleChange = (role: 'student' | 'faculty' | 'admin') => {
    const names = {
      student: 'Arjun Kumar Sharma',
      faculty: 'Dr. Priya Singh Rajput',
      admin: 'Rajesh Kumar Gupta'
    };
    setCurrentUser({ ...currentUser, role, name: names[role] });
    setActiveTab('dashboard');
  };

  const renderContent = () => {
    // Student Views
    if (currentUser.role === 'student') {
      switch (activeTab) {
        case 'dashboard':
          return <StudentDashboard />;
        case 'exam-form':
          return <ExamForm />;
        case 'reevaluation-form':
          return <ReevaluationFormSection />;
        case 'backlog-form':
          return <BacklogFormSection />;
        case 'payment':
          return <PaymentSection />;
        case 'payment-history':
          return <PaymentHistorySection />;
        case 'documents':
          return <DocumentsSection />;
        case 'admit-card':
          return <AdmitCardSection />;
        case 'results':
          return <ResultsSection />;
        case 'old-papers':
          return <OldPapersSection />;
        case 'syllabus':
          return <SyllabusSection />;
        case 'announcements':
          return <AnnouncementsSection userRole="student" />;
        case 'enquiry':
          return <EnquirySection />;
        case 'downloads':
          return <DownloadsSection />;
        default:
          return <StudentDashboard />;
      }
    }

    // Faculty Views
    if (currentUser.role === 'faculty') {
      switch (activeTab) {
        case 'dashboard':
          return <FacultyDashboard />;
        case 'mark-entry':
          return <MarkEntrySection />;
        case 'student-review':
          return <StudentReviewSection />;
        case 'verification':
          return <VerificationSection />;
        case 'announcements':
          return <AnnouncementsSection userRole="faculty" />;
        case 'reports':
          return <AnalyticsSection userRole="faculty" />;
        default:
          return <FacultyDashboard />;
      }
    }

    // Admin Views
    if (currentUser.role === 'admin') {
      switch (activeTab) {
        case 'dashboard':
          return <AdminDashboard />;
        case 'analytics':
          return <AnalyticsSection userRole="admin" />;
        case 'exam-management':
          return <ExamManagementSection />;
        case 'payments':
          return <PaymentManagementSection />;
        case 'admit-cards':
          return <AdmitCardSection isAdmin={true} />;
        case 'results':
          return <ResultsSection isAdmin={true} />;
        case 'announcements':
          return <AnnouncementsSection userRole="admin" />;
        case 'enquiries':
          return <EnquirySection isAdmin={true} />;
        case 'users':
          return <UserManagementSection />;
        case 'settings':
          return <SettingsSection />;
        default:
          return <AdminDashboard />;
      }
    }

    return <StudentDashboard />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 via-white to-red-50/20">
      <Header currentUser={currentUser} onRoleChange={handleRoleChange} />
      <div className="flex">
        <Sidebar currentUser={currentUser} activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 p-6 lg:p-8 overflow-auto min-h-[calc(100vh-4rem)]">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
