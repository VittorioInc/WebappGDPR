export default {
  "pages": {
    "section-e-consent-conditions": {
      "title": "Sezione E - Condizioni del consenso",
      "questions": {
        "section-e-consent-conditions": {
          "title": "Quali affermazioni descrivono come l'organizzazione raccoglie e registra il consenso?",
          "prompt": "Seleziona ogni affermazione vera per le tue attività di trattamento che si basano sul consenso. Devono essere selezionate tutte le affermazioni applicabili. Ogni requisito applicabile non selezionato sarà trattato come una possibile lacuna nel rapporto finale.",
          "references": [
            "GDPR articolo 4(11): freely given, specific, informed, and unambiguous consent",
            "GDPR articolo 7(1): titolare must be able to demonstrate consent",
            "GDPR articolo 7(2): distinguishable request in clear and plain language",
            "GDPR articolo 7(4): consent and unnecessary contract/service conditions",
            "GDPR articolo 9(2)(a): explicit consent for specified special-category trattamento purposes",
            "GDPR considerando 32: clear affirmative action; silence, pre-ticked boxes, or inactivity do not constitute consent",
            "GDPR considerando 43: separate consent and imbalance concerns"
          ],
          "options": {
            "active-optional-consent": {
              "label": "La persona compie una scelta attiva e realmente facoltativa",
              "description": "Il consenso non è dedotto dal silenzio, dall'inattività o da caselle preselezionate e l'accesso al servizio non è vincolato a trattamenti non necessari."
            },
            "specific-informed-consent": {
              "label": "Il consenso è specifico per ogni finalità spiegata chiaramente",
              "description": "La persona riceve informazioni sufficienti per comprendere ogni finalità e compie scelte separate quando opportuno."
            },
            "clear-separate-consent-request": {
              "label": "La richiesta è separata, accessibile e scritta con un linguaggio chiaro",
              "description": "Quando il consenso compare insieme ad altri contenuti, la richiesta è chiaramente distinguibile e facile da comprendere."
            },
            "demonstrable-consent": {
              "label": "L'organizzazione conserva prova del consenso",
              "description": "I registri mostrano chi ha acconsentito, quando, in che modo, per quale finalità e quali informazioni ha ricevuto."
            },
            "explicit-consent-where-needed": {
              "label": "Il consenso esplicito è acquisito quando il trattamento dell articolo 9 si basa sul consenso",
              "description": "Il trattamento di categorie particolari basato sul consenso usa consenso esplicito."
            },
            "no-consent-conditions": {
              "label": "Nessuna di queste affermazioni descrive il processo di consenso attuale",
              "description": "Nessun requisito applicabile tra quelli elencati è attualmente rispettato."
            }
          }
        }
      }
    },
    "section-e-consent-withdrawal": {
      "title": "Sezione E - Revoca",
      "questions": {
        "section-e-consent-withdrawal": {
          "title": "Quali affermazioni descrivono come l'organizzazione gestisce la revoca del consenso?",
          "prompt": "Seleziona ogni affermazione vera per le tue attività di trattamento che si basano sul consenso. Devono essere selezionate tutte le affermazioni applicabili. Ogni requisito applicabile non selezionato sarà trattato come una possibile lacuna nel rapporto finale.",
          "references": [
            "GDPR articolo 5(2): responsabilizzazione for demonstrating compliance",
            "GDPR articolo 7(3): diritto di revocare il consenso in qualsiasi momento",
            "GDPR articolo 13(2)(c): notice of the right to withdraw consent",
            "GDPR articolo 14(2)(d): notice of the right to withdraw consent",
            "GDPR articolo 17(1)(b): erasure where consent is withdrawn and no other legal ground applies"
          ],
          "options": {
            "withdrawal-notice-ready": {
              "label": "Prima del consenso, le persone sono informate che possono revocarlo in qualsiasi momento",
              "description": "Sono inoltre informate che la revoca non invalida il trattamento effettuato lecitamente prima della revoca."
            },
            "easy-withdrawal-method": {
              "label": "Le persone possono revocare il consenso con la stessa facilità con cui lo hanno prestato",
              "description": "È disponibile un metodo chiaro e accessibile, senza passaggi non necessari, come un comando nell account, una funzione di disiscrizione o un contatto chiaramente indicato."
            },
            "withdrawal-response-ready": {
              "label": "La revoca viene registrata e il trattamento interessato viene aggiornato tempestivamente",
              "description": "Il trattamento basato sul consenso viene interrotto, lo stato del consenso viene aggiornato e si valuta la cancellazione quando si applica l articolo 17(1)(b)."
            },
            "no-consent-withdrawal": {
              "label": "Nessuna di queste affermazioni descrive il processo di revoca attuale",
              "description": "Nessun requisito applicabile tra quelli elencati è attualmente rispettato."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Sezione E",
    "guidance": {
      "title": "Sezione E - Consenso",
      "requirements": {
        "active-optional-consent": "Quando chiedi alle persone il consenso al trattamento dei loro dati personali, richiedi un’azione positiva chiara che possano liberamente rifiutare. Non considerare consenso il silenzio, l’inattività o caselle preselezionate e non subordinare un servizio al consenso a trattamenti non necessari: il consenso deve essere libero e inequivocabile.",
        "specific-informed-consent": "Quando richiedi il consenso, spiega prima ogni finalità del trattamento e offri scelte separate per finalità distinte, quando appropriato. Le persone devono comprendere a cosa acconsentono; un’accettazione generica non costituisce un consenso specifico.",
        "clear-separate-consent-request": "Quando richiedi il consenso, usa un linguaggio chiaro e accessibile. Se la richiesta è contenuta in un documento scritto che riguarda altre questioni, rendila chiaramente distinguibile da esse, affinché le persone possano riconoscere e comprendere la propria scelta.",
        "demonstrable-consent": "Quando fai affidamento sul consenso, conserva registrazioni sufficienti a mostrare chi lo ha prestato, quando, come, per quali finalità e quali informazioni ha ricevuto. Il titolare deve poter dimostrare che è stato ottenuto un consenso valido.",
        "explicit-consent-where-needed": "Quando fai affidamento sul consenso per trattare categorie particolari di dati personali, ottieni una dichiarazione espressa che confermi l’accettazione di quel trattamento. Il consenso ordinario da solo non soddisfa il requisito del consenso esplicito previsto dall’articolo 9.",
        "withdrawal-notice-ready": "Prima di chiedere il consenso, informa le persone che possono revocarlo in qualsiasi momento e che la revoca non rende illecito il trattamento lecitamente svolto in precedenza. Devono saperlo prima di decidere.",
        "easy-withdrawal-method": "Per i trattamenti basati sul consenso, prevedi un metodo di revoca chiaro e facile da usare quanto quello per prestare il consenso. Evita passaggi o ostacoli non necessari; ad esempio, inserisci un link per annullare l’iscrizione nelle email di marketing.",
        "withdrawal-response-ready": "Quando una persona revoca il consenso, registra la revoca, aggiorna il relativo stato e interrompi il trattamento interessato basato sul consenso. Cancella i dati quando nessun altro fondamento giuridico ne giustifica la conservazione e non si applica un’eccezione al diritto alla cancellazione."
      }
    },
    "outcomes": {
      "consentSkipped": "Non avete dichiarato trattamenti basati sul consenso; le verifiche del consenso e della revoca sono quindi state saltate.",
      "consentFulfilled": "In base alle vostre risposte, dichiarate di rispettare tutti i requisiti del consenso e della revoca valutati in questa sezione."
    }
  }
}
