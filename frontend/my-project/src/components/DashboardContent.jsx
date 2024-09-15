import React from 'react';

export default function DashboardContent() {
  return (
    <main className="p-6 flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-3xl mt-4">1,234</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Total Revenue</h2>
          <p className="text-3xl mt-4">$12,345</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Active Sessions</h2>
          <p className="text-3xl mt-4">567</p>
        </div>
      </div>
    </main>
  );
}
