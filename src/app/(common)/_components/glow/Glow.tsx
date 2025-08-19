export default function Glow() {
  return (
    <>
      <div className="fixed -bottom-1/4 -right-0 -z-10">
        <div className="h-96 w-96 bg-gradient-to-r from-pink-600 to-indigo-400 rotate-90 rounded-full blur-[180px] opacity-20 animate-glow-slow" />
      </div>
      <div className="fixed -top-1/4 -left-0 -z-10">
        <div className="h-96 w-96 bg-gradient-to-r from-purple-600 to-blue-400 rotate-45 rounded-full blur-[180px] opacity-20 animate-glow-slow" />
      </div>
    </>
  );
}
