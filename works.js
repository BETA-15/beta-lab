/*
  Beta Lab — 作品データ
  ------------------------------------------------------------
  サイトに載る作品はすべてこのファイルで管理します。
  作品を追加するときは、同じ形の { ... } を一つ足してください。
  文章は ja（日本語）と en（英語）の両方を書きます。
  購読者数などの数字は SNAPSHOT の日付時点の値です。
*/

const SNAPSHOT = "2026-10-02";

const LINKS = {
  github: "https://github.com/BETA-15",
  workshop: "https://steamcommunity.com/profiles/76561198418574209/myworkshopfiles/?p=1&numperpage=30",
  note: "https://note.com/witty_panda979",
  syosetu: "https://mypage.syosetu.com/2826402/",
  zenodo: "https://doi.org/10.5281/zenodo.17967671",
  ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5915003",
};

const GAMES = {
  vic3: { ja: "Victoria 3", en: "Victoria 3" },
  ck3: { ja: "Crusader Kings III", en: "Crusader Kings III" },
  hoi4: { ja: "Hearts of Iron IV", en: "Hearts of Iron IV" },
};

/* ---------- Mod（Steam Workshop） ----------
   id: Workshop の番号（サムネイルは assets/mods/<id>.jpg）
   subs: 現在の購読者数 / updated: 最終更新日
   archived: true にすると「更新停止」と表示 */
const MODS = [
  {
    id: "3799636904", game: "vic3", subs: 107, updated: "2026-09-29", featured: true,
    title: "天朝維新 — Celestial Reformation",
    ja: "1836年の清朝を大規模に作り直すオーバーホール。官僚制・科挙・八旗を法律として再現し、洋務運動から新政、立憲へと続く一世紀の改革を導きます。",
    en: "A large overhaul of Qing China in 1836. The bureaucracy, civil examinations and Eight Banners become laws, and you lead a century of reform from Self-Strengthening to constitutional change.",
    extra: { label: { ja: "トレーラー", en: "Trailer" }, url: "https://www.youtube.com/watch?v=BrIBh-uh5ro" },
  },
  {
    id: "3803026099", game: "vic3", subs: 216, updated: "2026-09-20",
    title: "Financial Districts & Household Economy — 金融街と家計経済",
    ja: "金融街に「金融商品」の生産を加え、現代の統計を参考に、所得階層ごとの家計支出（食料・住居・サービス）の配分を見直します。",
    en: "Adds financial production to Financial Districts and reshapes household spending on food, housing and services across income levels, using modern statistics as a reference.",
  },
  {
    id: "3805180298", game: "vic3", subs: 187, updated: "2026-09-21",
    title: "Productive Economy — 生産経済改革",
    ja: "30の生産方式で石油・ゴムの投入を半減し、差額を他の投入へ振り替えます。工場や公共施設が、インフラ使用量に応じて輸送を購入するようになります。",
    en: "Halves oil and rubber inputs across 30 production methods, and makes factories and public buildings buy transportation in proportion to their infrastructure use.",
  },
  {
    id: "3805394014", game: "vic3", subs: 137, updated: "2026-09-25",
    title: "National Economy Statistics — 国民経済統計",
    ja: "財別・三部門別・産業別に、国内生産とGDPへの寄与を表・円グラフ・ツリーマップで確認できる統計画面を追加します。",
    en: "Explore domestic production and GDP contributions by good, by sector and by industry, in tables, pie charts and treemaps.",
  },
  {
    id: "3805402953", game: "vic3", subs: 123, updated: "2026-09-27",
    title: "National Budget Charts — 国家予算グラフ",
    ja: "予算画面の概要タブに、歳入と歳出の内訳を示す4つの円グラフと、構成比の一覧を追加します。",
    en: "Adds four pie charts to the Budget panel, with percentage breakdowns of revenue and expenditure.",
  },
  {
    id: "3526524821", game: "vic3", subs: 35, updated: "2026-09-27",
    title: "Aristocratic Investment Overhaul",
    ja: "荘園を通じた貴族の工業投資を広げ、介入主義を「貴族経済」に置き換えます。地主の富が工場への投資に向かう道筋をつくるModです。",
    en: "Expands aristocratic investment through Manor Houses and reshapes Interventionism into an Aristocratic Economy — from landed wealth to industrial investment.",
  },
  {
    id: "3514165766", game: "vic3", subs: 21, updated: "2026-09-21",
    title: "Ottoman Millet System Revival",
    ja: "オスマン帝国のミッレト制を、専用の法律と17の社会階層で表現します。宗教・文化・職業の違いが、受容度と政治姿勢を左右します。",
    en: "Represents the Ottoman millet system through dedicated laws and 17 social classes, where religion, culture and occupation shape acceptance and political attitudes.",
  },
  {
    id: "3509208696", game: "vic3", subs: 27, updated: "2026-09-29",
    title: "5% Worker Investment",
    ja: "協同所有制のもとで、労働者が受け取る配当からの投資プール拠出率を5ポイント上げる小さな調整です。",
    en: "A small adjustment: Laborers contribute 5 more percentage points of their dividends to the investment pool under Cooperative Ownership.",
  },
  {
    id: "3799876745", game: "vic3", subs: 28, updated: "2026-09-28",
    title: "Artisans Revived／職人の復活",
    ja: "Victoria 2の職人を、新しい職業と工房として復活させます。自給農業と工場労働のあいだの受け皿となり、失業に応じて工房が自動で増減します。",
    en: "Brings back Victoria 2's artisans as a profession with their own workshops — a bridge between subsistence farming and factory work that grows with unemployment.",
  },
  {
    id: "3578660113", game: "vic3", subs: 13, updated: "2026-09-21",
    title: "Millet System Effect Change",
    ja: "ミッレト制のもとでの改宗を止めて宗教共同体を保ち、首都と陸続きの州の編入を速めます。",
    en: "Preserves religious communities by disabling conversion under the Millet System, and speeds up incorporation of states connected to the capital.",
  },
  {
    id: "3804406116", game: "vic3", subs: 9, updated: "2026-09-21",
    title: "Mac Map Stability — Gentle City Effects",
    ja: "Mac版のクラッシュを減らすため、3Dマップを保ったまま、都市の煙・エフェクトとマップの影の描画負荷を下げます。",
    en: "Reduces crashes on the Mac version by lowering the load of city smoke, effects and map shadows while keeping the 3D map.",
  },
  {
    id: "3713604636", game: "ck3", subs: 22, updated: "2026-10-01",
    title: "Celestial Government – Japanese Localization & Hotfix",
    ja: "天朝政府（Celestial Government）の日本語訳を改善し、独立戦争・大遠征・未創設の公爵位・AIの文化同化まわりの不具合を修正します。",
    en: "Improves the Japanese localization of the Celestial Government and fixes independence wars, Grand Campaigns, uncreated duchies and AI assimilation projects.",
  },
  {
    id: "3776275128", game: "ck3", subs: 5, updated: "2026-09-21",
    title: "Reset Title Name",
    ja: "称号のカスタマイズ画面に、名前のリセット、元に戻せる改名、標準名の表示を追加します。",
    en: "Adds name resetting, reversible renaming and a standard-name display to the title customization window.",
  },
  {
    id: "3785176960", game: "ck3", subs: 6, updated: "2026-10-01",
    title: "CK3 Debug Language Switcher",
    ja: "ポーズメニューから、日本語を含む9言語へ直接切り替えられるボタンを追加します。",
    en: "Adds a pause-menu button to switch directly between nine languages, including Japanese.",
  },
  {
    id: "2662691271", game: "hoi4", subs: 216, updated: "2026-09-21",
    title: "Japan Historical States",
    ja: "日本と朝鮮の州を一般的な地方区分に再編します。人口は1935年の統計、勝利点は当時のGDPを参考に調整しています。",
    en: "Reorganizes the states of Japan and Korea into commonly used regional divisions, with 1935 population figures and victory points based on period GDP.",
  },
  {
    id: "3624029655", game: "hoi4", subs: 4, updated: "2026-09-20",
    title: "USA World Factory",
    ja: "アメリカ合衆国に国民精神「世界の工場」を追加し、建築スロットと資源産出量を強化します。",
    en: "Turns the United States into the world's factory with a national spirit that boosts building slots and resource output.",
  },
  {
    id: "3285416288", game: "hoi4", subs: 11, updated: "2024-10-12", archived: true,
    title: "Japanese historical politics",
    ja: "二・二六事件のイベントと、統制派・皇道派・民主主義・共産主義の各ルートを加える日本の内政Modです。",
    en: "Adds the February 26 Incident and several political paths for Japan.",
  },
];

