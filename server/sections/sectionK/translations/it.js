export default {
  "pages": {
    "section-k-breach-notification-records": {
      "title": "Sezione K - Titolare: notifica e documentazione delle violazioni",
      "questions": {
        "section-k-breach-notification-records": {
          "title": "Quali procedure ha la tua organizzazione per notificare e documentare le violazioni dei dati personali?",
          "prompt": "Per le attività svolte come titolare del trattamento, seleziona le procedure attualmente in atto, anche se la tua organizzazione non ha mai subito una violazione.",
          "references": [
            "GDPR articolo 33(1): notificare all’autorità senza ingiustificato ritardo e, ove possibile, entro 72 ore, salvo che il rischio per le persone sia improbabile; motivare eventuali ritardi",
            "GDPR articolo 33(3)-(4): informazioni richieste nella notifica e comunicazione in fasi successive",
            "GDPR articolo 33(5): documentare ogni violazione dei dati personali, le sue conseguenze e i provvedimenti adottati",
            "GDPR considerando 87: individuare prontamente le violazioni e consentire notifiche tempestive"
          ],
          "options": {
            "breach-authority-notification-process": {
              "label": "Abbiamo una procedura per valutare le violazioni e notificarle all’autorità di protezione dei dati quando necessario.",
              "description": "I dipendenti e gli altri collaboratori autorizzati dovrebbero sapere chi contattare immediatamente se sospettano una violazione. Una persona dovrebbe essere incaricata di coordinare la risposta; in una piccola impresa può essere il titolare dell’impresa.\n\nValuta tempestivamente i possibili danni alle persone coinvolte. Notifica la violazione all’autorità, salvo che sia improbabile che comporti un rischio per i loro diritti e le loro libertà. La notifica deve avvenire senza ingiustificato ritardo e, ove possibile, entro 72 ore da quando si viene a conoscenza della violazione. Motiva eventuali ritardi oltre le 72 ore. Le informazioni mancanti possono essere fornite successivamente, senza ulteriore ingiustificato ritardo."
            },
            "breach-recordkeeping-process": {
              "label": "Abbiamo una procedura per documentare ogni violazione dei dati personali, comprese quelle che non richiedono una notifica.",
              "description": "Conserva una registrazione di quanto accaduto, delle conseguenze e degli interventi effettuati. Registra anche quando l’organizzazione ne è venuta a conoscenza, la valutazione dei possibili danni e le ragioni della decisione di notificare o meno. Puoi usare un documento o un foglio di calcolo conservato in modo sicuro."
            },
            "no-breach-notification-records": {
              "label": "Nessuna delle precedenti",
              "description": "Nessuna di queste procedure elencate è attualmente in atto."
            }
          }
        }
      }
    },
    "section-k-data-subject-communication": {
      "title": "Sezione K - Titolare: persone coinvolte",
      "questions": {
        "section-k-data-subject-communication": {
          "title": "La tua organizzazione ha una procedura per informare le persone coinvolte quando una violazione dei dati personali lo richiede?",
          "prompt": "Per le attività svolte come titolare del trattamento, rispondi in base alle procedure attualmente in atto, anche se la tua organizzazione non ha mai subito una violazione.",
          "explanation": "Informa le persone coinvolte senza ingiustificato ritardo quando è probabile che la violazione comporti un rischio elevato per i loro diritti e le loro libertà. Per questa comunicazione non è previsto un termine fisso di 72 ore.\n\nDescrivi la violazione con un linguaggio chiaro, indica un punto di contatto e spiega le probabili conseguenze e le misure adottate o proposte. Includi consigli pratici che le persone possono seguire per proteggersi.\n\nLa comunicazione individuale può non essere necessaria se una protezione efficace rende i dati coinvolti illeggibili a persone non autorizzate, come la cifratura con chiavi non compromesse, oppure se misure successive assicurano che il rischio elevato non sia più suscettibile di concretizzarsi.\n\nSe contattare individualmente tutte le persone comportasse uno sforzo sproporzionato, è comunque necessaria una comunicazione pubblica o una misura simile altrettanto efficace.",
          "references": [
            "GDPR articolo 34(1): comunicare senza ingiustificato ritardo quando è probabile un rischio elevato",
            "GDPR articolo 34(2): usare un linguaggio chiaro e semplice e fornire le informazioni richieste",
            "GDPR articolo 34(3): eccezioni alla comunicazione e alternativa della comunicazione pubblica",
            "GDPR considerando 86: raccomandare precauzioni che le persone possono adottare per ridurre gli effetti negativi"
          ],
          "options": {
            "breach-communication-process-in-place": {
              "label": "Sì",
              "description": "Abbiamo una procedura per informare le persone coinvolte quando necessario."
            },
            "no-breach-communication-process": {
              "label": "No",
              "description": "Al momento non abbiamo questa procedura in atto."
            }
          }
        }
      }
    },
    "section-k-processor-breach-reporting": {
      "title": "Sezione K - Responsabile: notifica e assistenza ai clienti",
      "questions": {
        "section-k-processor-breach-reporting": {
          "title": "La tua organizzazione ha una procedura per notificare tempestivamente le violazioni ai propri clienti e assisterli quando sono coinvolti dati trattati per loro conto?",
          "prompt": "Per le attività svolte come responsabile del trattamento, rispondi in base alle procedure attualmente in atto, anche se la tua organizzazione non ha mai subito una violazione.",
          "explanation": "Notifica la violazione al cliente interessato, che agisce come titolare del trattamento, senza ingiustificato ritardo dopo esserne venuto a conoscenza. Non attendere un’indagine completa o la conclusione che la violazione comporti un rischio significativo. Fornisci tempestivamente le informazioni disponibili, integra quanto comunicato quando emergono nuovi elementi e assisti il cliente nella valutazione e nella risposta.",
          "references": [
            "GDPR articolo 33(2): notificare al titolare senza ingiustificato ritardo dopo essere venuti a conoscenza di una violazione dei dati personali",
            "GDPR articolo 28(3)(f): assistere il titolare negli obblighi di sicurezza e gestione delle violazioni, tenendo conto del trattamento e delle informazioni disponibili"
          ],
          "options": {
            "processor-breach-process-in-place": {
              "label": "Sì",
              "description": "Abbiamo una procedura per notificare tempestivamente le violazioni al cliente interessato e assisterlo quando sono coinvolti dati personali trattati per suo conto."
            },
            "no-processor-breach-process": {
              "label": "No",
              "description": "Al momento non abbiamo questa procedura in atto."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Sezione K",
    "guidance": {
      "title": "Sezione K - Violazioni dei dati personali",
      "controller": {
        "breach-assessment-and-authority-notification-readiness": "Predisponete un modo chiaro con cui i lavoratori possano segnalare immediatamente sospette violazioni dei dati personali e nominate qualcuno che coordini la risposta. In una piccola impresa può essere il proprietario. Valutate tempestivamente i possibili danni. Notificate la violazione all’autorità competente per la protezione dei dati, salvo che sia improbabile un rischio per i diritti e le libertà delle persone, senza ingiustificato ritardo e, ove possibile, entro 72 ore da quando ne venite a conoscenza. Spiegate eventuali ritardi; le informazioni mancanti possono essere fornite successivamente senza ulteriore ingiustificato ritardo.",
        "breach-documentation-including-unnotified-breaches": "Conservate in modo sicuro una registrazione di ogni violazione dei dati personali, comprese quelle non notificate. Un semplice foglio di calcolo può riportare cosa è successo, quando ne siete venuti a conoscenza, gli effetti, le azioni correttive e i motivi delle decisioni sulla notifica."
      },
      "communication": "Predisponete come contattare le persone interessate quando una violazione dei dati personali può presentare un rischio elevato per i loro diritti e libertà. Informatele senza ingiustificato ritardo, usando un linguaggio chiaro e indicando un punto di contatto, le probabili conseguenze, le misure adottate o proposte e consigli pratici per proteggersi. Non esiste un termine fisso di 72 ore. La comunicazione può non essere necessaria se una protezione efficace, come la cifratura con chiavi non compromesse, impedisce la lettura non autorizzata, oppure se misure successive eliminano la probabilità che si concretizzi il rischio elevato. Se il contatto individuale richiede uno sforzo sproporzionato, resta necessaria una comunicazione pubblica altrettanto efficace.",
      "processor": "Concordate con ciascun cliente chi contattare quando una violazione riguarda dati personali trattati per suo conto. Informate il cliente senza ingiustificato ritardo da quando ne venite a conoscenza; non aspettate il completamento dell’indagine o il raggiungimento di una soglia di rischio. Non avete un termine separato di 72 ore. Fornite tempestivamente le informazioni disponibili, integratele man mano che emergono altri dettagli e assistete il cliente nella valutazione e nella risposta.",
      "sourceLink": {
        "label": "EDPB: violazioni dei dati personali, guida per le piccole imprese",
        "url": "https://www.edpb.europa.eu/sme/assess-the-risks/data-breaches_it"
      }
    },
    "outcomes": {
      "breachFulfilled": "Avete dichiarato tutte le procedure di notifica, comunicazione e documentazione delle violazioni valutate per il vostro ruolo o i vostri ruoli. Ogni violazione effettiva va comunque valutata rispetto alle condizioni di notifica applicabili."
    }
  }
}
