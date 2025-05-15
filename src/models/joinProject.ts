import { z } from 'zod';
import { ApplyScheme } from '../constants/projectConstants';

export type ApplySchemeType = z.infer<typeof ApplyScheme>;

export interface Career {
  name: string;
  periodStart: string;
  periodEnd: string;
  role: string;
}

export interface joinProject {
  email: string;
  phoneNumber: string;
  message?: string;
  career?: Career[];
}
