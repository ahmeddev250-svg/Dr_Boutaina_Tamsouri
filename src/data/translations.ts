import { IMAGES, Lang } from './practice';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface ClinicalCaseItem {
  title: string;
  category: string;
  outcome: string;
  image: string;
}

export interface ReviewItem {
  author: string;
  meta: string;
  tag: string;
  badge: string;
  quote: string;
}

export interface TranslationContent {
  langLabel: string;
  switchLang: string;
  nav: {
    home: string;
    specialist: string;
    services: string;
    cases: string;
    reviews: string;
    contact: string;
    bookNow: string;
    tagline: string;
  };
  hero: {
    statusBadge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ratingSummary: string;
    floatingCard1Label: string;
    floatingCard1Value: string;
    floatingCard2Label: string;
    floatingCard2Value: string;
  };
  marquee: {
    items: string[];
  };
  specialist: {
    eyebrow: string;
    title: string;
    role: string;
    bio: string;
    highlights: string[];
    availabilityBadge: string;
    ctaBook: string;
    ctaCall: string;
    ctaWhatsapp: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    actionLabel: string;
    items: ServiceItem[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    metrics: {
      target: number;
      decimals?: number;
      prefix?: string;
      suffix?: string;
      fallback: string;
      label: string;
    }[];
    standards: string[];
  };
  cases: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
    items: ClinicalCaseItem[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    summary: string;
    filters: { id: string; label: string }[];
    items: ReviewItem[];
  };
  banner: {
    pill: string;
    title: string;
    subtitle: string;
    ctaBook: string;
    ctaDirections: string;
  };
  modal: {
    title: string;
    subtitle: string;
    patientName: string;
    patientNamePlaceholder: string;
    patientPhone: string;
    patientPhonePlaceholder: string;
    serviceLabel: string;
    dateLabel: string;
    slotLabel: string;
    closedDay: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitWhatsapp: string;
    orCall: string;
  };
  footer: {
    mission: string;
    navTitle: string;
    servicesTitle: string;
    contactTitle: string;
    hoursLine1: string;
    hoursLine2: string;
    openMaps: string;
    backToTop: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<Lang, TranslationContent> = {
  fr: {
    langLabel: 'FR',
    switchLang: 'العربية',
    nav: {
      home: 'Accueil',
      specialist: 'Votre Spécialiste',
      services: 'Soins & Services',
      cases: 'Cas Cliniques',
      reviews: 'Avis',
      contact: 'Contact',
      bookNow: 'Prendre RDV',
      tagline: 'Centre Dentaire · Rabat',
    },
    hero: {
      statusBadge: 'Ouvert · Lun–Ven 09:00–18:00 · Sam 09:00–14:00 · CYM Rabat',
      title: 'Bienvenue au Centre\nDr. Boutaina Tamsouri',
      subtitle:
        'Un espace dentaire moderne et accueillant sur l’avenue Al Kifah (Cité CYM / Al Kamra) à Rabat. Des soins personnalisés, doux et précis — de la dentisterie esthétique à l’orthodontie invisible et à la chirurgie.',
      ctaPrimary: 'Prendre Rendez-vous',
      ctaSecondary: 'Découvrir nos soins',
      ratingSummary: '4,9 ★ sur Google · 39 avis patients vérifiés',
      floatingCard1Label: 'Note Patients',
      floatingCard1Value: '4,9 / 5',
      floatingCard2Label: 'Imagerie Numérique',
      floatingCard2Value: 'Scanner 3D & RVG',
    },
    marquee: {
      items: [
        'Centre Dentaire Dr. Boutaina Tamsouri',
        '4,9 ★ Google (39 Avis)',
        'Scanner 3D & Radio Panoramique',
        'Aligneurs Transparents & Orthodontie',
        'Facettes & Blanchiment Esthétique',
        'Implantologie & Prothèses',
        'Avenue Al Kifah · CYM / Al Kamra Rabat',
      ],
    },
    specialist: {
      eyebrow: 'Votre Spécialiste',
      title: 'Dr. Boutaina Tamsouri',
      role: 'Chirurgien-Dentiste · Soins, Esthétique, Orthodontie & Chirurgie',
      bio: 'Le Dr. Boutaina Tamsouri vous accueille avec écoute, douceur et minutie. Chaque plan de traitement est expliqué étape par étape pour instaurer un climat de confiance, y compris auprès des patients anxieux et des enfants.',
      highlights: [
        'Approche douce et attentive adaptée aux patients ayant une appréhension dentaire',
        'Diagnostic de haute précision par scanner 3D, panoramique et RVG numérique',
        'Suivi personnalisé pour adultes et enfants au cœur de Rabat (CYM / Al Kamra)',
        'Respect strict des horaires de rendez-vous et hygiène rigoureuse',
      ],
      availabilityBadge: 'Consultations sur rendez-vous · Lun–Sam',
      ctaBook: 'Réserver avec Dr. Tamsouri',
      ctaCall: 'Appeler : 05 30 41 90 33',
      ctaWhatsapp: 'WhatsApp Direct',
    },
    services: {
      eyebrow: 'Nos Pôles de Soins',
      title: 'Des soins dentaires complets et personnalisés',
      subtitle:
        'Chaque traitement associe gestes doux, matériaux durables et imagerie numérique de dernière génération.',
      actionLabel: 'Prendre rendez-vous',
      items: [
        {
          id: 'soins-caries',
          title: 'Soins & Traitement des Caries',
          description:
            'Détartrage complet, traitement conservateur des caries et dévitalisation endodontique sans douleur.',
          features: ['Détartrage ultrasonique', 'Dévitalisation sans douleur', 'Composites esthétiques'],
          image: IMAGES.casCarieComposite,
        },
        {
          id: 'esthetique',
          title: 'Dentisterie Esthétique',
          description:
            'Harmonisation naturelle du sourire grâce aux facettes dentaires et au blanchiment sécurisé.',
          features: ['Facettes sur mesure', 'Blanchiment dentaire', 'Restauration du sourire'],
          image: IMAGES.casFacettesBlanchiment,
        },
        {
          id: 'orthodontie',
          title: 'Orthodontie & Aligneurs 3D',
          description:
            'Alignement dentaire pour adultes et adolescents par gouttières transparentes ou bagues classiques.',
          features: ['Gouttières transparentes', 'Simulation 3D préalable', 'Bagues classiques'],
          image: IMAGES.casAligneur3d,
        },
        {
          id: 'implants-protheses',
          title: 'Implantologie & Prothèses',
          description:
            'Remplacement durable des dents absentes par implants, couronnes céramiques et bridges.',
          features: ['Implants dentaires', 'Prothèses fixes & amovibles', 'Couronnes esthétiques'],
          image: IMAGES.casProtheseImplant,
        },
        {
          id: 'chirurgie-paro',
          title: 'Chirurgie & Parodontologie',
          description:
            'Extractions atraumatiques, dents de sagesse et prise en charge complète de la santé des gencives.',
          features: ['Dents de sagesse', 'Soins parodontaux', 'Chirurgie orale douce'],
          image: IMAGES.casChirurgieRadio,
        },
        {
          id: 'radiologie-3d',
          title: 'Radiologie & Diagnostic 3D',
          description:
            'Plateau technique intégré pour des examens rapides sur place sans déplacement externe.',
          features: ['Scanner 3D (CBCT)', 'Radio panoramique', 'Radiographie RVG'],
          image: IMAGES.plateauTechnique,
        },
      ],
    },
    about: {
      eyebrow: 'Le Cabinet',
      title: 'Un plateau technique moderne en plein cœur de Rabat',
      description:
        'Situé sur l’avenue Al Kifah (Cité CYM), en face de l’ancienne gare routière Al Kamra et à quelques minutes d’Agdal, Hassan et Al Irfane, le centre allie sérénité architecturale et précision clinique.',
      metrics: [
        { target: 4.9, decimals: 1, suffix: '★', fallback: '4,9★', label: 'Note Google vérifiée' },
        { target: 39, suffix: '', fallback: '39', label: 'Avis patients Google' },
        { target: 6, suffix: ' Pôles', fallback: '6 Pôles', label: 'Soins pluridisciplinaires' },
        { target: 100, suffix: '%', fallback: '100%', label: 'Écoute & pédagogie' },
      ],
      standards: [
        'Scanner 3D, radio panoramique et capteurs RVG intégrés pour un diagnostic immédiat',
        'Espace d’accueil chaleureux pensé pour apaiser l’appréhension dès l’arrivée',
        'Protocoles de stérilisation stricts et traçabilité complète du matériel',
        'Accessibilité directe depuis CYM, Al Kamra, Hassan, Agdal et Al Irfane',
      ],
    },
    cases: {
      eyebrow: 'Avant / Après & Cas Cliniques',
      title: 'Des résultats concrets au service de votre sourire',
      subtitle:
        'Aperçu de restaurations esthétiques, alignements 3D, prothèses et chirurgies réalisés au cabinet.',
      ctaLabel: 'Consulter pour un cas similaire',
      items: [
        {
          title: 'Restauration Esthétique Antérieure',
          category: 'Esthétique & Composite',
          outcome: 'Reconstruction harmonieuse des incisives supérieures avec rendu naturel.',
          image: IMAGES.casEsthetique1,
        },
        {
          title: 'Blanchiment & Harmonisation du Sourire',
          category: 'Dentisterie Esthétique',
          outcome: 'Éclaircissement homogène et correction de teinte sans sensibilité excessive.',
          image: IMAGES.casFacettesBlanchiment,
        },
        {
          title: 'Remplacement Prothétique & Implant',
          category: 'Prothèse & Implantologie',
          outcome: 'Comblage esthétique et fonctionnel d’une dent antérieure absente.',
          image: IMAGES.casProtheseImplant,
        },
        {
          title: 'Planification 3D par Aligneurs',
          category: 'Orthodontie Invisible',
          outcome: 'Simulation numérique précise des mouvements avant la pose des gouttières.',
          image: IMAGES.casAligneur3d,
        },
        {
          title: 'Extraction de Dent de Sagesse (RVG)',
          category: 'Chirurgie & Radiologie',
          outcome: 'Contrôle radiographique pré et post-opératoire pour une intervention sécurisée.',
          image: IMAGES.casChirurgieRadio,
        },
        {
          title: 'Traitement de Carie Antérieure',
          category: 'Soins Conservateurs',
          outcome: 'Élimination de la lésion carieuse et restauration invisible au composite.',
          image: IMAGES.casCarieComposite,
        },
      ],
    },
    testimonials: {
      eyebrow: 'Avis Patients',
      title: 'La confiance de nos patients à Rabat',
      summary: '4,9 ★ sur 39 avis Google vérifiés',
      filters: [
        { id: 'all', label: 'Tous (39)' },
        { id: 'confiance', label: 'Confiance (7)' },
        { id: 'douceur', label: 'Douceur & Mains (3)' },
        { id: 'phobie', label: 'Phobie dentaire (2)' },
        { id: 'minutieux', label: 'Travail minutieux (2)' },
      ],
      items: [
        {
          author: 'Yasmine Echmichi',
          meta: '2 avis · Il y a 6 jours',
          tag: 'douceur',
          badge: 'Avis vérifié Google',
          quote:
            'Dr. Boutaina est une dentiste très professionnelle, douce et bienveillante. Elle prend le temps de tout expliquer, est très minutieuse dans son travail et fait preuve d’une grande douceur lors des soins. Elle est également très gentille et ponctuelle, avec un grand respect des horaires de rendez-vous. Je recommande vivement !',
        },
        {
          author: 'Zahid l',
          meta: 'Local Guide · 56 avis · Il y a 3 mois',
          tag: 'confiance',
          badge: 'Avis vérifié Google',
          quote:
            'Franchement, le Dr Boutaina est à recommander. Elle est super minutieuse, prend le temps de s’occuper de chaque dent et t’explique tout simplement, ce qui met vraiment en confiance. Mon fils est aussi suivi au cabinet.',
        },
        {
          author: 'Hafsa Bouaz',
          meta: '5 avis · Il y a un an',
          tag: 'phobie',
          badge: 'Avis vérifié Google',
          quote:
            'Pour quelqu’un avec une vraie phobie des dentistes, Dr Boutaina a su me mettre à l’aise, je n’ai même pas vu le temps passer que la séance était déjà terminée. Détartrage et dévitalisation d’une dent sans douleur.',
        },
      ],
    },
    banner: {
      pill: 'Avenue Al Kifah · Cité CYM / Al Kamra · Rabat',
      title: 'Consultation Directe avec Dr. Boutaina Tamsouri',
      subtitle:
        '34, Avenue Al Kifah, Bloc A, appt 01, 1er étage, Al Kamra, Rabat 10120 · Tél : 05 30 41 90 33 · WhatsApp : 06 09 14 34 96',
      ctaBook: 'Prendre RDV',
      ctaDirections: 'Itinéraire Google Maps',
    },
    modal: {
      title: 'Prendre Rendez-vous',
      subtitle: 'Choisissez un jour, un créneau de 30 minutes et confirmez via WhatsApp.',
      patientName: 'Nom complet',
      patientNamePlaceholder: 'Ex. Yasmine El Amrani',
      patientPhone: 'Téléphone',
      patientPhonePlaceholder: 'Ex. 06 XX XX XX XX',
      serviceLabel: 'Motif de consultation',
      dateLabel: 'Date souhaitée',
      slotLabel: 'Créneau horaire (30 min)',
      closedDay: 'Le cabinet est fermé le dimanche. Veuillez sélectionner du lundi au samedi.',
      notesLabel: 'Précisions (optionnel)',
      notesPlaceholder: 'Douleur, contrôle, devis aligneurs, première visite...',
      submitWhatsapp: 'Confirmer via WhatsApp',
      orCall: 'Ou appelez directement le 05 30 41 90 33',
    },
    footer: {
      mission:
        'Centre dentaire moderne à Rabat (CYM / Al Kamra) dédié aux soins doux, à l’esthétique du sourire, à l’orthodontie et à la chirurgie orale.',
      navTitle: 'Navigation',
      servicesTitle: 'Soins Dentaires',
      contactTitle: 'Coordonnées & Horaires',
      hoursLine1: 'Lun – Ven : 09:00 – 18:00',
      hoursLine2: 'Samedi : 09:00 – 14:00 (Dimanche fermé)',
      openMaps: 'Ouvrir dans Google Maps',
      backToTop: 'Haut de page',
      rights: 'Tous droits réservés.',
    },
  },
  ar: {
    langLabel: 'AR',
    switchLang: 'Français',
    nav: {
      home: 'الرئيسية',
      specialist: 'الدكتورة',
      services: 'الخدمات الطبية',
      cases: 'نتائج الحالات',
      reviews: 'آراء المرضى',
      contact: 'الموقع والاتصال',
      bookNow: 'حجز موعد',
      tagline: 'مركز طب الأسنان · الرباط',
    },
    hero: {
      statusBadge: 'مفتوح · الإثنين–الجمعة 09:00–18:00 · السبت 09:00–14:00 · الرباط',
      title: 'مرحباً بكم في مركز\nالدكتورة بثينة التمسوري',
      subtitle:
        'فضاء حديث ومريح لطب الأسنان بشارع الكفاح (حي يعقوب المنصور / القمرة) بالرباط. علاجات دقيقة ولطيفة مخصصة لكل مريض، من تجميل الابتسامة وتقويم الأسنان الشفاف إلى الجراحة والأشعة ثلاثية الأبعاد.',
      ctaPrimary: 'حجز موعد الآن',
      ctaSecondary: 'اكتشف خدماتنا',
      ratingSummary: '4,9 ★ على غوغل · 39 تقييماً موثقاً',
      floatingCard1Label: 'تقييم المرضى',
      floatingCard1Value: '4,9 / 5',
      floatingCard2Label: 'التشخيص الرقمي',
      floatingCard2Value: 'سكانير 3D و RVG',
    },
    marquee: {
      items: [
        'مركز الدكتورة بثينة التمسوري لطب الأسنان',
        '4,9 ★ على غوغل (39 تقييم)',
        'سكانير ثلاثي الأبعاد والأشعة البانورامية',
        'تقويم الأسنان الشفاف والكلاسيكي',
        'القشور التجميلية وتبييض الأسنان',
        'زراعة الأسنان والتركيبات',
        'شارع الكفاح · حي يعقوب المنصور / القمرة الرباط',
      ],
    },
    specialist: {
      eyebrow: 'طبيبتكم المختصة',
      title: 'الدكتورة بثينة التمسوري',
      role: 'جراحة الأسنان · العلاجات، التجميل، التقويم والجراحة',
      bio: 'تستقبلكم الدكتورة بثينة التمسوري بإنصات وعناية فائقة ولطف كبير أثناء العلاج. يتم شرح كل خطوة بوضوح لبناء الثقة، خصوصاً لدى الأطفال والمرضى الذين يعانون من رهبة طبيب الأسنان.',
      highlights: [
        'تعامل لطيف ومطمئن يناسب المرضى ذوي الرهبة من علاج الأسنان',
        'تشخيص دقيق بأحدث أجهزة السكانير ثلاثي الأبعاد والأشعة البانورامية وRVG',
        'متابعة شخصية للكبار والأطفال في قلب الرباط (يعقوب المنصور / القمرة)',
        'احترام تام لمواعيد الاستقبال ومعايير التعقيم الصارمة',
      ],
      availabilityBadge: 'الاستقبال بموعد مسبق · الإثنين – السبت',
      ctaBook: 'احجز موعداً مع الدكتورة',
      ctaCall: 'اتصل: 05 30 41 90 33',
      ctaWhatsapp: 'واتساب مباشر',
    },
    services: {
      eyebrow: 'تخصصات المركز',
      title: 'علاجات شاملة ومخصصة لصحة وجمال ابتسامتكم',
      subtitle:
        'نجمع بين اللطف في العلاج، جودة المواد الطبية، والتصوير الرقمي الدقيق داخل العيادة.',
      actionLabel: 'حجز موعد',
      items: [
        {
          id: 'soins-caries',
          title: 'علاج التسوس وإزالة الجير',
          description:
            'تنظيف الأسنان وإزالة الجير، علاج التسوس، وسحب العصب بدون ألم وبعناية دقيقة.',
          features: ['إزالة الجير بالموجات', 'علاج العصب بدون ألم', 'حشوات تجميلية'],
          image: IMAGES.casCarieComposite,
        },
        {
          id: 'esthetique',
          title: 'طب الأسنان التجميلي',
          description:
            'تحسين تناسق ولون الابتسامة عبر القشور الخزفية (الفينير) والتبييض الآمن.',
          features: ['قشور تجميلية مخصصة', 'تبييض الأسنان', 'تجميل الابتسامة'],
          image: IMAGES.casFacettesBlanchiment,
        },
        {
          id: 'orthodontie',
          title: 'تقويم الأسنان والتقويم الشفاف',
          description:
            'تصحيح اصطفاف الأسنان للكبار والمراهقين عبر القوالب الشفافة أو التقويم الكلاسيكي.',
          features: ['تقويم شفاف 3D', 'محاكاة رقمية مسبقة', 'تقويم معدني كلاسيكي'],
          image: IMAGES.casAligneur3d,
        },
        {
          id: 'implants-protheses',
          title: 'زراعة الأسنان والتركيبات',
          description:
            'تعويض الأسنان المفقودة بشكل دائم ومريح عبر الزراعات والتيجان والجسور.',
          features: ['زراعة الأسنان', 'تركيبات ثابتة ومتحركة', 'تيجان خزفية'],
          image: IMAGES.casProtheseImplant,
        },
        {
          id: 'chirurgie-paro',
          title: 'الجراحة وعلاج اللثة',
          description:
            'خلع الأسنان وأضراس العقل بلطف مع العناية الشاملة بصحة اللثة والأنسجة الداعمة.',
          features: ['خلع ضرس العقل', 'علاج أمراض اللثة', 'جراحة الفم الدقيقة'],
          image: IMAGES.casChirurgieRadio,
        },
        {
          id: 'radiologie-3d',
          title: 'الأشعة والتشخيص ثلاثي الأبعاد',
          description:
            'تجهيزات تصوير رقمي متكاملة داخل المركز لإجراء الفحوصات فوراً دون تنقل.',
          features: ['سكانير ثلاثي الأبعاد 3D', 'أشعة بانورامية', 'أشعة رقمية RVG'],
          image: IMAGES.plateauTechnique,
        },
      ],
    },
    about: {
      eyebrow: 'عن المركز',
      title: 'تجهيزات حديثة في قلب مدينة الرباط',
      description:
        'يقع المركز بشارع الكفاح (حي يعقوب المنصور)، مقابل المحطة الطرقية القديمة القمرة، وعلى بعد دقائق من حسان وأكدال والعرفان، في فضاء هادئ ومجهز بأحدث التقنيات.',
      metrics: [
        { target: 4.9, decimals: 1, suffix: '★', fallback: '4,9★', label: 'تقييم غوغل الموثق' },
        { target: 39, suffix: '', fallback: '39', label: 'تقييمات المرضى على غوغل' },
        { target: 6, suffix: ' تخصصات', fallback: '6 تخصصات', label: 'رعاية متكاملة' },
        { target: 100, suffix: '%', fallback: '100%', label: 'إنصات وشرح واضح' },
      ],
      standards: [
        'سكانير 3D، أشعة بانورامية وتصوير RVG لتشخيص دقيق وسريع في نفس الزيارة',
        'قاعة انتظار ومكاتب استقبال مريحة لتبديد التوتر منذ اللحظة الأولى',
        'بروتوكولات تعقيم صارمة ومراقبة مستمرة للأدوات الطبية',
        'موقع مركزي يسهل الوصول إليه من القمرة، حسان، أكدال والعرفان',
      ],
    },
    cases: {
      eyebrow: 'قبل وبعد · حالات سريرية',
      title: 'نتائج واقعية تعيد الثقة لابتسامتكم',
      subtitle:
        'نماذج من حالات التجميل، التخطيط ثلاثي الأبعاد للتقويم الشفاف، التركيبات والجراحة المنجزة بالمركز.',
      ctaLabel: 'استشارة لحالة مشابهة',
      items: [
        {
          title: 'ترميم تجميلي للأسنان الأمامية',
          category: 'تجميل الأسنان',
          outcome: 'إعادة بناء القواطع العلوية بتناسق طبيعي تام.',
          image: IMAGES.casEsthetique1,
        },
        {
          title: 'تبييض وتناسق الابتسامة',
          category: 'طب الأسنان التجميلي',
          outcome: 'تفتيح متجانس للون الأسنان مع الحفاظ على راحة المريض.',
          image: IMAGES.casFacettesBlanchiment,
        },
        {
          title: 'تعويض سن أمامي مفقود',
          category: 'التركيبات والزراعة',
          outcome: 'استعادة الشكل الجمالي والوظيفي للسن المفقود بدقة.',
          image: IMAGES.casProtheseImplant,
        },
        {
          title: 'تخطيط التقويم الشفاف 3D',
          category: 'تقويم الأسنان',
          outcome: 'دراسة رقمية لحركة الأسنان قبل بدء القوالب الشفافة.',
          image: IMAGES.casAligneur3d,
        },
        {
          title: 'خلع ضرس العقل بالمراقبة الإشعاعية',
          category: 'الجراحة والأشعة',
          outcome: 'متابعة دقيقة بالأشعة قبل وبعد التدخل لضمان الأمان.',
          image: IMAGES.casChirurgieRadio,
        },
        {
          title: 'علاج تسوس الأسنان الأمامية',
          category: 'العلاجات التحفظية',
          outcome: 'إزالة التسوس وترميم السن بحشوة تجميلية غير مرئية.',
          image: IMAGES.casCarieComposite,
        },
      ],
    },
    testimonials: {
      eyebrow: 'آراء المرضى',
      title: 'ثقة مرضانا في الرباط',
      summary: '4,9 ★ من أصل 39 تقييماً موثقاً على غوغل',
      filters: [
        { id: 'all', label: 'الكل (39)' },
        { id: 'confiance', label: 'الثقة (7)' },
        { id: 'douceur', label: 'اللطف والدقة (3)' },
        { id: 'phobie', label: 'رهبة الطبيب (2)' },
        { id: 'minutieux', label: 'إتقان العمل (2)' },
      ],
      items: [
        {
          author: 'Yasmine Echmichi',
          meta: '2 تقييم · منذ 6 أيام',
          tag: 'douceur',
          badge: 'تقييم موثق على غوغل',
          quote:
            'الدكتورة بثينة طبيبة أسنان محترفة جداً، لطيفة وحنونة. تأخذ وقتها لشرح كل شيء، دقيقة للغاية في عملها وتتعامل برفق كبير أثناء العلاج مع احترام تام للمواعيد. أنصح بها بشدة!',
        },
        {
          author: 'Zahid l',
          meta: 'مرشد محلي · 56 تقييماً · منذ 3 أشهر',
          tag: 'confiance',
          badge: 'تقييم موثق على غوغل',
          quote:
            'بصراحة الدكتورة بثينة تستحق التوصية. دقيقة جداً، تهتم بكل سن على حدة وتشرح ببساطة مما يبعث على الثقة والاطمئنان. ابني أيضاً يتابع علاجه في العيادة.',
        },
        {
          author: 'Hafsa Bouaz',
          meta: '5 تقييمات · منذ سنة',
          tag: 'phobie',
          badge: 'تقييم موثق على غوغل',
          quote:
            'بالنسبة لشخص يعاني من رهبة حقيقية من أطباء الأسنان، استطاعت الدكتورة بثينة أن تشعرني بالراحة، ولم أشعر بمرور الوقت. إزالة الجير وسحب العصب بدون ألم.',
        },
      ],
    },
    banner: {
      pill: 'شارع الكفاح · يعقوب المنصور / القمرة · الرباط',
      title: 'استشارة مباشرة مع الدكتورة بثينة التمسوري',
      subtitle:
        '34، شارع الكفاح، عمارة أ، شقة 01، الطابق الأول، القمرة، الرباط 10120 · الهاتف: 05 30 41 90 33 · واتساب: 06 09 14 34 96',
      ctaBook: 'حجز موعد',
      ctaDirections: 'الاتجاهات عبر غوغل مابس',
    },
    modal: {
      title: 'حجز موعد',
      subtitle: 'اختر اليوم والفترة الزمنية (30 دقيقة) ثم أكد عبر واتساب.',
      patientName: 'الاسم الكامل',
      patientNamePlaceholder: 'مثال: ياسمين العمراني',
      patientPhone: 'رقم الهاتف',
      patientPhonePlaceholder: 'مثال: 06 XX XX XX XX',
      serviceLabel: 'سبب الاستشارة',
      dateLabel: 'التاريخ المطلوب',
      slotLabel: 'الفترة الزمنية (30 دقيقة)',
      closedDay: 'العيادة مغلقة يوم الأحد. يرجى اختيار يوم من الإثنين إلى السبت.',
      notesLabel: 'ملاحظات إضافية (اختياري)',
      notesPlaceholder: 'ألم، فحص دوري، استشارة تقويم شفاف، زيارة أولى...',
      submitWhatsapp: 'تأكيد عبر واتساب',
      orCall: 'أو اتصل مباشرة على 05 30 41 90 33',
    },
    footer: {
      mission:
        'مركز حديث لطب الأسنان بالرباط (يعقوب المنصور / القمرة) متخصص في العلاجات اللطيفة، تجميل الابتسامة، التقويم والجراحة.',
      navTitle: 'روابط سريعة',
      servicesTitle: 'الخدمات الطبية',
      contactTitle: 'العنوان وساعات العمل',
      hoursLine1: 'الإثنين – الجمعة: 09:00 – 18:00',
      hoursLine2: 'السبت: 09:00 – 14:00 (الأحد مغلق)',
      openMaps: 'فتح في خرائط غوغل',
      backToTop: 'العودة للأعلى',
      rights: 'جميع الحقوق محفوظة.',
    },
  },
};
