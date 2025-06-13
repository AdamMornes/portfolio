import CssIconSpinner, {
  CssIconSpinnerProps,
} from '../CssIcons/CssIconSpinner';

type LoadingSpinnerProps = CssIconSpinnerProps & {
  loading: boolean;
  srLabel?: string;
};

export default function LoadingSpinner({
  loading,
  size = 'md',
  srLabel = 'Loading...',
}: LoadingSpinnerProps) {
  return (
    <span aria-live="polite" aria-busy={loading}>
      {loading && (
        <>
          <span className="sr-only">{srLabel}</span>
          <CssIconSpinner size={size} />
        </>
      )}
    </span>
  );
}
