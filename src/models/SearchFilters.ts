export interface SearchFilters {
  skillTag?: string[];
  positionTag?: number | null;
  method?: number | null;
  isBeginner: boolean;
  keyword?: string;
  page: number;
}
