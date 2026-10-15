/* ─────────────────────────────────────────────────────────────
   CONTENU DU PORTFOLIO — c'est le seul fichier à modifier
   pour mettre à jour tes liens, projets, expériences, etc.
   ───────────────────────────────────────────────────────────── */

/* 1. Tes liens. Laisse '' pour masquer un lien tant qu'il n'existe pas. */
window.CONFIG = {
  github: '',            // ex. 'https://github.com/yacouba-ouattara'
  linkedin: '',          // ex. 'https://www.linkedin.com/in/yacouba-ouattara'
  credly: '',            // lien de vérification du badge AWS (Credly), ex. 'https://www.credly.com/badges/xxxx'
  defaultLang: 'fr',     // 'fr' ou 'en'
  showNotes: false       // passe à true quand tu auras écrit tes articles de veille
};

/* 2. Projets.
   - dashboard.url / repo : laisse '' pour masquer le bouton.
   - shots : captures dans assets/projects/, ex. ['projects/perf-1.png', 'projects/perf-2.png']
   - draft: true  → la fiche reste cachée sur le site (modèle prêt à dupliquer). */
window.PROJECTS = [
  {
    id: 'pilotage-performance',
    dashboard: { tool: 'Streamlit', url: '' },
    repo: '',
    tags: ['Python', 'Machine Learning', 'Streamlit', 'LLM'],
    hasPipeline: true,
    shots: [],
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Streamlit', 'Plotly', 'Parquet', 'APIs financières', 'LLM (Gemini)'],
    fr: {
      kicker: 'Master 2 Data Management · Janvier 2026',
      title: 'Pilotage de la performance et aide à la décision',
      summary: "Outil d'analyse de la performance et du risque financier : architecture Bronze / Silver / Gold, indicateurs Sharpe et VaR, simulations Monte Carlo, segmentation d'actifs et optimisation de portefeuille.",
      context: "Projet de Master 2 : construire un outil d'analyse de la performance et du risque financier, capable d'agréger des données de marché multi-sources et de produire des recommandations exploitables par un décideur.",
      steps: [
        { n: '01', title: 'Structuration', body: "Contrôle qualité et structuration des données multi-sources, puis mise en place d'une architecture data Bronze / Silver / Gold en Parquet, alimentée par APIs." },
        { n: '02', title: 'Indicateurs', body: 'Calcul des indicateurs financiers — ratio de Sharpe, Value at Risk — et simulation de scénarios par méthode de Monte Carlo.' },
        { n: '03', title: 'Modélisation', body: "Segmentation d'actifs par clustering (K-Means, PCA) et optimisation de portefeuille selon Markowitz." },
        { n: '04', title: 'Restitution', body: "Dashboards interactifs Streamlit et Plotly, intégration d'un LLM (Gemini) pour la recommandation stratégique, documentation des flux et des transformations." }
      ],
      results: [
        "Une chaîne complète, de l'ingestion des données jusqu'à la recommandation, documentée et reproductible.",
        'Des indicateurs de risque et de performance calculés sur données de marché réelles.',
        'Un dashboard permettant de comparer plusieurs scénarios de portefeuille.'
      ]
    },
    en: {
      kicker: 'MSc Data Management · January 2026',
      title: 'Performance monitoring and decision support',
      summary: 'A financial performance and risk analysis tool: Bronze / Silver / Gold architecture, Sharpe and VaR indicators, Monte Carlo simulation, asset clustering and portfolio optimisation.',
      context: 'MSc project: build a financial performance and risk analysis tool able to aggregate multi-source market data and produce recommendations a decision-maker can act on.',
      steps: [
        { n: '01', title: 'Structuring', body: 'Quality control and structuring of multi-source data, then a Bronze / Silver / Gold data architecture in Parquet, fed by APIs.' },
        { n: '02', title: 'Indicators', body: 'Financial indicators — Sharpe ratio, Value at Risk — and scenario simulation with the Monte Carlo method.' },
        { n: '03', title: 'Modelling', body: 'Asset segmentation through clustering (K-Means, PCA) and portfolio optimisation following Markowitz.' },
        { n: '04', title: 'Delivery', body: 'Interactive Streamlit and Plotly dashboards, an LLM (Gemini) integrated for strategic recommendations, and documented data flows and transformations.' }
      ],
      results: [
        'A full chain from ingestion to recommendation, documented and reproducible.',
        'Risk and performance indicators computed on real market data.',
        'A dashboard for comparing several portfolio scenarios.'
      ]
    }
  },
  {
    id: 'reporting-financier',
    dashboard: { tool: 'Power BI', url: '' },
    repo: '',
    tags: ['Excel', 'Power Query', 'Odoo'],
    hasPipeline: false,
    shots: [],
    stack: ['ERP Odoo', 'Excel avancé', 'Power Query', 'Analyse financière', 'Reporting'],
    fr: {
      kicker: 'URSCOP EST · Avril 2024 — Septembre 2025',
      title: 'Automatisation du reporting financier',
      summary: 'Collecte, structuration et analyse des données financières des entreprises accompagnées, puis automatisation des tableaux de bord servant aux rapports de révision.',
      context: "En stage puis en alternance chez URSCOP EST, j'ai pris en charge la collecte et l'analyse des données financières des entreprises accompagnées, et l'automatisation des tableaux de bord utilisés pour les rapports de révision transmis à la direction.",
      steps: [
        { n: '01', title: 'Collecte', body: "Extraction et structuration des données financières depuis l'ERP Odoo et Excel." },
        { n: '02', title: 'Analyse', body: 'Analyse des soldes intermédiaires de gestion, de la rentabilité et de la structure financière.' },
        { n: '03', title: 'Automatisation', body: 'Automatisation des tableaux de bord financiers, réduisant le reporting manuel.' },
        { n: '04', title: 'Restitution', body: "Contribution à l'élaboration des rapports de révision pour la direction et à la veille sur les entreprises en difficulté." }
      ],
      results: [
        'Des tableaux de bord financiers actualisés sans ressaisie manuelle.',
        "Une lecture homogène de la rentabilité et de la structure financière d'un dossier à l'autre.",
        'Une veille sur les entreprises en redressement judiciaire intégrée au suivi.'
      ]
    },
    en: {
      kicker: 'URSCOP EST · April 2024 — September 2025',
      title: 'Automating financial reporting',
      summary: 'Collecting, structuring and analysing financial data for the supported companies, then automating the dashboards behind the audit-review reports.',
      context: 'As an intern and then apprentice at URSCOP EST, I handled the collection and analysis of financial data for the supported companies, and automated the dashboards used in the review reports sent to management.',
      steps: [
        { n: '01', title: 'Collection', body: 'Extracting and structuring financial data from the Odoo ERP and Excel.' },
        { n: '02', title: 'Analysis', body: 'Analysis of interim operating balances, profitability and financial structure.' },
        { n: '03', title: 'Automation', body: 'Automated financial dashboards, cutting down manual reporting.' },
        { n: '04', title: 'Delivery', body: 'Contributed to the review reports for management and to monitoring companies in difficulty.' }
      ],
      results: [
        'Financial dashboards refreshed without manual re-entry.',
        'A consistent read on profitability and financial structure across files.',
        'Monitoring of companies in receivership folded into the follow-up.'
      ]
    }
  },
  {
    id: 'modele',
    draft: true, // ← fiche modèle : copie-la, change l'id, remplis-la et retire cette ligne
    dashboard: { tool: 'Power BI', url: '' },
    repo: '',
    tags: ['SQL', 'Power BI'],
    hasPipeline: false,
    shots: [],
    stack: ['SQL', 'Power BI'],
    fr: {
      kicker: 'Projet personnel · 2026',
      title: 'Titre du projet',
      summary: 'Une phrase sur le problème et le livrable.',
      context: 'Le problème posé, les données disponibles et la décision que le travail doit éclairer.',
      steps: [
        { n: '01', title: 'Contexte', body: 'Le problème, les données de départ et la question métier.' },
        { n: '02', title: 'Démarche', body: 'Collecte, nettoyage, modélisation.' },
        { n: '03', title: 'Livrable', body: 'Le dashboard, le modèle ou le rapport produit.' },
        { n: '04', title: 'Résultat', body: 'Ce que le projet a changé, chiffré si possible.' }
      ],
      results: ['Un résultat mesurable.']
    },
    en: {
      kicker: 'Personal project · 2026',
      title: 'Project title',
      summary: 'One sentence on the problem and the deliverable.',
      context: 'The problem, the available data and the decision the work informs.',
      steps: [
        { n: '01', title: 'Context', body: 'The problem, the starting data and the business question.' },
        { n: '02', title: 'Approach', body: 'Collection, cleaning, modelling.' },
        { n: '03', title: 'Deliverable', body: 'The dashboard, model or report produced.' },
        { n: '04', title: 'Outcome', body: 'What the project changed, quantified where possible.' }
      ],
      results: ['A measurable outcome.']
    }
  }
];

