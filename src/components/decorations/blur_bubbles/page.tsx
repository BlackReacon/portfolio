export default function BlurBubbles() {
  return (
    <>
      <div className="absolute top-0 opacity-50 right-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl"></div>
      <div className="absolute bottom-0 opacity-50 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl"></div>
    </>
  );
}
