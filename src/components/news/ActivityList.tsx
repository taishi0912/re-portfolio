import React from 'react';
import { Activity } from '../../types/activity';

interface ActivityListProps {
  activities: Activity[];
}

export default function ActivityList({ activities }: ActivityListProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="text-blue-600 font-medium w-24 flex-shrink-0">
              {activity.date}
            </div>
            <div>
              <h4 className="font-semibold">{activity.title}</h4>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}