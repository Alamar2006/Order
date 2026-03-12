export function Header() {
  return (
    <header className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto pl-2 lg:pl-4 pr-4 sm:pr-6 lg:pr-8 py-6 lg:py-8 flex items-center justify-between">
        {/* Логотип слева */}
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img 
              src="/assets/logo.png" 
              alt="logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 -ml-4 mb-[3px]">
            LifeTrack
          </span>
        </div>

        {/* Правая часть для будущего меню */}
        <div className="flex items-center gap-6">
          {/* Здесь будет навигация если нужно */}
        </div>
      </div>
    </header>
  );
}