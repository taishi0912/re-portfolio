export interface Skill {
  name: string;
  icon: string;
  experience: string;
  personal: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      {
        name: "HTML5",
        icon: "/assets/media/html.png",
        experience: "実務経験: - 年",
        personal: "個人経験: 3 年"
      },
      {
        name: "CSS3",
        icon: "/assets/media/css.png",
        experience: "実務経験: - 年",
        personal: "個人経験: 3 年"
      },
      {
        name: "JavaScript",
        icon: "/assets/media/javascript.png",
        experience: "実務経験: - 年",
        personal: "個人経験: 3 年"
      },
      {
        name: "TypeScript",
        icon: "/assets/media/typescript.png",
        experience: "実務経験: - 年",
        personal: "個人経験: 0.5 年"
      },
      {
        name: "React",
        icon: "/assets/media/react.png",
        experience: "実務経験: - 年",
        personal: "個人経験: 1.5 年"
      },
      {
        name: "Bootstrap",
        icon: "/assets/media/bootstrap.png",
        experience: "実務経験: - 年",
        personal: "個人経験: 1.5 年"
      },
      {
        name: "Tailwind",
        icon: "/assets/media/tailwind.png",
        experience: "実務経験: - 年",
        personal: "個人経験: 0.5 年"
      }
    ]
  },
  {
    name: "Backend",
    skills: [
      {
        name: "Python (Flask)",
        icon: "/assets/media/python.png",
        experience: "実務経験: - 年",
        personal: "個人経験: 2 年"
      },
      {
        name: "Ruby (Sinatra)",
        icon: "/assets/media/ruby.png",
        experience: "実務経験: - 年",
        personal: "個人経験: 1 年"
      },
      {
        name: "SQLAlchemy",
        icon: "/assets/media/sqlalchemy.png",
        experience: "実務経験: - 年",
        personal: "個人経験: 1.5 年"
      },
      {
        name: "SQLite",
        icon: "/assets/media/sqlite.png",
        experience: "実務経験: - 年",
        personal: "個人経験: 1.5 年"
      },
      {
        name: "FastAPI",
        icon: "/assets/media/api.png",
        experience: "実務経験: - 年",
        personal: "個人経験: 1.5 年"
      }
    ]
  },
  {
    name: "Game Development",
    skills: [
      {
        name: "Unity3D",
        icon: "/assets/media/unity.png",
        experience: "実務経験: - 年",
        personal: "個人経験: 2 年"
      },
      {
        name: "C#",
        icon: "/assets/media/csharp.png",
        experience: "実務経験: - 年",
        personal: "個人経験: 2 年"
      }
    ]
  },
  {
    name: "DevOps",
    skills: [
      {
        name: "GitHub",
        icon: "/assets/media/github.png",
        experience: "実務経験: - 年",
        personal: "個人経験: 6 年"
      },
      {
        name: "Heroku",
        icon: "/assets/media/heroku.png",
        experience: "実務経験: - 年",
        personal: "個人経験: 1 年"
      },
      {
        name: "Docker",
        icon: "/assets/media/docker.png",
        experience: "実務経験: - 年",
        personal: "個人経験: 1 年"
      }
    ]
  }
];