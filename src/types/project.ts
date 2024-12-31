export interface Project {
    title: string;
    period: string;
    description: string;
    imageUrl: string;
    details: {
      overview: string;
      features: string[];
    };
    videoUrl: string;
    qiitaUrl: string;
  }