
type FilterType = 'all' | 'web' | 'mobile' | 'ui';

interface FilterButtonsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function FilterButtons({ currentFilter, onFilterChange }: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-8 animate-on-scroll">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-6 py-2 rounded-full transition-all ${
          currentFilter === 'all' 
            ? 'bg-portfolio-purple text-white shadow-md' 
            : 'bg-white hover:bg-gray-100'
        }`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('web')}
        className={`px-6 py-2 rounded-full transition-all ${
          currentFilter === 'web' 
            ? 'bg-portfolio-purple text-white shadow-md' 
            : 'bg-white hover:bg-gray-100'
        }`}
      >
        Web
      </button>
      <button
        onClick={() => onFilterChange('mobile')}
        className={`px-6 py-2 rounded-full transition-all ${
          currentFilter === 'mobile' 
            ? 'bg-portfolio-purple text-white shadow-md' 
            : 'bg-white hover:bg-gray-100'
        }`}
      >
        Mobile
      </button>
      <button
        onClick={() => onFilterChange('ui')}
        className={`px-6 py-2 rounded-full transition-all ${
          currentFilter === 'ui' 
            ? 'bg-portfolio-purple text-white shadow-md' 
            : 'bg-white hover:bg-gray-100'
        }`}
      >
        UI Design
      </button>
    </div>
  );
}
