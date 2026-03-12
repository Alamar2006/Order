export const PlannerModalThumbnails = ({ images, title, activeIndex, onSelect }) => (
    <div className="product-detail__thumbnails flex gap-2 justify-start overflow-x-auto pb-2">
      {images.map((img, idx) => (
        <button
          key={idx}
          className={`product-detail__thumbnail w-16 h-16 min-w-[64px] min-h-[64px] p-0 bg-gray-100 border-2 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden flex-shrink-0 shadow-sm ${
            idx === activeIndex 
              ? 'border-[--accent] border-3 shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.15),0_4px_20px_rgba(var(--accent-rgb),0.3)]' 
              : 'border-[--border] hover:border-[--accent] hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(var(--accent-rgb),0.25),0_0_0_2px_rgba(var(--accent-rgb),0.1)]'
          }`}
          onClick={() => onSelect(idx)}
          aria-label={`${title} изображение ${idx + 1}`}
          aria-current={idx === activeIndex}
        >
          <img 
            src={img} 
            alt={`${title} ${idx + 1}`}
            className="product-detail__thumbnail-image w-full h-full object-contain"
            loading="lazy"
            width="64"
            height="64"
          />
        </button>
      ))}
    </div>
  );