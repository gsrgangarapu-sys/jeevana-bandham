import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, BookHeart, Quote } from 'lucide-react'

export const Route = createFileRoute('/vasus-story')({
  head: () => ({
    meta: [
      { title: 'వాసు ప్రేమకథ | జీవన బంధం (Vasu Story - Telugu Love Story)' },
      { name: 'description', content: 'ఒక అందమైన నిజ జీవిత ప్రేమకథ – వాసు మరియు ఆమె. నా మొదటి ప్రేమ – ఒక హాల్ టికెట్లో మొదలైన కథ. భార్యాభర్తల మధ్య ప్రేమ, నమ్మకం యొక్క గొప్పదనం.' },
      { name: 'keywords', content: 'Telugu true love story, husband wife relationship Telugu, romantic stories Telugu, inspirational love story, real life story Telugu' },
      { property: 'og:title', content: 'వాసు ప్రేమకథ – నా మొదటి ప్రేమ' },
      { property: 'og:description', content: 'ఒక హాల్ టికెట్లో మొదలైన అందమైన ప్రయాణం. జీవితంలో ప్రేమ మరియు బంధం యొక్క విలువను తెలిపే కథ.' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'వాసు ప్రేమకథ | జీవన బంధం' },
      { name: 'twitter:description', content: 'నిజమైన ప్రేమకు నిదర్శనం ఈ కథ.' },
    ],
  }),
  component: VasusStoryComponent,
})

