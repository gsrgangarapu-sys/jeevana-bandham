import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ShieldAlert, HeartCrack, Baby, Home, BookOpen, AlertCircle, Phone, CheckCircle2, MessageCircleHeart, Info, HelpCircle } from 'lucide-react'

export const Route = createFileRoute('/child-protection')({
  head: () => ({
    meta: [
      { title: 'పిల్లల రక్షణ – నిర్ణయ సాధనం (పూర్తి విస్తరణ) | జీవన బంధం' },
      { name: 'description', content: 'తల్లిదండ్రులు తీసుకునే ప్రతి నిర్ణయం పిల్లల జీవితంలో ఒక మలుపు. విడాకులు, కుటుంబ సమస్యల వల్ల పిల్లలు ఎదుర్కొనే మానసిక వేదన మరియు తీసుకోవాల్సిన జాగ్రత్తలు.' },
      { name: 'keywords', content: 'child protection Telugu, divorce impact on children Telugu, parenting tips Telugu, child psychology Telugu, saving marriage for kids' },
      { property: 'og:title', content: 'పిల్లల రక్షణ – నిర్ణయ సాధనం' },
      { property: 'og:description', content: 'ఒక్క నిర్ణయం... ఒక జీవితాన్ని మార్చేస్తుంది. మీ నిర్ణయానికి ముందు పిల్లల మనసును అర్థం చేసుకోండి.' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: ChildProtectionComponent,
})

function ChildProtectionComponent() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20 selection:bg-brand-warm/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-brand-warm/20">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="p-2 -ml-2 rounded-full hover:bg-brand-warm/10 transition-colors text-brand-primary"
            aria-label="Back to home"
          >
            <ArrowLeft className="size-5" />
          </Link>
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-bold font-display text-brand-primary flex items-center gap-2">
              <Baby className="size-6 text-[#00BCD4]" />
              పిల్లల రక్షణ – నిర్ణయ సాధనం (పూర్తి విస్తరణ)
            </h1>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-10">
        
        {/* Intro */}
        <div className="mb-10 text-lg leading-relaxed text-muted-foreground bg-brand-warm/5 p-6 rounded-2xl border border-brand-warm/20">
          <p>
            మీరు చాలా ముఖ్యమైన విషయాన్ని లేవనెత్తారు. ఒక తల్లిదండ్రుల నిర్ణయం పిల్లల జీవితాన్ని ఎలా మార్చేస్తుందో — దాని గురించి మరింత వివరంగా, సున్నితంగా, మరియు హృదయపూర్వకంగా ఇక్కడ వివరిస్తున్నాను.
          </p>
        </div>

        {/* Hero Alert */}
        <div className="bg-[#E0F7FA]/40 border-l-8 border-[#FF9800] p-6 md:p-8 rounded-2xl mb-12 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <ShieldAlert className="size-32 text-[#FF9800]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#006064] mb-4 flex items-center gap-3 relative z-10">
            <ShieldAlert className="size-8 text-[#FF9800]" />
            "ఒక్క నిర్ణయం... ఒక జీవితాన్ని మార్చేస్తుంది"
          </h2>
          <p className="text-lg md:text-xl text-[#00838F] font-medium leading-relaxed relative z-10">
            "తల్లిదండ్రులు తీసుకునే ప్రతి నిర్ణయం... పిల్లల జీవితంలో ఒక మలుపు. ఆ మలుపు సరైనదేనా అని ఆలోచించండి."
          </p>
        </div>

        {/* What happens in child's mind */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <HeartCrack className="size-12 text-[#E91E63] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">💔 పిల్లల మనసులో ఏం జరుగుతుంది?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              తల్లిదండ్రులు విడిపోవడం, విడాకులు, లేదా ఎవరైనా ఒకరు దూరంగా వెళ్లిపోవడం — ఇవన్నీ పిల్లల మనసుపై తీవ్రమైన ప్రభావం చూపుతాయి.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-3xl">😢</span> పిల్లలు ఏమి అనుభవిస్తారు?
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
            {[
              { e: '😰', title: 'భయం', desc: 'నేను ఎవరితో ఉండాలి? నా సంరక్షణ ఎవరు చేస్తారు?' },
              { e: '😔', title: 'ఒంటరితనం', desc: 'అమ్మ లేదా నాన్న లేకుండా నేను ఎలా?' },
              { e: '😢', title: 'విచారం', desc: 'నా కుటుంబం ఇలా ఎందుకు మారింది?' },
              { e: '🤔', title: 'గందరగోళం', desc: 'ఇదంతా నా వల్లనేనా?' },
              { e: '😤', title: 'కోపం', desc: 'వాళ్లు నన్ను ఎందుకు వదిలేశారు?' },
              { e: '😞', title: 'ఆత్మవిశ్వాసం తగ్గడం', desc: 'నేను సరిపోనా?' },
              { e: '😴', title: 'నిద్రలేమి', desc: 'రాత్రిళ్లు ఏడుపు, భయం, ఆందోళన' },
              { e: '📚', title: 'చదువులో వెనుకబాటు', desc: 'చదువుపై దృష్టి పోతుంది' },
              { e: '🤐', title: 'మౌనం', desc: 'నా బాధను ఎవరితో చెప్పాలో తెలియదు' },
              { e: '💔', title: 'సంబంధాల భయం', desc: 'పెద్దయ్యాక కూడా ప్రేమ, పెళ్లి పట్ల భయం' },
            ].map((item, idx) => (
              <div key={idx} className="bg-card p-5 rounded-xl border-2 border-brand-warm/10 hover:border-brand-primary/40 hover:shadow-warm transition-all flex items-start gap-4">
                <div className="text-3xl bg-brand-warm/10 p-3 rounded-full shrink-0">{item.e}</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Daily Life Changes */}
        <section className="mb-16 bg-brand-warm/5 p-6 md:p-10 rounded-[2rem] border border-brand-warm/20 shadow-warm">
          <h2 className="text-3xl font-bold text-brand-primary mb-10 text-center">🍛 రోజువారీ జీవితంలో మార్పులు – పిల్లల దృష్టిలో</h2>

          <div className="space-y-12">
            {/* Food */}
            <div className="bg-card p-6 rounded-2xl shadow-sm border border-brand-warm/10">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-2xl">1. 🍛</span> రోజువారీ భోజనం
              </h3>
              <p className="text-muted-foreground mb-4">ఇంటి వంట vs హాస్టల్ లేదా వేరే వాతావరణం</p>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-[#E8F5E9] p-5 rounded-xl">
                  <h4 className="font-bold text-[#1B5E20] mb-3 text-lg border-b border-[#1B5E20]/20 pb-2">ఇంటి వంట</h4>
                  <ul className="space-y-3 text-sm text-[#2E7D32] font-medium">
                    <li className="flex items-start gap-2"><CheckCircle2 className="size-4 shrink-0 mt-0.5" /> అమ్మ చేతి వంట – ప్రేమతో కూడిన భోజనం</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="size-4 shrink-0 mt-0.5" /> కుటుంబంతో కలిసి భోజనం – సంభాషణలు</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="size-4 shrink-0 mt-0.5" /> ఇష్టమైన వంటకాలు – అమ్మకు తెలుసు</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="size-4 shrink-0 mt-0.5" /> పోషకమైన, స్వచ్ఛమైన ఆహారం</li>
                  </ul>
                </div>
                <div className="bg-[#FFEBEE] p-5 rounded-xl">
                  <h4 className="font-bold text-[#B71C1C] mb-3 text-lg border-b border-[#B71C1C]/20 pb-2">హాస్టల్ / వేరే</h4>
                  <ul className="space-y-3 text-sm text-[#C62828] font-medium">
                    <li className="flex items-start gap-2"><AlertCircle className="size-4 shrink-0 mt-0.5" /> క్యాంటీన్ ఫుడ్ – అమ్మ చేతి వంట మిస్</li>
                    <li className="flex items-start gap-2"><AlertCircle className="size-4 shrink-0 mt-0.5" /> ఒంటరిగా తినడం – మాటలు తక్కువ</li>
                    <li className="flex items-start gap-2"><AlertCircle className="size-4 shrink-0 mt-0.5" /> అందరికీ ఒకే ఫుడ్ – ఇష్టాలు పట్టించరు</li>
                    <li className="flex items-start gap-2"><AlertCircle className="size-4 shrink-0 mt-0.5" /> ఆరోగ్యం పట్ల అజాగ్రత్త</li>
                  </ul>
                </div>
              </div>
              <p className="italic text-muted-foreground bg-brand-warm/10 p-4 rounded-xl border-l-4 border-brand-warm text-lg">
                <span className="font-bold text-foreground mr-2">💬 పిల్లల మాట:</span>
                "అమ్మ వంట మిస్ అవుతున్నాను. అమ్మ చేసిన ఉప్మా కోసం చాలా రోజులుగా ఎదురుచూస్తున్నా..."
              </p>
            </div>

            {/* School */}
            <div className="bg-card p-6 rounded-2xl shadow-sm border border-brand-warm/10">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-2xl">2. 🏫</span> స్కూల్ & ఫ్రెండ్స్
              </h3>
              <p className="text-muted-foreground mb-4">పూర్తిగా మార్పు, కొత్త వాతావరణం</p>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-[#E8F5E9] p-5 rounded-xl">
                  <h4 className="font-bold text-[#1B5E20] mb-3 text-lg border-b border-[#1B5E20]/20 pb-2">పాత స్కూల్</h4>
                  <ul className="space-y-3 text-sm text-[#2E7D32] font-medium">
                    <li className="flex items-start gap-2"><CheckCircle2 className="size-4 shrink-0 mt-0.5" /> పాత స్నేహితులు – సపోర్ట్</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="size-4 shrink-0 mt-0.5" /> పాత టీచర్లు – అర్థం చేసుకుంటారు</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="size-4 shrink-0 mt-0.5" /> అలవాటైన వాతావరణం – భద్రత</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="size-4 shrink-0 mt-0.5" /> సరదాగా సమయం గడుపుతారు</li>
                  </ul>
                </div>
                <div className="bg-[#FFEBEE] p-5 rounded-xl">
                  <h4 className="font-bold text-[#B71C1C] mb-3 text-lg border-b border-[#B71C1C]/20 pb-2">కొత్త స్కూల్</h4>
                  <ul className="space-y-3 text-sm text-[#C62828] font-medium">
                    <li className="flex items-start gap-2"><AlertCircle className="size-4 shrink-0 mt-0.5" /> కొత్తవారు – అపరిచితులు</li>
                    <li className="flex items-start gap-2"><AlertCircle className="size-4 shrink-0 mt-0.5" /> కొత్త టీచర్లు – ఎవరో తెలియదు</li>
                    <li className="flex items-start gap-2"><AlertCircle className="size-4 shrink-0 mt-0.5" /> కొత్త వాతావరణం – భయం, అనిశ్చితి</li>
                    <li className="flex items-start gap-2"><AlertCircle className="size-4 shrink-0 mt-0.5" /> ఒంటరిగా, దిగులుగా ఉంటారు</li>
                  </ul>
                </div>
              </div>
              <p className="italic text-muted-foreground bg-brand-warm/10 p-4 rounded-xl border-l-4 border-brand-warm text-lg">
                <span className="font-bold text-foreground mr-2">💬 పిల్లల మాట:</span>
                "నా బెస్ట్ ఫ్రెండ్ నేను లేకుండా ఎలా ఉంటున్నాడో అని ఆలోచిస్తూ ఉంటాను. కొత్త స్కూల్లో ఎవరూ నాతో మాట్లాడరు."
              </p>
            </div>

            {/* Parents Time */}
            <div className="bg-card p-6 rounded-2xl shadow-sm border border-brand-warm/10">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-2xl">3. 👩‍👧</span> తల్లి/తండ్రి సమయం
              </h3>
              <p className="text-muted-foreground mb-4">ప్రేమ పంచే సమయం తగ్గిపోవడం</p>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-[#E8F5E9] p-5 rounded-xl">
                  <h4 className="font-bold text-[#1B5E20] mb-3 text-lg border-b border-[#1B5E20]/20 pb-2">ఇంతకు ముందు</h4>
                  <ul className="space-y-3 text-sm text-[#2E7D32] font-medium">
                    <li className="flex items-start gap-2"><CheckCircle2 className="size-4 shrink-0 mt-0.5" /> ప్రతి రోజు అమ్మ/నాన్నతో సమయం</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="size-4 shrink-0 mt-0.5" /> అమ్మ చెప్పే కథలు</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="size-4 shrink-0 mt-0.5" /> నాన్నతో ఆటలు</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="size-4 shrink-0 mt-0.5" /> కుటుంబ ట్రిప్స్, సినిమాలు</li>
                  </ul>
                </div>
                <div className="bg-[#FFEBEE] p-5 rounded-xl">
                  <h4 className="font-bold text-[#B71C1C] mb-3 text-lg border-b border-[#B71C1C]/20 pb-2">ఇప్పుడు</h4>
                  <ul className="space-y-3 text-sm text-[#C62828] font-medium">
                    <li className="flex items-start gap-2"><AlertCircle className="size-4 shrink-0 mt-0.5" /> వారంలో ఒకసారి లేదా అంతకంటే తక్కువ</li>
                    <li className="flex items-start gap-2"><AlertCircle className="size-4 shrink-0 mt-0.5" /> అమ్మ లేరు కాబట్టి కథలు లేవు</li>
                    <li className="flex items-start gap-2"><AlertCircle className="size-4 shrink-0 mt-0.5" /> నాన్న దూరం కావడంతో ఆటలు ఆగిపోయాయి</li>
                    <li className="flex items-start gap-2"><AlertCircle className="size-4 shrink-0 mt-0.5" /> అంతా ఆగిపోయింది</li>
                  </ul>
                </div>
              </div>
              <p className="italic text-muted-foreground bg-brand-warm/10 p-4 rounded-xl border-l-4 border-brand-warm text-lg">
                <span className="font-bold text-foreground mr-2">💬 పిల్లల మాట:</span>
                "నాన్న ఎప్పుడు వస్తారో? నాన్న లేకపోతే ఇల్లు ఖాళీగా ఉంది. అమ్మ ఏడుస్తూ ఉంటుంది."
              </p>
            </div>

            {/* Night Crying */}
            <div className="bg-card p-6 rounded-2xl shadow-sm border border-brand-warm/10">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-2xl">4. 😢</span> రాత్రిపూట ఏడుపు
              </h3>
              <p className="text-muted-foreground mb-4">నిశ్శబ్దంగా ఉన్న రాత్రి వేళల్లో భయం, గందరగోళం</p>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-[#FFF3E0] p-5 rounded-xl">
                  <h4 className="font-bold text-[#E65100] mb-3 text-lg border-b border-[#E65100]/20 pb-2">రాత్రి సమయం</h4>
                  <ul className="space-y-3 text-sm text-[#EF6C00] font-medium">
                    <li className="flex items-start gap-2"><span className="text-lg leading-none">😰</span> "నేను ఎవరి దగ్గర ఉండాలి?"</li>
                    <li className="flex items-start gap-2"><span className="text-lg leading-none">😢</span> "వాళ్లు ఎందుకు వెళ్లిపోయారు?"</li>
                  </ul>
                </div>
                <div className="bg-[#FFF3E0] p-5 rounded-xl">
                  <h4 className="font-bold text-[#E65100] mb-3 text-lg border-b border-[#E65100]/20 pb-2">పిల్లల మనసులో</h4>
                  <ul className="space-y-3 text-sm text-[#EF6C00] font-medium">
                    <li className="flex items-start gap-2"><span className="text-lg leading-none">🤔</span> "ఇది నా తప్పేనా?"</li>
                    <li className="flex items-start gap-2"><span className="text-lg leading-none">😴</span> "రేపు ఏమవుతుందో?"</li>
                  </ul>
                </div>
              </div>
              <p className="italic text-muted-foreground bg-brand-warm/10 p-4 rounded-xl border-l-4 border-brand-warm text-lg">
                <span className="font-bold text-foreground mr-2">💬 పిల్లల మాట:</span>
                "రాత్రిపూట చాలా భయంగా ఉంటుంది. అమ్మా నాన్నా లేరు. నేను ఒంటరిని. ఎవరైనా నా దగ్గరకు రారా?"
              </p>
            </div>

          </div>
        </section>

        {/* Missing Elements Grid */}
        <section className="mb-16">
          <div className="bg-brand-primary text-primary-foreground p-8 md:p-12 rounded-[2rem] mb-10 shadow-warm text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">💔 "ఒకరు లేకపోతే... పూర్తి కుటుంబం మారిపోతుంది"</h2>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              "ఇంటిలో ఒక వ్యక్తి లేకపోతే... ఆ వ్యక్తి మాత్రమే కాదు, పూర్తి కుటుంబం మారిపోతుంది. ఆ వ్యక్తి ఖాళీని ఎవరూ భర్తీ చేయలేరు. 
              ప్రతి రోజు ఆ ఖాళీ గుర్తుకు వస్తుంది. ప్రతి క్షణం ఆ వ్యక్తి జ్ఞాపకం వస్తుంది. పిల్లలు ప్రతి రోజు ఆ వ్యక్తిని మిస్ అవుతారు. 
              ఆ వ్యక్తి లేకపోతే... ఆ కుటుంబం పూర్తిగా మారిపోతుంది."
            </p>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-8">😢 పిల్లలు ప్రతిరోజూ ఏమి మిస్ అవుతారు?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {[
              { e: '😊', t: 'ఉదయం వేళ', d: 'అమ్మ/నాన్న నవ్వు, శుభోదయం కిస్' },
              { e: '🍛', t: 'భోజన సమయం', d: 'అమ్మ చేతి వంట, కలిసి తినే సరదా' },
              { e: '📚', t: 'స్కూల్ వెళ్లేటప్పుడు', d: 'నాన్న డ్రాప్ చేయడం, అమ్మ వీడ్కోలు' },
              { e: '🎮', t: 'ఆట సమయం', d: 'నాన్నతో క్రికెట్, అమ్మతో బొమ్మలాట' },
              { e: '📖', t: 'నిద్రపోయే ముందు', d: 'అమ్మ కథలు, నాన్న లాలీలు' },
              { e: '🎉', t: 'పండుగలు', d: 'కుటుంబంగా కలిసి చేసే ఆనందం' },
              { e: '😢', t: 'ఏడుపు సమయం', d: 'అమ్మ ఓదార్పు, నాన్న ధైర్యం' },
              { e: '📞', t: 'ఫోన్ కాల్స్', d: '"అమ్మా, నేను పాస్ అయ్యాను!" అని చెప్పడానికి ఎవరూ లేరు' },
              { e: '🏡', t: 'ఇల్లు', d: 'అమ్మ/నాన్న లేని ఇల్లు ఖాళీగా అనిపిస్తుంది' },
              { e: '❤️', t: 'ప్రేమ', d: 'ఎవరి ప్రేమ కూడా అమ్మ/నాన్న ప్రేమను భర్తీ చేయలేదు' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-card p-5 rounded-2xl border border-brand-warm/20 hover:bg-brand-warm/5 transition-colors">
                <div className="text-3xl bg-white shadow-sm p-3 rounded-xl">{item.e}</div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">{item.t}</h4>
                  <p className="text-sm text-muted-foreground font-medium mt-1">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What children lose */}
        <section className="mb-16 bg-[#FFF8E7]/50 p-8 rounded-[2rem] border border-[#F39C12]/20">
          <h2 className="text-3xl font-bold text-[#D35400] mb-8 text-center">💔 "తల్లిదండ్రుల నిర్ణయం వల్ల... పిల్లలు ఏమి కోల్పోతారు?"</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { i: '1', t: '😢 భద్రత', q: '"అమ్మా నాన్నా లేకపోతే... నా కోసం ఎవరు ఉంటారు? నేను ఎక్కడికి వెళ్లాలి? నా కోసం ఎవరు ఆలోచిస్తారు?"' },
              { i: '2', t: '💔 ప్రేమ', q: '"అమ్మ ప్రేమ, నాన్న ప్రేమ... అది ఎవరూ భర్తీ చేయలేరు. అమ్మ లేకపోతే నాకు ఎవరు చేయి పట్టుకుంటారు?"' },
              { i: '3', t: '📚 విద్య', q: '"నా చదువుకు ఎవరు సహాయం చేస్తారు? నా ట్యూషన్ ఫీజు ఎవరు కడతారు? నా కెరీర్ గురించి ఎవరు ఆలోచిస్తారు?"' },
              { i: '4', t: '🤝 మద్దతు', q: '"నేను కష్టంలో ఉంటే ఎవరు నాకు సహాయం చేస్తారు? నేను ఏడుస్తుంటే ఎవరు నా దగ్గర కూర్చుంటారు?"' },
              { i: '5', t: '😊 చిన్ననాటి ఆనందం', q: '"అమ్మ నవ్వు, నాన్న ఆటలు... అవన్నీ ఇప్పుడు లేవు. నా బాల్యం ఇంకా సంతోషంగా లేదు."' },
              { i: '6', t: '🏠 ఇల్లు', q: '"ఇల్లు అంటే గోడలు కాదు... అది అమ్మ, నాన్న, ఆ నవ్వులు, ఆ ప్రేమ. అమ్మ/నాన్న లేకపోతే అది ఇల్లు కాదు, ఒక భవనం మాత్రమే."' },
              { i: '7', t: '🌟 భవిష్యత్తు', q: '"నా భవిష్యత్తు గురించి ఎవరు ఆలోచిస్తారు? నాకు సరైన మార్గం ఎవరు చూపిస్తారు? నా కలలు నెరవేరడానికి ఎవరు సహాయం చేస్తారు?"' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#E67E22]">
                <h3 className="font-bold text-[#D35400] text-xl mb-3">{item.t}</h3>
                <p className="italic text-[#7E5109] font-medium">{item.q}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Legal decisions impact table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="text-4xl">⚖️</span> చట్టపరమైన నిర్ణయాలు – పిల్లలపై ప్రభావం
          </h2>
          
          <div className="space-y-8">
            {/* Table 1 */}
            <div className="overflow-hidden bg-card rounded-2xl shadow-sm border border-brand-warm/20">
              <div className="bg-[#E1F5FE] p-4 font-bold text-[#0277BD] text-lg flex items-center gap-2">
                🏛️ విడాకులు / విడిపోవడం
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAFAFA] text-muted-foreground border-b border-brand-warm/10">
                      <th className="p-4 font-bold w-1/3">నిర్ణయం</th>
                      <th className="p-4 font-bold">పిల్లలపై ప్రభావం</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-warm/10 text-foreground">
                    <tr className="hover:bg-brand-warm/5">
                      <td className="p-4 font-semibold">అమ్మతో ఉండటం</td>
                      <td className="p-4 font-medium text-muted-foreground">నాన్న మిస్, నాన్న ప్రేమ కోసం ఎదురు</td>
                    </tr>
                    <tr className="hover:bg-brand-warm/5">
                      <td className="p-4 font-semibold">నాన్నతో ఉండటం</td>
                      <td className="p-4 font-medium text-muted-foreground">అమ్మ మిస్, అమ్మ వంట, అమ్మ ఓదార్పు కోసం ఎదురు</td>
                    </tr>
                    <tr className="hover:bg-brand-warm/5">
                      <td className="p-4 font-semibold">ఒకరి దగ్గర ఉండటం</td>
                      <td className="p-4 font-medium text-muted-foreground">మరొకరు దూరం – భావోద్వేగ ఖాళీ</td>
                    </tr>
                    <tr className="hover:bg-brand-warm/5">
                      <td className="p-4 font-semibold text-[#D32F2F]">కస్టడీ కేసులు</td>
                      <td className="p-4 font-medium text-[#D32F2F]">పిల్లల మధ్య గొడవలు, ఒత్తిడి</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2 */}
            <div className="overflow-hidden bg-card rounded-2xl shadow-sm border border-brand-warm/20">
              <div className="bg-[#E8F5E9] p-4 font-bold text-[#2E7D32] text-lg flex items-center gap-2">
                🏫 స్కూల్ మార్పు
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAFAFA] text-muted-foreground border-b border-brand-warm/10">
                      <th className="p-4 font-bold w-1/3">నిర్ణయం</th>
                      <th className="p-4 font-bold">పిల్లలపై ప్రభావం</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-warm/10 text-foreground">
                    <tr className="hover:bg-brand-warm/5">
                      <td className="p-4 font-semibold">కొత్త స్కూల్</td>
                      <td className="p-4 font-medium text-muted-foreground">పాత స్నేహితులు, టీచర్లు మిస్</td>
                    </tr>
                    <tr className="hover:bg-brand-warm/5">
                      <td className="p-4 font-semibold">ఊరు మార్పు</td>
                      <td className="p-4 font-medium text-muted-foreground">అలవాటైన వాతావరణం నుండి దూరం</td>
                    </tr>
                    <tr className="hover:bg-brand-warm/5">
                      <td className="p-4 font-semibold">బోర్డింగ్ స్కూల్</td>
                      <td className="p-4 font-medium text-muted-foreground">ఇల్లు, కుటుంబం మిస్</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 3 */}
            <div className="overflow-hidden bg-card rounded-2xl shadow-sm border border-brand-warm/20">
              <div className="bg-[#FFF3E0] p-4 font-bold text-[#E65100] text-lg flex items-center gap-2">
                🏡 నివాస మార్పు
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAFAFA] text-muted-foreground border-b border-brand-warm/10">
                      <th className="p-4 font-bold w-1/3">నిర్ణయం</th>
                      <th className="p-4 font-bold">పిల్లలపై ప్రభావం</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-warm/10 text-foreground">
                    <tr className="hover:bg-brand-warm/5">
                      <td className="p-4 font-semibold">అమ్మ/నాన్న వేరు</td>
                      <td className="p-4 font-medium text-muted-foreground">ఒకరు దూరం – ఆ ఖాళీ కనిపిస్తుంది</td>
                    </tr>
                    <tr className="hover:bg-brand-warm/5">
                      <td className="p-4 font-semibold">ఇల్లు మార్పు</td>
                      <td className="p-4 font-medium text-muted-foreground">అలవాటైన ఇల్లు, పరిసరాలు మిస్</td>
                    </tr>
                    <tr className="hover:bg-brand-warm/5">
                      <td className="p-4 font-semibold">వేరే ఊరు</td>
                      <td className="p-4 font-medium text-muted-foreground">కొత్త వాతావరణంలో ఒంటరితనం</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Child's Letter */}
        <section className="mb-16">
          <div className="bg-[#FFF8E7] border-l-[12px] border-[#F39C12] p-8 md:p-12 rounded-3xl shadow-md relative overflow-hidden">
            <QuoteIcon className="absolute top-6 right-6 size-32 text-[#F39C12] opacity-5" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#4A3728] mb-8 flex items-center gap-3">
              <span className="text-4xl">💬</span> పిల్లల లేఖ – అమ్మా నాన్నా కు
            </h2>
            <div className="space-y-5 text-lg md:text-xl text-[#5D4037] font-serif leading-loose relative z-10">
              <p>"ప్రియమైన అమ్మా, నాన్నా...</p>
              <p>నేను చాలా చిన్నవాడిని. కానీ నాకు మీరిద్దరూ చాలా ముఖ్యం.</p>
              <p>నాకు తెలుసు, మీ మధ్య కొన్ని సమస్యలు ఉన్నాయి. మీరు ఒకరిపై ఒకరు కోపంగా ఉండవచ్చు. కానీ దయచేసి... ఒక్క నిమిషం ఆగండి.</p>
              <p>నా కోసం కాస్త ఆలోచించండి. నాకు మీరిద్దరూ అవసరం.</p>
              <p>అమ్మ లేకుంటే... నా వంట ఎవరు చేస్తారు? నాకు ఎవరు కథలు చెప్తారు? నేను ఏడుస్తున్నప్పుడు ఎవరు నన్ను ఓదారుస్తారు?</p>
              <p>నాన్న లేకుంటే... స్కూల్ ఎవరు తీసుకెళ్తారు? నాకు ఎవరు క్రికెట్ నేర్పుతారు? నేను భయపడుతున్నప్పుడు ఎవరు నన్ను ధైర్యం చేస్తారు?</p>
              <p>మీరు విడిపోతే... నేను ఎవరి దగ్గర ఉండాలి? అమ్మ దగ్గరా? నాన్న దగ్గరా?</p>
              <p>మీరిద్దరూ నా కోసం ఉంటే... నేను ఎంతో సంతోషంగా ఉంటాను.</p>
              <p>దయచేసి... మీ మధ్య సమస్యలు ఉన్నా, వాటిని పరిష్కరించుకోండి. నా కోసం కాస్త ప్రయత్నించండి.</p>
              <p>నేను మీ ఇద్దరినీ ప్రేమిస్తున్నాను. మీరు నన్ను ప్రేమిస్తారు కాబట్టి... మీరు కూడా ఒకరినొకరు ప్రేమించుకోవడానికి ప్రయత్నించండి.</p>
              <p className="font-bold text-right italic pt-6 text-2xl">– మీ బిడ్డ"</p>
            </div>
          </div>
        </section>

        {/* No one can fill parents void */}
        <section className="mb-16">
          <div className="bg-brand-primary text-primary-foreground p-8 md:p-12 rounded-[2rem] shadow-warm relative overflow-hidden">
            <div aria-hidden className="absolute -left-12 -top-12 size-64 rounded-full bg-white/10 blur-3xl" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center relative z-10">🌟 "తల్లిదండ్రుల ఖాళీని ఎవరూ భర్తీ చేయలేరు"</h2>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed relative z-10 font-medium">
              <p className="bg-white/10 p-5 rounded-2xl">
                "అమ్మ ఖాళీని ఎవరూ భర్తీ చేయలేరు... అమ్మ వంట, అమ్మ ప్రేమ, అమ్మ ఓదార్పు అది ప్రత్యేకం."
              </p>
              <p className="bg-white/10 p-5 rounded-2xl">
                "నాన్న ఖాళీని ఎవరూ భర్తీ చేయలేరు... నాన్న బలం, నాన్న ఆటలు, నాన్న ధైర్యం అది ప్రత్యేకం."
              </p>
              <p className="px-5">
                ఒకరు లేకపోతే... ఆ ఖాళీ ఎప్పటికీ ఉంటుంది. పిల్లలు ప్రతి రోజు ఆ ఖాళీని చూస్తారు. ప్రతి క్షణం ఆ ఖాళీ గుర్తుకు వస్తుంది.
              </p>
              <p className="bg-[#FFD54F]/20 text-[#FFD54F] p-6 rounded-2xl border border-[#FFD54F]/30 font-bold">
                అందుకే... ఏ నిర్ణయం తీసుకునే ముందు... ఒక్కసారి ఆగండి. మీ పిల్లల గురించి ఆలోచించండి. వారి భవిష్యత్తు గురించి ఆలోచించండి. 
                మీ నిర్ణయం ఒక్క క్షణంలో తీసుకున్నా... దాని ప్రభావం పిల్లల జీవితమంతా ఉంటుంది.
              </p>
            </div>
          </div>
        </section>

        {/* Good Decisions */}
        <section className="mb-16">
          <div className="bg-[#E8F5E9] p-8 md:p-10 rounded-[2rem] shadow-sm border-l-8 border-[#4CAF50]">
            <h2 className="text-3xl font-bold text-[#1B5E20] mb-8 flex items-center gap-3">
              <ShieldAlert className="size-8 text-[#4CAF50]" />
              🛡️ పిల్లల రక్షణ కోసం మంచి నిర్ణయాలు
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm overflow-hidden">
                <thead>
                  <tr className="bg-[#C8E6C9] text-[#1B5E20]">
                    <th className="p-4 font-bold w-12 text-center">#</th>
                    <th className="p-4 font-bold w-1/3">మంచి నిర్ణయం</th>
                    <th className="p-4 font-bold">ఎందుకు?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C8E6C9]">
                  {[
                    { n: '1', t: '🤝 ఒకరితో ఒకరు మాట్లాడుకోవడం', d: 'పిల్లల ముందు గొడవలు తగ్గుతాయి' },
                    { n: '2', t: '🧘 కౌన్సెలింగ్ తీసుకోవడం', d: 'సమస్యలకు సరైన పరిష్కారం దొరుకుతుంది' },
                    { n: '3', t: '⏳ సమయం తీసుకోవడం', d: 'తొందరపాటు నిర్ణయాలు పిల్లలకు హాని' },
                    { n: '4', t: '❤️ పిల్లలకు సమయం ఇవ్వడం', d: 'వారికి భద్రత, ప్రేమ అనిపిస్తుంది' },
                    { n: '5', t: '💬 పిల్లల మాట వినడం', d: 'వారి భావాలు ముఖ్యమని తెలుస్తుంది' },
                    { n: '6', t: '🤗 భరోసా ఇవ్వడం', d: '"మేము నిన్ను ప్రేమిస్తాము" అని చెప్పడం' },
                    { n: '7', t: '🏠 స్థిరమైన వాతావరణం', d: 'పిల్లలకు ఊహించదగిన జీవితం అవసరం' },
                    { n: '8', t: '📚 విద్యకు ప్రాధాన్యం', d: 'పిల్లల భవిష్యత్తు కోసం' },
                  ].map((item, i) => (
                    <tr key={i} className="hover:bg-[#F1F8E9]">
                      <td className="p-4 font-bold text-[#388E3C] text-center">{item.n}</td>
                      <td className="p-4 font-bold text-[#2E7D32]">{item.t}</td>
                      <td className="p-4 text-[#388E3C] font-medium">{item.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Stop and Think */}
        <section className="mb-16">
          <div className="bg-[#FFF9C4]/50 border-2 border-[#FBC02D]/30 p-8 md:p-12 rounded-3xl text-center">
            <h2 className="text-3xl font-bold text-[#F57F17] mb-8">💛 "ఒక్కసారి ఆగండి... ఆలోచించండి"</h2>
            <div className="space-y-4 text-xl md:text-2xl font-semibold text-[#E65100]">
              <p>"ఈ నిర్ణయం నా పిల్లలను ఎలా ప్రభావితం చేస్తుంది?"</p>
              <p>"ఈ నిర్ణయం వల్ల నా పిల్లలు ఏమి కోల్పోతారు?"</p>
              <p>"ఈ నిర్ణయం వల్ల నా పిల్లలు ఏమి పొందుతారు?"</p>
              <p>"ఈ నిర్ణయం తర్వాత నా పిల్లలు నన్ను ఎలా చూస్తారు?"</p>
              <p>"ఈ నిర్ణయం 10 సంవత్సరాల తర్వాత... నా పిల్లలకు ఎలా గుర్తుంటుంది?"</p>
            </div>
          </div>
        </section>

        {/* Help section */}
        <section className="mb-16">
          <div className="bg-[#E3F2FD] p-8 md:p-12 rounded-[2rem] shadow-sm border border-[#90CAF9]">
            <h2 className="text-3xl font-bold text-[#1565C0] mb-4 flex items-center gap-3 justify-center">
              <Phone className="size-8" />
              సహాయం కోసం – మీరు ఒంటరిగా లేరు
            </h2>
            <p className="text-center text-[#1976D2] text-lg mb-8 max-w-2xl mx-auto font-medium">
              "మీరు ఒక క్లిష్టమైన నిర్ణయం తీసుకోవాల్సి వస్తుంటే... దయచేసి ఒంటరిగా నిర్ణయం తీసుకోకండి. మాతో మాట్లాడండి. మేము మీకు సరైన మార్గం చూపిస్తాము."
            </p>

            <h3 className="text-2xl font-bold text-[#0D47A1] mb-6 text-center">📞 24/7 హెల్ప్లైన్లు:</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { name: 'Vandrevala Foundation', num: '9999 666 555', raw: '9999666555' },
                { name: 'Tele MANAS', num: '14416', raw: '14416' },
                { name: 'KIRAN', num: '1800-5990019', raw: '18005990019' },
                { name: '1Life', num: '7893078930', raw: '7893078930' },
                { name: 'ROSHNI', num: '040-66202000', raw: '04066202000' },
              ].map((h, i) => (
                <a key={i} href={`tel:${h.raw}`} className="bg-white p-4 rounded-xl border border-[#BBDEFB] hover:border-[#2196F3] hover:shadow-md transition-all text-center group">
                  <div className="font-bold text-[#1976D2] mb-1 text-sm">{h.name}</div>
                  <div className="text-xl font-black text-[#0D47A1] group-hover:scale-105 transition-transform">{h.num}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Plea */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#FCE4EC] to-[#F3E5F5] p-8 md:p-12 rounded-[2rem] text-center shadow-sm border border-[#F8BBD0]/50">
            <h2 className="text-3xl font-bold text-[#C2185B] mb-6">🌈 పిల్లల కోసం ఒక విన్నపం</h2>
            <div className="space-y-6 text-lg md:text-xl text-[#880E4F] font-medium leading-relaxed">
              <p>"ప్రతి పిల్లవాడు ఒక పుష్పం... వారు వికసించడానికి ప్రేమ, అవగాహన, మరియు సురక్షిత వాతావరణం అవసరం.</p>
              <p>అమ్మా, నాన్నా... మీరు ఆ పుష్పాలకు సూర్యకాంతి, నీరు. మీరు లేకపోతే ఆ పుష్పాలు వాడిపోతాయి.</p>
              <p>దయచేసి... మీ నిర్ణయాలు ఆ పుష్పాలకు సూర్యకాంతి లాగా ఉండాలి. నీడ లాగా కాదు.</p>
              <p className="text-2xl font-bold text-[#D81B60] mt-8">మీ పిల్లల కోసం... ఒక్కసారి ఆగండి. ఆలోచించండి. సరైన నిర్ణయం తీసుకోండి."</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16 border-t-2 border-brand-warm/20 pt-16">
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">💬 "తల్లిదండ్రుల నిర్ణయం... పిల్లల జీవితం"</h2>
            <p className="text-xl text-muted-foreground leading-relaxed italic">
              "ఒక తల్లి/తండ్రి తీసుకునే ప్రతి నిర్ణయం... పిల్లల జీవితంలో ఒక అధ్యాయాన్ని రాస్తుంది. 
              ఆ అధ్యాయం సంతోషంగా ఉండాలంటే... ఆ నిర్ణయం ప్రేమతో, అవగాహనతో, పిల్లల భవిష్యత్తును దృష్టిలో ఉంచుకుని తీసుకోవాలి."
            </p>
            <p className="text-xl font-semibold text-foreground">
              "మీ పిల్లల కోసం సరైన నిర్ణయం తీసుకోవడానికి మేము మీకు సహాయం చేస్తాము. మీరు ఒంటరిగా నిర్ణయం తీసుకోవాల్సిన అవసరం లేదు."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link
              to="/support"
              className="bg-brand-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-warm hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <MessageCircleHeart className="size-5" />
              🤝 అజ్ఞాత చాట్ ప్రారంభించండి
            </Link>
            <a
              href="tel:9999666555"
              className="bg-card text-foreground px-8 py-4 rounded-full font-semibold text-lg border-2 border-brand-warm/30 hover:bg-brand-warm/10 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="size-5 text-brand-primary" />
              📞 హెల్ప్‌లైన్‌కు కాల్ చేయండి
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-brand-warm/10 text-brand-primary px-8 py-4 rounded-full font-semibold text-lg border-2 border-brand-primary/20 hover:bg-brand-primary/10 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <BookOpen className="size-5" />
              📖 పైకి వెళ్లండి
            </button>
          </div>
        </section>

        <div className="text-center pb-8 opacity-70">
          <p className="text-sm font-medium">© 2026 జీవన బంధం – తెలుగు కుటుంబాల కోసం ప్రేమతో 💛</p>
        </div>

      </main>
    </div>
  )
}

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  )
}
