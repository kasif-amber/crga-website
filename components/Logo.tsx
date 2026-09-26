export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center font-bold">
        C
      </div>

      <div>
        <h1 className="font-bold text-xl">CRGA</h1>
        <p className="text-xs text-gray-500">
          Card Grading & Authentication
        </p>
      </div>
    </div>
  );
}