window.FILTERS = ['Python', 'SQL', 'Power BI', 'Excel', 'Power Query', 'Streamlit', 'Machine Learning', 'LLM', 'Odoo'];

/* 3. Textes de l'interface */
window.T = {
  fr: {
    navProjects: 'Projets', navSkills: 'Compétences', navPath: 'Parcours', navCerts: 'Certifications', navContact: 'Contact',
    langSwitch: 'EN', langAria: 'Switch to English', cv: 'CV (PDF)', code: 'Voir le code ↗', copy: 'Copier', copied: 'Adresse e-mail copiée',
    themeDark: '☾ Nuit', themeLight: '☀ Jour',
    heroKicker: 'Data Analyst · Business Intelligence · Pilotage & valorisation de la donnée',
    heroLead: "Data Analyst orienté business et performance, je transforme des données complexes en indicateurs fiables et exploitables pour accompagner la prise de décision. À l'aise sur l'ensemble de la chaîne de valorisation de la donnée — collecte, transformation, analyse, visualisation et restitution — j'évolue avec aisance dans des environnements techniques et métiers.",
    heroStatus: "M2 Data Management à aivancity, après un Master Contrôle et Finance d'entreprise. Je recherche un CDI de Data Analyst à partir d'octobre 2026.",
    certBadge: 'AWS Certified AI Practitioner — 936/1000',
    ctaProjects: 'Voir les projets', ctaContact: 'Me contacter', ctaMail: 'Écrire un e-mail',
    projectsTitle: 'Projets',
    projectsLead: "Des projets menés de bout en bout, du recueil des données jusqu'à la restitution. Chaque fiche détaille le contexte, la démarche, le livrable et le résultat.",
    filterLabel: 'Filtrer par outil', filterAll: 'Tous', noProject: 'Aucun projet avec cet outil pour le moment.',
    caseCta: "Lire l'étude de cas →",
    back: '← Retour aux projets', backProjects: 'Retour aux projets',
    skillsTitle: 'Compétences & outils',
    pathTitle: 'Parcours', expTitle: 'Expériences', eduTitle: 'Formations',
    certTitle: 'Certifications',
    certLead: "Certifications obtenues dans le cadre du Master 2 et en autoformation.",
    certVerify: 'Vérifier le badge ↗',
    notesTitle: 'Veille & écrits', notesLead: "Notes de lecture et retours d'expérience.",
    contactTitle: 'Contact',
    contactLead: "Disponible à partir d'octobre 2026 pour un CDI, en télétravail ou en présentiel, en Île-de-France ou partout en France.",
    phone: 'Téléphone', location: 'Localisation',
    archTitle: 'Architecture des données',
    archLead: 'Les données passent par trois couches, du brut au prêt-à-analyser, stockées en Parquet, avant la restitution.',
    deliverables: 'Livrables', resultsTitle: 'Résultats', stackTitle: 'Stack',
    dashboard: 'Voir le dashboard',
    footer: 'Data Analyst · Portfolio 2026', backTop: 'Haut de page ↑'
  },
  en: {
    navProjects: 'Projects', navSkills: 'Skills', navPath: 'Background', navCerts: 'Certifications', navContact: 'Contact',
    langSwitch: 'FR', langAria: 'Passer en français', cv: 'Resume (PDF)', code: 'View the code ↗', copy: 'Copy', copied: 'Email address copied',
    themeDark: '☾ Night', themeLight: '☀ Day',
    heroKicker: 'Data Analyst · Business Intelligence · Data-driven performance',
    heroLead: 'A business- and performance-minded data analyst, I turn complex data into reliable, actionable indicators that support decision-making. Comfortable across the whole data value chain — collection, transformation, analysis, visualisation and reporting — I move easily between technical and business environments.',
    heroStatus: "MSc Data Management at aivancity, after a master's in management control and corporate finance. Looking for a permanent Data Analyst role from October 2026.",
    certBadge: 'AWS Certified AI Practitioner — 936/1000',
    ctaProjects: 'See the projects', ctaContact: 'Get in touch', ctaMail: 'Send an email',
    projectsTitle: 'Projects',
    projectsLead: 'Projects run end to end, from data collection through to reporting. Each card covers the context, the approach, the deliverable and the outcome.',
    filterLabel: 'Filter by tool', filterAll: 'All', noProject: 'No project with this tool yet.',
    caseCta: 'Read the case study →',
    back: '← Back to projects', backProjects: 'Back to projects',
    skillsTitle: 'Skills & tools',
    pathTitle: 'Background', expTitle: 'Experience', eduTitle: 'Education',
    certTitle: 'Certifications',
    certLead: 'Certifications earned during the MSc and through self-study.',
    certVerify: 'Verify the badge ↗',
    notesTitle: 'Notes & writing', notesLead: 'Reading notes and field lessons.',
    contactTitle: 'Contact',
    contactLead: 'Available from October 2026 for a permanent role, remote or on site, in the Paris area or anywhere in France.',
    phone: 'Phone', location: 'Location',
    archTitle: 'Data architecture',
    archLead: 'Data moves through three layers, from raw to analysis-ready, stored as Parquet, before delivery.',
    deliverables: 'Deliverables', resultsTitle: 'Outcomes', stackTitle: 'Stack',
    dashboard: 'Open the dashboard',
    footer: 'Data Analyst · Portfolio 2026', backTop: 'Back to top ↑'
  }
};

