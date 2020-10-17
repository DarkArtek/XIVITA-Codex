## Codex
Gauges extra e tracker di Buff per FFXIV

### Installazione
1. ACT & Plugin per FFXIV
2. [OverlayPlugin di NGLD](https://github.com/quisquous/cactbot#install-ngld-overlayplugin)
3. Per le gauges, aggiungere un nuovo overlay di Miniparse e puntare l'url a `https://codex.ffxivita.it/index.html`
4. Per i buff, aggiungere un nuovo overlay di Miniparse e puntare l'url a `https://codex.ffxivita.it/buffs.html`

### Installazione per Streamers
1. Dentro OBS, aggiungere una nuova sorgente web e fatela puntare a `https://codex.ffxivita.it?OVERLAY_WS=ws://127.0.0.1:10501/ws` oppure `https://codex.ffxivita.it/buffs.html?OVERLAY_WS=ws://127.0.0.1:10501/ws`

### Le Gauges
Mostra diverse informazioni. Ad esempio quanto tempo rimane al vostro DoT (Biolysis, Dia, etc.) o quanti GCD avete (Inner Release, Perfect Balance, etc.)

### Tracker dei Buff
Mostra i vari buff attivi del party e il loro cooldown. Per gli Astrologian, msotra anche i vostri buff che il vostro party sta usando


### F.A.Q
#### Ho bisogno di Cactbot per far funzionare Codex?
> No.
#### Come posso cambiare i settaggi?
> Click sul diamante in alto a destra. Una volta apportate le modifiche, fare click su SALVA.
#### Come posso abilitare le notifiche quando un mio buff / dot sta per scadere?
> Nel menù delle impostazioni, mettere la spunta su: Lampeggia quando i Dot stanno scadendo.
#### Come mai non mi compaiono i Buff??
> Assicurati di aggiungere un nuono overlay che punti al seguente indirizzo: `https://codex.ffxivita.it/buffs.html` . Se ancora non funziona, apri una [Nuova Segnalazione](https://github.com/DarkArtek/Codex/issues/new)
#### Come mai esce fuori "SBLOCCATO (BLOCCARE PRIMA DI USARE)" ?
> Controlla di aver bloccato l'overlay dentro ACT ([vedi immagine](https://github.com/quisquous/cactbot/raw/main/screenshots/overlay_plugin_new_raidboss_locked.png))
#### Come vedo i buff dei membri del party?
> Metti la spunta su "Mostra sempre Buff personali" dentro al menù delle impostazioni

### Jobs

#### <img src="img/job_icons/DRK.png" height="20px" width="20px"> DRK
+ **Gauges**: Delirium, Blood Weapon
+ **Buffs**: Delerium (visibile solo ad AST di default)

#### <img src="img/job_icons/WAR.png" height="20px" width="20px"> WAR
+ **Gauges**: Inner Release, Storm's Eye
+ **Buffs**: Inner Release (visibile solo ad AST di default)

#### <img src="img/job_icons/PLD.png" height="20px" width="20px"> PLD
+ **Gauges**: Requiescat, Fight or Flight, Goring Blade

#### <img src="img/job_icons/GNB.png" height="20px" width="20px"> GNB
+ **Gauges**: No Mercy

#### <img src="img/job_icons/SCH.png" height="20px" width="20px"> SCH
+ **Gauges**: Biolysis
+ **Buffs**: Chain Stratagem

### <img src="img/job_icons/WHM.png" height="20px" width="20px"> WHM
+ **Gauges**: Dia

### <img src="img/job_icons/AST.png" height="20px" width="20px"> AST
+ **Gauges**: Combust
+ **Buffs**: Carte, Divination

### <img src="img/job_icons/MNK.png" height="20px" width="20px"> MNK
+ **Gauges**: Riddle of Fire, Perfect Balance
+ **Buffs**: Brotherhood, Riddle of Fire (visibile solo ad AST di default)

### <img src="img/job_icons/DRG.png" height="20px" width="20px"> DRG
+ **Gauges**: Lance Charge, Dragon Sight
+ **Buffs**: Dragon Sight, Litany, Lance Charge (visibile solo ad AST di default)

### <img src="img/job_icons/NIN.png" height="20px" width="20px"> NIN
+ **Gauges**: Trick
+ **Buffs**: Trick Attack, Bunshin (visibile solo ad AST di default)

### <img src="img/job_icons/SAM.png" height="20px" width="20px"> SAM
+ **Gauges**: Jinpu, Shifu, Higanbana
+ **Buffs**: Double Midare

### <img src="img/job_icons/BRD.png" height="20px" width="20px"> BRD
+ **Gauges**: Raging Strikes, Caustic Bite, Stormbite
+ **Buffs**: Battle Voice, Raging Strikes (visibile solo ad AST di default)

### <img src="img/job_icons/MCH.png" height="20px" width="20px"> MCH
+ **Gauges**: Hypercharge, Wildfire
+ **Buffs**: Wildfire (visibile solo ad AST di default)

### <img src="img/job_icons/DNC.png" height="20px" width="20px"> DNC
+ **Gauges**: Devilment
+ **Buffs**: Technical Step, Devilment

### <img src="img/job_icons/BLM.png" height="20px" width="20px"> BLM
+ **Gauges**: Thunder

### <img src="img/job_icons/SMN.png" height="20px" width="20px"> SMN
+ **Gauges**: Bio, Miasma, Wyrmwave & Scarlet Flame
+ **Buffs**: Devotion, Summon Bahamut (visibile solo ad AST di default), Firebird Trance (visibile solo ad AST di default)

### <img src="img/job_icons/RDM.png" height="20px" width="20px"> RDM
+ **Gauges**: Manification
+ **Buffs**: Embolden, Manafication (visibile solo ad AST di default)

### <img src="img/job_icons/BLU.png" height="20px" width="20px"> BLU
+ **Gauges**: Song of Torment
+ **Buffs**: Off-guard, Peculiar Light
+ **TODO:** Indicatore Revenge blast

