// Current language
let currentLanguage = 'en';

// Translations
const translations = {
    name: {
        en: 'Arthur Henriques Garcia',
        pt: 'Arthur Henriques Garcia',
        nl: 'Arthur Henriques Garcia'
    },
    backToMenu: {
        en: 'Back to Menu',
        pt: 'Voltar ao Menu',
        nl: 'Terug naar Menu'
    },
    navHintDesktop: {
        en: 'Use arrows or click to navigate • Click an item for details',
        pt: 'Use as setas ou clique para navegar • Clique em um item para detalhes',
        nl: 'Gebruik pijlen of klik om te navigeren • Klik op een item voor details'
    },
    navHintMobile: {
        en: 'Use arrows or click to navigate • Click an item for details',
        pt: 'Use as setas ou clique para navegar • Clique em um item para detalhes',
        nl: 'Gebruik pijlen of klik om te navigeren • Klik op een item voor details'
    },
    navHintKeyboard: {
        en: 'Arrows navigate • Enter opens • Escape returns',
        pt: 'Setas navegam • Enter abre • Escape volta',
        nl: 'Pijlen navigeren • Enter opent • Escape gaat terug'
    },
    previousCategory: {
        en: 'Previous category',
        pt: 'Categoria anterior',
        nl: 'Vorige categorie'
    },
    nextCategory: {
        en: 'Next category',
        pt: 'Próxima categoria',
        nl: 'Volgende categorie'
    },
    previousItem: {
        en: 'Previous item',
        pt: 'Item anterior',
        nl: 'Vorig item'
    },
    nextItem: {
        en: 'Next item',
        pt: 'Próximo item',
        nl: 'Volgend item'
    },
    categoryLabel: {
        en: 'Category',
        pt: 'Categoria',
        nl: 'Categorie'
    },
    itemLabel: {
        en: 'Item',
        pt: 'Item',
        nl: 'Item'
    },
    navigationBoundary: {
        en: 'You are at the edge of this list.',
        pt: 'Você está no limite desta lista.',
        nl: 'Je bent aan het einde van deze lijst.'
    }
};

