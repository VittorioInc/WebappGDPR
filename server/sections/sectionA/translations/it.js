export default {
  "pages": {
    "section-a-data-types": {
      "title": "Sezione A - Dati personali",
      "questions": {
        "section-a-data-types": {
          "title": "La tua organizzazione tratta dati personali?",
          "prompt": "Seleziona ogni esempio che la tua organizzazione raccoglie, conserva, riceve, consulta o utilizza. Sono solo esempi: anche altre informazioni possono essere dati personali.",
          "references": [
            "GDPR articolo 4(1): dati personali",
            "GDPR articolo 4(2): trattamento",
            "GDPR considerando 30: identificativi online"
          ],
          "selectAllLabel": "Seleziona tutto",
          "clearAllLabel": "Deseleziona tutto",
          "options": {
            "basic-details": {
              "label": "Dati identificativi di base delle persone",
              "description": "Nome, età, indirizzo, indirizzo email o numero di telefono."
            },
            "government-identifiers": {
              "label": "Identificativi governativi o ufficiali",
              "description": "Numero di passaporto, carta di identità, codice fiscale, numero previdenziale o patente."
            },
            "ip-addresses": {
              "label": "Indirizzi IP",
              "description": "Indirizzi Internet Protocol raccolti tramite siti web, app, sistemi o log."
            },
            "advertising-ids": {
              "label": "Identificativi pubblicitari o di tracciamento online",
              "description": "Identificativi pubblicitari sui dispositivi Apple e Android, identificativi dei cookie, identificativi per le analisi o identificativi online simili."
            },
            "location-data": {
              "label": "Dati di localizzazione",
              "description": "Informazioni su dove una persona si trova, si trovava o si sposta."
            },
            "device-identifiers": {
              "label": "Identificativi univoci del dispositivo",
              "description": "ID dispositivo, numeri di serie, identificativi hardware o identificativi generati dall app."
            },
            "account-identifiers": {
              "label": "Identificativi account o cliente",
              "description": "ID utente, numero cliente, numero di iscrizione o ID prenotazione."
            },
            "employment-details": {
              "label": "Dati relativi a dipendenti o collaboratori",
              "description": "Fascicoli del personale, dati paghe, CV, turni di lavoro o note sulle prestazioni."
            },
            "payment-details": {
              "label": "Dati di pagamento o fatturazione",
              "description": "Fatture, coordinate bancarie, registri di transazioni o contatti di fatturazione."
            },
            "communications": {
              "label": "Comunicazioni con le persone",
              "description": "Email, ticket di assistenza, messaggi, note di chiamata o storico della corrispondenza."
            },
            "none-of-the-above": {
              "label": "Nessuna delle precedenti",
              "description": "Usa questa opzione solo se la tua organizzazione non tratta informazioni su persone fisiche viventi identificabili."
            }
          }
        }
      }
    },
    "section-a-no-data-confirm": {
      "title": "Sezione A - Conferma",
      "questions": {
        "section-a-no-data-confirm": {
          "title": "Sei sicuro di non trattare informazioni che potrebbero identificare una persona vivente?",
          "prompt": "Questo include identificazione diretta o indiretta, come nomi, ID, dati di localizzazione o identificativi online.",
          "references": [
            "GDPR articolo 4(1): persona fisica identificabile"
          ],
          "options": {
            "no-personal-data-confirmed": {
              "label": "Sì, non trattiamo informazioni di questo tipo",
              "description": "La Sezione A indicherà che, dalle risposte, non sono stati individuati dati personali."
            }
          }
        }
      }
    },
    "section-a-lawful-basis": {
      "title": "Sezione A - Base giuridica",
      "questions": {
        "section-a-lawful-basis": {
          "title": "Su quali condizioni ti basi per giustificare il trattamento dei dati selezionati?",
          "prompt": "Seleziona ogni condizione dell articolo 6 applicabile. Ogni tipo di dato raccolto deve essere giustificato per ciascuna finalita; se nessuna condizione si applica a una raccolta di dati, quei dati non dovrebbero essere raccolti o usati.",
          "references": [
            "GDPR articolo 5(1)(a): liceità, correttezza e trasparenza",
            "GDPR articolo 6(1): liceità del trattamento"
          ],
          "options": {
            "consent": {
              "label": "Consenso dell interessato",
              "description": "L interessato ha prestato il consenso al trattamento per una o più finalità specifiche."
            },
            "contract": {
              "label": "Contratto o misure precontrattuali",
              "description": "Il trattamento è necessario per un contratto con l interessato o per adottare misure richieste prima della conclusione del contratto."
            },
            "legal-obligation": {
              "label": "Obbligo legale",
              "description": "Il trattamento è necessario per adempiere un obbligo legale applicabile all organizzazione."
            },
            "vital-interests": {
              "label": "Interessi vitali",
              "description": "Il trattamento è necessario per tutelare gli interessi vitali dell interessato o di un altra persona fisica."
            },
            "legitimate-interests": {
              "label": "Interessi legittimi",
              "description": "Il trattamento è necessario per gli interessi legittimi dell organizzazione o di terzi, salvo prevalgano i diritti e le libertà dell interessato."
            },
            "no-article-6-basis": {
              "label": "Nessuna delle precedenti",
              "description": "Usa questa opzione se al momento non si applica nessuna condizione dell articolo 6."
            }
          }
        }
      }
    },
    "section-a-processing-purposes": {
      "title": "Sezione A - Limitazione della finalità",
      "questions": {
        "section-a-processing-purposes": {
          "title": "Per quali finalità la tua organizzazione usa i dati personali selezionati?",
          "prompt": "Raccogli dati personali soltanto per finalità chiaramente definite, lecite e legittime, e soltanto nella misura necessaria a conseguirle. Non raccogliere dati che non servono ad alcuna di queste finalità. Sono i principi GDPR di limitazione della finalità e minimizzazione dei dati.",
          "references": [
            "GDPR articolo 5(1)(b): limitazione della finalità",
            "GDPR articolo 5(1)(c): data minimisation",
            "GDPR articolo 30(1)(b): purposes of the trattamento"
          ],
          "options": {
            "products-services": {
              "label": "Fornitura di prodotti o servizi",
              "description": "Erogazione di beni, servizi, prenotazioni, account, assistenza o funzionalità richieste."
            },
            "customer-relationships": {
              "label": "Gestione dei rapporti con clienti o utenti",
              "description": "Gestione di richieste, storico servizi, fascicoli cliente, assistenza o account."
            },
            "marketing-advertising": {
              "label": "Marketing o pubblicità",
              "description": "Invio di promozioni, campagne, personalizzazione annunci o misurazione pubblicitaria."
            },
            "analytics-improvement": {
              "label": "Analisi del sito o miglioramento del servizio",
              "description": "Comprensione dell uso di siti, app, prodotti, servizi o processi interni."
            },
            "payments-accounting": {
              "label": "Pagamenti, fatturazione e contabilità",
              "description": "Gestione di fatture, pagamenti, contabilità, registri fiscali o amministrazione finanziaria."
            },
            "employment-administration": {
              "label": "Amministrazione di dipendenti o collaboratori",
              "description": "Gestione di selezione, incarichi, paghe, benefit, valutazioni o fascicoli HR."
            },
            "legal-compliance": {
              "label": "Conformità legale, regolatoria o fiscale",
              "description": "Adempimento di obblighi legali, risposta ad autorità, registri obbligatori o difesa da pretese."
            },
            "security-fraud-access": {
              "label": "Sicurezza, prevenzione frodi o controllo accessi",
              "description": "Protezione dei sistemi, rilevazione abusi, indagini su incidenti o gestione permessi."
            },
            "internal-administration": {
              "label": "Altra amministrazione interna",
              "description": "Gestione dell organizzazione quando la finalità non rientra nelle categorie precedenti."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Sezione A",
    "personalData": {
      "title": "Sezione A - Dati personali",
      "reported": "Hai dichiarato di trattare i seguenti tipi di dati personali: {categories}.",
      "checkInventory": "Usa questo elenco come punto di partenza per individuare i dati personali trattati dalla tua organizzazione. Gli esempi del questionario non sono esaustivi: anche altre informazioni possono identificare una persona, da sole o combinate con altre informazioni."
    },
    "lawfulBasis": {
      "title": "Sezione A - Base giuridica e finalità",
      "noBasis": "Non hai individuato una base giuridica per il trattamento dei dati personali. Prima di iniziare o proseguire il trattamento interessato, individua quale base giuridica si applica a ogni finalità e verifica che le relative condizioni siano soddisfatte. Se nessuna base è applicabile, quel trattamento non deve essere effettuato.",
      "categoryCheck": [
        "Verifica separatamente ogni categoria di dati. Individua perché la raccogli e la utilizzi, quale base giuridica sostiene ogni finalità e se quei dati sono necessari per tale finalità. Categorie diverse possono condividere la stessa finalità e base giuridica, ma la giustificazione per una categoria non autorizza automaticamente a raccoglierne altre.",
        "Questo questionario chiede separatamente le categorie di dati, le finalità e le basi giuridiche. Non verifica che ogni categoria sia giustificata per ciascuna finalità per cui viene utilizzata."
      ],
      "legitimateInterests": "Individua l’interesse legittimo perseguito, verifica che il trattamento sia necessario e valuta se gli interessi e i diritti delle persone coinvolte prevalgano su tale interesse. Documenta questa valutazione, comprese le eventuali garanzie.",
      "purposeLimitation": "Descrivi le tue finalità in modo specifico: indicazioni generiche come “marketing” o “amministrazione interna” sono soltanto punti di partenza. Prima di usare dati esistenti per una nuova finalità, verifica che tale uso sia giuridicamente consentito; la giustificazione originaria non lo copre automaticamente."
    },
    "basisReported": "Avete dichiarato presupposti e finalità del trattamento. La loro applicabilità va comunque verificata per ogni attività e categoria di dati."
  }
}
