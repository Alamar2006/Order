export function HeroVisual() {
    return (
      <div className="flex items-center justify-center relative w-full min-h-[400px] hero__visual animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
        <div className="relative w-full max-w-[600px] hero__preview-wrapper">
          <div className="w-full rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-300 hero__preview-image animate-[heroImageFadeIn_1.2s_ease-in-out] overflow-hidden">
            <div className="w-full h-full">
              <img 
                src="/assets/hero_picture.avif" 
                alt="Планер для задач, привычек и финансов" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }