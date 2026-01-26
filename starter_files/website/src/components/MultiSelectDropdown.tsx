import { useState, useRef, useEffect } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface MultiSelectDropdownProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder: string;
  icon?: React.ComponentType<{ className?: string }>;
  searchPlaceholder?: string;
}

export const MultiSelectDropdown = ({
  options,
  selected,
  onChange,
  placeholder,
  icon: Icon,
  searchPlaceholder = 'Search...',
}: MultiSelectDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter options based on search query
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter(item => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  const handleSelectAll = () => {
    onChange(filteredOptions);
  };

  const handleClearAll = () => {
    onChange([]);
  };

  const displayText = selected.length === 0
    ? placeholder
    : selected.length === 1
    ? selected[0]
    : `${selected.length} selected`;

  return (
    <div ref={dropdownRef} className="relative min-w-[200px]">
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between pl-3 pr-10 py-3 text-base border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selected.length === 0 ? 'text-slate-500' : ''}>
          {displayText}
        </span>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <div className="flex items-center gap-1">
            {Icon && <Icon className="h-4 w-4 text-slate-500" />}
            <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </div>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-2 w-full bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            {/* Search Input */}
            <div className="p-3 border-b border-slate-200 dark:border-slate-700">
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-200 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200 dark:border-slate-700">
              <button
                type="button"
                onClick={handleSelectAll}
                disabled={filteredOptions.length === 0}
                className="text-xs font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Select All
              </button>
              <button
                type="button"
                onClick={handleClearAll}
                disabled={selected.length === 0}
                className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Clear All
              </button>
            </div>

            {/* Options List */}
            <div className="max-h-64 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => {
                  const isSelected = selected.includes(option);
                  return (
                    <label
                      key={option}
                      className="flex items-center px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleToggle(option)}
                        className="sr-only"
                      />
                      <div className={`flex items-center justify-center w-4 h-4 mr-3 rounded border transition-all ${
                        isSelected
                          ? 'bg-primary-600 border-primary-600'
                          : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600'
                      }`}>
                        {isSelected && <Check className="h-3 w-3 text-white" />}
                      </div>
                      <span className="text-sm text-slate-900 dark:text-white flex-1">
                        {option}
                      </span>
                    </label>
                  );
                })
              ) : (
                <div className="px-3 py-4 text-center text-sm text-slate-500 dark:text-slate-400">
                  No matches found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
