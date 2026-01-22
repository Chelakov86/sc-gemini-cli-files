import { motion } from 'framer-motion';
import { Download, Hash, Type, Palette, Share2, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export const Socials = () => {
  const [copied, setCopied] = useState(false);
  const socialHandle = '@techstackconf2026';

  const copyHandle = () => {
    navigator.clipboard.writeText(socialHandle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Colors extracted from design
  const colors = [
    { name: 'Rose', hex: '#fb7185', class: 'bg-[#fb7185]' },
    { name: 'Indigo', hex: '#6366f1', class: 'bg-[#6366f1]' },
    { name: 'Dark Teal', hex: '#0d2c2d', class: 'bg-[#0d2c2d]' },
    { name: 'Navy', hex: '#1d2f58', class: 'bg-[#1d2f58]' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl mb-4"
          >
            <img src="/logo.svg" alt="TechStack Logo" className="w-16 h-16" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 dark:text-white"
          >
            Social Media Kit
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Everything you need to share the TechStack Conference 2026 experience. 
            Logos, colors, and official hashtags.
          </motion.p>
        </div>

        {/* Social Handle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                <Share2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Official Handle</h3>
                <p className="text-slate-500 dark:text-slate-400">Tag us in your posts</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <code className="flex-1 md:flex-none text-center bg-slate-100 dark:bg-slate-900 px-6 py-3 rounded-lg text-lg font-mono text-indigo-600 dark:text-indigo-400 font-bold border border-slate-200 dark:border-slate-700">
                {socialHandle}
              </code>
              <button
                onClick={copyHandle}
                className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors flex-shrink-0"
                title="Copy handle"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Brand Assets Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-rose-50 dark:bg-rose-900/20 rounded-lg">
                <Hash className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Logo Assets</h2>
            </div>
            
            <div className="aspect-video bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 mb-6 group relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] dark:opacity-[0.1]" />
              <img src="/logo.svg" alt="TechStack Logo" className="w-32 h-32 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>

            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white py-2.5 rounded-lg font-medium transition-colors text-sm">
                <Download className="w-4 h-4" /> SVG
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white py-2.5 rounded-lg font-medium transition-colors text-sm">
                <Download className="w-4 h-4" /> PNG
              </button>
            </div>
          </motion.div>

          {/* Typography Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700"
          >
             <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <Type className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Typography</h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                <p className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Inter</p>
                <div className="flex gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <span>Regular</span>
                  <span className="font-medium">Medium</span>
                  <span className="font-semibold">SemiBold</span>
                  <span className="font-bold">Bold</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">Aa</span>
                  <span className="font-mono text-xs text-slate-400">Heading 1</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                  <span className="text-xl font-bold text-slate-900 dark:text-white">Aa</span>
                  <span className="font-mono text-xs text-slate-400">Heading 2</span>
                </div>
                 <div className="flex items-baseline justify-between pb-2">
                  <span className="text-base text-slate-600 dark:text-slate-300">The quick brown fox jumps over the lazy dog.</span>
                  <span className="font-mono text-xs text-slate-400">Body</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Color Palette */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
              <Palette className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Brand Colors</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {colors.map((color) => (
              <div key={color.hex} className="group cursor-pointer">
                <div className={`h-24 rounded-xl shadow-sm mb-3 ${color.class} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{color.name}</p>
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};
