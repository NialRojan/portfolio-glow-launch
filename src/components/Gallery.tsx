
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  caption: string;
  image: string;
  category: 'travel' | 'nature' | 'events';
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Mountain Sunrise',
    caption: 'Early morning hike in the mountains',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=600',
    category: 'nature'
  },
  {
    id: 2,
    title: 'Beach Sunset',
    caption: 'Beautiful sunset at the beach',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=600',
    category: 'travel'
  },
  {
    id: 3,
    title: 'Local Festival',
    caption: 'Annual cultural festival in the city center',
    image: 'https://images.unsplash.com/photo-1481481525014-91e77115eace?auto=format&fit=crop&q=80&w=600',
    category: 'events'
  },
  {
    id: 4,
    title: 'City Skyline',
    caption: 'Downtown skyline at dusk',
    image: 'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?auto=format&fit=crop&q=80&w=600',
    category: 'travel'
  },
  {
    id: 5,
    title: 'Forest Path',
    caption: 'Peaceful walk in the forest',
    image: 'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?auto=format&fit=crop&q=80&w=600',
    category: 'nature'
  },
  {
    id: 6,
    title: 'Tech Conference',
    caption: 'Speaking at the annual developers conference',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=600',
    category: 'events'
  }
];

export function Gallery() {
  const [filter, setFilter] = useState<'all' | 'travel' | 'nature' | 'events'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gray-50 opacity-50 z-0" />
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6 after:left-1/2 after:-translate-x-1/2 animate-on-scroll">
            Photo Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
            Explore my personal photography collection showcasing memorable moments, travels, and events. Each photo tells a unique story.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 animate-on-scroll">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'all' 
                  ? 'bg-portfolio-purple text-white shadow-md' 
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('travel')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'travel' 
                  ? 'bg-portfolio-purple text-white shadow-md' 
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              Travel
            </button>
            <button
              onClick={() => setFilter('nature')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'nature' 
                  ? 'bg-portfolio-purple text-white shadow-md' 
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              Nature
            </button>
            <button
              onClick={() => setFilter('events')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'events' 
                  ? 'bg-portfolio-purple text-white shadow-md' 
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              Events
            </button>
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="animate-on-scroll group relative overflow-hidden rounded-xl shadow-lg"
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.caption}</p>
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                  <ZoomIn size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-200 z-10"
            onClick={() => setSelectedItem(null)}
          >
            <X size={32} />
          </button>
          
          <div 
            className="max-w-4xl max-h-[90vh] relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedItem.image} 
              alt={selectedItem.title}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="bg-black/40 backdrop-blur-sm p-4 mt-2 rounded">
              <h3 className="text-white text-xl font-semibold">{selectedItem.title}</h3>
              <p className="text-white/80">{selectedItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
