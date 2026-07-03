import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { stories } from '@/data/stories'
import { ArrowLeft, MessageCircleHeart } from 'lucide-react'
import { ComponentType } from 'react'

export const Route = createFileRoute('/stories/$storyId')({
  loader: ({ params }) => {
    const story = stories.find((s) => s.id === params.storyId)
    if (!story) {
      throw notFound()
    }
    return { story }
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.story.title} | జీవన బంధం` },
      { name: 'description', content: loaderData.story.quote },
    ],
  }),
  component: StoryComponent,
})

function StoryComponent() {
  const { story } = Route.useLoaderData()

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Simple Header */}
      <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-brand-warm/20">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="p-2 -ml-2 rounded-full hover:bg-brand-warm/10 transition-colors text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-5" />
          </Link>
          <span className="font-display font-semibold text-lg text-brand-primary">
            కార్టూన్ ఎమోషన్ స్టోర్
          </span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <article>
          <div className="text-center mb-10">
            <span className="text-6xl drop-shadow-md mb-6 inline-block">{story.emoji}</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
              {story.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground italic font-medium">
              {story.quote}
            </p>
          </div>

          <div className="rounded-[2rem] overflow-hidden shadow-warm mb-12 border-4 border-brand-warm/20">
            <img
              src={story.img}
              alt={story.title}
              className="w-full h-auto object-cover aspect-video"
            />
          </div>

          <div className="prose prose-lg prose-stone dark:prose-invert max-w-none mb-12 prose-p:leading-relaxed prose-headings:font-display">
            {story.fullStory}
          </div>

          <div className="bg-brand-warm/10 rounded-3xl p-8 text-center border border-brand-warm/20">
            <h3 className="font-display text-xl font-bold mb-3">మీరు కూడా ఇలాంటి పరిస్థితిలో ఉన్నారా?</h3>
            <p className="text-muted-foreground mb-6">
              మాతో మాట్లాడండి. మేము వింటాము. ఎవరికీ తెలియకుండా కౌన్సెలింగ్ పొందండి.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-primary text-primary-foreground px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 shadow-warm hover:scale-105 transition-transform">
                <MessageCircleHeart className="size-5" />
                అజ్ఞాతంగా మాట్లాడండి
              </button>
              <Link
                to="/"
                className="px-6 py-3 rounded-full font-bold border-2 border-brand-warm/30 hover:bg-brand-warm/10 transition-colors"
              >
                మరిన్ని కథలు చూడండి
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
