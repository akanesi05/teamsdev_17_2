export type BlogProps = {
  created_at: string;
  category_id: string;
  title: string;
  content: string;
  image_path: string;
  onChangeTitle: () => void;
}