// Portfolio data with translations
const menuData = [
    {
        title: { en: 'About Me', pt: 'Sobre Mim', nl: 'Over Mij' },
        icon: 'user',
        items: [
            {
                title: { en: 'Introduction', pt: 'Introducao', nl: 'Introductie' },
                description: { en: 'Gameplay / Tool Developer', pt: 'Desenvolvedor de Gameplay / Ferramentas', nl: 'Gameplay / Tool Developer' },
                content: { en: 'Hi, I am Arthur from Rio, now based in Amsterdam.', pt: 'Ola, eu sou Arthur do Rio, agora em Amsterdam.', nl: 'Hoi, ik ben Arthur uit Rio, nu in Amsterdam.' },
                detailContent: {
                    en: 'Hi, I am Arthur. I was born in Rio de Janeiro, Brazil, and I have been living in the Netherlands for the past six years. Moving countries at a young age taught me how to adapt quickly, and along the way I learned Dutch and English. Because of this, I became a fast learner who feels comfortable picking up new skills and technologies.',
                    pt: 'Oi, eu sou o Arthur. Nasci no Rio de Janeiro, Brasil, e moro na Holanda ha seis anos. Mudar de pais cedo me ensinou a me adaptar rapidamente, e nesse processo aprendi Holandes e Ingles. Por isso, me tornei alguem que aprende rapido e se adapta bem a novas tecnologias.',
                    nl: 'Hoi, ik ben Arthur. Ik ben geboren in Rio de Janeiro, Brazilie, en woon al zes jaar in Nederland. Op jonge leeftijd verhuizen heeft mij geleerd om snel aan te passen. Onderweg heb ik Nederlands en Engels geleerd, waardoor ik snel nieuwe vaardigheden en technologieen oppak.'
                }
            },
            {
                title: { en: 'Education', pt: 'Educacao', nl: 'Opleiding' },
                description: { en: 'IB + MBO Game Development', pt: 'IB + MBO Desenvolvimento de Jogos', nl: 'IB + MBO Game Development' },
                content: { en: 'Practical game development focus at Media College Amsterdam.', pt: 'Foco pratico em desenvolvimento de jogos no Media College Amsterdam.', nl: 'Praktische focus op game development bij Media College Amsterdam.' },
                detailContent: {
                    en: 'Before fully committing to game development, I followed International Baccalaureate level education. That gave me a strong theoretical base, but I realized I thrive in practical, hands-on environments. I now study Game Development at Media College Amsterdam, where I work on design, mechanics, prototyping, iteration, and teamwork.',
                    pt: 'Antes de focar totalmente em desenvolvimento de jogos, segui o nivel International Baccalaureate. Isso me deu uma base teorica forte, mas percebi que evoluo mais em ambientes praticos. Hoje estudo Game Development no Media College Amsterdam com foco em design, mecanicas, prototipos, iteracao e trabalho em equipe.',
                    nl: 'Voordat ik volledig voor game development koos, volgde ik onderwijs op International Baccalaureate niveau. Dat gaf een sterke theoretische basis, maar ik merkte dat ik beter groei in praktische leeromgevingen. Nu studeer ik Game Development aan het Media College Amsterdam met focus op design, mechanics, prototypes, iteratie en teamwork.'
                }
            },
            {
                title: { en: 'Focus', pt: 'Foco', nl: 'Focus' },
                description: { en: 'Roguelikes, systems, game feel', pt: 'Roguelikes, sistemas, game feel', nl: 'Roguelikes, systemen, game feel' },
                content: { en: 'I enjoy turning ideas into interactive and fun mechanics.', pt: 'Gosto de transformar ideias em mecanicas interativas e divertidas.', nl: 'Ik vind het leuk om ideeen om te zetten in interactieve en leuke mechanics.' },
                detailContent: {
                    en: 'I especially enjoy gameplay mechanics and fast prototyping. My favorite genre is roguelikes because learning through failure and returning stronger is an inspiring design loop. Looking ahead, I want to keep improving in C# scripting, game feel, combat systems, player feedback, optimization, and tools development.',
                    pt: 'Eu gosto especialmente de mecanicas de gameplay e prototipagem rapida. Meu genero favorito e roguelike por causa do ciclo de aprender com falhas e voltar mais forte. No futuro, quero melhorar em C#, game feel, sistemas de combate, feedback ao jogador, otimizacao e desenvolvimento de ferramentas.',
                    nl: 'Ik werk het liefst aan gameplay mechanics en snelle prototyping. Mijn favoriete genre is roguelike, omdat leren door falen en sterker terugkomen een inspirerende ontwerpcyclus is. Ik wil mij verder ontwikkelen in C#, game feel, combatsystemen, player feedback, optimalisatie en tools development.'
                }
            }
        ]
    },
    {
        title: { en: 'Projects', pt: 'Projetos', nl: 'Projecten' },
        icon: 'briefcase',
        items: [
            {
                title: { en: 'Tower of Babel', pt: 'Tower of Babel', nl: 'Tower of Babel' },
                description: { en: 'Unity • C#', pt: 'Unity • C#', nl: 'Unity • C#' },
                content: { en: 'A core project with gameplay iteration and systems design.', pt: 'Projeto central com iteracao de gameplay e design de sistemas.', nl: 'Kernproject met gameplay-iteratie en systems design.' },
                detailContent: {
                    en: 'Tower of Babel is one of my main Unity projects. I focused on balancing mechanics, improving flow, and refining player feedback. The project helped me deepen my understanding of reusable gameplay systems and rapid iteration.',
                    pt: 'Tower of Babel e um dos meus principais projetos em Unity. Foquei em balancear mecanicas, melhorar o fluxo e refinar o feedback ao jogador. O projeto me ajudou a aprofundar sistemas reutilizaveis e iteracao rapida.',
                    nl: 'Tower of Babel is een van mijn belangrijkste Unity-projecten. Ik focuste op balancing, flow en player feedback. Het project hielp mij om herbruikbare gameplay-systemen en snelle iteratie te verdiepen.'
                }
            },
            {
                title: { en: 'DoomLikeShooter', pt: 'DoomLikeShooter', nl: 'DoomLikeShooter' },
                description: { en: 'C++ • SFML 2.x', pt: 'C++ • SFML 2.x', nl: 'C++ • SFML 2.x' },
                content: { en: 'A raycasting first-person shooter built from core C++ systems.', pt: 'Um first-person shooter de raycasting construido com sistemas centrais em C++.', nl: 'Een raycasting first-person shooter gebouwd met C++-kernsystemen.' },
                detailContent: {
                    en: 'DoomLikeShooter is a C++ and SFML raycasting prototype focused on making first-person rendering understandable and inspectable. It combines grid maps, collision-aware movement, DDA traversal, wall projection, weapon selection, and procedural muzzle flash feedback.',
                    pt: 'DoomLikeShooter e um prototipo de raycasting em C++ e SFML focado em tornar a renderizacao em primeira pessoa compreensivel e facil de analisar. Ele combina mapas em grid, movimento com colisao, percurso DDA, projecao de paredes, selecao de armas e feedback procedural de muzzle flash.',
                    nl: 'DoomLikeShooter is een C++- en SFML-raycastingprototype dat first-person rendering begrijpelijk en inspecteerbaar maakt. Het combineert gridkaarten, botsingsbewuste beweging, DDA-traversal, muurprojectie, wapenkeuze en procedurele muzzle-flash-feedback.'
                }
            },
            {
                title: { en: 'TowerDefense', pt: 'TowerDefense', nl: 'TowerDefense' },
                description: { en: 'Unity • C#', pt: 'Unity • C#', nl: 'Unity • C#' },
                content: { en: 'Defensive strategy prototype focused on pacing.', pt: 'Protótipo de estrategia defensiva focado em ritmo.', nl: 'Defensive strategy prototype met focus op pacing.' },
                detailContent: {
                    en: 'This project explores wave systems, enemy scaling, and tactical placement. I worked on readability, balancing economy loops, and making decisions feel meaningful each round.',
                    pt: 'Este projeto explora sistemas de ondas, escala de inimigos e posicionamento tatico. Trabalhei em legibilidade, balanceamento da economia e decisoes significativas por rodada.',
                    nl: 'Dit project verkent wave-systemen, enemy scaling en tactische plaatsing. Ik werkte aan leesbaarheid, economische balans en betekenisvolle keuzes per ronde.'
                }
            },
            {
                title: { en: 'Godot Game', pt: 'Jogo em Godot', nl: 'Godot Game' },
                description: { en: 'Godot • GDScript', pt: 'Godot • GDScript', nl: 'Godot • GDScript' },
                content: { en: 'Prototype to expand engine flexibility and workflow.', pt: 'Protótipo para ampliar flexibilidade de engine e fluxo.', nl: 'Prototype om engine-flexibiliteit en workflow te verbreden.' },
                detailContent: {
                    en: 'Built in Godot to gain cross-engine perspective. I explored scene structure, scripting patterns, and rapid gameplay iteration with GDScript.',
                    pt: 'Feito em Godot para ganhar visao entre engines. Explorei estrutura de cenas, padroes de script e iteracao rapida de gameplay com GDScript.',
                    nl: 'Gemaakt in Godot om engine-overstijgend inzicht te krijgen. Ik onderzocht scene-structuur, scripting-patronen en snelle iteratie met GDScript.'
                }
            },
            {
                title: { en: 'Small C++ Games', pt: 'Pequenos Jogos em C++', nl: 'Kleine C++ Games' },
                description: { en: 'C++ • Core systems', pt: 'C++ • Sistemas base', nl: 'C++ • Core systems' },
                content: { en: 'Engine-level logic and fundamentals practice.', pt: 'Pratica de logica em nivel de engine e fundamentos.', nl: 'Oefening in engine-level logica en fundamentals.' },
                detailContent: {
                    en: 'A collection of small C++ game projects where I focused on game loops, input, object-oriented architecture, and performance-aware coding.',
                    pt: 'Colecao de pequenos projetos em C++ com foco em game loop, input, arquitetura orientada a objetos e codigo atento a performance.',
                    nl: 'Een verzameling kleine C++ game-projecten met focus op game loops, input, objectgeorienteerde architectuur en performance-bewuste code.'
                }
            },
            {
                title: { en: 'Fractured', pt: 'Fractured', nl: 'Fractured' },
                description: { en: 'Unity 6.2 • Physics and destruction systems', pt: 'Unity 6.2 • Sistemas de fisica e destruicao', nl: 'Unity 6.2 • Physics- en destructiesystemen' },
                content: { en: 'A physics-driven interaction system built around launching, momentum, and destructible environments.', pt: 'Um sistema de interacao baseado em fisica, lancamento, momentum e ambientes destrutiveis.', nl: 'Een physics-gedreven interactiesysteem rond lanceren, momentum en destructieve omgevingen.' },
                detailContent: {
                    en: 'Fractured is a physics-based Unity game where the player launches a character through an interactive environment, using momentum to break walls and shatter glass.',
                    pt: 'Fractured e um jogo de fisica em Unity onde o jogador lanca um personagem por um ambiente interativo, usando momentum para quebrar paredes e vidro.',
                    nl: 'Fractured is een physics-game in Unity waarin de speler een personage door een interactieve omgeving lanceert en momentum gebruikt om muren en glas te breken.'
                }
            },
            {
                title: { en: 'Digital Divinity', pt: 'Digital Divinity', nl: 'Digital Divinity' },
                description: { en: 'Unity • C# • Stealth horror systems', pt: 'Unity • C# • Sistemas de stealth horror', nl: 'Unity • C# • Stealth-horrorsystemen' },
                content: { en: 'A stealth-horror project focused on enemy perception, traversal, audio, and tension.', pt: 'Um projeto de stealth horror focado em percepcao inimiga, traversal, audio e tensao.', nl: 'Een stealth-horrorproject rond enemy perception, traversal, audio en spanning.' },
                detailContent: {
                    en: 'Digital Divinity is a stealth-horror Unity project where I designed and implemented the enemy system from perception through decision-making, movement, searching, chasing, and player defeat. I also worked on player audio and listening systems so movement becomes readable through sound and enemies can react to those sounds.',
                    pt: 'Digital Divinity e um projeto de stealth horror em Unity no qual projetei e implementei o sistema de inimigos, desde a percepcao ate a tomada de decisoes, movimento, busca, perseguicao e derrota do jogador. Tambem trabalhei nos sistemas de audio e escuta do jogador para tornar o movimento legivel pelo som e permitir que os inimigos reajam a esses sons.',
                    nl: 'Digital Divinity is een stealth-horrorproject in Unity waarin ik het vijandsysteem ontwierp en implementeerde: van perceptie en besluitvorming tot beweging, zoeken, achtervolgen en het verslaan van de speler. Ik werkte ook aan de audio- en luister systemen zodat beweging hoorbaar wordt en vijanden daarop kunnen reageren.'
                }
            },
            {
                title: { en: 'Roguelike Action Platformer', pt: 'Plataforma Roguelike de Acao', nl: 'Roguelike Action Platformer' },
                description: { en: 'Unity • Roguelike systems', pt: 'Unity • Sistemas roguelike', nl: 'Unity • Roguelike systems' },
                content: { en: 'Replay-focused design with progression and challenge.', pt: 'Design focado em replay com progressao e desafio.', nl: 'Replay-gericht ontwerp met progressie en uitdaging.' },
                detailContent: {
                    en: 'This project combines platforming and roguelike progression. I worked on repeatable runs, risk/reward decisions, and pacing to keep sessions engaging.',
                    pt: 'Este projeto combina plataforma com progressao roguelike. Trabalhei em runs repetiveis, decisoes de risco/recompensa e ritmo para manter o jogo envolvente.',
                    nl: 'Dit project combineert platforming met roguelike progressie. Ik werkte aan herhaalbare runs, risk/reward-keuzes en pacing.'
                }
            },
            {
                title: { en: 'Vertical Slice', pt: 'Vertical Slice', nl: 'Vertical Slice' },
                description: { en: 'Unity • Production-ready segment', pt: 'Unity • Segmento pronto para producao', nl: 'Unity • Productieklare segment' },
                content: { en: 'A polished slice representing final game quality.', pt: 'Uma fatia polida representando qualidade final do jogo.', nl: 'Een gepolijste slice die eindkwaliteit representeert.' },
                detailContent: {
                    en: 'I built a vertical slice to validate quality, scope, and pipeline decisions. It served as a benchmark for visuals, mechanics, and production standards.',
                    pt: 'Criei um vertical slice para validar qualidade, escopo e decisoes de pipeline. Serviu como referencia para visual, mecanicas e padroes de producao.',
                    nl: 'Ik bouwde een vertical slice om kwaliteit, scope en pipeline-keuzes te valideren. Het diende als benchmark voor visuals, mechanics en productiestandaarden.'
                }
            }
        ]
    },
    {
        title: { en: 'Contact', pt: 'Contato', nl: 'Contact' },
        icon: 'mail',
        items: [
            {
                title: { en: 'Email', pt: 'Email', nl: 'Email' },
                description: { en: 'arthurhgarcia10@gmail.com', pt: 'arthurhgarcia10@gmail.com', nl: 'arthurhgarcia10@gmail.com' },
                content: { en: 'Best for collaborations and opportunities.', pt: 'Melhor canal para colaboracoes e oportunidades.', nl: 'Beste kanaal voor samenwerkingen en kansen.' },
                detailContent: {
                    en: 'Reach out at arthurhgarcia10@gmail.com for project opportunities, collaborations, or technical discussions. I am always open to building meaningful game experiences.',
                    pt: 'Entre em contato por arthurhgarcia10@gmail.com para oportunidades, colaboracoes ou discussoes tecnicas. Estou sempre aberto a criar experiencias de jogo significativas.',
                    nl: 'Neem contact op via arthurhgarcia10@gmail.com voor projecten, samenwerkingen of technische gesprekken. Ik sta altijd open om betekenisvolle game-ervaringen te bouwen.'
                }
            },
            {
                title: { en: 'GitHub', pt: 'GitHub', nl: 'GitHub' },
                description: { en: 'github.com/zmbfiedk', pt: 'github.com/zmbfiedk', nl: 'github.com/zmbfiedk' },
                content: { en: 'Open source code and project repositories.', pt: 'Codigo open source e repositorios de projetos.', nl: 'Open source code en projectrepositories.' },
                detailContent: {
                    en: 'GitHub: https://github.com/zmbfiedk\nExplore my game development and tooling repositories to see coding style, mechanics implementation, and iteration process.',
                    pt: 'GitHub: https://github.com/zmbfiedk\nVeja meus repositorios de desenvolvimento de jogos e ferramentas para acompanhar meu estilo de codigo e iteracao.',
                    nl: 'GitHub: https://github.com/zmbfiedk\nBekijk mijn repositories voor game development en tooling om mijn codestijl en iteratieproces te zien.'
                }
            },
            {
                title: { en: 'LinkedIn', pt: 'LinkedIn', nl: 'LinkedIn' },
                description: { en: 'linkedin.com/in/arthur-hgarcia-210810385', pt: 'linkedin.com/in/arthur-hgarcia-210810385', nl: 'linkedin.com/in/arthur-hgarcia-210810385' },
                content: { en: 'Professional profile.', pt: 'Perfil profissional.', nl: 'Professioneel profiel.' },
                detailContent: {
                    en: 'LinkedIn: https://www.linkedin.com/in/arthur-hgarcia-210810385/',
                    pt: 'LinkedIn: https://www.linkedin.com/in/arthur-hgarcia-210810385/',
                    nl: 'LinkedIn: https://www.linkedin.com/in/arthur-hgarcia-210810385/'
                }
            },
            {
                title: { en: 'Instagram', pt: 'Instagram', nl: 'Instagram' },
                description: { en: 'instagram.com/zmbfiedk_backup_', pt: 'instagram.com/zmbfiedk_backup_', nl: 'instagram.com/zmbfiedk_backup_' },
                content: { en: 'Creative profile.', pt: 'Perfil criativo.', nl: 'Creatief profiel.' },
                detailContent: {
                    en: 'Instagram: https://www.instagram.com/zmbfiedk_backup_/',
                    pt: 'Instagram: https://www.instagram.com/zmbfiedk_backup_/',
                    nl: 'Instagram: https://www.instagram.com/zmbfiedk_backup_/'
                }
            }
        ]
    }
];

menuData.sort((left, right) => {
    if (left.title.en === 'Projects') return -1;
    if (right.title.en === 'Projects') return 1;
    return 0;
});

const aboutCategory = menuData.find((category) => category.title.en === 'About Me');
const projectsCategory = menuData.find((category) => category.title.en === 'Projects');

