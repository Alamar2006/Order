import { memo, useMemo } from 'react';
import { BenefitsCard } from './BenefitsCard';

const GRID_CLASSES = "benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative w-full";

export const BenefitsGrid = memo(({ benefits }) => {
  // Мемоизируем массив карточек
  const cards = useMemo(() => 
    benefits.map((benefit, index) => (
      <BenefitsCard
        key={benefit.id}
        title={benefit.title}
        description={benefit.description}
        iconType={benefit.iconType}
        index={index}
      />
    )),
    [benefits] // Пересоздаем только если benefits изменился
  );

  return <div className={GRID_CLASSES}>{cards}</div>;
});