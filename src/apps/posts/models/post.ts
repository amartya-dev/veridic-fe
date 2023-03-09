export interface Post {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  jetpackFeaturedMediaUrl: string;
  subtitle: string;
}
