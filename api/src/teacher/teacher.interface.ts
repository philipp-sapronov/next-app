export interface Teacher {
  avatar: {
    webp: string;
    jpg: string;
  };
  name: string;
  socials: string[];
  options: Array<{
    additional?: boolean;
    text: string | string[];
    title: string;
  }>;
}
