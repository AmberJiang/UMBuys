import { Photo } from './photo';
import { Category } from './category';

export class Item{
  title: string;
  price: string;
  category: Category;
  description?: string;
  photos?: Photo[];
}
