import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Heart, Phone, ShieldCheck, Sparkles, MessageCircleHeart } from 'lucide-react'

export const Route = createFileRoute('/support')({
  head: () => ({
    meta: [
      { title: 'మేము మీకు తోడుగా ఉన్నాము | జీవన బంధం (Family & Suicide Support)' },
      { name: 'description', content: 'ఒక్క సమస్య కోసం మీ జీవితాన్ని ముగించాలని నిర్ణయించుకోకండి. మీరు ఒంటరివారు కాదు. ఎమర్జెన్సీ హెల్ప్‌లైన్, ఆత్మహత్య నివారణ మరియు ఉచిత కౌన్సెలింగ్ మీకు అందుబాటులో ఉంది.' },
      { name: 'keywords', content: 'suicide helpline Telugu, emotional support Telugu, mental health crisis Telugu, depression help Telugu, domestic violence help Telugu, free counseling Telugu' },
      { property: 'og:title', content: 'మేము మీకు తోడుగా ఉన్నాము | మీరు ఒంటరివారు కాదు' },
      { property: 'og:description', content: 'మీ సమస్య ఎంత పెద్దదైనా పరిష్కారం ఉంటుంది. మాట్లాడండి. మా నిపుణులు మీకు సహాయం చేయడానికి సిద్ధంగా ఉన్నారు.' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'సహాయం తీసుకోండి | జీవన బంధం' },
      { name: 'twitter:description', content: 'మీ జీవితం చాలా విలువైనది. ఎమర్జెన్సీ సహాయం కోసం ఇక్కడ క్లిక్ చేయండి.' },
    ],
  }),
  component: SupportComponent,
})

