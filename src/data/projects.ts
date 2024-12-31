export const projects = [
  {
    title: "ダークダンジョン (Unity3D)",
    period: "高校1-2年生 開発期間：10ヶ月",
    description: "3DアクションRPGゲーム",
    imageUrl: "/assets/media/darkdungeon.png",
    details: {
      overview: "Unityエンジンを使用して開発したアクションRPGです。プレイヤーは勇者となり、ダンジョンを探索しながらモンスターと戦い、宝箱を探す冒険を楽しめます。",
      features: [
        "アクションベースの戦闘システム",
        "ダンジョン探索システム",
        "宝箱収集による報酬システム",
        "NavMeshによるインテリジェントな敵AI",
        "パーティクルシステムによる視覚効果",
        "3D音響効果による臨場感の演出"
      ]
    },
    videoUrl: "unity01.mp4",
    qiitaUrl: "https://qiita.com/taipilo/items/517ea536c06c3fa3f514"
  },
  {
    title: "Ballon (Ruby)",
    period: "高校2-3年生 開発期間：6ヶ月",
    description: "悩み相談Webサービス",
    imageUrl: "/assets/media/Ballon.png",
    details: {
      overview: "匿名性を保ちながら若者同士が安全に悩みを共有し、相互サポートできるプラットフォームです。",
      features: [
        "BCryptによる堅牢なユーザー認証",
        "プライバシーに配慮した匿名投稿機能",
        "セキュアなセッション管理"
      ]
    },
    videoUrl: "webs01.mp4",
    qiitaUrl: "https://qiita.com/taipilo/items/761d9c67b2bfd35e4ff1"
  },
  {
    title: "行列計算機 (Python/Tkinter)",
    period: "大学1年生 開発期間：3ヶ月",
    description: "計算過程を可視化する行列計算機",
    imageUrl: "/assets/media/matrixlab.png",
    details: {
      overview: "線形代数の学習者向けの計算過程可視化ツール",
      features: [
        "計算順序の最適化による精度向上",
        "NumPyの高精度アルゴリズムの活用",
        "MVCパターンによるモジュール分割"
      ]
    },
    videoUrl: "math.MP4",
    qiitaUrl: "https://qiita.com/taipilo/items/5ec74b57b720a3dfc0ef"
  },
  {
    title: "Daily Beat (Python)",
    period: "大学3年生 開発期間：3ヶ月～現在",
    description: "音楽を通じて感情や経験を共有するSNSプラットフォーム",
    imageUrl: "/assets/media/dailybeat.png",
    details: {
      overview: "日々の感情を1曲の音楽で表現し、共有できるSNSプラットフォームです。Spotify APIと連携し、ユーザー体験を向上させています。",
      features: [
        "Spotify APIを活用した楽曲検索・再生機能",
        "アルバムアート自動取得による視覚的な体験向上",
        "1日1投稿制限による継続的な利用促進",
        "キャッシュシステムによるパフォーマンス最適化",
        "レスポンシブデザインによる多デバイス対応",
        "Flaskによる堅牢なバックエンド構築",
        "SQLAlchemyを用いた効率的なデータベース設計",
        "日次バッチ処理による自動データ更新"
      ]
    },
    videoUrl: "dailybeat.mp4",
    qiitaUrl: "https://qiita.com/taipilo/items/dailybeat"
  },
  {
    title: "キャリアクエスト (Python)",
    period: "大学3年生 開発期間：3日間",
    description: "個人ハッカソンで最優秀賞と技術賞を受賞したサービス",
    imageUrl: "/assets/media/careerquest.png",
    details: {
      overview: "就活生向けのキャリア探索支援プラットフォームです。ゲーミフィケーションと心理学的アプローチを組み合わせた革新的なサービスです。",
      features: [
        "タイムクリスタルを活用した選択システム",
        "心理的負担を軽減する3択方式の意思決定システム",
        "選択結果を可視化するタイムライン機能",
        "段階的な自己分析プロセス",
        "適性診断アルゴリズムによる職業マッチング",
        "Flaskによる堅牢なバックエンド構築",
        "SQLAlchemyを用いたデータベース設計",
        "レスポンシブなUI/UXデザイン"
      ]
    },
    videoUrl: "careerquest.mp4",
    qiitaUrl: "https://qiita.com/taipilo/items/careerquest"
  }
];