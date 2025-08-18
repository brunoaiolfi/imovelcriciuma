import React, { useState } from "react";

import videoTour from "../assets/videoTour.mp4";

import qrCode from "../assets/qrCodeContato.jpg";
import externa1 from "../assets/externa1.jpg";
import externa2 from "../assets/externa2.jpg";
import externa3 from "../assets/externa3.jpg";
import externa4 from "../assets/externa4.jpg";
import externa5 from "../assets/externa5.jpg";
import externa6 from "../assets/externa6.jpg";
import externa7 from "../assets/externa7.jpg";

import cozinha1 from "../assets/cozinha1.jpg";
import cozinha2 from "../assets/cozinha2.jpg";
import cozinha3 from "../assets/cozinha3.jpg";
import cozinha4 from "../assets/cozinha4.jpg";

import sala1 from "../assets/sala1.jpg";
import sala2 from "../assets/sala2.jpg";
import sala3 from "../assets/sala3.jpg";
import sala4 from "../assets/sala4.jpg";

import lazer1 from "../assets/lazer1.jpg";
import lazer2 from "../assets/lazer2.jpg";
import lazer3 from "../assets/lazer3.jpg";

import quarto1 from "../assets/quarto1.png";
import quarto2 from "../assets/quarto2.jpg";
import quarto3 from "../assets/quarto3.png";
import quarto4 from "../assets/quarto4.jpg";
import quarto5 from "../assets/quarto5.jpg";
import quarto6 from "../assets/quarto6.jpg";

import quartinho1 from "../assets/quartinho1.png";
import quartinho2 from "../assets/quartinho2.png";
import quartinho3 from "../assets/quartinho3.png";

import demisuite1 from "../assets/demisuite1.jpg";
import demisuite2 from "../assets/demisuite2.jpg";
import demisuite3 from "../assets/demisuite3.jpg";
import demisuite4 from "../assets/demisuite4.jpg";

import suite1 from "../assets/suite1.jpg";
import suite2 from "../assets/suite2.jpg";
import suite3 from "../assets/suite3.jpg";
import suite4 from "../assets/suite4.jpg";
import suite5 from "../assets/suite5.jpg";
import suite6 from "../assets/suite6.jpg";
import suite7 from "../assets/suite7.jpg";
import suite8 from "../assets/suite8.jpg";
import suite9 from "../assets/suite9.jpg";
import suite10 from "../assets/suite10.jpg";

import banheiro1 from "../assets/banheiro1.jpg";
import banheiro2 from "../assets/banheiro2.jpg";
import banheiro3 from "../assets/banheiro3.jpg";

import escritorio1 from "../assets/escritorio1.jpg";
import escritorio2 from "../assets/escritorio2.jpg";
import escritorio3 from "../assets/escritorio3.jpg";
import escritorio4 from "../assets/escritorio4.jpg";

import garagem1 from "../assets/garagem1.jpg";
import garagem2 from "../assets/garagem2.jpg";
import garagem3 from "../assets/garagem3.jpg";
import garagem4 from "../assets/garagem4.jpg";
import garagem5 from "../assets/garagem5.jpg";

import hallgaragem1 from "../assets/hallGaragem1.jpg";
import hallgaragem2 from "../assets/hallGaragem2.jpg";
import hallgaragem3 from "../assets/hallGaragem3.jpg";

import lavanderia from "../assets/lavanderia.jpg";

