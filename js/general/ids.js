//===========//
// BUFFS
//===========//
const ib = {
    // DRK
    Delerium: '7b4',
    BloodWeapon: '2e6',
    // WAR
    InnerRelease: '499',
    StormsEye: '5a',
    // PLD
    FightOrFlight: '4c',
    GoringBlade: '2d5',
    Requiescat: '558',
    // GNB
    NoMercy: '727',
    // SCH
    Biolysis: '767',
    SchBio: 'b3',
    SchBio2: 'bd',
    Chain: '4c5',
    // WHM
    Dia: '74f',
    Aero: '8f',
    Aero2: '90',
    // AST
    Combust: '346',
    Combust2: '34b',
    Combust3: '759',
    Balance: '75a',
    Bole: '75b',
    Arrow: '75c',
    Spear: '75d',
    Ewer: '75e',
    Spire: '75f',
    LordOfCrowns: '754',
    LadyOfCrowns: '755',
    Divination: '756',
    // MNK
    PerfectBalance: '6e',
    Brotherhood: '4a1',
    RiddleOfFire: '49d',
    // DRG
    LanceCharge: '748',
    BattleLitany: '312',
    RightEye: '776',
    RightEye2: '5ad',
    LeftEye: '5ae',
    // NIN
    TrickAttack: '27e',
    Bunshin: '7a2',
    // SAM
    Jinpu: '512',
    Shifu: '513',
    Higanbana: '4cc',
    // BRD
    CausticBite: '4b0',
    Stormbite: '4b1',
    VenomousBite: '7c',
    Windbite: '81',
    RagingStrikes: '7d',
    BattleVoice: '8d',
    // MCH
    Wildfire: '79a',
    // DNC
    Devilment: '721',
    TechnicalFinish: '71e',
    // BLM
    Thunder: 'a1',
    Thunder2: 'a2',
    Thunder3: 'a3',
    Thunder4: 'ab4',
    // SMN
    SmnBio: 'b3',
    SmnBio2: 'bd',
    SmnBio3: '4be',
    Miasma: '4bf',
    Devotion: '4bd',
    // RDM
    Manification: '7b3',
    Embolden: '4d7',
    // BLU
    SongOfTorment: '6b2',
    PeculiarLight: '6b9',
    OffGuard: '6b5',
};
//=============//
// ABILITIES
//=============//
const ia = {
    // DRK
    LivingShadow: '4058',
    BloodSpiller: '1CE0',
    Quietus: '1CDF',
    HardSlash: 'E28',
    SiphonStrike: 'E21',
    Souleater: 'E27',
    Unmend: 'E30',
    Unleash: 'E25',
    StalwartSoul: '4054',
    // WAR
    FellCleave: 'DDD',
    Decimate: 'DDE',
    // PLD
    FastBlade: '09',
    RiotBlade: '0F',
    GoringBlade: 'DD2',
    RoyalAuthority: 'DD3',
    Atonement: '404C',
    TotalEclipse: '1CD5',
    Prominence: '4049',
    HolySpirit: '1CD8',
    HolyCircle: '404A',
    Confiteor: '404B',
    // GNB
    DemonSlice: '3F0D',
    DemonSlaughter: '3F15',
    KeenEdge: '3F09',
    BrutalShell: '3F0B',
    SolidBarrel: '3F11',
    BurstStrike: '3F22',
    SonicBreak: '3F19',
    GnashingFang: '3F12',
    SavageClaw: '3F13',
    WickedTalon: '3F16',
    FatedCicle: '3F23',
    // SCH
    // WHM
    // AST
    // MNK
    Bootshine: '35',
    TrueStrike: '36',
    SnapPunch: '38',
    DragonKick: '4A',
    TwinSnakes: '3D',
    Demolish: '42',
    ArmOfTheDestroyer: '3E',
    FourPointFury: '4059',
    RockBreaker: '46',
    SixSidedStar: '405C',
    TornadoKick: 'DD7',
    // DRG
    TrueThrust: '4B',
    Disembowel: '57',
    ChaosThrust: '58',
    WheelingThrust: 'DE4',
    VorpalThrust: '4E',
    FullThrust: '54',
    FangAndClaw: 'DE2',
    RaidenThrust: '405F',
    DoomSpike: '56',
    SonicThrust: '1CE5',
    CoerthanTorment: '405D',
    PiercingTalon: '5A',
    Nastrond: '1CE8',
    // NIN
    SpinningEdge: '8C0',
    GustSlash: '8C2',
    AeolionEdge: '8CF',
    ArmorCrush: 'DEB',
    ShadowFang: '8D1',
    ThrowingDagger: '8C7',
    DeathBlossom: '8CE',
    Hakke: '4068',
    Fuma: '8D9',
    Katon: '8DA',
    Raiton: '8DB',
    Hyothon: '8DC',
    Huton: '8DD',
    Doton: '8DE',
    Suiton: '8DF',
    Goka: '406B',
    Hyosho: '406C',
    // SAM
    DoubleMidare: '4066',
    // BRD
    BurstShot: '406F',
    HeavyShot: '61',
    RefulgentArrow: '1CF1',
    StraightShot: '62',
    CausticBite: '1CEE',
    Stormbite: '1CEF',
    IronJaws: 'DE8',
    QuickNock: '6A',
    VenomousBite: '64',
    Windbite: '71',
    // MCH
    Hypercharge: '4339',
    HeatedSplitShot: '1CF3',
    HeatedSlugShot: '1CF4',
    HeatedCleanShot: '1CF5',
    AirAnchor: '4074',
    Drill: '4072',
    BioBlaster: '4073',
    HeatBlast: '1CF2',
    AutoCrossbow: '4071',
    CleanShot: 'B39',
    HotShot: 'B38',
    // DNC
    Cascade: '3E75',
    Fountain: '3E76',
    Windmill: '3E79',
    Bladeshower: '3E7A',
    ReverseCascade: '3E77',
    Fountainfall: '3E78',
    ReverseWindmill: '3E7B',
    Bloodshower: '3E7C',
    StandardStep: '3E7D',
    Emboite: '3E7F',
    Entrechat: '3E80',
    Jete: '3E81',
    Pirouette: '3E82',
    DoubleStandardFinish: '3F40',
    TechnicalStep: '3E7E',
    QuadTechnicalFinish: '3F44',
    SaberDance: '3E85',
    // BLM
    // SMN
    SummonBahamut: '1D03',
    FirebirdTrance: '40A5',
    Wyrmwave: '1D04',
    ScarletFlame: '4087',
    // RDM
    Jolt: '1D64',
    Verareo: '1D53',
    Verthunder: '1D51',
    Verfire: '1D56',
    Verstone: '1D57',
    Vercure: '1D5A',
    Verareo2: '408D',
    Verthunder2: '408C',
    Impact: '408E',
    ERiposte: '1D67',
    ERedoublement: '1D68',
    EZ: '1D69',
    EMoul: '1D6A',
    EReprise: '4090',
    Verflare: '1D65',
    Verholy: '1D66',
    Scorch: '4092',
};
//=================//
// JOBS
//=================//
var ji = {
    37: "GNB",
    33: "AST",
    19: "PLD",
    21: "WAR",
    32: "DRK",
    28: "SCH", 
    24: "WHM",
    23: "BRD",
    22: "DRG", 
    27: "SMN",
    34: "SAM",
    25: "BLM", 
    35: "RDM",
    31: "MCH",
    38: "DNC",
    30: "NIN",
    20: "MNK",
    36: "BLU"
};
