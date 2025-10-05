
export const translations = {
  fr: {
    header: {
      features: 'Fonctionnalités',
      pricing: 'Nos Offres',
      changeLanguage: 'Changer de langue',
    },
    hero: {
      title: 'Novix',
      subtitle: "Vos données n'appartiennent qu'à vous.",
      description: ["Aucune fuite. Aucune collecte. Aucune surprise.","L'IA de confiance qui protège vos idées."],
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
          description: "Une interface claire et intuitive, conçue pour la productivité. Toutes vos données sont cryptées pour une sécurité maximale.",
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
          description: 'La solution perfecte pour un usage personnel, flexible et sans engagement. Vous ne payez que ce que vous consommez.',
          features: [
            "Accès complet à l'IA sur votre appareil",
            'Confidentialité absolue de vos données',
            'Facturation transparente à la requête',
            "Pas de frais cachés, pas d'abonnement",
          ],
          cta: 'Commencer',
        },
        {
          name: 'Pour les Entreprises',
          id: 'business',
          description: 'Une offre sur mesure pour intégrer la puissance de Novix AI dans vos processus métier, en toute sécurité.',
          features: [
            'Déploiement en volume pour vos équipes',
            'Support pour une intégration personnalisée',
            'Tableau de bord de suivi de la consommation',
            'Facturation centralisée et support prioritaire',
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
          id: 'cta-personal',
          title: 'Votre Assistant Personnel',
          description: "Libérez votre créativité et boostez votre productivité. Novix AI est l'outil idéal pour rédiger, coder, apprendre et créer, tout en gardant vos idées et vos données en sécurité sur votre appareil. La puissance de l'IA, votre vie privée en plus.",
          cta: 'Commencer Gratuitement',
        },
        {
          id: 'cta-business',
          title: "L'Avantage Concurrentiel pour Votre Entreprise",
          description: 'Intégrez une IA puissante sans compromettre la confidentialité de vos données stratégiques. Novix AI fonctionne en circuit fermé sur les postes de vos collaborateurs, garantissant que vos informations sensibles ne quittent jamais votre entreprise.',
          cta: 'Sécuriser Vos Données',
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
          { text: 'À propos', href: '#' },
          { text: 'Contact', href: '#' },
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
  },
  en: {
    header: {
      features: 'Features',
      pricing: 'Our Offers',
      changeLanguage: 'Change language',
    },
    hero: {
      title: 'Novix',
      subtitle: 'Your data belongs to you alone.',
      description: ["No leaks. No collection. No surprises.","The trusted AI that protects your ideas."],
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
          description: 'A clear and intuitive interface, designed for productivity. All your data is encrypted for maximum security.',
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
          description: 'The perfect solution for personal use, flexible and non-binding. You only pay for what you use.',
          features: [
            'Full access to on-device AI',
            'Absolute data privacy',
            'Transparent per-request billing',
            'No hidden fees, no subscription',
          ],
          cta: 'Get Started',
        },
        {
          name: 'For Businesses',
          id: 'business',
          description: 'A tailor-made offer to integrate the power of Novix AI into your business processes, securely.',
          features: [
            'Volume deployment for your teams',
            'Support for custom integration',
            'Consumption monitoring dashboard',
            'Centralized billing and priority support',
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
          id: 'cta-personal',
          title: 'Your Personal Assistant',
          description: 'Unleash your creativity and boost your productivity. Novix AI is the ideal tool to write, code, learn, and create, all while keeping your ideas and data secure on your device. The power of AI, with your privacy included.',
          cta: 'Get Started for Free',
        },
        {
          id: 'cta-business',
          title: 'The Competitive Edge for Your Business',
          description: 'Integrate powerful AI without compromising the confidentiality of your strategic data. Novix AI operates in a closed loop on your employees\' workstations, ensuring that your sensitive information never leaves your company.',
          cta: 'Secure Your Data',
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
          { text: 'About', href: '#' },
          { text: 'Contact', href: '#' },
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
  },
  de: {
    header: {
      features: 'Funktionen',
      pricing: 'Unsere Angebote',
      changeLanguage: 'Sprache ändern',
    },
    hero: {
      title: 'Novix',
      subtitle: 'Ihre Daten gehören nur Ihnen.',
      description: ['Keine Lecks. Keine Sammlung. Keine Überraschungen.','Die vertrauenswürdige KI, die Ihre Ideen schützt.'],
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
          description: 'Eine klare und intuitive Benutzeroberfläche, die auf Produktivität ausgelegt ist. Alle Ihre Daten werden für maximale Sicherheit verschlüsselt.',
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
          description: 'Jede Interaktion mit unseren Modellen ist durch modernste Verschlüsselung geschützt. Ihre Daten sind während der Verarbeitung gesichert, sodass niemand, nicht einmal wir, darauf zugreifen kann. Ihre Privatsphäre ist unsere Priorität.',
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
          description: 'Die perfekte Lösung für den persönlichen Gebrauch, flexibel und unverbindlich. Sie zahlen nur für das, was Sie verbrauchen.',
          features: [
            'Voller Zugriff auf die KI auf Ihrem Gerät',
            'Absolute Vertraulichkeit Ihrer Daten',
            'Transparente Abrechnung pro Anfrage',
            'Keine versteckten Gebühren, kein Abonnement',
          ],
          cta: 'Loslegen',
        },
        {
          name: 'Für Unternehmen',
          id: 'business',
          description: 'Ein maßgeschneidertes Angebot, um die Leistungsfähigkeit von Novix AI sicher in Ihre Geschäftsprozesse zu integrieren.',
          features: [
            'Massenbereitstellung für Ihre Teams',
            'Unterstützung bei der benutzerdefinierten Integration',
            'Dashboard zur Verbrauchsüberwachung',
            'Zentralisierte Abrechnung und priorisierter Support',
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
          id: 'cta-personal',
          title: 'Ihr persönlicher Assistent',
          description: 'Entfesseln Sie Ihre Kreativität und steigern Sie Ihre Produktivität. Novix AI ist das ideale Werkzeug zum Schreiben, Programmieren, Lernen und Erstellen, während Ihre Ideen und Daten sicher auf Ihrem Gerät bleiben. Die Kraft der KI, plus Ihre Privatsphäre.',
          cta: 'Kostenlos loslegen',
        },
        {
          id: 'cta-business',
          title: 'Der Wettbewerbsvorteil für Ihr Unternehmen',
          description: 'Integrieren Sie leistungsstarke KI, ohne die Vertraulichkeit Ihrer strategischen Daten zu gefährden. Novix AI arbeitet in einem geschlossenen Kreislauf auf den Arbeitsplätzen Ihrer Mitarbeiter und stellt sicher, dass Ihre sensiblen Informationen Ihr Unternehmen niemals verlassen.',
          cta: 'Sichern Sie Ihre Daten',
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
          { text: 'Über uns', href: '#' },
          { text: 'Kontakt', href: '#' },
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
  },
  it: {
    header: {
      features: 'Funzionalità',
      pricing: 'Le nostre offerte',
      changeLanguage: 'Cambia lingua',
    },
    hero: {
      title: 'Novix',
      subtitle: 'I tuoi dati appartengono solo a te.',
      description: ["Nessuna fuga. Nessuna raccolta. Nessuna sorpresa.","L'IA affidabile che protegge le tue idee."],
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
          description: "Un'interfaccia chiara e intuitiva, progettata per la produttività. Tutti i tuoi dati sono crittografati per la massima sicurezza.",
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
          description: "La soluzione perfetta per l'uso personale, flessibile e senza impegno. Paghi solo per ciò che consumi.",
          features: [
            "Accesso completo all'IA sul tuo dispositivo",
            'Riservatezza assoluta dei tuoi dati',
            'Fatturazione trasparente per richiesta',
            'Nessun costo nascosto, nessun abbonamento',
          ],
          cta: 'Inizia',
        },
        {
          name: 'Per le Aziende',
          id: 'business',
          description: "Un'offerta su misura per integrare la potenza di Novix AI nei tuoi processi aziendali, in tutta sicurezza.",
          features: [
            'Distribuzione di volumi per i tuoi team',
            "Supporto per l'integrazione personalizzata",
            'Dashboard per il monitoraggio dei consumi',
            'Fatturazione centralizzata e supporto prioritario',
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
          id: 'cta-personal',
          title: 'Il tuo assistente personale',
          description: 'Scatena la tua creatività e aumenta la tua produttività. Novix AI è lo strumento ideale per scrivere, programmare, imparare e creare, mantenendo le tue idee e i tuoi dati al sicuro sul tuo dispositivo. La potenza dell\'IA, con la tua privacy in più.',
          cta: 'Inizia gratuitamente',
        },
        {
          id: 'cta-business',
          title: 'Il vantaggio competitivo per la tua azienda',
          description: 'Integra una potente IA senza compromettere la riservatezza dei tuoi dati strategici. Novix AI opera in un circuito chiuso sulle postazioni di lavoro dei tuoi dipendenti, garantendo che le tue informazioni sensibili non lascino mai la tua azienda.',
          cta: 'Proteggi i tuoi dati',
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
          { text: 'Chi siamo', href: '#' },
          { text: 'Contatti', href: '#' },
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
  },
};
