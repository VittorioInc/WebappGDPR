# Questionario GDPR — installazione autonoma

[English](README.md)

Questionario GDPR indipendente con interfaccia italiana/inglese, restituzione condizionale e PDF scaricabile. Node.js ed Express gestiscono risposte, validazione, percorsi e generazione dei report; Vue visualizza l'interfaccia. Sono incluse la calibrazione e le Sezioni A–M.

## Requisiti

- Node.js 22 o successivo e npm: verificare con `node --version` e `npm --version`.
- Git oppure il download ZIP del repository.
- Per un'istanza pubblica, un hosting capace di eseguire un processo Node.js persistente e offrire HTTPS tramite il proprio gateway o un reverse proxy.

Serve un server in esecuzione: GitHub Pages e gli hosting solo statici non possono eseguire l'API o generare i report. Questa versione non richiede database, chiavi API o account esterni per avviarsi.

## Download e avvio locale

```sh
git clone https://github.com/VittorioInc/WebappTesi.git
cd WebappTesi
npm ci --include=dev
npm test
npm run build
npm start
```

In alternativa, su GitHub selezionare **Code → Download ZIP**, estrarre l'archivio e aprire un terminale nella cartella contenente `package.json`. Eseguire i comandi a partire da `npm ci --include=dev`.

