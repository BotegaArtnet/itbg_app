import { motion, PanInfo } from 'framer-motion';
import { useState, useRef } from 'react';

interface Filter {
  id: string;
  name: string;
  class: string;
}

const filters: Filter[] = [
  { id: 'original', name: 'Original', class: '' },
  { id: 'grayscale', name: 'B&W', class: 'grayscale' },
  { id: 'sepia', name: 'Vintage', class: 'sepia' },
  { id: 'saturate', name: 'Vibrant', class: 'saturate-150' },
  { id: 'contrast', name: 'Contrast', class: 'contrast-125' },
  { id: 'brightness', name: 'Bright', class: 'brightness-110' },
];

interface TextStyle {
  id: string;
  name: string;
  class: string;
}

const textStyles: TextStyle[] = [
  { id: 'normal', name: 'Normal', class: 'font-normal' },
  { id: 'bold', name: 'Bold', class: 'font-bold' },
  { id: 'serif', name: 'Serif', class: 'font-serif' },
  { id: 'mono', name: 'Mono', class: 'font-mono' },
];

interface MediaFile {
  type: 'image' | 'video';
  url: string;
}

export default function StoryCreator() {
  const [selectedMedia, setSelectedMedia] = useState<MediaFile | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<Filter>(filters[0]);
  const [selectedTextStyle, setSelectedTextStyle] = useState<TextStyle>(textStyles[0]);
  const [text, setText] = useState('');
  const [textPosition, setTextPosition] = useState({ x: 50, y: 50 });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = reader.result as string;
        const type = file.type.startsWith('image/') ? 'image' : 'video';
        setSelectedMedia({ type, url });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragText = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const container = document.querySelector('.story-container');
    if (container) {
      const rect = container.getBoundingClientRect();
      const x = ((info.point.x - rect.left) / rect.width) * 100;
      const y = ((info.point.y - rect.top) / rect.height) * 100;
      setTextPosition({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
    }
  };

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="mx-auto max-w-lg">
        {/* Media Preview */}
        <div className="story-container relative aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900">
          {selectedMedia ? (
            <div className="relative h-full">
              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.url}
                  alt="Story preview"
                  className={`h-full w-full object-cover ${selectedFilter.class}`}
                />
              ) : (
                <video
                  ref={videoRef}
                  src={selectedMedia.url}
                  className={`h-full w-full object-cover ${selectedFilter.class}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
              {text && (
                <motion.div
                  drag
                  dragMomentum={false}
                  onDrag={handleDragText}
                  style={{
                    position: 'absolute',
                    left: `${textPosition.x}%`,
                    top: `${textPosition.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className={`cursor-move text-center text-2xl text-white drop-shadow-lg ${selectedTextStyle.class}`}
                >
                  {text}
                </motion.div>
              )}
            </div>
          ) : (
            <div className="flex h-full items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center gap-2 text-white"
              >
                <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">Upload photo or video</span>
              </motion.button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          )}
        </div>

        {selectedMedia && (
          <div className="mt-4 space-y-4">
            {/* Filters */}
            <div>
              <h3 className="mb-2 text-sm font-medium text-white">Filters</h3>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {filters.map((filter) => (
                  <motion.button
                    key={filter.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedFilter(filter)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium ${
                      selectedFilter.id === filter.id
                        ? 'bg-white text-black'
                        : 'bg-gray-800 text-white'
                    }`}
                  >
                    {filter.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Text Input */}
            <div>
              <h3 className="mb-2 text-sm font-medium text-white">Add Text</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Type something..."
                  className="flex-1 rounded-lg bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex gap-1">
                  {textStyles.map((style) => (
                    <motion.button
                      key={style.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedTextStyle(style)}
                      className={`rounded-lg px-3 py-2 text-sm ${
                        selectedTextStyle.id === style.id
                          ? 'bg-white text-black'
                          : 'bg-gray-800 text-white'
                      }`}
                    >
                      {style.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Controls */}
            {selectedMedia.type === 'video' && (
              <div>
                <h3 className="mb-2 text-sm font-medium text-white">Video Controls</h3>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => videoRef.current?.play()}
                    className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
                  >
                    Play
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => videoRef.current?.pause()}
                    className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
                  >
                    Pause
                  </motion.button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedMedia(null);
                  setText('');
                }}
                className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
              >
                Discard
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
              >
                Share Story
              </motion.button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 