export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container mt-4">{children}</div>;
}
