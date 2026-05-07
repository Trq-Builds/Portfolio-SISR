/*-----------------------------------*\
  #DATA.JS - Contenu du Portfolio
\*-----------------------------------*/

export const profileData = {
  name: "Tariq LAABOUDI",
  role: "Étudiant SIO",
  avatar: "./assets/images/avatar-light.webp",
  avatarLight: "./assets/images/avatar-dark.webp",
  email: "tariq.laaboudi@fbi.one",
  socials: [
    { icon: "logo-github", link: "https://github.com/Trq-Builds" },
    { icon: "globe-outline", link: "https://drift.rip/K4ta" }
  ]
};

export const aboutData = {
  text: `<p>Étudiant en SIO-SISR, 2ᵉ année. Spécialisation réseaux. Intérêt marqué pour le hardware. Approche structurée, logique. Analyse, démonte, corrige. Optimisation systématique. Rien n’est laissé au hasard.</p>
         <p>À l’origine du projet Optimize Alot et de plusieurs documentations techniques. Conception de solutions directes, fonctionnelles, reproductibles. Expérience terrain sur Windows : diagnostic, dépannage, maintenance. Pas de théorie inutile. Juste ce qui fonctionne..</p>`,
};

export const resumeData = {
  education: [
    {
      school: "BTS SIO - SISR (Lycée Marie Curie)",
      date: "2023 — 2025",
      desc: "Option Solutions d'infrastructure, systèmes et réseaux."
    },
    {
      school: "Bac Pro SN (Lycée Saint-Pierre)",
      date: "2021 — 2024",
      desc: "Systèmes Numériques."
    }
  ],
  experience: [
    {
      title: "Stage Eursocan",
      date: "2025",
      desc: "Accueil client, dépannage PC (hardware/software) et gestion logistique."
    },
    {
      title: "Stage RPM MULTIMEDIA",
      date: "2023",
      desc: "Maintenance et réparation PC, électronique de base et support client."
    }
  ],
  skills: [
    { name: "Documentation Technique", percent: 80 },
    { name: "Hardware & Dépannage", percent: 90 },
    { name: "Admin Sys & Réseaux", percent: 60 },
    { name: "Gestion Infrastructure", percent: 50 }
  ]
};


