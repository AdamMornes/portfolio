import sharedData from '@/data/shared.json';

export default function FooterCopyright() {
  return (
    <p className="text-sm">
      {sharedData.copyright.replace(
        '${copyright}',
        `${new Date().getFullYear()}`,
      )}
    </p>
  );
}
