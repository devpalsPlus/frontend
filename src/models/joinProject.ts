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