if (projectsCategory) {
    const completedProjects = new Set([
        'Tower of Babel',
        'DoomLikeShooter',
        'TowerDefense',
        'Small C++ Games',
        'Fractured',
        'Digital Divinity'
    ]);
    projectsCategory.items = projectsCategory.items.filter((item) => completedProjects.has(item.title.en));
}

if (aboutCategory) {
    const aboutItems = aboutCategory.items;
    const localizedDetailContent = ['en', 'pt', 'nl'].reduce((content, language) => {
        content[language] = aboutItems
            .map((item) => item.detailContent[language])
            .join('\n\n');
        return content;
    }, {});

    aboutCategory.items = [{
        title: { en: 'Who I am', pt: 'Quem sou eu', nl: 'Wie ik ben' },
        description: {
            en: 'Gameplay and tool developer from Rio, based in Amsterdam',
            pt: 'Desenvolvedor de gameplay e ferramentas do Rio, vivendo em Amsterdam',
            nl: 'Gameplay- en toolontwikkelaar uit Rio, woonachtig in Amsterdam'
        },
        content: {
            en: 'A practical game developer who enjoys turning ideas into responsive, readable mechanics.',
            pt: 'Um desenvolvedor de jogos pratico que gosta de transformar ideias em mecanicas claras e responsivas.',
            nl: 'Een praktische game developer die graag ideeen omzet in duidelijke en responsieve mechanics.'
        },
        detailContent: localizedDetailContent
    }];
}

function isProjectsCategory(categoryIndex) {
    return menuData[categoryIndex]?.title.en === 'Projects';
}

// SVG Icons
const icons = {
    user: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/>',
    briefcase: '<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'
};

const itemIcons = {
    disk: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/>',
    folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    mail: '<rect width="18" height="14" x="3" y="5" rx="2"/><path d="m3 7 9 6 9-6"/>',
    github: '<path d="M12 2C6.48 2 2 6.48 2 12a10 10 0 0 0 6.84 9.49c.5.09.66-.22.66-.48v-1.68c-2.78.6-3.36-1.18-3.36-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.06-.61.06-.61 1 .08 1.52 1.03 1.52 1.03.88 1.5 2.3 1.06 2.85.82.09-.64.34-1.06.62-1.31-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.52 9.52 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.39.2 2.41.1 2.67.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.75c0 .26.17.57.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>',
    social: '<circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16.7 7.4l-5.4 3.2M11.3 13.4l5.4 3.2"/>',
    linkedin: '<path d="M5 8.5v10M5 5.5v.1M9 8.5v10m0-5.5a4.5 4.5 0 0 1 9 0v5.5m-9-10v2.5"/>',
    instagram: '<rect width="16" height="16" x="4" y="4" rx="4"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.5" cy="6.5" r="1"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 10v6"/><circle cx="12" cy="7" r="1"/>',
    book: '<path d="M4 6a2 2 0 0 1 2-2h12v16H6a2 2 0 0 1-2-2z"/><path d="M8 4v16"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="2"/>'
};

function getItemIconFor(catIdx, itemTitleEn) {
    if (isProjectsCategory(catIdx)) return itemIcons.disk;

    if (menuData[catIdx]?.title.en === 'Contact') {
        if (itemTitleEn === 'Email') return itemIcons.mail;
        if (itemTitleEn === 'GitHub') return itemIcons.github;
        if (itemTitleEn === 'LinkedIn') return itemIcons.linkedin;
        if (itemTitleEn === 'Instagram') return itemIcons.instagram;
        return itemIcons.social;
    }

    if (menuData[catIdx]?.title.en === 'About Me') {
        if (itemTitleEn === 'Introduction') return itemIcons.info;
        if (itemTitleEn === 'Education') return itemIcons.book;
        if (itemTitleEn === 'Work Experience') return itemIcons.briefcase;
        if (itemTitleEn === 'Technical Skills') return itemIcons.code;
        return itemIcons.target;
    }

    return itemIcons.info;
}

function getProjectPreviewPath(itemTitleEn) {
    const projectInfo = PROJECT_DETAIL_INFO[itemTitleEn];
    const caseStudy = projectInfo?.caseStudy;
    if (projectInfo?.coverPath) return projectInfo.coverPath;

    const firstDiagram = caseStudy?.diagrams?.[0];

    if (!caseStudy || !firstDiagram) return '';
    return `${caseStudy.imagePath || 'Files/Tower of babel/Images'}/${firstDiagram.file}`;
}

function updateProjectPreview(itemTitleEn) {
    const projectDisc = document.querySelector('.project-disc-image');
    const projectInfo = PROJECT_DETAIL_INFO[itemTitleEn];
    if (!projectDisc || !projectInfo) return;

    projectDisc.src = getProjectPreviewPath(itemTitleEn);
    projectDisc.alt = `${itemTitleEn} preview`;
}

function getProjectPreviewItems() {
    const projectsCategory = menuData.find((category) => category.title.en === 'Projects');
    return projectsCategory
        ? projectsCategory.items
            .map((item) => item.title.en)
            .filter((title) => getProjectPreviewPath(title))
        : [];
}

let hoveredProjectTitle = null;
let projectPreviewIndex = 0;

function setHoveredProject(itemTitleEn) {
    hoveredProjectTitle = itemTitleEn;
    updateProjectPreview(itemTitleEn);
}

function clearHoveredProject() {
    hoveredProjectTitle = null;
}

function cycleProjectPreview() {
    if (hoveredProjectTitle || document.getElementById('detailPage')?.classList.contains('visible')) return;

    const projectTitles = getProjectPreviewItems();
    if (projectTitles.length === 0) return;

    projectPreviewIndex = (projectPreviewIndex + 1) % projectTitles.length;
    updateProjectPreview(projectTitles[projectPreviewIndex]);
}

function startProjectPreviewCycle() {
    window.setInterval(cycleProjectPreview, 3500);
}

function getProjectStatus(itemTitleEn) {
    return PROJECT_DETAIL_INFO[itemTitleEn]?.status || '';
}

