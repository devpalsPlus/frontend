export interface Career {
  name: string;
  periodStart: string;
  periodEnd: string;
  role: string;
}

export interface Position {
  id: number;
  name: string;
}

export interface Skill {
  skillName: string;
  skillImg: string;
}

export interface MyInfo {
  id: number;
  nickname: string;
  email: string;
  bio: string | null;
  profileImg: string | null;
  userLevel: string;
  github: string | null;
  career: Career[] | null;
  positionTag: Position | null;
  skills: Skill[];
  createdAt: string;
}

export interface EditMyInfo {
  nickname: string;
  bio?: string | null;
  github?: string | null;
  positionTagId: number;
  skillTagIds: number[];
  career?: Career[] | null;
}
