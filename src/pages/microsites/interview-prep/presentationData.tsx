
import { PresentationPage } from './types';
import { introPages } from './data/introPages';
import { cultureAndMarketPages } from './data/cultureAndMarketPages';
import { strategyPages } from './data/strategyPages';
import { executionPlans } from './data/executionPlans';

export type { PresentationPage } from './types';

export const presentationPages: PresentationPage[] = [
  ...introPages,
  ...cultureAndMarketPages,
  ...strategyPages,
  ...executionPlans
];
