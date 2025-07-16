
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Home, FileText, CreditCard, Calendar, Bell, BarChart3,
  Users, GraduationCap, Settings, MessageSquare, Download,
  PieChart, BookOpen, UserCheck, ClipboardList, Banknote,
  FolderOpen, RotateCcw, History, FileArchive, GraduationCap as GradCap,
  ShieldCheck, UserX, Upload, Reply, ListTodo, CalendarClock
} from 'lucide-react';

interface SidebarProps {
  currentUser: {
    role: 'student' | 'faculty' | 'admin';
  };
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = {
  student: [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'exam-form', label: 'Exam Form', icon: FileText, badge: 'New' },
    { id: 'reevaluation-form', label: 'Reevaluation Form', icon: RotateCcw },
    { id: 'backlog-form', label: 'Backlog Form', icon: History },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'payment-history', label: 'Payment History', icon: History },
    { id: 'documents', label: 'Documents', icon: FolderOpen },
    { id: 'admit-card', label: 'Admit Card', icon: Calendar },
    { id: 'results', label: 'Results', icon: BarChart3 },
    { id: 'old-papers', label: 'Old Papers', icon: FileArchive },
    { id: 'syllabus', label: 'Syllabus', icon: GradCap },
    { id: 'announcements', label: 'Announcements', icon: Bell, badge: '5' },
    { id: 'enquiry', label: 'Enquiry', icon: MessageSquare },
    { id: 'downloads', label: 'Downloads', icon: Download },
  ],
  faculty: [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'mark-entry', label: 'Mark Entry', icon: ClipboardList },
    { id: 'payment-logs', label: 'Payment Logs', icon: History },
    { id: 'block-students', label: 'Block Students', icon: UserX },
    { id: 'enquiry-management', label: 'Enquiry Management', icon: Reply },
    { id: 'document-section', label: 'Document Section', icon: Upload },
    { id: 'old-papers-upload', label: 'Old Papers Upload', icon: FileArchive },
    { id: 'reevaluation-list', label: 'Reevaluation List', icon: ListTodo },
    { id: 'backlog-list', label: 'Backlog List', icon: History },
    { id: 'verification', label: 'Verification', icon: UserCheck, badge: 'Pending' },
    { id: 'announcements', label: 'Announcements', icon: Bell },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
  ],
  admin: [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'analytics', label: 'Analytics', icon: PieChart },
    { id: 'payment-logs', label: 'Payment Logs', icon: History },
    { id: 'exam-management', label: 'Exam Management', icon: BookOpen },
    { id: 'course-management', label: 'Course Management', icon: GradCap },
    { id: 'payments', label: 'Payments', icon: Banknote },
    { id: 'admit-cards', label: 'Admit Cards', icon: Calendar },
    { id: 'results', label: 'Results', icon: BarChart3 },
    { id: 'student-documents', label: 'Student Documents', icon: FolderOpen },
    { id: 'reevaluation-forms', label: 'Reevaluation Forms', icon: RotateCcw },
    { id: 'backlog-forms', label: 'Backlog Forms', icon: History },
    { id: 'announcements', label: 'Announcements', icon: Bell },
    { id: 'enquiries', label: 'Enquiries', icon: MessageSquare, badge: '12' },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ],
};

export const Sidebar = ({ currentUser, activeTab, onTabChange }: SidebarProps) => {
  const items = menuItems[currentUser.role];

  return (
    <div className="w-64 bg-white/95 backdrop-blur-xl border-r border-orange-100 h-[calc(100vh-4rem)] overflow-y-auto shadow-lg">
      <div className="p-4">
        <div className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  'w-full justify-start text-left transition-all duration-300 rounded-xl h-12 font-medium',
                  isActive 
                    ? 'university-gradient text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 border-0' 
                    : 'hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 text-gray-700'
                )}
                onClick={() => onTabChange(item.id)}
              >
                <Icon className="mr-3 h-5 w-5" />
                <span>{item.label}</span>
                {item.badge && (
                  <Badge 
                    variant={isActive ? "secondary" : "outline"} 
                    className={cn(
                      "ml-auto text-xs font-semibold",
                      isActive 
                        ? "bg-white/20 text-white border-white/30 hover:bg-white/30" 
                        : "bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200"
                    )}
                  >
                    {item.badge}
                  </Badge>
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
