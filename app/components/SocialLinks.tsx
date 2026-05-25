interface SocialNetwork {
  name: string;
  url: string;
  icon: string;
  color: string;
}

interface SocialLinksProps {
  socialNetworks: readonly SocialNetwork[];
}

export function SocialLinks({ socialNetworks }: SocialLinksProps) {
  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-600/20">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span>🌐</span> Seguinos en redes
      </h3>
      <div className="flex flex-wrap gap-3">
        {socialNetworks?.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-600/30 text-gray-300 ${social.color} transition-all duration-300 hover:scale-105 hover:border-orange-500`}
          >
            <span>{social.icon}</span>
            <span className="text-sm">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}