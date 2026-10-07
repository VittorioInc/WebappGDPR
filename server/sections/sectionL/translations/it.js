export default {
  "pages": {
    "section-l-dpia-screening": {
      "title": "Sezione L - Screening DPIA",
      "questions": {
        "section-l-dpia-screening": {
          "title": "La tua organizzazione svolge, o prevede di svolgere, una delle seguenti attività che coinvolgono dati personali?",
          "prompt": "Per le attività svolte come titolare del trattamento, seleziona tutte le opzioni applicabili.",
          "explanation": "Una valutazione d’impatto sulla protezione dei dati (DPIA) esamina come un’attività potrebbe incidere sulle persone e come affrontare tali rischi. Deve essere completata prima di un trattamento che possa presentare un rischio elevato per i diritti e le libertà delle persone.\n\nLa “larga scala” non ha una soglia numerica fissa. Considera il numero o la proporzione delle persone coinvolte, la quantità e la varietà delle informazioni, la durata del trattamento e la sua estensione geografica. Le sole dimensioni dell’impresa non determinano la risposta.\n\nEsempi di trattamento su larga scala sono la gestione delle cartelle dei pazienti nelle normali attività di un ospedale o il trattamento dei dati dei clienti da parte di una banca o di una compagnia assicurativa.\n\nNon sono invece su larga scala il trattamento delle cartelle dei propri pazienti da parte di un singolo medico di medicina generale o dei dati relativi a condanne penali e reati dei propri clienti da parte di un singolo avvocato. Questi esempi provengono dal Comitato europeo per la protezione dei dati (EDPB). Anche un trattamento che non è su larga scala può richiedere una DPIA se è probabile che comporti un rischio elevato per altri motivi.",
          "explanationLinks": [
            {
              "label": "EDPB: esempi di trattamento su larga scala e non su larga scala",
              "href": "https://www.edpb.europa.eu/sme/be-compliant/data-protection-officer_it"
            }
          ],
          "references": [
            "GDPR articolo 35(1): la DPIA è richiesta prima di un trattamento che possa presentare un rischio elevato",
            "GDPR articolo 35(3): casi specifici che richiedono una DPIA",
            "GDPR articolo 35(4)-(5): le autorità competenti pubblicano elenchi di trattamenti soggetti o non soggetti a DPIA",
            "GDPR articolo 35(10): condizioni specifiche per trattamenti già valutati in occasione dell’adozione della loro base giuridica",
            "GDPR considerando 91 e linee guida DPIA approvate dall’EDPB (WP248 rev.01): larga scala e indicatori di rischio"
          ],
          "options": {
            "automated-evaluation-significant-effects": {
              "label": "Valutare sistematicamente e in modo esteso le persone mediante trattamenti automatizzati e usare tali valutazioni per decisioni che incidono significativamente su di loro.",
              "description": "Per esempio, usare punteggi automatizzati dettagliati per decidere a chi concedere un prestito o chi assumere. La valutazione deve essere sistematica ed estesa e le decisioni conseguenti devono produrre effetti giuridici o incidere in modo analogamente significativo sulle persone. L’intervento umano nella decisione finale non elimina automaticamente questo obbligo."
            },
            "large-scale-sensitive-data": {
              "label": "Trattare su larga scala dati personali sensibili o dati relativi a condanne penali e reati.",
              "description": "Esempi sono un ospedale che gestisce cartelle cliniche o un servizio che tratta grandi quantità di dati genetici. I dati sensibili comprendono informazioni sulla salute, l’origine etnica, le convinzioni religiose, l’orientamento sessuale e i dati biometrici usati per identificare univocamente una persona."
            },
            "large-scale-public-monitoring": {
              "label": "Monitorare sistematicamente su larga scala aree accessibili al pubblico.",
              "description": "Per esempio, gestire una rete coordinata di telecamere in un centro commerciale o in una rete di trasporti."
            },
            "authority-dpia-list": {
              "label": "Svolgere un’attività inclusa nell’elenco dei trattamenti soggetti a DPIA della nostra autorità di protezione dei dati.",
              "description": "Usa la directory dell’EDPB qui sotto per trovare l’autorità di protezione dei dati competente nell’UE/SEE. Consulta il suo elenco dei trattamenti soggetti a DPIA e le condizioni associate a ciascuna voce. Seleziona questa opzione se la tua attività soddisfa tali condizioni.",
              "descriptionLinks": [
                {
                  "label": "Trova la tua autorità di protezione dei dati (directory UE/SEE dell’EDPB)",
                  "href": "https://www.edpb.europa.eu/about-edpb/our-members_it"
                }
              ]
            },
            "other-potential-high-risk-features": {
              "label": "Svolgere altre attività con caratteristiche di potenziale rischio elevato.",
              "description": "Esempi sono la profilazione o il tracciamento dettagliati, la combinazione inattesa di informazioni provenienti da fonti diverse, il trattamento di informazioni molto personali, il monitoraggio di dipendenti o altre persone vulnerabili, oppure l’uso di tecnologie innovative che modificano sostanzialmente il modo in cui sono usati i dati delle persone. Queste caratteristiche richiedono una valutazione più approfondita; ciascuna di esse non rende automaticamente obbligatoria una DPIA."
            },
            "no-dpia-trigger": {
              "label": "Nessuna delle precedenti si applica alle nostre attività attuali o pianificate.",
              "description": "Nessuna delle attività sopra elencate si applica alle nostre attività come titolare del trattamento."
            }
          }
        }
      }
    },
    "section-l-dpia-content": {
      "title": "Sezione L - Completamento delle DPIA",
      "questions": {
        "section-l-dpia-content": {
          "title": "L’organizzazione ha completato DPIA che coprono le attività precedentemente discusse?",
          "prompt": "Seleziona una risposta per le attività svolte come titolare del trattamento.",
          "explanation": "Considera tutte le attività discusse nel corso di questa autovalutazione, non soltanto quelle selezionate nella pagina precedente. Per copertura si intendono le attività che richiedono una DPIA; le attività ordinarie che non la richiedono non devono essere coperte. Una valutazione ancora in corso non conta come completata.\n\nUna DPIA dovrebbe descrivere come saranno utilizzati i dati personali e perché, valutare se tale uso è necessario e proporzionato, individuare i possibili danni alle persone e spiegare le misure che affrontano questi rischi e dimostrano la conformità.\n\nRichiedi il parere del DPO, se designato, e consulta le persone interessate o i loro rappresentanti quando appropriato. Quando una DPIA è obbligatoria, completala prima di iniziare il trattamento. Una sola DPIA può coprire attività simili che presentano rischi elevati analoghi.",
          "references": [
            "GDPR articolo 35(1): completare la DPIA obbligatoria prima del trattamento; una valutazione può coprire trattamenti simili con rischi elevati analoghi",
            "GDPR articolo 35(2): richiedere il parere del DPO, se designato",
            "GDPR articolo 35(7): contenuto minimo della DPIA",
            "GDPR articolo 35(9): richiedere il parere degli interessati o dei loro rappresentanti quando appropriato"
          ],
          "options": {
            "dpia-completed-all": {
              "label": "Sì, coprono tutte le attività che richiedono una DPIA."
            },
            "dpia-completed-some": {
              "label": "Coprono alcune, ma non tutte, le attività che richiedono una DPIA."
            },
            "dpia-completed-none": {
              "label": "Nessuna DPIA completata copre queste attività."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Sezione L",
    "guidance": {
      "title": "Sezione L - DPIA",
      "screeningContext": "Questo questionario non può stabilire definitivamente se una DPIA sia obbligatoria. Verificate il trattamento effettivo, le condizioni giuridiche applicabili, gli elenchi dell’autorità competente, eventuali esenzioni e la copertura offerta da valutazioni esistenti. Conservate una breve registrazione delle motivazioni e riesaminatele quando cambiano attività o rischi.",
      "noIndicators": [
        "Non avete selezionato nessuno degli indicatori di DPIA elencati. Preparate un breve elenco delle attività di trattamento, utilizzando il registro dei trattamenti se disponibile. Per ogni attività, annotate i dati coinvolti, a chi si riferiscono, come vengono utilizzati e i possibili danni alle persone.",
        "Una lista di indirizzi usata per inviare agli iscritti una newsletter generica è un esempio per cui una DPIA normalmente non è necessaria. Il monitoraggio sistematico delle attività informatiche o dell’uso di internet dei dipendenti può invece richiederla, anche in una piccola impresa. Se svolgete attività di questo tipo, riesaminate le risposte allo screening.",
        "Controllate gli elenchi DPIA dell’autorità competente e le relative condizioni. Annotate brevemente perché una DPIA è o non è necessaria. Il fornitore informatico può spiegare quali dati raccolgono i suoi sistemi; chiedete un parere specialistico se la valutazione resta incerta, oppure considerate di effettuare una DPIA volontariamente."
      ],
      "partialCoverage": "Avete dichiarato che le DPIA completate coprono solo alcune attività rilevanti. Individuate quali attività restanti richiedono giuridicamente una DPIA e completate le valutazioni necessarie.",
      "noCoverage": "Avete dichiarato che nessuna DPIA completata copre queste attività. Verificate quali attività ne richiedono giuridicamente una e organizzate le valutazioni necessarie.",
      "completionTiming": "Completate ogni DPIA obbligatoria prima di iniziare il trattamento. Una valutazione per un’attività pianificata non è necessariamente in ritardo; se il trattamento è già iniziato, affrontate tempestivamente l’omissione.",
      "contentIntro": "Quando preparate o riesaminate una DPIA, verificate che comprenda:",
      "contentItems": [
        "Il trattamento e le sue finalità: descrivete cosa accade ai dati, le persone e i dati coinvolti, i destinatari, i tempi di conservazione e i sistemi utilizzati. Includete il legittimo interesse perseguito, ove applicabile.",
        "Necessità e proporzionalità: spiegate perché il trattamento è necessario e proporzionato alle finalità, valutando se alternative meno intrusive possano raggiungerle. Riesaminate i presupposti di liceità, la minimizzazione, la conservazione, i diritti delle persone, i responsabili e le garanzie applicabili ai trasferimenti internazionali.",
        "Rischi per le persone: individuate i possibili danni, le loro cause, probabilità e gravità. Considerate i diritti e le libertà delle persone, non soltanto i danni finanziari o operativi all’impresa.",
        "Misure per affrontare i rischi: descrivete garanzie, misure di sicurezza e strumenti per dimostrare la conformità al GDPR, tenendo conto dei diritti e degli interessi legittimi delle persone interessate e di altri soggetti. Valutate il rischio residuo dopo l’applicazione delle protezioni."
      ],
      "processIntro": "Verificate anche i requisiti procedurali applicabili:",
      "processItems": [
        "Chiedete il parere del DPO, se ne è stato designato uno.",
        "Chiedete il parere delle persone interessate o dei loro rappresentanti ove opportuno, tutelando gli interessi commerciali o pubblici e la sicurezza dei trattamenti.",
        "Tenete conto del rispetto dei pertinenti codici di condotta approvati, ove presenti; aderirvi non è obbligatorio.",
        "Completate una DPIA obbligatoria prima dell’inizio del trattamento e riesaminatela ove necessario, in particolare quando cambiano i rischi.",
        "Se permane un rischio elevato che misure appropriate non possono mitigare, consultate l’autorità competente prima di procedere. Fornite la DPIA, le finalità e i mezzi del trattamento e le misure di protezione; includete le responsabilità dei soggetti coinvolti e i contatti del DPO ove applicabile, nonché ogni altra informazione richiesta dall’autorità."
      ],
      "contentReview": "Questi sono argomenti da riesaminare, non constatazioni dell’assenza di specifici contenuti o procedure. Dichiarare di aver completato le DPIA non ne verifica qualità, tempestività o sufficienza giuridica. Le quattro categorie minime di contenuto derivano dall’articolo 35(7), con dettagli pratici dall’allegato 2 delle linee guida europee sulle DPIA; le condizioni procedurali seguono gli articoli 35 e 36.",
      "processor": "Assistete i clienti titolari del trattamento nelle loro DPIA fornendo informazioni pertinenti sui vostri trattamenti, sistemi e garanzie. Il titolare resta responsabile di stabilire la necessità e svolgere la valutazione. Questa assistenza resta rilevante anche se non utilizzate ulteriori fornitori.",
      "authorityLink": {
        "label": "EDPB: elenco delle autorità di protezione dei dati dell’UE/SEE",
        "url": "https://www.edpb.europa.eu/about-edpb/our-members_it"
      },
      "guidelinesLink": {
        "label": "Linee guida europee sulle DPIA, WP248 rev.01: pagina in inglese con versioni linguistiche, esempi e checklist dell’allegato 2",
        "url": "https://ec.europa.eu/newsroom/article29/items/611236/en"
      },
      "regulationLink": {
        "label": "GDPR: articoli 28, 35 e 36",
        "url": "https://eur-lex.europa.eu/eli/reg/2016/679/oj/ita"
      }
    },
    "outcomes": {
      "dpiaControllerSkipped": "Le verifiche dello screening e del completamento delle DPIA del titolare sono state saltate per il vostro ruolo di solo responsabile. Restano rilevanti gli obblighi di assistenza.",
      "dpiaNoIndicators": "Non avete dichiarato indicatori DPIA elencati. Questo è un esito dello screening, non un’esenzione; restano rilevanti le indicazioni per la verifica pratica.",
      "dpiaCoverageReported": "Avete dichiarato DPIA completate per tutte le attività che ne richiedono una. La checklist dei contenuti resta rilevante perché qualità, tempestività e sufficienza giuridica non sono state valutate."
    }
  }
}
