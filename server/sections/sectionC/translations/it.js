export default {
  "pages": {
    "section-c-governance-measures": {
      "title": "Sezione C - Policy e organizzazione",
      "questions": {
        "section-c-governance-measures": {
          "title": "Chi è responsabile della conformità GDPR e quali misure basilari di accountability sono presenti?",
          "prompt": "Seleziona ogni misura basilare di accountability applicabile.",
          "explanation": "Anche se nessuna di queste misure è in atto, la tua organizzazione resta responsabile degli obblighi GDPR che le competono come titolare o responsabile del trattamento. Se nessuno è stato incaricato di coordinare la conformità, la direzione deve assicurare che questo lavoro sia organizzato; se l’attività è esercitata da una persona fisica in proprio, spetta al titolare dell’attività. Nominare un coordinatore non trasferisce la responsabilità giuridica dell’organizzazione.",
          "references": [
            "GDPR articolo 5(2): responsabilizzazione",
            "GDPR articolo 24(1): misure tecniche e organizzative",
            "GDPR articolo 24(2): policy di protezione dei dati quando proporzionate"
          ],
          "options": {
            "data-protection-owner": {
              "label": "Una persona o un team è responsabile della protezione dei dati",
              "description": "Qualcuno coordina il lavoro di conformità GDPR."
            },
            "written-data-protection-policy": {
              "label": "Regole o procedure proporzionate e scritte sulla protezione dei dati",
              "description": "L organizzazione ha regole pratiche scritte per trattare dati personali, proporzionate alle proprie attività di trattamento."
            },
            "staff-guidance-training": {
              "label": "Indicazioni o formazione per il personale",
              "description": "Le persone che trattano dati personali ricevono istruzioni, sensibilizzazione o formazione."
            },
            "no-governance-measures": {
              "label": "Nessuna delle precedenti",
              "description": "Dalle risposte non è stata individuata alcuna misura basilare di accountability GDPR."
            }
          }
        }
      }
    },
    "section-c-dpo-triggers": {
      "title": "Sezione C - Responsabile della protezione dei dati",
      "questions": {
        "section-c-dpo-triggers": {
          "title": "Quale presupposto di obbligo o designazione del DPO si applica all organizzazione?",
          "prompt": "Seleziona le condizioni applicabili alla tua organizzazione, compresi eventuali obblighi previsti da una legge specifica o la nomina volontaria di un DPO.",
          "explanation": "La “larga scala” non ha una soglia numerica fissa. Considera il numero o la proporzione delle persone coinvolte, la quantità e la varietà dei dati, la durata del trattamento e la sua estensione geografica. Le sole dimensioni dell’impresa non determinano la risposta.\n\nEsempi sono un ospedale che tratta le cartelle dei pazienti o una banca che tratta i dati dei clienti. Un singolo medico che tratta le cartelle dei propri pazienti o un singolo avvocato che gestisce i casi dei propri clienti generalmente non effettuano un trattamento su larga scala.",
          "explanationLinks": [
            {
              "label": "EDPB: esempi di trattamento su larga scala e non su larga scala",
              "href": "https://www.edpb.europa.eu/sme/be-compliant/data-protection-officer_it"
            }
          ],
          "references": [
            "GDPR articolo 37(1): designazione obbligatoria del responsabile della protezione dei dati",
            "GDPR articolo 37(4): altra designazione obbligatoria o volontaria"
          ],
          "options": {
            "large-scale-monitoring": {
              "label": "Le attività principali richiedono monitoraggio regolare e sistematico su larga scala",
              "description": "Riguarda il monitoraggio su larga scala degli interessati come attività principale."
            },
            "large-scale-article-9-10-data": {
              "label": "Le attività principali comportano su larga scala dati dell articolo 9 o 10 individuati nella Sezione B",
              "description": "Comprende il trattamento su larga scala di categorie particolari di dati o dati relativi a condanne penali e reati come attività principale."
            },
            "member-state-law-dpo-required": {
              "label": "Una specifica legge UE o nazionale richiede un DPO",
              "description": "È stata individuata una legge diversa dai presupposti dell articolo 37(1) che richiede all organizzazione di designare un DPO."
            },
            "voluntary-dpo-designated": {
              "label": "È stato designato volontariamente un DPO",
              "description": "L organizzazione ha scelto di designare un DPO anche se non è stato individuato alcun presupposto obbligatorio."
            },
            "no-dpo-trigger": {
              "label": "Non si applica alcun presupposto obbligatorio o volontario per il DPO",
              "description": "Non è stato individuato alcun presupposto dell articolo 37, altro obbligo di legge o designazione volontaria del DPO."
            }
          },
          "detectedNotice": {
            "title": "Possibile presupposto DPO individuato dalle risposte precedenti",
            "intro": "In base alle risposte precedenti, abbiamo preselezionato possibili presupposti per il DPO da verificare. Mantieni selezionata ogni opzione solo se sono soddisfatte tutte le condizioni indicate, compreso il fatto che il trattamento costituisca un'attività principale.",
            "note": "Puoi anche selezionare un obbligo DPO previsto da altra legge UE o nazionale, oppure una designazione volontaria del DPO."
          },
          "suggestionNotice": "Suggerito dalle risposte precedenti. Puoi modificarlo prima di continuare."
        }
      }
    },
    "section-c-dpo-designation": {
      "title": "Sezione C - Responsabile della protezione dei dati",
      "questions": {
        "section-c-dpo-designation": {
          "title": "La tua organizzazione ha nominato un responsabile della protezione dei dati (DPO)?",
          "prompt": "Rispondi in base a ogni presupposto obbligatorio per il DPO selezionato nel passaggio precedente.",
          "references": [
            "GDPR articolo 37(1): nomina del responsabile della protezione dei dati",
            "GDPR articolo 37(4): designation required by Union or Member State law",
            "GDPR articolo 37(5): professional qualities and expert knowledge",
            "GDPR articolo 37(7): publish and communicate DPO contact details"
          ],
          "options": {
            "dpo-designated": {
              "label": "Sì, è stato nominato un DPO",
              "description": "È stato nominato un DPO per le attività pertinenti del titolare o del responsabile."
            },
            "dpo-not-designated": {
              "label": "No, non è stato nominato un DPO",
              "description": "È stato selezionato un presupposto obbligatorio per il DPO, ma non è stato nominato alcun DPO."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Sezione C",
    "guidance": {
      "title": "Sezione C - Policy e organizzazione",
      "coordinator": "Chiarisci chi coordina le attività di protezione dei dati e segue le azioni ancora da completare. In una piccola impresa può essere il proprietario o un membro del personale già presente. Assegnare questa responsabilità non trasferisce gli obblighi legali dell’organizzazione e non richiede necessariamente la nomina di un DPO.",
      "controllerPolicies": "Per le attività in cui agisci come titolare, verifica se i tuoi trattamenti richiedono policy scritte sulla protezione dei dati. Mantienile proporzionate alle attività e ai rischi: per una piccola organizzazione possono bastare procedure brevi e pratiche, purché rispondano adeguatamente alle sue esigenze e siano messe in pratica.",
      "processorProcedures": "Per le attività in cui agisci come responsabile del trattamento, documenta le istruzioni e le procedure pratiche necessarie per adempiere ai tuoi obblighi e trattare in sicurezza i dati dei clienti. Adeguale al lavoro svolto e ai rischi connessi.",
      "staff": "Se altre persone trattano dati personali sotto l’autorità della tua organizzazione, fornisci istruzioni pratiche adatte al loro lavoro, incluso come trattare i dati in sicurezza e segnalare problemi. Verifica che comprendano e seguano queste istruzioni."
    },
    "reported": "Avete dichiarato tutte e tre le misure organizzative e risposto alle domande applicabili sulla designazione del DPO. Le condizioni giuridiche della designazione non sono verificate qui."
  }
}
