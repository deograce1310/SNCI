export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-navy border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="mt-4 text-steel font-inter text-sm">Chargement...</p>
      </div>
    </div>
  );
}
