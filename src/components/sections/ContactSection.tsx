import { Github, Twitter, Instagram } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-20">
      <h2 className="text-6xl font-serif mb-4">CONTACT</h2>
      <p className="text-lg text-gray-400 mb-16">get in touch</p>

      <div className="max-w-2xl mx-auto w-full">
        <form className="space-y-6" action="mailto:sekainotaishi@gmail.com" method="post" encType="text/plain">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg p-3 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              お問い合わせ内容
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg p-3 text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#C5A572] text-white py-3 rounded-lg hover:bg-[#B49562] transition-colors"
          >
            送信
          </button>
        </form>

        <div className="mt-16 flex justify-center space-x-8">
          <a href="https://github.com/taishi0912" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
          </a>
          <a href="https://x.com/taipilo" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
          </a>
          <a href="https://instagram.com/taipilo" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}