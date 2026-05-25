interface InspirationalQuoteProps {
  phrase: string;
  author: string;
}

export function InspirationalQuote({ phrase, author }: InspirationalQuoteProps) {
  return (
    <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-2xl p-6 border border-orange-600/20 text-center">
      <p className="text-orange-400 italic text-lg">{phrase}</p>
      <p className="text-gray-500 text-sm mt-3">— {author}</p>
    </div>
  );
}