/* ---------- 研究・論文 ---------- */
const PAPERS = [
  {
    year: "2026",
    revision: { ja: "改訂88版（2026年9月）", en: "Revision 88 (September 2026)" },
    title: "General Theory of Structural Constraints: Investment Trap, Demand-Constrained Growth, and Regime Shifts in Monetary Policy Transmission",
    titleJa: "構造的制約に関する一般理論",
    ja: "先進国で、雇用は改善するのに金融緩和が持続的な成長につながらない現象を、政策運営の失敗や一時的な需要不足ではなく、投資先そのものが構造的に枯渇した状態として説明する診断的な理論です。人口・制度・資本構造で決まる潜在的な制約「構造的フロンティア係数 Φ」と、政策効果が質的に変わる臨界値 θ を導入します。",
    en: "A diagnostic theory of why monetary easing in advanced economies improves employment but no longer produces sustained growth. It reads this not as a policy failure or a temporary demand shortfall, but as the structural depletion of investment outlets, introducing the structural frontier coefficient Φ and the critical threshold θ at which policy effects change qualitatively.",
    keywords: ["Structural constraints", "Investment traps", "Demand-constrained growth", "Secular stagnation", "Monetary policy transmission", "JEL E12 · E22 · E44 · E52 · J11 · O41"],
    links: [
      { label: "Zenodo", url: LINKS.zenodo, note: { ja: "最新版", en: "latest version" } },
      { label: "SSRN", url: LINKS.ssrn },
      { label: "GitHub", url: "https://github.com/BETA-15/General-Theory-on-Structural-Constraints" },
    ],
  },
];

/* ---------- ソフトウェア ----------
   status: "public"（公開中） / "dev"（開発中・非公開） */
const SOFTWARE = [
  {
    status: "public",
    title: "Paradox Localization Translator",
    version: "v0.11.75",
    platforms: "macOS · Windows · Linux",
    ja: "Paradox系ゲームのModローカライズを、ローカルLLMまたはクラウドAPIで日本語化・修復・調査するGUIツールです。未翻訳箇所のチェック、差分翻訳、QA、日本語化Modの有無や欠損の調査まで、ひとつの画面で行えます。",
    en: "A GUI tool that translates, repairs and audits Paradox game mod localization into Japanese with a local LLM or a cloud API — including untranslated-line checks, diff translation, QA and detection of existing Japanese translation mods.",
    tags: ["Python", "Local LLM", "Ollama / LM Studio", "MIT"],
    links: [
      { label: "GitHub", url: "https://github.com/BETA-15/paradox-localization-translator" },
      { label: "Releases", url: "https://github.com/BETA-15/paradox-localization-translator/releases/latest" },
    ],
  },
  {
    status: "dev",
    title: { ja: "経済シミュレーター", en: "Economic Simulator" },
    ja: "Mac向けの経済シミュレーターです。C++の計算コアとSwiftUI・Metalの画面で、研究用の分析モードと、遊べるゲームモードの両方を備えます。",
    en: "An economic simulator for the Mac, with a C++ core and a SwiftUI / Metal interface — a research mode for analysis and a playable game mode.",
    tags: ["C++", "SwiftUI", "Metal"],
  },
  {
    status: "dev",
    title: { ja: "論文翻訳スタジオ", en: "Paper Translation Studio" },
    ja: "日本語で書いた論文をローカルLLMで英訳し、PDF化とZenodoの下書き作成までを一つの画面で進めるツールです。",
    en: "Translates papers written in Japanese into English with a local LLM, then builds the PDF and prepares a Zenodo draft — all from one screen.",
    tags: ["Python", "Local LLM", "pandoc"],
  },
  {
    status: "dev",
    title: { ja: "研究ジョブ管理", en: "Research Job Manager" },
    ja: "国会会議録の分類など、ローカルLLMによる大量処理を、順番待ち・停止・再開つきで管理するアプリです。",
    en: "Runs large local-LLM jobs, such as classifying Diet proceedings, with a queue, stop and resume.",
    tags: ["Python", "SQLite", "LM Studio"],
  },
];

/* ---------- 小説 ----------
   status: "ongoing"（連載中） / "complete"（完結） */
