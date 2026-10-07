export default {
  "pages": {
    "section-i-transfer-situations": {
      "title": "Sezione I - Trasferimenti internazionali",
      "questions": {
        "section-i-transfer-situations": {
          "title": "La tua organizzazione invia dati personali, o li rende accessibili, a destinatari fuori dall’UE/SEE o a organizzazioni internazionali?",
          "prompt": "Considera fornitori, partner commerciali e società del gruppo, inclusi archiviazione cloud, backup e assistenza remota. I dati possono essere accessibili a un destinatario fuori dall’UE/SEE anche quando i server si trovano nell’UE/SEE.",
          "references": [
            "GDPR articolo 4(26): definition of an international organisation",
            "GDPR articolo 44: trasferimenti verso paesi terzi o organizzazioni internazionali must comply with Chapter V"
          ],
          "options": {
            "international-transfers-reported": {
              "label": "Sì",
              "description": "Inviamo dati personali, o consentiamo l’accesso, ad almeno uno di questi destinatari."
            },
            "no-international-transfers": {
              "label": "No",
              "description": "Non inviamo dati personali, né consentiamo l’accesso, a nessuno di questi destinatari."
            }
          }
        }
      }
    },
    "section-i-transfer-mechanism": {
      "title": "Sezione I - Meccanismo di trasferimento",
      "questions": {
        "section-i-transfer-mechanism": {
          "title": "Ogni trasferimento internazionale effettuato dalla tua organizzazione, direttamente o tramite i suoi fornitori, è coperto da una decisione di adeguatezza?",
          "prompt": "Verifica che le decisioni applicabili coprano ogni destinazione, destinatario e tipo di dati. Seleziona No se sono coperti soltanto alcuni trasferimenti; potrai indicare qui sotto i meccanismi usati per quelli rimanenti.",
          "references": [
            "GDPR articolo 45(1): transfer on the basis of an decisione di adeguatezza",
            "GDPR articolo 46(1): garanzie adeguate and enforceable interessato rights",
            "GDPR articolo 46(2): safeguards including binding corporate rules and standard data protection clauses",
            "GDPR articolo 46(3): authorisation for other contractual clauses and public-authority administrative arrangements",
            "GDPR articolo 47: approval and requirements for binding corporate rules",
            "GDPR articolo 49(1): deroghe per situazioni specifiche where Article 45 or 46 is unavailable"
          ],
          "options": {
            "adequacy-decision": {
              "label": "Sì",
              "description": "Ogni trasferimento dichiarato è coperto da una decisione di adeguatezza applicabile."
            },
            "adequacy-not-all": {
              "label": "No",
              "description": "Almeno un trasferimento non è coperto da una decisione di adeguatezza."
            }
          }
        },
        "section-i-transfer-mechanism-alternatives": {
          "title": "Per i trasferimenti non coperti da una decisione di adeguatezza, su cosa si basa la tua organizzazione?",
          "prompt": "Seleziona tutti i meccanismi usati per questi trasferimenti. Le prime quattro opzioni sono garanzie previste dall’articolo 46; quella dell’articolo 49 è un’eccezione con condizioni specifiche. Selezionare un meccanismo non conferma che tutte le sue condizioni siano rispettate.",
          "options": {
            "standard-data-protection-clauses": {
              "label": "Clausole contrattuali tipo o altre clausole contrattuali autorizzate",
              "description": "Le parti usano condizioni contrattuali che forniscono la protezione richiesta per il trasferimento."
            },
            "binding-corporate-rules": {
              "label": "Norme vincolanti d’impresa approvate per trasferimenti all’interno di un gruppo",
              "description": "Le regole approvate del gruppo coprono le entità e i trasferimenti interessati."
            },
            "approved-code-or-certification": {
              "label": "Codice di condotta o certificazione approvati con impegni vincolanti",
              "description": "Lo strumento approvato copre il trasferimento e il destinatario assume impegni vincolanti e azionabili per proteggere i dati."
            },
            "public-authority-instrument": {
              "label": "Strumento vincolante o accordo autorizzato tra autorità pubbliche",
              "description": "Gli organismi pubblici usano uno strumento giuridicamente vincolante o un accordo amministrativo autorizzato che offre una protezione azionabile per le persone interessate."
            },
            "article-49-derogation": {
              "label": "Un’eccezione ai sensi dell’articolo 49 per una situazione specifica",
              "description": "Il trasferimento soddisfa le condizioni specifiche dell’eccezione invocata."
            },
            "no-transfer-mechanism": {
              "label": "Nessuna delle precedenti",
              "description": "Non abbiamo individuato nessuno di questi meccanismi per i trasferimenti non coperti da una decisione di adeguatezza."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Sezione I",
    "guidance": {
      "title": "Sezione I - Trasferimenti internazionali",
      "noTransfers": "Quando verifichi se trasferisci dati personali fuori dall’UE/SEE, considera servizi cloud, copie di sicurezza, assistenza remota e società distinte del gruppo. Verifica chi può ricevere i dati o accedervi, senza basarti soltanto sulla posizione dei server.",
      "recipientContext": "Individua i destinatari effettivi, le destinazioni e le modalità di accesso dei tuoi trasferimenti internazionali, compresi quelli effettuati tramite fornitori. L’accesso di una società distinta situata fuori dall’UE/SEE può costituire un trasferimento anche se i server restano nell’UE/SEE. L’accesso dei tuoi dipendenti dall’estero non è, di per sé, un trasferimento a un’altra organizzazione, ma richiede comunque una sicurezza adeguata.",
      "mechanismReview": "Prima di proseguire i trasferimenti interessati, verifica se sono coperti da un meccanismo di trasferimento valido. Chiedi al fornitore la documentazione applicabile. Se non è disponibile una modalità lecita, sospendi i trasferimenti interessati oppure modifica il servizio o le modalità di accesso. Questo riguarda i trasferimenti non coperti da una decisione di adeguatezza; non significa che tutti i tuoi trasferimenti siano privi di protezione.",
      "mechanisms": {
        "transfer-adequacy-scope-and-validity": "Quando ti basi su una decisione di adeguatezza, verifica che sia ancora valida e copra la destinazione, il destinatario e il trattamento effettivi. Alcune decisioni coprono soltanto determinati settori o organizzazioni partecipanti. Se è richiesta una partecipazione o certificazione, verifica lo stato attuale dell’organizzazione destinataria e l’ambito pertinente. Una decisione di adeguatezza applicabile elimina la necessità di un’ulteriore garanzia per il trasferimento, ma restano gli altri obblighi del GDPR.",
        "transfer-contractual-clauses-conditions": "Quando ti basi su clausole contrattuali per un trasferimento internazionale, assicurati che le clausole appropriate siano vincolanti per le parti interessate e completate per il trattamento effettivo. Valuta se le leggi e le prassi della destinazione permettono alla protezione di funzionare e aggiungi garanzie efficaci quando necessario. La dichiarazione di un fornitore di utilizzare clausole non lo dimostra. Le clausole contrattuali tipo adottate dalla Commissione europea non richiedono un’autorizzazione separata dell’autorità quando sono utilizzate nel loro ambito e alle condizioni previste. Se invece ti basi su clausole redatte individualmente come garanzia del trasferimento, ottieni l’autorizzazione dell’autorità di controllo competente.",
        "transfer-bcr-approval-and-coverage": "Quando ti basi su norme vincolanti d’impresa, verifica che abbiano l’approvazione richiesta e coprano le società del gruppo, i dati e i trasferimenti interessati. Una normale politica privacy interna non è un meccanismo di trasferimento approvato.",
        "transfer-code-certification-and-commitments": "Quando ti basi su un codice di condotta o una certificazione, verifica che sia approvato per i trasferimenti internazionali e che il destinatario abbia assunto gli impegni vincolanti e azionabili richiesti. Una certificazione generale di sicurezza da sola non soddisfa questo requisito.",
        "transfer-public-authority-instrument-conditions": "Quando ti basi su uno strumento tra autorità pubbliche, verifica che sia giuridicamente vincolante e azionabile e protegga i diritti delle persone. Un accordo amministrativo richiede l’autorizzazione dell’autorità competente e diritti effettivi e azionabili per le persone interessate.",
        "transfer-specific-exception-conditions": "Verifica attentamente il ricorso all’articolo 49. Hai dichiarato di utilizzare una deroga per una situazione specifica. Queste deroghe hanno condizioni rigorose e devono essere interpretate restrittivamente; non sono un’autorizzazione generale ai trasferimenti internazionali. Individua la precisa deroga su cui ti basi e verifica ogni condizione applicabile prima di procedere. Questo questionario non accerta che la deroga si applichi. Esamina l’articolo 49 GDPR e le linee guida ufficiali dell’EDPB collegate sotto e richiedi consulenza specialistica se la sua applicazione resta incerta."
      },
      "onwardProtection": "Quando il fornitore comunica dati personali a un altro destinatario o consente accessi dall’estero, verifica che la protezione continui attraverso queste modalità. Conserva prove del meccanismo di trasferimento applicabile e riesaminalo quando cambiano destinatari, servizi, modalità di accesso o condizioni giuridiche pertinenti.",
      "controllerReminder": "Per i trasferimenti internazionali sotto la tua responsabilità come titolare, includi nell’informativa privacy le informazioni richieste sui trasferimenti, comprese quelle sulla decisione di adeguatezza o sulle garanzie applicabili e su come le persone possano ottenere una copia delle garanzie. Includi i trasferimenti nei registri dei trattamenti quando richiesto.",
      "processorReminder": "Quando trasferisci dati personali di un cliente come responsabile del trattamento, segui le istruzioni documentate del titolare e i requisiti di autorizzazione applicabili. Conferma il meccanismo di trasferimento e aiuta il titolare a ottenere le informazioni necessarie per i propri obblighi.",
      "adequacyDecisionLink": {
        "label": "Commissione europea: decisioni di adeguatezza attuali",
        "url": "https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_it"
      },
      "article49Link": {
        "label": "Articolo 49 GDPR (testo completo del regolamento)",
        "url": "https://eur-lex.europa.eu/eli/reg/2016/679/oj/ita"
      },
      "article49GuidanceLink": {
        "label": "EDPB: linee guida 2/2018 sulle deroghe dell’articolo 49",
        "url": "https://www.edpb.europa.eu/documents/guideline/guidelines-22018-on-derogations-of-article-49-under-regulation-2016679_it"
      }
    },
    "outcomes": {
      "transfersSkipped": "Avete dichiarato di non effettuare trasferimenti internazionali; le verifiche dei meccanismi di trasferimento sono quindi state saltate. Gli obblighi generali di sicurezza restano.",
      "transfersReported": "Avete dichiarato un meccanismo per i trasferimenti valutati. Ambito e condizioni giuridiche non sono stati verificati; restano rilevanti le raccomandazioni condizionali."
    }
  }
}
