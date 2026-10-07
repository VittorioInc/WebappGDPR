export default {
  "pages": {
    "section-j-security-measures": {
      "title": "Sezione J - Misure di sicurezza",
      "questions": {
        "section-j-security-measures": {
          "title": "Quali misure usa attualmente la tua organizzazione per proteggere i dati personali?",
          "prompt": "Seleziona tutte le misure applicabili, comprese quelle fornite dal tuo fornitore di servizi informatici. Considera cosa potrebbe accadere se i dati fossero persi, modificati o consultati senza autorizzazione e i possibili danni alle persone. Gli esempi illustrano possibili soluzioni; non è necessario usare ogni tecnologia citata.",
          "notice": "Questi esempi suggeriscono buone pratiche di sicurezza; non attestano la conformità al GDPR. La tua organizzazione deve valutare i propri trattamenti, i rischi e i possibili danni alle persone, quindi adottare e riesaminare regolarmente protezioni adeguate. Alcuni esempi potrebbero non essere necessari, mentre potrebbero servire misure aggiuntive. Selezionare una risposta non garantisce che la protezione sia sufficiente.",
          "references": [
            "GDPR articolo 32(1)-(2): scegliere misure di sicurezza adeguate ai rischi del trattamento e ai possibili danni alle persone",
            "GDPR articolo 32(1)(a): pseudonimizzazione e cifratura dei dati personali",
            "GDPR articolo 32(1)(b): riservatezza, integrità, disponibilità e resilienza continuative",
            "GDPR articolo 32(1)(c): ripristino tempestivo della disponibilità e dell’accesso dopo un incidente",
            "GDPR articolo 32(2): protezione da distruzione, perdita, modifica, divulgazione o accesso accidentali o illeciti"
          ],
          "options": {
            "security-work-accounts": {
              "label": "I dipendenti e gli altri collaboratori autorizzati usano account di lavoro individuali e protetti",
              "description": "Assegna a ogni dipendente, consulente o altro collaboratore autorizzato un account personale per l’email di lavoro, i file condivisi e le applicazioni aziendali. Evita di condividere le stesse credenziali. Attiva la verifica in due passaggi per gli account di lavoro e usa un gestore di password per crearne di robuste e diverse per ciascun account.\n\nOgni dipendente ha il proprio account email aziendale. Per accedere occorrono la password e una conferma tramite un’app di autenticazione o una chiave di sicurezza. Quando una persona lascia l’organizzazione, il suo account viene disattivato."
            },
            "security-access-permissions": {
              "label": "Il personale può accedere solo ai file necessari per il proprio lavoro",
              "description": "Crea cartelle separate per attività come Paghe, Clienti e Amministrazione generale. Consenti ai singoli dipendenti di accedere solo alle cartelle necessarie. Scegli “Visualizzatore” per chi deve soltanto leggere i file ed “Editor” per chi deve modificarli.\n\nPer esempio, un’impresa che usa Google Drive potrebbe mantenere l’accesso generale alla cartella Paghe su “Con limitazioni”, riservandolo al proprietario e all’addetto alle paghe. Il commercialista potrebbe accedere soltanto ai documenti necessari. In questo esempio, l’impresa verificherebbe anche che una cartella condivisa più ampia o un gruppo non concedano già l’accesso ad altre persone."
            },
            "personal-data-encrypted": {
              "label": "I dati personali conservati sono protetti mediante cifratura",
              "description": "Usa la cifratura per i dati conservati quando appropriato, soprattutto su portatili, unità rimovibili e backup che potrebbero essere persi o rubati. Proteggi le chiavi di recupero e rendile disponibili alle persone autorizzate.\n\nUn portatile aziendale dovrebbe usare Windows BitLocker, FileVault su Mac o un software di cifratura simile. Questo aiuta a impedire a chi ruba il computer di leggere i file conservati senza le credenziali o la chiave necessarie. Una normale password di accesso, da sola, non equivale alla cifratura del disco."
            },
            "security-protected-communications": {
              "label": "I dati personali sono protetti durante le comunicazioni e la condivisione",
              "description": "Usa servizi approvati per email di lavoro, messaggi, chiamate e condivisione di file, con cifratura e impostazioni di accesso adeguate. Controlla destinatari e partecipanti alle riunioni prima di condividere informazioni personali.\n\nCondividi i documenti tramite link riservati a destinatari specifici. Per conversazioni delicate, valuta messaggi o chiamate con cifratura end-to-end. Se il personale deve accedere da remoto a sistemi interni alla rete dell’ufficio, valuta l’uso di una VPN."
            },
            "security-device-maintenance": {
              "label": "Dispositivi e software sono mantenuti aggiornati e protetti per ridurre le minacce alla sicurezza",
              "description": "Usa software ancora supportato dal produttore, installa tempestivamente gli aggiornamenti di sicurezza e attiva protezioni adeguate contro software dannosi e connessioni di rete indesiderate.\n\nI computer di lavoro ricevono automaticamente gli aggiornamenti del sistema operativo e del browser, usano un antivirus aggiornato, hanno il firewall attivo e bloccano lo schermo dopo un periodo di inattività. Includi anche i dispositivi personali usati per lavoro."
            },
            "security-timely-restoration": {
              "label": "Vengono effettuati backup dei dati personali ed è possibile ripristinarli",
              "description": "Conserva tre copie dei dati importanti su due tipi di supporto, con una copia fuori sede. Mantieni almeno un backup scollegato, proteggilo con la cifratura e verifica periodicamente che il ripristino funzioni.\n\nUna soluzione più semplice consiste nell’archiviazione cloud aziendale affiancata da un backup separato e cifrato su un disco esterno, scollegato e custodito in sicurezza dopo l’uso. Offre meno protezione se il backup si danneggia o non è aggiornato. La sola sincronizzazione cloud non è un backup indipendente.\n\nScegli la frequenza dei backup in base a quante informazioni potrebbero andare perse e ai danni o alle interruzioni che ne deriverebbero. Backup giornalieri possono essere adatti ad alcune attività; altre richiedono copie più frequenti.",
              "descriptionLinks": [
                {
                  "label": "ENISA: backup sicuri, sezione 5.3.7, in inglese (si apre in una nuova scheda)",
                  "href": "https://www.enisa.europa.eu/sites/default/files/publications/ENISA%20Report%20-%20Cybersecurity%20for%20SMES%20Challenges%20and%20Recommendations.pdf#page=43"
                },
                {
                  "label": "ENISA: guida alla cibersicurezza per le PMI, in italiano (si apre in una nuova scheda)",
                  "href": "https://www.enisa.europa.eu/sites/default/files/all_files/ENISA%20Cybersecurity%20guide%20for%20SMEs_IT.pdf"
                }
              ]
            },
            "security-physical-protection": {
              "label": "I documenti cartacei e le apparecchiature sono protetti da accessi fisici non autorizzati",
              "description": "Controlla l’accesso ai luoghi in cui i dati personali sono conservati o usati, compresi uffici, archivi e locali che ospitano apparecchiature informatiche.\n\nI fascicoli del personale sono conservati in un armadio chiuso a chiave, accessibile solo al personale autorizzato. I visitatori sono accompagnati nelle aree di lavoro e le apparecchiature contenenti dati personali non sono lasciate accessibili in aree pubbliche."
            },
            "personal-data-pseudonymised": {
              "label": "Nomi e altri dati identificativi sono sostituiti da codici quando l’identità non è necessaria",
              "description": "Quando un’attività non richiede di conoscere l’identità delle persone, usa dati associati a codici e conserva separatamente le informazioni che collegano i codici alle persone, con accesso limitato. Questa tecnica si chiama pseudonimizzazione.\n\nUn insieme di dati per l’analisi dei clienti usa codici cliente ed esclude nomi e recapiti. La tabella separata che collega codici e clienti è accessibile solo al personale autorizzato. Occorre considerare anche altri dettagli identificativi: sostituire soltanto i nomi potrebbe non bastare. I dati restano dati personali."
            },
            "no-security-measures": {
              "label": "Nessuna delle misure sopra elencate",
              "description": "Nessuna di queste misure elencate è attualmente usata."
            }
          }
        }
      }
    },
    "section-j-security-verification": {
      "title": "Sezione J - Verifiche e politiche di sicurezza",
      "questions": {
        "section-j-security-verification": {
          "title": "Come mantiene e documenta la sicurezza dei dati la tua organizzazione?",
          "prompt": "Seleziona ogni pratica attualmente adottata.",
          "references": [
            "GDPR articolo 32(1)(d): testare, verificare e valutare regolarmente le misure di sicurezza",
            "GDPR articolo 24(1)-(2): i titolari devono adottare e riesaminare misure adeguate, comprese politiche di protezione dei dati quando proporzionate al trattamento",
            "GDPR articolo 32(4): chi ha accesso ai dati personali li tratta solo su istruzione del titolare, salvo obblighi di legge"
          ],
          "options": {
            "security-testing-and-correction": {
              "label": "Verifichiamo periodicamente le nostre misure di sicurezza e correggiamo le debolezze individuate.",
              "description": "Verifica periodicamente che le misure su cui fai affidamento funzionino come previsto. Per esempio, ripristina alcuni file di prova dai backup e controlla che gli aggiornamenti di sicurezza vengano installati. Correggi le debolezze riscontrate e conserva una breve registrazione delle verifiche e degli interventi correttivi."
            },
            "security-written-policies": {
              "label": "Abbiamo politiche di sicurezza scritte, aggiornate e messe in pratica.",
              "description": "Metti per iscritto le regole e le responsabilità di sicurezza pertinenti alla tua organizzazione, inclusi gli strumenti approvati, la protezione degli account, la condivisione delle informazioni, i backup e la segnalazione degli incidenti. Rendi queste istruzioni disponibili ai dipendenti e agli altri collaboratori autorizzati e spiega le regole pertinenti al loro lavoro.\n\nPer una piccola impresa può essere adatto un documento breve e chiaro, in base ai trattamenti svolti e ai rischi. Conserva una versione datata e aggiornala quando cambiano le pratiche o i rischi."
            },
            "no-security-verification-controls": {
              "label": "Nessuna delle precedenti",
              "description": "Nessuna di queste pratiche elencate è attualmente adottata."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Sezione J",
    "guidance": {
      "title": "Sezione J - Sicurezza dei dati",
      "practiceChecks": "Controllate regolarmente che le misure di sicurezza dei dati personali funzionino e correggete le debolezze individuate. Per una piccola impresa, questo può includere una prova di ripristino da un backup e il controllo degli aggiornamenti e dei permessi di accesso. Assegnate la responsabilità, scegliete una frequenza adeguata ai rischi e tenete una breve registrazione dei controlli e delle correzioni.",
      "policyController": "Ove proporzionato alle vostre attività di trattamento, documentate le regole di sicurezza e le responsabilità. Una piccola impresa può utilizzare un breve documento su account, condivisione, backup e incidenti, oppure documentazione esistente equivalente. Rendete le regole disponibili ai lavoratori, spiegatele, mettetele in pratica e aggiornatele quando necessario.",
      "policyProcessor": "Documentate le procedure di sicurezza e le responsabilità necessarie per proteggere i dati personali dei vostri clienti e seguirne le istruzioni. Le procedure esistenti potrebbero già coprire questi aspetti. Assicuratevi che i lavoratori comprendano e applichino le regole e aggiornatele quando cambiano i trattamenti o i rischi.",
      "riskContext": "Scegliete le misure di sicurezza in base ai dati personali trattati, al loro utilizzo e alla probabilità e gravità dei danni in caso di perdita, modifica, divulgazione o accesso non autorizzato. Considerate le tecnologie disponibili, i costi di attuazione e le protezioni già offerte dai fornitori. Riesaminate le protezioni quando cambiano attività o minacce, o si verificano incidenti. Gli esempi seguenti sono indicazioni pratiche iniziali: selezionare delle misure non garantisce una protezione sufficiente e una categoria non selezionata potrebbe essere superflua o coperta da garanzie equivalenti.",
      "noneReported": "Avete dichiarato di non utilizzare nessuna delle misure di sicurezza elencate. Riesaminate le protezioni attualmente presenti, comprese eventuali soluzioni equivalenti, e affrontate i rischi non adeguatamente controllati. Questa risposta non dimostra l’assenza di qualsiasi protezione né conferma una violazione del GDPR.",
      "measures": {
        "security-work-account-protection": "Se dipendenti, collaboratori o altri lavoratori autorizzati utilizzano sistemi aziendali contenenti dati personali, fornite account di lavoro individuali con password robuste e uniche e verifica in due passaggi. Un gestore di password può essere utile. Disattivate gli account quando l’accesso non è più necessario.",
        "security-access-permissions": "Se il personale accede a dati personali, limitate l’accesso a quanto necessario per il suo lavoro. Ad esempio, separate le cartelle delle paghe e dei clienti, concedete l’accesso a lavoratori identificati e utilizzate permessi di sola lettura quando non occorre modificare i dati. Controllate i permessi ereditati e rimuovete gli accessi non più necessari.",
        "security-stored-data-encryption": "Valutate se occorre cifrare i dati personali archiviati, soprattutto su portatili, unità rimovibili e backup che potrebbero essere persi o rubati. Strumenti integrati come BitLocker o FileVault possono essere utili. Proteggete le chiavi di recupero e mantenetele disponibili alle persone autorizzate.",
        "security-communications-and-sharing": "Quando comunicate o condividete dati personali, utilizzate servizi di lavoro adeguati e controllate destinatari, partecipanti e impostazioni di accesso. Limitate i link condivisi ai destinatari previsti, ove opportuno. Valutate protezioni più forti per comunicazioni sensibili e una VPN quando il personale deve accedere da remoto alla rete dell’ufficio.",
        "security-device-and-software-protection": "Se i dispositivi trattano dati personali, utilizzate software ancora supportato, installate tempestivamente gli aggiornamenti di sicurezza e attivate protezioni adeguate contro malware, firewall e blocco automatico dello schermo. Includete i dispositivi personali utilizzati per lavoro; il fornitore informatico può aiutarvi a configurare queste protezioni.",
        "security-backups-and-recovery": "Se perdere l’accesso ai dati personali potrebbe danneggiare le persone o interrompere attività essenziali, predisponete backup protetti e un ripristino tempestivo. Valutate tre copie su due tipi di supporto, con una copia fuori sede. Una soluzione più leggera è un servizio cloud aziendale insieme a un’unità separata, cifrata e scollegata, ma offre meno protezione se quel backup si guasta o non viene aggiornato. La sola sincronizzazione cloud non è un backup indipendente. Scegliete la frequenza in base ai rischi e controllate periodicamente che il ripristino funzioni.",
        "security-physical-access-protection": "Se documenti cartacei o apparecchiature contengono dati personali, impedite l’accesso fisico non autorizzato. Misure pratiche includono armadi chiusi a chiave, controllo delle chiavi, visitatori accompagnati e custodia sicura di portatili e unità di memoria. Adattate la protezione ai locali e ai rischi.",
        "security-pseudonymisation-where-appropriate": "Se un’attività non richiede di conoscere l’identità delle persone, valutate l’utilizzo di codici e conservate separatamente le informazioni identificative, con accesso limitato. Ad esempio, analizzate gli acquisti dei clienti usando codici cliente anziché nomi. Considerate anche altri dettagli identificativi: i dati codificati restano dati personali."
      },
      "edpbLink": {
        "label": "EDPB: proteggere i dati personali",
        "url": "https://www.edpb.europa.eu/sme/be-compliant/secure-personal-data_it"
      },
      "enisaLink": {
        "label": "ENISA: guida alla cibersicurezza per le PMI, in italiano",
        "url": "https://www.enisa.europa.eu/sites/default/files/all_files/ENISA%20Cybersecurity%20guide%20for%20SMEs_IT.pdf"
      },
      "backupLink": {
        "label": "ENISA: backup sicuri, sezione 5.3.7, in inglese",
        "url": "https://www.enisa.europa.eu/sites/default/files/publications/ENISA%20Report%20-%20Cybersecurity%20for%20SMES%20Challenges%20and%20Recommendations.pdf#page=43"
      }
    },
    "outcomes": {
      "securityReported": "Avete dichiarato tutte e otto le categorie di sicurezza e le due pratiche di mantenimento valutate qui. La sufficienza delle protezioni dipende comunque dai rischi dei vostri trattamenti."
    }
  }
}
