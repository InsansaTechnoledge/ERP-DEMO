
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bell, Search, Settings, LogOut, Menu } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface HeaderProps {
  currentUser: {
    name: string;
    role: 'student' | 'faculty' | 'admin';
    avatar?: string;
  };
  onRoleChange: (role: 'student' | 'faculty' | 'admin') => void;
}

const notifications = [
  {
    id: 1,
    title: 'Exam Form Deadline',
    message: 'Submit your exam form before 25th March 2024',
    time: '2 hours ago',
    isRead: false,
    type: 'urgent'
  },
  {
    id: 2,
    title: 'Payment Confirmation',
    message: 'Your payment of ₹2,500 has been confirmed',
    time: '1 day ago',
    isRead: false,
    type: 'success'
  },
  {
    id: 3,
    title: 'Results Published',
    message: 'Semester 6 results are now available',
    time: '2 days ago',
    isRead: true,
    type: 'info'
  }
];

export const Header = ({ currentUser, onRoleChange }: HeaderProps) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <header className="bg-white/95 backdrop-blur-xl border-b border-gray-200/50 px-4 sm:px-6 py-4 sticky top-0 z-50 shadow-xl">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center">
            <img 
              src="https://jrnrvu.edu.in/wp-content/uploads/2024/09/fianl-logo.png" 
              alt="Rajasthan Vidhyapeeth University" 
              className="h-16 w-auto object-contain drop-shadow-lg"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-16 h-16 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-xl">RV</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3 sm:space-x-6">
          {/* Role Switcher for Demo */}
          <div className="hidden md:flex space-x-2">
            {(['student', 'faculty', 'admin'] as const).map((role) => (
              <Button
                key={role}
                variant={currentUser.role === role ? 'default' : 'outline'}
                size="sm"
                onClick={() => onRoleChange(role)}
                className={`rounded-full capitalize transition-all duration-300 font-medium ${
                  currentUser.role === role
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 border-0' 
                    : 'hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700 border-gray-300'
                }`}
              >
                {role}
              </Button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 p-2.5"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Modern Notification Bell */}
            <Popover open={isNotificationOpen} onOpenChange={setIsNotificationOpen}>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="relative rounded-full hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 p-2.5"
                >
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <div className="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                      <span className="text-xs font-bold text-white">{unreadCount}</span>
                    </div>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-96 p-0 bg-white/98 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-2xl" align="end">
                <div className="p-6 border-b border-gray-100/80">
                  <h3 className="font-bold text-lg text-gray-900 flex items-center justify-between">
                    Notifications
                    {unreadCount > 0 && (
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 text-xs px-3 py-1 rounded-full">
                        {unreadCount} new
                      </Badge>
                    )}
                  </h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-5 border-b border-gray-50/80 hover:bg-gradient-to-r hover:from-orange-50/50 hover:to-red-50/50 transition-all duration-300 cursor-pointer ${
                        !notification.isRead ? 'bg-gradient-to-r from-orange-50/30 to-red-50/30 border-l-4 border-l-orange-500' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-3 h-3 mt-2 rounded-full shadow-lg ${
                          notification.type === 'urgent' ? 'bg-gradient-to-r from-red-500 to-pink-600' :
                          notification.type === 'success' ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 
                          'bg-gradient-to-r from-blue-500 to-indigo-600'
                        }`} />
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-semibold text-gray-900 ${
                            !notification.isRead ? 'font-bold' : 'font-medium'
                          }`}>
                            {notification.title}
                          </p>
                          <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-400 mt-2 font-medium">
                            {notification.time}
                          </p>
                        </div>
                        {!notification.isRead && (
                          <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mt-2 shadow-sm" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-100/80 bg-gradient-to-r from-gray-50/50 to-orange-50/30">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-orange-600 hover:bg-orange-100 hover:text-orange-700 font-medium rounded-xl transition-all duration-300"
                  >
                    View All Notifications
                  </Button>
                </div>
              </PopoverContent>
            </Popover>

            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 p-2.5"
            >
              <Settings className="h-5 w-5" />
            </Button>
            
            {/* User Profile Section */}
            <div className="flex items-center space-x-4 pl-4 border-l border-gray-200/60">
              <Avatar className="h-10 w-10 ring-2 ring-orange-200 shadow-lg">
                <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-600 text-white font-bold text-sm">
                  {currentUser.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="text-sm hidden sm:block">
                <p className="font-bold text-gray-900">{currentUser.name}</p>
                <p className="text-xs text-gray-500 capitalize font-medium">{currentUser.role}</p>
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full hover:bg-red-50 hover:text-red-600 transition-all duration-300 p-2.5"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