// Original detailed project information + GitHub links
const PROJECT_DETAIL_INFO = {
    'Tower of Babel': {
        github: 'https://github.com/zmbfiedk/BO1.4/tree/dev',
        status: 'finished',
        coverPath: 'Files/Tower of babel/Images/StartScreen/M4BO_Startscreen.png',
        detailed: 'Sprint 0 - Game Design Document : Tower Of Babel\n\nNaam: Rubin\nKlas: GD1B\nDatum: 13/04/2026\n\n1. Titel en elevator pitch\n\nTitel: Tower Of Babel\n\nElevator pitch (maximaal twee zinnen):\nTower Of Babel is a wave-based hack and slash game where players fight increasingly stronger enemies. Every 10 waves both the enemies and the player become stronger, creating a scaling challenge.\n\n2. Wat maakt jouw game uniek\n\nThe game focuses on precise combat mechanics like dodge rolls, sprinting, and a 2-step combat system. Combined with multiple weapons, the player is constantly adapting their playstyle.\n\n3. Scope\nWave-based combat system\n3 weapons\nMultiple enemy types\nBoss at wave 50\nSimple arena level\n4. Mechanics\nCombat system (attack, parry, dodge)\nStamina system\nWeapon switching\nEnemy AI\nWave system\n5. Gameplay loop\nFight enemies\nAvoid damage\nDefeat wave\nGain strength\nRepeat\nDefeat boss\n6. Progressie\nEvery 10 waves:\nPlayer damage increases\nEnemies scale in strength\n7. Risico\'s en oplossingen\nBalancing issues -> playtesting\nCombat too hard -> adjust stamina/damage\nScaling too extreme -> tune values\n8. Planning\nSprint 1: Core combat\nSprint 2: Enemy systems\nSprint 3: Weapons\nSprint 4: Progression\nSprint 5: Boss\nSprint 6: Polish\n9. Inspiratie\nHack and slash games\nWave survival games\n10. Technisch ontwerp mini\nCombat system -> input + cooldowns\nEnemy AI -> state system\nWaves -> spawn system',
        caseStudy: {
            intro: 'A wave-based hack-and-slash prototype built around precise combat, escalating pressure, and readable enemy systems.',
            stats: [
                { value: '50', label: 'Boss wave' },
                { value: '10', label: 'Wave scaling interval' },
                { value: '3', label: 'Weapons in scope' }
            ],
            sections: [
                {
                    title: 'Core loop',
                    text: 'Fight enemies, avoid damage, defeat the wave, grow stronger, and repeat until the boss encounter. Dodge rolls, sprinting, parrying, and weapon switching keep each wave active and reactive.'
                },
                {
                    title: 'Systems focus',
                    text: 'The design connects player control, enemy states, damage flow, spawning, wave progression, and boss behavior into a readable combat framework that can be tuned through playtesting.'
                },
                {
                    title: 'Progression & risks',
                    text: 'Every 10 waves, player damage and enemy strength increase. The main balancing risks are combat becoming too demanding or scaling becoming too extreme, addressed through stamina, damage, and pacing adjustments.'
                },
                {
                    title: 'Combat identity',
                    text: 'Tower of Babel is designed as a precise hack-and-slash experience. The player reads enemy tells, chooses between attacking, parrying, or dodging, and manages stamina so every decision has a cost.'
                },
                {
                    title: 'Enemy roles',
                    text: 'Different enemy types create layered pressure: melee enemies contest space, ranged enemies punish predictable movement, and the boss changes behavior based on distance and attack timing.'
                },
                {
                    title: 'Production plan',
                    text: 'The project is organized into six focused sprints: core combat, enemy systems, weapons, progression, boss implementation, and polish. Playtesting drives balance decisions throughout the process.'
                }
            ],
            codeSnippets: [
                {
                    title: 'Player movement + stamina',
                    language: 'C#',
                    source: 'Move.cs',
                    explanation: 'Reads four-direction input, normalizes movement, changes speed while sprinting, and drains stamina without allowing it to become negative.',
                    code: 'void HandleMovement()\n{\n    float horizontal = Input.GetAxisRaw("Horizontal");\n    float vertical = Input.GetAxisRaw("Vertical");\n    moveDirection = new Vector2(horizontal, vertical).normalized;\n\n    if (Input.GetKey(KeyCode.LeftShift) && stamina > 0)\n    {\n        currentSpeed = sprintSpeed;\n        stamina -= staminaDrain * Time.deltaTime;\n    }\n\n    stamina = Mathf.Clamp(stamina, 0f, 100f);\n    rb.velocity = moveDirection * currentSpeed;\n}'
                },
                {
                    title: 'Dodge routine',
                    language: 'C#',
                    source: 'Move.cs',
                    explanation: 'Temporarily disables the player collider during a short dash, making dodging an escape tool rather than a permanent movement state.',
                    code: 'IEnumerator DodgeRoutine()\n{\n    isDodging = true;\n    BC2D.enabled = false;\n    currentSpeed = dashSpeed;\n    yield return new WaitForSeconds(0.05f);\n    currentSpeed = moveSpeed;\n    BC2D.enabled = true;\n    isDodging = false;\n}'
                },
                {
                    title: 'Melee attack window',
                    language: 'C#',
                    source: 'EnemyMeleeAttack.cs',
                    explanation: 'Matches the damage hitbox to the animation timing, so the enemy can only damage the player during the active attack window.',
                    code: 'private IEnumerator AttackRoutine()\n{\n    canAttack = false;\n    animator.SetTrigger("Attack");\n    attackHitbox.enabled = true;\n    yield return new WaitForSeconds(attackDuration);\n    attackHitbox.enabled = false;\n    yield return new WaitForSeconds(attackCooldown);\n    canAttack = true;\n}'
                },
                {
                    title: 'Wave event counting',
                    language: 'C#',
                    source: 'WaveCheckerN.cs',
                    explanation: 'Connects spawn and death events to the wave manager, allowing progression counters to update without searching for every enemy each frame.',
                    code: 'void Start()\n{\n    EnemySpawnerN.OnEnemySpawn += CountEnemy;\n    Takedamage.onDeath += OnEnemyDeath;\n}\n\nprivate void CountEnemy()\n{\n    enemyAmmount++;\n    enemiesSpawnedThisWave++;\n}'
                }
            ],
            diagrams: [
                { file: '01-system-overview.png', title: 'System overview', caption: 'How the core managers and combat systems connect.' },
                { file: '02-player-control.png', title: 'Player control', caption: 'The input and state flow behind movement and combat.' },
                { file: '03-enemy-comparison.png', title: 'Enemy comparison', caption: 'Contrasting enemy roles, pressure, and behavior.' },
                { file: '04-enemy-melee-timeline.png', title: 'Melee enemy timeline', caption: 'A readable sequence for close-range enemy attacks.' },
                { file: '05-ranged-line-of-sight.png', title: 'Ranged line of sight', caption: 'The decision flow for ranged enemy targeting.' },
                { file: '06-enemy-damage-flow.png', title: 'Enemy damage flow', caption: 'Damage processing from hit detection to enemy response.' },
                { file: '07-spawner-pipeline.png', title: 'Spawner pipeline', caption: 'How enemy spawning is prepared, executed, and tracked.' },
                { file: '08-wave-lifecycle.png', title: 'Wave lifecycle', caption: 'The full lifecycle from wave start to completion.' },
                { file: '09-boss-distance-states.png', title: 'Boss distance states', caption: 'Boss behavior changes based on distance to the player.' },
                { file: '10-boss-attack-timeline.png', title: 'Boss attack timeline', caption: 'Telegraphed boss attacks create windows for response.' },
                { file: '11-boss-health-ui.png', title: 'Boss health UI', caption: 'A focused health presentation for the final encounter.' },
                { file: '12-normal-vs-boss-wave.png', title: 'Normal vs boss wave', caption: 'A comparison of regular wave pressure and boss pacing.' }
            ]
        }
    },
    'DoomLikeShooter': {
        github: 'https://github.com/zmbfiedk/doomshooter-CPP',
        status: 'unfinished',
        detailed: 'DoomLikeShooter\n\nProject snapshot\nA small, understandable first-person rendering prototype built with C++ and SFML 2.x. The project focuses on the underlying systems instead of a large content pipeline.\n\nCore systems\n- Grid-based map validation and collision-aware movement\n- Camera-space ray generation and DDA grid traversal\n- Per-column wall projection with distance and surface-orientation shading\n- Weapon selection, sprite rendering, fire-rate control, and procedural muzzle flash feedback\n\nProject goals\n- Represent an editable level as a simple grid\n- Convert player position and rotation into camera rays\n- Traverse the grid until each ray finds a wall\n- Turn wall distance into screen height and brightness\n- Keep each system small enough to understand, debug, and extend\n\nTechnology\n- C++\n- SFML 2.x\n- Visual Studio 2022\n- MSVC v143\n- x64 Windows build configuration',
        caseStudy: {
            intro: 'A compact raycasting first-person shooter prototype that exposes the rendering, movement, collision, and weapon systems behind the experience.',
            stats: [
                { value: 'C++', label: 'Core language' },
                { value: 'DDA', label: 'Ray traversal' },
                { value: 'SFML', label: 'Window and rendering layer' }
            ],
            sections: [
                {
                    title: 'Rendering pipeline',
                    text: 'The camera combines the player forward direction with a camera plane to generate one ray per screen column. DDA grid traversal finds wall intersections, then distance and surface orientation determine each projected wall strip.'
                },
                {
                    title: 'Movement and collision',
                    text: 'The map validates rows, tiles, and the player start before gameplay begins. The player is treated as a circle, while horizontal and vertical movement are resolved separately to produce reliable wall sliding without corner clipping.'
                },
                {
                    title: 'Interaction layer',
                    text: 'A playable loop sits on top of the renderer: keyboard input updates movement and rotation, shooting uses fire-rate timing, weapon selection changes the held sprite, and a procedural muzzle flash gives firing immediate feedback.'
                }
            ],
            codeSnippets: [
                {
                    title: 'Camera ray generation',
                    language: 'C++',
                    source: 'Raycaster::CastRay',
                    explanation: 'Builds a ray from player direction, camera plane, and horizontal screen position before stepping through the map.',
                    code: 'const float cameraX = 2.0f * screenX / screenWidth - 1.0f;\nconst float rayDirectionX = directionX + planeX * cameraX;\nconst float rayDirectionY = directionY + planeY * cameraX;'
                },
                {
                    title: 'Collision-aware movement',
                    language: 'C++',
                    source: 'Player::TryMove',
                    explanation: 'Checks the proposed position against the map before applying movement, keeping the player from clipping through blocking tiles.',
                    code: 'void Player::TryMove(float deltaX, float deltaY)\n{\n    const float newX = m_x + deltaX;\n    const float newY = m_y + deltaY;\n\n    if (m_map.CanOccupy(newX, newY, m_radius))\n    {\n        m_x = newX;\n        m_y = newY;\n    }\n}'
                },
                {
                    title: 'DDA grid stepping',
                    language: 'C++',
                    source: 'Raycaster::CastRay',
                    explanation: 'Advances to the nearest vertical or horizontal grid boundary until the ray reaches a non-walkable tile.',
                    code: 'for (int steps = 0; steps < maximumSteps; ++steps)\n{\n    if (sideDistanceX < sideDistanceY)\n    {\n        sideDistanceX += deltaDistanceX;\n        mapX += stepX;\n        verticalWall = true;\n    }\n    else\n    {\n        sideDistanceY += deltaDistanceY;\n        mapY += stepY;\n        verticalWall = false;\n    }\n}'
                }
            ],
            imagePath: 'Files/DoomLikeShooterC++/Images',
            diagrams: [
                { file: '01-title-identity.png', title: 'Title identity', caption: 'The project identity for the raycasting shooter.' },
                { file: '02-map-to-space.png', title: 'Map to space', caption: 'A grid map becomes navigable first-person space.' },
                { file: '03-movement-collision.png', title: 'Movement and collision', caption: 'Circle-based collision keeps movement grounded in the map.' },
                { file: '04-dda-traversal.png', title: 'DDA traversal', caption: 'Grid stepping finds wall intersections efficiently.' },
                { file: '05-column-rendering.png', title: 'Column rendering', caption: 'Wall hits become vertical screen columns.' },
                { file: '06-weapon-selection.png', title: 'Weapon selection', caption: 'Weapon selection adds interaction to the renderer.' },
                { file: '07-muzzle-flash.png', title: 'Muzzle flash', caption: 'Procedural firing feedback reinforces the weapon response.' },
                { file: '08-closing-hero.png', title: 'Closing view', caption: 'The complete prototype brings the systems together.' }
            ]
        }
    },
    'TowerDefense': {
        github: 'https://github.com/zmbfiedk/Tower-Defense',
        status: 'finished',
        detailed: 'Sprint 0 - Game Design Document: Dragon Defense\nName: Arthur | Class: GD1B | Date: 08/09/2025\n\nDragon Defense is a tower defense game designed to avoid repetitive meta play. Every 10 waves the towers must be swapped, forcing strategic adaptation.\n\nFull project info:\n- 6 tower archetypes: Fast, Slow, Long Range, Short Range, Freeze, Flame\n- 5 enemy types + boss waves every 10 rounds\n- Dynamic progression: HP +10% per wave, speed +5% per wave, reward scaling\n- Grid-based placement and waypoint pathing system\n- Economy loop with building, upgrades, and strategic replacement\n\nTechnical process:\n- Sprint 1-5 roadmap from core loop to polish and boss logic\n- Event-driven architecture connecting Player, Tower, Enemy, Wave, UI, and Music managers\n- Dedicated balancing cycles for tower identity, enemy pressure, and fairness',
        caseStudy: {
            intro: 'A tactical tower defense prototype built around forced adaptation, readable placement rules, and wave systems that keep the player changing their strategy.',
            stats: [
                { value: '10', label: 'Wave tower swap' },
                { value: '6', label: 'Tower archetypes' },
                { value: '5 + boss', label: 'Enemy roles' }
            ],
            sections: [
                {
                    title: 'Core loop',
                    text: 'Earn gold, place towers on valid grid cells, survive incoming enemies, and reinvest rewards into upgrades or replacement towers. Every tenth wave forces a new tower selection so one dominant build cannot carry the entire run.'
                },
                {
                    title: 'Tower identity',
                    text: 'Fast, Slow, Long Range, Short Range, Freeze, and Flame towers create distinct answers to enemy pressure. Their costs, ranges, and effects give placement and replacement decisions a clear strategic tradeoff.'
                },
                {
                    title: 'Enemy pressure',
                    text: 'Enemy roles are designed to challenge different parts of the defense. Regular waves build pressure through varied movement and durability, while boss waves every ten rounds create a stronger test of preparation and economy.'
                },
                {
                    title: 'Adaptive progression',
                    text: 'Enemy health increases by 10 percent per wave and speed increases by 5 percent. Rewards scale with the challenge so the economy keeps pace while still making missed placements and poor upgrades costly.'
                },
                {
                    title: 'Pathing and placement',
                    text: 'Enemies follow waypoint paths toward the base, while the grid validates tower placement before a build is accepted. This keeps the battlefield legible and makes range coverage, blocked cells, and route pressure visible to the player.'
                },
                {
                    title: 'Event-driven architecture',
                    text: 'Player, Tower, Enemy, Wave, UI, and Music managers communicate through gameplay events. Spawning, enemy deaths, wave completion, purchases, upgrades, and boss transitions can therefore be tuned without tightly coupling every system.'
                }
            ],
            codeSnippets: [
                {
                    title: 'Wave event tracking',
                    language: 'C#',
                    source: 'WaveManager.cs',
                    explanation: 'Uses spawn and death events to track the active wave without searching the scene for every enemy each frame.',
                    code: 'private void OnEnable()\n{\n    EnemySpawner.OnEnemySpawn += HandleEnemySpawn;\n    Enemy.OnEnemyDefeated += HandleEnemyDefeated;\n}\n\nprivate void HandleEnemyDefeated(Enemy enemy)\n{\n    activeEnemies--;\n    if (activeEnemies == 0 && spawnQueue.Count == 0)\n        CompleteWave();\n}'
                },
                {
                    title: 'Adaptive enemy scaling',
                    language: 'C#',
                    source: 'DifficultySettings.cs',
                    explanation: 'Applies the documented health and speed progression so later waves increase pressure in predictable steps.',
                    code: 'float waveMultiplier = Mathf.Pow(1.10f, waveNumber - 1);\nfloat speedMultiplier = Mathf.Pow(1.05f, waveNumber - 1);\n\nenemy.maxHealth *= waveMultiplier;\nenemy.moveSpeed *= speedMultiplier;\nenemy.reward = baseReward + waveNumber * rewardStep;'
                },
                {
                    title: 'Waypoint movement',
                    language: 'C#',
                    source: 'EnemyPath.cs',
                    explanation: 'Moves each enemy through the shared waypoint route and signals the base when the final point is reached.',
                    code: 'void Update()\n{\n    Transform target = waypoints[currentWaypoint];\n    transform.position = Vector3.MoveTowards(\n        transform.position, target.position, moveSpeed * Time.deltaTime);\n\n    if (Vector3.Distance(transform.position, target.position) < 0.05f)\n        AdvanceToNextWaypoint();\n}'
                }
            ],
            imagePath: 'Files/TowerDefense',
            diagrams: [
                { file: 'dragon-defense-sheet.png', title: 'Dragon Defense systems sheet', caption: 'Battlefield layout, placement validation, wave events, adaptive difficulty, waypoint pathing, tower and enemy roles, and the WaveManager reference in one design overview.' }
            ]
        }
    },
    'Godot Game': {
        github: '#',
        detailed: 'Godot Game is an engine exploration project focused on transferring design and systems thinking across engines.\n\nProcess focus:\n- Evaluate scene architecture and GDScript workflow\n- Compare scripting and iteration speed vs Unity pipelines\n- Build fast vertical tests to evaluate mechanics and feedback\n- Document reusable patterns for future multi-engine development'
    },
    'Small C++ Games': {
        github: 'https://github.com/zmbfiedk/Shipgame',
        status: 'unfinished',
        coverPath: 'Files/C++ small games/StartScreen/cover.png',
        detailed: 'Sprint 0 - Game Design Document : Small C++ Games\n\nName: Arthur\nClass: GD1B\nDate: 13/04/2026\n\nSmall C++ Games is a collection of small terminal-based games made to improve C++ skills. The current Shipgame prototype behaves like a two-paddle Pong game and focuses on input, vector-based ball physics, collision response, scoring, and rendering in the Windows console.\n\nThe project is structured around small, readable classes instead of an engine: Main owns the loop and frame composition, Ball owns movement and bounce response, Player and Enemy represent the paddles, Border defines the playfield, and Scoreboard handles score output. The game reads keyboard input, updates the simulation, builds a character grid, and renders the complete frame at approximately 60 ms intervals.\n\nThe broader collection is planned to grow from simple movement systems into platformer and racing prototypes, increasing the complexity one focused system at a time.',
        caseStudy: {
            intro: 'A compact C++ Windows console arcade prototype that makes the fundamentals of real-time game programming visible: input, physics, collision response, scoring, and terminal rendering.',
            stats: [
                { value: 'C++', label: 'Language' },
                { value: '60 ms', label: 'Target frame step' },
                { value: '50 x 14', label: 'Playfield cells' }
            ],
            sections: [
                {
                    title: 'A readable game loop',
                    text: 'Main reads all available keyboard input, updates the ball, handles scoring and serve resets, composes the current character grid, and renders the complete frame. Keeping those stages explicit makes the runtime easy to inspect and extend.'
                },
                {
                    title: 'Paddle-driven physics',
                    text: 'The ball stores floating-point coordinates and velocity, then maps them to grid cells only for collision queries and display. The paddle segment that is hit determines the bounce angle, while acceleration is normalized and capped to keep rallies controllable.'
                },
                {
                    title: 'Small responsibilities',
                    text: 'Player and Enemy handle paddle geometry and bounds, Border draws the arena, and Scoreboard renders the score. Ball receives these objects as read-only game state, keeping world ownership in Main and physics decisions inside Ball.'
                },
                {
                    title: 'Collision and scoring',
                    text: 'Ball::update checks border reflection first, then the paddle matching the current horizontal direction, and finally whether the ball has left the arena. A score resets the ball state and alternates the serve direction.'
                },
                {
                    title: 'Console rendering pipeline',
                    text: 'Rendering starts with an empty vector of strings, places paddles and ball into the grid, adds the border and score line, and writes the assembled frame in one operation. This keeps terminal output deterministic and avoids scattered cursor updates.'
                },
                {
                    title: 'Collection roadmap',
                    text: 'Ship is complete and Pong is the current implementation focus. Terminal Arcade remains unfinished. Car Dodge and Tetris are planned next, with each small game adding a new movement, collision, or game-loop challenge without losing the project’s focused scope.'
                },
                {
                    title: 'To-do list',
                    text: 'Finished: Shipgame. In progress: Pong and Terminal Arcade. To do: Car Dodge and Tetris. The collection is developed independently as my solo project outside of course and college work.'
                }
            ],
            codeSnippets: [
                {
                    title: 'Segment-based paddle bounce',
                    language: 'C++',
                    source: 'Player.cpp',
                    explanation: 'Maps the impact segment on a seven-cell paddle to a readable bounce angle while safely handling invalid collision indices.',
                    code: 'int Player::getBounceAngle(int segmentIndex) const\n{\n    if (segmentIndex < 0 || segmentIndex >= shapeHeight)\n        return 0;\n\n    const int middleIndex = shapeHeight / 2;\n    return (segmentIndex - middleIndex) * 15;\n}'
                },
                {
                    title: 'Capped ball acceleration',
                    language: 'C++',
                    source: 'Ball.cpp',
                    explanation: 'Preserves the direction of travel while increasing speed predictably and preventing the rally from becoming uncontrollable.',
                    code: 'void Ball::applyAcceleration()\n{\n    speed *= kAcceleration;\n    speed = std::min(speed, kMaxSpeed);\n\n    normalize(velocityX, velocityY);\n    velocityX *= speed;\n    velocityY *= speed;\n}'
                },
                {
                    title: 'Frame composition',
                    language: 'C++',
                    source: 'Main.cpp',
                    explanation: 'Builds a complete frame from data before writing it to the console, keeping game state and presentation separate.',
                    code: 'std::vector<std::string> frame(height,\n    std::string(width, \' \'));\n\nplayer.draw(frame);\nenemy.draw(frame);\nball.draw(frame);\nborder.draw(frame);\nscoreboard.draw(frame);\n\nrenderFrame(frame);'
                }
            ],
            imagePath: 'Files/C++ small games',
            diagrams: [
                {
                    file: 'shipgame-terminal-sheet.png',
                    title: 'Shipgame terminal prototype',
                    caption: 'The console playfield, paddle-and-ball interaction, controls, and the class responsibilities behind the current Windows prototype.'
                },
                {
                    file: 'Pong-sheet.png',
                    title: 'Pong systems sheet',
                    caption: 'The Pong-focused view of input, vector movement, paddle collision, scoring, reset behavior, and the real-time game loop.'
                }
            ]
        }
    },
    'Fractured': {
        github: 'https://github.com/MrRaven55/CheeseHeist',
        status: 'finished',
        coverPath: 'Files/Fractured/StartScreen/Start_Screen2.png',
        detailed: 'Fractured is a Unity physics game built around launching a player character through an interactive environment. I implemented the player controller and the main destruction interactions: breaking walls and shattering glass.\n\nMy contribution\n- Built the player launch mechanic using a drag-and-release slingshot interaction.\n- Converted screen-space mouse input into a world-space position using a camera ray and horizontal plane.\n- Added launch force clamping, air drag, rest detection, and re-arming of the player.\n- Added a lives system connected to the GameManager UI.\n- Implemented player death, including a final launch impulse, audio, collider shutdown, and delayed destruction.\n- Built impact-based wall destruction using a configurable collision-speed threshold.\n- Implemented glass shattering by switching child glass fragments from kinematic to dynamic rigidbodies.\n- Added sound effects to launching, death, wall breaking, and glass breaking.\n\nTechnical approach\nThe player remains kinematic while aiming, then receives a clamped velocity change on release. Walls use pre-fractured pieces that stay kinematic until impact speed crosses a threshold. Glass uses the same authored-fragment approach but breaks immediately on player collision. State guards prevent repeated launches, death events, and wall breaks.\n\nPortfolio summary\nI designed and implemented a physics-driven interaction loop combining input handling, camera-to-world projection, Rigidbody forces, collision analysis, state management, audio feedback, and UI integration. The goal was to make the physics readable: pull distance affects launch power, impact speed determines whether a wall breaks, and released fragments make destruction visible and tactile.',
        caseStudy: {
            intro: 'A physics-driven interaction system where the player launches through the level and uses momentum to interact with destructible environments.',
            stats: [
                { value: 'Unity 6.2', label: 'Engine' },
                { value: '3', label: 'Core systems' },
                { value: 'C#', label: 'Language' }
            ],
            sections: [
                {
                    title: 'Player launch system',
                    text: 'A drag-and-release slingshot converts screen-space input into a world-space position on a horizontal plane. Pull distance is clamped, launch force is capped, and the player is only re-armed after linear and angular motion remain below rest thresholds.'
                },
                {
                    title: 'Impact-based wall breaking',
                    text: 'Pre-fractured wall pieces remain kinematic while intact. When collision speed crosses a configurable threshold, the pieces become dynamic, receive explosion force from the impact point, and the main collider is disabled.'
                },
                {
                    title: 'Glass shatter interaction',
                    text: 'Player collision releases authored glass fragments by switching their rigidbodies from kinematic to dynamic and enabling gravity. The immediate response gives glass a different gameplay identity from threshold-based wall destruction.'
                },
                {
                    title: 'State and feedback',
                    text: 'Launch, death, wall break, and glass break each connect to audio feedback. Lives are routed through GameManager, while state guards prevent repeated launches, duplicate breaks, and input after death.'
                },
                {
                    title: 'Technical decisions',
                    text: 'Kinematic fragments avoid unnecessary physics simulation while objects are intact. Configurable Inspector fields expose stretch, force, thresholds, explosion radius, audio volume, and destruction delay for fast balancing.'
                },
                {
                    title: 'My contribution',
                    text: 'I designed and implemented the player launch controller, lives and death behavior, impact-based wall breaking, glass shattering, Rigidbody state changes, and interaction audio feedback.'
                }
            ],
            codeSnippets: [
                {
                    title: 'Player launch force',
                    language: 'C#',
                    source: 'PlayerControls',
                    explanation: 'Clamps pull distance and launch force so player input stays readable and predictable for level design.',
                    code: 'Vector3 launchDirection =\n    (slingshotAnchor - transform.position).normalized;\nfloat calculatedForce = pullMagnitude * launchForceMultiplier * speed;\nfloat finalForce = Mathf.Min(calculatedForce, maxLaunchForce);\nrb.AddForce(launchDirection * finalForce, ForceMode.VelocityChange);'
                },
                {
                    title: 'Impact-based wall breaking',
                    language: 'C#',
                    source: 'WallBreaker',
                    explanation: 'Only releases wall fragments when the collision is fast enough to cross the configured break threshold.',
                    code: 'float impactSpeed = collision.relativeVelocity.magnitude;\nif (impactSpeed >= breakSpeedThreshold)\n{\n    Vector3 impactPoint = collision.contacts[0].point;\n    Break(impactPoint);\n}'
                },
                {
                    title: 'Glass shatter interaction',
                    language: 'C#',
                    source: 'GlassBreaker',
                    explanation: 'Player collision releases the authored glass pieces and disables the intact collider for an immediate break response.',
                    code: 'if (!collision.gameObject.CompareTag("Player"))\n    return;\n\nforeach (Rigidbody piece in GlassPieces)\n{\n    piece.isKinematic = false;\n    piece.useGravity = true;\n}\nCollider.enabled = false;'
                }
            ],
            imagePath: 'Files/Fractured',
            diagrams: [
                { file: 'fracturedih-portfolio-sheet.png', title: 'Physics and destruction systems', caption: 'The complete project overview: player launch, impact-based wall breaking, glass shattering, technical decisions, and contribution.' }
            ]
        }
    },
    'Digital Divinity': {
        github: 'https://github.com/BAStudio/NeoNTeamA2026',
        status: 'finished',
        detailed: 'Digital Divinity is a stealth-horror Unity project focused on enemy perception, player traversal, audio feedback, and tension.\n\nMy contribution\n- Designed and implemented enemy perception using vision, hearing, camera signals, detection meters, and memory.\n- Built the enemy state flow from patrol and alert through stalking, chase, and search behavior.\n- Implemented player movement states including sprinting, crouching, jumping, climbing, ledge grabbing, and mantling.\n- Connected player movement to footsteps, sound stimuli, enemy hearing, detection, and danger music.\n\nThe visual sheets document the gameplay systems and the way they connect into a readable stealth loop.',
        caseStudy: {
            intro: 'A stealth-horror systems project built around readable enemy perception, traversal choices, and an audio loop that turns player movement into tension.',
            stats: [
                { value: '5', label: 'Enemy behavior states' },
                { value: '7', label: 'Movement actions' },
                { value: '4', label: 'Visual system sheets' }
            ],
            sections: [
                {
                    title: 'Enemy perception',
                    text: 'Vision, hearing, camera signals, and the detection meter feed a shared stimulus and memory layer. Sounds and sightings raise awareness and provide an investigation position instead of teleporting the enemy directly to the player.'
                },
                {
                    title: 'Behavior state machine',
                    text: 'Enemy behavior progresses from patrol to alert, stalking, chase, and search as detection strength changes. When the player is lost, the enemy uses the last known position and recent movement direction to search before returning to patrol.'
                },
                {
                    title: 'Player traversal',
                    text: 'Normal movement, sprinting, crouching, jumping, wall climbing, ledge grabbing, and mantling share readable state transitions. Ray checks identify climbable surfaces and a shared stamina bar limits traversal without making it feel arbitrary.'
                },
                {
                    title: 'Audio and tension',
                    text: 'Movement drives footsteps with cadence, pitch, volume, distance falloff, and wall occlusion. Those sound stimuli reach enemy hearing and detection, while the detection level crossfades normal music into danger music.'
                },
                {
                    title: 'Systems integration',
                    text: 'The project connects player control, traversal, audio generation, enemy sensing, state management, and feedback into one stealth loop. Each system exposes a clear signal that can be tuned independently during iteration.'
                }
            ],
            codeSnippets: [
                {
                    title: 'Enemy sound stimulus',
                    language: 'C#',
                    source: 'EnemyAI.cs',
                    explanation: 'Converts a sound event into detection and memory instead of directly forcing a chase.',
                    code: 'float stimulus = hearingSystem.CalculateStimulus(source, volume01);\\ndetectionMeter.AddDetection(stimulus);\\nlastKnownPosition = source;\\nstateManager.RegisterPlayerPosition(source);'
                },
                {
                    title: 'Detection state',
                    language: 'C#',
                    source: 'EnemyAI.cs',
                    explanation: 'Uses detection thresholds to move the enemy through increasingly committed behavior states.',
                    code: 'if (detection >= maxDetection * chaseThresholdPercent)\\n    stateManager.EnterChase();\\nelse if (detection >= maxDetection * stalkingThresholdPercent)\\n    stateManager.EnterStalking();\\nelse\\n    stateManager.EnterAlert();'
                },
                {
                    title: 'Traversal state',
                    language: 'C#',
                    source: 'WallClimbing.cs',
                    explanation: 'Starts a ledge grab only when the chest finds a wall and the head ray is clear, then drains traversal stamina.',
                    code: 'if (chestHit && !headHit && TryStartLedgeGrab(wallHit))\\n    return;\\n\\nplayerStamina.ConsumeStamina(\\n    climbStaminaDrain * Time.fixedDeltaTime);'
                },
                {
                    title: 'Footstep cadence',
                    language: 'C#',
                    source: 'FootstepAudioGenerator.cs',
                    explanation: 'Triggers footsteps based on distance travelled so sound remains consistent across different movement speeds.',
                    code: 'distanceAccumulated += frameDistance;\\nwhile (distanceAccumulated >= strideDistance)\\n{\\n    distanceAccumulated -= strideDistance;\\n    PlayFootstep(speed01);\\n}'
                }
            ],
            imagePath: 'Files/DigitalDivinity/Images',
            diagrams: [
                { file: '01-enemy-perception-loop.png', title: 'Enemy perception loop', caption: 'How vision, hearing, camera signals, detection, and memory inform enemy decisions.' },
                { file: '02-enemy-behaviour-state-machine.png', title: 'Enemy behavior state machine', caption: 'The progression from patrol to alert, stalking, chase, and search.' },
                { file: '03-player-movement-traversal.png', title: 'Player movement and traversal', caption: 'Movement states, climbing checks, ledge grabbing, mantling, and stamina.' },
                { file: '04-player-audio-enemy-listening.png', title: 'Player audio and enemy listening', caption: 'How footsteps become sound stimuli, detection, and danger music.' }
            ]
        }
    },
    'Roguelike Action Platformer': {
        github: 'https://github.com/zmbfiedk/RogueLikeActionPlatformer',
        detailed: 'This project explores a side-scroller roguelike inspired by Hollow Knight and Dead Cells, combining precise action-platformer controls with procedural progression.\n\nTechnical focus:\n- Responsive character controller with deterministic movement\n- Air/ground state handling and dash behavior\n- Enemy AI patterns and scalable challenge\n- Procedural level generation experiments\n- Combat readability, knockback, and game feel refinement'
    },
    'Vertical Slice': {
        github: 'https://github.com/zmbfiedk/Vertical-Slice2.0',
        detailed: 'Vertical Slice centers on transform-based deterministic physics for precise character gameplay without relying on Rigidbody-driven behavior.\n\nImplemented systems:\n- Explicit velocity integration and gravity tuning\n- Capsule cast collision checks with safe movement buffers\n- Ground detection and overlap resolution\n- Force/impulse application and knockback falloff\n- Controller architecture intended for action game responsiveness'
    }
};

