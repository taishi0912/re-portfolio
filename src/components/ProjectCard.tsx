import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  period: string;
  description: string;
  details: {
    overview: string;
    features: string[];
    // ... その他の詳細情報の型定義
  };
  videoUrl: string;
  qiitaUrl: string;
}

export default function ProjectCard({
  title,
  period,
  description,
  details,
  videoUrl,
  qiitaUrl
}: ProjectCardProps) {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm text-gray-500 mb-4">{period}</p>
        
        <button
          onClick={() => setIsDetailsVisible(!isDetailsVisible)}
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          詳細を見る
        </button>

        {isDetailsVisible && (
          <div className="mt-6 space-y-6">
            <p className="text-gray-700">{details.overview}</p>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">主要機能</h3>
              <ul className="list-disc list-inside space-y-2">
                {details.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>

            <div className="aspect-w-16 aspect-h-9">
              <video controls className="rounded-lg">
                <source src={videoUrl} type="video/mp4" />
                お使いのブラウザは動画タグをサポートしていません。
              </video>
            </div>

            <div className="flex justify-start">
              <a
                href={qiitaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#55C500] text-white rounded-full hover:bg-[#4CAF50] transition-colors"
              >
                Qiita記事を読む
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}