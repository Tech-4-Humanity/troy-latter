
import { PresentationPage } from '../types';
import { dayOnePlan } from './execution/dayOnePlan';
import { ninetyDayPlan } from './execution/ninetyDayPlan';
import { connectPage } from './execution/connectPage';
import { parkingLotPage } from './execution/parkingLotPage';

export const executionPlans: PresentationPage[] = [
  dayOnePlan,
  ninetyDayPlan,
  connectPage,
  parkingLotPage
];
