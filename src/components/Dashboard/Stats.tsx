import React from 'react';
import { Activity, Battery, Signal, AlertTriangle } from 'lucide-react';
import type { DeviceStats } from '../../types/device';

const mockStats: DeviceStats = {
  totalDevices: 156,
  activeDevices: 143,
  alertCount: 3,
  dataTransferred: '2.3 GB'
};

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Devices</p>
            <p className="text-2xl font-bold">{mockStats.totalDevices}</p>
          </div>
          <Activity className="w-8 h-8 text-blue-500" />
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Active Devices</p>
            <p className="text-2xl font-bold">{mockStats.activeDevices}</p>
          </div>
          <Signal className="w-8 h-8 text-green-500" />
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Active Alerts</p>
            <p className="text-2xl font-bold">{mockStats.alertCount}</p>
          </div>
          <AlertTriangle className="w-8 h-8 text-yellow-500" />
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Data Transferred</p>
            <p className="text-2xl font-bold">{mockStats.dataTransferred}</p>
          </div>
          <Battery className="w-8 h-8 text-purple-500" />
        </div>
      </div>
    </div>
  );
}