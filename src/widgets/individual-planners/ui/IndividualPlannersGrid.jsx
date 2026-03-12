import { PlannerCard } from './PlannerCardFolder/PlannerCard';

// Классы с разными задержками (определяются один раз)
const ANIMATION_CLASSES = [
  'animate-[fadeInUp_1s_ease-out_0.1s_both]',
  'animate-[fadeInUp_1s_ease-out_0.2s_both]',
  'animate-[fadeInUp_1s_ease-out_0.3s_both]',
  'animate-[fadeInUp_1s_ease-out_0.4s_both]',
  'animate-[fadeInUp_1s_ease-out_0.5s_both]',
];

export const IndividualPlannersGrid = ({ planners, onOpenDetails }) => (
  <div className="product-catalog__grid grid grid-cols-1 gap-4 md:gap-5 w-full relative z-[1]">
    {planners.map((planner, index) => (
      <div 
        key={planner.id} 
        className={ANIMATION_CLASSES[index % ANIMATION_CLASSES.length]}
      >
        <PlannerCard 
          planner={planner} 
          onOpenDetails={onOpenDetails}
        />
      </div>
    ))}
  </div>
);