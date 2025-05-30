type ClassNameArrayItem = string | undefined;

export default function classNameJoin(
  classNameArray: ClassNameArrayItem[],
): string {
  return classNameArray
    .filter((className) => Boolean(className))
    .map((className) => className?.trim())
    .join(' ');
}
