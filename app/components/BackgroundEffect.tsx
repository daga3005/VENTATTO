export function BackgroundEffect() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-red-950/30 to-orange-900/20">
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600 rounded-full blur-[100px] opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000" />
    </div>
  );
}