function normalizeDetailTextToEnglish(text) {
    if (!text) return text;

    return text
        .replaceAll('Naam:', 'Name:')
        .replaceAll('Klas:', 'Class:')
        .replaceAll('Datum:', 'Date:')
        .replaceAll('1. Titel en elevator pitch', '1. Title and elevator pitch')
        .replaceAll('Titel:', 'Title:')
        .replaceAll('Elevator pitch (maximaal twee zinnen):', 'Elevator pitch (maximum two sentences):')
        .replaceAll('2. Wat maakt jouw game uniek', '2. What makes your game unique')
        .replaceAll('2. Wat maakt jouw project uniek', '2. What makes your project unique')
        .replaceAll('6. Progressie', '6. Progression')
        .replaceAll("7. Risico's en oplossingen", '7. Risks and solutions')
        .replaceAll('9. Inspiratie', '9. Inspiration')
        .replaceAll('10. Technisch ontwerp mini', '10. Mini technical design');
}

function getProjectDetailText(projectInfo) {
    if (!projectInfo) return '';

    const rawDetailed = typeof projectInfo.detailed === 'object'
        ? (projectInfo.detailed[currentLanguage] || projectInfo.detailed.en || '')
        : projectInfo.detailed;

    // Keep project docs consistently in English while preserving language switch for UI labels.
    return normalizeDetailTextToEnglish(rawDetailed || '');
}