// ========== OUTILS ==========
export const outilsData = [
  {
    title: "Intelligence Artificielle",
    icon: "ellipse-outline",
    items: [
      {
        name: "Gemini",
        description: "Modèle d’IA multimodal de Google : générer et analyser texte, images, audio et code. Véritable couteau suisse numérique infatigable.",
        link: "https://gemini.google/"
      },
      {
        name: "Claude",
        description: "Modèle d’IA de pointe d’Anthropic, spécialisé dans le raisonnement avancé et l’analyse de code. Un partenaire de réflexion d’une grande précision. C’est grâce à lui que ce portfolio a vu le jour.",
        link: "https://claude.ai/"
      },
      {
        name: "ChatGPT",
        description: "Modèle d’IA développé par OpenAI, capable d’aider à la génération de contenu et à la résolution de problèmes. Un outil polyvalent qui peut servir de support dans de nombreux contextes, selon les besoins.",
        link: "https://chatgpt.com/"
      },
      {
        name: "PerplexityAI",
        description: "Moteur de recherche conversationnel basé sur l’IA, fournissant des réponses synthétiques avec sources citées en temps réel.",
        link: "https://www.perplexity.ai/"
      }
    ]
  },
  {
    // Outils de Dev.
    title: "Développement & Outils",
    icon: "code-slash-outline",
    items: [
      {
        name: "Donarev19",
        description: "Permet de créer des adresses e-mail et de raccourcir des liens librement, selon les besoins, de manière simple et flexible. (Illimité.)",
        link: "https://donarev419.com/"
      },
      {
        name: "FMHY (FreeMediaHeckYeah)",
        description: "Une vaste collection de ressources numériques du web : un index communautaire très fourni pour découvrir outils et logiciels. Une petite mine d'or pour qui sait ce qu'il cherche.",
        link: "https://fmhy.net/"
      },
      {
        name: "GitHub",
        description: "Plateforme de forge logicielle et gestion de version : hébergement sécurisé et collaboration fluide via Git. L'épine dorsale de mes déploiements.",
        link: "https://github.com/Trq-Builds"
      },
      {
        name: "HandBrake",
        description: "Transcodeur vidéo open source de référence : il permet de convertir et d’optimiser des fichiers vidéo vers de nombreux formats modernes, avec fiabilité et simplicité.",
        link: "https://handbrake.fr/"
      },
      {
        name: "MPC-QT",
        description: "Lecteur multimédia léger inspiré de Media Player Classic et réécrit en Qt : simple, rapide et sans fioritures pour la lecture multimédia. Une alternative très efficace à VLC.",
        link: "https://mpc-qt.github.io/"
      },
      {
        name: "Nagi",
        description: "Lecteur de musique open-source, moderne et épuré : basé sur WinUI 3, il propose une expérience d’écoute fluide, centrée sur l’essentiel et une interface soignée. Particulièrement agréable avec des fichiers .FLAC.",
        link: "https://github.com/Anthonyy232/Nagi"
      },
      {
        name: "NanaZip",
        description: "Dérivé moderne de 7-Zip pour Windows : gestion d’archives haute performance, avec intégration native au menu contextuel de Windows 11 et une interface soignée (Mica).",
        link: "https://github.com/M2Team/NanaZip"
      },
      {
        name: "Netlify",
        description: "Solution gratuite pour le déploiement de sites web statiques, simple à utiliser et adaptée aux projets personnels comme aux petits déploiements.",
        link: "https://www.netlify.com/"
      },
      {
        name: "Parabolic",
        description: "Utilitaire de téléchargement de vidéos et d’audio basé sur yt-dlp : une interface moderne et intuitive pour récupérer du contenu facilement.",
        link: "https://github.com/NickvisionApps/Parabolic"
      },
      {
        name: "Arcod",
        description: "Scrapper de musique : un outil capable de récupérer rapidement des morceaux en qualité lossless en .FLAC. Pour ceux qui aiment le bon son, cela mérite au moins un coup d'œil.",
        link: "https://www.arcod.xyz/"
      },
      {
        name: "VSCodium",
        description: "Éditeur de code open source basé sur les binaires libres de VS Code : léger, performant et pensé pour mieux respecter la vie privée.",
        link: "https://vscodium.com/"
      },
    ]
  },
      
      
  {
    title: "Documentation & Organisation",
    icon: "document-text-outline",
    items: [
     {
        name: "Notion",
        description: "Espace de travail tout-en-un : prise de notes, gestion de bases de données et planification de projets. Mon second cerveau, pour tout centraliser.",
        link: "https://www.notion.so/"
      },
      {
        name: "Markdown",
        description: "Langage de balisage léger : structuration de texte simple, rapide et universelle. C’est mon standard pour une documentation claire et pérenne. C’est grâce à lui que j’en suis là avec toutes mes docs !",
        link: "https://www.markdownguide.org/"
      },
    ]
  }
];


// ========== CERTIFICATIONS ==========
export const certificationsData = [
  {
    title: "Certifications obtenues",
    icon: "ribbon-outline",
    items: [
      {
        name: "Exemple — Certification 1",
        issuer: "Organisme",
        date: "2024",
        description: "Description courte de la certification.",
        link: ""
      }
    ]
  },
  {
    title: "En cours / Préparées",
    icon: "time-outline",
    items: [
      {
        name: "Exemple — Certification en cours",
        issuer: "Organisme",
        date: "2025",
        description: "Certification en cours de préparation.",
        link: ""
      }
    ]
  }
];