/* 4. Compétences */
window.SKILLS = {
  fr: [
    { title: 'Analyse & gestion de données', items: ['Data cleaning', 'Data exploration', 'Data quality', 'ETL / ELT', 'Suivi de KPI'] },
    { title: 'Langages & outils', items: ['SQL', 'Python (Pandas, NumPy, Scikit-Learn)', 'Excel avancé', 'Power Query'] },
    { title: 'Business Intelligence', items: ['Power BI', 'Looker Studio', 'Python (Streamlit, Plotly)'] },
    { title: 'Méthodes analytiques', items: ['Analyse descriptive', 'Diagnostic', 'Prévision', 'Clustering', 'ACP (PCA)'] },
    { title: 'IA & Cloud', items: ['AWS Certified AI Practitioner', 'LLM & IA générative', 'Machine learning supervisé / non supervisé'] },
    { title: 'Environnements métier', items: ['ERP Odoo', 'Reporting financier', 'Microsoft Teams', 'Pack Office'] },
    { title: "Domaines d'intérêt", items: ['Finance & contrôle de gestion data', 'Data quality & gouvernance', 'Product & marketing analytics', 'Pilotage de la performance', 'Supply chain & opérations'] },
    { title: 'Langues', items: ['Français', 'Anglais', 'Bambara'] }
  ],
  en: [
    { title: 'Data analysis & management', items: ['Data cleaning', 'Data exploration', 'Data quality', 'ETL / ELT', 'KPI tracking'] },
    { title: 'Languages & tools', items: ['SQL', 'Python (Pandas, NumPy, Scikit-Learn)', 'Advanced Excel', 'Power Query'] },
    { title: 'Business Intelligence', items: ['Power BI', 'Looker Studio', 'Python (Streamlit, Plotly)'] },
    { title: 'Analytical methods', items: ['Descriptive analysis', 'Diagnostics', 'Forecasting', 'Clustering', 'PCA'] },
    { title: 'AI & Cloud', items: ['AWS Certified AI Practitioner', 'LLMs & generative AI', 'Supervised / unsupervised ML'] },
    { title: 'Business environments', items: ['Odoo ERP', 'Financial reporting', 'Microsoft Teams', 'Office suite'] },
    { title: 'Areas of interest', items: ['Finance & management control', 'Data quality & governance', 'Product & marketing analytics', 'Performance management', 'Supply chain & operations'] },
    { title: 'Languages', items: ['French', 'English', 'Bambara'] }
  ]
};

