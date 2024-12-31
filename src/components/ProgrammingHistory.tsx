import { useState } from 'react';
import { timelineItems } from '../data/timeline';

export default function ProgrammingHistory() {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  return (
    <section id="programming-history" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">Programming Journey</h2>
      <button
        onClick={() => setIsDetailsVisible(!isDetailsVisible)}
        className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
      >
        詳細を見る
      </button>

      {isDetailsVisible && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="border-l-2 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <ul className="list-disc list-inside space-y-2">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-gray-600">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}