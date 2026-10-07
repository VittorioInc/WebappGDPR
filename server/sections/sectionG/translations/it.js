export default {
  "pages": {
    "section-g-rights-process": {
      "title": "Sezione G - Diritti degli interessati",
      "questions": {
        "section-g-rights-process": {
          "title": "Quali misure avete per gestire le richieste relative ai dati personali?",
          "prompt": "Per le attività svolte come titolare, seleziona ogni misura in atto, anche se non avete ancora ricevuto richieste.",
          "references": [
            "GDPR articoli 5(2) e 24: responsabilizzazione e prova della conformità",
            "GDPR articolo 12(2): agevolare l’esercizio dei diritti degli interessati",
            "GDPR articolo 12(3): risposta senza ingiustificato ritardo ed entro un mese",
            "GDPR articolo 12(5): informazioni, comunicazioni e azioni generalmente gratuite",
            "GDPR articolo 12(6): informazioni aggiuntive in caso di ragionevoli dubbi sull’identità"
          ],
          "options": {
            "rights-request-channel": {
              "label": "Le persone hanno un canale chiaro per presentare richieste",
              "description": "Le richieste possono essere ricevute tramite email, modulo, strumento di un account o altro canale chiaro."
            },
            "rights-identity-check": {
              "label": "L’identità può essere verificata quando necessario",
              "description": "In caso di ragionevoli dubbi sull’identità, vengono richieste solo le informazioni aggiuntive necessarie per confermarla."
            },
            "rights-one-month-deadline": {
              "label": "La scadenza di un mese per la risposta è monitorata",
              "description": "Le richieste sono tracciate dalla ricezione per rispondere senza ingiustificato ritardo ed entro un mese."
            },
            "rights-free-of-charge-default": {
              "label": "Comunicazioni e azioni sui diritti sono di norma gratuite",
              "description": "Le persone possono normalmente esercitare i propri diritti senza costi."
            },
            "rights-request-records": {
              "label": "Richieste ed esiti sono registrati",
              "description": "Si conservano evidenze delle richieste e della loro gestione; non è richiesto un formato specifico di registro."
            },
            "no-rights-process": {
              "label": "Nessuna delle precedenti",
              "description": "Nessuna di queste misure è attualmente in atto."
            }
          }
        }
      }
    },
    "section-g-rights-supported": {
      "title": "Sezione G - Copertura dei diritti",
      "questions": {
        "section-g-rights-supported": {
          "title": "Quali diritti degli interessati può gestire attualmente la tua organizzazione?",
          "prompt": "Seleziona ogni diritto per cui l organizzazione ha un modo di operare.",
          "references": [
            "GDPR articolo 15: diritto di accesso dell interessato",
            "GDPR articolo 16: diritto di rettifica",
            "GDPR articolo 17: diritto alla cancellazione",
            "GDPR articolo 18: diritto alla limitazione del trattamento",
            "GDPR articolo 19: notification obligation regarding rectification, erasure, or restriction",
            "GDPR articolo 20: diritto alla portabilità dei dati",
            "GDPR articolo 21: diritto di opposizione",
            "GDPR articolo 22: processo decisionale automatizzato, inclusa la profilazione"
          ],
          "options": {
            "right-access": {
              "label": "Accesso",
              "description": "L organizzazione può confermare se tratta dati e fornire accesso, informazioni e copie."
            },
            "right-rectification": {
              "label": "Rettifica",
              "description": "L organizzazione può correggere dati inesatti e completare dati incompleti."
            },
            "right-erasure": {
              "label": "Cancellazione",
              "description": "L organizzazione può valutare e gestire richieste di cancellazione quando si applicano i presupposti dell articolo 17."
            },
            "right-restriction": {
              "label": "Limitazione del trattamento",
              "description": "L organizzazione può limitare il trattamento quando si applicano le condizioni dell articolo 18."
            },
            "right-recipient-notification": {
              "label": "Notifica ai destinatari",
              "description": "L organizzazione può notificare ai destinatari rettifica, cancellazione o limitazione quando richiesto."
            },
            "right-portability": {
              "label": "Portabilità dei dati",
              "description": "L organizzazione può fornire dati portabili quando si applicano le condizioni dell articolo 20."
            },
            "right-objection": {
              "label": "Opposizione",
              "description": "L organizzazione può gestire opposizioni, incluse quelle al marketing diretto."
            },
            "right-automated-decision": {
              "label": "Tutele per decisioni automatizzate",
              "description": "L’organizzazione può gestire le tutele dell’articolo 22 per decisioni interamente automatizzate con effetti giuridici o altrettanto significativi."
            },
            "no-rights-supported": {
              "label": "Nessuna delle precedenti",
              "description": "Dalle risposte non è stata individuata alcuna capacità di gestione dei diritti degli interessati."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Sezione G",
    "guidance": {
      "title": "Sezione G - Diritti degli interessati",
      "controllerContext": "Per i trattamenti in cui agisci come titolare, le seguenti raccomandazioni riguardano la gestione delle richieste di esercizio dei diritti sui dati personali.",
      "process": {
        "rights-request-channel": "Offri alle persone un modo chiaro per richiedere accesso, rettifica o altri interventi sui propri dati personali, ad esempio un indirizzo email pubblicato. Assicurati che il personale riconosca queste richieste anche quando arrivano attraverso un altro canale.",
        "rights-identity-check": "Quando gestisci una richiesta sui dati personali, verifica l’identità se hai ragionevoli dubbi su chi la presenta. Richiedi soltanto le informazioni aggiuntive necessarie; non esigere sistematicamente un documento di identità per ogni richiesta.",
        "rights-one-month-deadline": "Registra quando arrivano le richieste sui dati personali e assegna a qualcuno il compito di rispondere senza ingiustificato ritardo, normalmente entro un mese. Se la complessità o il numero delle richieste rende necessaria una proroga, spiegane i motivi entro quel primo mese; la proroga può coprire due ulteriori mesi.",
        "rights-free-of-charge-default": "Gestisci gratuitamente le richieste sui dati personali come regola generale. Un contributo spese ragionevole o un rifiuto richiede un’eccezione consentita, come una richiesta manifestamente infondata o eccessiva, che devi poter giustificare.",
        "rights-request-records": "Conserva prove proporzionate delle richieste sui dati personali, delle decisioni prese e delle risposte fornite. Un semplice foglio di calcolo con accesso limitato può aiutarti a dimostrare come hai gestito le richieste; il GDPR non prescrive un formato particolare per il registro."
      },
      "controllerRights": {
        "right-access": "Predisponi un modo per trovare i dati personali di una persona, confermare se li tratti e fornirne una copia insieme alle informazioni richieste sul loro utilizzo. Proteggi i diritti delle altre persone quando prepari la risposta.",
        "right-rectification": "Predisponi un modo per correggere i dati personali inesatti e completare le informazioni incomplete, tenendo conto delle finalità per cui le utilizzi.",
        "right-erasure": "Predisponi un modo per valutare le richieste di cancellazione dei dati personali. Cancella i dati quando ricorre un motivo previsto dalla legge, ad esempio quando non sono più necessari, salvo che un’eccezione ne consenta o imponga la conservazione, come un obbligo legale o la difesa di un diritto in sede giudiziaria.",
        "right-restriction": "Predisponi un modo per sospendere l’utilizzo dei dati personali quando è richiesta la limitazione, ad esempio durante la verifica di un’inesattezza contestata. I dati soggetti a limitazione possono normalmente restare conservati, ma un ulteriore utilizzo richiede un motivo consentito. Informa la persona prima di revocare la limitazione.",
        "right-recipient-notification": "Dopo aver rettificato dati personali, averli cancellati per i motivi pertinenti o averne limitato l’utilizzo, informa i destinatari a cui li hai comunicati, salvo che sia impossibile o comporti uno sforzo sproporzionato. Se la persona lo chiede, comunicale chi sono questi destinatari.",
        "right-portability": "Se tratti con mezzi automatizzati dati personali forniti dalla persona sulla base del consenso o di un contratto, predisponi un modo per fornirli in un formato digitale riutilizzabile, come CSV. Trasferiscili direttamente a un’altra organizzazione quando è tecnicamente fattibile, proteggendo i diritti delle altre persone.",
        "right-objection": "Predisponi un modo per interrompere l’utilizzo dei dati personali per marketing diretto quando la persona si oppone. Per i trattamenti basati su interessi legittimi o su un compito di interesse pubblico, valuta le opposizioni relative alla situazione particolare della persona e interrompi il trattamento, salvo che un motivo consentito ne giustifichi la prosecuzione.",
        "right-automated-decision": "Se prendi decisioni basate unicamente su mezzi automatizzati che producono effetti giuridici o incidono in modo analogamente significativo sulle persone, verifica che lo permetta un’eccezione prevista dall’articolo 22, paragrafo 2, del GDPR: la decisione deve essere necessaria per concludere o eseguire un contratto con la persona, autorizzata dal diritto dell’UE o di uno Stato membro che preveda garanzie adeguate, oppure basata sul consenso esplicito della persona. Predisponi le garanzie richieste. Per le eccezioni relative al contratto e al consenso esplicito, l’articolo 22, paragrafo 3, richiede almeno l’intervento umano da parte del titolare, la possibilità per la persona di esprimere la propria opinione e un modo per contestare la decisione."
      },
      "processorRights": {
        "right-access": "Come responsabile del trattamento, predisponi un modo per recuperare i dati personali e aiutare il titolare a preparare le risposte di accesso, tenendo conto della natura del trattamento e di quanto è possibile. Inoltra tempestivamente le richieste e segui le istruzioni documentate; non hai un termine autonomo di un mese per rispondere.",
        "right-rectification": "Come responsabile del trattamento, predisponi un modo per correggere o completare i dati personali secondo le istruzioni documentate del titolare, affinché possa soddisfare le richieste di rettifica applicabili.",
        "right-erasure": "Come responsabile del trattamento, predisponi un modo per cancellare i dati personali secondo le istruzioni documentate del titolare quando una richiesta di cancellazione deve essere soddisfatta. Lascia al titolare la valutazione dei motivi di cancellazione e delle eccezioni di conservazione e spiegagli eventuali limiti alla tua assistenza.",
        "right-restriction": "Come responsabile del trattamento, predisponi un modo per limitare l’utilizzo dei dati personali secondo le istruzioni documentate del titolare quando è richiesto. Impedisci che i dati soggetti a limitazione siano utilizzati oltre quanto consentito e coordina con il titolare l’eventuale revoca della limitazione.",
        "right-recipient-notification": "Come responsabile del trattamento, aiuta il titolare a individuare i destinatari e a comunicare rettifiche, cancellazioni o limitazioni quando la notifica è richiesta. Segui le sue istruzioni documentate e coordinati con gli eventuali sub-responsabili coinvolti.",
        "right-portability": "Come responsabile del trattamento, aiuta il titolare a esportare i dati personali in un formato digitale riutilizzabile e, quando è tecnicamente fattibile, a trasferirli direttamente a un’altra organizzazione se la portabilità si applica. Segui le istruzioni documentate; spetta al titolare stabilire se il trattamento soddisfa le condizioni di questo diritto.",
        "right-objection": "Come responsabile del trattamento, inoltra tempestivamente le opposizioni al titolare e predisponi un modo per interrompere o modificare il trattamento interessato secondo le sue istruzioni documentate. Il titolare decide come si applica l’opposizione, compreso l’obbligo di interrompere il marketing diretto.",
        "right-automated-decision": "Come responsabile del trattamento, se i tuoi servizi supportano decisioni basate unicamente su mezzi automatizzati con effetti giuridici o analogamente significativi, aiuta il titolare a predisporre le garanzie applicabili, compresi l’intervento umano e la contestazione quando richiesti. Segui le istruzioni documentate; l’assistenza non dimostra di per sé la liceità delle decisioni."
      }
    },
    "outcomes": {
      "rightsFulfilled": "Avete dichiarato tutte le capacità di gestione dei diritti e, per le attività come titolare, tutti i requisiti di gestione delle richieste valutati qui. I diritti condizionali si applicano solo quando ricorrono le relative condizioni giuridiche."
    }
  }
}
