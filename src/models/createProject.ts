import { z } from 'zod';
import { createProjectScheme } from '../constants/projectConstants';

export type CreateProjectFormValues = z.infer<typeof createProjectScheme>;

export interface FormData {
  title: string;
  description: string;
  totalMember: number;
  startDate: string;
  estimatedPeriod: string;
  methodTypeId: number;
  isBeginner?: boolean;
  recruitmentStartDate: string;
  recruitmentEndDate: string;
  positionTagIds: number[];
  skillTagIds: number[];
  isDone?: boolean;
}
