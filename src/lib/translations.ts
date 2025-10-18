
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
    concept: {
      title: "L'IA à double environnement",
      text: "Développée au cœur de la Suisse, Novix AI incarne l'excellence, la fiabilité et la précision helvétiques. Nous ne vous offrons pas qu'un seul type d'Intelligence Artificielle, mais le contrôle total sur la manière dont vous l'utilisez. Novix est la première IA à double environnement, vous laissant choisir entre l'exécution sans limites et la confidentialité absolue."
    },
    productSwitcher: {
      private: "Novix Private",
      action: "Novix Action"
    },
    private: {
      features: {
        mainTitle: 'Novix Private : Le Penseur',
        mainDescription: "Votre partenaire de réflexion confidentiel. Idéal pour brainstormer, rédiger, analyser et créer en toute sérénité. Vos idées restent les vôtres, toujours.",
        featureList: [
          {
            title: "Créativité & Productivité sans limites",
            description: "De la rédaction d'e-mails à l'écriture de scénarios, en passant par la traduction ou la génération de code, Novix Private est votre partenaire de réflexion. Affinez vos textes, explorez de nouveaux angles et surmontez le syndrome de la page blanche.",
            iconId: 'private'
          },
           {
            title: "Analyse et synthèse de documents",
            description: "Soumettez des documents, des rapports ou des articles. Obtenez des résumés clairs, des analyses pertinentes et des extractions d'informations clés en quelques secondes, sans jamais exposer vos données sources.",
            iconId: 'private'
          }
        ],
      },
      moreFeatures: {
        mainTitle: "Conçu pour une confiance absolue",
        mainDescription: "Avec Novix Private, la sécurité et la confidentialité ne sont pas des options, mais le fondement même du produit.",
        featureList: [
          {
            id: 'secure',
            title: 'Votre Forteresse Numérique Personnelle',
            description: "Chaque conversation est cryptée de bout en bout et stockée exclusivement sur votre appareil. Nos serveurs suisses traitent vos requêtes de manière éphémère et ne conservent aucune trace. Personne d'autre que vous, pas même nous, ne peut accéder à votre historique.",
            imageId: 'feature-secure',
          },
          {
            id: 'export',
            title: 'Souveraineté Totale sur Vos Données',
            description: "Vos données vous appartiennent, sans condition. Exportez l'intégralité de votre historique de conversation à tout moment dans des formats standards (JSON, CSV). Vous restez maître de vos informations pour les archiver, les analyser ou migrer où vous le souhaitez.",
            imageId: 'feature-export',
          },
        ],
      },
      pricing: {
        mainTitle: 'Une tarification simple pour les particuliers',
        mainDescription: 'Pas d\'abonnement, pas de frais cachés. Vous ne payez que ce que vous consommez, en toute transparence.',
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
          }
        ],
      },
      faq: {
        mainTitle: 'Questions fréquentes sur Novix Private',
        mainDescription: 'Tout ce que vous devez savoir sur notre IA 100% confidentielle.',
        questions: [
          {
            question: 'Où sont stockées mes conversations ?',
            answer: "Vos conversations avec Novix Private sont cryptées et stockées exclusivement sur votre propre appareil (ordinateur ou smartphone). Nous n'y avons jamais accès."
          },
          {
            question: "Qu'est-ce qui est envoyé sur vos serveurs en Suisse ?",
            answer: "Uniquement la requête que vous tapez (le 'prompt') est envoyée de manière sécurisée et temporaire à nos serveurs en Suisse pour être traitée par l'IA. La requête et la réponse ne sont jamais stockées sur nos serveurs. Votre historique, lui, reste local sur votre appareil."
          },
          {
            question: "Utilisez-vous mes données pour entraîner vos modèles ?",
            answer: "Jamais. C'est un engagement fondamental. Vos données ne sont ni stockées, ni utilisées pour entraîner nos modèles d'IA ou ceux de tiers."
          },
           {
            question: "Y a-t-il un abonnement ?",
            answer: "Non. Novix Private pour les particuliers fonctionne avec des forfaits prépayés sans abonnement. Vous achetez un pack de requêtes et vous l'utilisez à votre rythme, sans limite de temps."
          }
        ]
      }
    },
    action: {
      features: {
        mainTitle: 'Novix Action : L\'Agent Exécutif',
        mainDescription: "Déléguez les tâches complexes. Novix Action navigue sur le web, interagit avec des applications et automatise vos processus pour vous donner un avantage concurrentiel.",
        featureList: [
          {
            title: "Automatisation de la Veille Stratégique",
            description: "Chargez Novix Action de surveiller vos concurrents, d'analyser les tendances du marché, ou de collecter des données spécifiques sur le web. Il peut suivre des sites, des forums et des réseaux sociaux pour vous fournir des rapports synthétiques et exploitables.",
            iconId: 'action'
          },
          {
            title: "Agent d'Interaction et d'Exécution",
            description: "Capable de remplir des formulaires, d'interagir avec des API et même d'exécuter du code dans un environnement sécurisé, Novix Action devient le bras armé de votre stratégie. Automatisez la génération de leads, la qualification de contacts et bien plus encore.",
            iconId: 'action'
          }
        ],
      },
      moreFeatures: {
        mainTitle: 'Conçu pour l\'action, sécurisé par nature',
        mainDescription: "Novix Action est l'équilibre parfait entre la capacité d'agir sur le monde numérique et la sécurité d'une infrastructure robuste hébergée en Suisse.",
        featureList: [
          {
            id: 'compliance',
            title: 'Opérations maîtrisées depuis la Suisse',
            description: "Toutes les actions sont orchestrées depuis notre infrastructure sécurisée en Suisse. Bien que l'agent interagisse avec des services externes, le 'cerveau' de l'opération reste sous la protection des lois suisses, garantissant une supervision et un contrôle stricts des processus.",
            imageId: 'feature-local',
          },
          {
            id: 'integration',
            title: 'Intégration transparente et puissante',
            description: "Connectez Novix Action à vos outils (CRM, ERP, plateformes d'analyse) via des APIs. Créez des flux de travail personnalisés pour automatiser la génération de rapports, la veille concurrentielle, la recherche d'informations et décuplez la productivité de vos équipes.",
            imageId: 'cta-business',
          },
        ],
      },
      pricing: {
        mainTitle: 'Des offres sur-mesure pour les professionnels',
        mainDescription: 'Une tarification évolutive pour les entreprises qui veulent intégrer une véritable force de frappe IA dans leurs opérations.',
        pricingTiers: [
          {
            name: 'Novix Action',
            id: 'business',
            description: "Offre personnalisée pour l'intégration en volume. Accédez à nos forfaits exclusifs utilisateurs illimités et à notre infrastructure suisse sécurisée.",
            features: [
              'BUSINESS PRO (2 000 CHF/mois) : Jusqu\'à 100 000 requêtes complexes (actions) incluses.',
              'ENTERPRISE MAX (5 000 CHF/mois) : Jusqu\'à 250 000 requêtes complexes (actions) incluses.',
              'AVANTAGE : Nombre d\'utilisateurs/collaborateurs illimité pour chaque licence.',
              'SÉCURITÉ : Déploiement et supervision depuis la Suisse, support prioritaire 24/7.',
            ],
            cta: 'Nous contacter pour Action',
          }
        ],
      },
      faq: {
        mainTitle: 'Questions fréquentes sur Novix Action',
        mainDescription: 'Les réponses à vos questions sur notre agent IA exécutif.',
        questions: [
          {
            question: 'Comment la sécurité est-elle garantie si l\'agent accède à Internet ?',
            answer: "La sécurité repose sur notre architecture. Le 'cerveau' de Novix Action, qui décide des actions à entreprendre, est isolé dans notre infrastructure suisse. Seules les requêtes nécessaires sont envoyées à l'extérieur. De plus, toutes les actions sont journalisées pour une traçabilité complète."
          },
          {
            question: 'Quels types de tâches Novix Action peut-il effectuer ?',
            answer: "Il peut naviguer sur des sites web, collecter et synthétiser des informations, remplir des formulaires, interagir avec des API tierces, et exécuter des scripts. Il est parfait pour automatiser la recherche, la veille concurrentielle, la qualification de leads, etc."
          },
          {
            question: "Est-ce que Novix Action stocke les données qu'il collecte ?",
            answer: "Non, par défaut. Novix Action traite les données de manière volatile pour accomplir sa mission. Il ne stocke les résultats que si vous le configurez explicitement pour le faire, par exemple en lui demandant de remplir votre CRM ou de générer un fichier de rapport."
          },
          {
            question: "Comment fonctionne la facturation pour les entreprises ?",
            answer: "Novix Action est un service par abonnement mensuel basé sur le volume de requêtes complexes (actions), avec un nombre d'utilisateurs illimité par licence. Contactez-nous pour une démonstration et un devis personnalisé."
          }
        ]
      }
    },
    contactForm: {
      title: "Contactez-nous",
      description: "Remplissez ce formulaire pour discuter de nos offres pour entreprise et obtenir une démonstration de Novix Action.",
      companyName: "Nom de l'entreprise",
      firstName: "Prénom",
      lastName: "Nom",
      email: "Email",
      phone: "Téléphone",
      address: "Adresse",
      city: "Ville",
      zipCode: "Code Postal",
      country: "Pays",
      userCount: "Nombre d'utilisateurs potentiels",
      submit: "Demander une démo",
      success: "Votre demande a été envoyée avec succès. Nous vous recontacterons rapidement.",
      error: "Une erreur est survenue lors de l'envoi du message.",
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
        content: `Dernière mise à jour: 26 juillet 2024\n\nNovix (« nous », « notre » ou « nos ») s'engage à proteger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre application Novix AI (le « Service »). Notre traitement des données personnelles est conforme à la Loi fédérale suisse sur la protection des données (LPD) et, le cas échéant, au Règlement général sur la protection des données (RGPD) de l'Union européenne.\n\n<h3>1. Responsable du traitement</h3>\nLe responsable du traitement de vos données est :\nNovix Inc.\n[Adresse de l'entreprise, ex: Rue Exemple 1, 1200 Genève, Suisse]\nEmail: privacy@novix.ai\n\n<h3>2. Données que nous traitons</h3>\nNotre approche est axée sur la minimisation des données. Nous ne traitons que les informations strictement nécessaires au fonctionnement du Service.\n\n<b>a) Données traitées localement sur votre appareil (Novix Private) :</b>\n\n- <b>Contenu des conversations :</b> Toutes les requêtes que vous envoyez à l'IA et les réponses générées sont stockées et cryptées exclusivement sur votre appareil. Nous n'y avons jamais accès.\n- <b>Clés d'API :</b> Si vous utilisez votre propre clé d'API pour des services tiers, elle est stockée de manière sécurisée dans le trousseau de clés de votre appareil.\n\n<b>b) Données traitées sur nos serveurs en Suisse (Inférence pour Novix Private et Opérations pour Novix Action) :</b>\n\n- <b>Données d'inférence (temporaires pour Novix Private) :</b> Pour générer une réponse, votre requête (prompt) est transmise de manière sécurisée à nos modèles d'IA hébergés en Suisse. Cette donnée est utilisée uniquement pour l'inférence et n'est ni stockée de manière permanente ni utilisée pour entraîner nos modèles.\n- <b>Données d'opération (pour Novix Action) :</b> Les instructions et les données nécessaires à l'exécution des tâches par Novix Action transitent par notre infrastructure sécurisée. Nous ne stockons pas les résultats de ses actions, sauf si explicitement demandé dans le cadre d'une tâche.\n- <b>Données d'utilisation et de facturation :</b> Nous collectons des métadonnées anonymisées sur votre utilisation (ex: nombre de requêtes, jetons utilisés) à des fins de facturation et d'analyse statistique pour améliorer notre service. Ces données ne contiennent aucun contenu de vos conversations ou des données traitées.\n\n<b>c) Données du formulaire de contact (pour les entreprises) :</b>\n\n- <b>Coordonnées professionnelles :</b> Nom, prénom, nom de l'entreprise, email, téléphone, etc. Ces informations sont collectées sur la base de votre consentement lorsque vous remplissez le formulaire pour discuter de nos offres professionnelles.\n\n<h3>3. Finalités du traitement des données</h3>\n- <b>Fourniture du Service :</b> Pour traiter vos requêtes via nos modèles d'IA (Private) et exécuter des tâches (Action).\n- <b>Facturation :</b> Pour calculer votre consommation et générer les factures correspondantes.\n- <b>Sécurité et maintenance :</b> Pour garantir la sécurité de nos services et les améliorer.\n- <b>Communication commerciale (avec consentement) :</b> Pour répondre à vos demandes d'information sur nos offres pour entreprises.\n\n<h3>4. Partage des données</h3>\nNous ne vendons, n'échangeons ni ne louons vos données personnelles. Vos données ne sont jamais partagées avec des tiers, à l'exception de nos sous-traitants d'infrastructure (hébergeurs de serveurs situés exclusively en Suisse), qui sont contractuellement tenus de respecter les mêmes obligations de confidentialité et de sécurité que nous.\n\n<h3>5. Sécurité des données</h3>\nNous mettons en œuvre des mesures de sécurité techniques et organisationnelles de pointe pour protéger vos données. Les données en transit entre votre appareil et nos serveurs suisses sont cryptées via TLS. Les données stockées sur votre appareil avec Novix Private sont protégées par les mécanismes de sécurité natifs de votre système d'exploitation.\n\n<h3>6. Vos droits</h3>\nConformément à la LPD et au RGPD, vous disposez des droits suivants :\n- <b>Droit d'accès :</b> Vous pouvez demander à savoir quelles données nous détenons à votre sujet.\n- <b>Droit de rectification :</b> Vous pouvez demander la correction de données inexactes.\n- <b>Droit à l'effacement :</b> Vous pouvez demander la suppression de vos données de facturation après la période de conservation légale.\n- <b>Droit à la portabilité des données :</b> Vous pouvez exporter l'intégralité de vos conversations depuis l'application Novix Private à tout moment.\n- <b>Droit de retirer votre consentement :</b> Pour les données traitées sur la base du consentement (ex: formulaire de contact), vous pouvez le retirer à tout moment.\n\nPour exercer ces droits, veuillez nous contacter à privacy@novix.ai.\n\n<h3>7. Modifications de cette politique</h3>\nNous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page. Il est conseillé de consulter cette politique périodiquement pour tout changement.`
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
    concept: {
      title: 'The dual-environment AI',
      text: 'Developed in the heart of Switzerland, Novix AI embodies Swiss excellence, reliability, and precision. We offer you not just one type of Artificial Intelligence, but total control over how you use it. Novix is the first dual-environment AI, letting you choose between limitless execution and absolute privacy.'
    },
    productSwitcher: {
        private: "Novix Private",
        action: "Novix Action"
    },
    private: {
      features: {
        mainTitle: 'Novix Private: The Thinker',
        mainDescription: "Your confidential thinking partner. Ideal for brainstorming, writing, analyzing, and creating with complete peace of mind. Your ideas remain yours, always.",
        featureList: [
          {
            title: "Limitless Creativity & Productivity",
            description: "From drafting emails to writing scripts, translating, or generating code, Novix Private is your thinking partner. Refine your texts, explore new angles, and overcome writer's block.",
            iconId: 'private'
          },
           {
            title: "Document Analysis and Synthesis",
            description: "Submit documents, reports, or articles. Get clear summaries, relevant analyses, and key information extraction in seconds, without ever exposing your source data.",
            iconId: 'private'
          }
        ],
      },
      moreFeatures: {
        mainTitle: "Designed for Absolute Trust",
        mainDescription: "With Novix Private, security and privacy are not options, but the very foundation of the product.",
        featureList: [
          {
            id: 'secure',
            title: 'Your Personal Digital Fortress',
            description: "Every conversation is end-to-end encrypted and stored exclusively on your device. Our Swiss servers process your requests ephemerally and keep no records. No one but you, not even us, can access your history.",
            imageId: 'feature-secure',
          },
          {
            id: 'export',
            title: 'Total Sovereignty Over Your Data',
            description: "Your data is yours, unconditionally. Export your entire conversation history at any time in standard formats (JSON, CSV). You remain in control of your information to archive, analyze, or migrate it wherever you want.",
            imageId: 'feature-export',
          },
        ],
      },
      pricing: {
        mainTitle: 'Simple pricing for individuals',
        mainDescription: 'No subscription, no hidden fees. You only pay for what you use, with full transparency.',
        pricingTiers: [
          {
            name: 'Novix Private',
            id: 'personal',
            description: 'The perfect solution for personal use and a controlled budget. Choose between our one-time plans: no commitment, no budget overruns.',
            features: [
              'FREE: 10 requests / month for testing.',
              'STANDARD (20 CHF): 1,500 requests. Usage is blocked once the quota is reached.',
              'PREMIUM (49 CHF): 5,000 requests. Ideal for intense use, with no time limit.',
              'CONTROL: One-time payment per plan. No hidden fees or recurring subscriptions.',
            ],
            cta: 'Start with Private',
          }
        ],
      },
      faq: {
        mainTitle: 'Frequently Asked Questions about Novix Private',
        mainDescription: 'Everything you need to know about our 100% confidential AI.',
        questions: [
          {
            question: 'Where are my conversations stored?',
            answer: 'Your conversations with Novix Private are encrypted and stored exclusively on your own device (computer or smartphone). We never have access to them.'
          },
          {
            question: 'What is sent to your servers in Switzerland?',
            answer: "Only the prompt you type is securely and temporarily sent to our servers in Switzerland to be processed by the AI. The prompt and response are never stored on our servers. Your history remains local on your device."
          },
          {
            question: 'Do you use my data to train your models?',
            answer: 'Never. This is a fundamental commitment. Your data is not stored or used to train our AI models or those of third parties.'
          },
           {
            question: 'Is there a subscription?',
            answer: 'No. Novix Private for individuals works with prepaid plans without a subscription. You buy a request bundle and use it at your own pace, with no time limit.'
          }
        ]
      }
    },
    action: {
      features: {
        mainTitle: 'Novix Action: The Executive Agent',
        mainDescription: "Delegate complex tasks. Novix Action browses the web, interacts with applications, and automates your processes to give you a competitive edge.",
        featureList: [
          {
            title: "Strategic Intelligence Automation",
            description: "Task Novix Action with monitoring your competitors, analyzing market trends, or collecting specific data from the web. It can track sites, forums, and social networks to provide you with concise and actionable reports.",
            iconId: 'action'
          },
          {
            title: "Interaction and Execution Agent",
            description: "Capable of filling out forms, interacting with APIs, and even executing code in a secure environment, Novix Action becomes the armed wing of your strategy. Automate lead generation, contact qualification, and much more.",
            iconId: 'action'
          }
        ],
      },
      moreFeatures: {
        mainTitle: 'Designed for Action, Secure by Nature',
        mainDescription: "Novix Action is the perfect balance between the ability to act on the digital world and the security of a robust infrastructure hosted in Switzerland.",
        featureList: [
          {
            id: 'compliance',
            title: 'Operations Controlled from Switzerland',
            description: "All actions are orchestrated from our secure infrastructure in Switzerland. Although the agent interacts with external services, the 'brain' of the operation remains under the protection of Swiss laws, ensuring strict supervision and control of processes.",
            imageId: 'feature-local',
          },
          {
            id: 'integration',
            title: 'Seamless and Powerful Integration',
            description: "Connect Novix Action to your tools (CRM, ERP, analytics platforms) via APIs. Create custom workflows to automate report generation, competitive intelligence, information retrieval, and multiply your team's productivity.",
            imageId: 'cta-business',
          },
        ],
      },
      pricing: {
        mainTitle: 'Tailor-made offers for professionals',
        mainDescription: 'Scalable pricing for companies that want to integrate a true AI strike force into their operations.',
        pricingTiers: [
          {
            name: 'Novix Action',
            id: 'business',
            description: 'Custom offer for volume integration. Access our exclusive unlimited user plans and our secure Swiss infrastructure.',
            features: [
              'BUSINESS PRO (2,000 CHF/month): Up to 100,000 complex requests (actions) included.',
              'ENTERPRISE MAX (5,000 CHF/month): Up to 250,000 complex requests (actions) included.',
              'ADVANTAGE: Unlimited number of users/employees for each license.',
              'SECURITY: Deployment and supervision from Switzerland, 24/7 priority support.',
            ],
            cta: 'Contact Us for Action',
          }
        ],
      },
      faq: {
        mainTitle: 'Frequently Asked Questions about Novix Action',
        mainDescription: 'Answers to your questions about our executive AI agent.',
        questions: [
          {
            question: 'How is security guaranteed if the agent accesses the Internet?',
            answer: 'Security is based on our architecture. The "brain" of Novix Action, which decides which actions to take, is isolated in our Swiss infrastructure. Only the necessary requests are sent externally. In addition, all actions are logged for complete traceability.'
          },
          {
            question: 'What types of tasks can Novix Action perform?',
            answer: "It can browse websites, collect and summarize information, fill out forms, interact with third-party APIs, and execute scripts. It is perfect for automating research, competitive intelligence, lead qualification, etc."
          },
          {
            question: "Does Novix Action store the data it collects?",
            answer: "No, by default. Novix Action processes data volatilely to accomplish its mission. It only stores the results if you explicitly configure it to do so, for example by asking it to fill your CRM or generate a report file."
          },
          {
            question: 'How does billing work for businesses?',
            answer: "Novix Action for businesses is a monthly subscription service based on the volume of complex requests (actions), with an unlimited number of users per license. Contact us for a demonstration and a custom quote."
          }
        ]
      }
    },
    contactForm: {
      title: "Contact Us",
      description: "Fill out this form to discuss our business offerings and get a demo of Novix Action.",
      companyName: "Company Name",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone",
      address: "Address",
      city: "City",
      zipCode: "Zip Code",
      country: "Country",
      userCount: "Number of potential users",
      submit: "Request a demo",
      success: "Your request has been sent successfully. We will contact you shortly.",
      error: "An error occurred while sending the message.",
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
        content: `Last updated: July 26, 2024\n\nNovix ("us", "we", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Novix AI application (the "Service"). Our processing of personal data complies with the Swiss Federal Act on Data Protection (FADP) and, where applicable, the European Union's General Data Protection Regulation (GDPR).\n\n<h3>1. Data Controller</h3>\nThe data controller for your information is:\nNovix Inc.\n[Company Address, e.g., Example Street 1, 1200 Geneva, Switzerland]\nEmail: privacy@novix.ai\n\n<h3>2. Data We Process</h3>\nOur approach is focused on data minimization. We only process information strictly necessary for the operation of the Service.\n\n<b>a) Data Processed Locally on Your Device (Novix Private):</b>\n\n- <b>Conversation Content:</b> All prompts you send to the AI and the generated responses are stored and encrypted exclusively on your device. We never have access to it.\n- <b>API Keys:</b> If you use your own API key for third-party services, it is stored securely in your device's keychain.\n\n<b>b) Data We Process on Our Servers in Switzerland (Inference for Novix Private and Operations for Novix Action):</b>\n\n- <b>Inference Data (Temporary for Novix Private):</b> To generate a response, your prompt is securely transmitted to our AI models hosted in Switzerland. This data is used solely for inference and is not permanently stored or used to train our models.\n- <b>Operation Data (for Novix Action):</b> Instructions and data required for Novix Action to perform tasks are routed through our secure infrastructure. We do not store the results of its actions unless explicitly requested as part of a task.\n- <b>Usage and Billing Data:</b> We collect anonymized metadata about your usage (e.g., number of requests, tokens used) for billing and statistical analysis to improve our service. This data does not contain any of your conversation content or the data being processed.\n\n<b>c) Contact Form Data (for businesses):</b>\n\n- <b>Business Contact Information:</b> Name, company name, email, phone number, etc. This information is collected based on your consent when you fill out the form to discuss our professional offerings.\n\n<h3>3. Purposes of Data Processing</h3>\n- <b>To Provide the Service:</b> To process your requests through our AI models (Private) and execute tasks (Action).\n- <b>Billing:</b> To calculate your usage and generate corresponding invoices.\n- <b>Security and Maintenance:</b> To ensure the security of our services and to improve them.\n- <b>Business Communication (with consent):</b> To respond to your inquiries about our business plans.\n\n<h3>4. Data Sharing</h3>\nWe do not sell, trade, or rent your personal data. Your data is never shared with third parties, except for our infrastructure subcontractors (server hosts located exclusively in Switzerland), who are contractually bound to uphold the same confidentiality and security obligations as we do.\n\n<h3>5. Data Security</h3>\nWe implement state-of-the-art technical and organizational security measures to protect your data. Data in transit between your device and our Swiss servers is encrypted via TLS. Data stored on your device with Novix Private is protected by the native security mechanisms of your operating system.\n\n<h3>6. Your Rights</h3>\nIn accordance with the FADP and GDPR, you have the following rights:\n- <b>Right of Access:</b> You can request to know what data we hold about you.\n- <b>Right to Rectification:</b> You can request the correction of inaccurate data.\n- <b>Right to Erasure:</b> You can request the deletion of your billing data after the legal retention period.\n- <b>Right to Data Portability:</b> You can export your entire conversation history from the Novix Private application at any time.\n- <b>Right to Withdraw Consent:</b> For data processed based on consent (e.g., contact form), you can withdraw it at any time.\n\nTo exercise these rights, please contact us at privacy@novix.ai.\n\n<h3>7. Changes to This Policy</h3>\nWe may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this policy periodically for any changes.`
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
    concept: {
      title: 'Die Dual-Umgebungs-KI',
      text: 'Im Herzen der Schweiz entwickelt, verkörpert Novix AI Schweizer Exzellenz, Zuverlässigkeit und Präzision. Wir bieten Ihnen nicht nur eine Art von Künstlicher Intelligenz, sondern die totale Kontrolle darüber, wie Sie sie nutzen. Novix ist die erste Dual-Umgebungs-KI, die Ihnen die Wahl zwischen unbegrenzter Ausführung und absoluter Privatsphäre lässt.'
    },
    productSwitcher: {
        private: "Novix Private",
        action: "Novix Action"
    },
    private: {
      features: {
        mainTitle: 'Novix Private: Der Denker',
        mainDescription: "Ihr vertraulicher Denkpartner. Ideal zum Brainstorming, Schreiben, Analysieren und Gestalten in aller Ruhe. Ihre Ideen bleiben Ihre, für immer.",
        featureList: [
          {
            title: "Grenzenlose Kreativität & Produktivität",
            description: "Vom Verfassen von E-Mails über das Schreiben von Drehbüchern bis hin zum Übersetzen oder Generieren von Code – Novix Private ist Ihr Denkpartner. Verfeinern Sie Ihre Texte, entdecken Sie neue Perspektiven und überwinden Sie die Schreibblockade.",
            iconId: 'private'
          },
           {
            title: "Analyse und Synthese von Dokumenten",
            description: "Reichen Sie Dokumente, Berichte oder Artikel ein. Erhalten Sie klare Zusammenfassungen, relevante Analysen und die Extraktion wichtiger Informationen in Sekundenschnelle, ohne Ihre Quelldaten preiszugeben.",
            iconId: 'private'
          }
        ],
      },
      moreFeatures: {
        mainTitle: "Für absolutes Vertrauen entwickelt",
        mainDescription: "Bei Novix Private sind Sicherheit und Datenschutz keine Optionen, sondern die Grundlage des Produkts.",
        featureList: [
          {
            id: 'secure',
            title: 'Ihre persönliche digitale Festung',
            description: "Jedes Gespräch wird Ende-zu-Ende verschlüsselt und ausschließlich auf Ihrem Gerät gespeichert. Unsere Schweizer Server verarbeiten Ihre Anfragen flüchtig und speichern keine Aufzeichnungen. Niemand außer Ihnen, nicht einmal wir, kann auf Ihren Verlauf zugreifen.",
            imageId: 'feature-secure',
          },
          {
            id: 'export',
            title: 'Vollständige Souveränität über Ihre Daten',
            description: "Ihre Daten gehören Ihnen, bedingungslos. Exportieren Sie Ihren gesamten Gesprächsverlauf jederzeit in Standardformaten (JSON, CSV). Sie behalten die Kontrolle über Ihre Informationen, um sie zu archivieren, zu analysieren oder dorthin zu migrieren, wo Sie möchten.",
            imageId: 'feature-export',
          },
        ],
      },
      pricing: {
        mainTitle: 'Einfache Preise für Einzelpersonen',
        mainDescription: 'Kein Abonnement, keine versteckten Gebühren. Sie zahlen nur für das, was Sie verbrauchen, mit voller Transparenz.',
        pricingTiers: [
          {
            name: 'Novix Private',
            id: 'personal',
            description: 'Die perfekte Lösung für den persönlichen Gebrauch und ein kontrolliertes Budget. Wählen Sie zwischen unseren einmaligen Plänen: keine Verpflichtung, keine Budgetüberschreitungen.',
            features: [
              'KOSTENLOS: 10 Anfragen / Monat zum Testen.',
              'STANDARD (20 CHF): 1.500 Anfragen. Die Nutzung wird nach Erreichen des Kontingents gesperrt.',
              'PREMIUM (49 CHF): 5.000 Anfragen. Ideal für intensive Nutzung ohne Zeitlimit.',
              'KONTROLLE: Einmalzahlung pro Plan. Keine versteckten Gebühren oder wiederkehrenden Abonnements.',
            ],
            cta: 'Mit Private starten',
          }
        ],
      },
      faq: {
        mainTitle: 'Häufig gestellte Fragen zu Novix Private',
        mainDescription: 'Alles, was Sie über unsere 100% vertrauliche KI wissen müssen.',
        questions: [
          {
            question: 'Wo werden meine Gespräche gespeichert?',
            answer: 'Ihre Gespräche mit Novix Private werden verschlüsselt und ausschließlich auf Ihrem eigenen Gerät (Computer oder Smartphone) gespeichert. Wir haben niemals Zugriff darauf.'
          },
          {
            question: 'Was wird an Ihre Server in der Schweiz gesendet?',
            answer: 'Nur die von Ihnen eingegebene Anfrage (der "Prompt") wird sicher und vorübergehend an unsere Server in der Schweiz gesendet, um von der KI verarbeitet zu werden. Die Anfrage und die Antwort werden niemals auf unseren Servern gespeichert. Ihr Verlauf bleibt lokal auf Ihrem Gerät.'
          },
          {
            question: 'Verwenden Sie meine Daten, um Ihre Modelle zu trainieren?',
            answer: 'Niemals. Das ist eine grundlegende Verpflichtung. Ihre Daten werden nicht gespeichert oder verwendet, um unsere KI-Modelle oder die von Dritten zu trainieren.'
          },
           {
            question: 'Gibt es ein Abonnement?',
            answer: 'Nein. Novix Private für Einzelpersonen funktioniert mit Prepaid-Plänen ohne Abonnement. Sie kaufen ein Anfragepaket und nutzen es in Ihrem eigenen Tempo, ohne Zeitlimit.'
          }
        ]
      }
    },
    action: {
      features: {
        mainTitle: 'Novix Action: Der ausführende Agent',
        mainDescription: "Delegieren Sie komplexe Aufgaben. Novix Action durchsucht das Web, interagiert mit Anwendungen und automatisiert Ihre Prozesse, um Ihnen einen Wettbewerbsvorteil zu verschaffen.",
        featureList: [
          {
            title: "Automatisierung der strategischen Überwachung",
            description: "Beauftragen Sie Novix Action mit der Überwachung Ihrer Wettbewerber, der Analyse von Markttrends oder der Sammlung spezifischer Daten aus dem Web. Es kann Websites, Foren und soziale Netzwerke verfolgen, um Ihnen prägnante und umsetzbare Berichte zu liefern.",
            iconId: 'action'
          },
          {
            title: "Interaktions- und Ausführungsagent",
            description: "In der Lage, Formulare auszufüllen, mit APIs zu interagieren und sogar Code in einer sicheren Umgebung auszuführen, wird Novix Action zum bewaffneten Arm Ihrer Strategie. Automatisieren Sie die Lead-Generierung, die Kontaktqualifizierung und vieles mehr.",
            iconId: 'action'
          }
        ],
      },
      moreFeatures: {
        mainTitle: 'Für die Aktion konzipiert, von Natur aus sicher',
        mainDescription: "Novix Action ist die perfekte Balance zwischen der Fähigkeit, auf die digitale Welt einzuwirken, und der Sicherheit einer robusten, in der Schweiz gehosteten Infrastruktur.",
        featureList: [
          {
            id: 'compliance',
            title: 'Kontrollierte Operationen aus der Schweiz',
            description: "Alle Aktionen werden von unserer sicheren Infrastruktur in der Schweiz aus orchiestriert. Obwohl der Agent mit externen Diensten interagiert, bleibt das 'Gehirn' der Operation unter dem Schutz der Schweizer Gesetze, was eine strikte Überwachung und Kontrolle der Prozesse gewährleistet.",
            imageId: 'feature-local',
          },
          {
            id: 'integration',
            title: 'Nahtlose und leistungsstarke Integration',
            description: "Verbinden Sie Novix Action über APIs mit Ihren Tools (CRM, ERP, Analyseplattformen). Erstellen Sie benutzerdefinierte Workflows, um die Berichterstellung, Wettbewerbsbeobachtung und Informationsrecherche zu automatisieren und die Produktivität Ihrer Teams zu vervielfachen.",
            imageId: 'cta-business',
          },
        ],
      },
      pricing: {
        mainTitle: 'Maßgeschneiderte Angebote für Profis',
        mainDescription: 'Skalierbare Preise für Unternehmen, die eine echte KI-Schlagkraft in ihre Operationen integrieren möchten.',
        pricingTiers: [
          {
            name: 'Novix Action',
            id: 'business',
            description: 'Maßgeschneidertes Angebot für die Volumenintegration. Greifen Sie auf unsere exklusiven Pläne für unbegrenzte Benutzer und unsere sichere Schweizer Infrastruktur zu.',
            features: [
              'BUSINESS PRO (2.000 CHF/Monat): Bis zu 100.000 komplexe Anfragen (Aktionen) inklusive.',
              'ENTERPRISE MAX (5.000 CHF/Monat): Bis zu 250.000 komplexe Anfragen (Aktionen) inklusive.',
              'VORTEIL: Unbegrenzte Anzahl von Benutzern/Mitarbeitern für jede Lizenz.',
              'SICHERHEIT: Bereitstellung und Überwachung aus der Schweiz, 24/7 Priority-Support.',
            ],
            cta: 'Kontakt für Action',
          }
        ],
      },
      faq: {
        mainTitle: 'Häufig gestellte Fragen zu Novix Action',
        mainDescription: 'Antworten auf Ihre Fragen zu unserem ausführenden KI-Agenten.',
        questions: [
          {
            question: 'Wie wird die Sicherheit gewährleistet, wenn der Agent auf das Internet zugreift?',
            answer: 'Die Sicherheit basiert auf unserer Architektur. Das "Gehirn" von Novix Action, das entscheidet, welche Aktionen durchgeführt werden sollen, ist in unserer Schweizer Infrastruktur isoliert. Nur die notwendigen Anfragen werden nach außen gesendet. Darüber hinaus werden alle Aktionen zur vollständigen Rückverfolgbarkeit protokolliert.'
          },
          {
            question: 'Welche Arten von Aufgaben kann Novix Action ausführen?',
            answer: 'Es kann Websites durchsuchen, Informationen sammeln und zusammenfassen, Formulare ausfüllen, mit APIs von Drittanbietern interagieren und Skripte ausführen. Es ist perfekt für die Automatisierung von Recherchen, Wettbewerbsbeobachtung, Lead-Qualifizierung usw.'
          },
          {
            question: "Speichert Novix Action die gesammelten Daten?",
            answer: "Nein, standardmäßig nicht. Novix Action verarbeitet Daten flüchtig, um seine Mission zu erfüllen. Es speichert die Ergebnisse nur, wenn Sie es explizit dafür konfigurieren, zum Beispiel indem Sie es bitten, Ihr CRM zu füllen oder eine Berichtsdatei zu generieren."
          },
          {
            question: 'Wie funktioniert die Abrechnung für Unternehmen?',
            answer: 'Novix Action für Unternehmen ist ein monatlicher Abonnementdienst, der auf dem Volumen komplexer Anfragen (Aktionen) basiert, mit einer unbegrenzten Anzahl von Benutzern pro Lizenz. Kontaktieren Sie uns für eine Demonstration und ein individuelles Angebot.'
          }
        ]
      }
    },
    contactForm: {
      title: "Kontaktieren Sie uns",
      description: "Füllen Sie dieses Formular aus, um unsere Geschäftsangebote zu besprechen und eine Demo von Novix Action zu erhalten.",
      companyName: "Firmenname",
      firstName: "Vorname",
      lastName: "Nachname",
      email: "Email",
      phone: "Telefon",
      address: "Adresse",
      city: "Stadt",
      zipCode: "Postleitzahl",
      country: "Land",
      userCount: "Anzahl potenzieller Benutzer",
      submit: "Demo anfordern",
      success: "Ihre Anfrage wurde erfolgreich gesendet. Wir werden uns in Kürze mit Ihnen in Verbindung setzen.",
      error: "Beim Senden der Nachricht ist ein Fehler aufgetreten.",
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
        content: `Zuletzt aktualisiert: 26. Juli 2024\n\nNovix („uns“, „wir“ oder „unser“) verpflichtet sich, Ihre Privatsphäre zu schützen. Diese Datenschutzrichtlinie erläutert, wie wir Ihre Informationen erfassen, verwenden, offenlegen und schützen, wenn Sie unsere Novix AI-Anwendung (der „Dienst“) nutzen. Unsere Verarbeitung personenbezogener Daten entspricht dem schweizerischen Bundesgesetz über den Datenschutz (DSG) und gegebenenfalls der Datenschutz-Grundverordnung (DSGVO) der Europäischen Union.\n\n<h3>1. Datenverantwortlicher</h3>\nDer Datenverantwortliche für Ihre Informationen ist:\nNovix Inc.\n[Firmenadresse, z.B. Beispielstrasse 1, 1200 Genf, Schweiz]\nE-Mail: privacy@novix.ai\n\n<h3>2. Von uns verarbeitete Daten</h3>\nUnser Ansatz konzentriert sich auf die Datenminimierung. Wir verarbeiten nur Informationen, die für den Betrieb des Dienstes unbedingt erforderlich sind.\n\n<b>a) Lokal auf Ihrem Gerät verarbeitete Daten (Novix Private):</b>\n\n- <b>Gesprächsinhalte:</b> Alle von Ihnen an die KI gesendeten Anfragen und die generierten Antworten werden ausschließlich auf Ihrem Gerät gespeichert und verschlüsselt. Wir haben niemals Zugriff darauf.\n- <b>API-Schlüssel:</b> Wenn Sie Ihren eigenen API-Schlüssel für Dienste von Drittanbietern verwenden, wird dieser sicher im Schlüsselbund Ihres Geräts gespeichert.\n\n<b>b) Daten, die wir auf unseren Servern in der Schweiz verarbeiten (Inferenz für Novix Private und Operationen für Novix Action):</b>\n\n- <b>Inferenzdaten (temporär für Novix Private):</b> Um eine Antwort zu generieren, wird Ihre Anfrage (Prompt) sicher an unsere in der Schweiz gehosteten KI-Modelle übertragen. Diese Daten werden ausschließlich zur Inferenz verwendet und nicht dauerhaft gespeichert oder zum Trainieren unserer Modelle verwendet.\n- <b>Operationsdaten (für Novix Action):</b> Anweisungen und Daten, die für die Ausführung von Aufgaben durch Novix Action erforderlich sind, werden über unsere sichere Infrastruktur weitergeleitet. Wir speichern die Ergebnisse seiner Aktionen nicht, es sei denn, dies wird im Rahmen einer Aufgabe ausdrücklich angefordert.\n- <b>Nutzungs- und Abrechnungsdaten:</b> Wir erfassen anonymisierte Metadaten über Ihre Nutzung (z.B. Anzahl der Anfragen, verwendete Token) für Abrechnungszwecke und statistische Analysen zur Verbesserung unseres Dienstes. Diese Daten enthalten keine Inhalte Ihrer Gespräche oder der verarbeiteten Daten.\n\n<b>c) Daten aus dem Kontaktformular (für Unternehmen):</b>\n\n- <b>Geschäftliche Kontaktinformationen:</b> Name, Firmenname, E-Mail, Telefonnummer usw. Diese Informationen werden auf der Grundlage Ihrer Zustimmung erfasst, wenn Sie das Formular ausfüllen, um unsere professionellen Angebote zu besprechen.\n\n<h3>3. Zwecke der Datenverarbeitung</h3>\n- <b>Bereitstellung des Dienstes:</b> Zur Bearbeitung Ihrer Anfragen durch unsere KI-Modelle (Private) und zur Ausführung von Aufgaben (Action).\n- <b>Abrechnung:</b> Zur Berechnung Ihrer Nutzung und Erstellung entsprechender Rechnungen.\n- <b>Sicherheit und Wartung:</b> Zur Gewährleistung der Sicherheit unserer Dienste und deren Verbesserung.\n- <b>Geschäftskommunikation (mit Zustimmung):</b> Zur Beantwortung Ihrer Anfragen zu unseren Geschäftsplänen.\n\n<h3>4. Datenweitergabe</h3>\nWir verkaufen, handeln oder vermieten Ihre personenbezogenen Daten nicht. Ihre Daten werden niemals an Dritte weitergegeben, mit Ausnahme unserer Infrastruktur-Subunternehmer (Server-Hoster, die sich ausschließlich in der Schweiz befinden), die vertraglich verpflichtet sind, die gleichen Vertraulichkeits- und Sicherheitsverpflichtungen wie wir einzuhalten.\n\n<h3>5. Datensicherheit</h3>\nWir setzen modernste technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten zu schützen. Daten, die zwischen Ihrem Gerät und unseren Schweizer Servern übertragen werden, sind über TLS verschlüsselt. Auf Ihrem Gerät gespeicherte Daten mit Novix Private werden durch die nativen Sicherheitsmechanismen Ihres Betriebssystems geschützt.\n\n<h3>6. Ihre Rechte</h3>\nGemäß dem DSG und der DSGVO haben Sie die folgenden Rechte:\n- <b>Auskunftsrecht:</b> Sie können anfragen, welche Daten wir über Sie gespeichert haben.\n- <b>Recht auf Berichtigung:</b> Sie können die Korrektur unrichtiger Daten verlangen.\n- <b>Recht auf Löschung:</b> Sie können die Löschung Ihrer Abrechnungsdaten nach Ablauf der gesetzlichen Aufbewahrungsfrist verlangen.\n- <b>Recht auf Datenübertragbarkeit:</b> Sie können Ihren gesamten Gesprächsverlauf jederzeit aus der Novix Private-Anwendung exportieren.\n- <b>Recht auf Widerruf der Einwilligung:</b> Für Daten, die auf der Grundlage einer Einwilligung verarbeitet werden (z.B. Kontaktformular), können Sie diese jederzeit widerrufen.\n\nUm diese Rechte auszuüben, kontaktieren Sie uns bitte unter privacy@novix.ai.\n\n<h3>7. Änderungen dieser Richtlinie</h3>\nWir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über alle Änderungen informieren, indem wir die neue Richtlinie auf dieser Seite veröffentlichen. Es wird empfohlen, diese Richtlinie regelmäßig auf Änderungen zu überprüfen.`
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
    concept: {
      title: "L'IA a doppio ambiente",
      text: "Sviluppata nel cuore della Svizzera, Novix AI incarna l'eccellenza, l'affidabilità e la precisione svizzere. Non ti offriamo un solo tipo di Intelligenza Artificiale, ma il controllo totale su come la usi. Novix è la prima IA a doppio ambiente, che ti permette di scegliere tra esecuzione senza limiti e privacy assoluta."
    },
    productSwitcher: {
        private: "Novix Private",
        action: "Novix Action"
    },
    private: {
      features: {
        mainTitle: 'Novix Private: Il Pensatore',
        mainDescription: "Il tuo partner di riflessione confidenziale. Ideale per brainstorming, scrittura, analisi e creazione in totale serenità. Le tue idee restano tue, sempre.",
        featureList: [
          {
            title: "Creatività e produttività senza limiti",
            description: "Dalla stesura di e-mail alla scrittura di sceneggiature, passando per la traduzione o la generazione di codice, Novix Private è il tuo partner di riflessione. Affina i tuoi testi, esplora nuove prospettive e supera il blocco dello scrittore.",
            iconId: 'private'
          },
           {
            title: "Analisi e sintesi di documenti",
            description: "Invia documenti, report o articoli. Ottieni riassunti chiari, analisi pertinenti ed estrazioni di informazioni chiave in pochi secondi, senza mai esporre i tuoi dati di origine.",
            iconId: 'private'
          }
        ],
      },
      moreFeatures: {
        mainTitle: "Progettato per una fiducia assoluta",
        mainDescription: "Con Novix Private, la sicurezza e la privacy non sono opzioni, ma il fondamento stesso del prodotto.",
        featureList: [
          {
            id: 'secure',
            title: 'La tua fortezza digitale personale',
            description: "Ogni conversazione è crittografata end-to-end e archiviata esclusivamente sul tuo dispositivo. I nostri server svizzeri elaborano le tue richieste in modo effimero e non conservano alcuna traccia. Nessun altro tranne te, nemmeno noi, può accedere alla tua cronologia.",
            imageId: 'feature-secure',
          },
          {
            id: 'export',
            title: 'Sovranità totale sui tuoi dati',
            description: "I tuoi dati sono tuoi, senza condizioni. Esporta l'intera cronologia delle conversazioni in qualsiasi momento in formati standard (JSON, CSV). Mantieni il controllo delle tue informazioni per archiviarle, analizzarle o migrarle dove vuoi.",
            imageId: 'feature-export',
          },
        ],
      },
      pricing: {
        mainTitle: 'Prezzi semplici per i privati',
        mainDescription: 'Nessun abbonamento, nessun costo nascosto. Paghi solo ciò che consumi, in totale trasparenza.',
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
          }
        ],
      },
      faq: {
        mainTitle: 'Domande frequenti su Novix Private',
        mainDescription: 'Tutto ciò che devi sapere sulla nostra IA 100% confidenziale.',
        questions: [
          {
            question: 'Dove vengono archiviate le mie conversazioni?',
            answer: 'Le tue conversazioni con Novix Private sono crittografate e archiviate exclusively sul tuo dispositivo (computer o smartphone). Non abbiamo mai accesso ad esse.'
          },
          {
            question: 'Cosa viene inviato ai vostri server in Svizzera?',
            answer: 'Solo la richiesta che digiti (il "prompt") viene inviata in modo sicuro e temporaneo ai nostri server in Svizzera per essere elaborata dall\'IA. La richiesta e la risposta non vengono mai archiviate sui nostri server. La tua cronologia rimane locale sul tuo dispositivo.'
          },
          {
            question: 'Utilizzate i miei dati per addestrare i vostri modelli?',
            answer: 'Mai. Questo è un impegno fondamentale. I tuoi dati non vengono archiviati né utilizzati per addestrare i nostri modelli di IA o quelli di terze parti.'
          },
           {
            question: 'C\'è un abbonamento?',
            answer: 'No. Novix Private per privati funziona con piani prepagati senza abbonamento. Acquisti un pacchetto di richieste e lo usi al tuo ritmo, senza limiti di tempo.'
          }
        ]
      }
    },
    action: {
      features: {
        mainTitle: 'Novix Action: L\'Agente Esecutivo',
        mainDescription: "Delega i compiti complessi. Novix Action naviga sul web, interagisce con le applicazioni e automatizza i tuoi processi per darti un vantaggio competitivo.",
        featureList: [
          {
            title: "Automazione dell'intelligence strategica",
            description: "Incarica Novix Action di monitorare i tuoi concorrenti, analizzare le tendenze di mercato o raccogliere dati specifici dal web. Può tenere traccia di siti, forum e social network per fornirti report sintetici e attuabili.",
            iconId: 'action'
          },
          {
            title: "Agente di interazione ed esecuzione",
            description: "In grado di compilare moduli, interagire con API e persino eseguire script in un ambiente sicuro, Novix Action diventa il braccio armato della tua strategia. Automatizza la lead generation, la qualificazione dei contatti e molto altro.",
            iconId: 'action'
          }
        ],
      },
      moreFeatures: {
        mainTitle: 'Progettato per l\'azione, sicuro per natura',
        mainDescription: "Novix Action è il perfetto equilibrio tra la capacità di agire sul mondo digitale e la sicurezza di un'infrastruttura robusta ospitata in Svizzera.",
        featureList: [
          {
            id: 'compliance',
            title: 'Operazioni controllate dalla Svizzera',
            description: "Tutte le azioni sono orchestrate dalla nostra infrastruttura sicura in Svizzera. Sebbene l'agente interagisca con servizi esterni, il 'cervello' dell'operazione rimane sotto la protezione delle leggi svizzere, garantendo una supervisione e un controllo rigorosi dei processi.",
            imageId: 'feature-local',
          },
          {
            id: 'integration',
            title: 'Integrazione trasparente e potente',
            description: "Collega Novix Action ai tuoi strumenti (CRM, ERP, piattaforme di analisi) tramite API. Crea flussi di lavoro personalizzati per automatizzare la generazione di report, l'analisi della concorrenza, la ricerca di informazioni e moltiplica la produttività dei tuoi team.",
            imageId: 'cta-business',
          },
        ],
      },
      pricing: {
        mainTitle: 'Offerte su misura per i professionisti',
        mainDescription: 'Prezzi scalabili per le aziende che vogliono integrare una vera potenza di fuoco IA nelle loro operazioni.',
        pricingTiers: [
          {
            name: 'Novix Action',
            id: 'business',
            description: 'Offerta personalizzata per l\'integrazione di volumi. Accedi ai nostri piani esclusivi per utenti illimitati e alla nostra infrastruttura svizzera sicura.',
            features: [
              'BUSINESS PRO (2.000 CHF/mese): Fino a 100.000 richieste complesse (azioni) incluse.',
              'ENTERPRISE MAX (5.000 CHF/mese): Fino a 250.000 richieste complesse (azioni) incluse.',
              'VANTAGGIO: Numero illimitato di utenti/dipendenti per ogni licenza.',
              'SICUREZZA: Implementazione e supervisione dalla Svizzera, supporto prioritario 24/7.',
            ],
            cta: 'Contattaci per Action',
          }
        ],
      },
      faq: {
        mainTitle: 'Domande frequenti su Novix Action',
        mainDescription: 'Le risposte alle tue domande sul nostro agente IA esecutivo.',
        questions: [
          {
            question: 'Come viene garantita la sicurezza se l\'agente accede a Internet?',
            answer: 'La sicurezza si basa sulla nostra architettura. Il "cervello" di Novix Action, che decide quali azioni intraprendere, è isolato nella nostra infrastruttura svizzera. Solo le richieste necessarie vengono inviate all\'esterno. Inoltre, tutte le azioni sono registrate per una completa tracciabilità.'
          },
          {
            question: 'Quali tipi di attività può eseguire Novix Action?',
            answer: 'Può navigare su siti web, raccogliere e riassumere informazioni, compilare moduli, interagire con API di terze parti ed eseguire script. È perfetto per automatizzare ricerche, analisi della concorrenza, qualificazione di lead, ecc.'
          },
          {
            question: "Novix Action archivia i dati che raccoglie?",
            answer: "No, per impostazione predefinita. Novix Action elabora i dati in modo volatile per compiere la sua missione. Archivia i risultati solo se lo configuri esplicitamente per farlo, ad esempio chiedendogli di compilare il tuo CRM o generare un file di report."
          },
          {
            question: 'Come funziona la fatturazione per le aziende?',
            answer: 'Novix Action per le aziende è un servizio in abbonamento mensile basato sul volume di richieste complesse (azioni), con un numero illimitato di utenti per licenza. Contattaci per una dimostrazione e un preventivo personalizzato.'
          }
        ]
      }
    },
    contactForm: {
      title: "Contattaci",
      description: "Compila questo modulo per discutere delle nostre offerte aziendali e ottenere una demo di Novix Action.",
      companyName: "Nome dell'azienda",
      firstName: "Nome",
      lastName: "Cognome",
      email: "Email",
      phone: "Telefono",
      address: "Indirizzo",
      city: "Città",
      zipCode: "Codice Postale",
      country: "Paese",
      userCount: "Numero di utenti potenziali",
      submit: "Richiedi una demo",
      success: "La tua richiesta è stata inviata con successo. Ti contatteremo a breve.",
      error: "Si è verificato un errore durante l'invio del messaggio.",
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
        content: `Ultimo aggiornamento: 26 luglio 2024\n\nNovix ("noi", "ci" o "nostro") si impegna a proteggere la tua privacy. La presente Informativa sulla privacy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le tue informazioni quando utilizzi la nostra applicazione Novix AI (il "Servizio"). Il nostro trattamento dei dati personali è conforme alla Legge federale svizzera sulla protezione dei dati (LPD) e, ove applicabile, al Regolamento generale sulla protezione dei dati (GDPR) dell'Unione Europea.\n\n<h3>1. Titolare del trattamento</h3>\nIl titolare del trattamento dei tuoi dati è:\nNovix Inc.\n[Indirizzo dell'azienda, es. Via Esempio 1, 1200 Ginevra, Svizzera]\nEmail: privacy@novix.ai\n\n<h3>2. Dati che trattiamo</h3>\nIl nostro approccio si concentra sulla minimizzazione dei dati. Trattiamo solo le informazioni strettamente necessarie per il funzionamento del Servizio.\n\n<b>a) Dati trattati localmente sul tuo dispositivo (Novix Private):</b>\n\n- <b>Contenuto delle conversazioni:</b> Tutte le richieste che invii all'IA e le risposte generate vengono archiviate e crittografate esclusivamente sul tuo dispositivo. Non vi abbiamo mai accesso.\n- <b>Chiavi API:</b> Se utilizzi la tua chiave API per servizi di terze parti, questa viene archiviata in modo sicuro nel portachiavi del tuo dispositivo.\n\n<b>b) Dati che trattiamo sui nostri server in Svizzera (Inferenza per Novix Private e Operazioni per Novix Action):</b>\n\n- <b>Dati di inferenza (temporanei per Novix Private):</b> Per generare una risposta, la tua richiesta (prompt) viene trasmessa in modo sicuro ai nostri modelli di IA ospitati in Svizzera. Questi dati vengono utilizzati esclusivamente per l'inferenza e non vengono archiviati in modo permanente né utilizzati per addestrare i nostri modelli.\n- <b>Dati operativi (per Novix Action):</b> Le istruzioni e i dati necessari per l'esecuzione di attività da parte di Novix Action passano attraverso la nostra infrastruttura sicura. Non memorizziamo i risultati delle sue azioni, a meno che non sia esplicitamente richiesto come parte di un'attività.\n- <b>Dati di utilizzo e fatturazione:</b> Raccogliamo metadati anonimi sul tuo utilizzo (ad es. numero di richieste, token utilizzati) per la fatturazione e l'analisi statistica al fine di migliorare il nostro servizio. Questi dati non contengono alcun contenuto delle tue conversazioni o dei dati elaborati.\n\n<b>c) Dati del modulo di contatto (per le aziende):</b>\n\n- <b>Informazioni di contatto professionali:</b> Nome, cognome, nome dell'azienda, email, telefono, ecc. Queste informazioni vengono raccolte sulla base del tuo consenso quando compili il modulo per discutere le nostre offerte professionali.\n\n<h3>3. Finalità del trattamento dei dati</h3>\n- <b>Fornitura del Servizio:</b> Per elaborare le tue richieste tramite i nostri modelli di IA (Private) ed eseguire attività (Action).\n- <b>Fatturazione:</b> Per calcolare il tuo consumo e generare le relative fatture.\n- <b>Sicurezza e manutenzione:</b> Per garantire la sicurezza dei nostri servizi e migliorarli.\n- <b>Comunicazione commerciale (con consenso):</b> Per rispondere alle tue richieste di informazioni sui nostri piani aziendali.\n\n<h3>4. Condivisione dei dati</h3>\nNon vendiamo, scambiamo o noleggiamo i tuoi dati personali. I tuoi dati non vengono mai condivisi con terze parti, ad eccezione dei nostri subappaltatori di infrastrutture (host di server situati esclusivamente in Svizzera), che sono contrattualmente obbligati a rispettare i nostri stessi obblighi di riservatezza e sicurezza.\n\n<h3>5. Sicurezza dei dati</h3>\nImplementiamo misure di sicurezza tecniche e organizzative all'avanguardia per proteggere i tuoi dati. I dati in transito tra il tuo dispositivo e i nostri server svizzeri sono crittografati tramite TLS. I dati archiviati sul tuo dispositivo con Novix Private sono protetti dai meccanismi di sicurezza nativi del tuo sistema operativo.\n\n<h3>6. I tuoi diritti</h3>\nIn conformità con la LPD e il GDPR, hai i seguenti diritti:\n- <b>Diritto di accesso:</b> Puoi richiedere di sapere quali dati conserviamo su di te.\n- <b>Diritto di rettifica:</b> Puoi richiedere la correzione di dati inesatti.\n- <b>Diritto alla cancellazione:</b> Puoi richiedere la cancellazione dei tuoi dati di fatturazione dopo il periodo di conservazione legale.\n- <b>Diritto alla portabilità dei dati:</b> Puoi esportare l'intera cronologia delle tue conversazioni dall'applicazione Novix Private in qualsiasi momento.\n- <b>Diritto di ritirare il consenso:</b> Per i dati trattati sulla base del consenso (ad es. modulo di contatto), puoi ritirarlo in qualsiasi momento.\n\nPer esercitare questi diritti, ti preghiamo di contattarci all'indirizzo privacy@novix.ai.\n\n<h3>7. Modifiche a questa informativa</h3>\nPotremmo aggiornare questa Informativa sulla privacy di tanto in tanto. Ti informeremo di eventuali modifiche pubblicando la nuova informativa su questa pagina. Si consiglia di rivedere periodicamente questa informativa per eventuali modifiche.`
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