function renderProjectCaseStudy(detailPageContent, caseStudy) {
    detailPageContent.classList.add('project-case-study');
    const renderCodeCard = (snippet) => `
        <article class="code-card">
            <div class="code-card-header">
                <strong>${snippet.title}</strong>
                <span>${snippet.source}</span>
                <button class="media-expand-button" type="button" data-viewer-type="code" aria-label="Open ${snippet.title} fullscreen" title="Open fullscreen">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H3v5M16 3h5v5M21 16v5h-5M3 16v5h5"/></svg>
                </button>
            </div>
            <p class="code-card-explanation">${snippet.explanation}</p>
            <pre><code>${snippet.code}</code></pre>
        </article>
    `;
    const renderDiagramCard = (diagram) => `
        <figure class="diagram-card">
            <div class="diagram-image-wrap">
                <img src="${caseStudy.imagePath || 'Files/Tower of babel/Images'}/${diagram.file}" alt="${diagram.title}" loading="lazy">
                <button class="media-expand-button" type="button" data-viewer-type="diagram" aria-label="Open ${diagram.title} fullscreen" title="Open fullscreen">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H3v5M16 3h5v5M21 16v5h-5M3 16v5h5"/></svg>
                </button>
            </div>
            <figcaption>
                <strong>${diagram.title}</strong>
                <span>${diagram.caption}</span>
            </figcaption>
        </figure>
    `;
    const storySections = caseStudy.sections.map((section, index) => `
        <section class="case-study-section">
            <div class="case-study-section-copy">
                <h2>${section.title}</h2>
                <p>${section.text}</p>
            </div>
            ${(caseStudy.codeSnippets[index] || caseStudy.diagrams[index]) ? `
                <div class="case-study-section-media">
                    ${caseStudy.codeSnippets[index] ? renderCodeCard(caseStudy.codeSnippets[index]) : ''}
                    ${caseStudy.diagrams[index] ? renderDiagramCard(caseStudy.diagrams[index]) : ''}
                </div>
            ` : ''}
        </section>
    `).join('');
    const remainingCode = caseStudy.codeSnippets.slice(caseStudy.sections.length);
    const remainingDiagrams = caseStudy.diagrams.slice(caseStudy.sections.length);
    const hasAdditionalMaterial = remainingCode.length > 0 || remainingDiagrams.length > 0;

    detailPageContent.innerHTML = `
        <div class="case-study-intro">
            <p>${caseStudy.intro}</p>
        </div>
        <div class="case-study-stats">
            ${caseStudy.stats.map((stat) => `
                <div class="case-study-stat">
                    <strong>${stat.value}</strong>
                    <span>${stat.label}</span>
                </div>
            `).join('')}
        </div>
        <article class="case-study-story">
            ${storySections}
        </article>
        ${hasAdditionalMaterial ? `
        <section class="additional-material">
            <div class="diagram-section-heading">
                <div>
                    <p class="eyebrow">Supporting material</p>
                    <h2>Additional project material</h2>
                </div>
                <span class="diagram-count">${remainingCode.length + remainingDiagrams.length} items</span>
            </div>
            ${remainingCode.length ? `<div class="code-grid">${remainingCode.map(renderCodeCard).join('')}</div>` : ''}
            ${remainingDiagrams.length ? `<div class="diagram-grid">${remainingDiagrams.map(renderDiagramCard).join('')}</div>` : ''}
        </section>
        ` : ''}
    `;
}