function VasusStoryComponent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-brand-warm/20">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="p-2 -ml-2 rounded-full hover:bg-brand-warm/10 transition-colors text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-5" />
          </Link>
          <span className="font-display font-semibold text-lg text-brand-primary">
            స్ఫూర్తిదాయక కథలు
          </span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <article className="prose prose-lg prose-stone dark:prose-invert max-w-none prose-p:leading-relaxed prose-headings:font-display">
          <div className="text-center mb-12">
            <span className="inline-flex justify-center items-center size-16 bg-brand-warm/20 rounded-full mb-6">
              <BookHeart className="size-8 text-brand-primary" />
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ఒక అందమైన ప్రేమకథ – వాసు మరియు ఆమె</h1>
            <p className="text-xl text-muted-foreground italic font-medium">"నా మొదటి ప్రేమ – ఒక హాల్ టికెట్లో మొదలైన కథ"</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold flex items-center gap-2 mt-0"><span>🌅</span> బాల్యం – అమ్మకం కోసం ఒక చిరునవ్వు</h2>
              <p>ఆంధ్రప్రదేశ్లోని ఒక చిన్న పల్లెటూరు రామాపురం. అక్కడ ఒక చిన్న కిరాణా దుకాణం ఉంది. ఆ దుకాణంలో పనిచేసే అబ్బాయి పేరు వాసు. అతనికి అప్పుడు వయసు 12 సంవత్సరాలు. చాలా చిన్న వయసులోనే తన తండ్రిని కోల్పోయిన వాసు, అమ్మ మరియు చెల్లెలితో కలిసి జీవిస్తున్నాడు. కుటుంబ పోషణ కోసం చదువుకు అడ్డంగా దుకాణం చూసుకోవాల్సి వచ్చింది.</p>
              <p>అతని దుకాణానికి కాస్త దూరంలో ఒక అమ్మాయి ఉండేది. ఆమె పేరు తనకు తెలియదు కానీ ఆమె ముఖం చూస్తే చాలు, అతని రోజంతా అలా కళకళలాడేది.</p>
              <p>ఆ అమ్మాయి ప్రతి రోజు దుకాణానికి వచ్చేది — ఏదో ఒక సామాను కోసం. కానీ వాసుకు అదే కావాల్సినంత. ఆమె చిరునవ్వు, ఆమె కళ్ళలోని మెరుపు, ఆమె జడలో పూలు — ప్రతీదీ అతనికి కవిత్వంలా అనిపించేది.</p>
              <blockquote className="border-l-4 border-brand-primary pl-6 py-2 italic text-xl my-8 bg-brand-warm/5 rounded-r-xl">
                <Quote className="size-6 text-brand-primary/40 mb-2 inline-block -mt-4 mr-2" />
                "ఆ అమ్మాయి నా దుకాణంలోకి అడుగుపెట్టిన ప్రతిసారీ, నా గుండె వేగం పెరిగిపోయేది. ఒక్క మాట మాట్లాడాలని ఎంతో అనిపించేది కానీ... మాటలే రావు."
              </blockquote>
              <p>వారిద్దరూ ఒకే స్కూల్లో చదివేవారు. కానీ ఆమె అతని కంటే ఒక క్లాస్ ఎక్కువ చదివేది. అతను అలా చూస్తూ, కలలు కంటూ, రోజులు గడిపేస్తున్నాడు. అతని మనసులో ఆమె ఒక కలలా నిలిచిపోయింది. "ఒకవేళ ఆమె నా భార్య అయితే?" అని అతను వేలసార్లు అనుకున్నాడు. ఆమె అంటే ఇష్టం అని ఎప్పుడూ చెప్పలేకపోయాడు. ఎందుకంటే అతను ఒక చిన్న దుకాణం యజమాని, ఆమె బాగా చదువుకునే అమ్మాయి.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold flex items-center gap-2"><span>🌸</span> కాలేజ్ రోజులు – ఒక అజ్ఞాత ప్రేమ</h2>
              <p>ఆమె పదవ తరగతి పూర్తి చేసి, దూరంలో ఉన్న కళాశాలలో చేరింది. వాసు మనసులో ఆమె జ్ఞాపకాలు ఇంకా తాజాగా ఉన్నాయి. ఆమెను మళ్లీ చూడాలనే కోరికతో, ఒక సంవత్సరం తర్వాత అతను అదే కళాశాలలో చేరాడు.</p>
              <p>ఆ కళాశాలలో అతను ఆమెను మళ్లీ చూశాడు. ఆమె అంతకంటే మరింత అందంగా మారింది. కానీ ఇప్పటికీ అతను ఆమెతో మాట్లాడలేకపోయాడు. అతనికి భయం — ఆమె నేను ఎవరో కూడా గుర్తుపెట్టుకోలేదేమో? ఆమె దగ్గర ఏదైనా మాట్లాడితే నా భావన బయటపడిపోతుందేమో?</p>
              <p>ఒక సంవత్సరం పూర్తిగా ఆమెను చూస్తూ, ఆమెలోని ప్రతి కదలికనూ గమనిస్తూ, కానీ ఒక్క మాట కూడా మాట్లాడకుండా గడిపాడు. అతను ఆమెతో ఏదైనా కారణంతో మాట్లాడాలనుకున్నాడు కానీ ఎలాగో తెలియలేదు. అతని ప్రేమ అజ్ఞాతంగానే కొనసాగింది.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold flex items-center gap-2"><span>📸</span> ఆ హాల్ టికెట్ – ఎప్పటికీ మర్చిపోలేని క్షణం</h2>
              <p>ఒక రోజు, ఫైనల్ పరీక్షల సమయంలో, హాల్ టికెట్లు జారీ చేశారు. అతనికి ఆమె హాల్ టికెట్ చూడాలని ఎంతో కుతూహలం. ఒక రోజు, ఆమె టికెట్ టేబుల్ మీద పడి ఉండడం చూసాడు. అతను దానిని కాసేపు చూసి, ఆమె పేరు చదివాడు. ఆమె పేరు ఎంత అందంగా ఉందో! అతని గుండెలో ఒక సంతోషం — ఇప్పుడు ఆమె పేరు తెలుసు!</p>
              <p>ఆ టికెట్లోని ఆమె ఫోటో అతను ఎప్పటికీ మర్చిపోలేదు. ఆ ఫోటో అతని మనసులో శాశ్వతంగా నిలిచిపోయింది. ఆ కాలంలో స్మార్ట్ ఫోన్లు లేవు, కెమెరా కూడా లేదు. అతనికి ఆమె ఫోటో తీయాలనిపించింది కానీ వీలుకాలేదు. అతను ఆ ఫోటోను తన మనసు కెమెరాలో బంధించుకున్నాడు.</p>
              <blockquote className="border-l-4 border-brand-primary pl-6 py-2 italic text-xl my-8 bg-brand-warm/5 rounded-r-xl">
                <Quote className="size-6 text-brand-primary/40 mb-2 inline-block -mt-4 mr-2" />
                "ఆ ఒక్క ఫోటోనే నేను మళ్లీ మళ్లీ చూసుకుంటూ ఉండేవాడిని. ఆ ఫోటో కన్నా అందమైనది ఈ ప్రపంచంలో ఏదీ లేదు అని అనుకునేవాడిని."
              </blockquote>
            </section>

            <section>
              <h2 className="text-2xl font-bold flex items-center gap-2"><span>💔</span> వేరుపడటం – ఒక కల ముగింపు</h2>
              <p>కళాశాల పూర్తయ్యే సమయానికి, ఆమె కుటుంబం మరో ఊరికి మారిపోయింది. వాసుకు ఆమె కొత్త చిరునామా తెలియదు. అతను చాలా ప్రయత్నించాడు కానీ ఆమె జాడ దొరకలేదు.</p>
              <p>5 సంవత్సరాల తర్వాత, అతనికి ఆమె పెళ్లయిపోయిందని తెలిసింది. అతను చాలా బాధపడ్డాడు. అతని మనసులో ఆమె మాత్రమే. ఆమె తర్వాత ఎవరినీ అతను ప్రేమించలేదు. అతను ఆమెతో మాట్లాడకపోవడం, తన ప్రేమను వ్యక్తపరచకపోవడం తన జీవితంలో అతిపెద్ద తప్పిదం అని అతను అనుకున్నాడు.</p>
            </section>

            <section className="bg-brand-warm/10 p-8 rounded-3xl border border-brand-warm/20 mt-12">
              <h2 className="text-2xl font-bold flex items-center gap-2 mt-0"><span>🫂</span> వాసు మనసులోని మాట</h2>
              <p className="italic text-lg mb-0 font-medium">"ఆ అమ్మాయి కోసమే నా ప్రతి కల. నేను ఆమెను ఒక్కసారి కలుసుకుని, 'నువ్వంటే నాకు చాలా ఇష్టం' అని చెప్పలేకపోయాను. ఇప్పుడు ఆమె వేరొకరి భార్య. కానీ ఆమె ముఖం, ఆమె చిరునవ్వు, ఆ హాల్ టికెట్ ఫోటో... ఇవన్నీ నా గుండెలోనే ఉన్నాయి. నేను ఆమెతో జీవించలేకపోయినా, ఆమెను ప్రేమించిన జ్ఞాపకాలు మాత్రం నా జీవితాన్ని అందంగా మార్చాయి."</p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold flex items-center gap-2"><span>🌟</span> వాసు కథ నుండి మనం నేర్చుకోవలసిన పాఠాలు:</h2>
              <ul className="list-disc pl-5 space-y-3">
                <li><strong>ప్రేమను వ్యక్తపరచండి:</strong> మీరు ఎవరినైనా ప్రేమిస్తే, ఆ మాట చెప్పండి. మౌనంగా ఉండడం వల్ల జీవితాంతం బాధపడాల్సి వస్తుంది.</li>
                <li><strong>సమయం వృథా చేయవద్దు:</strong> వేరే వారికోసం ఎదురుచూస్తూ మీ జీవితాన్ని ఆపుకోకండి.</li>
                <li><strong>నిరాశను అంగీకరించండి:</strong> మీ ప్రేమ విఫలమైతే, అది మీ విలువను తగ్గించదు.</li>
                <li><strong>ముందుకు సాగండి:</strong> మీ జీవితం అంతా ఒక వ్యక్తి మీద ఆధారపడి ఉండదు. మీరు ప్రేమించిన జ్ఞాపకాలు ఎప్పటికీ మీతోనే ఉంటాయి.</li>
              </ul>
            </section>
          </div>
        </article>
      </main>
    </div>
  )
}
