import { Github, FileText } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="mb-16 fade-in">
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="text-amber-600 italic mb-4">
          <p>このポートフォリオは現在開発途中です。プロジェクトの詳細や新しい成果は順次更新していきます。
             最新の情報や完成したプロジェクトについては、定期的にチェックしていただければ幸いです。(PC推奨)</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <h3 className="text-2xl font-semibold mb-2">中村 大志</h3>
      <p className="text-gray-600 mb-6">大学生</p>

      <div className="prose max-w-none mb-8">
        <p>
          幼少期からプログラミングに親しみ、中高時代にはゲーム開発やウェブサービスの構築などの独自プロジェクトに取り組んできました。
          大学では電気電子工学を専攻し、ハードウェアとソフトウェアの両面から技術を探究しています。学びへの情熱から転入学を果たし、新たな環境で研鑽を積んでいます。
          最近では、ハッカソンでの受賞など、常に新しい挑戦を続けています。
          「モノづくりの楽しさ」を原動力に、技術の探究と統合に情熱を注いでいます。
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Social Links</h3>
        <div className="flex gap-4">
          <a
            href="https://github.com/taishi0912"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
          <a
            href="https://github.com/taishi0912"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-[#55C500] text-white rounded-full hover:bg-[#4CAF50] transition-colors"
          >
            <FileText className="w-5 h-5 mr-2" />
            Blog
          </a>
          <a
            href="https://sizu.me/taipilo/posts/0051suczrmrk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <FileText className="w-5 h-5 mr-2" />
            Blog
          </a>
        </div>
      </div>
    </section>
  );
}