import { Suspense } from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-accent">Original Bible</h1>
      </header>
      <section className="p-4">
        <h2 className="text-xl mb-4">Versículos em Destaque</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Cards de versículos */}
          <div className="card">
            <p className="text-accent mb-2">João 3:16</p>
            <p>Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.</p>
          </div>
          <div className="card">
            <p className="text-accent mb-2">Salmos 23:1</p>
            <p>O Senhor é o meu pastor; nada me faltará.</p>
          </div>
          <div className="card">
            <p className="text-accent mb-2">Filipenses 4:13</p>
            <p>Tudo posso naquele que me fortalece.</p>
          </div>
        </div>
      </section>
    </main>
  )
}