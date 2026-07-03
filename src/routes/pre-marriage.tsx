import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, CheckCircle2, Heart, MessageCircleHeart, Info } from 'lucide-react'

export const Route = createFileRoute('/pre-marriage')({
  head: () => ({
    meta: [
      { title: 'ప్రీ-మ్యారేజ్ గైడ్ | జీవన బంధం (Pre-Marriage Guide)' },
      { name: 'description', content: 'వివాహానికి ముందు తప్పక తెలుసుకోవాల్సిన 10 విషయాలు, చెక్ లిస్ట్ మరియు Q&A. ఆనందకరమైన వైవాహిక జీవితానికి మార్గదర్శకం.' },
      { name: 'keywords', content: 'pre-marriage guide Telugu, marriage counseling Telugu, before marriage checklist, relationship advice Telugu, wedding preparation Telugu' },
      { property: 'og:title', content: 'ప్రీ-మ్యారేజ్ గైడ్ | జీవన బంధం' },
      { property: 'og:description', content: 'వివాహ బంధంలో అడుగుపెట్టే ముందు యువతీయువకులు తెలుసుకోవాల్సిన అత్యంత ముఖ్యమైన విషయాలు.' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=1200&q=80' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'ప్రీ-మ్యారేజ్ గైడ్ | వివాహానికి ముందు' },
      { name: 'twitter:description', content: 'వివాహానికి ముందు మీరు తప్పక అడగాల్సిన ప్రశ్నలు మరియు గైడ్.' },
    ],
  }),
  component: PreMarriageComponent,
})

function PreMarriageComponent() {
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
            ప్రీ-మ్యారేజ్ గైడ్ (పూర్తి విభాగం)
          </span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center mb-16">
          <span className="inline-block p-4 bg-brand-warm/15 rounded-3xl text-brand-primary mb-6">
            <Heart className="size-12" />
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
            జీవన బంధం – పూర్తి విస్తరణ
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            వివాహం అనేది ఇద్దరు వ్యక్తుల కలయిక మాత్రమే కాదు — ఇది రెండు కుటుంబాల, రెండు ఆత్మల కలయిక. పెళ్లికి ముందు ఈ విషయాలను తప్పక చర్చించుకోండి.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
            <span>📋</span> వివాహానికి ముందు తప్పక చేయవలసిన 10 తనిఖీలు
          </h2>
          <div className="space-y-8">
            {checks.map((item, i) => (
              <div key={i} className="bg-card p-6 md:p-8 rounded-3xl border border-brand-warm/20 shadow-sm hover:shadow-warm transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="text-2xl font-bold text-foreground m-0">{i + 1}. {item.title}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-brand-warm/5 p-6 rounded-2xl">
                    <h4 className="font-bold text-brand-primary mb-3 flex items-center gap-2">
                      <Info className="size-4" /> ఏమి చూడాలి:
                    </h4>
                    <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                      {item.whatToLook.map((point, j) => <li key={j}>{point}</li>)}
                    </ul>
                  </div>
                  <div className="bg-brand-ink/5 dark:bg-brand-ink/40 p-6 rounded-2xl border border-brand-ink/10">
                    <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-green-600" /> ఎలా తెలుసుకోవాలి:
                    </h4>
                    <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                      {item.howToKnow.map((point, j) => <li key={j}>{point}</li>)}
                    </ul>
                  </div>
                </div>
                {item.note && (
                  <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-xl text-sm font-medium flex items-start gap-2">
                    <span className="text-lg leading-none">⚠️</span>
                    <span>{item.note}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
            <span>📝</span> ప్రీ-మ్యారేజ్ చెక్లిస్ట్ (ఫుల్ వెర్షన్)
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-warm/10 p-6 md:p-8 rounded-3xl border border-brand-warm/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-brand-primary">
                <span>👩</span> అమ్మాయి తనిఖీ చేయవలసినవి
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-brand-warm/30 text-muted-foreground">
                      <th className="pb-3 font-semibold">విషయం</th>
                      <th className="pb-3 font-semibold text-center w-16">సరే</th>
                      <th className="pb-3 font-semibold text-center w-16">కాదు</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-warm/10">
                    {girlChecklist.map((item, i) => (
                      <tr key={i} className="hover:bg-brand-warm/5">
                        <td className="py-4 pr-4">{item}</td>
                        <td className="py-4 text-center"><input type="checkbox" className="size-5 accent-brand-primary cursor-pointer" /></td>
                        <td className="py-4 text-center"><input type="checkbox" className="size-5 accent-red-500 cursor-pointer" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-brand-ink/5 dark:bg-brand-ink/40 p-6 md:p-8 rounded-3xl border border-brand-ink/10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span>👦</span> అబ్బాయి తనిఖీ చేయవలసినవి
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-brand-ink/20 text-muted-foreground">
                      <th className="pb-3 font-semibold">విషయం</th>
                      <th className="pb-3 font-semibold text-center w-16">సరే</th>
                      <th className="pb-3 font-semibold text-center w-16">కాదు</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-ink/10">
                    {boyChecklist.map((item, i) => (
                      <tr key={i} className="hover:bg-brand-ink/5">
                        <td className="py-4 pr-4">{item}</td>
                        <td className="py-4 text-center"><input type="checkbox" className="size-5 accent-brand-primary cursor-pointer" /></td>
                        <td className="py-4 text-center"><input type="checkbox" className="size-5 accent-red-500 cursor-pointer" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
            <span>❓</span> ప్రీ-మ్యారేజ్ Q&A – పూర్తి జాబితా
          </h2>
          <div className="bg-card p-8 rounded-3xl border border-brand-warm/20 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-brand-primary">Q1: వివాహానికి ముందు ఏమేమి అడగాలి?</h3>
            <p className="text-lg font-medium mb-8">A: ఈ 25 ప్రశ్నలు తప్పక అడగండి:</p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <h4 className="font-bold text-xl mb-4 bg-brand-warm/15 inline-block px-4 py-1 rounded-full text-brand-primary">వ్యక్తిగతం:</h4>
                <ul className="space-y-3 list-disc pl-5 text-muted-foreground marker:text-brand-primary">
                  <li>మీకు ఏమి ఇష్టం? ఏమి ఇష్టం లేదు?</li>
                  <li>మీ బలహీనతలు ఏమిటి?</li>
                  <li>మీరు ఒంటరిగా ఉన్నప్పుడు ఏమి చేస్తారు?</li>
                  <li>మీకు కోపం వచ్చినప్పుడు ఎలా ఉంటారు?</li>
                  <li>మీరు ఇతరులతో ఎలా ప్రవర్తిస్తారు?</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-4 bg-brand-warm/15 inline-block px-4 py-1 rounded-full text-brand-primary">కుటుంబం:</h4>
                <ul className="space-y-3 list-disc pl-5 text-muted-foreground marker:text-brand-primary">
                  <li>మీ తల్లిదండ్రులతో మీ సంబంధం ఎలా ఉంది?</li>
                  <li>మీరు మీ కుటుంబానికి ఎంత సమయం ఇస్తారు?</li>
                  <li>వివాహం తర్వాత మీరు మీ కుటుంబాన్ని ఎలా చూసుకుంటారు?</li>
                  <li>మీరు పిల్లలు కావాలనుకుంటున్నారా? ఎప్పుడు?</li>
                  <li>మీ కుటుంబంలో ఏ బాధ్యతలు మీరు తీసుకుంటారు?</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-4 bg-brand-warm/15 inline-block px-4 py-1 rounded-full text-brand-primary">ఆర్థికం:</h4>
                <ul className="space-y-3 list-disc pl-5 text-muted-foreground marker:text-brand-primary">
                  <li>మీ ప్రస్తుత ఆదాయం ఎంత?</li>
                  <li>మీకు అప్పులు ఉన్నాయా?</li>
                  <li>మీరు ఎలా పొదుపు చేస్తారు?</li>
                  <li>ఆర్థిక నిర్వహణ ఎలా చేస్తారు?</li>
                  <li>భవిష్యత్తులో ఇల్లు, కారు కొనాలనుకుంటున్నారా?</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-4 bg-brand-warm/15 inline-block px-4 py-1 rounded-full text-brand-primary">భవిష్యత్తు:</h4>
                <ul className="space-y-3 list-disc pl-5 text-muted-foreground marker:text-brand-primary">
                  <li>5 సంవత్సరాల తర్వాత మీరు ఎక్కడ ఉండాలనుకుంటున్నారు?</li>
                  <li>మీ కెరీర్ లక్ష్యాలు ఏమిటి?</li>
                  <li>మీరు ప్రయాణం చేయాలనుకుంటున్నారా?</li>
                  <li>వృద్ధాప్యంలో ఎక్కడ ఉండాలనుకుంటున్నారు?</li>
                  <li>మీకు ఏ భయాలు ఉన్నాయి?</li>
                </ul>
              </div>

              <div className="sm:col-span-2 bg-brand-warm/5 p-6 rounded-2xl border border-brand-warm/10">
                <h4 className="font-bold text-xl mb-4 text-brand-primary flex items-center gap-2">
                  <Heart className="size-5" /> సంబంధం:
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <ul className="space-y-3 list-disc pl-5 text-muted-foreground marker:text-brand-primary">
                    <li>మీరు సమస్యలను ఎలా పరిష్కరిస్తారు?</li>
                    <li>మీరు ఒకరి మాట ఒకరు వింటారా?</li>
                    <li>మీరు ఒకరికి ఒకరు ఎంత సమయం ఇవ్వాలనుకుంటున్నారు?</li>
                  </ul>
                  <ul className="space-y-3 list-disc pl-5 text-muted-foreground marker:text-brand-primary">
                    <li>మీరు గౌరవాన్ని ఎలా చూపిస్తారు?</li>
                    <li>మీరు ఈ సంబంధం నుండి ఏమి ఆశిస్తున్నారు?</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-8">
              <div className="border-t border-brand-warm/20 pt-8">
                <h3 className="text-xl font-bold mb-4 text-brand-primary">Q2: అమ్మాయి లేదా అబ్బాయి నేపథ్యాన్ని ఎలా పరిశీలించాలి?</h3>
                <ul className="space-y-2 text-muted-foreground list-none">
                  <li>👨‍👩‍👧‍👦 <strong>కుటుంబం:</strong> ఇద్దరి కుటుంబాల సభ్యులు, వారి ప్రవర్తన, ఆర్థిక స్థితి</li>
                  <li>🎓 <strong>విద్య:</strong> అసలు విద్యార్హతలు, డిగ్రీలు, ఉద్యోగ వివరాలు</li>
                  <li>🏥 <strong>ఆరోగ్యం:</strong> వంశపారంపర్య వ్యాధులు, ఆరోగ్య పరిస్థితి</li>
                  <li>💼 <strong>ఉద్యోగం:</strong> ఉద్యోగ స్థిరత్వం, భవిష్యత్తు అవకాశాలు</li>
                  <li>💰 <strong>ఆర్థికం:</strong> అప్పులు, ఆదాయం, పొదుపు అలవాట్లు</li>
                  <li>🤝 <strong>సామాజికం:</strong> స్నేహితులు, సంఘంలో గౌరవం, అలవాట్లు</li>
                  <li>📱 <strong>డిజిటల్ పాదముద్ర:</strong> సోషల్ మీడియా ప్రవర్తన</li>
                </ul>
              </div>

              <div className="border-t border-brand-warm/20 pt-8">
                <h3 className="text-xl font-bold mb-4 text-brand-primary">Q3: ఒకరు "కాదు" అంటే, మరొకరు "అవును" అంటే ఏం చేయాలి?</h3>
                <ul className="space-y-2 text-muted-foreground list-none">
                  <li>❌ <strong>బలవంతం చేయవద్దు:</strong> ఎవరి ఇష్టాయిష్టాలను గౌరవించండి</li>
                  <li>🤝 <strong>స్నేహంగా వీడ్కోలు:</strong> "అవును" అన్న వ్యక్తికి ఇంకొక సంబంధం చూడండి</li>
                  <li>💬 <strong>కారణం అడగవద్దు:</strong> అవతలి వ్యక్తి కారణం చెప్పాలనుకుంటే చెప్పవచ్చు</li>
                  <li>🙏 <strong>గౌరవంగా తిరస్కరించండి:</strong> "నాకు ఈ సంబంధంలో ఇబ్బంది ఉంది, క్షమించండి" అని చెప్పండి</li>
                  <li>❤️ <strong>భవిష్యత్తులో స్నేహంగా ఉండండి:</strong> అవకాశం ఉంటే స్నేహితులుగా కొనసాగవచ్చు</li>
                </ul>
              </div>

              <div className="border-t border-brand-warm/20 pt-8">
                <h3 className="text-xl font-bold mb-4 text-brand-primary">Q4: ఏదైనా లవ్ ఫెయిల్యూర్ తర్వాత మళ్లీ ప్రేమించడం ఎలా?</h3>
                <ul className="space-y-2 text-muted-foreground list-none">
                  <li>💔 <strong>గతాన్ని అంగీకరించండి:</strong> ప్రతి విఫల సంబంధం ఒక పాఠం</li>
                  <li>⏳ <strong>సమయం ఇవ్వండి:</strong> తొందరపడి కొత్త సంబంధంలోకి రాకండి</li>
                  <li>💪 <strong>ఆత్మవిశ్వాసం పెంచుకోండి:</strong> మీరు ఒక విఫల సంబంధంతో ముగిసిపోలేదు</li>
                  <li>🤗 <strong>కొత్త వ్యక్తులను కలవండి:</strong> ఫ్రెండ్స్, కౌన్సెలర్, కుటుంబ సభ్యులతో మాట్లాడండి</li>
                  <li>❤️ <strong>మళ్లీ ప్రేమించడానికి భయపడకండి:</strong> ప్రతి కొత్త అవకాశం ఒక కొత్త మొదలు</li>
                </ul>
              </div>

              <div className="border-t border-brand-warm/20 pt-8">
                <h3 className="text-xl font-bold mb-4 text-brand-primary">Q5: పెళ్లి కోసం ఎంత సమయం తీసుకోవాలి?</h3>
                <ul className="space-y-2 text-muted-foreground list-none">
                  <li>⏳ <strong>కనీసం 3-6 నెలలు:</strong> ఇద్దరూ ఒకరినొకరు బాగా తెలుసుకోవడానికి</li>
                  <li>📅 <strong>ఆరు నెలల కంటే ఎక్కువ ఉత్తమం:</strong> వారి వ్యక్తిత్వం, అలవాట్లు, భవిష్యత్తు ప్రణాళికలు తెలుసుకోవడానికి</li>
                  <li>❌ <strong>ఒక్క రోజు లోపు నిర్ణయం తీసుకోవద్దు:</strong> ఇది పెద్ద నిర్ణయం</li>
                  <li>🤝 <strong>ఇద్దరి కుటుంబాలు కలిసే వరకు వేచి ఉండండి:</strong> కుటుంబాల అభిప్రాయం కూడా ముఖ్యం</li>
                </ul>
              </div>

              <div className="border-t border-brand-warm/20 pt-8">
                <h3 className="text-xl font-bold mb-4 text-brand-primary">Q6: మ్యాచ్‌లో గర్ల్/బాయ్ ఇష్టం లేకపోతే ఏం చేయాలి?</h3>
                <ul className="space-y-2 text-muted-foreground list-none">
                  <li>🗣️ <strong>బహిరంగంగా చెప్పండి:</strong> "నాకు ఇష్టం లేదు" అని గౌరవంగా చెప్పండి</li>
                  <li>🙅 <strong>అవును అని అబద్ధం చెప్పకండి:</strong> అది తర్వాత ఇద్దరికీ బాధ కలిగిస్తుంది</li>
                  <li>⏳ <strong>తొందరపడవద్దు:</strong> కొంత సమయం తీసుకుని, మళ్లీ ఆలోచించండి</li>
                  <li>💬 <strong>కారణం చెప్పాల్సిన అవసరం లేదు:</strong> కానీ చెప్పగలిగితే నొప్పి తగ్గుతుంది</li>
                  <li>🤗 <strong>ఇద్దరి భావాలకు గౌరవం:</strong> "నేను అర్థం చేసుకున్నాను, కానీ నాకు సరిపడడం లేదు"</li>
                </ul>
              </div>

              <div className="border-t border-brand-warm/20 pt-8">
                <h3 className="text-xl font-bold mb-4 text-brand-primary">Q7: వివాహానికి ముందు కౌన్సెలింగ్ అవసరమా?</h3>
                <ul className="space-y-2 text-muted-foreground list-none">
                  <li>✅ <strong>అవసరం:</strong> ప్రీ-మారిటల్ కౌన్సెలింగ్ ఇద్దరి మధ్య అర్థం చేసుకునే శక్తిని పెంచుతుంది</li>
                  <li>💬 <strong>సమస్యల గుర్తింపు:</strong> ఇప్పటికే ఉన్న సమస్యలను గుర్తించవచ్చు</li>
                  <li>🤝 <strong>కమ్యూనికేషన్ నేర్పు:</strong> ఎలా మాట్లాడాలో, ఎలా వినాలో నేర్పుతుంది</li>
                  <li>❤️ <strong>సంబంధం బలపడుతుంది:</strong> ఒకరినొకరు బాగా అర్థం చేసుకుంటారు</li>
                  <li>🏡 <strong>కుటుంబం స్థిరంగా ఉంటుంది:</strong> భవిష్యత్తులో విభేదాలు తగ్గుతాయి</li>
                </ul>
              </div>

              <div className="border-t border-brand-warm/20 pt-8">
                <h3 className="text-xl font-bold mb-4 text-brand-primary">Q8: వివాహానికి ముందు ఏ డాక్యుమెంట్లు చూడాలి?</h3>
                <ul className="space-y-2 text-muted-foreground list-none">
                  <li>📄 విద్యార్హతల సర్టిఫికెట్లు</li>
                  <li>🏢 ఉద్యోగ ప్రూఫ్ (ఆఫర్ లెటర్, సాలరీ స్లిప్)</li>
                  <li>🏦 బ్యాంక్ స్టేట్మెంట్లు (ఐచ్ఛికం)</li>
                  <li>🏠 ఆస్తి పత్రాలు (ఐచ్ఛికం)</li>
                  <li>🩺 మెడికల్ రికార్డ్స్ (ఐచ్ఛికం)</li>
                  <li>🆔 ఆధార్, పాన్ కార్డ్ (గుర్తింపు కోసం)</li>
                </ul>
              </div>

              <div className="border-t border-brand-warm/20 pt-8">
                <h3 className="text-xl font-bold mb-4 text-brand-primary">Q9: పెళ్లి తర్వాత భార్యాభర్తల మధ్య సమస్యలు వస్తే?</h3>
                <ul className="space-y-2 text-muted-foreground list-none">
                  <li>💬 <strong>మొదట మాట్లాడుకోండి:</strong> ఒకరి భావాలను మరొకరు వినండి</li>
                  <li>🧘 <strong>శాంతంగా ఉండండి:</strong> కోపంగా ఉన్నప్పుడు నిర్ణయాలు తీసుకోకండి</li>
                  <li>🤝 <strong>కౌన్సెలింగ్ తీసుకోండి:</strong> మూడవ వ్యక్తి సహాయం తీసుకోండి</li>
                  <li>⏳ <strong>సమయం ఇవ్వండి:</strong> సమస్యలు ఒక్క రోజులో పరిష్కారం కావు</li>
                  <li>❤️ <strong>ప్రేమను గుర్తు చేసుకోండి:</strong> మీరు ఎందుకు కలిసారో గుర్తు చేసుకోండి</li>
                </ul>
              </div>

              <div className="border-t border-brand-warm/20 pt-8">
                <h3 className="text-xl font-bold mb-4 text-brand-primary">Q10: వివాహం ఎప్పుడు చేయకూడదు?</h3>
                <ul className="space-y-2 text-muted-foreground list-none">
                  <li>❌ తొందరపడి: తెలియని వ్యక్తితో</li>
                  <li>❌ బలవంతంగా: కుటుంబం లేదా సమాజం ఒత్తిడితో</li>
                  <li>❌ ఆర్థికంగా అస్థిరంగా ఉన్నప్పుడు</li>
                  <li>❌ ఇద్దరి మధ్య అవగాహన లేనప్పుడు</li>
                  <li>❌ ఒకరి గురించి ఏదైనా అనుమానం ఉన్నప్పుడు</li>
                  <li>❌ మానసికంగా సిద్ధంగా లేనప్పుడు</li>
                </ul>
              </div>

              <div className="border-t border-brand-warm/20 pt-8">
                <h3 className="text-xl font-bold mb-4 text-brand-primary">Q11: లవ్ మ్యారేజ్ vs అరేంజ్డ్ మ్యారేజ్ – ఏది మంచిది?</h3>
                <ul className="space-y-2 text-muted-foreground list-none">
                  <li>💕 <strong>లవ్ మ్యారేజ్:</strong> మీరు ఆ వ్యక్తిని బాగా తెలుసు, కానీ కుటుంబాల మధ్య అవగాహన లేకపోవచ్చు</li>
                  <li>🤝 <strong>అరేంజ్డ్ మ్యారేజ్:</strong> కుటుంబాలు కలిసి ఉంటాయి, కానీ ఇద్దరి మధ్య అవగాహన తక్కువగా ఉండవచ్చు</li>
                  <li>✅ <strong>మంచిది:</strong> ఇద్దరూ ఒకరినొకరు బాగా తెలుసుకోవడం, కుటుంబాల అంగీకారం ఉండటం</li>
                  <li>⚖️ <strong>సమతుల్యం:</strong> లవ్ + కుటుంబ అంగీకారం = ఆదర్శవంతమైన వివాహం</li>
                </ul>
              </div>

              <div className="border-t border-brand-warm/20 pt-8">
                <h3 className="text-xl font-bold mb-4 text-brand-primary">Q12: పెళ్లి తర్వాత కెరీర్ ఎలా కొనసాగించాలి?</h3>
                <ul className="space-y-2 text-muted-foreground list-none">
                  <li>💼 <strong>ఇద్దరి కెరీర్‌లకు ప్రాధాన్యం:</strong> ఇద్దరి ఉద్యోగాలు, కలలు ముఖ్యమే</li>
                  <li>🏠 <strong>బాధ్యతలు పంచుకోండి:</strong> ఇంటి పనులు, పిల్లల సంరక్షణ ఇద్దరూ పంచుకోండి</li>
                  <li>📅 <strong>సమయం కేటాయించండి:</strong> కెరీర్ మరియు కుటుంబం రెండింటికీ సమయం ఇవ్వండి</li>
                  <li>💬 <strong>ఓపెన్ కమ్యూనికేషన్:</strong> మీ కెరీర్ ఆశయాల గురించి భర్త/భార్యకు చెప్పండి</li>
                  <li>🤝 <strong>మద్దతు:</strong> ఒకరి కెరీర్‌కి మరొకరు మద్దతు ఇవ్వండి</li>
                </ul>
              </div>

              <div className="border-t border-brand-warm/20 pt-8">
                <h3 className="text-xl font-bold mb-4 text-brand-primary">Q13: పిల్లలు ఎప్పుడు ప్లాన్ చేయాలి?</h3>
                <ul className="space-y-2 text-muted-foreground list-none">
                  <li>⏳ <strong>కనీసం 2-3 సంవత్సరాలు వేచి ఉండండి:</strong> ఇద్దరూ ఒకరినొకరు బాగా తెలుసుకోవడానికి</li>
                  <li>💰 <strong>ఆర్థికంగా సిద్ధంగా ఉండండి:</strong> పిల్లల పెంపకం ఖర్చులు ప్లాన్ చేయండి</li>
                  <li>❤️ <strong>మానసికంగా సిద్ధంగా ఉండండి:</strong> పిల్లల కోసం సమయం, శక్తి ఉండాలి</li>
                  <li>👨‍👩‍👧 <strong>ఇద్దరి అభిప్రాయం:</strong> పిల్లలు కావాలా లేదా అనేది ఇద్దరూ కలిసి నిర్ణయించుకోండి</li>
                </ul>
              </div>

              <div className="border-t border-brand-warm/20 pt-8">
                <h3 className="text-xl font-bold mb-4 text-brand-primary">Q14: వివాహంలో ఆర్థిక నిర్వహణ ఎలా చేయాలి?</h3>
                <ul className="space-y-2 text-muted-foreground list-none">
                  <li>💰 <strong>జాయింట్ అకౌంట్:</strong> ఇద్దరి పేరిట బ్యాంక్ అకౌంట్</li>
                  <li>📊 <strong>నెలవారీ బడ్జెట్:</strong> ఆదాయం, ఖర్చులు ప్లాన్ చేయండి</li>
                  <li>💳 <strong>అప్పులు నివారించండి:</strong> అనవసర అప్పులు చేయకండి</li>
                  <li>💵 <strong>అత్యవసర నిధి:</strong> కనీసం 6 నెలల ఖర్చులకు నిధి ఉంచండి</li>
                  <li>📈 <strong>పెట్టుబడులు:</strong> భవిష్యత్తు కోసం ప్లాన్ చేయండి</li>
                  <li>🤝 <strong>ఇద్దరి భాగస్వామ్యం:</strong> ఆర్థిక నిర్ణయాలు ఇద్దరూ కలిసి తీసుకోండి</li>
                </ul>
              </div>

              <div className="border-t border-brand-warm/20 pt-8">
                <h3 className="text-xl font-bold mb-4 text-brand-primary">Q15: వివాహంలో విభేదాలు వస్తే ఎలా పరిష్కరించాలి?</h3>
                <ul className="space-y-2 text-muted-foreground list-none">
                  <li>🧘 <strong>శాంతంగా ఉండండి:</strong> కోపం తగ్గేవరకు వేచి ఉండండి</li>
                  <li>💬 <strong>మాట్లాడండి:</strong> మీ సమస్య ఏమిటో స్పష్టంగా చెప్పండి</li>
                  <li>🤝 <strong>సమరస భావం:</strong> ఎవరి తప్పు వారే ఒప్పుకోండి</li>
                  <li>❤️ <strong>క్షమించండి:</strong> తప్పులను మనసులో పెట్టుకోకండి</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-8 bg-brand-warm/5 rounded-3xl border-2 border-brand-warm/20 border-dashed">
          <h2 className="text-2xl font-bold mb-4">మరిన్ని సందేహాలు ఉన్నాయా?</h2>
          <p className="text-muted-foreground mb-6">మా నిపుణులతో అజ్ఞాతంగా మాట్లాడండి మరియు సరైన మార్గదర్శకత్వం పొందండి.</p>
          <Link to="/support" className="bg-brand-primary text-primary-foreground px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 w-fit mx-auto hover:scale-105 transition-transform shadow-warm">
            <MessageCircleHeart className="size-5" />
            అజ్ఞాత కౌన్సెలింగ్ తీసుకోండి
          </Link>
        </div>
      </main>
    </div>
  )
}

const checks = [
  {
    icon: '💑',
    title: 'ఇద్దరి ఆలోచనా విధానం',
    whatToLook: ['జీవితంపై దృష్టి (ఆశావాదమా? నిరాశావాదమా?)', 'భవిష్యత్తు ప్రణాళికలు (కలిసి ఉండాలనుకుంటున్నారా?)', 'కుటుంబం పట్ల అభిప్రాయం (ఎంత బాధ్యత తీసుకుంటారు?)'],
    howToKnow: ['అనేక సార్లు మాట్లాడండి', 'వారి పాత స్నేహితులతో మాట్లాడండి', 'వారు ఎలాంటి పుస్తకాలు చదువుతారో, ఎలాంటి సినిమాలు చూస్తారో చూడండి']
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'కుటుంబ నేపథ్యం',
    whatToLook: ['తల్లిదండ్రుల సంబంధం ఎలా ఉంది?', 'తోబుట్టువులు ఎలా ఉన్నారు?', 'కుటుంబంలో గౌరవం, ప్రేమ ఉందా?', 'కుటుంబ ఆర్థిక స్థితి ఎలా ఉంది?'],
    howToKnow: ['వారి ఇంటికి వెళ్లి చూడండి', 'వారి తల్లిదండ్రులతో మాట్లాడండి', 'కుటుంబ సభ్యుల ప్రవర్తనను గమనించండి']
  },
  {
    icon: '💰',
    title: 'ఆర్థిక పరిస్థితి',
    whatToLook: ['నెలవారీ ఆదాయం ఎంత?', 'అప్పులు ఉన్నాయా?', 'పొదుపు అలవాట్లు ఎలా ఉన్నాయి?', 'ఖర్చు చేసే విధానం ఎలా ఉంది?', 'బ్యాంక్ బ్యాలెన్స్, పెట్టుబడులు ఎలా ఉన్నాయి?'],
    howToKnow: ['నేరుగా అడగండి (ఇది ముఖ్యమైన విషయం)', 'వారి ఉద్యోగ భవిష్యత్తు గురించి తెలుసుకోండి', 'కుటుంబ ఆస్తుల గురించి అడగండి'],
    note: 'గమనిక: ఆర్థిక విషయాలు సున్నితమైనవి. గౌరవంగా, జాగ్రత్తగా అడగండి.'
  },
  {
    icon: '🎓',
    title: 'విద్య & ఉద్యోగం',
    whatToLook: ['అసలు విద్యార్హతలు ఏమిటి?', 'ప్రస్తుత ఉద్యోగం ఏమిటి?', 'భవిష్యత్తులో కెరీర్ లక్ష్యాలు ఏమిటి?', 'ఉద్యోగంలో స్థిరత్వం ఉందా?'],
    howToKnow: ['వారి డిగ్రీ సర్టిఫికెట్లు చూడండి', 'వారి కంపెనీ గురించి తెలుసుకోండి', 'వారి కెరీర్ ప్లాన్ గురించి అడగండి']
  },
  {
    icon: '🏠',
    title: 'నివాస ప్రణాళిక',
    whatToLook: ['వివాహం తర్వాత ఎక్కడ ఉండాలనుకుంటున్నారు?', 'వారి కుటుంబంతోనా? ప్రత్యేకంగానా?', 'ఇంటి ఖర్చులు ఎలా పంచుకుంటారు?', 'భవిష్యత్తులో ఇల్లు కొనాలనుకుంటున్నారా?'],
    howToKnow: ['ఇది నేరుగా చర్చించండి', 'ఇద్దరి కుటుంబాల అభిప్రాయం తీసుకోండి', 'అందుబాటులో ఉన్న ఎంపికల గురించి మాట్లాడండి']
  },
  {
    icon: '👶',
    title: 'పిల్లల ప్రణాళిక',
    whatToLook: ['పిల్లలు కావాలనుకుంటున్నారా? ఎప్పుడు?', 'ఎంత మంది పిల్లలు కావాలి?', 'పిల్లల పెంపకం గురించి వారి ఆలోచనలు ఏమిటి?', 'పిల్లల విద్య కోసం ఏర్పాట్లు ఉన్నాయా?'],
    howToKnow: ['ఓపెన్ గా మాట్లాడండి', 'మీ ఆశలు, అంచనాలు చెప్పండి', 'ఒకరి అభిప్రాయాలను గౌరవించండి']
  },
  {
    icon: '🙏',
    title: 'ఆధ్యాత్మిక & నైతిక విలువలు',
    whatToLook: ['వారి మతం, విశ్వాసాలు ఏమిటి?', 'ప్రార్థన, ఆచారాలు పాటిస్తారా?', 'నైతిక విలువలు ఏమిటి?', 'నిజాయితీ, నమ్మకం ఎలా ఉన్నాయి?'],
    howToKnow: ['వారి రోజువారీ అలవాట్లను గమనించండి', 'వారి పెద్దలు, స్నేహితులు ఏం అంటారో తెలుసుకోండి', 'కష్టమైన సమయంలో వారు ఎలా ప్రవర్తిస్తారో గమనించండి']
  },
  {
    icon: '💬',
    title: 'కమ్యూనికేషన్ స్టైల్',
    whatToLook: ['కోపం వచ్చినప్పుడు ఎలా ప్రవర్తిస్తారు?', 'సమస్యలను ఎలా పరిష్కరిస్తారు?', 'ఇతరుల మాట వింటారా?', 'గౌరవంగా మాట్లాడతారా?'],
    howToKnow: ['వారు ఇతరులతో ఎలా మాట్లాడతారో గమనించండి', 'ఒక చిన్న విభేదం వచ్చినప్పుడు ఎలా ప్రవర్తిస్తారో చూడండి', 'వారు మీ మాట వింటున్నారా లేదా అని గమనించండి']
  },
  {
    icon: '🤝',
    title: 'సామాజిక జీవితం',
    whatToLook: ['స్నేహితులు ఎలా ఉన్నారు?', 'సోషల్ మీడియా ఎలా వాడతారు?', 'సమయం ఎలా గడుపుతారు?', 'హాబీలు, ఆసక్తులు ఏమిటి?'],
    howToKnow: ['వారి స్నేహితులను కలవండి', 'వారి సోషల్ మీడియా ప్రొఫైల్స్ చూడండి', 'వారు ఖాళీ సమయంలో ఏమి చేస్తారో అడగండి']
  },
  {
    icon: '❤️',
    title: 'ఇద్దరి మధ్య అనుబంధం',
    whatToLook: ['ఒకరి పట్ల ఒకరికి అర్థం చేసుకునే శక్తి ఉందా?', 'ఒకరి భావాలను మరొకరు గౌరవిస్తారా?', 'సమస్యల్లో కలిసి నిలబడతారా?', 'భవిష్యత్తు కలలు ఒకేలా ఉన్నాయా?'],
    howToKnow: ['చాలా సమయం కలిసి గడపండి', 'వివిధ సందర్భాల్లో వారి ప్రవర్తన గమనించండి', 'మీ భావాలను బహిరంగంగా పంచుకోండి']
  }
]

const girlChecklist = [
  'అబ్బాయి విద్యార్హతలు',
  'అబ్బాయి ఉద్యోగం & ఆదాయం',
  'అబ్బాయి కుటుంబ నేపథ్యం',
  'అబ్బాయి వ్యక్తిత్వం',
  'అబ్బాయి అలవాట్లు (మద్యం, ధూమపానం)',
  'అబ్బాయి కోపం & ప్రవర్తన',
  'అబ్బాయి ఆర్థిక పరిస్థితి',
  'అబ్బాయి కుటుంబంలో గౌరవం',
  'అబ్బాయి భవిష్యత్తు ప్రణాళికలు',
  'అబ్బాయి ఆధ్యాత్మిక విలువలు'
]

const boyChecklist = [
  'అమ్మాయి విద్యార్హతలు',
  'అమ్మాయి ఉద్యోగం / కెరీర్',
  'అమ్మాయి కుటుంబ నేపథ్యం',
  'అమ్మాయి వ్యక్తిత్వం',
  'అమ్మాయి అలవాట్లు',
  'అమ్మాయి కోపం & ప్రవర్తన',
  'అమ్మాయి ఆర్థిక పరిస్థితి',
  'అమ్మాయి కుటుంబంలో గౌరవం',
  'అమ్మాయి భవిష్యత్తు ఆశయాలు',
  'అమ్మాయి ఆధ్యాత్మిక విలువలు'
]
