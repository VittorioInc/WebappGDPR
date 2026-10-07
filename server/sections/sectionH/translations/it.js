export default {
  "pages": {
    "section-h-service-provider-use": {
      "title": "Sezione H - Fornitori di servizi",
      "questions": {
        "section-h-service-provider-use": {
          "title": "La tua organizzazione usa altre società o fornitori di servizi per trattare dati personali per suo conto?",
          "prompt": "Includi le società distinte dello stesso gruppo e i fornitori che gestiscono per te i dati dei tuoi clienti.",
          "references": [
            "GDPR articolo 4(8): il responsabile tratta dati personali per conto di un titolare",
            "GDPR articolo 28(1), (3)-(4): garanzie dei fornitori e condizioni vincolanti sul trattamento"
          ],
          "options": {
            "external-processors-used": {
              "label": "Sì",
              "description": "Almeno un’altra società o un fornitore tratta dati personali per nostro conto."
            },
            "no-service-providers": {
              "label": "No",
              "description": "Non usiamo altre società o fornitori per trattare dati personali per nostro conto."
            }
          }
        }
      }
    },
    "section-h-provider-checks": {
      "title": "Sezione H - Verifiche sui fornitori",
      "questions": {
        "section-h-provider-checks": {
          "title": "Verifichi che ciascuno di questi fornitori sia in grado di proteggere i dati personali e rispettare i propri obblighi GDPR?",
          "prompt": "Le verifiche sui fornitori devono riguardare ogni fornitore utilizzato.",
          "references": [
            "GDPR articolo 28(1), (4): garanzie sufficienti per la protezione dei dati e la conformità"
          ],
          "options": {
            "provider-checks-in-place": {
              "label": "Sì",
              "description": "Valutiamo la capacità di ogni fornitore di proteggere i dati personali e rispettare i propri obblighi GDPR."
            },
            "no-provider-checks": {
              "label": "No",
              "description": "Non effettuiamo queste verifiche, oppure almeno un fornitore non è stato valutato."
            }
          }
        }
      }
    },
    "section-h-provider-agreements": {
      "title": "Sezione H - Accordi con i fornitori",
      "questions": {
        "section-h-provider-agreements": {
          "title": "Hai un accordo scritto e vincolante sul trattamento dei dati in vigore con ciascuno di questi fornitori?",
          "prompt": "Rispondi considerando gli accordi effettivamente in vigore con ogni fornitore, anche in formato elettronico.",
          "references": [
            "GDPR articolo 28(3)-(4), (9): condizioni vincolanti sul trattamento in forma scritta, anche elettronica"
          ],
          "options": {
            "provider-agreements-in-place": {
              "label": "Sì",
              "description": "Ogni fornitore è coperto da condizioni scritte e vincolanti sul trattamento dei dati."
            },
            "provider-agreements-incomplete": {
              "label": "No",
              "description": "Almeno un fornitore non è coperto; un modello non utilizzato non equivale a un accordo in vigore."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Sezione H",
    "guidance": {
      "title": "Sezione H - Fornitori di servizi",
      "providerChecks": "Prima di consentire a un fornitore di trattare dati personali per tuo conto, verifica che possa proteggerli e rispettare i propri obblighi. Per una piccola impresa, parti dalle condizioni sul trattamento dei dati e dalla documentazione sulla sicurezza: considera i controlli degli accessi, la segnalazione delle violazioni, gli eventuali ulteriori fornitori utilizzati e i luoghi da cui è possibile accedere ai dati. Documenta la valutazione e chiedi chiarimenti quando le informazioni sono insufficienti. Adatta la profondità delle verifiche ai rischi.",
      "providerAgreements": "Stabilisci condizioni scritte e vincolanti sul trattamento dei dati con ogni fornitore che tratti dati personali per tuo conto. Possono essere validi anche gli accordi elettronici, comprese condizioni adeguate integrate in un contratto di servizi; un modello non utilizzato non basta. Verifica che le condizioni coprano il trattamento effettivo e i requisiti seguenti.",
      "agreementIntro": "Un accordo vincolante sul trattamento dei dati deve descrivere il trattamento e specificare le responsabilità del fornitore. Verifica che copra:",
      "agreementContents": {
        "processingDetails": "Dettagli del trattamento: oggetto, durata, natura e finalità; tipi di dati personali; categorie di persone; diritti e obblighi del titolare.",
        "instructions": "Istruzioni documentate: trattamento soltanto secondo le istruzioni del titolare, compresi i trasferimenti internazionali. Se il diritto dell’UE o di uno Stato membro richiede altri trattamenti, il fornitore deve informare preventivamente il titolare, salvo che la legge lo vieti.",
        "confidentiality": "Riservatezza: i lavoratori autorizzati devono essere vincolati da impegni di riservatezza o da un adeguato obbligo legale.",
        "security": "Sicurezza: il fornitore deve attuare le misure richieste per proteggere i dati personali.",
        "subprocessors": "Ulteriori fornitori: rispetto delle regole per nominare sub-responsabili e stipulare accordi con loro.",
        "rightsAssistance": "Diritti delle persone: assistenza per le richieste di esercizio dei diritti mediante misure adeguate, tenendo conto del trattamento e di quanto è possibile.",
        "complianceAssistance": "Assistenza per la conformità: supporto per sicurezza, notifica delle violazioni, DPIA e consultazione dell’autorità, tenendo conto del trattamento e delle informazioni disponibili.",
        "endOfService": "Fine del servizio: restituzione o cancellazione dei dati personali a scelta del titolare e cancellazione delle copie rimanenti, salvo che il diritto dell’UE o di uno Stato membro ne richieda la conservazione.",
        "evidenceAndAudits": "Prove e verifiche: fornitura delle informazioni necessarie per dimostrare la conformità e disponibilità a consentire e contribuire alle verifiche, comprese le ispezioni.",
        "unlawfulInstructions": "Istruzioni illecite: avviso immediato al titolare se un’istruzione appare contraria alla normativa applicabile sulla protezione dei dati."
      },
      "agreementDisclaimer": "Questi sono contenuti obbligatori dell’accordo, non rilievi di singole clausole mancanti. Dichiarare che un accordo è in vigore non ne verifica i contenuti o l’attuazione (articolo 28(3) GDPR).",
      "processorReminder": "Quando tratti dati personali per un cliente come responsabile del trattamento, assicurati che il rapporto sia disciplinato da condizioni scritte e vincolanti che coprano questi requisiti e segui le istruzioni documentate del cliente. Queste responsabilità restano rilevanti anche se non utilizzi ulteriori fornitori.",
      "subprocessorReminder": "Se nomini un altro responsabile per trattare i dati del tuo cliente, ottieni la preventiva autorizzazione scritta, specifica o generale, del titolare e imponi al fornitore gli stessi obblighi di protezione dei dati. Con un’autorizzazione generale, comunica in anticipo aggiunte o sostituzioni affinché il titolare possa opporsi. Resti responsabile verso il titolare per l’adempimento degli obblighi di quel fornitore (articolo 28(2)–(4) GDPR)."
    },
    "outcomes": {
      "providersSkipped": "Avete dichiarato di non utilizzare fornitori che trattano dati per vostro conto; le domande sulle verifiche e sugli accordi con i fornitori sono state saltate. Restano i vostri obblighi come responsabile, se pertinenti.",
      "providersReported": "Avete dichiarato verifiche sui fornitori e accordi scritti vincolanti con ciascuno di essi. Contenuti e attuazione degli accordi devono comunque rispettare le condizioni applicabili."
    }
  }
}