// ========== MATÉRIEL ==========
export const materielData = [
  {
    title: "PC",
    icon: "desktop-outline",
    items: [
      {
        name: "AMD Ryzen 7 9700X",
        description: "Processeur 8 Cores / 16 Threads (O.C à 5.62GHz) - PBO et Powerlimit débloqués + Tweaks BIOS",
        link: "https://www.amd.com/fr/products/processors/desktops/ryzen/9000-series/amd-ryzen-7-9700x.html"
      },
      {
        name: "XFX Radeon RX 5700 XT RAW III",
        description: "8Go de VRAM GDDR6 - Performances correctes en 1080P + BIOS Custom et Powerlimit désactivé.",
        link: "https://www.xfxforce.com/gpus/radeon-tm-rx-5700-xt-8gb-gddr6-thicc-iii-ultra"
      },
      {
        name: "32 Go Kingston Fury DDR5",
        description: "Mémoire cadencée à 5200 MT/s - Profil EXPO actif - (Kit 6000 MT/s CL26 envisagé)",
        link: "https://www.kingston.com/dataSheets/KF552C40BB-16.pdf"
      },
      {
        name: "Gigabyte X870M AORUS ELITE WIFI7",
        description: "Carte mère haut de gamme - WiFi 7 et PCIe 5.0",
        link: "https://www.gigabyte.com/Motherboard/X870M-AORUS-ELITE-WIFI7"
      },
      {
        name: "Boîtier DeepCool CH370",
        description: "Châssis Micro-ATX compact avec flux d'air optimisé",
        link: "https://fr.deepcool.com/products/Cases/CH370-Micro-ATX-Case/2022/15972.shtml"
      },
      {
        name: "Artic Liquid Freezer III Pro",
        description: "AIO CPU haute performance.",
        link: "https://www.arctic.de/en/Liquid-Freezer-III-Pro-240/ACFRE00178A"
      },
       {
        name: " ARCTIC P14 Pro PST 140mm - ARCTIC P12 Pro 120mm",
        description: "Ventilation et refroidissement max.",
        link: "https://www.arctic.de/en/P14-Pro-PST/ACFAN00314A"
      },
      {
        name: "Samsung 9100PRO 1To",
        description: "SSD NVMe PCIe 5.0 - SSD pour l'OS.",
        link: "https://www.samsung.com/fr/memory-storage/nvme-ssd/9100-pro-1tb-nvme-pcie-gen-5-mz-vap1t0bw/"
      },
      {
        name: "Samsung 870 EVO 500Go",
        description: "SSD SATA - Stockage secondaire fiable (increvable)",
        link: "https://www.samsung.com/fr/memory-storage/sata-ssd/870-evo-500gb-sata-3-2-5-ssd-mz-77e500b-eu/"
      },
      {
        name: "Crucial P3 500Go",
        description: "SSD NVMe PCIe 3.0 - Stockage Secondaire Rapide (Jeux-Vidéos)",
        link: "https://www.crucial.fr/ssd/p3/ct500p3ssd8"
      }
    ]
  },
  {
    title: "Périphériques & Affichage",
    icon: "hardware-chip-outline",
    items: [
      {
        name: "Iiyama G-MASTER PL2730H",
        description: "Moniteur 27 pouces 1080p - (O.C à 100Hz) (Upgrade vers OLED en 240Hz envisagé)",
        link: "https://iiyama.com/gl_en/products/g-master-g2730hsu-b1/"
      },
      {
        name: "Mes Claviers",
        description: "Hama : clavier bureautique standard AZERTY (sans fil) | Clavier de Jeu : MAD68R : Hall Effect - Switches KUNLUN-AXIS - Mods : sound dampening + gasket mount.",
        link: "https://madlionskeyboard.com/fr/produit/mad68he/"
      },
      {
        name: "VXE R1 PRO MAX",
        description: "Souris avec PixArt PAW3395  500mAh  Switches Kailh White Blade  Poids : ~54 g",
        link: "https://www.atk.store/fr/products/vxe-dragonfly-r1-series-wireless-mouse?variant=44857375588570"
      },
      {
        name: "Matos Son",
        description: "Casque principal : Corsair HS60 Pro (connecté en analogique à la carte mère, réglée sur 24 bits / 96kHz, avec sortie WASAPI. | IEMs : Kiwi Ears Cadenza – driver dynamique en béryllium de 10mm (audiophile) - (D.A.C et Amplificateur envisagé).",
        link: "https://kiwiears.com/products/kiwi-ears-cadenza"
      }
    ]
  },
  {
    title: "Réseau",
    icon: "globe-outline",
    items: [
      {
        name: "Freebox ULTRA",
        description: " Réseau ultra-rapide - Débit symètrique sur le PC (2.5G descendant et montant) - (8 Gbit/s en débit descendant et montant (débits maximum théoriques) - (Optimisations au niveau du Routeur et Freebox O.S)",
        link: "https://www.free.fr/freebox/freebox-ultra"
      }
    ]
  }
];


