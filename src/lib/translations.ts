
export const translations = {
  fr: {
    header: {
      concept: 'Concept',
      features: 'Produits',
      pricing: 'Nos Offres',
      trust: 'Confiance',
      faq: 'FAQ',
      changeLanguage: 'Changer de langue',
    },
    hero: {
      title: 'Novix',
      subtitle: "L'IA qui Pense ET Agit.",
      description: "Une puissance sans limite, une confidentialité absolue.",
      ctaDownloadApp: "Novix Action",
      ctaTryFree: 'Novix Private',
    },
    features: {
      mainTitle: 'Deux environnements, un seul contrôle',
      mainDescription: "Choisissez entre la confidentialité absolue de Novix Private et la puissance d'exécution de Novix Action.",
      conceptBox: {
        title: "L'IA à double environnement",
        text: "Développée au cœur de la Suisse, Novix AI incarne l'excellence, la fiabilité et la précision helvétiques. Nous ne vous offrons pas qu'un seul type d'Intelligence Artificielle, mais le contrôle total sur la manière dont vous l'utilisez. Novix est la première IA à double environnement, vous laissant choisir entre l'exécution sans limites et la confidentialité absolue."
      },
      featureList: [
        {
          title: "Novix PRIVATE : Le Penseur",
          description: "La Souveraineté des Données. Bénéficiez de l'IA 'Swiss Quality'. Inférence exclusivement sur serveurs suisses pour une confidentialité absolue. Vos données sont protégées par les lois les plus strictes au monde.",
        },
        {
          title: 'Novix ACTION : L\'Agent Exécutif',
          description: "L'Exécution Sans Compromis. Notre Agent d'Action s'active pour agir en ligne, naviguer sur le Web et exécuter du code. Déployez une IA débridée pour les tâches complexes qui exigent de l'action rapide.",
        }
      ],
    },
    moreFeatures: {
      mainTitle: "Conçu pour votre confiance",
      mainDescription: "La sécurité est adaptée à chaque usage. Confidentialité maximale pour Private, opérations sécurisées pour Action.",
      featureList: [
        {
          id: 'secure',
          title: 'Novix Private : Votre Forteresse Numérique',
          description: "Avec Novix Private, tout est conçu pour une confidentialité maximale. Vos conversations sont cryptées et stockées exclusivement sur votre appareil. Elles ne sont jamais envoyées sur nos serveurs, sauf pour l'inférence qui s'effectue en Suisse. Personne d'autre que vous ne peut y accéder.",
        },
        {
          id: 'compliance',
          title: 'Novix Action : Des Actions Maîtrisées',
          description: "Novix Action est conçu pour interagir avec le monde extérieur en votre nom. Bien que cela implique une connexion à des services en ligne, toutes les opérations sont initiées depuis notre infrastructure sécurisée. Nous ne stockons pas les résultats de ses actions, vous garantissant le contrôle.",
        },
        {
          id: 'export',
          title: 'Portabilité et Contrôle de vos Données',
          description: "Vos données vous appartiennent. Avec Novix Private, vous pouvez exporter l'intégralité de votre historique de conversation à tout moment, dans un format standard. Vous restez maître de vos informations, que vous changiez d'appareil ou souhaitiez simplement archiver vos idées.",
        },
      ],
    },
    pricing: {
      mainTitle: 'Nos offres',
      mainDescription: 'Une tarification simple et transparente, adaptée à vos besoins.',
      pricingTiers: [
        {
          name: 'Novix Private',
          id: 'personal',
          description: 'La solution parfaite pour un usage personnel et un budget maîtrisé. Choisissez entre nos forfaits à usage unique : sans engagement, sans dépassement de budget.',
          features: [
            'GRATUIT : 10 requêtes / mois pour tester.',
            'STANDARD (20 CHF) : 1 500 requêtes. Usage bloqué une fois le quota atteint.',
            'PREMIUM (49 CHF) : 5 000 requêtes. Idéal pour un usage intense et illimité en temps.',
            'CONTRÔLE : Paiement unique par forfait. Aucun frais caché ou abonnement récurrent.',
          ],
          cta: 'Commencer avec Private',
        },
        {
          name: 'Novix Action',
          id: 'business',
          description: "Offre personnalisée pour l'intégration en volume. Accédez à nos forfaits exclusifs utilisateurs illimités et à notre infrastructure suisse sécurisée.",
          features: [
            'BUSINESS PRO (2 000 CHF/mois) : Jusqu\'à 100 000 requêtes incluses.',
            'ENTERPRISE MAX (5 000 CHF/mois) : Jusqu\'à 250 000 requêtes incluses.',
            'AVANTAGE : Nombre d\'utilisateurs/collaborateurs illimité.',
            'SÉCURITÉ : Déploiement souverain en Suisse, support prioritaire 24/7.',
          ],
          cta: 'Nous contacter pour Action',
        },
      ],
    },
    callToAction: {
      mainTitle: 'Une solution pour chaque besoin',
      mainDescription: 'Un cocon de créativité avec Novix Private, ou un agent autonome avec Novix Action. À vous de choisir.',
      sections: [
        {
          id: 'cta-business',
          title: "Novix Action : L'Avantage Concurrentiel",
          description: "Automatisez les tâches complexes, de la veille concurrentielle à la génération de leads. Novix Action agit en votre nom, vous donnant une longueur d'avance.",
          cta: 'Déployer Novix Action',
        },
        {
          id: 'cta-personal',
          title: 'Novix Private : Votre Cocon de Créativité',
          description: "Écrivez, réfléchissez et créez en toute sérénité. Novix Private est votre partenaire de confiance, garantissant que vos idées restent les vôtres, en sécurité sur votre appareil.",
          cta: 'Essayer Novix Private',
        }
      ],
    },
    contactForm: {
      title: 'Contacter notre équipe commerciale pour Novix Action',
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
          question: 'Quelle est la différence entre Novix Private et Novix Action ?',
          answer: "Novix Private est conçu pour la confidentialité maximale, avec une inférence sur des serveurs suisses et un stockage local sur votre appareil. Novix Action est un agent autonome qui peut naviguer et agir sur internet pour accomplir des tâches, offrant une puissance d'exécution maximale."
        },
        {
          question: 'Mes données sont-elles en sécurité avec Novix Action ?',
          answer: "Oui. Bien que Novix Action interagisse avec des services en ligne, toutes les opérations sont menées via notre infrastructure sécurisée. Les données sensibles de votre entreprise restent protégées et ne sont pas utilisées pour l'entraînement."
        },
        {
          question: 'Puis-je utiliser les deux produits ?',
          answer: "Absolument. Vous pouvez utiliser Novix Private pour vos réflexions et brouillons, et Novix Action lorsque vous avez besoin qu'une tâche soit exécutée. Les plans sont séparés pour s'adapter à chaque usage."
        },
        {
          question: "Y a-t-il un abonnement ?",
          answer: "Novix Private pour les particuliers fonctionne avec des forfaits prépayés sans abonnement. Novix Action pour les entreprises est un service par abonnement mensuel basé sur le volume de requêtes, avec un nombre d'utilisateurs illimité."
        }
      ]
    },
    footer: {
      rightsReserved: 'Tous droits réservés.',
      product: {
        title: 'Produit',
        links: [
          { text: 'Novix Private', href: '#pricing' },
          { text: 'Novix Action', href: '#pricing' },
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
        content: `Dernière mise à jour: 26 juillet 2024\n\nNovix (« nous », « notre » ou « nos ») s'engage à proteger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre application Novix AI (le « Service »). Notre traitement des données personnelles est conforme à la Loi fédérale suisse sur la protection des données (LPD) et, le cas échéant, au Règlement général sur la protection des données (RGPD) de l'Union européenne.\n\n<h3>1. Responsable du traitement</h3>\nLe responsable du traitement de vos données est :\nNovix Inc.\n[Adresse de l'entreprise, ex: Rue Exemple 1, 1200 Genève, Suisse]\nEmail: privacy@novix.ai\n\n<h3>2. Données que nous traitons</h3>\nNotre approche est axée sur la minimisation des données. Nous ne traitons que les informations strictement nécessaires au fonctionnement du Service.\n\n<b>a) Données traitées localement sur votre appareil (Novix Private) :</b>\n\n- <b>Contenu des conversations :</b> Toutes les requêtes que vous envoyez à l'IA et les réponses générées sont stockées et cryptées exclusivement sur votre appareil. Nous n'y avons jamais accès.\n- <b>Clés d'API :</b> Si vous utilisez votre propre clé d'API pour des services tiers, elle est stockée de manière sécurisée dans le trousseau de clés de votre appareil.\n\n<b>b) Données traitées sur nos serveurs en Suisse :</b>\n\n- <b>Données d'inférence (temporaires) :</b> Pour générer une réponse, votre requête (prompt) est transmise de manière sécurisée à nos modèles d'IA hébergés en Suisse. Cette donnée est utilisée uniquement pour l'inférence et n'est ni stockée de manière permanente ni utilisée pour entraîner nos modèles.\n- <b>Données d'utilisation et de facturation :</b> Nous collectons des métadonnées anonymisées sur votre utilisation (ex: nombre de requêtes, jetons utilisés) à des fins de facturation et d'analyse statistique pour améliorer notre service. Ces données ne contiennent aucun contenu de vos conversations.\n\n<b>c) Données du formulaire de contact (pour les entreprises) :</b>\n\n- <b>Coordonnées professionnelles :</b> Nom, prénom, nom de l'entreprise, email, téléphone, etc. Ces informations sont collectées sur la base de votre consentement lorsque vous remplissez le formulaire pour discuter de nos offres professionnelles.\n\n<h3>3. Finalités du traitement des données</h3>\n- <b>Fourniture du Service :</b> Pour traiter vos requêtes via nos modèles d'IA.\n- <b>Facturation :</b> Pour calculer votre consommation et générer les factures correspondantes.\n- <b>Sécurité et maintenance :</b> Pour garantir la sécurité de nos services et les améliorer.\n- <b>Communication commerciale (avec consentement) :</b> Pour répondre à vos demandes d'information sur nos offres pour entreprises.\n\n<h3>4. Partage des données</h3>\nNous ne vendons, n'échangeons ni ne louons vos données personnelles. Vos données ne sont jamais partagées avec des tiers, à l'exception de nos sous-traitants d'infrastructure (hébergeurs de serveurs situés exclusively en Suisse), qui sont contractuellement tenus de respecter les mêmes obligations de confidentialité et de sécurité que nous.\n\n<h3>5. Sécurité des données</h3>\nNous mettons en œuvre des mesures de sécurité techniques et organisationnelles de pointe pour protéger vos données. Les données en transit entre votre appareil et nos serveurs suisses sont cryptées via TLS. Les données stockées sur votre appareil sont protégées par les mécanismes de sécurité natifs de votre système d'exploitation.\n\n<h3>6. Vos droits</h3>\nConformément à la LPD et au RGPD, vous disposez des droits suivants :\n- <b>Droit d'accès :</b> Vous pouvez demander à savoir quelles données nous détenons à votre sujet.\n- <b>Droit de rectification :</b> Vous pouvez demander la correction de données inexactes.\n- <b>Droit à l'effacement :</b> Vous pouvez demander la suppression de vos données de facturation après la période de conservation légale.\n- <b>Droit à la portabilité des données :</b> Vous pouvez exporter l'intégralité de vos conversations depuis l'application à tout moment.\n- <b>Droit de retirer votre consentement :</b> Pour les données traitées sur la base du consentement (ex: formulaire de contact), vous pouvez le retirer à tout moment.\n\nPour exercer ces droits, veuillez nous contacter à privacy@novix.ai.\n\n<h3>7. Modifications de cette politique</h3>\nNous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page. Il est conseillé de consulter cette politique périodiquement pour tout changement.`
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
      features: 'Products',
      trust: 'Trust',
      pricing: 'Our Offers',
      faq: 'FAQ',
      changeLanguage: 'Change language',
    },
    hero: {
      title: 'Novix',
      subtitle: 'The AI that Thinks AND Acts.',
      description: "Unlimited power, absolute privacy.",
      ctaDownloadApp: 'Novix Action',
      ctaTryFree: 'Novix Private',
    },
    features: {
      mainTitle: 'Two environments, one control',
      mainDescription: 'Choose between the absolute privacy of Novix Private and the execution power of Novix Action.',
      conceptBox: {
        title: 'The dual-environment AI',
        text: 'Developed in the heart of Switzerland, Novix AI embodies Swiss excellence, reliability, and precision. We offer you not just one type of Artificial Intelligence, but total control over how you use it. Novix is the first dual-environment AI, letting you choose between limitless execution and absolute privacy.'
      },
      featureList: [
        {
          title: 'Novix PRIVATE: The Thinker',
          description: "Data Sovereignty. Benefit from 'Swiss Quality' AI. Inference exclusively on Swiss servers for absolute privacy. Your data is protected by the strictest laws in the world.",
        },
        {
          title: 'Novix ACTION: The Executive Agent',
          description: "Execution Without Compromise. Our Action Agent gets to work online, navigating the web and executing code. Deploy an unbridled AI for complex tasks that demand swift action.",
        },
      ],
    },
    moreFeatures: {
      mainTitle: "Designed for Your Trust",
      mainDescription: "Security is tailored to each use. Maximum privacy for Private, secure operations for Action.",
      featureList: [
        {
          id: 'secure',
          title: 'Novix Private: Your Digital Fortress',
          description: 'With Novix Private, everything is designed for maximum privacy. Your conversations are encrypted and stored exclusively on your device. They are never sent to our servers, except for inference which takes place in Switzerland. No one but you can access them.',
        },
        {
          id: 'compliance',
          title: 'Novix Action: Controlled Actions',
          description: 'Novix Action is designed to interact with the outside world on your behalf. Although this involves connecting to online services, all operations are initiated from our secure infrastructure. We do not store the results of its actions, ensuring you remain in control.',
        },
        {
          id: 'export',
          title: 'Data Portability and Control',
          description: 'Your data is yours. With Novix Private, you can export your entire conversation history at any time, in a standard format. You remain in control of your information, whether you switch devices or simply want to archive your ideas.',
        },
      ],
    },
    pricing: {
      mainTitle: 'Our Offers',
      mainDescription: 'Simple and transparent pricing, adapted to your needs.',
      pricingTiers: [
        {
          name: 'Novix Private',
          id: 'personal',
          description: 'The perfect solution for personal use with a controlled budget. Choose between our one-time plans: no commitment, no budget overruns.',
          features: [
            'FREE: 10 requests / month for testing.',
            'STANDARD (20 CHF): 1,500 requests. Usage is blocked once the quota is reached.',
            'PREMIUM (49 CHF): 5,000 requests. Ideal for intense use, with no time limit.',
            'CONTROL: One-time payment per plan. No hidden fees or recurring subscriptions.',
          ],
          cta: 'Start with Private',
        },
        {
          name: 'Novix Action',
          id: 'business',
          description: 'Custom offer for volume integration. Access our exclusive unlimited user plans and our secure Swiss infrastructure.',
          features: [
            'BUSINESS PRO (2,000 CHF/month): Up to 100,000 requests included.',
            'ENTERPRISE MAX (5,000 CHF/month): Up to 250,000 requests included.',
            'ADVANTAGE: Unlimited number of users/employees.',
            'SECURITY: Sovereign deployment in Switzerland, 24/7 priority support.',
          ],
          cta: 'Contact Us for Action',
        },
      ],
    },
    callToAction: {
      mainTitle: 'A Solution for Every Need',
      mainDescription: "A creative cocoon with Novix Private, or an autonomous agent with Novix Action. The choice is yours.",
      sections: [
        {
          id: 'cta-business',
          title: 'Novix Action: The Competitive Edge',
          description: 'Automate complex tasks, from competitive intelligence to lead generation. Novix Action acts on your behalf, giving you a head start.',
          cta: 'Deploy Novix Action',
        },
        {
          id: 'cta-personal',
          title: 'Novix Private: Your Creative Cocoon',
          description: 'Write, brainstorm, and create with peace of mind. Novix Private is your trusted partner, ensuring your ideas remain yours, safe on your device.',
          cta: 'Try Novix Private',
        }
      ],
    },
    contactForm: {
      title: 'Contact our sales team for Novix Action',
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
          question: 'What is the difference between Novix Private and Novix Action?',
          answer: 'Novix Private is designed for maximum privacy, with inference on Swiss servers and local storage on your device. Novix Action is an autonomous agent that can browse and act on the internet to complete tasks, offering maximum execution power.'
        },
        {
          question: 'Is my data secure with Novix Action?',
          answer: 'Yes. Although Novix Action interacts with online services, all operations are conducted through our secure infrastructure. Your company\'s sensitive data remains protected and is not used for training.'
        },
        {
          question: 'Can I use both products?',
          answer: 'Absolutely. You can use Novix Private for your thoughts and drafts, and Novix Action when you need a task to be executed. The plans are separate to suit each use case.'
        },
        {
          question: 'Is there a subscription?',
          answer: 'Novix Private for individuals works with prepaid plans without a subscription. Novix Action for businesses is a monthly subscription service based on request volume, with an unlimited number of users.'
        }
      ]
    },
    footer: {
      rightsReserved: 'All rights reserved.',
      product: {
        title: 'Product',
        links: [
          { text: 'Novix Private', href: '#pricing' },
          { text: 'Novix Action', href: '#pricing' },
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
        content: `Last updated: July 26, 2024\n\nNovix ("us", "we", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Novix AI application (the "Service"). Our processing of personal data complies with the Swiss Federal Act on Data Protection (FADP) and, where applicable, the European Union's General Data Protection Regulation (GDPR).\n\n<h3>1. Data Controller</h3>\nThe data controller for your information is:\nNovix Inc.\n[Company Address, e.g., Example Street 1, 1200 Geneva, Switzerland]\nEmail: privacy@novix.ai\n\n<h3>2. Data We Process</h3>\nOur approach is focused on data minimization. We only process information strictly necessary for the operation of the Service.\n\n<b>a) Data Processed Locally on Your Device (Novix Private):</b>\n\n- <b>Conversation Content:</b> All prompts you send to the AI and the generated responses are stored and encrypted exclusively on your device. We never have access to it.\n- <b>API Keys:</b> If you use your own API key for third-party services, it is stored securely in your device's keychain.\n\n<b>b) Data We Process on Our Servers in Switzerland:</b>\n\n- <b>Inference Data (Temporary):</b> To generate a response, your prompt is securely transmitted to our AI models hosted in Switzerland. This data is used solely for inference and is not permanently stored or used to train our models.\n- <b>Usage and Billing Data:</b> We collect anonymized metadata about your usage (e.g., number of requests, tokens used) for billing and statistical analysis to improve our service. This data does not contain any of your conversation content.\n\n<b>c) Contact Form Data (for businesses):</b>\n\n- <b>Business Contact Information:</b> Name, company name, email, phone number, etc. This information is collected based on your consent when you fill out the form to discuss our professional offerings.\n\n<h3>3. Purposes of Data Processing</h3>\n- <b>To Provide the Service:</b> To process your requests through our AI models.\n- <b>Billing:</b> To calculate your usage and generate corresponding invoices.\n- <b>Security and Maintenance:</b> To ensure the security of our services and to improve them.\n- <b>Business Communication (with consent):</b> To respond to your inquiries about our business plans.\n\n<h3>4. Data Sharing</h3>\nWe do not sell, trade, or rent your personal data. Your data is never shared with third parties, except for our infrastructure subcontractors (server hosts located exclusively in Switzerland), who are contractually bound to uphold the same confidentiality and security obligations as we do.\n\n<h3>5. Data Security</h3>\nWe implement state-of-the-art technical and organizational security measures to protect your data. Data in transit between your device and our Swiss servers is encrypted via TLS. Data stored on your device is protected by the native security mechanisms of your operating system.\n\n<h3>6. Your Rights</h3>\nIn accordance with the FADP and GDPR, you have the following rights:\n- <b>Right of Access:</b> You can request to know what data we hold about you.\n- <b>Right to Rectification:</b> You can request the correction of inaccurate data.\n- <b>Right to Erasure:</b> You can request the deletion of your billing data after the legal retention period.\n- <b>Right to Data Portability:</b> You can export your entire conversation history from the application at any time.\n- <b>Right to Withdraw Consent:</b> For data processed based on consent (e.g., contact form), you can withdraw it at any time.\n\nTo exercise these rights, please contact us at privacy@novix.ai.\n\n<h3>7. Changes to This Policy</h3>\nWe may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this policy periodically for any changes.`
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
      features: 'Produkte',
      trust: 'Vertrauen',
      pricing: 'Unsere Angebote',
      faq: 'FAQ',
      changeLanguage: 'Sprache ändern',
    },
    hero: {
      title: 'Novix',
      subtitle: 'Die KI, die denkt UND handelt.',
      description: 'Unbegrenzte Leistung, absolute Vertraulichkeit.',
      ctaDownloadApp: 'Novix Action',
      ctaTryFree: 'Novix Private',
    },
    features: {
      mainTitle: 'Zwei Umgebungen, eine Kontrolle',
      mainDescription: 'Wählen Sie zwischen der absoluten Privatsphäre von Novix Private und der Ausführungsleistung von Novix Action.',
      conceptBox: {
        title: 'Die Dual-Umgebungs-KI',
        text: 'Im Herzen der Schweiz entwickelt, verkörpert Novix AI Schweizer Exzellenz, Zuverlässigkeit und Präzision. Wir bieten Ihnen nicht nur eine Art von Künstlicher Intelligenz, sondern die totale Kontrolle darüber, wie Sie sie nutzen. Novix ist die erste Dual-Umgebungs-KI, die Ihnen die Wahl zwischen unbegrenzter Ausführung und absoluter Privatsphäre lässt.'
      },
      featureList: [
        {
          title: 'Novix PRIVATE: Der Denker',
          description: "Datensouveränität. Profitieren Sie von 'Swiss Quality' KI. Inferenz ausschließlich auf Schweizer Servern für absolute Vertraulichkeit. Ihre Daten sind durch die strengsten Gesetze der Welt geschützt.",
        },
        {
          title: 'Novix ACTION: Der ausführende Agent',
          description: "Ausführung ohne Kompromisse. Unser Action Agent wird online aktiv, navigiert im Web und führt Code aus. Setzen Sie eine entfesselte KI für komplexe Aufgaben ein, die schnelles Handeln erfordern.",
        },
      ],
    },
    moreFeatures: {
      mainTitle: "Für Ihr Vertrauen entwickelt",
      mainDescription: "Sicherheit für jeden Anwendungsfall. Maximale Privatsphäre für Private, sichere Operationen für Action.",
      featureList: [
        {
          id: 'secure',
          title: 'Novix Private: Ihre digitale Festung',
          description: 'Bei Novix Private ist alles auf maximale Privatsphäre ausgelegt. Ihre Gespräche werden verschlüsselt und ausschließlich auf Ihrem Gerät gespeichert. Sie werden niemals an unsere Server gesendet, außer zur Inferenz, die in der Schweiz stattfindet. Niemand außer Ihnen kann darauf zugreifen.',
        },
        {
          id: 'compliance',
          title: 'Novix Action: Kontrollierte Aktionen',
          description: 'Novix Action ist dafür konzipiert, in Ihrem Namen mit der Außenwelt zu interagieren. Obwohl dies eine Verbindung zu Online-Diensten beinhaltet, werden alle Operationen von unserer sicheren Infrastruktur aus initiiert. Wir speichern die Ergebnisse seiner Aktionen nicht, sodass Sie die Kontrolle behalten.',
        },
        {
          id: 'export',
          title: 'Datenübertragbarkeit und Kontrolle',
          description: 'Ihre Daten gehören Ihnen. Mit Novix Private können Sie Ihren gesamten Gesprächsverlauf jederzeit in einem Standardformat exportieren. Sie behalten die Kontrolle über Ihre Informationen, egal ob Sie das Gerät wechseln oder einfach Ihre Ideen archivieren möchten.',
        },
      ],
    },
    pricing: {
      mainTitle: 'Unsere Angebote',
      mainDescription: 'Einfache und transparente Preise, angepasst an Ihre Bedürfnisse.',
      pricingTiers: [
        {
          name: 'Novix Private',
          id: 'personal',
          description: 'Die perfekte Lösung für den persönlichen Gebrauch mit einem kontrollierten Budget. Wählen Sie zwischen unseren einmaligen Plänen: keine Verpflichtung, keine Budgetüberschreitungen.',
          features: [
            'KOSTENLOS: 10 Anfragen / Monat zum Testen.',
            'STANDARD (20 CHF): 1.500 Anfragen. Die Nutzung wird nach Erreichen des Kontingents gesperrt.',
            'PREMIUM (49 CHF): 5.000 Anfragen. Ideal für intensive Nutzung ohne Zeitlimit.',
            'KONTROLLE: Einmalzahlung pro Plan. Keine versteckten Gebühren oder wiederkehrenden Abonnements.',
          ],
          cta: 'Mit Private starten',
        },
        {
          name: 'Novix Action',
          id: 'business',
          description: 'Maßgeschneidertes Angebot für die Volumenintegration. Greifen Sie auf unsere exklusiven Pläne für unbegrenzte Benutzer und unsere sichere Schweizer Infrastruktur zu.',
          features: [
            'BUSINESS PRO (2.000 CHF/Monat): Bis zu 100.000 Anfragen inklusive.',
            'ENTERPRISE MAX (5.000 CHF/Monat): Bis zu 250.000 Anfragen inklusive.',
            'VORTEIL: Unbegrenzte Anzahl von Benutzern/Mitarbeitern.',
            'SICHERHEIT: Souveränes Deployment in der Schweiz, 24/7 Priority-Support.',
          ],
          cta: 'Kontakt für Action',
        },
      ],
    },
    callToAction: {
      mainTitle: 'Eine Lösung für jeden Bedarf',
      mainDescription: 'Ein kreativer Kokon mit Novix Private oder ein autonomer Agent mit Novix Action. Sie haben die Wahl.',
      sections: [
        {
          id: 'cta-business',
          title: 'Novix Action: Der Wettbewerbsvorteil',
          description: 'Automatisieren Sie komplexe Aufgaben, von der Konkurrenzanalyse bis zur Lead-Generierung. Novix Action handelt in Ihrem Namen und verschafft Ihnen einen Vorsprung.',
          cta: 'Novix Action einsetzen',
        },
        {
          id: 'cta-personal',
          title: 'Novix Private: Ihr kreativer Kokon',
          description: 'Schreiben, brainstormen und kreieren Sie mit ruhigem Gewissen. Novix Private ist Ihr vertrauenswürdiger Partner, der sicherstellt, dass Ihre Ideen Ihre bleiben, sicher auf Ihrem Gerät.',
          cta: 'Novix Private ausprobieren',
        }
      ],
    },
    contactForm: {
      title: 'Kontaktieren Sie unser Vertriebsteam für Novix Action',
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
          question: 'Was ist der Unterschied zwischen Novix Private und Novix Action?',
          answer: 'Novix Private ist auf maximale Privatsphäre ausgelegt, mit Inferenz auf Schweizer Servern und lokaler Speicherung auf Ihrem Gerät. Novix Action ist ein autonomer Agent, der im Internet surfen und agieren kann, um Aufgaben zu erledigen, und maximale Ausführungsleistung bietet.'
        },
        {
          question: 'Sind meine Daten mit Novix Action sicher?',
          answer: 'Ja. Obwohl Novix Action mit Online-Diensten interagiert, werden alle Operationen über unsere sichere Infrastruktur durchgeführt. Die sensiblen Daten Ihres Unternehmens bleiben geschützt und werden nicht für das Training verwendet.'
        },
        {
          question: 'Kann ich beide Produkte verwenden?',
          answer: 'Absolut. Sie können Novix Private für Ihre Gedanken und Entwürfe verwenden und Novix Action, wenn eine Aufgabe ausgeführt werden muss. Die Pläne sind getrennt, um jedem Anwendungsfall gerecht zu werden.'
        },
        {
          question: 'Gibt es ein Abonnement?',
          answer: 'Novix Private für Einzelpersonen funktioniert mit Prepaid-Plänen ohne Abonnement. Novix Action für Unternehmen ist ein monatlicher Abonnementdienst, der auf dem Anfragevolumen basiert, mit einer unbegrenzten Anzahl von Benutzern.'
        }
      ]
    },
    footer: {
      rightsReserved: 'Alle Rechte vorbehalten.',
      product: {
        title: 'Produkt',
        links: [
          { text: 'Novix Private', href: '#pricing' },
          { text: 'Novix Action', href: '#pricing' },
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
        content: `Zuletzt aktualisiert: 26. Juli 2024\n\nNovix („uns“, „wir“ oder „unser“) verpflichtet sich, Ihre Privatsphäre zu schützen. Diese Datenschutzrichtlinie erläutert, wie wir Ihre Informationen erfassen, verwenden, offenlegen und schützen, wenn Sie unsere Novix AI-Anwendung (der „Dienst“) nutzen. Unsere Verarbeitung personenbezogener Daten entspricht dem schweizerischen Bundesgesetz über den Datenschutz (DSG) und gegebenenfalls der Datenschutz-Grundverordnung (DSGVO) der Europäischen Union.\n\n<h3>1. Datenverantwortlicher</h3>\nDer Datenverantwortliche für Ihre Informationen ist:\nNovix Inc.\n[Firmenadresse, z.B. Beispielstrasse 1, 1200 Genf, Schweiz]\nE-Mail: privacy@novix.ai\n\n<h3>2. Von uns verarbeitete Daten</h3>\nUnser Ansatz konzentriert sich auf die Datenminimierung. Wir verarbeiten nur Informationen, die für den Betrieb des Dienstes unbedingt erforderlich sind.\n\n<b>a) Lokal auf Ihrem Gerät verarbeitete Daten (Novix Private):</b>\n\n- <b>Gesprächsinhalte:</b> Alle von Ihnen an die KI gesendeten Anfragen und die generierten Antworten werden ausschließlich auf Ihrem Gerät gespeichert und verschlüsselt. Wir haben niemals Zugriff darauf.\n- <b>API-Schlüssel:</b> Wenn Sie Ihren eigenen API-Schlüssel für Dienste von Drittanbietern verwenden, wird dieser sicher im Schlüsselbund Ihres Geräts gespeichert.\n\n<b>b) Daten, die wir auf unseren Servern in der Schweiz verarbeiten:</b>\n\n- <b>Inferenzdaten (temporär):</b> Um eine Antwort zu generieren, wird Ihre Anfrage (Prompt) sicher an unsere in der Schweiz gehosteten KI-Modelle übertragen. Diese Daten werden ausschließlich zur Inferenz verwendet und nicht dauerhaft gespeichert oder zum Trainieren unserer Modelle verwendet.\n- <b>Nutzungs- und Abrechnungsdaten:</b> Wir erfassen anonymisierte Metadaten über Ihre Nutzung (z.B. Anzahl der Anfragen, verwendete Token) für Abrechnungszwecke und statistische Analysen zur Verbesserung unseres Dienstes. Diese Daten enthalten keine Inhalte Ihrer Gespräche.\n\n<b>c) Daten aus dem Kontaktformular (für Unternehmen):</b>\n\n- <b>Geschäftliche Kontaktinformationen:</b> Name, Firmenname, E-Mail, Telefonnummer usw. Diese Informationen werden auf der Grundlage Ihrer Zustimmung erfasst, wenn Sie das Formular ausfüllen, um unsere professionellen Angebote zu besprechen.\n\n<h3>3. Zwecke der Datenverarbeitung</h3>\n- <b>Bereitstellung des Dienstes:</b> Zur Bearbeitung Ihrer Anfragen durch unsere KI-Modelle.\n- <b>Abrechnung:</b> Zur Berechnung Ihrer Nutzung und Erstellung entsprechender Rechnungen.\n- <b>Sicherheit und Wartung:</b> Zur Gewährleistung der Sicherheit unserer Dienste und deren Verbesserung.\n- <b>Geschäftskommunikation (mit Zustimmung):</b> Zur Beantwortung Ihrer Anfragen zu unseren Geschäftsplänen.\n\n<h3>4. Datenweitergabe</h3>\nWir verkaufen, handeln oder vermieten Ihre personenbezogenen Daten nicht. Ihre Daten werden niemals an Dritte weitergegeben, mit Ausnahme unserer Infrastruktur-Subunternehmer (Server-Hoster, die sich ausschließlich in der Schweiz befinden), die vertraglich verpflichtet sind, die gleichen Vertraulichkeits- und Sicherheitsverpflichtungen wie wir einzuhalten.\n\n<h3>5. Datensicherheit</h3>\nWir setzen modernste technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten zu schützen. Daten, die zwischen Ihrem Gerät und unseren Schweizer Servern übertragen werden, sind über TLS verschlüsselt. Auf Ihrem Gerät gespeicherte Daten werden durch die nativen Sicherheitsmechanismen Ihres Betriebssystems geschützt.\n\n<h3>6. Ihre Rechte</h3>\nGemäß dem DSG und der DSGVO haben Sie die folgenden Rechte:\n- <b>Auskunftsrecht:</b> Sie können anfragen, welche Daten wir über Sie gespeichert haben.\n- <b>Recht auf Berichtigung:</b> Sie können die Korrektur unrichtiger Daten verlangen.\n- <b>Recht auf Löschung:</b> Sie können die Löschung Ihrer Abrechnungsdaten nach Ablauf der gesetzlichen Aufbewahrungsfrist verlangen.\n- <b>Recht auf Datenübertragbarkeit:</b> Sie können Ihren gesamten Gesprächsverlauf jederzeit aus der Anwendung exportieren.\n- <b>Recht auf Widerruf der Einwilligung:</b> Für Daten, die auf der Grundlage einer Einwilligung verarbeitet werden (z.B. Kontaktformular), können Sie diese jederzeit widerrufen.\n\nUm diese Rechte auszuüben, kontaktieren Sie uns bitte unter privacy@novix.ai.\n\n<h3>7. Änderungen dieser Richtlinie</h3>\nWir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über alle Änderungen informieren, indem wir die neue Richtlinie auf dieser Seite veröffentlichen. Es wird empfohlen, diese Richtlinie regelmäßig auf Änderungen zu überprüfen.`
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
      features: 'Prodotti',
      trust: 'Fiducia',
      pricing: 'Le nostre offerte',
      faq: 'FAQ',
      changeLanguage: 'Cambia lingua',
    },
    hero: {
      title: 'Novix',
      subtitle: "L'IA che Pensa E Agisce.",
      description: "Potenza illimitata, privacy assoluta.",
      ctaDownloadApp: "Novix Action",
      ctaTryFree: 'Novix Private',
    },
    features: {
      mainTitle: 'Due ambienti, un solo controllo',
      mainDescription: "Scegli tra la privacy assoluta di Novix Private e la potenza di esecuzione di Novix Action.",
      conceptBox: {
        title: "L'IA a doppio ambiente",
        text: "Sviluppata nel cuore della Svizzera, Novix AI incarna l'eccellenza, l'affidabilità e la precisione svizzere. Non ti offriamo un solo tipo di Intelligenza Artificiale, ma il controllo totale su come la usi. Novix è la prima IA a doppio ambiente, che ti permette di scegliere tra esecuzione senza limiti e privacy assoluta."
      },
      featureList: [
        {
          title: "Novix PRIVATE: Il Pensatore",
          description: "Sovranità dei Dati. Approfitta dell'IA 'Swiss Quality'. Inferenza esclusivamente su server svizzeri per una privacy assoluta. I tuoi dati sono protetti dalle leggi più severe al mondo.",
        },
        {
          title: "Novix ACTION: L'Agente Esecutivo",
          description: "Esecuzione Senza Compromessi. Il nostro Agente di Azione si attiva per agire online, navigare sul web ed eseguire codice. Implementa un'IA sfrenata per compiti complessi che richiedono un'azione rapida.",
        },
      ],
    },
    moreFeatures: {
      mainTitle: "Progettato per la tua fiducia",
      mainDescription: "La sicurezza è adattata a ogni uso. Massima privacy per Private, operazioni sicure per Action.",
      featureList: [
        {
          id: 'secure',
          title: 'Novix Private: La tua fortezza digitale',
          description: 'Con Novix Private, tutto è progettato per la massima privacy. Le tue conversazioni sono crittografate e archiviate esclusivamente sul tuo dispositivo. Non vengono mai inviate ai nostri server, tranne che per l\'inferenza che avviene in Svizzera. Nessun altro tranne te può accedervi.',
        },
        {
          id: 'compliance',
          title: 'Novix Action: Azioni controllate',
          description: 'Novix Action è progettato per interagire con il mondo esterno per tuo conto. Sebbene ciò comporti la connessione a servizi online, tutte le operazioni vengono avviate dalla nostra infrastruttura sicura. Non archiviamo i risultati delle sue azioni, garantendoti il controllo.',
        },
        {
          id: 'export',
          title: 'Portabilità e controllo dei dati',
          description: "I tuoi dati sono tuoi. Con Novix Private, puoi esportare l'intera cronologia delle conversazioni in qualsiasi momento, in un formato standard. Mantieni il controllo delle tue informazioni, sia che tu cambi dispositivo o semplicemente desideri archiviare le tue idee.",
        },
      ],
    },
    pricing: {
      mainTitle: 'Le nostre offerte',
      mainDescription: 'Prezzi semplici e trasparenti, adattati alle tue esigenze.',
      pricingTiers: [
        {
          name: 'Novix Private',
          id: 'personal',
          description: 'La soluzione perfetta per l\'uso personale con un budget controllato. Scegli tra i nostri piani una tantum: nessun impegno, nessun superamento del budget.',
          features: [
            'GRATUITO: 10 richieste / mese per testare.',
            'STANDARD (20 CHF): 1.500 richieste. L\'utilizzo viene bloccato una volta raggiunta la quota.',
            'PREMIUM (49 CHF): 5.000 richieste. Ideale per un uso intenso e senza limiti di tempo.',
            'CONTROLLO: Pagamento unico per piano. Nessun costo nascosto o abbonamento ricorrente.',
          ],
          cta: 'Inizia con Private',
        },
        {
          name: 'Novix Action',
          id: 'business',
          description: 'Offerta personalizzata per l\'integrazione di volumi. Accedi ai nostri piani esclusivi per utenti illimitati e alla nostra infrastruttura svizzera sicura.',
          features: [
            'BUSINESS PRO (2.000 CHF/mese): Fino a 100.000 richieste incluse.',
            'ENTERPRISE MAX (5.000 CHF/mese): Fino a 250.000 richieste incluse.',
            'VANTAGGIO: Numero illimitato di utenti/dipendenti.',
            'SICUREZZA: Implementazione sovrana in Svizzera, supporto prioritario 24/7.',
          ],
          cta: 'Contattaci per Action',
        },
      ],
    },
    callToAction: {
      mainTitle: 'Una soluzione per ogni esigenza',
      mainDescription: 'Un bozzolo creativo con Novix Private o un agente autonomo con Novix Action. A te la scelta.',
      sections: [
        {
          id: 'cta-business',
          title: "Novix Action: Il Vantaggio Competitivo",
          description: "Automatizza compiti complessi, dall'analisi della concorrenza alla generazione di lead. Novix Action agisce per tuo conto, dandoti un vantaggio.",
          cta: 'Implementa Novix Action',
        },
        {
          id: 'cta-personal',
          title: 'Novix Private: Il tuo bozzolo creativo',
          description: 'Scrivi, fai brainstorming e crea in tutta tranquillità. Novix Private è il tuo partner di fiducia, garantendo che le tue idee rimangano tue, al sicuro sul tuo dispositivo.',
          cta: 'Prova Novix Private',
        }
      ],
    },
    contactForm: {
      title: 'Contatta il nostro team di vendita per Novix Action',
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
          question: 'Qual è la differenza tra Novix Private e Novix Action?',
          answer: 'Novix Private è progettato per la massima privacy, con inferenza su server svizzeri e archiviazione locale sul tuo dispositivo. Novix Action è un agente autonomo che può navigare e agire su Internet per completare attività, offrendo la massima potenza di esecuzione.'
        },
        {
          question: 'I miei dati sono al sicuro con Novix Action?',
          answer: 'Sì. Sebbene Novix Action interagisca con servizi online, tutte le operazioni vengono condotte attraverso la nostra infrastruttura sicura. I dati sensibili della tua azienda rimangono protetti e non vengono utilizzati per l\'addestramento.'
        },
        {
          question: 'Posso usare entrambi i prodotti?',
          answer: 'Assolutamente. Puoi usare Novix Private per i tuoi pensieri e le tue bozze, e Novix Action quando hai bisogno che un\'attività venga eseguita. I piani sono separati per adattarsi a ogni caso d\'uso.'
        },
        {
          question: 'C\'è un abbonamento?',
          answer: 'Novix Private per privati funziona con piani prepagati senza abbonamento. Novix Action per le aziende è un servizio in abbonamento mensile basato sul volume di richieste, con un numero illimitato di utenti.'
        }
      ]
    },
    footer: {
      rightsReserved: 'Tutti i diritti riservati.',
      product: {
        title: 'Prodotto',
        links: [
          { text: 'Novix Private', href: '#pricing' },
          { text: 'Novix Action', href: '#pricing' },
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
        content: `Ultimo aggiornamento: 26 luglio 2024\n\nNovix ("noi", "ci" o "nostro") si impegna a proteggere la tua privacy. La presente Informativa sulla privacy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le tue informazioni quando utilizzi la nostra applicazione Novix AI (il "Servizio"). Il nostro trattamento dei dati personali è conforme alla Legge federale svizzera sulla protezione dei dati (LPD) e, ove applicabile, al Regolamento generale sulla protezione dei dati (GDPR) dell'Unione Europea.\n\n<h3>1. Titolare del trattamento</h3>\nIl titolare del trattamento dei tuoi dati è:\nNovix Inc.\n[Indirizzo dell'azienda, es. Via Esempio 1, 1200 Ginevra, Svizzera]\nEmail: privacy@novix.ai\n\n<h3>2. Dati che trattiamo</h3>\nIl nostro approccio si concentra sulla minimizzazione dei dati. Trattiamo solo le informazioni strettamente necessarie per il funzionamento del Servizio.\n\n<b>a) Dati trattati localmente sul tuo dispositivo (Novix Private):</b>\n\n- <b>Contenuto delle conversazioni:</b> Tutte le richieste che invii all'IA e le risposte generate vengono archiviate e crittografate esclusivamente sul tuo dispositivo. Non vi abbiamo mai accesso.\n- <b>Chiavi API:</b> Se utilizzi la tua chiave API per servizi di terze parti, questa viene archiviata in modo sicuro nel portachiavi del tuo dispositivo.\n\n<b>b) Dati che trattiamo sui nostri server in Svizzera:</b>\n\n- <b>Dati di inferenza (temporanei):</b> Per generare una risposta, la tua richiesta (prompt) viene trasmessa in modo sicuro ai nostri modelli di IA ospitati in Svizzera. Questi dati vengono utilizzati esclusivamente per l'inferenza e non vengono archiviati in modo permanente né utilizzati per addestrare i nostri modelli.\n- <b>Dati di utilizzo e fatturazione:</b> Raccogliamo metadati anonimi sul tuo utilizzo (ad es. numero di richieste, token utilizzati) per la fatturazione e l'analisi statistica al fine di migliorare il nostro servizio. Questi dati non contengono alcun contenuto delle tue conversazioni.\n\n<b>c) Dati del modulo di contatto (per le aziende):</b>\n\n- <b>Informazioni di contatto professionali:</b> Nome, cognome, nome dell'azienda, email, telefono, ecc. Queste informazioni vengono raccolte sulla base del tuo consenso quando compili il modulo per discutere le nostre offerte professionali.\n\n<h3>3. Finalità del trattamento dei dati</h3>\n- <b>Fornitura del Servizio:</b> Per elaborare le tue richieste tramite i nostri modelli di IA.\n- <b>Fatturazione:</b> Per calcolare il tuo consumo e generare le relative fatture.\n- <b>Sicurezza e manutenzione:</b> Per garantire la sicurezza dei nostri servizi e migliorarli.\n- <b>Comunicazione commerciale (con consenso):</b> Per rispondere alle tue richieste di informazioni sui nostri piani aziendali.\n\n<h3>4. Condivisione dei dati</h3>\nNon vendiamo, scambiamo o noleggiamo i tuoi dati personali. I tuoi dati non vengono mai condivisi con terze parti, ad eccezione dei nostri subappaltatori di infrastrutture (host di server situati esclusivamente in Svizzera), che sono contrattualmente obbligati a rispettare i nostri stessi obblighi di riservatezza e sicurezza.\n\n<h3>5. Sicurezza dei dati</h3>\nImplementiamo misure di sicurezza tecniche e organizzative all'avanguardia per proteggere i tuoi dati. I dati in transito tra il tuo dispositivo e i nostri server svizzeri sono crittografati tramite TLS. I dati archiviati sul tuo dispositivo sono protetti dai meccanismi di sicurezza nativi del tuo sistema operativo.\n\n<h3>6. I tuoi diritti</h3>\nIn conformità con la LPD e il GDPR, hai i seguenti diritti:\n- <b>Diritto di accesso:</b> Puoi richiedere di sapere quali dati conserviamo su di te.\n- <b>Diritto di rettifica:</b> Puoi richiedere la correzione di dati inesatti.\n- <b>Diritto alla cancellazione:</b> Puoi richiedere la cancellazione dei tuoi dati di fatturazione dopo il periodo di conservazione legale.\n- <b>Diritto alla portabilità dei dati:</b> Puoi esportare l'intera cronologia delle tue conversazioni dall'applicazione in qualsiasi momento.\n- <b>Diritto di ritirare il consenso:</b> Per i dati trattati sulla base del consenso (ad es. modulo di contatto), puoi ritirarlo in qualsiasi momento.\n\nPer esercitare questi diritti, ti preghiamo di contattarci all'indirizzo privacy@novix.ai.\n\n<h3>7. Modifiche a questa informativa</h3>\nPotremmo aggiornare questa Informativa sulla privacy di tanto in tanto. Ti informeremo di eventuali modifiche pubblicando la nuova informativa su questa pagina. Si consiglia di rivedere periodicamente questa informativa per eventuali modifiche.`
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

    