export interface SkillTag {
  id: number;
  name: string;
  img: string;
  createdAt: string;
}

export interface PositionTag {
  id: number;
  name: string;
  createdAt: string;
}

export interface MethodTag {
  id: number;
  name: string;
  createdAt: string;
}

export interface SillTagHeader {
  success: boolean;
  message: string;
  data: SkillTag[];
}

export interface PositionTagHeader {
  success: boolean;
  message: string;
  data: PositionTag[];
}

export interface MethodTagHeader {
  success: boolean;
  message: string;
  data: MethodTag[];
}
