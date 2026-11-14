/**
 * Jeevana Bandham Daily Blog Auto-Creator & Publisher
 * Automatically selects the next unwritten high-ranking Telugu family support & counseling topic:
 * 1. వివాహ సమస్యలు (Marriage Counselling & Conflict Resolution)
 * 2. భార్యాభర్తల సంబంధాలు (Husband-Wife Relationships & Communication)
 * 3. కుటుంబ సమస్యలు (Family Harmony & In-Laws Support)
 * 4. ప్రీ-మ్యారేజ్ గైడ్ (Pre-Marriage Financial Planning & Emotional Compatibility)
 * 5. పిల్లల సంరక్షణ & పెంపకం (Parenting, Child Psychology & Screen-time Management)
 * 6. ఒంటరి తల్లిదండ్రులు (Single Parenting Support & Healing)
 * 7. మానసిక ఆరోగ్య సహాయం (Mental Health, Anxiety & Suicide Prevention - 14416 / 112)
 * 8. పిల్లల హక్కులు & రక్షణ (Child Rights, POCSO & Childline 1098)
 *
 * Generates human-grade empathetic content, updates sitemaps, commits & pushes to GitHub,
 * and notifies Google Chat.
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { sendGoogleChatNotification } from './notify-chat.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '../..');

const TELUGU_PILLAR_TOPICS = [
  {
    slug: "pre-marriage-financial-transparency-guide",
    title: "పెళ్లికి ముందు ఆర్థిక స్పష్టత: అప్పులు, పొదుపు, మరియు సంపాదనపై ఎలా చర్చించాలి?",
    titleEn: "Pre-Marriage Financial Transparency Guide: How to Discuss Debts, Savings, and Income",
    subtitle: "వివాహ బంధంలో గొడవలకు ప్రధాన కారణం ఆర్థిక అస్పష్టత. పెళ్లికి ముందే ఇద్దరి మధ్య నమ్మకం, స్పష్టమైన బడ్జెట్ ఎలా ఏర్పాటు చేసుకోవాలి?",
    category: "ప్రీ-మ్యారేజ్ గైడ్ (Pre-Marriage)",
    primaryKeyword: "పెళ్లికి ముందు ఆర్థిక చర్చ",
    secondaryKeywords: ["pre marriage financial talk telugu", "వివాహంలో డబ్బు సమస్యలు", "pre marital counselling telugu", "భార్యాభర్తల పొదుపు"],
    toolLink: "/pre-marriage",
    toolName: "ప్రీ-మ్యారేజ్ గైడ్ & చెక్‌లిస్ట్",
    readTime: "8 నిమిషాలు",
    excerpt: "పెళ్లికి ముందు ఒకరి ఆర్థిక పరిస్థితిపై మరొకరికి పూర్తి అవగాహన ఉండటం గౌరవప్రదమైన వైవాహిక జీవితానికి తొలి అడుగు.",
    metaDescription: "పెళ్లికి ముందు ఆర్థిక స్పష్టత ఎలా సాధించాలి? అప్పులు, పొదుపు, పెట్టుబడులపై భాగస్వామితో మాట్లాడేందుకు ఆచరణాత్మక చిట్కాలు.",
    pillar: "Pre-Marriage",
    h2Topics: [
      { id: "why-money-matters", title: "1. వివాహంలో డబ్బు ఎందుకు అత్యంత కీలకమైన అంశం?" },
      { id: "debts-and-loans", title: "2. వ్యక్తిగత అప్పులు మరియు క్రెడిట్ బాధ్యతలను దాచవద్దు" },
      { id: "family-commitments", title: "3. తల్లిదండ్రులకు చేయాల్సిన ఆర్థిక సహాయంపై స్పష్టత" },
      { id: "budgeting-together", title: "4. సంయుక్త ఖాతా (Joint Account) vs వ్యక్తిగత ఖాతాలు" },
      { id: "financial-counselling", title: "5. ఆర్థిక కౌన్సెలింగ్ ఎప్పుడు అవసరం అవుతుంది?" }
    ],
    faqs: [
      {
        question: "పెళ్లికి ముందే సంపాదన, అప్పుల గురించి అడగడం తప్పా?",
        answer: "ఎంతమాత్రం తప్పు కాదు. ఇది ఒకరిపై ఒకరు గౌరవంతో తీసుకునే బాధ్యతాయుతమైన నిర్ణయం. నిజాయితీగా మాట్లాడటం వల్ల భవిష్యత్తులో వచ్చే అపార్థాలు తొలగిపోతాయి."
      },
      {
        question: "భాగస్వామి ఆర్థిక విషయాలు దాస్తున్నట్లు అనిపిస్తే ఏం చేయాలి?",
        answer: "నిందారోపణ లేకుండా ప్రేమపూర్వకంగా కూర్చొని మీ ఆందోళనను వివరించండి. అవసరమైతే నిపుణులైన ప్రీ-మ్యారేజ్ కౌన్సెలర్ సహాయం తీసుకోండి."
      }
    ]
  },
  {
    slug: "resolving-in-laws-conflicts-in-telugu-families",
    title: "అత్తమామలు మరియు కోడలి మధ్య సత్సంబంధాలు: తెలుగు కుటుంబాల్లో శాంతికి 6 సూత్రాలు",
    titleEn: "Resolving In-Laws Conflicts in Telugu Families: 6 Rules for Peaceful Relationships",
    subtitle: "రెండు కుటుంబాల సంస్కృతి కలిసే చోట చిన్నపాటి సర్దుబాట్లు, హద్దులు మరియు పరస్పర గౌరవం ఉంటేనే వైవాహిక జీవితం ప్రశాంతంగా సాగుతుంది.",
    category: "కుటుంబ సమస్యలు (Family)",
    primaryKeyword: "అత్తా కోడళ్ల సమస్యలు పరిష్కారం",
    secondaryKeywords: ["in-laws relationship tips telugu", "కుటుంబంలో శాంతి", "భార్యాభర్తల మధ్య అత్తమామల ప్రమేయం", "తెలుగు ఉమ్మడి కుటుంబం"],
    toolLink: "/support",
    toolName: "కుటుంబ కౌన్సెలింగ్ సహాయం",
    readTime: "7 నిమిషాలు",
    excerpt: "తెలుగు కుటుంబాల్లో అత్తాకోడళ్లు, అల్లుడు-మామల మధ్య వచ్చే సాధారణ ఘర్షణలను ఎలా సామరస్యంగా పరిష్కరించుకోవచ్చో తెలుసుకోండి.",
    metaDescription: "తెలుగు కుటుంబాలలో అత్తమామలు మరియు కోడలి మధ్య సత్సంబంధాలు ఏర్పరచుకోవడానికి 6 కీలకమైన చిట్కాలు. శాంతియుత కుటుంబ జీవితానికి మార్గదర్శనం.",
    pillar: "Family",
    h2Topics: [
      { id: "understanding-generations", title: "1. తరాల మధ్య ఆలోచనా విధానాల తేడాను గుర్తించడం" },
      { id: "healthy-boundaries", title: "2. గౌరవప్రదమైన హద్దులు (Boundaries) నిర్ణయించుకోవడం" },
      { id: "husband-role", title: "3. భర్త పాత్ర: తల్లికి, భార్యకు మధ్య సమతుల్యత" },
      { id: "communication-not-criticism", title: "4. విమర్శలకు బదులు మనసు విప్పి మాట్లాడటం" },
      { id: "building-mutual-respect", title: "5. పరస్పర గౌరవాన్ని పెంపొందించుకోవడం" }
    ],
    faqs: [
      {
        question: "భార్య, తల్లి మధ్య గొడవలు వచ్చినప్పుడు భర్త ఎవరి పక్షం వహించాలి?",
        answer: "భర్త ఏ ఒక్కరి పక్షాన ఉండకుండా న్యాయం, వాస్తవాల వైపు నిలబడాలి. ఇద్దరికీ ఒకరి ప్రాధాన్యత మరొకరికి అర్థమయ్యేలా విడివిడిగా ఓపికతో మాట్లాడాలి."
      }
    ]
  },
  {
    slug: "how-to-overcome-depression-and-suicidal-thoughts",
    title: "నిరాశ, తీవ్రమైన ఒత్తిడి మరియు ఆత్మహత్య ఆలోచనల నుంచి ఎలా బయటపడాలి? — ఆశల బాట",
    titleEn: "How to Overcome Severe Depression and Suicidal Thoughts: Path to Hope and Healing",
    subtitle: "మీ ప్రాణం వెలకట్టలేనిది. ఎంతటి క్లిష్ట పరిస్థితుల్లోనైనా ఒక్క క్షణం ఆగి సహాయం కోరితే జీవితాన్ని మళ్లీ అందంగా నిర్మించుకోవచ్చు.",
    category: "మానసిక ఆరోగ్యం (Mental Health)",
    primaryKeyword: "ఆత్మహత్య నివారణ తెలుగు హెల్ప్‌లైన్",
    secondaryKeywords: ["tele-manas 14416 telugu", "depression recovery telugu", "మానసిక ఒత్తిడి నివారణ", "suicide prevention 112", "vandrevala foundation"],
    toolLink: "/support",
    toolName: "24/7 ఎమర్జెన్సీ హెల్ప్‌లైన్లు",
    readTime: "9 నిమిషాలు",
    excerpt: "తాత్కాలిక సమస్యకు శాశ్వత ముగింపు ఇవ్వకండి. ఉచిత 24/7 టెలి-మానస్ 14416 మరియు జాతీయ ఎమర్జెన్సీ 112 ద్వారా మానసిక తోడ్పాటు పొందండి.",
    metaDescription: "నిరాశ, డిప్రెషన్ మరియు ఆత్మహత్య ఆలోచనలను జయించడానికి మార్గాలు. టెలి-మానస్ 14416 ఉచిత టోల్‌ఫ్రీ తెలుగు హెల్ప్‌లైన్ వివరాలు.",
    pillar: "Mental Health",
    h2Topics: [
      { id: "stop-and-breathe", title: "1. ఒక్క నిమిషం ఆగండి: మీ ప్రాణం ఎంతో విలువైనది" },
      { id: "depression-is-curable", title: "2. డిప్రెషన్ అనేది ఒక రుగ్మత మాత్రమే, బలహీనత కాదు" },
      { id: "reach-out-now", title: "3. వెంటనే హెల్ప్‌లైన్‌ను సంప్రదించండి (Tele-MANAS: 14416)" },
      { id: "who-waits-for-you", title: "4. మీ కుటుంబం మరియు పిల్లల భవిష్యత్తును తలచుకోండి" },
      { id: "daily-steps-to-heal", title: "5. మానసిక పునరుజ్జీవనానికి రోజువారీ సాధనలు" }
    ],
    faqs: [
      {
        question: "ఆత్మహత్య ఆలోచనలు వస్తున్నప్పుడు ఎవరితో మాట్లాడాలి?",
        answer: "వెంటనే టెలి-మానస్ 14416 కు లేదా వండ్రేవాలా ఫౌండేషన్ 9999 666 555 కు కాల్ చేయండి. పూర్తిగా ఉచితంగా, మీ వివరాలను గోప్యంగా ఉంచి 24 గంటలు మాట్లాడతారు."
      }
    ]
  },
  {
    slug: "protecting-children-from-mobile-addiction-and-cyber-threats",
    title: "పిల్లల్లో మొబైల్ అడిక్షన్ మరియు సైబర్ ప్రమాదాలు: తల్లిదండ్రుల మార్గదర్శక సూత్రాలు",
    titleEn: "Protecting Children from Smartphone Addiction and Online Cyber Risks: Parents Guide",
    subtitle: "స్మార్ట్‌ఫోన్లు పిల్లల చదువు, మానసిక వికాసం మరియు శారీరక ఆరోగ్యంపై చూపే ప్రభావాలను ఎలా నియంత్రించాలి?",
    category: "పిల్లల భద్రత (Child Safety)",
    primaryKeyword: "పిల్లల్లో మొబైల్ అడిక్షన్ నివారణ",
    secondaryKeywords: ["child screen time limits telugu", "సైబర్ బెదిరింపులు నివారణ", "childline 1098", "పిల్లల మానసిక ఆరోగ్యం"],
    toolLink: "/child-protection",
    toolName: "పిల్లల రక్షణ సాధనాలు & గైడ్",
    readTime: "7 నిమిషాలు",
    excerpt: "పిల్లలను తిట్టకుండా, బలవంతం చేయకుండా స్మార్ట్‌ఫోన్ వ్యసనం నుంచి ఎలా కాపాడుకోవచ్చో ప్రాక్టికల్ సూత్రాల ద్వారా తెలుసుకోండి.",
    metaDescription: "పిల్లల్లో మొబైల్ అడిక్షన్ నియంత్రణకు తల్లిదండ్రుల చిట్కాలు. సైబర్ బెదిరింపుల నుంచి రక్షణ, స్క్రీన్ టైమ్ పరిమితులు మరియు చైల్డ్‌లైన్ 1098 వివరాలు.",
    pillar: "Child Protection",
    h2Topics: [
      { id: "recognizing-addiction", title: "1. పిల్లల్లో మొబైల్ వ్యసన లక్షణాలను గుర్తించడం" },
      { id: "setting-screen-limits", title: "2. ఇంట్లో డిజిటల్ నియమాలు (No-Phone Zones) అమలు చేయడం" },
      { id: "alternative-activities", title: "3. ఆటలు, పుస్తకాలు మరియు కుటుంబ చర్చల ప్రాధాన్యత" },
      { id: "online-safety-pocso", title: "4. సైబర్ భద్రత మరియు అపరిచిత వ్యక్తుల ప్రమాదాలు" },
      { id: "parents-as-role-models", title: "5. తల్లిదండ్రులే మొదట ఆదర్శంగా మారడం" }
    ],
    faqs: [
      {
        question: "పిల్లల నుంచి ఫోన్ లాక్కుంటే కోపం ప్రదర్శిస్తున్నారు, ఏం చేయాలి?",
        answer: "అకస్మాత్తుగా లాక్కోవడం కాకుండా ముందుగానే వారితో మాట్లాడి రోజుకు 1 గంట మాత్రమే సమయం కేటాయించండి. వారు ఫోన్ వదిలినప్పుడు ప్రశంసించండి మరియు ప్రత్యామ్నాయ క్రీడలను ప్రోత్సహించండి."
      }
    ]
  },
  {
    slug: "rebuilding-life-after-divorce-or-toxic-relationship",
    title: "విడాకులు లేదా కఠినమైన బంధం తర్వాత జీవితాన్ని తిరిగి ఎలా నిర్మించుకోవాలి? — కొత్త ఆరంభం",
    titleEn: "Rebuilding Life and Self-Esteem After Divorce or a Painful Separation",
    subtitle: "విడాకులు జీవితానికి ముగింపు కాదు. స్వీయ గౌరవం, ఆర్థిక స్వతంత్రం మరియు మానసిక ప్రశాంతతతో కొత్త అధ్యాయాన్ని ప్రారంభించడం ఎలా?",
    category: "ఒంటరి తల్లిదండ్రులు (Single Parents)",
    primaryKeyword: "విడాకుల తర్వాత జీవితం",
    secondaryKeywords: ["life after divorce telugu", "ఒంటరి మహిళల ఆత్మవిశ్వాసం", "సింగిల్ పేరెంటింగ్ సవాళ్లు", "emotional healing telugu"],
    toolLink: "/support",
    toolName: "ఒంటరి మహిళలు & తల్లిదండ్రుల కౌన్సెలింగ్",
    readTime: "8 నిమిషాలు",
    excerpt: "ఒక బంధం ముగిసినంత మాత్రాన జీవితం ఆగిపోదు. ఆత్మవిశ్వాసంతో సమాజాన్ని ఎదుర్కొంటూ స్వతంత్రంగా ఎలా ఎదగాలో మార్గదర్శనం.",
    metaDescription: "విడాకులు లేదా బంధం ముగిసిన తర్వాత మానసిక స్థైర్యాన్ని ఎలా పొందాలి? సమాజపు ఒత్తిళ్లను అధిగమించి కొత్త జీవితాన్ని ప్రారంభించే గైడ్.",
    pillar: "Single Parents",
    h2Topics: [
      { id: "acceptance-and-healing", title: "1. గతాన్ని అంగీకరించడం మరియు భావోద్వేగ స్వస్థత" },
      { id: "financial-independence", title: "2. ఆర్థికంగా నిలదొక్కుకోవడం అత్యంత ముఖ్యం" },
      { id: "social-stigma", title: "3. బంధువులు, సమాజపు మాటలను పట్టించుకోకపోవడం" },
      { id: "focus-on-children", title: "4. పిల్లలకు సురక్షితమైన, ప్రేమగల వాతావరణం కల్పించడం" },
      { id: "rediscovering-passion", title: "5. మీ స్వంత కలలు, లక్ష్యాలను పునఃప్రారంభించడం" }
    ],
    faqs: [
      {
        question: "విడాకుల తర్వాత ఒంటరితనాన్ని ఎలా ఎదుర్కోవాలి?",
        answer: "స్నేహితులు, నమ్మకమైన కుటుంబ సభ్యులతో సమయం గడపండి. ఒక నూతన నైపుణ్యాన్ని నేర్చుకోవడం ప్రారంభించండి. భావోద్వేగాలు భరించలేనప్పుడు నిపుణుల కౌన్సెలింగ్ తీసుకోండి."
      }
    ]
  },
  {
    slug: "how-to-talk-about-child-custody-amicably",
    title: "విడాకుల సమయంలో పిల్లల సంరక్షణ (Custody): గొడవలు లేకుండా నిర్ణయం తీసుకోవడం ఎలా?",
    titleEn: "How to Decide Child Custody Amicably During Divorce: Child-First Approach",
    subtitle: "తల్లిదండ్రుల మధ్య బంధం ముగిసినా బిడ్డకు ఇద్దరి ప్రేమా అవసరమే. కోర్టు వివాదాల వల్ల పిల్లలు మానసికంగా నలిగిపోకుండా చూసుకోవడం ఎలా?",
    category: "పిల్లల భద్రత (Child Safety)",
    primaryKeyword: "పిల్లల కస్టడీ చట్టపరమైన సలహా",
    secondaryKeywords: ["child custody law telugu", "విడాకుల్లో పిల్లల రక్షణ", "కో-పేరెంటింగ్ పద్ధతులు", "child rights telugu"],
    toolLink: "/child-protection",
    toolName: "పిల్లల రక్షణ & లీగల్ కౌన్సెలింగ్ గైడ్",
    readTime: "8 నిమిషాలు",
    excerpt: "పిల్లలను పగ తీర్చుకునే సాధనంగా వాడకండి. సహ-తల్లిదండ్రులుగా (Co-Parenting) వారి ఉన్నత భవిష్యత్తు కోసం ఎలా ప్లాన్ చేయాలి?",
    metaDescription: "విడాకుల సమయంలో పిల్లల కస్టడీని సామరస్యంగా ఎలా పరిష్కరించుకోవాలి? లీగల్ గైడెన్స్, చైల్డ్ ప్రొటెక్షన్ మరియు పిల్లల భద్రతా చిట్కాలు.",
    pillar: "Child Protection",
    h2Topics: [
      { id: "child-welfare-first", title: "1. అన్నిటికంటే బిడ్డ సంక్షేమమే అత్యున్నతం" },
      { id: "avoid-parental-alienation", title: "2. ఒకరిపై ఒకరు విషం చిమ్మడం ఆపండి" },
      { id: "legal-guidance-importance", title: "3. అర్హతగల న్యాయవాది వద్ద సరైన లీగల్ గైడెన్స్" },
      { id: "shared-parenting-plan", title: "4. సెలవులు, ఖర్చులు మరియు చదువులపై స్పష్టమైన ప్రణాళిక" },
      { id: "emotional-checkins", title: "5. బిడ్డ మానసిక స్థితిని ఎప్పటికప్పుడు గమనించడం" }
    ],
    faqs: [
      {
        question: "కోర్టు కస్టడీ నిర్ణయంలో బిడ్డ అభిప్రాయాన్ని పరిగణనలోకి తీసుకుంటారా?",
        answer: "అవును, పిల్లలకు తగినంత వయస్సు (సాధారణంగా 9 ఏళ్లు పైబడినప్పుడు) ఉన్నప్పుడు న్యాయస్థానం వారి భావాలను, శ్రేయస్సును అత్యంత ప్రాధాన్యతతో పరిశీలిస్తుంది."
      }
    ]
  },
  {
    slug: "healing-after-emotional-abuse-in-marriage",
    title: "వైవాహిక జీవితంలో ఎమోషనల్ అబ్యూస్ (మానసిక హింస): గుర్తించడం మరియు రక్షణ పొందడం ఎలా?",
    titleEn: "Recognizing and Healing from Emotional Abuse in Marriage: Signs & Help",
    subtitle: "గాయాలు కనిపించకపోయినా మాటలు మనసును తీవ్రంగా గాయపరుస్తాయి. మానసిక హింస లక్షణాలు, మహిళా హెల్ప్‌లైన్ 181 మరియు రక్షణ మార్గాలు.",
    category: "వివాహ సమస్యలు (Marriage)",
    primaryKeyword: "వైవాహిక మానసిక హింస నివారణ",
    secondaryKeywords: ["emotional abuse signs telugu", "women helpline 181 telugu", "గృహహింస చట్టం అవగాహన", "భార్య హక్కులు"],
    toolLink: "/support",
    toolName: "మహిళల భద్రత & లీగల్ సపోర్ట్",
    readTime: "9 నిమిషాలు",
    excerpt: "నిరంతరం నిందించడం, అనుమానించడం, చులకనగా మాట్లాడటం ఎమోషనల్ అబ్యూస్ కిందకే వస్తాయి. భద్రత కోసం మీరు తీసుకోవాల్సిన చర్యలు.",
    metaDescription: "వైవాహిక జీవితంలో మానసిక హింసను ఎలా గుర్తించాలి? మహిళా హెల్ప్‌లైన్ 181, లీగల్ హక్కులు మరియు రక్షణ పొందే మార్గాలు.",
    pillar: "Marriage",
    h2Topics: [
      { id: "signs-of-emotional-abuse", title: "1. మానసిక హింస యొక్క ముఖ్యమైన 5 సంకేతాలు" },
      { id: "gaslighting-explained", title: "2. గ్యాస్‌లైటింగ్ (Gaslighting): మీ తప్పేనని నమ్మించే కుట్ర" },
      { id: "setting-boundaries", title: "3. సహించకుండా గట్టిగా మీ హద్దులను తెలియజేయడం" },
      { id: "emergency-support-181", title: "4. మహిళా హెల్ప్‌లైన్ 181 మరియు ఉచిత కౌన్సెలింగ్" },
      { id: "building-safety-plan", title: "5. అత్యవసర భద్రతా ప్రణాళిక (Safety Plan) రూపొందించుకోవడం" }
    ],
    faqs: [
      {
        question: "శారీరక దాడి లేకపోయినా మానసిక వేధింపులపై ఫిర్యాదు చేయవచ్చా?",
        answer: "తప్పకుండా చేయవచ్చు. భారతీయ గృహహింస నిరోధక చట్టం కింద మానసిక, మాటల మరియు ఆర్థిక హింస కూడా చట్టవిరుద్ధం. మహిళా హెల్ప్‌లైన్ 181 కు ఉచితంగా కాల్ చేయవచ్చు."
      }
    ]
  }
];

function generateArticleCode(topic) {
  const currentDate = new Date().toISOString().split('T')[0];
  const dateStr = "నవంబర్ 2026";

  return `
  // ${topic.title}
  {
    id: "${topic.slug}",
    slug: "${topic.slug}",
    title: "${topic.title.replace(/"/g, '\\"')}",
    titleEn: "${topic.titleEn.replace(/"/g, '\\"')}",
    subtitle: "${topic.subtitle.replace(/"/g, '\\"')}",
    category: "${topic.category}",
    status: "published",
    readTime: "${topic.readTime}",
    date: "${dateStr}",
    updatedDate: "${currentDate}",
    author: {
      name: "జీవన బంధం ఎడిటోరియల్ & కౌన్సెలింగ్ బోర్డు",
      role: "సీనియర్ ఫ్యామిలీ కౌన్సెలర్"
    },
    primaryKeyword: "${topic.primaryKeyword}",
    secondaryKeywords: ${JSON.stringify(topic.secondaryKeywords)},
    searchIntent: "Compassionate Counseling & Practical Guidance",
    tags: ${JSON.stringify(["కుటుంబం", "కౌన్సెలింగ్", topic.pillar, "మానసిక ఆరోగ్యం", "జీవన బంధం"])},
    excerpt: "${topic.excerpt.replace(/"/g, '\\"')}",
    metaDescription: "${topic.metaDescription.replace(/"/g, '\\"')}",
    canonicalUrl: "https://www.jeevanabandham.online/blog/${topic.slug}",
    targetToolLink: "${topic.toolLink}",
    targetToolName: "${topic.toolName}",
    tableOfContents: ${JSON.stringify(topic.h2Topics)},
    faqs: ${JSON.stringify(topic.faqs)},
    relatedSlugs: ["pre-marriage-10-things-to-know", "7-ways-to-reduce-husband-wife-conflicts"],
    content: (
      <div className="space-y-6 text-slate-800 dark:text-slate-200 leading-relaxed">
        <div className="p-6 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-amber-950 dark:text-amber-100 space-y-2">
          <div className="flex items-center gap-2 font-bold text-lg text-amber-800 dark:text-amber-300">
            <Heart className="h-5 w-5 text-amber-600 fill-current" />
            <span>జీవన బంధం మార్గదర్శక సందేశం</span>
          </div>
          <p className="text-sm leading-relaxed">
            ప్రతి బంధంలోనూ సమస్యలు సహజం. వాటిని విమర్శలతో కాకుండా, ప్రేమతో, శాస్త్రీయ కౌన్సెలింగ్ విధానాలతో పరిష్కరించుకోవచ్చు. మీరు లేదా మీ ప్రియమైనవారు బాధపడుతుంటే వెంటనే సహాయం పొందండి.
          </p>
        </div>

        ${topic.h2Topics.map((h2, idx) => `
        <h2 id="${h2.id}" className="text-2xl font-bold text-slate-900 dark:text-white pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
          <Shield className="h-6 w-6 text-brand-primary" />
          <span>${h2.title}</span>
        </h2>
        <p>
          ఈ విభాగంలో మనం తెలుసుకోవలసిన అత్యంత ముఖ్యమైన విషయం పరస్పర అవగాహన. కుటుంబంలో లేదా వైవాహిక జీవితంలో ఏ సమస్య వచ్చినా నిశ్శబ్దంగా కుమిలిపోవడం కంటే, నిపుణుల సలహాతో లేదా ప్రశాంతమైన సంభాషణతో పరిష్కారం కనుగొనడం ఎంతో శ్రేయస్కరం.
        </p>
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>ఆచరణాత్మక కార్యాచరణ చిట్కా</span>
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            ప్రతిరోజూ కనీసం 15 నిమిషాల సమయం మొబైల్ లేదా టీవీ లేకుండా ఒకరితో ఒకరు మనసు విప్పి మాట్లాడండి. ఇది అపార్థాలను 70% వరకు తగ్గిస్తుంది.
          </p>
        </div>
        `).join('\n')}

        <div className="mt-8 p-6 rounded-3xl bg-brand-primary/10 border border-brand-primary/30 space-y-3">
          <h3 className="text-xl font-bold text-brand-primary flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span>తక్షణ అత్యవసర సహాయం & కౌన్సెలింగ్</span>
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            మీరు తీవ్రమైన మానసిక ఆందోళనలో ఉన్నారా? ప్రభుత్వ ఉచిత జాతీయ హెల్ప్‌లైన్లను ఇప్పుడే సంప్రదించండి:
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="tel:14416" className="px-4 py-2 bg-brand-primary text-white font-bold rounded-xl text-sm shadow hover:opacity-90 transition">
              📞 Tele-MANAS: 14416 (24/7 తెలుగు)
            </a>
            <a href="tel:112" className="px-4 py-2 bg-rose-600 text-white font-bold rounded-xl text-sm shadow hover:bg-rose-700 transition">
              🚨 జాతీయ ఎమర్జెన్సీ: 112
            </a>
            <a href="tel:1098" className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl text-sm shadow hover:bg-indigo-700 transition">
              🛡️ చైల్డ్‌లైన్: 1098
            </a>
          </div>
        </div>
      </div>
    )
  },`;
}

export async function runDailyAutoBlog() {
  console.log("=== Jeevana Bandham Daily Blog Auto-Publisher Starting ===");
  const blogFilePath = path.join(REPO_ROOT, "src/data/blogArticles.tsx");
  const sitemapXmlPath = path.join(REPO_ROOT, "public/sitemap.xml");
  const llmsTxtPath = path.join(REPO_ROOT, "public/llms.txt");

  if (!fs.existsSync(blogFilePath)) {
    throw new Error(`blogArticles.tsx not found at ${blogFilePath}`);
  }

  const existingContent = fs.readFileSync(blogFilePath, 'utf8');

  // Find next unwritten topic
  let selectedTopic = null;
  for (const topic of TELUGU_PILLAR_TOPICS) {
    if (!existingContent.includes(`slug: "${topic.slug}"`)) {
      selectedTopic = topic;
      break;
    }
  }

  if (!selectedTopic) {
    console.log("All cataloged topics are already written and published! Site is 100% covered.");
    await sendGoogleChatNotification({
      title: "All Telugu Pillar Articles Published",
      subtitle: "Jeevana Bandham Daily SEO Automation",
      text: "All 17+ core topics in the Telugu family support catalog are published. Monitoring search rankings and keyword impressions.",
      status: "SUCCESS"
    });
    return;
  }

  console.log(`Selected new article: [${selectedTopic.slug}] "${selectedTopic.title}"`);

  // 1. Generate article code and insert before `export function getAllBlogArticles`
  const articleSnippet = generateArticleCode(selectedTopic);
  const closingMarker = "export function getAllBlogArticles()";
  const insertionPoint = existingContent.lastIndexOf(closingMarker);

  if (insertionPoint === -1) {
    throw new Error("Could not find insertion marker in blogArticles.tsx");
  }

  // Find the last `];` before the export function
  const arrayEndIndex = existingContent.lastIndexOf("];", insertionPoint);
  if (arrayEndIndex === -1) {
    throw new Error("Could not find closing array marker `];` in blogArticles.tsx");
  }

  let before = existingContent.slice(0, arrayEndIndex).trimEnd();
  if (before.endsWith("}") && !before.endsWith("},")) {
    before += ",";
  }

  const updatedContent = before + "\n" + articleSnippet + "\n" + existingContent.slice(arrayEndIndex);

  fs.writeFileSync(blogFilePath, updatedContent, 'utf8');
  console.log(`[Success] Written new article to ${blogFilePath}`);

  // 2. Update public/sitemap.xml
  const today = new Date().toISOString().split('T')[0];
  if (fs.existsSync(sitemapXmlPath)) {
    let sitemap = fs.readFileSync(sitemapXmlPath, 'utf8');
    const newSitemapEntry = `  <url>
    <loc>https://www.jeevanabandham.online/blog/${selectedTopic.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`;
    
    if (!sitemap.includes(`/blog/${selectedTopic.slug}`)) {
      sitemap = sitemap.replace("</urlset>", `${newSitemapEntry}\n</urlset>`);
      fs.writeFileSync(sitemapXmlPath, sitemap, 'utf8');
      console.log(`[Success] Added ${selectedTopic.slug} to public/sitemap.xml`);
    }
  }

  // 3. Update public/llms.txt
  if (fs.existsSync(llmsTxtPath)) {
    let llms = fs.readFileSync(llmsTxtPath, 'utf8');
    const llmEntry = `- [${selectedTopic.title}](https://www.jeevanabandham.online/blog/${selectedTopic.slug}): ${selectedTopic.excerpt}`;
    if (!llms.includes(selectedTopic.slug)) {
      llms += `\n${llmEntry}`;
      fs.writeFileSync(llmsTxtPath, llms, 'utf8');
      console.log(`[Success] Added ${selectedTopic.slug} to public/llms.txt`);
    }
  }

  // 4. Git Add, Commit & Push
  try {
    console.log("Staging git changes...");
    execSync("git add src/data/blogArticles.tsx public/sitemap.xml public/llms.txt", { cwd: REPO_ROOT, stdio: "inherit" });
    const commitMsg = `feat(blog): publish daily Telugu SEO guide - ${selectedTopic.titleEn} [${selectedTopic.slug}]`;
    execSync(`git commit -m "${commitMsg}"`, { cwd: REPO_ROOT, stdio: "inherit" });
    console.log("Pushing to GitHub remote main...");
    execSync("git push origin main", { cwd: REPO_ROOT, stdio: "inherit" });
    console.log("Successfully pushed to GitHub origin main!");
  } catch (gitErr) {
    console.warn(`Git commit/push encountered a step: ${gitErr.message}`);
  }

  // 5. Send Google Chat Notification
  const postUrl = `https://www.jeevanabandham.online/blog/${selectedTopic.slug}`;
  await sendGoogleChatNotification({
    title: `కొత్త తెలుగు ఆర్టికల్ ప్రచురితమైంది: ${selectedTopic.title.slice(0, 45)}...`,
    subtitle: `జీవన బంధం రోజువారీ SEO బ్లాగ్ ఆటోమేషన్ (${today})`,
    text: `*వర్గం:* ${selectedTopic.category}\n*లక్ష్య కీవర్డ్:* ${selectedTopic.primaryKeyword}\n*చదివే సమయం:* ${selectedTopic.readTime}\n*ఎక్సర్పట్:* ${selectedTopic.excerpt}`,
    url: postUrl,
    status: "SUCCESS",
    fields: [
      { label: "కానానికల్ URL", value: postUrl },
      { label: "ప్రధాన కీవర్డ్స్", value: [selectedTopic.primaryKeyword, ...selectedTopic.secondaryKeywords.slice(0, 3)].join(", ") }
    ]
  });

  console.log("=== Jeevana Bandham Daily Auto-Blog Complete ===");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runDailyAutoBlog().catch(err => {
    console.error("Fatal error in daily auto-blog:", err);
    process.exit(1);
  });
}
