import React from 'react';
import { Battery, Signal, AlertCircle } from 'lucide-react';
import type { Device } from '../../types/device';

const mockDevices: Device[] = [
  {
    id: '1',
    name: 'NBIoT Sensor 001',
    type: 'NBIoT',
    status: 'online',
    lastSeen: '2024-03-15T10:30:00Z',
    battery: 85,
    signal: 92,
    location: { lat: 51.5074, lng: -0.1278 }
  },
  {
    id: '2',
    name: 'LoRaWAN Gateway 002',
    type: 'LoRaWAN',
    status: 'warning',
    lastSeen: '2024-03-15T10:29:00Z',
    battery: 45,
    signal: 78,
    location: { lat: 48.8566, lng: 2.3522 }
  }
];

export function DeviceList() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Connected Devices</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left pb-3">Device</th>
                <th className="text-left pb-3">Type</th>
                <th className="text-left pb-3">Status</th>
                <th className="text-left pb-3">Battery</th>
                <th className="text-left pb-3">Signal</th>
                <th className="text-left pb-3">Last Seen</th>
              </tr>
            </thead>
            <tbody>
              {mockDevices.map((device) => (
                <tr key={device.id} className="border-b border-gray-100">
                  <td className="py-3">
                    <div className="flex items-center">
                      <span className="font-medium">{device.name}</span>
                    </div>
                  </td>
                  <td>{device.type}</td>
                  <td>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${device.status === 'online' ? 'bg-green-100 text-green-800' : 
                        device.status === 'warning' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {device.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <Battery className="w-4 h-4 mr-1" />
                      {device.battery}%
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <Signal className="w-4 h-4 mr-1" />
                      {device.signal}%
                    </div>
                  </td>
                  <td>{new Date(device.lastSeen).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}