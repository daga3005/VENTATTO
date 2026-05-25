interface ContactInfoItem {
  icon: string;
  title: string;
  detail: string;
  subdetail?: string;
}

interface ContactInfoCardProps {
  items: ContactInfoItem[];
}

export function ContactInfoCard({ items }: ContactInfoCardProps) {
  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-600/20">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="text-orange-500">✦</span> Información de contacto
        <span className="text-orange-500">✦</span>
      </h3>

      <div className="space-y-6">
        {items.map((info, idx) => (
          <div key={idx} className="flex items-start gap-4 group">
            <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
              {info.icon}
            </div>
            <div>
              <h4 className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                {info.title}
              </h4>
              <p className="text-white font-medium">{info.detail}</p>
              {info.subdetail && (
                <p className="text-gray-400 text-sm">{info.subdetail}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}