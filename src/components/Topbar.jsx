export default function TopBar() {
  return (
    <div className="w-full bg-[#003849] text-white py-2 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            📧 info@example.com
          </span>

          <span className="flex items-center gap-2">
            📍 6391 Elgin St. Celina, 10299
          </span>

          <span className="flex items-center gap-2">
            📞 (629) 555-0129
          </span>
        </div>

        {/* Right (Social) */}
        <div className="flex items-center gap-4 text-white">
          <span>📘</span>
          <span>📸</span>
          <span>📌</span>
          <span>💼</span>
        </div>

      </div>
    </div>
  );
}
