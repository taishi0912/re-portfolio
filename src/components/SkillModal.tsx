interface SkillModalProps {
  skill: {
    name: string;
    icon: string;
    experience: string;
    personal: string;
  };
  onClose: () => void;
}

export default function SkillModal({ skill, onClose }: SkillModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 text-white p-8 rounded-lg relative max-w-md w-full mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ×
        </button>
        
        <div className="text-center">
          <img src={skill.icon} alt={skill.name} className="w-20 h-20 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
          <p className="mb-2">{skill.experience}</p>
          <p>{skill.personal}</p>
        </div>
      </div>
    </div>
  );
}