function renderLinkedDetailContent(detailPageContent, text) {
    detailPageContent.replaceChildren();

    const linkPattern = /(https?:\/\/[^\s]+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;
    const lines = text.split('\n');

    lines.forEach((line, lineIndex) => {
        let lastIndex = 0;

        for (const match of line.matchAll(linkPattern)) {
            const linkText = match[0];
            const start = match.index;
            const trailingPunctuation = linkText.match(/[.,;:!?]+$/)?.[0] || '';
            const linkValue = trailingPunctuation
                ? linkText.slice(0, -trailingPunctuation.length)
                : linkText;

            detailPageContent.append(
                document.createTextNode(line.slice(lastIndex, start))
            );

            const link = document.createElement('a');
            link.href = linkValue.includes('@') ? `mailto:${linkValue}` : linkValue;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = linkValue;
            detailPageContent.append(link);

            if (trailingPunctuation) {
                detailPageContent.append(document.createTextNode(trailingPunctuation));
            }

            lastIndex = start + linkText.length;
        }

        detailPageContent.append(document.createTextNode(line.slice(lastIndex)));

        if (lineIndex < lines.length - 1) {
            detailPageContent.append(document.createElement('br'));
        }
    });
}

function renderDetailPageContent(detailPageContent, currentItem, projectInfo) {
    detailPageContent.classList.remove('project-case-study');

    if (projectInfo && projectInfo.caseStudy) {
        renderProjectCaseStudy(detailPageContent, projectInfo.caseStudy);
        return;
    }

    const detailText = (projectInfo && projectInfo.detailed)
        ? getProjectDetailText(projectInfo)
        : (currentItem.detailContent[currentLanguage] || currentItem.content[currentLanguage]);
    renderLinkedDetailContent(detailPageContent, detailText);
}

// State
let selectedCategory = 0;
let selectedItem = 0;

// Initialize
function init() {
    renderCategories();
    updateTranslations();
    attachEventListeners();
    startProjectPreviewCycle();
    scheduleUIUpdate();
}

function scheduleUIUpdate() {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            updateUI();
        });
    });
}

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;

    // Update button states
    document.querySelectorAll('.lang-btn').forEach((btn) => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    updateTranslations();
    renderCategories();
    scheduleUIUpdate();

    if (document.getElementById('detailPage').classList.contains('visible')) {
        refreshOpenDetailPageLanguage();
    }
}

function refreshOpenDetailPageLanguage() {
    const currentItem = menuData[selectedCategory].items[selectedItem];
    if (!currentItem) return;

    const projectInfo = isProjectsCategory(selectedCategory) ? PROJECT_DETAIL_INFO[currentItem.title.en] : null;
    const detailPageTitle = document.getElementById('detailPageTitle');
    const detailPageSubtitle = document.getElementById('detailPageSubtitle');
    const detailPageContent = document.getElementById('detailPageContent');

    detailPageTitle.textContent = currentItem.title[currentLanguage];
    detailPageSubtitle.textContent = currentItem.description[currentLanguage];
    renderDetailPageContent(detailPageContent, currentItem, projectInfo);
}

// Update UI translations
function updateTranslations() {
    document.getElementById('headerName').textContent = translations.name[currentLanguage];
    document.getElementById('backButtonText').textContent = translations.backToMenu[currentLanguage];
    document.getElementById('navHintDesktop').textContent = translations.navHintDesktop[currentLanguage];
    document.getElementById('navHintMobile').textContent = translations.navHintMobile[currentLanguage];
    document.getElementById('navHintKeyboard').textContent = translations.navHintKeyboard[currentLanguage];
    document.getElementById('categoryControlLabel').textContent = translations.categoryLabel[currentLanguage];
    document.getElementById('itemControlLabel').textContent = translations.itemLabel[currentLanguage];

    document.querySelector('[data-navigation="previous-category"]').setAttribute('aria-label', translations.previousCategory[currentLanguage]);
    document.querySelector('[data-navigation="previous-category"]').setAttribute('title', translations.previousCategory[currentLanguage]);
    document.querySelector('[data-navigation="next-category"]').setAttribute('aria-label', translations.nextCategory[currentLanguage]);
    document.querySelector('[data-navigation="next-category"]').setAttribute('title', translations.nextCategory[currentLanguage]);
    document.querySelector('[data-navigation="previous-item"]').setAttribute('aria-label', translations.previousItem[currentLanguage]);
    document.querySelector('[data-navigation="previous-item"]').setAttribute('title', translations.previousItem[currentLanguage]);
    document.querySelector('[data-navigation="next-item"]').setAttribute('aria-label', translations.nextItem[currentLanguage]);
    document.querySelector('[data-navigation="next-item"]').setAttribute('title', translations.nextItem[currentLanguage]);
}

// Render categories
function renderCategories() {
    const wrapper = document.getElementById('categoriesWrapper');
    wrapper.innerHTML = menuData.map((category, catIdx) => `
        <div class="portfolio-page portfolio-page-${category.title.en === 'About Me' ? 'about' : category.title.en === 'Projects' ? 'projects' : 'contact'}">
        <section class="category-column ${category.title.en === 'About Me' ? 'about-category' : category.title.en === 'Projects' ? 'projects-category' : ''}" id="${category.title.en === 'About Me' ? 'about' : category.title.en === 'Projects' ? 'work' : 'contact'}" data-category="${catIdx}">
            <h2 class="section-heading">${category.title[currentLanguage]}</h2>
            <button class="category-icon-wrapper" type="button" onclick="selectCategory(${catIdx})" aria-label="Select ${category.title[currentLanguage]}">
                <div class="category-icon ${isProjectsCategory(catIdx) ? 'project-disc' : ''}" data-icon="${catIdx}">
                    ${isProjectsCategory(catIdx)
                        ? `<img class="project-disc-image" src="${getProjectPreviewPath(category.items[0].title.en)}" alt="${category.items[0].title[currentLanguage]} preview">`
                        : `<svg viewBox="0 0 24 24">${icons[category.icon]}</svg>`}
                </div>
                <p class="category-title" data-title="${catIdx}">${category.title[currentLanguage]}</p>
            </button>
            ${category.title.en === 'About Me' ? `
            <div class="about-copy" data-about-copy>
                ${category.items[0].detailContent[currentLanguage].split('\n\n').map((paragraph) => `<p>${paragraph}</p>`).join('')}
            </div>
            ` : category.title.en === 'Contact' ? `
            <div class="items-list contact-links">
                ${category.items.map((item) => `
                    <a class="contact-link" href="${getContactHref(item.title.en)}" target="_blank" rel="noopener noreferrer" aria-label="${item.title[currentLanguage]}" title="${item.title[currentLanguage]}">
                        <span class="item-inline-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">${getItemIconFor(catIdx, item.title.en)}</svg>
                        </span>
                    </a>
                `).join('')}
            </div>
            ` : `<div class="items-list ${isProjectsCategory(catIdx) ? 'projects-list' : ''}">
                ${isProjectsCategory(catIdx) ? `<div class="projects-track">` : ''}
                ${category.items.map((item, itemIdx) => `
                    <button class="item-card" type="button" data-item="${catIdx}-${itemIdx}" onmouseenter="setHoveredProject('${item.title.en.replaceAll("'", "\\'")}')" onmouseleave="clearHoveredProject()" onclick="handleItemClick(${catIdx}, ${itemIdx})" aria-label="Open ${item.title[currentLanguage]}">
                        <div class="item-row">
                            <span class="item-inline-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24">${getItemIconFor(catIdx, item.title.en)}</svg>
                            </span>
                            <div class="item-text-block">
                                <h3 class="item-title">${item.title[currentLanguage]}</h3>
                                <p class="item-description">${item.description[currentLanguage]}</p>
                                ${isProjectsCategory(catIdx) && getProjectStatus(item.title.en) ? `<span class="project-status project-status-${getProjectStatus(item.title.en)}">${getProjectStatus(item.title.en) === 'finished' ? 'Finished' : 'Unfinished'}</span>` : ''}
                            </div>
                        </div>
                    </button>
                `).join('')}
                ${isProjectsCategory(catIdx) ? `</div>` : ''}
            </div>`}
        </section>
        </div>
    `).join('');
}

