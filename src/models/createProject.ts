import { z } from 'zod';
import { createProjectScheme } from '../pages/createProject/CreateProject';

export type CreateProjectFormValues = z.infer<typeof createProjectScheme>;

export interface FormData {
  title: string;
  totalMember: number;
  recruitmentStartDate: string;
  recruitmentEndDate: string;
  startDate: string;
  positionTagId: number[];
  estimatedPeriod: string;
  methodId: number;
  isBeginner?: boolean;
  skillTagId: number[];
  description: string;
}
