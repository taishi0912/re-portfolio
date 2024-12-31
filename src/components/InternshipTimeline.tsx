import { motion } from 'framer-motion';

interface InternshipEntry {
  date: string;
  company: string;
  description: string;
}

const internships: InternshipEntry[] = [
  {
    date: "2024.08-09",
    company: "川崎重工業株式会社",
    description: "インターンシップ参加"
  },
  {
    date: "2024.08",
    company: "近畿日本鉄道株式会社",
    description: "インターンシップ参加"
  },
  {
    date: "2024.09",
    company: "KDDIエンジニアリング株式会社",
    description: "インターンシップ参加"
  },
  {
    date: "2024.10",
    company: "産業技術総合研究所",
    description: "インターンシップ参加"
  },
  {
    date: "2023.08-09",
    company: "WILLER株式会社",
    description: "インターンシップ参加"
  }
];

export default function InternshipTimeline() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">インターンシップ経験</h3>
      <div className="overflow-y-auto max-h-[400px] pr-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100">
        {internships.map((internship, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex-shrink-0 w-24 text-blue-600 font-medium">
              {internship.date}
            </div>
            <div className="flex-grow">
              <h4 className="font-semibold text-gray-900">{internship.company}</h4>
              <p className="text-gray-600 mt-1">{internship.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}