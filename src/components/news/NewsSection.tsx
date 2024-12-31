import React from 'react';
import { activities } from '../../data/activities';
import LatestNews from './LatestNews';
import ActivityList from './ActivityList';

export default function NewsSection() {
  return (
    <section id="news-topics" className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Recent Activities</h2>

      <div className="space-y-8">
        <LatestNews 
          title="Mercari Challenger Hackathon参加決定"
          description="チームで挑め、価値交換の新しい未来へ」をテーマにしたメルカリチャレンジャーハッカソンの選考に合格し、参加が決定しました。12月4日から6日の3日間、異業種メンバーと共にメルカリハロやメルコインの新たなソリューション開発に挑みます。"
          link="https://youtu.be/ips04GlnZ2o?si=dxSe6S5z0x66VOfe"
        />
        <ActivityList activities={activities} />
      </div>
    </section>
  );
}