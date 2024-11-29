export interface Device {
  id: string;
  name: string;
  type: 'NBIoT' | 'LoRaWAN';
  status: 'online' | 'offline' | 'warning';
  lastSeen: string;
  battery: number;
  signal: number;
  location: {
    lat: number;
    lng: number;
  };
}

export interface DeviceStats {
  totalDevices: number;
  activeDevices: number;
  alertCount: number;
  dataTransferred: string;
}