/* 5. Expériences */
window.EXPERIENCE = {
  fr: [
    { date: 'Oct. 2024 — Sept. 2025', role: "Alternant réviseur — analyste financier d'entreprise", org: 'URSCOP EST, Nancy', body: "Collecte, structuration et analyse de données financières (ERP Odoo, Excel), analyse des soldes intermédiaires de gestion, de la rentabilité et de la structure financière, automatisation des tableaux de bord et contribution aux rapports de révision." },
    { date: 'Avr. 2024 — Juil. 2024', role: "Stagiaire réviseur — analyste financier d'entreprise", org: 'URSCOP EST, Nancy', body: 'Analyse financière des entreprises accompagnées et participation à la veille sur les entreprises en difficulté (redressement judiciaire).' }
  ],
  en: [
    { date: 'Oct 2024 — Sept 2025', role: 'Apprentice auditor — corporate financial analyst', org: 'URSCOP EST, Nancy', body: 'Collection, structuring and analysis of financial data (Odoo ERP, Excel), analysis of interim operating balances, profitability and financial structure, dashboard automation and contribution to review reports.' },
    { date: 'Apr 2024 — Jul 2024', role: 'Intern auditor — corporate financial analyst', org: 'URSCOP EST, Nancy', body: 'Financial analysis of the supported companies and monitoring of companies in difficulty (receivership).' }
  ]
};

