import { motion } from 'framer-motion';
import { careerTimeline } from '../../data/career';

export default function CareerSection() {
  return (
    <section id="career" className="min-h-screen flex flex-col justify-center py-20">
      <h2 className="text-6xl font-serif mb-4">CAREER</h2>
      <p className="text-lg text-gray-400 mb-16">my professional journey</p>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 h-full w-0.5 bg-[#C5A572]" />
        
        <div className="space-y-16">
          {careerTimeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative items-center`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-[#C5A572] rounded-full border-4 border-[#111111]" />
              
              {/* Horizontal connecting line */}
              <div 
                className={`absolute left-1/2 top-1/2 h-[1px] bg-[#C5A572] ${
                  index % 2 === 0 ? '-translate-x-[100px]' : 'translate-x-0'
                }`}
                style={{ width: '100px' }}
              />
              
              {/* Content box */}
              <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'pr-24' : 'pl-24'}`}>
                <div className="bg-[#1A1A1A] p-6 rounded-lg hover:bg-[#222222] transition-colors">
                  <span className="text-[#C5A572] text-sm">{item.date}</span>
                  <h3 className="text-xl font-medium mt-2 mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
              
              {/* Empty div for spacing on the other side */}
              <div className="w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}