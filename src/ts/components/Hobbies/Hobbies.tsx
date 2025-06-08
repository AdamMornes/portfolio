import { hobbies } from '@/data/about';

export default function Hobbies() {
  return <div className="flex flex-col gap-4 mb-4">{hobbies.description}</div>;
}