export default function Index() {
  const [activeTab, setActiveTab] = useState("Tour Virtual");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const tabs = [
    "Tour Virtual",
    "Exteriores",
    "Cozinha",
    "Sala",
    "Área de Lazer",
    "Quartos",
    "Suíte",
    "Banheiro Social",
    "Escritório",
    "Garagem",
    "Lavanderia",
  ];

  const galleryImages = {
    "Tour Virtual": [videoTour],
    "Exteriores": [
      externa1,
      externa2,
      externa3,
      externa4,
      externa5,
      externa6,
      externa7,
    ],
    "Cozinha": [cozinha1, cozinha2, cozinha3, cozinha4],
    "Sala": [sala1, sala2, sala3, sala4],
    "Área de Lazer": [lazer1, lazer2, lazer3],
    "Quartos": [
      quarto1,
      quarto2,
      quarto3,
      quarto4,
      quarto5,
      quarto6,
      quartinho1,
      quartinho2,
      quartinho3,
      demisuite1,
      demisuite2,
      demisuite3,
      demisuite4,
    ],
    "Suíte": [
      suite1,
      suite2,
      suite3,
      suite4,
      suite5,
      suite6,
      suite7,
      suite8,
      suite9,
      suite10
    ],
    "Banheiro Social": [banheiro1, banheiro2, banheiro3],
    "Escritório": [escritorio1, escritorio2, escritorio3, escritorio4],
    "Garagem": [
      garagem1,
      garagem2,
      garagem3,
      garagem4,
      garagem5,
      hallgaragem1,
      hallgaragem2,
      hallgaragem3,
    ],
    "Lavanderia": [lavanderia],
  };

  const handleContactClick = () => {
    setShowContactModal(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 flex justify-end">
        <button
          onClick={handleContactClick}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 sm:px-6 py-2 rounded-md font-medium transition-colors text-sm sm:text-base font-sans"
        >
          Entrar em contato
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {/* Hero Video */}
        <div className="mb-6 sm:mb-8">
          {!videoError ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              preload="metadata"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
              onError={(e) => {
                console.error("Erro ao carregar vídeo:", e);
                setVideoError(true);
              }}
              onLoadStart={() => console.log("Iniciando carregamento do vídeo")}
              onCanPlay={() => console.log("Vídeo pode ser reproduzido")}
            >
              <source src={videoTour} type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
          ) : (
            <img
              src={require("../assets/frente.jpg")} // imagem frontal (pode importar se preferir)
              alt="Vista frontal da residência"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
            />
          )}
        </div>

        {/* Property Description */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-amber-50 rounded-lg p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-title tracking-tight">
              Residência de Alto Padrão com Vista Privilegiada para a Serra - 326 m²
            </h1>

            <p className="text-gray-700 mb-6 leading-relaxed font-sans text-base">
              Localizada em uma região tranquila e segura, esta residência de alto padrão com 326 m² de área construída foi projetada para oferecer sofisticação, conforto e integração com a natureza, a apenas 5 minutos do centro de Criciúma.
            </p>

            <div className="mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 font-title">Características do Imóvel:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">•</span>
                  <span className="font-sans">1 Suíte master com closet amplo e banheira com vista para a Serra</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">•</span>
                  <span className="font-sans">2 Demi-suítes com acesso direto à área da piscina</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">•</span>
                  <span className="font-sans">3 Banheiros no total, incluindo banheiro social</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">•</span>
                  <span className="font-sans">Sala de estar ampla e elegante</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">•</span>
                  <span className="font-sans">Cozinha gourmet integrada com vista para a Serra</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">•</span>
                  <span className="font-sans">Home office reservado</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">•</span>
                  <span className="font-sans">Piscina aquecida com borda infinita e vista panorâmica</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">•</span>
                  <span className="font-sans">Aberturas em PVC para isolamento térmico e acústico</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">•</span>
                  <span className="font-sans">Garagem coberta para 2 carros e 1 moto, mais espaço para 2 veículos adicionais</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">•</span>
                  <span className="font-sans">Sistema de aquecimento a gás</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600">•</span>
                  <span className="font-sans">Infraestrutura preparada para automação residencial e energia solar</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed font-sans text-base">
              Esta residência combina design moderno, acabamentos refinados e localização privilegiada, oferecendo o equilíbrio perfeito entre conforto, segurança e contato com a natureza.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-amber-800 mb-2 font-title">Informações Importantes:</h3>
              <div className="text-sm sm:text-base text-amber-700 space-y-2">
                <p className="font-sans"><strong>Imóvel em construção:</strong> Esta residência está atualmente em fase de construção, com previsão de entrega conforme cronograma da obra.</p>
                <p className="font-sans"><strong>Alterações no projeto:</strong> Reservamo-nos o direito de realizar alterações no projeto, sejam estruturais, estéticas ou de acabamentos, conforme viabilidade técnica ou aprimoramento do padrão construtivo.</p>
                <p className="font-sans"><strong>Entrega:</strong> O imóvel será entregue sem mobiliário e itens de decoração. As imagens utilizadas são referências do potencial do imóvel após finalização e personalização pelo futuro proprietário.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-xl font-semibold text-amber-800 mb-4 sm:mb-6 font-title">Detalhes da propriedade</h2>

          <div className="bg-amber-50 rounded-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-y-6 sm:gap-x-8">
              <div>
                <div className="text-sm text-gray-600 mb-1 font-sans">Área construída</div>
                <div className="font-medium text-gray-900 font-sans">326 m²</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1 font-sans">Área total do terreno</div>
                <div className="font-medium text-gray-900 font-sans">420 m²</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1 font-sans">Suíte master</div>
                <div className="font-medium text-gray-900 font-sans">1</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1 font-sans">Demi-Suítes</div>
                <div className="font-medium text-gray-900 font-sans">2</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1 font-sans">Banheiros</div>
                <div className="font-medium text-gray-900 font-sans">3</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1 font-sans">Espaços na garagem</div>
                <div className="font-medium text-gray-900 font-sans">2</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1 font-sans">Localização</div>
                <div className="font-medium text-gray-900 font-sans">Rua Giovanni Angelo Ortolan, Nº: 65, Santa Catarina</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1 font-sans">Valor do imóvel</div>
                <div className="font-medium text-emerald-700 font-sans">R$ 2.390.000,00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-xl font-semibold text-amber-800 mb-4 sm:mb-6 font-title">Galeria de imagens</h2>

          {/* Gallery Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-6 mb-4 sm:mb-6 border-b overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap font-sans ${activeTab === tab
                    ? "text-amber-700 border-b-2 border-amber-700"
                    : "text-gray-600 hover:text-amber-700"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Gallery Images */}
          {activeTab === "Tour Virtual" ? (
            <div className="w-full">
              <video
                controls
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
                preload="metadata"
              >
                <source src={videoTour} type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4">
              {galleryImages[activeTab as keyof typeof galleryImages]?.map(
                (image, index) => {
                  const hasError = imageErrors.has(image);
                  return (
                    <div key={index} className="aspect-square">
                      {!hasError ? (
                        <img
                          src={image}
                          alt={`${activeTab} ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                          onClick={() => setSelectedImage(image)}
                          onError={(e) => {
                            console.error(`Erro ao carregar imagem: ${image}`);
                            setImageErrors((prev) => new Set(prev).add(image));
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-gray-500 text-sm">
                            Imagem não disponível
                          </span>
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-lg sm:text-xl font-semibold text-amber-800 mb-3 sm:mb-4 font-title">Gostou do que viu?</h2>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto px-4 sm:px-0 font-sans text-base">
            Entre em contato conosco pelo WhatsApp ou escaneie o QR code para mais informações.
          </p>
          <button
            onClick={handleContactClick}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-medium transition-colors inline-flex items-center gap-2 text-sm sm:text-base font-sans"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            WhatsApp
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setShowContactModal(false)}
        >
          <div className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900 font-title">Entre em Contato</h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <img
                  src={qrCode}
                  alt="QR Code para WhatsApp"
                  className="w-48 h-48 mx-auto rounded-lg shadow-lg"
                />
              </div>

              <p className="text-gray-600 mb-4 font-sans text-sm">
                Escaneie o QR code acima ou clique no link abaixo para entrar em contato via WhatsApp
              </p>

              <a
                href="https://wa.me/554891665589"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md font-medium transition-colors text-sm font-sans"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Abrir WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

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