const NOVELS = [
  {
    title: "大宋の転生",
    subtitle: "覇道ではなく、王道を",
    genre: { ja: "歴史・制度ファンタジー", en: "Historical & institutional fantasy" },
    status: "complete",
    episodes: 440,
    chars: 2384136,
    ja: "殿試の答案に「デフレと信用創造」を書いた受験生が、皇帝に見出された。剣も魔法も持たない経済学徒が、信用と鉄道と統計で魔帝の帝国に立ち向かう。英雄ではなく国が強くなる、全440話完結の中華風異世界内政譚。",
    en: "A candidate who wrote on deflation and credit creation in the palace examination catches the emperor's eye. With neither sword nor magic, an economics student takes on a demon emperor's empire through credit, railways and statistics. Not a story of one hero, but of a state growing strong — a complete 440-episode tale of statecraft in a Chinese-style other world. (Japanese only)",
    tags: ["南宋", "異世界", "経済", "官僚制", "科挙"],
    links: [
      { label: { ja: "作品を読む", en: "Read (Japanese)" }, url: "https://ncode.syosetu.com/n1032mv/" },
      { label: { ja: "作者ページ", en: "Author page" }, url: LINKS.syosetu },
    ],
  },
];

/* ---------- 記事（note） ----------
   topic: econ（経済） / politics（政治制度） / mac（Mac検証） */
const TOPICS = {
  econ: { ja: "経済", en: "Economics" },
  politics: { ja: "政治制度", en: "Political systems" },
  mac: { ja: "Mac検証", en: "Mac testing" },
};

const ARTICLES = [
  { date: "2026-09-28", topic: "mac", url: "https://note.com/witty_panda979/n/nce4cf483c0da",
    ja: "新しい「Siri AI」はMacの中で動いているのか？ ログと通信量で確かめてみた",
    en: "Does the new Siri AI run on the Mac itself? Checking the logs and network traffic" },
  { date: "2026-09-21", topic: "politics", url: "https://note.com/witty_panda979/n/ne65909ab89b2",
    ja: "新たな選挙制度の提案――小選挙区二回投票制・政党名補助方式",
    en: "A proposal for a new electoral system: two-round single-member districts with party-name support" },
  { date: "2026-09-21", topic: "politics", url: "https://note.com/witty_panda979/n/n11dd473c8401",
    ja: "官僚民主主義の提案",
    en: "A proposal for bureaucratic democracy" },
  { date: "2026-07-26", topic: "mac", url: "https://note.com/witty_panda979/n/n217fbff1e33b",
    ja: "【続報】14インチMacBook Pro（M5 Max）のハイパワーモード不具合、Appleが問題を口頭で認める",
    en: "Follow-up: Apple verbally acknowledges the High Power Mode issue on the 14-inch MacBook Pro (M5 Max)" },
  { date: "2026-07-10", topic: "mac", url: "https://note.com/witty_panda979/n/n4c126e70dae2",
    ja: "14インチモデルでのM5 Maxの具体的な性能",
    en: "How the M5 Max actually performs in the 14-inch model" },
  { date: "2026-06-21", topic: "mac", url: "https://note.com/witty_panda979/n/ne843616d7cc3",
    ja: "MacBook Pro M5 Max、GPUのクロックが1000MHzしかないのにベンチマークがおかしい件",
    en: "MacBook Pro M5 Max: the GPU clock reads only 1000 MHz, yet the benchmarks look odd" },
  { date: "2026-06-19", topic: "mac", url: "https://note.com/witty_panda979/n/nd7ea34a17e49",
    ja: "14インチMacBook Pro（M5 Max）のHigh Power Modeが機能していない疑惑を徹底検証した",
    en: "A thorough test of whether High Power Mode works on the 14-inch MacBook Pro (M5 Max)" },
  { date: "2025-12-20", topic: "econ", url: "https://note.com/witty_panda979/n/nd5af8d644eb1",
    ja: "不況は合理的だった― サンディカリズムの思考実験から見えた日本経済停滞の構造 ―",
    en: "The recession was rational: the structure of Japan's stagnation seen through a syndicalist thought experiment" },
  { date: "2025-12-12", topic: "econ", url: "https://note.com/witty_panda979/n/nd68270064bd8",
    ja: "なぜ金融緩和は効かなくなったのか「投資先が存在しない成熟経済」という仮説",
    en: "Why monetary easing stopped working: the hypothesis of a mature economy with nowhere left to invest" },
];
