import cartoonBride from "@/assets/cartoon-bride.jpg";
import cartoonChild from "@/assets/cartoon-child.jpg";
import cartoonFather from "@/assets/cartoon-father.jpg";
import cartoonMother from "@/assets/cartoon-mother.jpg";
import cartoonWoman from "@/assets/cartoon-woman.jpg";
import cartoonTeen from "@/assets/cartoon-teen.jpg";

export const stories = [
  {
    id: "crying-bride",
    emoji: "😭",
    img: cartoonBride,
    title: "ఏడుస్తున్న వధువు",
    quote: "“నా భర్త కుటుంబం నన్ను పట్టించుకోవడం లేదు”",
    chips: ["2 నిమిషాల కథ", "కౌన్సెలింగ్"],
    fullStory: (
      <div className="space-y-6">
        <div className="bg-brand-warm/10 p-6 rounded-2xl border border-brand-warm/30 mb-8">
          <h2 className="text-2xl font-bold text-brand-primary mb-2 flex items-center gap-2">
            <span>😭</span> కథ 1: ఏడుస్తున్న వధువు
          </h2>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-4">📖 కథ (2 నిమిషాల చదవడం):</h3>
          <p>సీత (పేరు మార్చబడింది) వివాహం అయి 2 సంవత్సరాలు. ఆమె భర్త ఒక మంచి వ్యక్తి, కానీ అతని కుటుంబం ఆమెను ఒక ఇంటి పనిమనిషిలా చూస్తుంది. ప్రతి రోజు ఉదయం 5 గంటలకు లేచి అందరికీ వంట చేయాలి, ఇంటి పనులు చేయాలి, కానీ ఎవరూ ఆమెను గౌరవంగా చూడరు.</p>
          <p>ఆమె భర్త తన తల్లి మాటకు ఎదురుచెప్పడు. సీతకు తన బాధను పంచుకోవడానికి ఎవరూ లేరు. ఆమె అమ్మాయిగా ఉన్న తన కలలన్నీ ఇప్పుడు కలిసిపోయినట్టు అనిపిస్తోంది.</p>
          <p>కానీ సీత ధైర్యంగా కౌన్సెలింగ్ తీసుకుంది. ఇప్పుడు ఆమె తన భర్తతో మాట్లాడటం నేర్చుకుంది. కుటుంబంలో తనకు కూడా గౌరవం ఉండాలని, తాను కూడా ఒక మనిషినని చెప్పింది. ఆమె స్వంతంగా ఒక చిన్న టైలరింగ్ షాపు ప్రారంభించింది. ఇప్పుడు ఆమె ఆత్మవిశ్వాసంతో ఉంది.</p>
        </div>

        <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-2xl border border-green-200 dark:border-green-900 mt-8">
          <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
            <span>📌</span> పాఠం:
          </h3>
          <p className="font-medium">"మీరు ఎంతటి వారైనా, మీకు గౌరవం లేని చోట మీరు ఉండకూడదు. మీరు మార్చుకోలేని పరిస్థితిని మార్చుకోవడం నేర్చుకోండి లేదా ఆ పరిస్థితి నుండి బయటకు రండి."</p>
        </div>
      </div>
    )
  },
  {
    id: "single-mother",
    emoji: "👩‍👧",
    img: cartoonMother,
    title: "సింగిల్ మదర్",
    quote: "“నా బిడ్డ తండ్రిని మిస్ అవుతున్నాడు”",
    chips: ["Co-parenting గైడ్", "చట్టపరమైన హక్కులు"],
    fullStory: (
      <div className="space-y-6">
        <div className="bg-brand-warm/10 p-6 rounded-2xl border border-brand-warm/30 mb-8">
          <h2 className="text-2xl font-bold text-brand-primary mb-2 flex items-center gap-2">
            <span>👩‍👧</span> కథ 2: సింగిల్ మదర్
          </h2>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-4">📖 కథ:</h3>
          <p>లక్ష్మి భర్త 3 సంవత్సరాల క్రితం మరణించాడు. ఆమె ఒక 5 ఏళ్ల కూతురుతో ఒంటరిగా ఉంది. ఆమె కూతురు ప్రతి రోజు "నాన్న ఎప్పుడు వస్తారు?" అని అడుగుతుంది. ఆ ప్రశ్న లక్ష్మి గుండెను పిండేస్తుంది.</p>
          <p>లక్ష్మి ఒక చిన్న టిఫిన్ సెంటర్ నడుపుతుంది. ఆమెకు ఆర్థిక ఇబ్బందులు, ఒంటరితనం, సమాజం నుండి విమర్శలు ఉన్నాయి. కానీ ఆమె తన కూతురు కోసం బతకాలని నిర్ణయించుకుంది.</p>
          <p>ఆమె కౌన్సెలింగ్ తీసుకుని, తన కూతురితో తండ్రి గురించి అందంగా మాట్లాడటం నేర్చుకుంది. ఆమె ఇతర సింగిల్ మదర్స్ కోసం ఒక సపోర్ట్ గ్రూప్ కూడా ప్రారంభించింది.</p>
        </div>

        <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-2xl border border-green-200 dark:border-green-900 mt-8">
          <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
            <span>📌</span> పాఠం:
          </h3>
          <p className="font-medium">"ఒంటరితనం ఒక శాపం కాదు, అది మిమ్మల్ని బలంగా మార్చే అవకాశం."</p>
        </div>
      </div>
    )
  },
  {
    id: "suffering-child",
    emoji: "🧒",
    img: cartoonChild,
    title: "బాధపడుతున్న పిల్లవాడు",
    quote: "“అమ్మ నాన్న ప్రతిరోజూ గొడవపడుతున్నారు”",
    chips: ["పిల్లల లేఖ", "పరిష్కార మార్గాలు"],
    fullStory: (
      <div className="space-y-6">
        <div className="bg-brand-warm/10 p-6 rounded-2xl border border-brand-warm/30 mb-8">
          <h2 className="text-2xl font-bold text-brand-primary mb-2 flex items-center gap-2">
            <span>🧒</span> కథ 3: బాధపడుతున్న పిల్లవాడు
          </h2>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-4">📖 కథ (విస్తరణ):</h3>
          <p>8 ఏళ్ల చిన్ని. ఆమెకు అమ్మా నాన్న గొడవలు భయం కలిగిస్తాయి. ఆమె ఎప్పుడూ వాళ్లు శాంతిగా ఉండాలని కోరుకుంటుంది. ఆమె చిన్ని చేతులతో తన డ్రాయింగ్ పుస్తకంలో ఇలా రాసింది:</p>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic text-lg text-muted-foreground my-6">
            "అమ్మా, నాన్నా... దయచేసి గొడవపడకండి. నేను మీ ఇద్దరినీ ప్రేమిస్తున్నాను."
          </blockquote>
          <p>ఆమె టీచర్ ఆ డ్రాయింగ్ చూసి, ఆమె తల్లిదండ్రులకు కౌన్సెలింగ్ సూచించారు. ఇప్పుడు ఆ కుటుంబం కౌన్సెలింగ్ తీసుకుంటోంది. వాళ్లు ఇంకా కొన్ని సమస్యలు ఉన్నా, పిల్లల ముందు గొడవ చేయడం మానేశారు.</p>
        </div>

        <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-2xl border border-green-200 dark:border-green-900 mt-8">
          <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
            <span>📌</span> పాఠం:
          </h3>
          <p className="font-medium">"పిల్లలు మీ మాటలను కాదు, మీ ప్రవర్తనను చూసి నేర్చుకుంటారు."</p>
        </div>
      </div>
    )
  },
  {
    id: "divorced-woman",
    emoji: "😔",
    img: cartoonWoman,
    title: "విడాకుల తర్వాత మహిళ",
    quote: "“ఇంకెవ్వరూ నన్ను పెళ్లి చేసుకోరు”",
    chips: ["విజయకథలు", "ఆత్మవిశ్వాసం పెంచే మార్గాలు"],
    fullStory: (
      <div className="space-y-6">
        <div className="bg-brand-warm/10 p-6 rounded-2xl border border-brand-warm/30 mb-8">
          <h2 className="text-2xl font-bold text-brand-primary mb-2 flex items-center gap-2">
            <span>😔</span> కథ 4: విడాకుల తర్వాత మహిళ
          </h2>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-4">📖 కథ:</h3>
          <p>రమ్యకు 30 ఏళ్లు. 3 సంవత్సరాల క్రితం విడాకులు తీసుకుంది. ఆమెకు ఒక చిన్న కూతురు ఉంది. ఆమె తిరిగి పెళ్లి చేసుకోవడానికి ప్రయత్నించినా, ఆమె "విడాకులు తీసుకున్న మహిళ" అన్న కారణంతో చాలా మంది తిరస్కరించారు.</p>
          <p>ఆమెకు ఆత్మవిశ్వాసం పూర్తిగా కోల్పోయింది. "నేను ఎవరికీ పనికిరాను" అని అనుకుంది.</p>
          <p>కానీ ఆమె కౌన్సెలింగ్ తీసుకున్న తర్వాత, తనలో ఉన్న బలాన్ని గుర్తించింది. ఆమె ఒక ప్రభుత్వ ఉద్యోగం సంపాదించింది, తన కూతురుకు మంచి చదువు చెబుతోంది. ఇప్పుడు ఆమెకు పెళ్లి కంటే, తన స్వంత జీవితం ముఖ్యం అనిపిస్తోంది. ఆమె చాలా సంతోషంగా ఉంది.</p>
        </div>

        <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-2xl border border-green-200 dark:border-green-900 mt-8">
          <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
            <span>📌</span> పాఠం:
          </h3>
          <p className="font-medium">"మీ విలువ మీ వివాహ స్థితిపై కాదు, మీరు ఎవరనే దానిపై ఉంటుంది."</p>
        </div>
      </div>
    )
  },
  {
    id: "single-father",
    emoji: "😞",
    img: cartoonFather,
    title: "ఒంటరి తండ్రి",
    quote: "“నా బిడ్డను చూడలేకపోతున్నాను”",
    chips: ["చట్టపరమైన మార్గాలు", "బంధం పెంచే మార్గాలు"],
    fullStory: (
      <div className="space-y-6">
        <div className="bg-brand-warm/10 p-6 rounded-2xl border border-brand-warm/30 mb-8">
          <h2 className="text-2xl font-bold text-brand-primary mb-2 flex items-center gap-2">
            <span>😞</span> కథ 5: ఒంటరి తండ్రి
          </h2>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-4">📖 కథ:</h3>
          <p>రాజు విడాకుల తర్వాత తన 6 ఏళ్ల కొడుకును చూడలేకపోతున్నాడు. కోర్టు ఆదేశాల ప్రకారం, అతను నెలకు ఒకసారి మాత్రమే తన కొడుకును చూడగలడు. అతను ప్రతి రోజు తన కొడుకు ఫోటో చూసుకుంటూ ఏడుస్తాడు.</p>
          <p>అతను ఒక లాయర్ సహాయంతో తన విజిటేషన్ హక్కులను పెంచుకోవడానికి ప్రయత్నించాడు. ఇప్పుడు అతను ప్రతి వారం తన కొడుకును కలుస్తున్నాడు. అతను తన కొడుకుకు మంచి తండ్రిగా ఉండటానికి ప్రయత్నిస్తున్నాడు.</p>
        </div>

        <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-2xl border border-green-200 dark:border-green-900 mt-8">
          <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
            <span>📌</span> పాఠం:
          </h3>
          <p className="font-medium">"ఒక తండ్రికి తన బిడ్డతో ఉండే బంధం అతి ముఖ్యమైనది."</p>
        </div>
      </div>
    )
  },
  {
    id: "teenager",
    emoji: "😢",
    img: cartoonTeen,
    title: "టీనేజర్",
    quote: "“నాన్న నా స్కూల్ మార్చేశారు”",
    chips: ["పిల్లల హక్కులు", "సంతులనం కోసం చిట్కాలు"],
    fullStory: (
      <div className="space-y-6">
        <div className="bg-brand-warm/10 p-6 rounded-2xl border border-brand-warm/30 mb-8">
          <h2 className="text-2xl font-bold text-brand-primary mb-2 flex items-center gap-2">
            <span>😢</span> కథ 6: టీనేజర్
          </h2>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-4">📖 కథ:</h3>
          <p>14 ఏళ్ల అర్జున్. అతని తండ్రి ఉద్యోగం కారణంగా ఊరు మార్చాల్సి వచ్చింది. అతను తన స్నేహితులు, టీచర్లు, అలవాటైన స్కూల్ను వదిలిపెట్టాల్సి వచ్చింది. కొత్త స్కూల్లో అతనికి ఎవరూ తోడు లేరు. అతను చాలా ఒంటరిగా ఫీలవుతున్నాడు.</p>
          <p>అతను తన తండ్రితో ఈ విషయం మాట్లాడాడు. అతని తండ్రి అతని భావాలను అర్థం చేసుకుని, అతనికి ఒక కొత్త హాబీ (గిటార్ నేర్చుకోవడం) ప్రారంభించాడు. ఇప్పుడు అర్జున్ కొత్త స్నేహితులను సంపాదించుకుంటున్నాడు మరియు ఎక్కువ సంతోషంగా ఉన్నాడు.</p>
        </div>

        <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-2xl border border-green-200 dark:border-green-900 mt-8">
          <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
            <span>📌</span> పాఠం:
          </h3>
          <p className="font-medium">"మీ పిల్లల భావాలను తీవ్రంగా తీసుకోండి. వారి బాధ మీకు చిన్నదిగా అనిపించినా, వారికి అది పెద్దది."</p>
        </div>
      </div>
    )
  },
  {
    id: "vasus-story",
    emoji: "💕",
    img: cartoonTeen, // Using teen cartoon as placeholder for Vasu, can be updated later if a specific image exists
    title: "వాసు ప్రేమకథ (పూర్తి వివరణ)",
    quote: "“నా మొదటి ప్రేమ – ఒక హాల్ టికెట్లో మొదలైన కథ”",
    chips: ["యదార్థ సంఘటన", "జీవిత పాఠం"],
    fullStory: (
      <div className="space-y-6">
        <div className="bg-brand-warm/10 p-6 rounded-2xl border border-brand-warm/30 mb-8">
          <h2 className="text-2xl font-bold text-brand-primary mb-2 flex items-center gap-2">
            <span>💕</span> కథ 7: వాసు ప్రేమకథ (పూర్తి వివరణ)
          </h2>
          <p className="text-xl italic font-semibold">"నా మొదటి ప్రేమ – ఒక హాల్ టికెట్లో మొదలైన కథ"</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-4">📖 కథ (విస్తరణ):</h3>
          <p>ఆంధ్రప్రదేశ్‌లోని ఒక చిన్న పల్లెటూరు రామాపురం. అక్కడ ఒక చిన్న కిరాణా దుకాణం ఉంది. ఆ దుకాణంలో పనిచేసే అబ్బాయి పేరు వాసు. అతనికి అప్పుడు వయసు 12 సంవత్సరాలు. చాలా చిన్న వయసులోనే తన తండ్రిని కోల్పోయిన వాసు, అమ్మ మరియు చెల్లెలితో కలిసి జీవిస్తున్నాడు. కుటుంబ పోషణ కోసం చదువుకు అడ్డంగా దుకాణం చూసుకోవాల్సి వచ్చింది.</p>
          <p>అతని దుకాణానికి కాస్త దూరంలో ఒక అమ్మాయి ఉండేది. ఆమె పేరు తనకు తెలియదు కానీ ఆమె ముఖం చూస్తే చాలు, అతని రోజంతా అలా కళకళలాడేది.</p>
          <p>ఆ అమ్మాయి ప్రతి రోజు దుకాణానికి వచ్చేది — ఏదో ఒక సామాను కోసం. కానీ వాసుకు అదే కావాల్సినంత. ఆమె చిరునవ్వు, ఆమె కళ్ళలోని మెరుపు, ఆమె జడలో పూలు — ప్రతీదీ అతనికి కవిత్వంలా అనిపించేది.</p>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic text-lg text-muted-foreground my-4">
            "ఆ అమ్మాయి నా దుకాణంలోకి అడుగుపెట్టిన ప్రతిసారీ, నా గుండె వేగం పెరిగిపోయేది. ఒక్క మాట మాట్లాడాలని ఎంతో అనిపించేది కానీ... మాటలే రావు."
          </blockquote>
          <p>వారిద్దరూ ఒకే స్కూల్లో చదివేవారు. కానీ ఆమె అతని కంటే ఒక క్లాస్ ఎక్కువ చదివేది. అతను అలా చూస్తూ, కలలు కంటూ, రోజులు గడిపేస్తున్నాడు. అతని మనసులో ఆమె ఒక కలలా నిలిచిపోయింది. "ఒకవేళ ఆమె నా భార్య అయితే?" అని అతను వేలసార్లు అనుకున్నాడు. ఆమె అంటే ఇష్టం అని ఎప్పుడూ చెప్పలేకపోయాడు. ఎందుకంటే అతను ఒక చిన్న దుకాణం యజమాని, ఆమె బాగా చదువుకునే అమ్మాయి.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2"><span>🌸</span> కాలేజ్ రోజులు – ఒక అజ్ఞాత ప్రేమ</h3>
          <p>ఆమె పదవ తరగతి పూర్తి చేసి, దూరంలో ఉన్న కళాశాలలో చేరింది. వాసు మనసులో ఆమె జ్ఞాపకాలు ఇంకా తాజాగా ఉన్నాయి. ఆమెను మళ్లీ చూడాలనే కోరికతో, ఒక సంవత్సరం తర్వాత అతను అదే కళాశాలలో చేరాడు.</p>
          <p>ఆ కళాశాలలో అతను ఆమెను మళ్లీ చూశాడు. ఆమె అంతకంటే మరింత అందంగా మారింది. కానీ ఇప్పటికీ అతను ఆమెతో మాట్లాడలేకపోయాడు. అతనికి భయం — ఆమె నేను ఎవరో కూడా గుర్తుపెట్టుకోలేదేమో? ఆమె దగ్గర ఏదైనా మాట్లాడితే నా భావన బయటపడిపోతుందేమో?</p>
          <p>ఒక సంవత్సరం పూర్తిగా ఆమెను చూస్తూ, ఆమెలోని ప్రతి కదలికనూ గమనిస్తూ, కానీ ఒక్క మాట కూడా మాట్లాడకుండా గడిపాడు. అతను ఆమెతో ఏదైనా కారణంతో మాట్లాడాలనుకున్నాడు కానీ ఎలాగో తెలియలేదు. అతని ప్రేమ అజ్ఞాతంగానే కొనసాగింది.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2"><span>📸</span> ఆ హాల్ టికెట్ – ఎప్పటికీ మర్చిపోలేని క్షణం</h3>
          <p>ఒక రోజు, ఫైనల్ పరీక్షల సమయంలో, హాల్ టికెట్లు జారీ చేశారు. అతనికి ఆమె హాల్ టికెట్ చూడాలని ఎంతో కుతూహలం. ఒక రోజు, ఆమె టికెట్ టేబుల్ మీద పడి ఉండడం చూసాడు. అతను దానిని కాసేపు చూసి, ఆమె పేరు చదివాడు. ఆమె పేరు ఎంత అందంగా ఉందో! అతని గుండెలో ఒక సంతోషం — ఇప్పుడు ఆమె పేరు తెలుసు!</p>
          <p>ఆ టికెట్లోని ఆమె ఫోటో అతను ఎప్పటికీ మర్చిపోలేదు. ఆ ఫోటో అతని మనసులో శాశ్వతంగా నిలిచిపోయింది. ఆ కాలంలో స్మార్ట్ ఫోన్లు లేవు, కెమెరా కూడా లేదు. అతనికి ఆమె ఫోటో తీయాలనిపించింది కానీ వీలుకాలేదు. అతను ఆ ఫోటోను తన మనసు కెమెరాలో బంధించుకున్నాడు.</p>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic text-lg text-muted-foreground my-4">
            "ఆ ఒక్క ఫోటోనే నేను మళ్లీ మళ్లీ చూసుకుంటూ ఉండేవాడిని. ఆ ఫోటో కన్నా అందమైనది ఈ ప్రపంచంలో ఏదీ లేదు అని అనుకునేవాడిని."
          </blockquote>
        </div>

        <div>
          <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2"><span>💔</span> వేరుపడటం – ఒక కల ముగింపు</h3>
          <p>కళాశాల పూర్తయ్యే సమయానికి, ఆమె కుటుంబం మరో ఊరికి మారిపోయింది. వాసుకు ఆమె కొత్త చిరునామా తెలియదు. అతను చాలా ప్రయత్నించాడు కానీ ఆమె జాడ దొరకలేదు.</p>
          <p>5 సంవత్సరాల తర్వాత, అతనికి ఆమె పెళ్లయిపోయిందని తెలిసింది. అతను చాలా బాధపడ్డాడు. అతని మనసులో ఆమె మాత్రమే. ఆమె తర్వాత ఎవరినీ అతను ప్రేమించలేదు. అతను ఆమెతో మాట్లాడకపోవడం, తన ప్రేమను వ్యక్తపరచకపోవడం తన జీవితంలో అతిపెద్ద తప్పిదం అని అతను అనుకున్నాడు.</p>
        </div>

        <div className="bg-brand-warm/5 p-6 rounded-2xl border border-brand-warm/10">
          <h3 className="text-xl font-bold text-brand-primary mb-3 flex items-center gap-2"><span>🫂</span> వాసు మనసులోని మాట</h3>
          <p className="italic text-muted-foreground">"ఆ అమ్మాయి కోసమే నా ప్రతి కల. నేను ఆమెను ఒక్కసారి కలుసుకుని, 'నువ్వంటే నాకు చాలా ఇష్టం' అని చెప్పలేకపోయాను. ఇప్పుడు ఆమె వేరొకరి భార్య. కానీ ఆమె ముఖం, ఆమె చిరునవ్వు, ఆ హాల్ టికెట్ ఫోటో... ఇవన్నీ నా గుండెలోనే ఉన్నాయి. నేను ఆమెతో జీవించలేకపోయినా, ఆమెను ప్రేమించిన జ్ఞాపకాలు మాత్రం నా జీవితాన్ని అందంగా మార్చాయి."</p>
        </div>

        <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-2xl border border-green-200 dark:border-green-900 mt-8">
          <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
            <span>🌟</span> వాసు కథ నుండి మనం నేర్చుకోవలసిన పాఠాలు:
          </h3>
          <ul className="space-y-3 list-none text-green-900 dark:text-green-100">
            <li>💬 <strong>ప్రేమను వ్యక్తపరచండి:</strong> మీరు ఎవరినైనా ప్రేమిస్తే, ఆ మాట చెప్పండి. మౌనంగా ఉండడం వల్ల జీవితాంతం బాధపడాల్సి వస్తుంది.</li>
            <li>⏰ <strong>సమయం వృథా చేయవద్దు:</strong> వేరే వారికోసం ఎదురుచూస్తూ మీ జీవితాన్ని ఆపుకోకండి.</li>
            <li>🤗 <strong>నిరాశను అంగీకరించండి:</strong> మీ ప్రేమ విఫలమైతే, అది మీ విలువను తగ్గించదు.</li>
            <li>🌱 <strong>ముందుకు సాగండి:</strong> మీ జీవితం అంతా ఒక వ్యక్తి మీద ఆధారపడి ఉండదు. మీరు ప్రేమించిన జ్ఞాపకాలు ఎప్పటికీ మీతోనే ఉంటాయి.</li>
          </ul>
        </div>
      </div>
    )
  }
];