/* 6. Formations */
window.EDUCATION = {
  fr: [
    { date: 'Oct. 2025 — Sept. 2026', degree: 'Master 2 Data Management', school: 'aivancity, Villejuif' },
    { date: 'Oct. 2024 — Sept. 2025', degree: 'Master 1 Data Management', school: 'aivancity, Cachan' },
    { date: 'Sept. 2022 — Sept. 2024', degree: "Master Contrôle et Finance d'Entreprise", school: 'IAE Nancy' },
    { date: 'Sept. 2021 — Avr. 2022', degree: 'Licence Gestion — Comptabilité et Finance', school: 'Université Clermont Auvergne' },
    { date: 'Nov. 2018 — Juin 2021', degree: 'Licence Gestion — Finance', school: "Institut Universitaire d'Abidjan, Côte d'Ivoire" }
  ],
  en: [
    { date: 'Oct 2025 — Sept 2026', degree: 'MSc 2 Data Management', school: 'aivancity, Villejuif' },
    { date: 'Oct 2024 — Sept 2025', degree: 'MSc 1 Data Management', school: 'aivancity, Cachan' },
    { date: 'Sept 2022 — Sept 2024', degree: "Master's in Management Control & Corporate Finance", school: 'IAE Nancy' },
    { date: 'Sept 2021 — Apr 2022', degree: 'BSc Management — Accounting & Finance', school: 'Université Clermont Auvergne' },
    { date: 'Nov 2018 — Jun 2021', degree: 'BSc Management — Finance', school: "Institut Universitaire d'Abidjan, Ivory Coast" }
  ]
};

/* 7. Certifications (score: '' si non communiqué) */
window.CERTS = [
  {
    name: 'AWS Certified AI Practitioner',
    code: 'AIF-C01',
    score: '936', scoreMax: '1000',
    org: 'Amazon Web Services',
    fr: { status: 'Obtenue · 2026', detail: "Fondamentaux de l'IA et du ML, IA générative, services AWS (Bedrock, SageMaker), IA responsable, sécurité et gouvernance." },
    en: { status: 'Earned · 2026', detail: 'AI and ML fundamentals, generative AI, AWS services (Bedrock, SageMaker), responsible AI, security and governance.' }
  }
];

/* 8. Veille & écrits (affichés seulement si CONFIG.showNotes = true) */
window.NOTES = {
  fr: [
    { tag: 'Data quality', title: "Ce qu'un contrôle qualité change dans un reporting", body: 'Le constat, ce que tu as testé, ce que tu retiens.', url: '' }
  ],
  en: [
    { tag: 'Data quality', title: 'What quality control changes in a report', body: 'The observation, what you tried, what you took away.', url: '' }
  ]
};

/* 9. Architecture Bronze / Silver / Gold (projet de M2) */
window.PIPELINE = {
  fr: [
    { layer: 'Bronze', name: 'Données brutes', body: 'Ingestion via APIs financières, stockage en Parquet, aucune transformation.', ink: 'var(--color-neutral-700)' },
    { layer: 'Silver', name: 'Données nettoyées', body: 'Contrôle qualité, harmonisation des sources et historisation.', ink: 'var(--color-accent-700)' },
    { layer: 'Gold', name: 'Données prêtes à l’analyse', body: 'Indicateurs financiers, agrégats et tables servant les dashboards.', ink: 'var(--color-accent-2-700)' },
    { layer: 'Restitution', name: 'Dashboards & recommandations', body: 'Streamlit, Plotly et un LLM pour la lecture stratégique.', ink: 'var(--color-neutral-700)' }
  ],
  en: [
    { layer: 'Bronze', name: 'Raw data', body: 'Ingested through financial APIs, stored as Parquet, untransformed.', ink: 'var(--color-neutral-700)' },
    { layer: 'Silver', name: 'Cleaned data', body: 'Quality control, source harmonisation and history keeping.', ink: 'var(--color-accent-700)' },
    { layer: 'Gold', name: 'Analysis-ready data', body: 'Financial indicators, aggregates and the tables behind the dashboards.', ink: 'var(--color-accent-2-700)' },
    { layer: 'Delivery', name: 'Dashboards & recommendations', body: 'Streamlit, Plotly and an LLM for the strategic read.', ink: 'var(--color-neutral-700)' }
  ]
};

window.ROLES = ['Data Analyst', 'BI Analyst', 'Data Scientist', 'Analytics Engineer', 'Data Steward', 'Financial Data Analyst', 'Data Quality', 'Contrôle de gestion data', 'Data Engineer', 'Data Product Owner'];
