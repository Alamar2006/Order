import { memo } from 'preact/compat';
import { BundleIncludedList } from './BundleIncludedList';
import { BundlePricing } from './BundlePricing';

export const BundleInfo = memo(({ timer }) => (
  <div className="product-pack__info flex flex-col gap-6 w-full animate-[productPackFadeIn_1s_ease-out_0.3s_both]">
    <BundleIncludedList />
    <BundlePricing timer={timer} />
  </div>
));