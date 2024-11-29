import React from 'react';
import { Header } from './components/Layout/Header';
import { Stats } from './components/Dashboard/Stats';
import { DeviceList } from './components/Dashboard/DeviceList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Stats />
        <DeviceList />
      </main>
    </div>
  );
}

export default App;