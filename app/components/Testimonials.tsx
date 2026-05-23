
export default function Testimonials(){

    return(
        <section className="py-24 px-4 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">Lo que dicen</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
              Clientes <span className="text-yellow-400">satisfechos</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Carlos M.", text: "El mejor estudio de tatuajes. Atención impecable y resultados increíbles.", rating: 5 },
              { name: "Laura G.", text: "Mi primer tatuaje y no pude haber elegido mejor lugar. Profesionales de verdad.", rating: 5 },
              { name: "Diego R.", text: "El realismo que hacen es impresionante. Volveré por más.", rating: 5 },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-neutral-800/50 rounded-2xl p-6 border border-orange-600/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-white font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}