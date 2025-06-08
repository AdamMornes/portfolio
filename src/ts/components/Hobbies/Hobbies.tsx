import { hobbies } from '@/data/about';
import SectionHeader from '../Common/SectionHeader/SectionHeader';
import ContentBlock from '../Common/ContentImageBlock/ContentBlock';

export default function Hobbies() {
  return (
    <section>
      <SectionHeader>{hobbies.heading}</SectionHeader>
      <ContentBlock html={hobbies.description} />
    </section>
  );
}
