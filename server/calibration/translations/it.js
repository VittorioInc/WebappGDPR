export default {
  "scopeNotice": {
    "kicker": "Ambito della valutazione",
    "title": "Prima di continuare",
    "intro": "Questo questionario è destinato alle piccole e medie imprese del settore privato. Non è destinato alle autorità pubbliche o agli organismi pubblici.",
    "items": [
      {
        "title": "Autorità pubbliche e organismi pubblici",
        "body": "Il trattamento nel settore pubblico comporta obblighi specifici che non rientrano nell'ambito di questa valutazione.",
        "quote": "Il titolare del trattamento e il responsabile del trattamento designano sistematicamente un responsabile della protezione dei dati ogniqualvolta: a) il trattamento è effettuato da un'autorità pubblica o da un organismo pubblico, eccettuate le autorità giurisdizionali quando esercitano le loro funzioni giurisdizionali.",
        "reference": "GDPR articolo 37(1)(a)"
      },
      {
        "title": "Attività esclusivamente personale o domestica",
        "body": "Questa valutazione non è destinata al trattamento svolto esclusivamente in ambito privato e senza collegamento con attività professionali o commerciali.",
        "quote": "Il presente regolamento non si applica ai trattamenti di dati personali: ... c) effettuati da una persona fisica per l'esercizio di attività a carattere esclusivamente personale o domestico.",
        "reference": "GDPR articolo 2(2)(c)"
      }
    ],
    "closing": "Se il trattamento è collegato a un'impresa, una professione o un'altra organizzazione, continua con le domande iniziali.",
    "continueLabel": "Continua con la calibrazione"
  },
  "kicker": "Calibrazione",
  "title": "Prima di iniziare la valutazione GDPR",
  "prompt": "Rispondi una sola volta a queste domande iniziali. In seguito aiuteranno il questionario ad adattarsi all organizzazione valutata.",
  "questions": {
    "calibration-organisation-size": {
      "title": "Circa quante persone compongono o lavorano regolarmente nell'organizzazione?",
      "prompt": "Includi dipendenti e altri collaboratori abituali, come titolari, soci e consulenti esterni. Seleziona l’opzione più vicina.",
      "options": {
        "only-me": {
          "label": "Solo io - professionista individuale"
        },
        "fewer-than-250-people": {
          "label": "Meno di 250 persone"
        },
        "at-least-250-people": {
          "label": "250 o più persone"
        }
      }
    },
    "calibration-data-role": {
      "title": "Quale ruolo GDPR ha l'organizzazione per il trattamento oggetto della valutazione?",
      "prompt": "La tua organizzazione può svolgere più attività di trattamento contemporaneamente. Valuta separatamente il ruolo GDPR per ogni attività, in base a chi decide perché vengono usati i dati personali e con quali mezzi essenziali. Seleziona entrambi i ruoli se operi come titolare per alcune attività e come responsabile per altre.",
      "options": {
        "controller-role": {
          "label": "Titolare del trattamento",
          "description": "Decidiamo, da soli o insieme ad altri, perché i dati personali sono trattati e i mezzi essenziali del trattamento.",
          "quote": "'titolare del trattamento': la persona fisica o giuridica, l'autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali",
          "reference": "GDPR articolo 4(7)"
        },
        "processor-role": {
          "label": "Responsabile del trattamento",
          "description": "Un'altra organizzazione determina le finalità e i mezzi essenziali e noi trattiamo i dati per suo conto.",
          "quote": "'responsabile del trattamento': la persona fisica o giuridica, l'autorità pubblica, il servizio o altro organismo che tratta dati personali per conto del titolare del trattamento",
          "reference": "GDPR articolo 4(8)"
        },
        "controller-and-processor-role": {
          "label": "Sia titolare sia responsabile",
          "description": "Agiamo come titolare per alcune attività di trattamento e come responsabile per altre attività."
        }
      }
    },
    "calibration-data-origin": {
      "title": "Da dove ottiene i dati personali l'organizzazione?",
      "prompt": "Seleziona tutte le situazioni applicabili.",
      "options": {
        "data-directly-from-person": {
          "label": "Direttamente dalla persona cui si riferiscono",
          "description": "Per esempio tramite moduli, registrazioni, acquisti, contratti, richieste, candidature, assistenza o utilizzo dei servizi dell'organizzazione.",
          "quote": "Quando i dati personali relativi a un interessato sono raccolti presso l'interessato",
          "reference": "GDPR articolo 13(1)"
        },
        "data-from-other-sources": {
          "label": "Da un'altra persona, organizzazione o fonte",
          "description": "Per esempio da un cliente, partner commerciale, segnalazione, registro pubblico, sito pubblico, pagina social o elenco acquistato.",
          "quote": "Quando i dati personali non sono stati ottenuti presso l'interessato",
          "reference": "GDPR articolo 14(1)"
        }
      }
    },
    "calibration-eu-connection": {
      "title": "Il GDPR si applica alla tua organizzazione?",
      "prompt": "Seleziona ogni collegamento dell articolo 3 applicabile. Seleziona l ultima risposta solo se nessuno si applica.",
      "options": {
        "eu-establishment": {
          "label": "Siamo stabiliti nell UE/SEE",
          "description": "Usa questa opzione quando il trattamento e collegato a un ufficio, filiale o stabile organizzazione nell UE/SEE, anche se il trattamento avviene altrove.",
          "quote": "nel contesto delle attivita di uno stabilimento di un titolare del trattamento o di un responsabile del trattamento nell Unione",
          "reference": "GDPR articolo 3(1)"
        },
        "eu-goods-services": {
          "label": "Offriamo beni o servizi a persone nell UE/SEE",
          "description": "Usa questa opzione quando un organizzazione fuori dall UE/SEE offre beni o servizi a persone nell UE/SEE. Non e necessario un pagamento.",
          "quote": "l offerta di beni o la prestazione di servizi, indipendentemente dall obbligatorieta di un pagamento dell interessato",
          "reference": "GDPR articolo 3(2)(a)"
        },
        "eu-behaviour-monitoring": {
          "label": "Monitoriamo il comportamento di persone nell UE/SEE",
          "description": "Usa questa opzione quando tracciamento, profilazione, analytics o monitoraggi simili riguardano comportamenti che avvengono nell UE/SEE.",
          "quote": "il monitoraggio del loro comportamento nella misura in cui tale comportamento ha luogo all interno dell Unione",
          "reference": "GDPR articolo 3(2)(b)"
        },
        "no-eu-connection": {
          "label": "Nessun collegamento UE/SEE identificato",
          "description": "Usa questa opzione solo se nessuno dei collegamenti UE/SEE dell articolo 3 sopra indicati si applica. Il questionario si chiudera con una nota sull ambito territoriale.",
          "quote": "Il presente regolamento si applica al trattamento dei dati personali effettuato nell ambito delle attivita di uno stabilimento",
          "reference": "GDPR articolo 3"
        }
      },
      "help": {
        "title": "Unione europea e Spazio economico europeo",
        "text": "Lo Spazio economico europeo (SEE) comprende tutti i paesi dell’UE più Islanda, Liechtenstein e Norvegia. In questa domanda, fuori dall’UE/SEE significa al di fuori di questi paesi."
      }
    },
    "calibration-processing-regularity": {
      "title": "Il trattamento dei dati personali e una parte regolare o continuativa delle attivita dell organizzazione?",
      "prompt": "Seleziona si quando i dati personali sono trattati come parte delle normali attivita. Seleziona no solo per trattamenti davvero eccezionali o svolti di tanto in tanto fuori dalle attivita ordinarie.",
      "options": {
        "processing-regular": {
          "label": "Si, il trattamento e regolare o continuativo",
          "description": "Include normali registri di clienti, account, ordini, prenotazioni, assistenza, personale, fornitori, marketing, analytics o servizi, anche se i dati sono basilari o cancellati quando il servizio termina."
        },
        "processing-occasional": {
          "label": "No, il trattamento e solo occasionale",
          "description": "Usa questa opzione solo quando i dati personali sono trattati in modo eccezionale o incidentale, fuori dal normale modo ricorrente di operare dell organizzazione."
        }
      }
    },
    "calibration-processing-scale": {
      "title": "Il trattamento e probabilmente su larga scala?",
      "prompt": "Il GDPR non stabilisce una soglia numerica fissa. Considera il numero di persone interessate (anche come quota della popolazione rilevante), la quantità e varietà dei dati, la durata del trattamento e la sua estensione geografica. Valuta questi fattori nel loro insieme.",
      "options": {
        "large-scale-processing": {
          "label": "Si, il trattamento e probabilmente su larga scala",
          "description": "Esempi sono un ospedale che gestisce le cartelle dei pazienti, una banca o un’assicurazione che tratta i dati dei clienti o un gestore dei trasporti che monitora gli spostamenti in una città. Confronta la portata delle tue attività con questi esempi."
        },
        "not-large-scale-processing": {
          "label": "No, il trattamento non e su larga scala",
          "description": "Esempi sono un singolo medico che cura i propri pazienti o un singolo avvocato che gestisce i casi dei propri clienti. Un trattamento non è su larga scala solo perché è regolare o essenziale al servizio."
        }
      }
    }
  }
}
