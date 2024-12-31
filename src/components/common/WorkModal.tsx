import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Project } from '../../types/project';

interface WorkModalProps {
  project: Project;
  onClose: () => void;
}

export default function WorkModal({ project, onClose }: WorkModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#1A1A1A] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#1A1A1A] p-4 flex justify-between items-center border-b border-gray-800">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">概要</h4>
              <p className="text-gray-300">{project.details.overview}</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">開発期間</h4>
              <p className="text-gray-300">{project.period}</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">主な機能</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {project.details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">デモ動画</h4>
              <video controls className="w-full rounded-lg">
                <source src={project.videoUrl} type="video/mp4" />
                お使いのブラウザは動画タグをサポートしていません。
              </video>
            </div>

            <div className="flex justify-start">
              <a
                href={project.qiitaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 bg-[#55C500] text-white rounded-full hover:bg-[#4CAF50] transition-colors"
              >
                Qiita記事を読む
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}