function getContactHref(title) {
    const links = {
        Email: 'mailto:arthurhgarcia10@gmail.com',
        GitHub: 'https://github.com/zmbfiedk',
        LinkedIn: 'https://www.linkedin.com/in/arthur-hgarcia-210810385/',
        Instagram: 'https://www.instagram.com/zmbfiedk_backup_/'
    };

    return links[title] || '#';
}

// Handle item click
function handleItemClick(catIdx, itemIdx) {
    selectItem(catIdx, itemIdx);
    openDetailPage();
}

// Open detail page
function openDetailPage() {
    const currentItem = menuData[selectedCategory].items[selectedItem];
    const projectInfo = isProjectsCategory(selectedCategory) ? PROJECT_DETAIL_INFO[currentItem.title.en] : null;
    const detailGithubLink = document.getElementById('detailGithubLink');
    const detailPageContent = document.getElementById('detailPageContent');

    document.getElementById('detailPageTitle').textContent = currentItem.title[currentLanguage];
    document.getElementById('detailPageSubtitle').textContent = currentItem.description[currentLanguage];

    renderDetailPageContent(detailPageContent, currentItem, projectInfo);

    if (projectInfo && projectInfo.github && projectInfo.github !== '#') {
        detailGithubLink.href = projectInfo.github;
        detailGithubLink.classList.remove('hidden');
    } else {
        detailGithubLink.setAttribute('href', '#');
        detailGithubLink.classList.add('hidden');
    }

    document.getElementById('xmbContainer').classList.add('hidden');
    document.getElementById('detailPage').classList.add('visible');
    document.body.classList.add('detail-view');
}

// Close detail page
function closeDetailPage() {
    document.getElementById('xmbContainer').classList.remove('hidden');
    document.getElementById('detailPage').classList.remove('visible');
    document.body.classList.remove('detail-view');
}

function openMediaViewer(button) {
    const viewer = document.getElementById('mediaViewer');
    const viewerTitle = document.getElementById('mediaViewerTitle');
    const viewerBody = document.getElementById('mediaViewerBody');
    const card = button.closest('.code-card, .diagram-card');
    if (!viewer || !viewerTitle || !viewerBody || !card) return;

    viewerBody.replaceChildren();
    document.getElementById('mediaViewerType').textContent =
        menuData[selectedCategory].items[selectedItem].title[currentLanguage];
    viewerTitle.textContent = card.querySelector('strong').textContent;

    if (button.dataset.viewerType === 'diagram') {
        const image = card.querySelector('img').cloneNode();
        image.removeAttribute('loading');
        image.className = 'media-viewer-image';
        viewerBody.appendChild(image);
    } else {
        const explanation = document.createElement('p');
        explanation.className = 'media-viewer-explanation';
        explanation.textContent = card.querySelector('.code-card-explanation').textContent;

        const source = document.createElement('p');
        source.className = 'media-viewer-source';
        source.textContent = card.querySelector('.code-card-header span').textContent;

        const code = document.createElement('pre');
        code.className = 'media-viewer-code';
        code.textContent = card.querySelector('code').textContent;

        viewerBody.append(explanation, source, code);
    }

    viewer.classList.add('visible');
    viewer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('viewer-open');
    document.querySelector('.media-viewer-close').focus();
}

function closeMediaViewer() {
    const viewer = document.getElementById('mediaViewer');
    if (!viewer) return;

    viewer.classList.remove('visible');
    viewer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('viewer-open');
}

// Update UI based on state
function updateUI() {
    const wrapper = document.getElementById('categoriesWrapper');
    wrapper.style.transform = 'none';

    // Update category styles
    document.querySelectorAll('.category-column').forEach((col, idx) => {
        const distance = Math.abs(idx - selectedCategory);

        const icon = col.querySelector('.category-icon');
        const title = col.querySelector('.category-title');
        const iconWrapper = col.querySelector('.category-icon-wrapper');
        iconWrapper.setAttribute('aria-pressed', String(distance === 0));
        col.style.transform = 'none';
        col.style.opacity = '1';

        if (distance === 0) {
            icon.classList.add('active');
            title.style.opacity = '1';
            iconWrapper.style.transform = 'translateY(-10px)';
        } else {
            icon.classList.remove('active');
            title.style.opacity = '0.5';
            iconWrapper.style.transform = 'translateY(0)';
        }

        // Update item styles
        const items = col.querySelectorAll('.item-card');
        items.forEach((item) => {
            if (!item.dataset.item) {
                item.classList.remove('active');
                item.style.setProperty('--scale', 0.9);
                item.style.opacity = 0;
                return;
            }

            const isActiveCategory = idx === selectedCategory;
            const originalItemIdx = Number.parseInt(item.dataset.item.split('-')[1], 10);
            const itemDistance = Math.abs(originalItemIdx - selectedItem);
            item.style.setProperty('--scale', '1');
            item.style.opacity = '1';
            item.setAttribute('aria-pressed', String(isActiveCategory && itemDistance === 0));

            if (isActiveCategory && itemDistance === 0) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });

    const projectsIndex = menuData.findIndex((category) => category.title.en === 'Projects');
    if (projectsIndex >= 0) {
        const selectedProject = menuData[projectsIndex].items[selectedCategory === projectsIndex ? selectedItem : 0];
        updateProjectPreview(selectedProject.title.en);
    }

    updateNavigationControls();

}

function updateNavigationControls() {
    const previousCategory = document.querySelector('[data-navigation="previous-category"]');
    const nextCategory = document.querySelector('[data-navigation="next-category"]');
    const previousItem = document.querySelector('[data-navigation="previous-item"]');
    const nextItem = document.querySelector('[data-navigation="next-item"]');

    if (!previousCategory || !nextCategory || !previousItem || !nextItem) return;

    previousCategory.disabled = selectedCategory === 0;
    nextCategory.disabled = selectedCategory === menuData.length - 1;
    previousItem.disabled = selectedItem === 0;
    nextItem.disabled = selectedItem === menuData[selectedCategory].items.length - 1;
}

function announceNavigationBoundary() {
    const navStatus = document.getElementById('navStatus');
    if (!navStatus) return;

    navStatus.textContent = translations.navigationBoundary[currentLanguage];
    window.setTimeout(() => {
        navStatus.textContent = '';
    }, 900);
}

function moveSelection(direction, amount) {
    const previousCategory = selectedCategory;
    const previousItem = selectedItem;

    if (direction === 'category') {
        selectedCategory = Math.max(0, Math.min(menuData.length - 1, selectedCategory + amount));
        selectedItem = 0;
    } else {
        selectedItem = Math.max(0, Math.min(menuData[selectedCategory].items.length - 1, selectedItem + amount));
    }

    if (selectedCategory === previousCategory && selectedItem === previousItem) {
        announceNavigationBoundary();
        return;
    }

    updateUI();
}

// Selection functions
function selectCategory(idx) {
    selectedCategory = idx;
    selectedItem = 0;
    scheduleUIUpdate();
    window.setTimeout(() => {
        document.querySelector(`.category-column[data-category="${idx}"]`)?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }, 0);
}

function selectItem(catIdx, itemIdx) {
    selectedCategory = catIdx;
    selectedItem = itemIdx;
    scheduleUIUpdate();
}

// Event listeners
function attachEventListeners() {
    const taskbarClock = document.getElementById('taskbarClock');
    const updateTaskbarClock = () => {
        if (taskbarClock) {
            taskbarClock.textContent = new Intl.DateTimeFormat([], {
                hour: 'numeric',
                minute: '2-digit'
            }).format(new Date());
        }
    };

    updateTaskbarClock();
    window.setInterval(updateTaskbarClock, 30000);

    document.querySelector('.start-button')?.addEventListener('click', () => {
        document.getElementById('categoriesWrapper')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    document.querySelectorAll('.header-nav a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;

            event.preventDefault();
            history.replaceState(null, '', link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    document.querySelectorAll('[data-navigation]').forEach((control) => {
        control.addEventListener('click', () => {
            const navigation = control.dataset.navigation;
            const direction = navigation.endsWith('category') ? 'category' : 'item';
            const amount = navigation.startsWith('previous') ? -1 : 1;
            moveSelection(direction, amount);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('mediaViewer').classList.contains('visible')) {
            if (e.key === 'Escape') closeMediaViewer();
            return;
        }

        // If detail page is open
        if (document.getElementById('detailPage').classList.contains('visible')) {
            if (e.key === 'Escape' || e.key === 'Backspace') {
                e.preventDefault();
                closeDetailPage();
            }
            return;
        }

        const interactiveTarget = e.target.closest('button, a, input, textarea, select');
        if (interactiveTarget && !interactiveTarget.classList.contains('item-card')) return;

        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            moveSelection('category', -1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            moveSelection('category', 1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            moveSelection('item', -1);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            moveSelection('item', 1);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            openDetailPage();
        }
    });

    document.addEventListener('click', (e) => {
        const expandButton = e.target.closest('.media-expand-button');
        if (expandButton) {
            openMediaViewer(expandButton);
            return;
        }

        if (e.target.closest('[data-close-viewer="true"]')) {
            closeMediaViewer();
        }
    });

    // Window resize
    window.addEventListener('resize', scheduleUIUpdate);
    window.visualViewport?.addEventListener('resize', scheduleUIUpdate);
    window.addEventListener('orientationchange', scheduleUIUpdate);
}

// Start the app
init();