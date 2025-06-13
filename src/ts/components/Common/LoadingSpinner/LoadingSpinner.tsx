import CssIconSpinner, {
  CssIconSpinnerProps,
} from '../CssIcons/CssIconSpinner';

type LoadingSpinnerProps = CssIconSpinnerProps & {
  announce?: boolean;
  loading: boolean;
  srLabel?: string;
};

export default function LoadingSpinner({
  announce = true,
  loading,
  size = 'md',
  srLabel = 'Loading...',
}: LoadingSpinnerProps) {
  return (
    <span
      aria-live={announce ? 'polite' : undefined}
      aria-busy={announce ? loading : undefined}
    >
      {loading && (
        <>
          <span className="sr-only">{srLabel}</span>
          <CssIconSpinner size={size} />
        </>
      )}
    </span>
  );
}
