import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import ProfileInfo from './ProfileInfo';
import Scoreboard from './Scoreboard';
import PathwayProgress from './PathwayProgress';
import Community from './Community';
import Notifications from './Notifications';
import MentorInfo from './MentorInfo';
import ProgressTracking from './ProgressTracking';

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProfileInfo />
          <Scoreboard />
          <PathwayProgress />
          <Community />
          <Notifications />
          <MentorInfo />
          <ProgressTracking />
        </div>
      </div>
    </div>
  );
}
