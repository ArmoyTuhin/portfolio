import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder photography data - in a real implementation, these would be actual photos
  const photos = [
    {
      id: 1,
      title: "Street Photography",
      category: "Street",
      description: "Capturing life in motion on the bustling streets",
      thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop&crop=center",
      fullSize: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Urban Architecture",
      category: "Architecture",
      description: "Modern architectural marvels in black and white",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop&crop=center",
      fullSize: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Portrait Study",
      category: "Portrait",
      description: "Emotional depth captured in monochrome",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
      fullSize: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Nature's Geometry",
      category: "Nature",
      description: "Finding patterns in the natural world",
      thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop&crop=center",
      fullSize: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "City Lights",
      category: "Night",
      description: "Urban nightscape in dramatic contrast",
      thumbnail: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=400&fit=crop&crop=center",
      fullSize: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&h=800&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Minimalist Composition",
      category: "Abstract",
      description: "Less is more in this minimalist approach",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop&crop=center",
      fullSize: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&crop=center"
    }
  ];

  const categories = ["All", ...new Set(photos.map(photo => photo.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos = activeCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  const openLightbox = (photo, index) => {
    setSelectedImage(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredPhotos.length
      : (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(filteredPhotos[newIndex]);
  };

  return (
    <section id="photography" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Photography</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing moments and emotions through the lens. Winner of Photography Club of India 
            street photography competition, exploring the world in black and white.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-background text-foreground border border-border hover:bg-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => openLightbox(photo, index)}
            >
              <div className="relative overflow-hidden rounded-lg bg-background border border-border hover-lift">
                <img
                  src={photo.thumbnail}
                  alt={photo.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 filter grayscale"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold">{photo.title}</h3>
                  <p className="text-white/80 text-sm">{photo.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X size={32} />
              </button>
              
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft size={32} />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight size={32} />
              </button>

              <img
                src={selectedImage.fullSize}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain filter grayscale"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-white/80">{selectedImage.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Photography;

