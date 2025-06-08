import { copyright } from '@/data/shared';

export default function FooterCopyright() {
  return (
    <p className="text-sm">
      {copyright.replace('${copyright}', `${new Date().getFullYear()}`)}
    </p>
  );
}
