export interface ItemProps {
  id: string | number
  image: string;
  section: "Front-end" | "Back-end";
  period: number;
  likes: number;
  title: string;
  hrefText?: string;
  href?: string;
  article: string;
  subtitle?: string;
  subarticle?: string;
  time: number;
}