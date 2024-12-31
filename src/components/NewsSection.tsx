import { activities } from '../data/activities';

export default function NewsSection() {
  return (
    <section id="news-topics" className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Recent Activities</h2>

      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-4">
            Latest News
          </span>
          <h3 className="text-xl font-semibold mb-4">Mercari Challenger Hackathon参加決定</h3>
          <p className="text-gray-600 mb-4">
            チームで挑め、価値交換の新しい未来へ」をテーマにしたメルカリチャレンジャーハッカソンの選考に合格し、参加が決定しました。
            12月4日から6日の3日間、異業種メンバーと共にメルカリハロやメルコインの新たなソリューション開発に挑みます。
          </p>
          <a
            href="https://youtu.be/ips04GlnZ2o?si=dxSe6S5z0x66VOfe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            詳細を見る →
          </a>
        </div>

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
      </div>
    </section>
  );
}