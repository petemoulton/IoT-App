import React from 'react';
import { Menu, Bell, Settings } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Menu className="h-6 w-6 text-gray-600" />
              <span className="ml-2 text-xl font-semibold">IoT Dashboard</span>
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none">
              <Bell className="h-6 w-6" />
            </button>
            <button className="ml-3 p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none">
              <Settings className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}