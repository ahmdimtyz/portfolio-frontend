// src/components/HobbiesSection.tsx

const hobbies = [
  { name: "F1 Racing", icon: "🏎️" },
  { name: "LEGO Building", icon: "🧱" },
  { name: "Minecraft", icon: "⛏️" },
  { name: "Kombucha Brewing", icon: "🍹" },
];

export function HobbiesSection() {
  return (
    <section id="hobbies" className="py-12 bg-white rounded-lg shadow">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Hobbies & Interests
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {hobbies.map((h) => (
          <div key={h.name} className="flex flex-col items-center">
            <span className="text-5xl">{h.icon}</span>
            <span className="mt-2 text-gray-700 font-medium">{h.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
