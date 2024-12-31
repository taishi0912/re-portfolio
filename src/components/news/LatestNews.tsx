import React from 'react';

interface LatestNewsProps {
  title: string;
  description: string;
  link: string;
}

export default function LatestNews({ title, description, link }: LatestNewsProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-4">
        Latest News
      </span>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors"
      >
        詳細を見る →
      </a>
    </div>
  );
}