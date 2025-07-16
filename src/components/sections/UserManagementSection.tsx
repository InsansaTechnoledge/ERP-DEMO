
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Plus, Search, Filter, Edit, Trash2, Shield } from 'lucide-react';

export const UserManagementSection = () => {
  const [selectedRole, setSelectedRole] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      email: 'rajesh.kumar@rv.edu.in',
      role: 'faculty',
      department: 'Computer Science',
      status: 'active',
      lastLogin: '2024-06-25',
      permissions: ['mark_entry', 'student_review'],
    },
    {
      id: 2,
      name: 'Prof. Priya Sharma',
      email: 'priya.sharma@rv.edu.in',
      role: 'admin',
      department: 'Administration',
      status: 'active',
      lastLogin: '2024-06-26',
      permissions: ['full_access'],
    },
    {
      id: 3,
      name: 'John Doe',
      email: 'john.doe@student.rv.edu.in',
      role: 'student',
      department: 'Computer Science',
      status: 'active',
      lastLogin: '2024-06-24',
      permissions: ['exam_form', 'payment', 'results'],
    },
    {
      id: 4,
      name: 'Dr. Amit Patel',
      email: 'amit.patel@rv.edu.in',
      role: 'faculty',
      department: 'Electronics',
      status: 'inactive',
      lastLogin: '2024-06-20',
      permissions: ['mark_entry'],
    },
  ];

  const roleStats = [
    { role: 'Students', count: 2456, color: 'blue' },
    { role: 'Faculty', count: 145, color: 'green' },
    { role: 'Admin', count: 12, color: 'purple' },
    { role: 'Staff', count: 89, color: 'orange' },
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'faculty':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'student':
        return 'bg-green-100 text-green-700 border-green-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-700 border-green-300'
      : 'bg-gray-100 text-gray-700 border-gray-300';
  };

  const filteredUsers = users.filter(user => {
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRole && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            User Management
          </h1>
          <p className="text-gray-600 mt-2">Manage users, roles, and permissions across the system</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
          <Plus className="h-4 w-4 mr-2" />
          Add New User
        </Button>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roleStats.map((stat, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.role}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.count.toLocaleString()}</p>
                </div>
                <div className={`p-3 rounded-xl ${
                  stat.color === 'blue' ? 'bg-blue-100' :
                  stat.color === 'green' ? 'bg-green-100' :
                  stat.color === 'purple' ? 'bg-purple-100' : 'bg-orange-100'
                }`}>
                  <Users className={`h-6 w-6 ${
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'purple' ? 'text-purple-600' : 'text-orange-600'
                  }`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search users by name or email..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="all">All Roles</option>
                <option value="admin">Admin</option>
                <option value="faculty">Faculty</option>
                <option value="student">Student</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* User List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5" />
            System Users
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredUsers.map((user) => (
              <div key={user.id} className="p-4 border rounded-xl hover:shadow-md transition-all bg-gradient-to-r from-white to-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg">
                      {user.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-lg">{user.name}</h3>
                        <Badge variant="outline" className={getRoleColor(user.role)}>
                          {user.role}
                        </Badge>
                        <Badge variant="outline" className={getStatusColor(user.status)}>
                          {user.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div>
                          <p className="font-medium">Email</p>
                          <p>{user.email}</p>
                        </div>
                        <div>
                          <p className="font-medium">Department</p>
                          <p>{user.department}</p>
                        </div>
                        <div>
                          <p className="font-medium">Last Login</p>
                          <p>{user.lastLogin}</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm font-medium text-gray-700 mb-2">Permissions:</p>
                        <div className="flex flex-wrap gap-1">
                          {user.permissions.map((permission, index) => (
                            <Badge key={index} variant="outline" className="text-xs bg-blue-50 text-blue-700">
                              {permission.replace('_', ' ')}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Shield className="h-4 w-4 mr-1" />
                      Permissions
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Role Management */}
      <Card>
        <CardHeader>
          <CardTitle>Role & Permission Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-3 text-red-700">Admin Role</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Full system access</li>
                <li>• User management</li>
                <li>• System configuration</li>
                <li>• Financial reports</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-3 text-blue-700">Faculty Role</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Mark entry</li>
                <li>• Student review</li>
                <li>• Document verification</li>
                <li>• Course management</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-3 text-green-700">Student Role</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Exam form submission</li>
                <li>• Payment processing</li>
                <li>• Result viewing</li>
                <li>• Document download</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
