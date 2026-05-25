interface ScheduleItem {
  day: string;
  hours: string;
}

const defaultSchedule: ScheduleItem[] = [
  { day: "Lunes a Viernes", hours: "11:00 - 20:00" },
  { day: "Sábados", hours: "10:00 - 18:00" },
  { day: "Domingos", hours: "Cerrado" },
];

export function ScheduleCard() {
  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-600/20">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span>⏰</span> Horarios de atención
      </h3>
      <div className="space-y-2 text-gray-300">
        {defaultSchedule.map((item, idx) => (
          <div key={idx} className="flex justify-between">
            <span>{item.day}:</span>
            <span className="text-orange-400">{item.hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
}