import { useState } from "react";

export default function Index() {
  const [activeTab, setActiveTab] = useState("Quartos");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const tabs = ["Quartos", "Salas de estar", "Cozinhas", "Banheiros", "Escritórios", "Áreas de lazer", "Exteriores"];

  const galleryImages = {
    "Quartos": [
      "/client/assets/quarto1.png",
      "/client/assets/quarto2.jpg",
      "/client/assets/quarto3.jpg",
      "/client/assets/quarto4.png",
      "/client/assets/quarto5.png",
      "/client/assets/quarto6.png",
      "/client/assets/quarto7.png"
    ],
    "Salas de estar": [
      "/client/assets/sala1.jpg",
      "/client/assets/sala2.jpg",
      "/client/assets/sala3.jpg",
      "/client/assets/sala4.jpg"
    ],
    "Cozinhas": [
      "/client/assets/cozinha1.jpg",
      "/client/assets/cozinha2.jpg",
      "/client/assets/cozinha3.jpg",
      "/client/assets/cozinha4.jpg"
    ],
    "Banheiros": [
      "/client/assets/banheiro1.jpg",
      "/client/assets/banheiro2.jpg",
      "/client/assets/banheiro3.jpg",
      "/client/assets/banheirosocial1.jpg",
      "/client/assets/banheirosocial2.jpg",
      "/client/assets/banheirosocial3.jpg"
    ],
    "Escritórios": [
      "/client/assets/escritorio.jpg",
      "/client/assets/escritorio2.jpg",
      "/client/assets/escritorio3.jpg",
      "/client/assets/escritorio4.jpg",
      "/client/assets/escritorio5.jpg"
    ],
    "Áreas de lazer": [
      "/client/assets/areadelazer1.jpg",
      "/client/assets/areadelazer2.jpg",
      "/client/assets/piscina.jpg"
    ],
    "Exteriores": [
      "/client/assets/frente.jpg",
      "/client/assets/frente1.jpg",
      "/client/assets/frente2.jpg",
      "/client/assets/frente3.jpg",
      "/client/assets/frente4.jpg",
      "/client/assets/fundos1.jpg",
      "/client/assets/terreno.jpg",
      "/client/assets/terreno2.jpg",
      "/client/assets/terreno3.jpg"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 flex justify-end">
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 sm:px-6 py-2 rounded-md font-medium transition-colors text-sm sm:text-base">
          Entrar em contato
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {/* Hero Image */}
        <div className="mb-6 sm:mb-8">
          <img
            src={"/client/assets/frente.jpg"}
            alt="Modern house exterior"
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
          />
        </div>

        {/* Property Description */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              🏡 Residência de Alto Padrão com Vista Privilegiada para a Serra – 326 m² de puro conforto!
            </h1>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Localizada em uma região calma, segura e silenciosa, esta casa de alto padrão com 326 m² de área construída foi cuidadosamente planejada para oferecer sofisticação, conforto e integração com a natureza — tudo isso a apenas 5 minutos do centro de Criciúma.
            </p>

            <div className="mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Destaques do imóvel:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">🛏️</span>
                  <span>1 Suíte master com amplo closet e banheira com vista para a Serra</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">🚪</span>
                  <span>2 Demi-suítes com acesso direto à área da piscina</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">🚿</span>
                  <span>3 Banheiros no total, incluindo um banheiro social</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">🛋️</span>
                  <span>Sala de estar ampla e elegante, ideal para receber com estilo</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">🍽️</span>
                  <span>Cozinha com espaço gourmet integrada, também com vista para a Serra</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">💼</span>
                  <span>Home office reservado, perfeito para quem trabalha de casa</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">🌊</span>
                  <span>Piscina aquecida com borda infinita e visão panorâmica da Serra</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">🪟</span>
                  <span>Aberturas em PVC, garantindo isolamento térmico e acústico</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">🚗</span>
                  <span>Garagem coberta para 2 carros e 1 moto, mais espaço externo para 2 veículos adicionais</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">🔥</span>
                  <span>Sistema de aquecimento a gás</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">⚙️</span>
                  <span>Infraestrutura pronta para automação residencial e espera para energia solar</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              ✨ Esta residência une design moderno, acabamentos refinados e uma localização privilegiada, sendo a escolha ideal para quem busca viver com conforto, segurança e uma paisagem inspiradora todos os dias.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-amber-800 mb-2">Informações Importantes:</h3>
              <div className="text-sm sm:text-base text-amber-700 space-y-2">
                <p><strong>Imóvel em fase de construção</strong> - Esta residência está atualmente em construção, com previsão de entrega conforme cronograma da obra.</p>
                <p><strong>Alterações no projeto:</strong> Nos reservamos o direito de realizar alterações no projeto, sejam elas estruturais, estéticas ou de acabamentos, sem aviso prévio, de acordo com a viabilidade técnica ou aprimoramento do padrão construtivo.</p>
                <p><strong>Entrega:</strong> O imóvel será entregue sem mobiliário e itens de decoração. As imagens utilizadas nos materiais de divulgação são referências do potencial do imóvel após finalização e personalização pelo futuro proprietário — que poderá transformar esse espaço em um verdadeiro lar, com seu estilo e personalidade.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Detalhes da propriedade</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-y-6 sm:gap-x-8">
            <div>
              <div className="text-sm text-gray-600 mb-1">Área total</div>
              <div className="font-medium text-gray-900">326 m²</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Demi-Suítes</div>
              <div className="font-medium text-gray-900">2</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Suítes master</div>
              <div className="font-medium text-gray-900">1</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Banheiros</div>
              <div className="font-medium text-gray-900">3</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Espaços na garagem</div>
              <div className="font-medium text-gray-900">3</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Localização</div>
              <div className="font-medium text-gray-900">Visconde de cairu, 56</div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Galeria de imagens</h2>
          
          {/* Gallery Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-6 mb-4 sm:mb-6 border-b overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Gallery Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4">
            {galleryImages[activeTab as keyof typeof galleryImages]?.map((image, index) => (
              <div key={index} className="aspect-square">
                <img
                  src={image}
                  alt={`${activeTab} ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Gostou do que viu?</h2>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto px-4 sm:px-0">
            Entre em contato conosco pelo WhatsApp ou escaneie o QR code para mais informações.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-medium transition-colors inline-flex items-center gap-2 text-sm sm:text-base">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            WhatsApp
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black bg-opacity-50 rounded-full p-1 sm:p-2 hover:bg-opacity-75 transition-opacity z-10"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="w-full h-auto max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
