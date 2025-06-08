import { hobbies } from '@/data/about';
import ContentBlock from '../Common/ContentImageBlock/ContentBlock';

export default function Hobbies() {
  return <ContentBlock html={hobbies.description} />;
}
