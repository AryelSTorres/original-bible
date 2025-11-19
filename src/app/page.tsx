import { Suspense } from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="p-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-accent font-poppins">Original Bible</h1>
          <p className="text-gray-400 mt-2">Sua Bíblia digital premium</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 font-poppins">Versículos em Destaque</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Descubra a Palavra de Deus através de versículos inspiradores selecionados especialmente para você.
          </p>
        </div>
      </section>

      {/* Featured Verses */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-accent transition-colors duration-300">
              <div className="text-accent font-semibold mb-3 text-sm">JOÃO 3:16</div>
              <p className="text-gray-300 leading-relaxed mb-4">
                "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."
              </p>
              <button className="text-accent hover:text-accent/80 text-sm font-medium transition-colors">
                Ler capítulo →
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-accent transition-colors duration-300">
              <div className="text-accent font-semibold mb-3 text-sm">SALMOS 23:1</div>
              <p className="text-gray-300 leading-relaxed mb-4">
                "O Senhor é o meu pastor; nada me faltará."
              </p>
              <button className="text-accent hover:text-accent/80 text-sm font-medium transition-colors">
                Ler capítulo →
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-accent transition-colors duration-300">
              <div className="text-accent font-semibold mb-3 text-sm">FILIPENSES 4:13</div>
              <p className="text-gray-300 leading-relaxed mb-4">
                "Tudo posso naquele que me fortalece."
              </p>
              <button className="text-accent hover:text-accent/80 text-sm font-medium transition-colors">
                Ler capítulo →
              </button>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-accent transition-colors duration-300">
              <div className="text-accent font-semibold mb-3 text-sm">JEREMIAS 29:11</div>
              <p className="text-gray-300 leading-relaxed mb-4">
                "Porque eu bem sei os pensamentos que penso de vós, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais."
              </p>
              <button className="text-accent hover:text-accent/80 text-sm font-medium transition-colors">
                Ler capítulo →
              </button>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-accent transition-colors duration-300">
              <div className="text-accent font-semibold mb-3 text-sm">PROVÉRBIOS 3:5-6</div>
              <p className="text-gray-300 leading-relaxed mb-4">
                "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas."
              </p>
              <button className="text-accent hover:text-accent/80 text-sm font-medium transition-colors">
                Ler capítulo →
              </button>
            </div>

            {/* Card 6 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-accent transition-colors duration-300">
              <div className="text-accent font-semibold mb-3 text-sm">MATEUS 11:28</div>
              <p className="text-gray-300 leading-relaxed mb-4">
                "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei."
              </p>
              <button className="text-accent hover:text-accent/80 text-sm font-medium transition-colors">
                Ler capítulo →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 font-poppins">Comece sua jornada espiritual</h3>
          <p className="text-gray-400 mb-6">Explore livros, capítulos e versículos da Bíblia Sagrada</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
              Explorar Livros
            </button>
            <button className="border border-accent text-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-black transition-colors">
              Buscar Versículos
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}