Aprire [http://127.0.0.1:5174](http://127.0.0.1:5174). Il terminale deve restare aperto; Ctrl+C arresta il server. In Windows PowerShell usare `npm.cmd` al posto di `npm` se i criteri di esecuzione bloccano `npm.ps1`.

`npm start` avvia la modalità produzione e serve la cartella generata `dist/`. La compilazione è necessaria: `dist/` e `node_modules/` non sono tracciate nel repository. La generazione PDF usa i caratteri inclusi nelle dipendenze installate e non richiede un browser o un servizio PDF separato.

## Pubblicazione su un hosting Node.js

Creare un servizio web Node.js dalla propria copia/fork del repository oppure caricare i sorgenti estratti su un hosting compatibile. Configurare:

| Impostazione | Valore |
| --- | --- |
| Cartella del progetto | Radice del repository, contenente `package.json` |
| Runtime | Node.js 22 o successivo |
| Comando di build | `npm ci --include=dev && npm test && npm run build` |
| Comando di avvio | `npm start` |
| Istanze/worker | Uno |
| URL pubblico | HTTPS alla radice del dominio, ad esempio `https://questionnaire.example.org/` |

Impostare nel pannello dell'hosting:

```text
NODE_ENV=production
HOST=0.0.0.0
COOKIE_SECURE=true
TRUST_PROXY_HOPS=1
```

L'esempio presuppone **esattamente un reverse proxy fidato** tra visitatore e Node. Verificare la struttura dell'hosting e adattare `TRUST_PROXY_HOPS`: non usare automaticamente `1` per una catena sconosciuta. Usare la variabile `PORT` fornita dall'hosting oppure impostare `PORT=5174` e indirizzare il traffico a quella porta se il servizio richiede un valore esplicito.

Abilitare HTTPS e inoltrare sia `/` sia `/api/` allo stesso servizio Node. Il proxy deve preservare l'header pubblico `Host`, inclusa l'eventuale porta non standard, e impostare `X-Forwarded-Proto` al protocollo usato dal visitatore. Deve sostituire gli header inoltrati non fidati; la porta Node deve essere raggiungibile soltanto attraverso il percorso proxy previsto. Queste impostazioni consentono ai controlli sulla stessa origine dell'API di riconoscere gli invii HTTPS legittimi.

Non memorizzare in cache le risposte `/api/`, inclusi i PDF: appartengono a sessioni individuali. Pubblicare alla radice del dominio: un prefisso come `/questionnaire/` richiede modifiche al codice/configurazione perché i percorsi API e il cookie di sessione usano `/api`.

Mantenere una sola istanza ed evitare scalabilità automatica su più istanze o worker in cluster. Preferire un servizio sempre attivo: sospensione, riavvio e nuova distribuzione cancellano le risposte attive. Prima di usare più istanze occorre implementare sessioni condivise o persistenti.

## Installazione su un proprio server

Installare Node.js/npm, ottenere il repository ed eseguire gli stessi comandi di installazione, test e build. Configurare un gestore di processi o di servizi del sistema operativo per eseguire `npm start` dalla radice del repository, avviarlo all'accensione e riavviarlo in caso di errore.

Con un reverse proxy sulla **stessa macchina**, limitare Node all'interfaccia locale. Esempio per shell POSIX:

```sh
NODE_ENV=production HOST=127.0.0.1 PORT=5174 COOKIE_SECURE=true TRUST_PROXY_HOPS=1 npm start
```

Equivalente PowerShell:

```powershell
$env:NODE_ENV = 'production'
$env:HOST = '127.0.0.1'
$env:PORT = '5174'
$env:COOKIE_SECURE = 'true'
$env:TRUST_PROXY_HOPS = '1'
npm.cmd start
```

Questi comandi restano in primo piano; per l'esecuzione automatica salvare le stesse variabili nella configurazione del servizio. Configurare il DNS del dominio, ottenere un certificato TLS nel reverse proxy e inoltrare le richieste HTTPS a `http://127.0.0.1:5174`, preservando gli header descritti sopra. Node serve HTTP; TLS termina al proxy. Se il proxy si trova in un altro container o su un'altra macchina, usare un'interfaccia raggiungibile come `0.0.0.0` e consentire l'accesso alla porta Node soltanto al proxy.

## Variabili di configurazione

| Variabile | Valore predefinito | Significato |
| --- | --- | --- |
| `HOST` | `127.0.0.1` | Indirizzo di ascolto; usare `0.0.0.0` quando il gateway dell'hosting/container deve raggiungere Node. |
| `PORT` | `5174` | Porta HTTP, da coordinare con hosting/proxy. |
| `NODE_ENV` | Non impostata | `production` attiva la modalità produzione; anche `npm start` la seleziona tramite `--production`. |
| `COOKIE_SECURE` | `false` | Soltanto il valore esatto `true` aggiunge l'attributo Secure al cookie. Attivarlo per HTTPS pubblico; lasciarlo falso per HTTP locale. |
| `TRUST_PROXY_HOPS` | `0` | Numero intero non negativo di passaggi proxy fidati, corrispondente al percorso effettivo. `0` indica nessun proxy fidato. |

L'applicazione **non carica automaticamente i file `.env`**. Usare shell, pannello dell'hosting o gestore di servizi. Lingua predefinita (`en`), lingue supportate (`en`, `it`) e durata di inattività della sessione (due ore) sono definiti in `server/config.js`.

## Verifica dell'istanza

Da un altro terminale controllare il servizio locale in produzione:

```sh
curl -I http://127.0.0.1:5174/
curl -i "http://127.0.0.1:5174/api/questionnaire/current?locale=it"
```

In Windows PowerShell usare `curl.exe`. Per l'istanza pubblica sostituire l'indirizzo di base con l'URL HTTPS. La prima richiesta deve restituire HTTP 200; la seconda HTTP 200, JSON, `Cache-Control: no-store` e un cookie `gdpr_session`. Su HTTPS pubblico il cookie deve includere `HttpOnly`, `SameSite=Strict`, `Secure` e `Path=/api`.

Non esiste un endpoint dedicato allo stato del servizio. Usare `/` per i controlli HTTP periodici; l'API della pagina corrente crea una sessione quando non riceve un cookie valido. Dopo la pubblicazione completare manualmente un questionario, cambiare lingua e scaricare il PDF per verificare il percorso completo attraverso il proxy. La richiesta del PDF prima del completamento restituisce 409; senza sessione valida restituisce 401.

## Sessioni e aggiornamenti

Le risposte sono conservate nella memoria di un singolo processo Node. Le sessioni scadono dopo due ore senza accessi alla sessione e si perdono quando il processo termina. Non sono presenti account utente, backup di database o recupero delle risposte dopo un riavvio. I PDF scaricati sono file conservati da chi li scarica.

Per aggiornare, ottenere la versione desiderata del repository, eseguire `npm ci --include=dev`, `npm test` e `npm run build`, quindi riavviare il servizio gestito. Usare il flusso di build/rilascio dell'hosting oppure arrestare il servizio prima di sostituire i file su un server amministrato direttamente. Pianificare i riavvii considerando la perdita delle sessioni attive. Conservare una versione precedente per un eventuale ripristino; ripristinare il codice non recupera le sessioni. Un pacchetto di esecuzione separato deve includere `server/`, `shared/`, `dist/`, `package.json`, `package-lock.json` e le dipendenze di produzione installate con `npm ci --omit=dev`; le dipendenze di sviluppo restano necessarie durante la build.

## Risoluzione dei problemi

| Sintomo | Controllo |
| --- | --- |
| `vite` non disponibile durante la build | Installare con `npm ci --include=dev`, anche con `NODE_ENV=production`. |
| Pagina iniziale o `dist/index.html` assente | Eseguire `npm run build` prima di `npm start` e distribuire il risultato insieme al server. |
| Servizio irraggiungibile | Controllare log, `HOST`, `PORT`, firewall e porta di destinazione del gateway. |
| `EADDRINUSE` | La porta è occupata: arrestare l'altro processo o cambiare `PORT` e configurazione proxy. |
| Pagina HTTPS visibile, invii con errore 403 | Verificare `Host`, protocollo inoltrato e numero effettivo di proxy fidati; frontend e API devono condividere l'origine. |
| Scadenze di sessione ripetute / 401 | Controllare cookie, HTTPS con `COOKIE_SECURE=true`, inattività, riavvii ed eventuali worker/istanze multipli. |
| PDF con errore 409 | Completare un percorso che produce la restituzione; le uscite anticipate non producono report/PDF. |

## Sviluppo e struttura

`npm run dev` avvia lo sviluppo locale allo stesso indirizzo predefinito. Vue si aggiorna tramite Vite; riavviare il processo dopo modifiche al server. `npm test` verifica validazione, percorsi, sessioni, contenuti EN/IT e generazione PDF; `npm run build` compila il client di produzione.

- `client/`: interfaccia Vue.
- `server/`: API Express, sessioni, logica del questionario, traduzioni delle sezioni e generazione della restituzione/PDF.
- `shared/`: traduzioni dell'interfaccia e funzioni condivise.
- `tests/`: test automatici di regressione e fixture.
- `dist/`: frontend generato per la produzione.

Usare coerentemente le lettere visualizzate A–M per ID e cartelle. La restituzione fornisce indicazioni condizionali basate sulle risposte dichiarate; non certifica la conformità.
