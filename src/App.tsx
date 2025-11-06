import {
  Award,
  Camera,
  Guitar,
  Headphones,
  Heart,
  Mic,
  Music,
  Play,
  Sparkles,
  Zap,
} from "lucide-react";
import avatar from "./assets/avatar.jpeg";
import g1four from "./assets/g1x4.png";
import g3x from "./assets/g3x.png";
import g5n from "./assets/g5n.jpg";
import youtubeIcon from "./assets/youtube.svg";
import instagramIcon from "./assets/instagram.svg";
import tiktokIcon from "./assets/tiktok.svg";

const App = () => {
  const whatsappNumber = "557499147163";
  const whatsappMessage = "Olá! Tenho interesse nos timbres para pedaleira.";

  const products = [
    {
      name: "Zoom G3/G3X",
      details:
        "Pedaleira compacta e versátil com processamento de áudio profissional. Ideal para músicos que buscam qualidade em um formato portátil.",
      features: ["Vintage", "Modern", "Fusion", "Jazz"],
      packs: [
        {
          name: "Pack de Timbres Funcionais",
          link: " https://pay.hotmart.com/C93344444A",
        },
      ],
      image: g3x,
    },
    {
      name: "Zoom G1X Four",
      details:
        "A pedaleira mais popular do mercado. Pequena mas poderosa, com múltiplos efeitos e simulações de amplificadores. Perfeita para estúdio e palco.",
      features: ["Rock", "Blues", "Metal", "Clean"],
      packs: [
        {
          name: "Pack Bogner 2.0",
          link: "https://pay.hotmart.com/U79894340I",
        },
        {
          name: "Pack Forró/Sertanejo",
          link: "https://pay.hotmart.com/V99733321S",
        },
        {
          name: "Pack Matchless",
          link: "https://pay.hotmart.com/I99753704G",
        },
        {
          name: "Pack Amps High Gain",
          link: "https://pay.hotmart.com/E99754406S",
        },
        {
          name: "Pack de Timbres funcionais",
          link: "https://pay.hotmart.com/W61995946K",
        },
      ],
      image: g1four,
    },

    {
      name: "Zoom G5N",
      details:
        "Pedaleira topo de linha com qualidade de som excepcional. Oferece processamento avançado e interface intuitiva para músicos profissionais.",
      features: ["Progressive", "Hard Rock", "Pop", "Funk"],
      packs: [
        {
          name: "Pack de Timbres Funcionais",
          link: "https://pay.hotmart.com/D63747081T",
        },
      ],
      image: g5n,
    },
  ];

  const handleWhatsAppClick = (productName: string) => {
    const message = `${whatsappMessage} Interesse no produto: ${productName}`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute left-10 top-10 opacity-10">
            <Guitar className="h-16 w-16" />
          </div>
          <div className="absolute right-20 top-32 opacity-10">
            <Music className="h-12 w-12" />
          </div>
          <div className="absolute bottom-20 left-32 opacity-10">
            <Sparkles className="h-14 w-14" />
          </div>
          <div className="absolute bottom-10 right-10 opacity-10">
            <Mic className="h-16 w-16" />
          </div>
          <div className="absolute left-1/4 top-1/2 opacity-10">
            <Headphones className="h-12 w-12" />
          </div>
        </div>
        <div className="container relative mx-auto px-4 py-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
                Estevão Dourado
              </h1>
              <p className="mb-6 flex items-center justify-center gap-2 text-2xl text-gray-300 md:text-3xl lg:justify-start">
                <Guitar className="h-8 w-8" /> Músico
              </p>
              <p className="mb-8 text-xl text-gray-400">
                Transformando o som da sua guitarra com timbres profissionais e
                exclusivos
              </p>
              <div className="mb-8 grid grid-cols-3 gap-4">
                {/* Row 1: Follower Stats */}
                <div className="flex h-24 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-red-600/20 to-orange-600/20 px-6 py-3 transition-all hover:scale-105 hover:from-red-600/40 hover:to-orange-600/40">
                  <div className="text-3xl font-bold text-red-400">34K+</div>
                  <div className="text-sm text-gray-400">
                    Seguidores YouTube
                  </div>
                </div>
                <div className="flex h-24 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-pink-600/20 to-purple-600/20 px-6 py-3 transition-all hover:scale-105 hover:from-pink-600/40 hover:to-purple-600/40">
                  <div className="text-3xl font-bold text-pink-400">5K+</div>
                  <div className="text-sm text-gray-400">
                    Seguidores Instagram
                  </div>
                </div>
                <div className="flex h-24 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 px-6 py-3 transition-all hover:scale-105 hover:from-purple-600/40 hover:to-pink-600/40">
                  <div className="text-3xl font-bold text-purple-400">5K+</div>
                  <div className="text-sm text-gray-400">Seguidores TikTok</div>
                </div>

                {/* Row 2: Social Buttons */}
                <a
                  href="https://youtube.com/c/EstevãoDourado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-24 flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 font-bold text-white transition-all hover:scale-105 hover:from-red-700 hover:to-orange-700"
                >
                  <img src={youtubeIcon} alt="YouTube" className="h-5 w-5" />
                  YouTube
                </a>
                <a
                  href="https://www.instagram.com/estevaodourado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-24 flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 font-bold text-white transition-all hover:scale-105 hover:from-pink-700 hover:to-purple-700"
                >
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    className="h-5 w-5"
                  />
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@estevaodourado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-24 flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-bold text-white transition-all hover:scale-105 hover:from-purple-700 hover:to-pink-700"
                >
                  <img src={tiktokIcon} alt="TikTok" className="h-5 w-5" />
                  TikTok
                </a>
              </div>
              <button
                onClick={() => handleWhatsAppClick("Todos os produtos")}
                className="transform rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-green-600"
              >
                Fale Conosco no WhatsApp
              </button>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-3xl border-4 border-orange-500/30 shadow-2xl">
                <div className="aspect-square overflow-hidden bg-gray-700">
                  <img
                    src={avatar}
                    alt="Estevão Dourado - Guitarrista Profissional"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-8">
                  <p className="text-lg font-semibold text-white">
                    <Guitar className="mr-2 inline h-5 w-5 text-orange-400" />{" "}
                    Especialista em Timbres para Pedaleiras
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">
            Nossos <span className="text-orange-400">Packs de Timbres</span>
          </h2>

          <div className="flex justify-center">
            <div className="grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm transition-all hover:scale-105 hover:transform hover:border-orange-500"
                >
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-700">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      {product.name}
                    </h3>

                    <p className="mb-4 text-gray-500">{product.details}</p>

                    <div className="mb-6">
                      <h4 className="mb-2 text-xs font-semibold uppercase text-gray-300">
                        Estilos Inclusos:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="rounded-full bg-orange-500/20 px-3 py-1 text-xs text-orange-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Packs Section */}
                    <div className="space-y-3">
                      <h4 className="mb-3 text-xs font-semibold uppercase text-gray-300">
                        Packs Disponíveis:
                      </h4>
                      {product.packs && product.packs.length > 0 ? (
                        <div className="space-y-2">
                          {product.packs.map((pack, idx) => (
                            <a
                              key={idx}
                              href={pack.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full transform rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2 text-center text-sm font-bold text-white transition-all hover:scale-105 hover:from-green-700 hover:to-emerald-700"
                            >
                              {pack.name}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-400">Em breve...</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/10 to-transparent"></div>
        <div className="container relative mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">
            Por que escolher nossos{" "}
            <span className="text-orange-400">Timbres?</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1 - Profissional */}
            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
              <div className="relative h-full rounded-2xl border border-orange-500/30 bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:transform hover:border-orange-400/60">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-full bg-gradient-to-br from-orange-500 to-red-600 p-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Profissional
                </h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Timbres criados por músico profissional com anos de
                  experiência em estúdio e palco
                </p>
                <ul className="space-y-2 text-left text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">✓</span> Qualidade Studio
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">✓</span> Testado ao Vivo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">✓</span> Certificado
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 - Pronto para Usar */}
            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
              <div className="relative h-full rounded-2xl border border-blue-500/30 bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:transform hover:border-blue-400/60">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Pronto para Usar
                </h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Instalação rápida e fácil com suporte completo e documentação
                  detalhada
                </p>
                <ul className="space-y-2 text-left text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Setup em Minutos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Suporte 24/7
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Tutoriais Inclusos
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 - Som Premium */}
            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 to-red-500/20 blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
              <div className="relative h-full rounded-2xl border border-pink-500/30 bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:transform hover:border-pink-400/60">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-full bg-gradient-to-br from-pink-500 to-red-600 p-4">
                    <Music className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Som Premium
                </h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Qualidade de estúdio profissional para suas apresentações e
                  gravações
                </p>
                <ul className="space-y-2 text-left text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400">✓</span> Áudio Hi-Fi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400">✓</span> Múltiplos Estilos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400">✓</span> Customizável
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Pronto para elevar seu <span className="text-orange-400">som?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-400">
            Entre em contato agora mesmo e adquira seus timbres exclusivos!
          </p>
          <button
            onClick={() => handleWhatsAppClick("Consulta geral")}
            className="transform rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-green-600"
          >
            <Zap className="mr-2 inline h-5 w-5" /> Fale Conosco no WhatsApp
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            2025 Estevão Dourado - Todos os direitos reservados
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Desenvolvido com <Heart className="inline h-5 w-5" /> por{" "}
            <span className="font-semibold text-blue-400">SarahCode</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
