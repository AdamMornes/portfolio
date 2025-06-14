import { hobbies } from '@/data/about';
import ContentBlock from '../Common/ContentBlock/ContentBlock';
import ContentCodeBlock from '../Common/ContentCodeBlock/ContentCodeBlock';
import { ContentCodeBlockWrapperProps } from '../Common/ContentCodeBlock/types';

export default function Hobbies(props: ContentCodeBlockWrapperProps) {
  return (
    <ContentCodeBlock {...props} heading={hobbies.heading}>
      <ContentBlock html={hobbies.description} />
    </ContentCodeBlock>
  );
}
