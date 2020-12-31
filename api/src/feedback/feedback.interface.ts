export interface Feedback {
  avatar: { webp: string; jpg: string };
  name: string;
  age: string;
  social: {
    link: string;
    text: string;
  };
  text: string;
}