// ========== PORTFOLIO ==========
export const portfolioData = [
 {
    title: "CEJMA ・ TP1 & TP2",
    category: "Autre",
    image: "https://images-ext-1.discordapp.net/external/n7BuANsQtp4mUoJq299lU2zICMhAcjXAGXmePan-aW4/https/opengraph.githubassets.com/95ab98531a95740dda9469d09d411cdb1626533705bb96ac4e0742f71e6c9dac/Trq-Builds/TP1-TP2-CEJMA?format=webp&width=1500&height=750",
    link: "https://github.com/Trq-Builds/TP1-TP2-CEJMA"
  },
 {
    title: "Devoir - 1 BTS SIO ・ SISR 2ᵉ année.",
    category: "Autre",
    image: "https://images-ext-1.discordapp.net/external/BiUhlkYd0rBAgKjEPAwvcGk4mYiDnuJJJvmHXzXzcA8/https/opengraph.githubassets.com/5580fcdd6c8a50fa72822c69a4335d1bd98c0100d9db4ee6796e28fc545da734/Trq-Builds/DEVOIR-CEJMA-1?format=webp&width=1500&height=750",
    link: "https://github.com/Trq-Builds/DEVOIR-CEJMA-1"
  },
{
    title: "Devoir - 2 ・ BTS SIO SISR 2ᵉ année.",
    category: "Autre",
    image: "https://images-ext-1.discordapp.net/external/uHOzEQUx2VpoZGycRfKs4QTgCiK2KHQmhpi1YebqOHY/https/opengraph.githubassets.com/02d4a22c885a0103f010021dfefca7be19951d6cb078dd00be252e0c36f94583/Trq-Builds/DEVOIR-CEJMA-2?format=webp&width=1500&height=750",
    link: "https://github.com/Trq-Builds/DEVOIR-CEJMA-2"
  },
 {
    title: "Doc-Technique-installation-Debian-13-sans-interface-graphique",
    category: "Linux",
    image: "https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_auto/linuxiac.com/wp-content/uploads/2024/12/trixie-artwork-1024x576.jpg",
    link: "https://github.com/Trq-Builds/Doc-Technique-installation-Debian-13-sans-interface-graphique"
  },
 {
    title: "Doc-Technique-Installation-Windows-11",
    category: "Windows",
    image: "https://images-ext-1.discordapp.net/external/nqUz3WMhMLUSm5WoE35AJYk_6FKC-3QM0dHRP75im5E/https/opengraph.githubassets.com/c506bc37809506146ba7039b28b439916f795615e958be35605677d89a8fd81f/Trq-Builds/Doc-Technique-Installation-Windows-11?format=webp&width=1500&height=750",
    link: "https://images-ext-1.discordapp.net/external/nqUz3WMhMLUSm5WoE35AJYk_6FKC-3QM0dHRP75im5E/https/opengraph.githubassets.com/c506bc37809506146ba7039b28b439916f795615e958be35605677d89a8fd81f/Trq-Builds/Doc-Technique-Installation-Windows-11?format=webp&width=1500&height=750"
  },
 {
    title: "Doc-Technique-Installation-Windows-Server-2025",
    category: "Windows",
    image: "https://imgs.search.brave.com/BANAXRIGNncZeU3BCbXQ72vhobKjruKjou5TIGcq0_w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2l4c3RhdGlj/LmNvbS9tZWRpYS8w/OTVhY2NfZTBhNDc5/NzBkZjM2NGQxZGEx/NjA3MzlmY2Q0NGE2/Njd-bXYyLnBuZy92/MS9maXQvd185Nzks/aF82MDgscV85MCxl/bmNfYXZpZixxdWFs/aXR5X2F1dG8vMDk1/YWNjX2UwYTQ3OTcw/ZGYzNjRkMWRhMTYw/NzM5ZmNkNDRhNjY3/fm12Mi5wbmc",
    link: "https://github.com/Trq-Builds/Doc-Technique-Installation-Windows-Server-2025"
  },
  {
    title: "Doc-Technique-Service-de-deploiement-FOG",
    category: "Linux",
    image: "https://images-ext-1.discordapp.net/external/Kdnuz-wYoqoQ-Ms7hloWkDBNu1woedcq3yAOe_ZlrJI/https/opengraph.githubassets.com/4af882787510cec0398c8afa198ae99cdc9cd5b14e325e1f899a6e4af7057b89/Trq-Builds/Doc-Technique-Service-de-deploiement-FOG?format=webp&width=1650&height=825",
    link: "https://github.com/Trq-Builds/Doc-Technique-Service-de-deploiement-FOG"
  },
{
    title: "Doc-Technique-Superviser un réseau avec Zabbix et Grafana.",
    category: "Linux",
    image: "https://images-ext-1.discordapp.net/external/5CruwiXWW80WzKrb3jXWGijESfZJawcii0JIUM1CNDA/https/opengraph.githubassets.com/12e95ee8947fe803d5e5323db8accc609a3f91a6c5ea4f73c01c1874529e6b27/Trq-Builds/Doc-Technique-Superviser-Un-Reseau-Avec-Zabbix-et-Grafana?format=webp&width=1500&height=750",
    link: "https://github.com/Trq-Builds/Doc-Technique-Superviser-Un-Reseau-Avec-Zabbix-et-Grafana"
  },
  {
    title: "Documentation TP : Administrer un controleur de domaine",
    category: "Windows",
    image: "https://images-ext-1.discordapp.net/external/u96J1Oq9Qwr2EEZIkAHagvYs4hzi8udT8zKocSctOkA/https/opengraph.githubassets.com/6c6dc15705e48558420ca1f66c1dc3a5b50b56ddd8f50d5fe4d27045266be97b/Trq-Builds/Doc-Technique-Administrer-Un-Controleur-De-Domaine?format=webp&width=1650&height=825",
    link: "https://github.com/Trq-Builds/Doc-Technique-Administrer-Un-Controleur-De-Domaine"
  },
{
    title: "GLPI",
    category: "Autre",
    image: "https://images-ext-1.discordapp.net/external/0satjidUaFkdIgmkBl50kCut4fvVOkoi3neLfuFsoG4/https/opengraph.githubassets.com/dcbdca28df39c488f98596cb298b82ad3ae684d8ec1b3ab97cc8c0463c777d69/Trq-Builds/GLPI?format=webp&width=1500&height=750",
    link: "https://github.com/Trq-Builds/GLPI"
  },
  {
    title: "Repos Portfolio",
    category: "Autre",
    image: "https://images-ext-1.discordapp.net/external/BdIp7W1i0SBh5fZTPzrB9fnyzEWPTaf_vQFMwUyuKBA/https/opengraph.githubassets.com/17cefd3511913f4e2f4f733da87b007b8f4ef2b19dab60530cf4d8eaefcb150e/Trq-Builds/Portfolio-V1.8?format=webp&width=1650&height=825",
    link: "https://github.com/Trq-Builds/2025-Portfolio-V1.8"
  },
{
    title: "TP-Des-serveurs-aux-services",
    category: "Autre",
    image: "https://cdn.discordapp.com/attachments/1414173910802632775/1483050658654453760/TP-Des-serveurs-aux-services.png?ex=69b92e0e&is=69b7dc8e&hm=dac196f14084d16e5a7df095ff41a2d04c5a554754ea914fc94eb5eba3167399&animated=true",
    link: "https://github.com/Trq-Builds/TP-Des-serveurs-aux-services"
  },
];

