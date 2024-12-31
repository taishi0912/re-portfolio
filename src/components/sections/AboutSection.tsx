export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center">
      <h1 className="text-6xl font-serif mb-4">ABOUT</h1>
      <p className="text-lg text-gray-400 mb-16">introduce my profile</p>
      
      <div className="bg-[#1A1A1A] rounded-lg p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-8">中村 大志</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              幼少期からプログラミングに親しみ、中高時代にはゲーム開発やウェブサービスの構築などの独自プロジェクトに取り組んできました。
              大学では電気電子工学を専攻し、ハードウェアとソフトウェアの両面から技術を探究しています。学びへの情熱から転入学を果たし、
              新たな環境で研鑽を積んでいます。最近では、ハッカソンでの受賞など、常に新しい挑戦を続けています。
              「モノづくりの楽しさ」を原動力に、技術の探究と統合に情熱を注いでいます。
            </p>
            <div className="space-y-2">
              <p>Blog: <a href="https://sizu.me/taipilo" className="text-[#C5A572] hover:text-[#D6B583] transition-colors">https://sizu.me/taipilo</a></p>
              <p>Github: <a href="https://github.com/taishi0912" className="text-[#C5A572] hover:text-[#D6B583] transition-colors">https://github.com/taishi0912</a></p>
            </div>
          </div>
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
            <img
              src="/assets/media/nakamu.jpg"
              alt="Profile"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}