function SupportComponent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-brand-warm/20">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="p-2 -ml-2 rounded-full hover:bg-brand-warm/10 transition-colors text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-5" />
          </Link>
          <span className="font-display font-semibold text-lg text-brand-primary">
            సహాయ కేంద్రం
          </span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <article className="prose prose-lg prose-stone dark:prose-invert max-w-none prose-p:leading-relaxed">
          
          <div className="text-center mb-16">
            <span className="inline-block p-4 bg-red-50 dark:bg-red-950/30 rounded-full text-red-500 mb-6 animate-pulse">
              <Heart className="size-16" fill="currentColor" />
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground leading-tight">
              మీరు ఒంటరివారు కాదు...
            </h1>
            <p className="text-2xl text-brand-primary italic font-medium">
              "ఒక్క సమస్య కోసం... మీ జీవితాన్ని ముగించాలని నిర్ణయించుకోకండి."
            </p>
          </div>

          <div className="text-center mb-12">
            <p className="text-xl font-semibold mb-2">ఈ రోజు మీకు కనిపిస్తున్న సమస్య ఎంత పెద్దదైనా...</p>
            <p className="text-2xl font-bold text-brand-primary mb-6">మీ జీవితం దానికంటే ఎంతో విలువైనది.</p>
            <p className="text-muted-foreground">కొన్ని క్షణాల బాధ, కోపం లేదా నిరాశలో తీసుకునే ఒక నిర్ణయం...<br/>మీ కుటుంబం జీవితాంతం మోయాల్సిన బాధగా మారవచ్చు.</p>
          </div>

          <section className="bg-brand-warm/10 p-8 rounded-3xl border border-brand-warm/20 mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 mt-0">
              <span>👨‍👩‍👧</span> మీ గురించి ఆలోచించే వారు ఉన్నారు...
            </h2>
            <p className="font-semibold text-lg">ఒక్క క్షణం ఆలోచించండి...</p>
            <ul className="grid grid-cols-2 gap-4 list-none pl-0 my-8 text-lg font-medium">
              <li className="flex items-center gap-2">👩 మీ అమ్మ...</li>
              <li className="flex items-center gap-2">👨 మీ నాన్న...</li>
              <li className="flex items-center gap-2">💍 మీ జీవిత భాగస్వామి...</li>
              <li className="flex items-center gap-2">👧 మీ పిల్లలు...</li>
              <li className="flex items-center gap-2">👵 మీ కుటుంబ సభ్యులు...</li>
              <li className="flex items-center gap-2">👫 మీ స్నేహితులు...</li>
            </ul>
            <p className="text-xl font-bold text-center mb-4">మీరు లేకుండా వారి జీవితం ఎలా ఉంటుంది?</p>
            <p className="text-center text-muted-foreground">
              మీరు అనుభవిస్తున్న బాధ వారికి కనిపించకపోవచ్చు.<br/>
              కానీ మీరు లేకపోవడం వల్ల కలిగే బాధ మాత్రం జీవితాంతం వారిని వెంటాడుతుంది.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span>🧒</span> మీ పిల్లల కోసం...
            </h2>
            <p>మీ చిన్నారి మిమ్మల్ని తన ప్రపంచంగా చూస్తుంది. వారికి మీరు...</p>
            <ul className="space-y-2 list-none pl-4 border-l-4 border-brand-primary py-2 my-6">
              <li className="flex items-center gap-2">❤️ ఒక తల్లి/తండ్రి మాత్రమే కాదు...</li>
              <li className="flex items-center gap-2">🌈 ఒక ఆశ...</li>
              <li className="flex items-center gap-2">🏡 ఒక భద్రత...</li>
              <li className="flex items-center gap-2">🤗 ఒక ప్రేమ...</li>
            </ul>
            <p className="text-xl font-bold text-brand-primary">మీరు లేని లోటును ఎవరూ భర్తీ చేయలేరు.</p>
            <p>మీ పిల్లలకు మీ సమయం, మీ ప్రేమ, మీ ఉనికి... ఇవే జీవితంలో అత్యంత విలువైన బహుమతులు.</p>
          </section>

          <section className="bg-card shadow-soft p-8 rounded-3xl border border-border mb-12 text-center">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2 mt-0">
              <span>💔</span> ప్రతి సమస్యకు ముగింపు ఉంటుంది...
            </h2>
            <p className="text-xl font-bold my-6">కానీ... జీవితానికి ముగింపు పరిష్కారం కాదు.</p>
            <p className="text-muted-foreground mb-8">ఈ రోజు అసాధ్యంగా అనిపిస్తున్న సమస్య... కొన్ని రోజులు, కొన్ని వారాలు లేదా కొన్ని నెలల తర్వాత పూర్తిగా మారిపోవచ్చు.</p>
            
            <div className="flex flex-wrap justify-center gap-3 font-semibold text-lg text-brand-primary">
              <span className="bg-brand-warm/15 px-4 py-2 rounded-full">సమయం మారుతుంది</span>
              <span className="bg-brand-warm/15 px-4 py-2 rounded-full">పరిస్థితులు మారుతాయి</span>
              <span className="bg-brand-warm/15 px-4 py-2 rounded-full">మనుషులు మారుతారు</span>
              <span className="bg-brand-warm/15 px-4 py-2 rounded-full">సహాయం లభిస్తుంది</span>
              <span className="bg-brand-warm/15 px-4 py-2 rounded-full text-green-600 dark:text-green-400">ఆశ మళ్లీ వస్తుంది</span>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span>🌿</span> సహాయం అడగడం బలహీనత కాదు
            </h2>
            <p>మీకు భరించలేనంత బాధగా ఉంటే... దయచేసి మౌనంగా ఉండకండి.</p>
            <ul className="space-y-2 font-medium">
              <li>✓ మీరు నమ్మే వ్యక్తితో మాట్లాడండి.</li>
              <li>✓ మీ కుటుంబ సభ్యులతో మాట్లాడండి.</li>
              <li>✓ స్నేహితుడితో మాట్లాడండి.</li>
              <li>✓ అర్హత కలిగిన మానసిక ఆరోగ్య నిపుణుడు లేదా కౌన్సెలర్‌ను సంప్రదించండి.</li>
            </ul>
            <p className="text-xl italic font-bold text-center mt-6">ఒక్క సంభాషణ కూడా జీవితాన్ని మార్చగలదు.</p>
          </section>

          <section className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold flex items-center justify-center gap-2">
              <span>❤️</span> మీ జీవితం అమూల్యం
            </h2>
            <p className="text-xl mt-4">మీ కథ ఇంకా పూర్తికాలేదు.</p>
            <p className="text-muted-foreground my-4">ఈ రోజు మీరు ఏడుస్తున్నా... రేపు మీరు నవ్వే రోజు రావచ్చు.<br/>మీరు ఊహించని మంచి రోజులు ఇంకా మీ ముందే ఉండవచ్చు.</p>
            <p className="text-xl font-bold text-brand-primary">దయచేసి ఆ అవకాశాన్ని మీకు మీరు ఇవ్వండి.</p>
          </section>

          <div className="bg-brand-ink text-stone-200 p-8 rounded-3xl mb-12">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 mt-0">
              <span>🌸</span> కుటుంబాలకు ఒక సందేశం
            </h3>
            <p>కొన్నిసార్లు మనకు బలంగా కనిపించే వ్యక్తే లోపల తీవ్ర బాధను మోస్తూ ఉండవచ్చు. వారిని అడగండి:</p>
            <blockquote className="border-l-4 border-brand-warm pl-4 text-2xl font-bold text-white my-6 py-2">
              "నువ్వు ఎలా ఉన్నావు?"
            </blockquote>
            <p>వారి మాటలను వినండి. వారిని ఒంటరిగా వదిలేయకండి.</p>
            <p className="text-brand-warm font-medium">ప్రేమ, ఆదరణ, సహనం... ఇవి చాలా సందర్భాల్లో ఒక జీవితాన్ని కాపాడగలవు.</p>
          </div>

          <div className="bg-brand-cream dark:bg-brand-warm/5 p-8 rounded-3xl text-center border-2 border-brand-warm/30 shadow-warm">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2 mt-0 mb-6">
              <span>🕊️</span> మేము మీకు తోడుగా ఉంటాము
            </h2>
            <p className="text-xl font-bold mb-6">మీరు ఒంటరివారు కాదు.</p>
            <ul className="list-none pl-0 space-y-3 font-medium text-lg text-left max-w-sm mx-auto mb-8">
              <li className="flex items-center gap-3"><span className="text-blue-500">💙</span> మేము వింటాము.</li>
              <li className="flex items-center gap-3"><span className="text-blue-500">💙</span> మేము అర్థం చేసుకోవడానికి ప్రయత్నిస్తాము.</li>
              <li className="flex items-center gap-3"><span className="text-blue-500">💙</span> మేము తీర్పు ఇవ్వము.</li>
              <li className="flex items-center gap-3"><span className="text-blue-500">💙</span> గోప్యతతో మీకు తోడుగా ఉంటాము.</li>
            </ul>
            <p className="text-xl font-bold mb-8">ఒక్క అడుగు వేయండి... మాట్లాడండి. సహాయం కోరడం ధైర్యానికి నిదర్శనం.</p>

            <div className="space-y-4">
              <a href="tel:9820466726" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-warm animate-heartbeat">
                <Phone className="size-5" />
                ❤️ ఈరోజే మాట్లాడండి
              </a>
              <div className="text-sm font-medium text-muted-foreground flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
                <span className="flex items-center gap-1"><MessageCircleHeart className="size-4" /> అజ్ఞాతంగా మాట్లాడండి</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1"><Heart className="size-4" /> ఉచితంగా సహాయం పొందండి</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1"><Sparkles className="size-4" /> మీ జీవితానికి మరో అవకాశం ఇవ్వండి</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-muted/50 rounded-xl text-sm text-muted-foreground leading-relaxed border border-border">
            <strong>గమనిక:</strong> ఒకవేళ మీకు లేదా మీకు తెలిసిన ఎవరికైనా ప్రస్తుతం తమను తాము హానిచేసుకోవాలనే ఆలోచనలు వస్తున్నట్లయితే, వెంటనే నమ్మకమైన కుటుంబ సభ్యుడు, స్నేహితుడు లేదా సమీపంలోని అత్యవసర వైద్య సేవలను సంప్రదించండి. మీరు ఈ బాధను ఒంటరిగా ఎదుర్కోవాల్సిన అవసరం లేదు—సహాయం అందుబాటులో ఉంది. ❤️
          </div>
          
        </article>
      </main>
    </div>
  )
}