// ========== STAGE ==========
export const stageData = [
  {
    company: "Eursocan",
    date: "2025",
    role: "Technicien informatique",
    missions: [
      "Accueil et diagnostic client — identification des pannes hardware et software",
      "Dépannage PC : remplacement de composants, réinstallation OS, récupération de données",
      "Gestion logistique : réception, inventaire et suivi du matériel",
      "Rédaction de fiches d'intervention et comptes-rendus techniques",
      "Audit du matériel informatique en préparation d’un déménagement.",
      "Tests en chaîne des composants matériels : disques, CPU, GPU, mémoire."
    ]
  },
  {
    company: "RPM Multimédia",
    date: "2023",
    role: "Technicien maintenance",
    missions: [
      "Maintenance préventive et corrective — PC fixes et portables",
      "Réparation de composants électroniques et soudure de base",
      "Support client : explication des interventions et conseils d'usage",
      "Nettoyage et reconditionnement de machines avant revente"
    ]
  }
];

// ========== VEILLE INFORMATIQUE ==========
export const veilleData = [
  {
    title: "CPU — Architectures Hybrides",
    icon: "hardware-chip-outline",
    items: [
      {
        name: "Intel Arrow Lake (Core Ultra 200)",
        description: "Architecture hétérogène Lion Cove / Skymont. P-Core : 18 ports d'exécution, L3 jusqu'à 36 Mo. E-Core Skymont : 26 ports de distribution, débit IA ×2 vs Raptor Lake. Pilotage énergétique via Thread Director V2 — pertinent pour le dimensionnement de postes à faible TDP.",
        link: "https://hardwareand.co/actualites/longues/intel-lance-ses-core-ultra-200s-ca-y-est-arrow-lake-est-de-sortie"
      },
      {
        name: "AMD Zen 5 (Ryzen 9000)",
        description: "Hausse IPC structurelle sur pipeline front-end élargi. Gravure TSMC 4nm/3nm selon SKU. Scalabilité HPC confirmée via chiplets CCD + IOD. Intérêt SISR : rapport cœurs/TDP optimal pour des serveurs de fichiers ou hyperviseurs légers.",
        link: "https://www.lesnumeriques.com/cpu-processeur/processeurs-amd-ryzen-9000-zen5-ils-debarquent-avec-des-performances-impressionnantes-n222455.html"
      }
    ]
  },
  {
    title: "GPU — Rendu Neuronal",
    icon: "layers-outline",
    items: [
      {
        name: "NVIDIA Blackwell (RTX 50xx)",
        description: "Tensor Cores 5e gen : support FP4 natif pour inférence LLM locale. DLSS 4 Multi-Frame Generation : génération de 3 trames interpolées pour 1 rendue. Conséquence infra : charge GPU déplacée partiellement vers l'inférence IA plutôt que le seul rastérisation.",
        link: "https://pausehardware.com/architecture-nvidia-blackwell-rtx-50/"
      },
      {
        name: "AMD RDNA 4 (RX 9070 XT)",
        description: "16 Go GDDR6 à 20 Gbps + Infinity Cache 3e gen (64 Mo). RT accéléré : compression BVH améliorée, réduction du bottleneck intersection. FSR 4 basé sur ML. Point de vigilance : support driver Linux (amdgpu) encore en consolidation sur certains kernels.",
        link: "https://hardwareand.co/actualites/longues/l-architecture-rdna-4-est-officielle-amd-annonce-enfin-les-details-techniques-des-rx-9070"
      }
    ]
  },
  {
    title: "IA embarquée — NPU",
    icon: "flash-outline",
    items: [
      {
        name: "Intel NPU 3 (Core Ultra / Arrow Lake)",
        description: "Moteur neuronal dédié : 13 TOPS isolés du CPU/GPU. Exécution locale de LLM légers (Phi-3, LLaMA 3.2 quantisé). Enjeu SISR direct : inférence on-premise = données hors cloud = conformité RGPD maintenue sans latence réseau. Vecteur d'adoption en PME prévisible à 18 mois.",
        link: "https://www.pcmag.com/news/intel-unveils-next-gen-arrow-lake-desktop-cpus-theyre-all-about-efficiency"
      }
    ]
  },
  {
    title: "Chaines Youtube",
    icon: "logo-youtube",
    items: [
      {
        name: "optimum-tech",
        description: "Optimum Tech - chaîne YouTube dirigée par Ali Sayed. Montage PC haut de gamme, configurations gaming, mini-PC, périphériques sur mesure. Minimaliste, épurée, focalisée sur le détail esthétique et technique.",
        link: "https://www.youtube.com/@optimumtech"
      },
      {
        name: "Jigfio",
        description: "Jigfio est une chaîne YouTube française spécialisée dans la technologie, créée en 2011 par un passionné d'informatique basé à Limoges. Initialement reconnue pour ses tests poussés et critiques honnêtes de matériel informatique.",
        link: "https://www.youtube.com/@Jigfio"
      },
      {
        name: "Vex",
        description: "Une chaîne tech et PC gaming, avec un ton franc et des vidéos d'analyse.",
        link: "https://www.youtube.com/@vextakes"
      },
      {
        name: "PAX PC",
        description: "PAXPC - chaîne YouTube française, opérée par Pax. Discret, méthodique, approche clinique. Tests rigoureux, comparatifs précis, guides sans détour.",
        link: "https://www.youtube.com/@PAXPC"
      },
      {
        name: "Linus Tech Tips (LTT) ",
        description: "Linus Tech Tips est une équipe passionnée d’experts « professionnellement curieux » en technologie grand public et en production vidéo, dont l’objectif est d’informer et de divertir.",
        link: "https://www.youtube.com/@LinusTechTips"
      }
    ]
  },
  {
    title: "Hardware",
    icon: "hardware-chip-outline",
    items: [
      {
        name: "Video Cardz",
        description: "VideoCardz est un site d'actualité spécialisé dans les cartes graphiques, les GPU et le hardware PC. Il publie surtout des infos sur les nouveautés, les annonces, les tests, les rumeurs et les fuites du secteur.",
        link: "https://videocardz.com/"
      },
      {
        name: "Overclocking.com",
        description: "Overclocking.com plateforme française fondée en 2011 - Communauté active, précise, exigeante.",
        link: "https://overclocking.com/"
      },
      {
        name: "TechPowerUp",
        description: "TechPowerUp - plateforme anglophone fondée en 2004. Analyse approfondie du matériel informatique. Autorité technique — froide, fiable, incontestable.",
        link: "https://www.techpowerup.com/"
      },
      {
        name: "pausehardware.com",
        description: "pausehardware.com : site français spécialisé hardware et PC gaming, avec actualités, tests, comparatifs et bons plans tech.",
        link: "https://pausehardware.com/"
      },
      {
        name: "hardwareand.co",
        description: "Média français spécialisé hardware et high-tech, proposant tests, actualités, analyses et bons plans sur les composants PC et technologies.",
        link: "https://hardwareand.co/"
      }
    ]
  },
  {
    title: "Open Source",
    icon: "code-slash-outline",
    items: [
      {
        name: "GitHub Trending",
        description: "Dépôts qui montent — détecter les nouveaux outils avant qu'ils ne deviennent mainstream.",
        link: "https://github.com/trending"
      },
    ]
  }
];