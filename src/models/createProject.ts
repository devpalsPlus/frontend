import { z } from 'zod';
import { createProjectScheme } from '../pages/createProject/CreateProject';

export type CreateProjectFormValues = z.infer<typeof createProjectScheme>;

export interface FormData {
  title: string;
  description: string;
  totalMember: number;
  startDate: string;
  estimatedPeriod: string;
  methodType: number;
  isBeginner?: boolean;
  recruitmentStartDate: string;
  recruitmentEndDate: string;
  authorId: number;
  positionTagIds: number[];
  skillTagIds: number[];
}
