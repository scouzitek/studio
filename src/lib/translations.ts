
export const translations = {
  fr: {
    header: {
      concept: 'Concept',
      features: 'Fonctionnalités',
      pricing: 'Nos Offres',
      trust: 'Confiance',
      faq: 'FAQ',
      changeLanguage: 'Changer de langue',
    },
    hero: {
      title: 'Novix',
      subtitle: "Vos données n'appartiennent qu'à vous.",
      description: ["Aucune fuite. Aucune collecte. Aucune surprise.","L'IA de confiance qui protège vos idées en toute confidentialité."],
      ctaDownloadApp: "Télécharger l'app",
      ctaTryFree: 'Essayer gratuitement',
    },
    features: {
      mainTitle: 'Votre vie privée, garantie.',
      mainDescription: 'Notre application repose sur trois principes fondamentaux pour garantir la sécurité et la confidentialité de vos données.',
      conceptBox: {
        title: "Qu'est-ce que Novix ?",
        text: "Développé au cœur de la Suisse, Novix AI est le fruit de l'excellence et de la fiabilité helvétiques. Nos modèles d'intelligence artificielle sont hébergés exclusivement sur des serveurs suisses, garantissant une souveraineté totale de vos données. Alors que vos conversations restent cryptées sur votre appareil, l'inférence est réalisée en Suisse, sous la protection des lois les plus strictes au monde. Bénéficiez d'une IA de pointe, synonyme de 'Swiss Quality', alliant performance, sécurité et confidentialité absolue."
      },
      featureList: [
        {
          title: "Facilité d'utilisation",
          description: "Profitez d'une interface axée sur la productivité, offrant l'efficacité des LLMs sans compromettre la sécurité de vos données.",
        },
        {
          title: 'Confidentialité Absolue',
          description: "Vos données sont cryptées et protégées par la sécurité native de votre appareil, garantissant une confidentialité sans faille.",
        },
        {
          title: 'Stockage Local',
          description: "Vos conversations sont stockées et cryptées uniquement sur votre appareil. Seul vous y avez accès, vous garantissant un contrôle total.",
        },
      ],
    },
    moreFeatures: {
      mainTitle: "Conçu pour votre confiance",
      mainDescription: "La protection de vos données est notre priorité. Voici comment nous la garantissons.",
      featureList: [
        {
          id: 'secure',
          title: 'Sécurité de bout en bout',
          description: "Chaque interaction avec nos modèles est protégée par un cryptage de pointe. Vos données sont sécurisées pendant leur traitement, garantissant que personne, pas même nous, ne peut y accéder. Votre confidentialité est notre priorité.",
        },
        {
          id: 'compliance',
          title: 'Conforme à la loi suisse sur la protection des données',
          description: 'Conçue en Suisse, notre application respecte la nouvelle loi fédérale sur la protection des données (nLPD). Nous nous engageons à respecter les normes les plus élevées en matière de confidentialité et de sécurité des données.',
        },
        {
          id: 'export',
          title: 'Portabilité totale des données',
          description: "Vous avez un contrôle total sur vos données. Exportez facilement tout votre historique de conversation dans un format standard et importez-le sur un nouvel appareil. Vos données vous appartiennent et vous pouvez les emporter avec vous à tout moment.",
        },
      ],
    },
    pricing: {
      mainTitle: 'Nos offres',
      mainDescription: 'Une tarification simple et transparente, adaptée à vos besoins.',
      pricingTiers: [
        {
          name: 'Pour les Particuliers',
          id: 'personal',
          description: 'La solution parfaite pour un usage personnel et un budget maîtrisé. Choisissez entre notre plan gratuit ou un accès Premium pour des usages intensifs.',
          features: [
            'GRATUIT : 10 requêtes / mois pour tester.',
            'STANDARD ($19/mois) : 2 000 requêtes incluses.',
            'FLEXIBILITÉ : Facturation simple à la requête (0.01$ par excédent).',
            "CONTRÔLE : Pas d'engagement, pas de frais cachés.",
          ],
          cta: 'Commencer',
        },
        {
          name: 'Pour les Entreprises',
          id: 'business',
          description: "Tarification à l'usage exclusive. Payez uniquement pour vos volumes d'API, peu importe le nombre d'utilisateurs.",
          features: [
            'VOLUME : Facturation dégressive par tranche de 1 000 requêtes.',
            "ÉCHELLE : Nombre d'utilisateurs illimité (seul le volume API compte).",
            'SÉCURITÉ : Audit, Cache intelligent, et option Déploiement Privé (SLA).',
            'SUPPORT : Facturation centralisée et support prioritaire dédié.',
          ],
          cta: 'Nous contacter',
        },
      ],
    },
    callToAction: {
      mainTitle: 'Une solution pour tous',
      mainDescription: 'Que vous soyez un particulier cherchant un assistant personnel ou une entreprise protégeant ses données, Novix AI est fait pour vous.',
      sections: [
        {
          id: 'cta-business',
          title: "L'Avantage Concurrentiel pour Votre Entreprise",
          description: 'Intégrez une IA puissante sans compromettre la confidentialité de vos données stratégiques. Novix AI fonctionne en circuit fermé sur les postes de vos collaborateurs, garantissant que vos informations sensibles ne quittent jamais votre entreprise.',
          cta: 'Sécuriser Vos Données',
        },
        {
          id: 'cta-personal',
          title: 'Votre Assistant Personnel',
          description: "Libérez votre créativité et boostez votre productivité. Novix AI est l'outil idéal pour rédiger, coder, apprendre et créer, tout en gardant vos idées et vos données en sécurité sur votre appareil. La puissance de l'IA, votre vie privée en plus.",
          cta: 'Commencer Gratuitement',
        }
      ],
    },
    contactForm: {
      title: 'Contacter notre équipe commerciale',
      description: 'Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais pour discuter de vos besoins.',
      companyName: "Nom de l'entreprise",
      firstName: 'Prénom',
      lastName: 'Nom de famille',
      email: 'Adresse e-mail',
      phone: 'Numéro de téléphone',
      address: 'Adresse',
      city: 'Ville',
      zipCode: 'Code postal',
      country: 'Pays',
      userCount: "Nombre d'utilisateurs estimé",
      submit: 'Envoyer la demande',
      success: 'Merci ! Votre demande a bien été envoyée.',
      error: "Une erreur s'est produite. Veuillez réessayer.",
    },
    faq: {
      mainTitle: 'Questions fréquentes',
      mainDescription: 'Vous avez des questions ? Nous avons les réponses.',
      questions: [
        {
          question: 'Comment Novix AI protège-t-il ma vie privée ?',
          answer: "Novix AI est conçu selon une approche \"privacy-first\". Toutes les conversations avec le modèle sont stockées localement sur votre appareil. Nous n'avons pas accès à vos données et rien n'est utilisé pour entraîner nos modèles d'IA."
        },
        {
          question: 'Mes données sont-elles vraiment sécurisées ?',
          answer: "Oui. Nous exploitons les fonctionnalités de sécurité natives de votre appareil, comme l'authentification biométrique (FaceID, empreinte digitale) ou votre code PIN, pour protéger l'accès à l'application et aux données stockées sur votre appareil."
        },
        {
          question: 'Puis-je utiliser Novix AI sur plusieurs appareils ?',
          answer: "Actuellement, Novix AI fonctionne sur un seul appareil pour garantir une sécurité maximale, car toutes les données sont stockées localement. Cependant, vous pouvez utiliser notre fonction d'exportation/importation complète des données pour migrer vos conversations vers un nouvel appareil."
        },
        {
          question: "Y a-t-il un abonnement ?",
          answer: "Pour les utilisateurs individuels, il n'y a pas d'abonnement. Vous payez uniquement pour ce que vous consommez, sur la base d'une facturation à la requête. C'est simple, transparent et sans engagement."
        }
      ]
    },
    footer: {
      rightsReserved: 'Tous droits réservés.',
      product: {
        title: 'Produit',
        links: [
          { text: 'Fonctionnalités', href: '#features' },
          { text: 'Nos Offres', href: '#pricing' },
          { text: 'Télécharger', href: '#' },
        ],
      },
      company: {
        title: 'Entreprise',
        links: [
          { text: 'À propos', href: '#', id: 'about' },
          { text: 'Contact', href: '#', id: 'contact' },
        ],
      },
      legal: {
        title: 'Légal',
        links: [
          { text: 'Politique de confidentialité', href: '#' },
          { text: "Conditions d'utilisation", href: '#' },
        ],
      },
      connect: {
        title: 'Contact',
        links: [
          { text: 'X (Twitter)', href: '#' },
          { text: 'Discord', href: '#' },
          { text: 'LinkedIn', href: '#' },
        ],
      },
    },
    legal: {
      privacyPolicy: {
        title: 'Politique de confidentialité',
        content: `Dernière mise à jour: 26 juillet 2024\n\nNovix (« nous », « notre » ou « nos ») s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre application Novix AI (le « Service »). Notre traitement des données personnelles est conforme à la Loi fédérale suisse sur la protection des données (LPD) et, le cas échéant, au Règlement général sur la protection des données (RGPD) de l'Union européenne.\n\n<h3>1. Responsable du traitement</h3>\nLe responsable du traitement de vos données est :\nNovix Inc.\n[Adresse de l'entreprise, ex: Rue Exemple 1, 1200 Genève, Suisse]\nEmail: privacy@novix.ai\n\n<h3>2. Données que nous traitons</h3>\nNotre approche est axée sur la minimisation des données. Nous ne traitons que les informations strictement nécessaires au fonctionnement du Service.\n\n<b>a) Données traitées localement sur votre appareil :</b>\n\n- <b>Contenu des conversations :</b> Toutes les requêtes que vous envoyez à l'IA et les réponses générées sont stockées et cryptées exclusivement sur votre appareil. Nous n'y avons jamais accès.\n- <b>Clés d'API :</b> Si vous utilisez votre propre clé d'API pour des services tiers, elle est stockée de manière sécurisée dans le trousseau de clés de votre appareil.\n\n<b>b) Données que nous traitons sur nos serveurs en Suisse :</b>\n\n- <b>Données d'inférence (temporaires) :</b> Pour générer une réponse, votre requête (prompt) est transmise de manière sécurisée à nos modèles d'IA hébergés en Suisse. Cette donnée est utilisée uniquement pour l'inférence et n'est ni stockée de manière permanente ni utilisée pour entraîner nos modèles.\n- <b>Données d'utilisation et de facturation :</b> Nous collectons des métadonnées anonymisées sur votre utilisation (ex: nombre de requêtes, jetons utilisés) à des fins de facturation et d'analyse statistique pour améliorer notre service. Ces données ne contiennent aucun contenu de vos conversations.\n\n<b>c) Données du formulaire de contact (pour les entreprises) :</b>\n\n- <b>Coordonnées professionnelles :</b> Nom, prénom, nom de l'entreprise, email, téléphone, etc. Ces informations sont collectées sur la base de votre consentement lorsque vous remplissez le formulaire pour discuter de nos offres professionnelles.\n\n<h3>3. Finalités du traitement des données</h3>\n- <b>Fourniture du Service :</b> Pour traiter vos requêtes via nos modèles d'IA.\n- <b>Facturation :</b> Pour calculer votre consommation et générer les factures correspondantes.\n- <b>Sécurité et maintenance :</b> Pour garantir la sécurité de nos services et les améliorer.\n- <b>Communication commerciale (avec consentement) :</b> Pour répondre à vos demandes d'information sur nos offres pour entreprises.\n\n<h3>4. Partage des données</h3>\nNous ne vendons, n'échangeons ni ne louons vos données personnelles. Vos données ne sont jamais partagées avec des tiers, à l'exception de nos sous-traitants d'infrastructure (hébergeurs de serveurs situés exclusivement en Suisse), qui sont contractuellement tenus de respecter les mêmes obligations de confidentialité et de sécurité que nous.\n\n<h3>5. Sécurité des données</h3>\nNous mettons en œuvre des mesures de sécurité techniques et organisationnelles de pointe pour protéger vos données. Les données en transit entre votre appareil et nos serveurs suisses sont cryptées via TLS. Les données stockées sur votre appareil sont protégées par les mécanismes de sécurité natifs de votre système d'exploitation.\n\n<h3>6. Vos droits</h3>\nConformément à la LPD et au RGPD, vous disposez des droits suivants :\n- <b>Droit d'accès :</b> Vous pouvez demander à savoir quelles données nous détenons à votre sujet.\n- <b>Droit de rectification :</b> Vous pouvez demander la correction de données inexactes.\n- <b>Droit à l'effacement :</b> Vous pouvez demander la suppression de vos données de facturation après la période de conservation légale.\n- <b>Droit à la portabilité des données :</b> Vous pouvez exporter l'intégralité de vos conversations depuis l'application à tout moment.\n- <b>Droit de retirer votre consentement :</b> Pour les données traitées sur la base du consentement (ex: formulaire de contact), vous pouvez le retirer à tout moment.\n\nPour exercer ces droits, veuillez nous contacter à privacy@novix.ai.\n\n<h3>7. Modifications de cette politique</h3>\nNous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page. Il est conseillé de consulter cette politique périodiquement pour tout changement.`
      },
      termsOfService: {
        title: "Conditions d'utilisation",
        content: `Dernière mise à jour: 26 juillet 2024\n\nVeuillez lire attentivement ces termes et conditions avant d'utiliser Notre Service.\n\n<h3>Interprétation et Définitions</h3>\n<h4>Interprétation</h4>\nLes mots dont la lettre initiale est en majuscule ont des significations définies dans les conditions suivantes. Les définitions suivantes auront la même signification, qu'elles apparaissent au singulier ou au pluriel.\n\n<h3>Accusé de réception</h3>\nCe sont les Termes et Conditions régissant l'utilisation de ce Service et l'accord qui opère entre Vous et la Société. Ces Termes et Conditions définissent les droits et obligations de tous les utilisateurs concernant l'utilisation du Service.\n\nVotre accès et votre utilisation du Service sont conditionnés à Votre acceptation et à Votre respect de ces Termes et Conditions. Ces Termes et Conditions s'appliquent à tous les visiteurs, utilisateurs et autres personnes qui accèdent ou utilisent le Service.\n\nEn accédant ou en utilisant le Service, Vous acceptez d'être lié par ces Termes et Conditions. Si Vous n'êtes pas d'accord avec une partie de ces Termes et Conditions, alors Vous ne pouvez pas accéder au Service.\n\n<h3>Résiliation</h3>\nNous pouvons résilier ou suspendre Votre accès immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, y compris, sans limitation, si Vous enfreignez ces Termes et Conditions.\n\nDès la résiliation, Votre droit d'utiliser le Service cessera immédiatement.\n\n<h3>Droit Applicable</h3>\nLes lois du Pays, à l'exclusion de ses règles de conflits de lois, régiront ces Termes et Votre utilisation du Service. Votre utilisation de l'Application peut également être soumise à d'autres lois locales, étatiques, nationales ou internationales.`
      }
    },
    about: {
      title: 'À propos de Novix',
      content: `Novix est une entreprise suisse spécialisée dans le développement de solutions d'intelligence artificielle de pointe, axées sur la confidentialité et la sécurité des données. Notre mission est de fournir des outils puissants et fiables qui respectent la vie privée de nos utilisateurs, en garantissant que leurs données restent sous leur contrôle total. Basés en Suisse, nous nous engageons à respecter les normes les plus élevées de qualité et de protection des données, conformément aux réglementations suisses et européennes.`
    }
  },
  en: {
    header: {
      concept: 'Concept',
      features: 'Features',
      trust: 'Trust',
      pricing: 'Our Offers',
      faq: 'FAQ',
      changeLanguage: 'Change language',
    },
    hero: {
      title: 'Novix',
      subtitle: 'Your data belongs to you alone.',
      description: ["No leaks. No collection. No surprises.","The trusted AI that protects your ideas in complete confidentiality."],
      ctaDownloadApp: 'Download the App',
      ctaTryFree: 'Try for free',
    },
    features: {
      mainTitle: 'Your privacy, guaranteed.',
      mainDescription: 'Our application is based on three fundamental principles to ensure the security and confidentiality of your data.',
      conceptBox: {
        title: 'What is Novix?',
        text: 'Developed in the heart of Switzerland, Novix AI is the result of Swiss excellence and reliability. Our artificial intelligence models are hosted exclusively on Swiss servers, guaranteeing total sovereignty of your data. While your conversations remain encrypted on your device, inference is carried out in Switzerland, under the protection of the strictest laws in the world. Benefit from cutting-edge AI, synonymous with "Swiss Quality", combining performance, security, and absolute confidentiality.'
      },
      featureList: [
        {
          title: 'Ease of Use',
          description: "Enjoy a productivity-focused interface that delivers the efficiency of LLMs without compromising your data's security.",
        },
        {
          title: 'Absolute Confidentiality',
          description: "Your data is encrypted and protected by your device's native security, ensuring flawless privacy.",
        },
        {
          title: 'Local Storage',
          description: 'Your conversations are stored and encrypted only on your device. Only you have access, ensuring total control.',
        },
      ],
    },
    moreFeatures: {
      mainTitle: "Designed for Your Trust",
      mainDescription: "Protecting your data is our priority. Here's how we guarantee it.",
      featureList: [
        {
          id: 'secure',
          title: 'End-to-End Security',
          description: 'Every interaction with our models is protected by state-of-the-art encryption. Your data is secured during processing, ensuring that no one, not even us, can access it. Your privacy is our priority.',
        },
        {
          id: 'compliance',
          title: 'Compliant with Swiss Data Protection Law',
          description: 'Designed in Switzerland, our application complies with the new Federal Act on Data Protection (nFADP). We are committed to the highest standards of data privacy and security.',
        },
        {
          id: 'export',
          title: 'Full Data Portability',
          description: 'You have full control over your data. Easily export your entire conversation history in a standard format and import it to a new device. Your data is yours, and you can take it with you anytime.',
        },
      ],
    },
    pricing: {
      mainTitle: 'Our Offers',
      mainDescription: 'Simple and transparent pricing, adapted to your needs.',
      pricingTiers: [
        {
          name: 'For Individuals',
          id: 'personal',
          description: 'The perfect solution for personal use with a controlled budget. Choose between our free plan or a Premium access for heavy usage.',
          features: [
            'FREE: 10 requests / month for testing.',
            'STANDARD ($19/month): 2,000 requests included.',
            'FLEXIBILITY: Simple per-request billing ($0.01 per excess).',
            'CONTROL: No commitment, no hidden fees.',
          ],
          cta: 'Get Started',
        },
        {
          name: 'For Businesses',
          id: 'business',
          description: 'Exclusive usage-based pricing. Pay only for your API volumes, regardless of the number of users.',
          features: [
            'VOLUME: Tiered pricing per 1,000 requests.',
            'SCALE: Unlimited users (only API volume matters).',
            'SECURITY: Audit, Smart Cache, and Private Deployment option (SLA).',
            'SUPPORT: Centralized billing and dedicated priority support.',
          ],
          cta: 'Contact Us',
        },
      ],
    },
    callToAction: {
      mainTitle: 'A Solution for Everyone',
      mainDescription: "Whether you're an individual looking for a personal assistant or a business protecting its data, Novix AI is for you.",
      sections: [
        {
          id: 'cta-business',
          title: 'The Competitive Edge for Your Business',
          description: 'Integrate powerful AI without compromising the confidentiality of your strategic data. Novix AI operates in a closed loop on your employees\' workstations, ensuring that your sensitive information never leaves your company.',
          cta: 'Secure Your Data',
        },
        {
          id: 'cta-personal',
          title: 'Your Personal Assistant',
          description: 'Unleash your creativity and boost your productivity. Novix AI is the ideal tool to write, code, learn, and create, all while keeping your ideas and data secure on your device. The power of AI, with your privacy included.',
          cta: 'Get Started for Free',
        }
      ],
    },
    contactForm: {
      title: 'Contact our sales team',
      description: 'Fill out this form and we will get back to you as soon as possible to discuss your needs.',
      companyName: 'Company Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      phone: 'Phone Number',
      address: 'Address',
      city: 'City',
      zipCode: 'ZIP Code',
      country: 'Country',
      userCount: 'Estimated number of users',
      submit: 'Send Request',
      success: 'Thank you! Your request has been sent.',
      error: 'An error occurred. Please try again.',
    },
    faq: {
      mainTitle: 'Frequently Asked Questions',
      mainDescription: 'Got questions? We have answers.',
      questions: [
        {
          question: 'How does Novix AI protect my privacy?',
          answer: 'Novix AI is designed with a "privacy-first" approach. All your conversations with the model are stored locally on your device. We do not have access to your data, and nothing is used to train our AI models.'
        },
        {
          question: 'Is my data really secure?',
          answer: 'Yes. We leverage your device\'s native security features, like biometric authentication (FaceID, fingerprint) or your PIN code, to protect access to the app and the data stored on your device.'
        },
        {
          question: 'Can I use Novix AI on multiple devices?',
          answer: 'Currently, Novix AI operates on a single-device basis to ensure maximum security, as all data is stored locally. However, you can use our full data export/import feature to migrate your conversations to a new device.'
        },
        {
          question: 'Is there a subscription?',
          answer: 'For individual users, there is no subscription. You pay only for what you use, based on per-request billing. It\'s simple, transparent, and non-binding.'
        }
      ]
    },
    footer: {
      rightsReserved: 'All rights reserved.',
      product: {
        title: 'Product',
        links: [
          { text: 'Features', href: '#features' },
          { text: 'Pricing', href: '#pricing' },
          { text: 'Download', href: '#' },
        ],
      },
      company: {
        title: 'Company',
        links: [
          { text: 'About', href: '#', id: 'about' },
          { text: 'Contact', href: '#', id: 'contact' },
        ],
      },
      legal: {
        title: 'Legal',
        links: [
          { text: 'Privacy Policy', href: '#' },
          { text: 'Terms of Service', href: '#' },
        ],
      },
      connect: {
        title: 'Connect',
        links: [
          { text: 'X (Twitter)', href: '#' },
          { text: 'Discord', href: '#' },
          { text: 'LinkedIn', href: '#' },
        ],
      },
    },
     legal: {
      privacyPolicy: {
        title: 'Privacy Policy',
        content: `Last updated: July 26, 2024\n\nNovix ("us", "we", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Novix AI application (the "Service"). Our processing of personal data complies with the Swiss Federal Act on Data Protection (FADP) and, where applicable, the European Union's General Data Protection Regulation (GDPR).\n\n<h3>1. Data Controller</h3>\nThe data controller for your information is:\nNovix Inc.\n[Company Address, e.g., Example Street 1, 1200 Geneva, Switzerland]\nEmail: privacy@novix.ai\n\n<h3>2. Data We Process</h3>\nOur approach is focused on data minimization. We only process information strictly necessary for the operation of the Service.\n\n<b>a) Data Processed Locally on Your Device:</b>\n\n- <b>Conversation Content:</b> All prompts you send to the AI and the generated responses are stored and encrypted exclusively on your device. We never have access to it.\n- <b>API Keys:</b> If you use your own API key for third-party services, it is stored securely in your device's keychain.\n\n<b>b) Data We Process on Our Servers in Switzerland:</b>\n\n- <b>Inference Data (Temporary):</b> To generate a response, your prompt is securely transmitted to our AI models hosted in Switzerland. This data is used solely for inference and is not permanently stored or used to train our models.\n- <b>Usage and Billing Data:</b> We collect anonymized metadata about your usage (e.g., number of requests, tokens used) for billing and statistical analysis to improve our service. This data does not contain any of your conversation content.\n\n<b>c) Contact Form Data (for businesses):</b>\n\n- <b>Business Contact Information:</b> Name, company name, email, phone number, etc. This information is collected based on your consent when you fill out the form to discuss our professional offerings.\n\n<h3>3. Purposes of Data Processing</h3>\n- <b>To Provide the Service:</b> To process your requests through our AI models.\n- <b>Billing:</b> To calculate your usage and generate corresponding invoices.\n- <b>Security and Maintenance:</b> To ensure the security of our services and to improve them.\n- <b>Business Communication (with consent):</b> To respond to your inquiries about our business plans.\n\n<h3>4. Data Sharing</h3>\nWe do not sell, trade, or rent your personal data. Your data is never shared with third parties, except for our infrastructure subcontractors (server hosts located exclusively in Switzerland), who are contractually bound to uphold the same confidentiality and security obligations as we do.\n\n<h3>5. Data Security</h3>\nWe implement state-of-the-art technical and organizational security measures to protect your data. Data in transit between your device and our Swiss servers is encrypted via TLS. Data stored on your device is protected by the native security mechanisms of your operating system.\n\n<h3>6. Your Rights</h3>\nIn accordance with the FADP and GDPR, you have the following rights:\n- <b>Right of Access:</b> You can request to know what data we hold about you.\n- <b>Right to Rectification:</b> You can request the correction of inaccurate data.\n- <b>Right to Erasure:</b> You can request the deletion of your billing data after the legal retention period.\n- <b>Right to Data Portability:</b> You can export your entire conversation history from the application at any time.\n- <b>Right to Withdraw Consent:</b> For data processed based on consent (e.g., contact form), you can withdraw it at any time.\n\nTo exercise these rights, please contact us at privacy@novix.ai.\n\n<h3>7. Changes to This Policy</h3>\nWe may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this policy periodically for any changes.`
      },
      termsOfService: {
        title: 'Terms of Service',
        content: `Last updated: July 26, 2024\n\nPlease read these terms and conditions carefully before using Our Service.\n\n<h3>Interpretation and Definitions</h3>\n<h4>Interpretation</h4>\nThe words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.\n\n<h3>Acknowledgment</h3>\nThese are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.\n\nYour access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.\n\nBy accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.\n\n<h3>Termination</h3>\nWe may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.\n\nUpon termination, Your right to use the Service will cease immediately.\n\n<h3>Governing Law</h3>\nThe laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.`
      }
    },
    about: {
        title: 'About Novix',
        content: 'Novix is a Swiss company specializing in the development of cutting-edge artificial intelligence solutions focused on data privacy and security. Our mission is to provide powerful and reliable tools that respect our users\' privacy, ensuring that their data remains under their complete control. Based in Switzerland, we are committed to upholding the highest standards of quality and data protection, in accordance with Swiss and European regulations.'
    }
  },
  de: {
    header: {
      concept: 'Konzept',
      features: 'Funktionen',
      trust: 'Vertrauen',
      pricing: 'Unsere Angebote',
      faq: 'FAQ',
      changeLanguage: 'Sprache ändern',
    },
    hero: {
      title: 'Novix',
      subtitle: 'Ihre Daten gehören nur Ihnen.',
      description: ['Keine Lecks. Keine Sammlung. Keine Überraschungen.','Die vertrauenswürdige KI, die Ihre Ideen in voller Vertraulichkeit schützt.'],
      ctaDownloadApp: 'App herunterladen',
      ctaTryFree: 'Kostenlos ausprobieren',
    },
    features: {
      mainTitle: 'Ihre Privatsphäre, garantiert.',
      mainDescription: 'Unsere Anwendung basiert auf drei Grundprinzipien, um die Sicherheit und Vertraulichkeit Ihrer Daten zu gewährleisten.',
      conceptBox: {
        title: 'Was ist Novix?',
        text: 'Im Herzen der Schweiz entwickelt, ist Novix AI das Ergebnis von Schweizer Exzellenz und Zuverlässigkeit. Unsere künstlichen Intelligenzmodelle werden ausschliesslich auf Schweizer Servern gehostet, was die totale Souveränität Ihrer Daten garantiert. Während Ihre Gespräche auf Ihrem Gerät verschlüsselt bleiben, wird die Inferenz in der Schweiz durchgeführt, unter dem Schutz der strengsten Gesetze der Welt. Profitieren Sie von einer hochmodernen KI, die für "Swiss Quality" steht und Leistung, Sicherheit und absolute Vertraulichkeit vereint.'
      },
      featureList: [
        {
          title: 'Benutzerfreundlichkeit',
          description: 'Geniessen Sie eine produktivitätsorientierte Benutzeroberfläche, die die Effizienz von LLMs bietet, ohne die Sicherheit Ihrer Daten zu beeinträchtigen.',
        },
        {
          title: 'Absolute Vertraulichkeit',
          description: 'Ihre Daten werden verschlüsselt und durch die native Sicherheit Ihres Geräts geschützt, was eine makellose Privatsphäre gewährleistet.',
        },
        {
          title: 'Lokale Speicherung',
          description: 'Ihre Gespräche werden nur auf Ihrem Gerät gespeichert und verschlüsselt. Nur Sie haben Zugriff und somit die volle Kontrolle.',
        },
      ],
    },
    moreFeatures: {
      mainTitle: "Für Ihr Vertrauen entwickelt",
      mainDescription: "Der Schutz Ihrer Daten ist unsere Priorität. So garantieren wir ihn.",
      featureList: [
        {
          id: 'secure',
          title: 'End-to-End-Sicherheit',
          description: 'Jede Interaktion mit unseren Modellen ist durch modernste Verschlüsselung geschützt. Ihre Daten sind während der Verarbeitung gesichert, sodass niemand, nicht einmal wir, darauf zugreifen kann. Ihre Privatsph-re ist unsere Priorität.',
        },
        {
          id: 'compliance',
          title: 'Konform mit dem Schweizer Datenschutzgesetz',
          description: 'Unsere in der Schweiz entwickelte Anwendung entspricht dem neuen Bundesgesetz über den Datenschutz (nDSG). Wir verpflichten uns zu den höchsten Standards bei Datenschutz und Datensicherheit.',
        },
        {
          id: 'export',
          title: 'Vollständige Datenübertragbarkeit',
          description: 'Sie haben die volle Kontrolle über Ihre Daten. Exportieren Sie einfach Ihren gesamten Gesprächsverlauf in einem Standardformat und importieren Sie ihn auf ein neues Gerät. Ihre Daten gehören Ihnen, und Sie können sie jederzeit mitnehmen.',
        },
      ],
    },
    pricing: {
      mainTitle: 'Unsere Angebote',
      mainDescription: 'Einfache und transparente Preise, angepasst an Ihre Bedürfnisse.',
      pricingTiers: [
        {
          name: 'Für Privatpersonen',
          id: 'personal',
          description: 'Die perfekte Lösung für den persönlichen Gebrauch mit einem kontrollierten Budget. Wählen Sie zwischen unserem kostenlosen Plan oder einem Premium-Zugang für intensive Nutzung.',
          features: [
            'KOSTENLOS: 10 Anfragen / Monat zum Testen.',
            'STANDARD ($19/Monat): 2.000 Anfragen inklusive.',
            'FLEXIBILITÄT: Einfache Abrechnung pro Anfrage ($0.01 pro Überschreitung).',
            'KONTROLLE: Keine Verpflichtung, keine versteckten Gebühren.',
          ],
          cta: 'Loslegen',
        },
        {
          name: 'Für Unternehmen',
          id: 'business',
          description: 'Exklusive nutzungsbasierte Preise. Zahlen Sie nur für Ihre API-Volumen, unabhängig von der Anzahl der Benutzer.',
          features: [
            'VOLUMEN: Gestaffelte Preise pro 1.000 Anfragen.',
            'SKALIERBARKEIT: Unbegrenzte Benutzeranzahl (nur das API-Volumen zählt).',
            'SICHERHEIT: Audit, Smart Cache und Private Deployment Option (SLA).',
            'SUPPORT: Zentralisierte Abrechnung und dedizierter Priority-Support.',
          ],
          cta: 'Kontaktieren Sie uns',
        },
      ],
    },
    callToAction: {
      mainTitle: 'Eine Lösung für alle',
      mainDescription: 'Egal, ob Sie eine Privatperson sind, die einen persönlichen Assistenten sucht, oder ein Unternehmen, das seine Daten schützt, Novix AI ist für Sie da.',
      sections: [
        {
          id: 'cta-business',
          title: 'Der Wettbewerbsvorteil für Ihr Unternehmen',
          description: 'Integrieren Sie leistungsstarke KI, ohne die Vertraulichkeit Ihrer strategischen Daten zu gefährden. Novix AI arbeitet in einem geschlossenen Kreislauf auf den Arbeitsplätzen Ihrer Mitarbeiter und stellt sicher, dass Ihre sensiblen Informationen Ihr Unternehmen niemals verlassen.',
          cta: 'Sichern Sie Ihre Daten',
        },
        {
          id: 'cta-personal',
          title: 'Ihr persönlicher Assistent',
          description: 'Entfesseln Sie Ihre Kreativität und steigern Sie Ihre Produktivität. Novix AI ist das ideale Werkzeug zum Schreiben, Programmieren, Lernen und Erstellen, während Ihre Ideen und Daten sicher auf Ihrem Gerät bleiben. Die Kraft der KI, plus Ihre Privatsphäre.',
          cta: 'Kostenlos loslegen',
        }
      ],
    },
    contactForm: {
      title: 'Kontaktieren Sie unser Vertriebsteam',
      description: 'Füllen Sie dieses Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden, um Ihre Bedürfnisse zu besprechen.',
      companyName: 'Name der Firma',
      firstName: 'Vorname',
      lastName: 'Nachname',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      address: 'Adresse',
      city: 'Stadt',
      zipCode: 'Postleitzahl',
      country: 'Land',
      userCount: 'Geschätzte Anzahl der Benutzer',
      submit: 'Anfrage senden',
      success: 'Vielen Dank! Ihre Anfrage wurde gesendet.',
      error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
    },
    faq: {
      mainTitle: 'Häufig gestellte Fragen',
      mainDescription: 'Haben Sie Fragen? Wir haben die Antworten.',
      questions: [
        {
          question: 'Wie schützt Novix AI meine Privatsphäre?',
          answer: 'Novix AI wurde nach dem "Privacy-First"-Ansatz entwickelt. Alle Ihre Gespräche mit dem Modell werden lokal auf Ihrem Gerät gespeichert. Wir haben keinen Zugriff auf Ihre Daten und nichts wird zum Trainieren unserer KI-Modelle verwendet.'
        },
        {
          question: 'Sind meine Daten wirklich sicher?',
          answer: 'Ja. Wir nutzen die nativen Sicherheitsfunktionen Ihres Geräts wie die biometrische Authentifizierung (FaceID, Fingerabdruck) oder Ihre PIN, um den Zugriff auf die App und die auf Ihrem Gerät gespeicherten Daten zu schützen.'
        },
        {
          question: 'Kann ich Novix AI auf mehreren Geräten verwenden?',
          answer: 'Derzeit funktioniert Novix AI auf einem einzigen Gerät, um maximale Sicherheit zu gewährleisten, da alle Daten lokal gespeichert werden. Sie können jedoch unsere vollständige Datenexport-/-importfunktion verwenden, um Ihre Gespräche auf ein neues Gerät zu migrieren.'
        },
        {
          question: 'Gibt es ein Abonnement?',
          answer: 'Für Einzelbenutzer gibt es kein Abonnement. Sie zahlen nur für das, was Sie verbrauchen, basierend auf einer Abrechnung pro Anfrage. Es ist einfach, transparent und unverbindlich.'
        }
      ]
    },
    footer: {
      rightsReserved: 'Alle Rechte vorbehalten.',
      product: {
        title: 'Produkt',
        links: [
          { text: 'Funktionen', href: '#features' },
          { text: 'Preise', href: '#pricing' },
          { text: 'Herunterladen', href: '#' },
        ],
      },
      company: {
        title: 'Unternehmen',
        links: [
          { text: 'Über uns', href: '#', id: 'about' },
          { text: 'Kontakt', href: '#', id: 'contact' },
        ],
      },
      legal: {
        title: 'Rechtliches',
        links: [
          { text: 'Datenschutzrichtlinie', href: '#' },
          { text: 'Nutzungsbedingungen', href: '#' },
        ],
      },
      connect: {
        title: 'Kontakt',
        links: [
          { text: 'X (Twitter)', href: '#' },
          { text: 'Discord', href: '#' },
          { text: 'LinkedIn', href: '#' },
        ],
      },
    },
    legal: {
      privacyPolicy: {
        title: 'Datenschutzrichtlinie',
        content: `Zuletzt aktualisiert: 26. Juli 2024\n\nNovix („uns“, „wir“ oder „unser“) verpflichtet sich, Ihre Privatsphäre zu schützen. Diese Datenschutzrichtlinie erläutert, wie wir Ihre Informationen erfassen, verwenden, offenlegen und schützen, wenn Sie unsere Novix AI-Anwendung (der „Dienst“) nutzen. Unsere Verarbeitung personenbezogener Daten entspricht dem schweizerischen Bundesgesetz über den Datenschutz (DSG) und gegebenenfalls der Datenschutz-Grundverordnung (DSGVO) der Europäischen Union.\n\n<h3>1. Datenverantwortlicher</h3>\nDer Datenverantwortliche für Ihre Informationen ist:\nNovix Inc.\n[Firmenadresse, z.B. Beispielstrasse 1, 1200 Genf, Schweiz]\nE-Mail: privacy@novix.ai\n\n<h3>2. Von uns verarbeitete Daten</h3>\nUnser Ansatz konzentriert sich auf die Datenminimierung. Wir verarbeiten nur Informationen, die für den Betrieb des Dienstes unbedingt erforderlich sind.\n\n<b>a) Lokal auf Ihrem Gerät verarbeitete Daten:</b>\n\n- <b>Gesprächsinhalte:</b> Alle von Ihnen an die KI gesendeten Anfragen und die generierten Antworten werden ausschließlich auf Ihrem Gerät gespeichert und verschlüsselt. Wir haben niemals Zugriff darauf.\n- <b>API-Schlüssel:</b> Wenn Sie Ihren eigenen API-Schlüssel für Dienste von Drittanbietern verwenden, wird dieser sicher im Schlüsselbund Ihres Geräts gespeichert.\n\n<b>b) Daten, die wir auf unseren Servern in der Schweiz verarbeiten:</b>\n\n- <b>Inferenzdaten (temporär):</b> Um eine Antwort zu generieren, wird Ihre Anfrage (Prompt) sicher an unsere in der Schweiz gehosteten KI-Modelle übertragen. Diese Daten werden ausschließlich zur Inferenz verwendet und nicht dauerhaft gespeichert oder zum Trainieren unserer Modelle verwendet.\n- <b>Nutzungs- und Abrechnungsdaten:</b> Wir erfassen anonymisierte Metadaten über Ihre Nutzung (z.B. Anzahl der Anfragen, verwendete Token) für Abrechnungszwecke und statistische Analysen zur Verbesserung unseres Dienstes. Diese Daten enthalten keine Inhalte Ihrer Gespräche.\n\n<b>c) Daten aus dem Kontaktformular (für Unternehmen):</b>\n\n- <b>Geschäftliche Kontaktinformationen:</b> Name, Firmenname, E-Mail, Telefonnummer usw. Diese Informationen werden auf der Grundlage Ihrer Zustimmung erfasst, wenn Sie das Formular ausfüllen, um unsere professionellen Angebote zu besprechen.\n\n<h3>3. Zwecke der Datenverarbeitung</h3>\n- <b>Bereitstellung des Dienstes:</b> Zur Bearbeitung Ihrer Anfragen durch unsere KI-Modelle.\n- <b>Abrechnung:</b> Zur Berechnung Ihrer Nutzung und Erstellung entsprechender Rechnungen.\n- <b>Sicherheit und Wartung:</b> Zur Gewährleistung der Sicherheit unserer Dienste und deren Verbesserung.\n- <b>Geschäftskommunikation (mit Zustimmung):</b> Zur Beantwortung Ihrer Anfragen zu unseren Geschäftsplänen.\n\n<h3>4. Datenweitergabe</h3>\nWir verkaufen, handeln oder vermieten Ihre personenbezogenen Daten nicht. Ihre Daten werden niemals an Dritte weitergegeben, mit Ausnahme unserer Infrastruktur-Subunternehmer (Server-Hoster, die sich ausschließlich in der Schweiz befinden), die vertraglich verpflichtet sind, die gleichen Vertraulichkeits- und Sicherheitsverpflichtungen wie wir einzuhalten.\n\n<h3>5. Datensicherheit</h3>\nWir setzen modernste technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten zu schützen. Daten, die zwischen Ihrem Gerät und unseren Schweizer Servern übertragen werden, sind über TLS verschlüsselt. Auf Ihrem Gerät gespeicherte Daten werden durch die nativen Sicherheitsmechanismen Ihres Betriebssystems geschützt.\n\n<h3>6. Ihre Rechte</h3>\nGemäß dem DSG und der DSGVO haben Sie die folgenden Rechte:\n- <b>Auskunftsrecht:</b> Sie können anfragen, welche Daten wir über Sie gespeichert haben.\n- <b>Recht auf Berichtigung:</b> Sie können die Korrektur unrichtiger Daten verlangen.\n- <b>Recht auf Löschung:</b> Sie können die Löschung Ihrer Abrechnungsdaten nach Ablauf der gesetzlichen Aufbewahrungsfrist verlangen.\n- <b>Recht auf Datenübertragbarkeit:</b> Sie können Ihren gesamten Gesprächsverlauf jederzeit aus der Anwendung exportieren.\n- <b>Recht auf Widerruf der Einwilligung:</b> Für Daten, die auf der Grundlage einer Einwilligung verarbeitet werden (z.B. Kontaktformular), können Sie diese jederzeit widerrufen.\n\nUm diese Rechte auszuüben, kontaktieren Sie uns bitte unter privacy@novix.ai.\n\n<h3>7. Änderungen dieser Richtlinie</h3>\nWir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über alle Änderungen informieren, indem wir die neue Richtlinie auf dieser Seite veröffentlichen. Es wird empfohlen, diese Richtlinie regelmäßig auf Änderungen zu überprüfen.`
      },
      termsOfService: {
        title: 'Nutzungsbedingungen',
        content: `Zuletzt aktualisiert: 26. Juli 2024\n\nBitte lesen Sie diese Allgemeinen Geschäftsbedingungen sorgfältig durch, bevor Sie unseren Dienst nutzen.\n\n<h3>Interpretation und Definitionen</h3>\n<h4>Interpretation</h4>\nWörter, deren Anfangsbuchstabe großgeschrieben ist, haben unter den folgenden Bedingungen definierte Bedeutungen. Die folgenden Definitionen haben dieselbe Bedeutung, unabhängig davon, ob sie im Singular oder im Plural erscheinen.\n\n<h3>Anerkennung</h3>\nDies sind die Allgemeinen Geschäftsbedingungen, die die Nutzung dieses Dienstes und die Vereinbarung zwischen Ihnen und dem Unternehmen regeln. Diese Allgemeinen Geschäftsbedingungen legen die Rechte und Pflichten aller Benutzer in Bezug auf die Nutzung des Dienstes fest.\n\nIhr Zugriff auf den Dienst und Ihre Nutzung des Dienstes sind von Ihrer Annahme und Einhaltung dieser Allgemeinen Geschäftsbedingungen abhängig. Diese Allgemeinen Geschäftsbedingungen gelten für alle Besucher, Benutzer und andere, die auf den Dienst zugreifen oder ihn nutzen.\n\nIndem Sie auf den Dienst zugreifen oder ihn nutzen, stimmen Sie zu, an diese Allgemeinen Geschäftsbedingungen gebunden zu sein. Wenn Sie mit einem Teil dieser Allgemeinen Geschäftsbedingungen nicht einverstanden sind, dürfen Sie nicht auf den Dienst zugreifen.\n\n<h3>Beendigung</h3>\nWir können Ihren Zugang sofort, ohne vorherige Ankündigung oder Haftung, aus irgendeinem Grund, einschließlich, aber nicht beschränkt auf den Fall, dass Sie gegen diese Allgemeinen Geschäftsbedingungen verstoßen, beenden oder aussetzen.\n\nNach der Beendigung erlischt Ihr Recht zur Nutzung des Dienstes sofort.\n\n<h3>Geltendes Recht</h3>\nDie Gesetze des Landes, unter Ausschluss seiner Kollisionsnormen, regeln diese Bedingungen und Ihre Nutzung des Dienstes. Ihre Nutzung der Anwendung kann auch anderen lokalen, staatlichen, nationalen oder internationalen Gesetzen unterliegen.`
      }
    },
    about: {
        title: 'Über Novix',
        content: 'Novix ist ein Schweizer Unternehmen, das sich auf die Entwicklung von hochmodernen künstlichen Intelligenzlösungen mit Schwerpunkt auf Datenschutz und Datensicherheit spezialisiert hat. Unsere Mission ist es, leistungsstarke und zuverlässige Werkzeuge bereitzustellen, die die Privatsphäre unserer Nutzer respektieren und sicherstellen, dass ihre Daten unter ihrer vollständigen Kontrolle bleiben. Mit Sitz in der Schweiz verpflichten wir uns, die höchsten Standards für Qualität und Datenschutz gemäss den schweizerischen und europäischen Vorschriften einzuhalten.'
    }
  },
  it: {
    header: {
      concept: 'Concetto',
      features: 'Funzionalità',
      trust: 'Fiducia',
      pricing: 'Le nostre offerte',
      faq: 'FAQ',
      changeLanguage: 'Cambia lingua',
    },
    hero: {
      title: 'Novix',
      subtitle: 'I tuoi dati appartengono solo a te.',
      description: ["Nessuna fuga. Nessuna raccolta. Nessuna sorpresa.","L'IA affidabile che protegge le tue idee in completa riservatezza."],
      ctaDownloadApp: "Scarica l'app",
      ctaTryFree: 'Prova gratuitamente',
    },
    features: {
      mainTitle: 'La tua privacy, garantita.',
      mainDescription: 'La nostra applicazione si basa su tre principi fondamentali per garantire la sicurezza e la riservatezza dei tuoi dati.',
      conceptBox: {
        title: 'Cos\'è Novix?',
        text: 'Sviluppato nel cuore della Svizzera, Novix AI è il risultato dell\'eccellenza e dell\'affidabilità svizzere. I nostri modelli di intelligenza artificiale sono ospitati esclusivamente su server svizzeri, garantendo la totale sovranità dei tuoi dati. Mentre le tue conversazioni rimangono crittografate sul tuo dispositivo, l\'inferenza viene eseguita in Svizzera, sotto la protezione delle leggi più severe al mondo. Approfitta di un\'IA all\'avanguardia, sinonimo di "Swiss Quality", che combina prestazioni, sicurezza e assoluta riservatezza.'
      },
      featureList: [
        {
          title: "Facilità d'uso",
          description: "Goditi un'interfaccia incentrata sulla produttività che offre l'efficienza dei LLM senza compromettere la sicurezza dei tuoi dati.",
        },
        {
          title: 'Riservatezza Assoluta',
          description: 'I tuoi dati sono crittografati e protetti dalla sicurezza nativa del tuo dispositivo, garantendo una privacy impeccabile.',
        },
        {
          title: 'Archiviazione Locale',
          description: 'Le tue conversazioni sono archiviate e crittografate solo sul tuo dispositivo. Solo tu hai accesso, garantendo un controllo totale.',
        },
      ],
    },
    moreFeatures: {
      mainTitle: "Progettato per la tua fiducia",
      mainDescription: "La protezione dei tuoi dati è la nostra priorità. Ecco come la garantiamo.",
      featureList: [
        {
          id: 'secure',
          title: 'Sicurezza End-to-End',
          description: 'Ogni interazione con i nostri modelli è protetta da una crittografia all\'avanguardia. I tuoi dati sono protetti durante l\'elaborazione, garantendo che nessuno, nemmeno noi, possa accedervi. La tua privacy è la nostra priorità.',
        },
        {
          id: 'compliance',
          title: 'Conforme alla legge svizzera sulla protezione dei dati',
          description: 'Progettata in Svizzera, la nostra applicazione è conforme alla new Legge federale sulla protezione dei dati (nLPD). Ci impegniamo a rispettare i più alti standard di privacy e sicurezza dei dati.',
        },
        {
          id: 'export',
          title: 'Portabilità completa dei dati',
          description: "Hai il pieno controllo sui tuoi dati. Esporta facilmente l'intera cronologia delle conversazioni in un formato standard e importala su un nuovo dispositivo. I tuoi dati sono tuoi e puoi portarli con te in qualsiasi momento.",
        },
      ],
    },
    pricing: {
      mainTitle: 'Le nostre offerte',
      mainDescription: 'Prezzi semplici e trasparenti, adattati alle tue esigenze.',
      pricingTiers: [
        {
          name: 'Per i Privati',
          id: 'personal',
          description: "La soluzione perfetta per l'uso personale con un budget controllato. Scegli tra il nostro piano gratuito o un accesso Premium per un uso intensivo.",
          features: [
            'GRATUITO: 10 richieste / mese per testare.',
            'STANDARD ($19/mese): 2.000 richieste incluse.',
            'FLESSIBILITÀ: Fatturazione semplice per richiesta ($0.01 per eccesso).',
            'CONTROLLO: Nessun impegno, nessun costo nascosto.',
          ],
          cta: 'Inizia',
        },
        {
          name: 'Per le Aziende',
          id: 'business',
          description: 'Prezzi esclusivi basati sull\'utilizzo. Paghi solo per i volumi API, indipendentemente dal numero di utenti.',
          features: [
            'VOLUME: Prezzi a scaglioni per 1.000 richieste.',
            "SCALABILITÀ: Numero di utenti illimitato (conta solo il volume dell'API).",
            'SICUREZZA: Audit, Smart Cache e opzione di implementazione privata (SLA).',
            'SUPPORTO: Fatturazione centralizzata e supporto prioritario dedicato.',
          ],
          cta: 'Contattaci',
        },
      ],
    },
    callToAction: {
      mainTitle: 'Una soluzione per tutti',
      mainDescription: 'Che tu sia un privato alla ricerca di un assistente personale o un\'azienda che protegge i propri dati, Novix AI è la soluzione per te.',
      sections: [
        {
          id: 'cta-business',
          title: 'Il vantaggio competitivo per la tua azienda',
          description: 'Integra una potente IA senza compromettere la riservatezza dei tuoi dati strategici. Novix AI opera in un circuito chiuso sulle postazioni di lavoro dei tuoi dipendenti, garantendo che le tue informazioni sensibili non lascino mai la tua azienda.',
          cta: 'Proteggi i tuoi dati',
        },
        {
          id: 'cta-personal',
          title: 'Il tuo assistente personale',
          description: 'Scatena la tua creatività e aumenta la tua produttività. Novix AI è lo strumento ideale per scrivere, programmare, imparare e creare, mantenendo le tue idee e i tuoi dati al sicuro sul tuo dispositivo. La potenza dell\'IA, con la tua privacy in più.',
          cta: 'Inizia gratuitamente',
        }
      ],
    },
    contactForm: {
      title: 'Contatta il nostro team di vendita',
      description: 'Compila questo modulo e ti risponderemo al più presto per discutere delle tue esigenze.',
      companyName: 'Nome della ditta',
      firstName: 'Nome',
      lastName: 'Cognome',
      email: 'Indirizzo e-mail',
      phone: 'Numero di telefono',
      address: 'Indirizzo',
      city: 'Città',
      zipCode: 'Codice postale',
      country: 'Paese',
      userCount: 'Numero stimato di utenti',
      submit: 'Invia richiesta',
      success: 'Grazie! La tua richiesta è stata inviata.',
      error: 'Si è verificato un errore. Per favore riprova.',
    },
    faq: {
      mainTitle: 'Domande frequenti',
      mainDescription: 'Hai domande? Abbiamo le risposte.',
      questions: [
        {
          question: 'Come protegge Novix AI la mia privacy?',
          answer: 'Novix AI è progettato con un approccio "privacy-first". Tutte le tue conversazioni con il modello sono archiviate localmente sul tuo dispositivo. Non abbiamo accesso ai tuoi dati e nulla viene utilizzato per addestrare i nostri modelli di intelligenza artificiale.'
        },
        {
          question: 'I miei dati sono davvero sicuri?',
          answer: 'Sì. Sfruttiamo le funzionalità di sicurezza native del tuo dispositivo, come l\'autenticazione biometrica (FaceID, impronta digitale) o il tuo codice PIN, per proteggere l\'accesso all\'app e ai dati archiviati sul tuo dispositivo.'
        },
        {
          question: 'Posso usare Novix AI su più dispositivi?',
          answer: 'Attualmente, Novix AI funziona su un singolo dispositivo per garantire la massima sicurezza, poiché tutti i dati vengono archiviati localmente. Tuttavia, puoi utilizzare la nostra funzione di esportazione/importazione completa dei dati per migrare le tue conversazioni su un nuovo dispositivo.'
        },
        {
          question: 'C\'è un abbonamento?',
          answer: 'Per gli utenti individuali, non c\'è alcun abbonamento. Paghi solo per ciò che usi, in base alla fatturazione per richiesta. È semplice, trasparente e non vincolante.'
        }
      ]
    },
    footer: {
      rightsReserved: 'Tutti i diritti riservati.',
      product: {
        title: 'Prodotto',
        links: [
          { text: 'Funzionalità', href: '#features' },
          { text: 'Prezzi', href: '#pricing' },
          { text: 'Scarica', href: '#' },
        ],
      },
      company: {
        title: 'Azienda',
        links: [
          { text: 'Chi siamo', href: '#', id: 'about' },
          { text: 'Contatti', href: '#', id: 'contact' },
        ],
      },
      legal: {
        title: 'Legale',
        links: [
          { text: 'Informativa sulla privacy', href: '#' },
          { text: 'Termini di servizio', href: '#' },
        ],
      },
      connect: {
        title: 'Contatti',
        links: [
          { text: 'X (Twitter)', href: '#' },
          { text: 'Discord', href: '#' },
          { text: 'LinkedIn', href: '#' },
        ],
      },
    },
    legal: {
      privacyPolicy: {
        title: 'Informativa sulla privacy',
        content: `Ultimo aggiornamento: 26 luglio 2024\n\nNovix ("noi", "ci" o "nostro") si impegna a proteggere la tua privacy. La presente Informativa sulla privacy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le tue informazioni quando utilizzi la nostra applicazione Novix AI (il "Servizio"). Il nostro trattamento dei dati personali è conforme alla Legge federale svizzera sulla protezione dei dati (LPD) e, ove applicabile, al Regolamento generale sulla protezione dei dati (GDPR) dell'Unione Europea.\n\n<h3>1. Titolare del trattamento</h3>\nIl titolare del trattamento dei tuoi dati è:\nNovix Inc.\n[Indirizzo dell'azienda, es. Via Esempio 1, 1200 Ginevra, Svizzera]\nEmail: privacy@novix.ai\n\n<h3>2. Dati che trattiamo</h3>\nIl nostro approccio si concentra sulla minimizzazione dei dati. Trattiamo solo le informazioni strettamente necessarie per il funzionamento del Servizio.\n\n<b>a) Dati trattati localmente sul tuo dispositivo:</b>\n\n- <b>Contenuto delle conversazioni:</b> Tutte le richieste che invii all'IA e le risposte generate vengono archiviate e crittografate esclusivamente sul tuo dispositivo. Non vi abbiamo mai accesso.\n- <b>Chiavi API:</b> Se utilizzi la tua chiave API per servizi di terze parti, questa viene archiviata in modo sicuro nel portachiavi del tuo dispositivo.\n\n<b>b) Dati che trattiamo sui nostri server in Svizzera:</b>\n\n- <b>Dati di inferenza (temporanei):</b> Per generare una risposta, la tua richiesta (prompt) viene trasmessa in modo sicuro ai nostri modelli di IA ospitati in Svizzera. Questi dati vengono utilizzati esclusivamente per l'inferenza e non vengono archiviati in modo permanente né utilizzati per addestrare i nostri modelli.\n- <b>Dati di utilizzo e fatturazione:</b> Raccogliamo metadati anonimi sul tuo utilizzo (ad es. numero di richieste, token utilizzati) per la fatturazione e l'analisi statistica al fine di migliorare il nostro servizio. Questi dati non contengono alcun contenuto delle tue conversazioni.\n\n<b>c) Dati del modulo di contatto (per le aziende):</b>\n\n- <b>Informazioni di contatto professionali:</b> Nome, cognome, nome dell'azienda, email, telefono, ecc. Queste informazioni vengono raccolte sulla base del tuo consenso quando compili il modulo per discutere le nostre offerte professionali.\n\n<h3>3. Finalità del trattamento dei dati</h3>\n- <b>Fornitura del Servizio:</b> Per elaborare le tue richieste tramite i nostri modelli di IA.\n- <b>Fatturazione:</b> Per calcolare il tuo consumo e generare le relative fatture.\n- <b>Sicurezza e manutenzione:</b> Per garantire la sicurezza dei nostri servizi e migliorarli.\n- <b>Comunicazione commerciale (con consenso):</b> Per rispondere alle tue richieste di informazioni sui nostri piani aziendali.\n\n<h3>4. Condivisione dei dati</h3>\nNon vendiamo, scambiamo o noleggiamo i tuoi dati personali. I tuoi dati non vengono mai condivisi con terze parti, ad eccezione dei nostri subappaltatori di infrastrutture (host di server situati esclusivamente in Svizzera), che sono contrattualmente obbligati a rispettare i nostri stessi obblighi di riservatezza e sicurezza.\n\n<h3>5. Sicurezza dei dati</h3>\nImplementiamo misure di sicurezza tecniche e organizzative all'avanguardia per proteggere i tuoi dati. I dati in transito tra il tuo dispositivo e i nostri server svizzeri sono crittografati tramite TLS. I dati archiviati sul tuo dispositivo sono protetti dai meccanismi di sicurezza nativi del tuo sistema operativo.\n\n<h3>6. I tuoi diritti</h3>\nIn conformità con la LPD e il GDPR, hai i seguenti diritti:\n- <b>Diritto di accesso:</b> Puoi richiedere di sapere quali dati conserviamo su di te.\n- <b>Diritto di rettifica:</b> Puoi richiedere la correzione di dati inesatti.\n- <b>Diritto alla cancellazione:</b> Puoi richiedere la cancellazione dei tuoi dati di fatturazione dopo il periodo di conservazione legale.\n- <b>Diritto alla portabilità dei dati:</b> Puoi esportare l'intera cronologia delle tue conversazioni dall'applicazione in qualsiasi momento.\n- <b>Diritto di ritirare il consenso:</b> Per i dati trattati sulla base del consenso (ad es. modulo di contatto), puoi ritirarlo in qualsiasi momento.\n\nPer esercitare questi diritti, ti preghiamo di contattarci all'indirizzo privacy@novix.ai.\n\n<h3>7. Modifiche a questa informativa</h3>\nPotremmo aggiornare questa Informativa sulla privacy di tanto in tanto. Ti informeremo di eventuali modifiche pubblicando la nuova informativa su questa pagina. Si consiglia di rivedere periodicamente questa informativa per eventuali modifiche.`
      },
      termsOfService: {
        title: 'Termini di servizio',
        content: `Ultimo aggiornamento: 26 luglio 2024\n\nSi prega di leggere attentamente questi termini e condizioni prima di utilizzare il Nostro Servizio.\n\n<h3>Interpretazione e Definizioni</h3>\n<h4>Interpretazione</h4>\nLe parole di cui la lettera iniziale è maiuscola hanno significati definiti nelle seguenti condizioni. Le seguenti definizioni avranno lo stesso significato indipendentemente dal fatto che appaiano al singolare o al plurale.\n\n<h3>Riconoscimento</h3>\nQuesti sono i Termini e le Condizioni che regolano l'uso di questo Servizio e l'accordo che opera tra Te e l'Azienda. Questi Termini e Condizioni stabiliscono i diritti e gli obblighi di tutti gli utenti per quanto riguarda l'uso del Servizio.\n\nL'accesso e l'uso del Servizio sono subordinati all'accettazione e al rispetto di questi Termini e Condizioni. Questi Termini e Condizioni si applicano a tutti i visitatori, utenti e altri che accedono o utilizzano il Servizio.\n\nAccedendo o utilizzando il Servizio, accetti di essere vincolato da questi Termini e Condizioni. Se non sei d'accordo con qualsiasi parte di questi Termini e Condizioni, non puoi accedere al Servizio.\n\n<h3>Risoluzione</h3>\nPossiamo risolvere o sospendere il Tuo accesso immediatamente, senza preavviso o responsabilità, per qualsiasi motivo, incluso, senza limitazioni, se violi questi Termini e Condizioni.\n\nAlla risoluzione, il Tuo diritto di utilizzare il Servizio cesserà immediatamente.\n\n<h3>Legge Applicabile</h3>\nLe leggi del Paese, escluse le sue norme sui conflitti di legge, regoleranno questi Termini e il Tuo uso del Servizio. Il Tuo uso dell'Applicazione può anche essere soggetto ad altre leggi locali, statali, nazionali o internazionali.`
      }
    },
    about: {
        title: 'Chi è Novix',
        content: 'Novix è un\'azienda svizzera specializzata nello sviluppo di soluzioni di intelligenza artificiale all\'avanguardia incentrate sulla privacy e la sicurezza dei dati. La nostra missione è fornire strumenti potenti e affidabili che rispettino la privacy dei nostri utenti, garantendo che i loro dati rimangano sotto il loro completo controllo. Con sede in Svizzera, ci impegniamo a rispettare i più alti standard di qualità e protezione dei dati, in conformità con le normative svizzere ed europee.'
    }
  },
};

    
    

    




    

