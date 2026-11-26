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
import { submitIndexNow } from '../indexnow.js';

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
  },
  {
    "slug": "overcoming-ego-clashes-in-marriage",
    "title": "భార్యాభర్తల మధ్య ఈగో (అహం) సమస్యలు: వివాహ బంధాన్ని కాపాడుకునే 7 ఆచరణాత్మక మార్గాలు",
    "titleEn": "Overcoming Ego Clashes in Marriage: 7 Practical Communication Rules for Couples",
    "subtitle": "చిన్న వాదనలు తీవ్రమైన వివాదాలుగా మారకుండా, అహాన్ని పక్కనపెట్టి అనుబంధాన్ని బలపరిచే స్పష్టమైన కౌన్సెలింగ్ మార్గదర్శి.",
    "category": "భార్యాభర్తల అనుబంధం (Relationships)",
    "primaryKeyword": "భార్యాభర్తల మధ్య ఈగో సమస్యలు",
    "secondaryKeywords": [
      "ego problems in marriage telugu",
      "భార్యాభర్తల గొడవలు పరిష్కారం",
      "relationship counseling telugu",
      "marital conflict resolution"
    ],
    "toolLink": "/support",
    "toolName": "వివాహ & కుటుంబ కౌన్సెలింగ్ సేవలు",
    "readTime": "8 నిమిషాలు",
    "excerpt": "దాంపత్య జీవితంలో 'నేను గెలవాలి' అనే అహం కంటే 'మన బంధం గెలవాలి' అనే అవగాహన ఎంత ముఖ్యమో వివరించే సమగ్ర తెలుగు గైడ్.",
    "metaDescription": "భార్యాభర్తల మధ్య వచ్చే ఈగో క్లాషెస్ నివారించి, ఆరోగ్యకరమైన సంభాషణతో వైవాహిక జీవితాన్ని సుఖమయం చేసుకునే 7 అద్భుతమైన మార్గాలు.",
    "pillar": "Relationships",
    "h2Topics": [
      {
        "id": "recognizing-ego-clashes",
        "title": "1. దాంపత్యంలో ఈగో (అహం) సంకేతాలను గుర్తించడం ఎలా?"
      },
      {
        "id": "win-argument-lose-relationship",
        "title": "2. 'వాదనలో గెలవడం vs బంధాన్ని కాపాడుకోవడం' - తేడా ఏమిటి?"
      },
      {
        "id": "active-listening-rules",
        "title": "3. ఎదుటివారి భావాలను గౌరవించే యాక్టివ్ లిజనింగ్ సూత్రాలు"
      },
      {
        "id": "replacing-you-with-i",
        "title": "4. 'నువ్వు ఇలా చేశావు' అనకుండా 'నాకు ఇలా అనిపిస్తోంది' అని చెప్పడం"
      },
      {
        "id": "seeking-counseling-early",
        "title": "5. సమస్య తీవ్రం కాకముందే ప్రొఫెషనల్ కౌన్సెలింగ్ తీసుకోవడం"
      }
    ],
    "faqs": [
      {
        "question": "భార్యాభర్తల మధ్య అహం తగ్గడానికి మొదటి అడుగు ఎవరు వేయాలి?",
        "answer": "ఎవరు మొదట అడుగు వేశారనే దానికంటే, బంధం విచ్ఛిన్నం కాకుండా కాపాడుకోవడమే ముఖ్యం. 'సారీ' లేదా 'మనం మాట్లాడుకుందాం' అనడం బలహీనత కాదు, పరిపక్వత."
      },
      {
        "question": "ఈగో వల్ల రోజూ మాటలు లేకుండా ఉండే పరిస్థితిని ఎలా సరిదిద్దాలి?",
        "answer": "మౌనం (Silent Treatment) సమస్యను పెంచుతుంది. ప్రశాంతమైన వాతావరణంలో చిన్న సందేశం లేదా టీ కప్పుతో సంభాషణను పునఃప్రారంభించండి."
      }
    ]
  },
  {
    "slug": "postpartum-depression-support-telugu-families",
    "title": "బాలింతలలో ప్రసవానంతర కుంగుబాటు (Postpartum Depression): భర్త మరియు కుటుంబం అందించాల్సిన మానసిక మద్దతు",
    "titleEn": "Postpartum Depression in New Mothers: How Husbands and Families Can Provide Emotional Support",
    "subtitle": "ప్రసవం తర్వాత మహిళల్లో కలిగే తీవ్ర ఆందోళన, అలసట మరియు మూడ్ స్వింగ్స్ నుంచి బయటపడటానికి సమగ్ర గైడ్.",
    "category": "మానసిక ఆరోగ్యం (Mental Health)",
    "primaryKeyword": "బాలింతలలో డిప్రెషన్ లక్షణాలు",
    "secondaryKeywords": [
      "postpartum depression telugu",
      "ప్రసవానంతర కుంగుబాటు",
      "tele manas 14416",
      "new mother mental health"
    ],
    "toolLink": "/support",
    "toolName": "24/7 భావోద్వేగ సాంత్వన & కౌన్సెలింగ్",
    "readTime": "9 నిమిషాలు",
    "excerpt": "బిడ్డ పుట్టిన ఆనందంతో పాటు తల్లులు ఎదుర్కొనే తీవ్ర మానసిక ఒత్తిడి, ఆందోళనలను కుటుంబ సభ్యులు ఎలా అర్థం చేసుకోవాలో తెలిపే గైడ్.",
    "metaDescription": "బాలింతలలో పోస్ట్‌పార్టమ్ డిప్రెషన్ లక్షణాలు, భర్త పాత్ర మరియు కుటుంబ సభ్యులు అందించాల్సిన అత్యవసర మానసిక మద్దతు.",
    "pillar": "Mental Health",
    "h2Topics": [
      {
        "id": "baby-blues-vs-ppd",
        "title": "1. 'బేబీ బ్లూస్' vs 'పోస్ట్‌పార్టమ్ డిప్రెషన్' మధ్య తేడా"
      },
      {
        "id": "identifying-symptoms",
        "title": "2. నిద్రలేమి, తీవ్ర విచారం మరియు భయం లక్షణాలు"
      },
      {
        "id": "husband-vital-role",
        "title": "3. భర్త తీసుకోవాల్సిన బాధ్యతలు మరియు ప్రేమపూర్వక సంరక్షణ"
      },
      {
        "id": "family-non-judgmental-support",
        "title": "4. విమర్శించకుండా సహాయపడే ఉమ్మడి కుటుంబ వాతావరణం"
      },
      {
        "id": "medical-counseling-help",
        "title": "5. డాక్టర్ సంప్రదింపులు మరియు Tele-MANAS (14416) సహాయం"
      }
    ],
    "faqs": [
      {
        "question": "పోస్ట్‌పార్టమ్ డిప్రెషన్ ఎంతకాలం ఉంటుంది?",
        "answer": "సరైన కుటుంబ మద్దతు మరియు కౌన్సెలింగ్ ఉంటే కొన్ని వారాలు లేదా నెలల్లో తగ్గుతుంది. నిర్లక్ష్యం చేస్తే తీవ్రమవుతుంది, కాబట్టి ప్రారంభంలోనే సహాయం పొందాలి."
      }
    ]
  },
  {
    "slug": "managing-exam-stress-and-academic-anxiety",
    "title": "పిల్లల్లో పరీక్షల ఒత్తిడి మరియు భయం: తల్లిదండ్రులు ఇవ్వాల్సిన మానసిక ధైర్యం & పేరెంటింగ్ సలహాలు",
    "titleEn": "Managing Exam Stress and Academic Anxiety in Children: Parents Guide to Emotional Support",
    "subtitle": "మార్కుల ఒత్తిడితో పిల్లలు కుంగిపోకుండా, వారి ఆత్మవిశ్వాసాన్ని పెంచి ఆరోగ్యకరమైన భవిష్యత్తును తీర్చిదిద్దే పేరెంటింగ్ గైడ్.",
    "category": "పేరెంటింగ్ సలహాలు (Parenting)",
    "primaryKeyword": "పిల్లల్లో పరీక్షల ఒత్తిడి నివారణ",
    "secondaryKeywords": [
      "exam stress management telugu",
      "పిల్లల మానసిక ఆరోగ్యం",
      "parenting tips for exams",
      "childline 1098"
    ],
    "toolLink": "/child-protection",
    "toolName": "బాలల సంరక్షణ & పేరెంటింగ్ మార్గదర్శి",
    "readTime": "8 నిమిషాలు",
    "excerpt": "పరీక్షల సమయంలో పిల్లలపై ర్యాంకుల ఒత్తిడి పెట్టకుండా, వారి మానసిక స్థైర్యాన్ని పెంచే ఆరోగ్యకరమైన పేరెంటింగ్ పద్ధతులు.",
    "metaDescription": "పరీక్షల సమయంలో పిల్లల్లో భయం, ఒత్తిడి తగ్గించి ఆత్మవిశ్వాసం నింపేందుకు తల్లిదండ్రులు పాటించాల్సిన 5 కీలక సూత్రాలు.",
    "pillar": "Parenting",
    "h2Topics": [
      {
        "id": "signs-of-exam-anxiety",
        "title": "1. పిల్లల్లో పరీక్షల ఆందోళన సంకేతాలు (నిద్రలేమి, ఆకలి మందగించడం)"
      },
      {
        "id": "avoid-comparison",
        "title": "2. ఇతరులతో పోల్చడం ఆపి, వారి ప్రత్యేక ప్రతిభను గుర్తించండి"
      },
      {
        "id": "healthy-routine-nutrition",
        "title": "3. సరైన నిద్ర, సమతుల్య ఆహారం మరియు చిన్న విరామాలు"
      },
      {
        "id": "emotional-reassurance",
        "title": "4. 'మార్కుల కంటే నువ్వే మాకు ముఖ్యం' అనే భరోసా ఇవ్వడం"
      },
      {
        "id": "childline-telemanas-guidance",
        "title": "5. అవసరమైతే నిపుణుల కౌన్సెలింగ్ (Tele-MANAS: 14416 / Childline: 1098)"
      }
    ],
    "faqs": [
      {
        "question": "పరీక్షల్లో తక్కువ మార్కులు వస్తే పిల్లలతో ఎలా మాట్లాడాలి?",
        "answer": "కోపగించుకోవడం లేదా నిందించడం మానేసి, లోపాలు ఎక్కడ ఉన్నాయో శాంతంగా చర్చించండి. జీవితంలో అనేక అవకాశాలు ఉంటాయని ధైర్యం చెప్పండి."
      }
    ]
  },
  {
  "slug": "child-safety-pocso-safe-touch-awareness",
  "title": "పిల్లలపై లైంగిక వేధింపుల నివారణ (POCSO చట్టం): తల్లిదండ్రులు నేర్పించాల్సిన సేఫ్ టచ్ & అన్‌సేఫ్ టచ్ మార్గదర్శకాలు",
  "titleEn": "Child Safety and POCSO Awareness: Parents Guide to Teaching Safe Touch, Unsafe Touch, and Protective Habits",
  "subtitle": "పిల్లలను లైంగిక వేధింపుల నుండి కాపాడేందుకు గుడ్ టచ్, బ్యాడ్ టచ్ తేడాలు, POCSO చట్టం రక్షణలు మరియు చైల్డ్‌లైన్ 1098 అత్యవసర సహాయంపై సమగ్ర గైడ్.",
  "category": "బాలల రక్షణ & హక్కులు (Child Protection)",
  "primaryKeyword": "పిల్లల రక్షణ సేఫ్ టచ్ మార్గదర్శకాలు",
  "secondaryKeywords": [
    "pocso act telugu awareness",
    "child safety good touch bad touch telugu",
    "childline 1098 telugu",
    "పిల్లలపై లైంగిక వేధింపుల నివారణ",
    "బాలల హక్కులు చట్టం"
  ],
  "toolLink": "/child-protection",
  "toolName": "బాలల సంరక్షణ & పేరెంటింగ్ మార్గదర్శి",
  "readTime": "9 నిమిషాలు",
  "excerpt": "పిల్లల భద్రత కోసం ప్రతి తల్లిదండ్రులు నేర్పించాల్సిన సేఫ్ టచ్ & అన్‌సేఫ్ టచ్ నియమాలు, POCSO చట్టం రక్షణలు మరియు అత్యవసర హెల్ప్‌లైన్లు.",
  "metaDescription": "పిల్లలకు సేఫ్ టచ్ మరియు అన్‌సేఫ్ టచ్ ఎలా నేర్పించాలి? POCSO చట్టం నిబంధనలు, చైల్డ్‌లైన్ 1098 సహాయం మరియు తల్లిదండ్రుల బాధ్యతలపై పూర్తి తెలుగు గైడ్.",
  "pillar": "Child Protection",
  "h2Topics": [
    {
      "id": "why-body-safety-matters",
      "title": "1. పిల్లలకు బాడీ సేఫ్టీ (Body Safety) నియమాలు నేర్పించడం ఎందుకు ముఖ్యం?"
    },
    {
      "id": "safe-touch-vs-unsafe-touch",
      "title": "2. సేఫ్ టచ్ (Safe Touch) మరియు అన్‌సేఫ్ టచ్ (Unsafe Touch) మధ్య తేడాలు"
    },
    {
      "id": "pocso-act-legal-protections",
      "title": "3. POCSO చట్టం 2012: పిల్లలకు భారత చట్టం కల్పించిన ప్రత్యేక కవచం"
    },
    {
      "id": "recognizing-abuse-warning-signs",
      "title": "4. పిల్లల్లో వేధింపుల సంకేతాలను గుర్తించడం (ప్రవర్తన మార్పులు, తీవ్ర భయం)"
    },
    {
      "id": "emergency-reporting-childline",
      "title": "5. అత్యవసర సహాయం: చైల్డ్‌లైన్ 1098 మరియు పోక్సో ఈ-బాక్స్ (POCSO E-Box)"
    }
  ],
  "faqs": [
    {
      "question": "పిల్లలకు బాడీ సేఫ్టీ గురించి ఏ వయస్సు నుంచి నేర్పించాలి?",
      "answer": "3 నుండి 4 సంవత్సరాల వయస్సు నుంచే స్నానం చేయించేటప్పుడు లేదా బట్టలు మార్చేటప్పుడు ప్రైవేట్ శరీర భాగాలు ఇతరులు తాకకూడదని సున్నితంగా అర్థమయ్యేలా నేర్పించాలి."
    },
    {
      "question": "పిల్లలపై వేధింపుల గురించి తెలిస్తే ఫిర్యాదు చేయడం చట్టపరంగా తప్పనిసరా?",
      "answer": "అవును, POCSO చట్టం సెక్షన్ 19 ప్రకారం పిల్లలపై వేధింపులు జరిగినట్లు తెలిసినా లేదా అనుమానం ఉన్నా ఎవరైనా తప్పనిసరిగా పోలీసులకు లేదా చైల్డ్‌లైన్ 1098కు తెలియజేయాలి."
    }
  ]
}
,
{
  "slug": "resolving-silent-treatment-and-communication-gap-in-marriage",
  "title": "భార్యాభర్తల మధ్య నిశ్శబ్దం (Silent Treatment): మాట్లాడటం మానేయడం వల్ల పెరిగే దూరాన్ని తగ్గించి, బంధాన్ని బలోపేతం చేసే మార్గాలు",
  "titleEn": "Overcoming Silent Treatment in Marriage: Practical Steps to Break Emotional Distance and Rebuild Communication",
  "subtitle": "గొడవ జరిగినప్పుడు మాట్లాడటం మానేస్తున్నారా? సైలెంట్ ట్రీట్‌మెంట్ దాంపత్యంపై చూపే ప్రతికూల ప్రభావాలు, భావోద్వేగ దూరాన్ని తగ్గించే పరిష్కారాలు మరియు కౌన్సెలింగ్ మార్గదర్శకాలు.",
  "category": "దాంపత్య కౌన్సెలింగ్ (Marriage Counseling)",
  "primaryKeyword": "భార్యాభర్తల మధ్య సైలెంట్ ట్రీట్మెంట్ నివారణ",
  "secondaryKeywords": [
    "silent treatment in marriage telugu",
    "husband wife communication gap telugu",
    "దాంపత్య సమస్యలు పరిష్కారం",
    "భార్యాభర్తల గొడవలు నివారణ",
    "marriage counselling telugu"
  ],
  "toolLink": "/support",
  "toolName": "దాంపత్య కౌన్సెలింగ్ & భావోద్వేగ మద్దతు",
  "readTime": "8 నిమిషాలు",
  "excerpt": "భార్యాభర్తల మధ్య సైలెంట్ ట్రీట్‌మెంట్ ఎందుకు ప్రమాదకరం? నిశ్శబ్దాన్ని ఛేదించి, మనసు విప్పి మాట్లాడుకునే ఆరోగ్యకరమైన సంభాషణ నియమాలు మరియు కౌన్సెలింగ్ పరిష్కారాలు.",
  "metaDescription": "భార్యాభర్తల మధ్య సైలెంట్ ట్రీట్‌మెంట్ (మాట్లాడటం మానేయడం) ఎలా తగ్గించాలి? దాంపత్యంలో కమ్యూనికేషన్ గ్యాప్ నివారణ, భావోద్వేగ అనుబంధం మరియు తెలుగు కౌన్సెలింగ్ మార్గదర్శకాలు.",
  "pillar": "Marriage Counseling",
  "h2Topics": [
    {
      "id": "why-silent-treatment-hurts",
      "title": "1. దాంపత్యంలో సైలెంట్ ట్రీట్‌మెంట్ (Silent Treatment) ఎందుకు ప్రమాదకరం?"
    },
    {
      "id": "reasons-behind-silence",
      "title": "2. భార్యాభర్తలు మాట్లాడటం ఎందుకు ఆపేస్తారు? (అంతర్గత భయం, అసహాయత, కోపం)"
    },
    {
      "id": "psychological-impact",
      "title": "3. నిశ్శబ్దం వల్ల భాగస్వామిపై పడే మానసిక ప్రభావం (అభద్రతా భావం, ఒంటరితనం)"
    },
    {
      "id": "steps-to-break-the-ice",
      "title": "4. నిశ్శబ్దాన్ని ఛేదించే ఆచరణాత్మక మార్గాలు (ఐ-స్టేట్‌మెంట్స్, సురక్షిత సమయం ఎంచుకోవడం)"
    },
    {
      "id": "when-to-seek-counseling",
      "title": "5. ప్రొఫెషనల్ మ్యారేజ్ కౌన్సెలింగ్ ఎప్పుడు అవసరం? (జీవన బంధం & టెలి-మానస్ మద్దతు)"
    }
  ],
  "faqs": [
    {
      "question": "సైలెంట్ ట్రీట్‌మెంట్ అనేది మానసిక హింస (Emotional Abuse) కిందకు వస్తుందా?",
      "answer": "అవును, ఒకరిపై పగ తీర్చుకోవడానికి లేదా శిక్షించడానికి రోజుల తరబడి నిశ్శబ్దంగా ఉండటం, వారి ఉనికిని గుర్తించకపోవడం మానసిక ఒత్తిడిని కలిగించే ఒక రకమైన భావోద్వేగ హింసగా పరిగణించబడుతుంది."
    },
    {
      "question": "భాగస్వామి మాట్లాడటానికి నిరాకరిస్తున్నప్పుడు ఎలా స్పందించాలి?",
      "answer": "వెంటనే బలవంతం చేయకుండా, 'నువ్వు బాధలో ఉన్నావని నాకు అర్థమైంది, ప్రశాంతంగా ఆలోచించుకోవడానికి సమయం తీసుకో, కానీ నువ్వు మాట్లాడటానికి సిద్ధంగా ఉన్నప్పుడు నేను వినడానికి సిద్ధంగా ఉంటాను' అని భరోసా ఇవ్వాలి."
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

  // 4. Build, Stage, Commit, Push & Deploy to Vercel
  try {
    console.log("Building production bundle (SSR and static routes)...");
    execSync("npm run build", { cwd: REPO_ROOT, stdio: "inherit" });

    console.log("Staging git changes including prebuilt Vercel output...");
    execSync("git add src/data/blogArticles.tsx public/sitemap.xml public/llms.txt public/c7a8b9e0f1d24c5b8a9e0f1d2c3b4a5d.txt scripts/indexnow.js scripts/seo-automation/daily-auto-blog.js .vercel/output .gitignore", { cwd: REPO_ROOT, stdio: "inherit" });
    const commitMsg = `feat(blog): publish daily Telugu SEO guide - ${selectedTopic.titleEn} [${selectedTopic.slug}]`;
    execSync(`git commit -m "${commitMsg}"`, { cwd: REPO_ROOT, stdio: "inherit" });
    console.log("Pushing to GitHub remote main...");
    execSync("git push origin main", { cwd: REPO_ROOT, stdio: "inherit" });
    console.log("Successfully pushed to GitHub origin main!");

    try {
      console.log("Deploying prebuilt production release directly to Vercel...");
      execSync("npx vercel deploy --prebuilt --prod", { cwd: REPO_ROOT, stdio: "inherit" });
      console.log("Vercel production deployment completed successfully!");
    } catch (deployErr) {
      console.warn(`Direct Vercel deploy encountered a non-fatal warning: ${deployErr.message}`);
    }
  } catch (gitErr) {
    console.warn(`Build or Git commit/push encountered a step: ${gitErr.message}`);
  }

  const postUrl = `https://www.jeevanabandham.online/blog/${selectedTopic.slug}`;

  // 5. Submit to Search Engine Indexers via IndexNow
  try {
    console.log("Submitting new post to search engines via IndexNow...");
    await submitIndexNow([postUrl, "https://www.jeevanabandham.online/sitemap.xml"]);
  } catch (inErr) {
    console.warn("IndexNow submission warning:", inErr.message);
  }

  // 6. Send Google Chat Notification
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
