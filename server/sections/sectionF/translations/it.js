export default {
  "pages": {
    "section-f-child-involvement": {
      "title": "Sezione F - Minori",
      "questions": {
        "section-f-child-involvement": {
          "title": "Quali situazioni riguardanti i dati personali dei minori si applicano all'organizzazione?",
          "prompt": "Seleziona ogni affermazione vera. Le risposte determinano le eventuali domande sul consenso e le raccomandazioni relative ai minori nel report finale.",
          "references": [
            "GDPR considerando 38: i minori meritano una protezione specifica",
            "GDPR articolo 8(1): child consent in relation to information society services",
            "GDPR articolo 12(1): clear and plain language for information addressed to a child",
            "GDPR articolo 17(1)(f): erasure for data collected in relation to Article 8(1) services"
          ],
          "options": {
            "children-data-handled": {
              "label": "L'organizzazione tratta dati personali relativi a minori",
              "description": "Usa questa opzione per i trattamenti relativi a minori che non sono limitati alle situazioni più specifiche indicate sotto."
            },
            "child-directed-information": {
              "label": "Informative privacy o altre comunicazioni GDPR sono rivolte direttamente a minori",
              "description": "L articolo 12(1) richiede che le informazioni rivolte specificamente a un minore usino un linguaggio chiaro e semplice."
            },
            "child-consent-online-service": {
              "label": "Il consenso è usato per un servizio online offerto direttamente a minori",
              "description": "L articolo 8 può applicarsi quando il consenso è la base giuridica per un servizio della società dell informazione offerto direttamente a un minore."
            },
            "child-marketing-profiling": {
              "label": "I dati dei minori sono usati per marketing o profilazione",
              "description": "Include marketing, profili di personalità, profili utente o analisi simili riferite ai minori."
            },
            "no-children-involved": {
              "label": "L'organizzazione non tratta dati personali relativi a minori",
              "description": "Non è stato individuato alcun trattamento di dati personali relativi a minori."
            }
          }
        }
      }
    },
    "section-f-child-consent": {
      "title": "Sezione F - Consenso dei minori",
      "questions": {
        "section-f-child-consent": {
          "title": "Come gestisce il servizio online il consenso dei minori al di sotto della soglia di età applicabile?",
          "prompt": "Individua la soglia di età applicabile al servizio, poi seleziona una risposta. L'articolo 8(1) fissa la soglia a 16 anni, salvo che la legge nazionale applicabile la riduca a un'età compresa tra 13 e 15 anni. La domanda riguarda servizi della società dell'informazione offerti direttamente ai minori e basati sul consenso.",
          "references": [
            "GDPR articolo 8(1): minore di almeno 16 anni, salvo una soglia nazionale inferiore ma non al di sotto dei 13 anni",
            "GDPR articolo 8(1): consenso prestato o autorizzato dal titolare della responsabilità genitoriale sotto la soglia applicabile"
          ],
          "options": {
            "child-above-threshold-consent": {
              "label": "Solo i minori che hanno raggiunto la soglia applicabile possono prestare autonomamente il consenso",
              "description": "Il servizio verifica l'età e non offre questo servizio basato sul consenso ai minori al di sotto della soglia applicabile."
            },
            "parental-authorisation-under-threshold": {
              "label": "I minori sotto la soglia possono usare il servizio con il consenso o l’autorizzazione genitoriale",
              "description": "Il servizio verifica l'età. Sotto la soglia applicabile, il consenso è prestato o autorizzato dal titolare della responsabilità genitoriale sul minore."
            },
            "no-child-consent-process": {
              "label": "Non è attualmente presente un processo affidabile di consenso basato sull’età",
              "description": "La soglia applicabile, le verifiche dell'età o il processo di consenso per i minori più giovani non sono stati definiti."
            }
          }
        }
      }
    },
    "section-f-parental-authorisation": {
      "title": "Sezione F - Autorizzazione genitoriale",
      "questions": {
        "section-f-parental-authorisation": {
          "title": "Quali misure sono usate per verificare e documentare il consenso o l’autorizzazione genitoriale?",
          "prompt": "Seleziona tutte le misure presenti per ogni attività basata sul consenso o sull'autorizzazione genitoriale. Ogni misura non selezionata produrrà un'azione distinta nel report finale. L'articolo 8(2) richiede sforzi ragionevoli di verifica; gli articoli 7(1) e 5(2) richiedono prove del consenso e della conformità.",
          "references": [
            "GDPR articolo 8(2): sforzi ragionevoli per verificare l'autorizzazione genitoriale, tenendo conto della tecnologia disponibile",
            "GDPR articolo 7(1): il titolare deve poter dimostrare il consenso",
            "GDPR articolo 5(2): responsabilizzazione e dimostrazione della conformità",
            "GDPR articolo 5(1)(c): dati personali limitati a quanto necessario"
          ],
          "options": {
            "parental-authorisation-verified": {
              "label": "Sono compiuti sforzi ragionevoli di verifica, considerando la tecnologia disponibile",
              "description": "Verifica che il consenso sia prestato o autorizzato dal titolare della responsabilità genitoriale. Raccogli solo i dati personali necessari alla verifica."
            },
            "child-consent-records-kept": {
              "label": "Le registrazioni documentano la valutazione dell’età, il consenso o l’autorizzazione genitoriale e le verifiche svolte",
              "description": "Conserva prove proporzionate della soglia applicabile, della valutazione dell'età, di chi ha prestato o autorizzato il consenso e di come è stato verificato."
            },
            "no-parental-authorisation-measures": {
              "label": "Nessuna delle due misure è attualmente presente",
              "description": "L’autorizzazione genitoriale non è verificata e le prove a supporto non sono conservate."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Sezione F",
    "guidance": {
      "title": "Sezione F - Minori",
      "noData": [
        "Hai dichiarato che la tua organizzazione non tratta dati personali di minori. Ciò significa che non raccogli, conservi, consulti o utilizzi in altro modo informazioni identificabili sui minori, e non semplicemente che i minori non sono tuoi clienti. Esamina le attività e le informazioni già disponibili, inclusi moduli di registrazione, prenotazioni, fotografie e registrazioni sui figli del personale.",
        "Prima di raccogliere ulteriori informazioni sull’età o sull’identità, valuta se siano necessarie per adempiere ai tuoi obblighi applicabili. Se occorrono verifiche, usa un metodo efficace e proporzionato e raccogli solo quanto necessario. Non conoscere l’età di una persona non dimostra che sia adulta. Rivaluta la risposta se individui dati di minori o se le attività cambiano."
      ],
      "processorContext": "Per i servizi che fornisci esclusivamente come responsabile del trattamento, collabora con il titolare per attuare le seguenti misure secondo le sue istruzioni documentate; la responsabilità di individuare la base giuridica e i requisiti del consenso resta al titolare.",
      "actions": {
        "child-age-consent-process": [
          "Quando offri un servizio online direttamente ai minori e fai affidamento sul consenso, individua l’età applicabile per prestarlo autonomamente: normalmente 16 anni, ma la legge nazionale applicabile può abbassarla a un’età compresa tra 13 e 15 anni. Inserisci una verifica dell’età prima di avviare il trattamento basato sul consenso. Al di sotto della soglia, impedisci tale trattamento oppure ottieni il consenso o l’autorizzazione di chi esercita la responsabilità genitoriale.",
          "Adegua le verifiche dell’età ai rischi del servizio. Per alcuni servizi a basso rischio può essere appropriata una dichiarazione sull’età o un campo per l’anno di nascita. Effettua ulteriori verifiche quando lo richiedono i rischi o i dubbi sulla risposta ed evita di raccogliere la data di nascita completa o un documento d’identità se non è necessario."
        ],
        "parental-authorisation-verified": [
          "Quando è richiesta l’autorizzazione genitoriale, usa verifiche proporzionate ai rischi. Per un servizio a basso rischio può essere sufficiente un’email separata che spieghi il trattamento, richieda l’approvazione e la conferma della responsabilità genitoriale. Il solo possesso di un indirizzo email non dimostra tale responsabilità. Rafforza le verifiche quando necessario; considera un fornitore di verifica che restituisca solo l’esito necessario, evitando informazioni identificative superflue."
        ],
        "child-consent-records-kept": [
          "Quando fai affidamento sul consenso o sull’autorizzazione genitoriale, conserva in un registro ad accesso limitato la soglia d’età applicabile, l’esito della verifica dell’età, l’autorizzazione, le informazioni fornite e le verifiche effettuate. Una piccola impresa può usare un semplice registro dei consensi collegato alla registrazione dell’approvazione. Conserva solo gli elementi necessari a dimostrare il consenso e la conformità."
        ]
      }
    },
    "outcomes": {
      "childrenSkipped": "Avete dichiarato di non trattare dati di minori; le domande successive sul consenso dei minori sono quindi state saltate. Restano rilevanti le verifiche pratiche dell’ambito indicate nelle raccomandazioni.",
      "childConsentSkipped": "Le attività dichiarate non hanno attivato le domande sul consenso dei minori nei servizi online. La protezione generale dei dati dei minori resta rilevante.",
      "childConsentReported": "Avete dichiarato le procedure di consenso in base all’età e le eventuali misure di autorizzazione genitoriale valutate nel percorso scelto. La loro attuazione non è stata verificata."
    },
    "protection": {
      "title": "Raccomandazioni per proteggere i dati dei minori",
      "intro": "Queste raccomandazioni derivano dalle attività relative ai minori selezionate. Verifica o mantieni le misure pertinenti; il questionario non ha accertato se siano già presenti.",
      "items": {
        "child-risks": "Quando tratti dati personali di minori, considera i danni che potrebbero derivare dalla perdita, dalla divulgazione o dall’uso improprio, tenendo conto della minore consapevolezza dei minori riguardo a rischi e diritti. Usa garanzie adeguate al tuo ruolo e ai rischi, conserva elementi proporzionati che le documentino e riesaminale quando cambiano le circostanze. Se agisci come responsabile del trattamento, collabora con il titolare secondo le sue istruzioni documentate (GDPR considerando 38; articoli 28 e 32).",
        "child-data-minimisation": "Quando raccogli dati personali di minori, verifica moduli, registrazioni delle prenotazioni e impostazioni degli account per limitare la raccolta a ciò che serve per ogni finalità. Per le attività svolte come titolare, rendi questo il comportamento predefinito. Se agisci come responsabile del trattamento, segui le istruzioni del titolare e segnalagli eventuali raccolte non necessarie (GDPR articoli 5(1)(c), 25(2) e 28).",
        "child-friendly-information": "Verifica che le informative privacy e le altre comunicazioni GDPR rivolte ai minori siano facilmente accessibili e usino un linguaggio chiaro e semplice, comprensibile ai minori destinatari (GDPR articolo 12(1); considerando 58).",
        "child-marketing-profiling": "Verifica finalità, base giuridica e garanzie del marketing o della profilazione che coinvolgono minori, tenendo conto della loro particolare vulnerabilità. Se ti basi sul legittimo interesse, valuta se prevalgano gli interessi o i diritti dei minori (GDPR considerando 38; articoli 6(1)(f) e 25).",
        "child-erasure": "Verifica che il processo di gestione dei diritti copra la cancellazione dei dati raccolti in relazione ai servizi dell’articolo 8. Valuta le richieste ai sensi dell’articolo 17(1)(f), considerando le eccezioni dell’articolo 17(3); il relativo diritto alla cancellazione può essere esercitato anche dopo il raggiungimento della maggiore età (GDPR articolo 17; considerando 65)."
      }
    }
  }
}
