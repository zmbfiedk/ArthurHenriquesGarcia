// Existing portfolio content and case-study data.
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
                description: { en: 'Unity â€¢ C#', pt: 'Unity â€¢ C#', nl: 'Unity â€¢ C#' },
                content: { en: 'A core project with gameplay iteration and systems design.', pt: 'Projeto central com iteracao de gameplay e design de sistemas.', nl: 'Kernproject met gameplay-iteratie en systems design.' },
                detailContent: {
                    en: 'Tower of Babel is one of my main Unity projects. I focused on balancing mechanics, improving flow, and refining player feedback. The project helped me deepen my understanding of reusable gameplay systems and rapid iteration.',
                    pt: 'Tower of Babel e um dos meus principais projetos em Unity. Foquei em balancear mecanicas, melhorar o fluxo e refinar o feedback ao jogador. O projeto me ajudou a aprofundar sistemas reutilizaveis e iteracao rapida.',
                    nl: 'Tower of Babel is een van mijn belangrijkste Unity-projecten. Ik focuste op balancing, flow en player feedback. Het project hielp mij om herbruikbare gameplay-systemen en snelle iteratie te verdiepen.'
                }
            },
            {
                title: { en: 'DoomLikeShooter', pt: 'DoomLikeShooter', nl: 'DoomLikeShooter' },
                description: { en: 'C++ â€¢ SFML 2.x', pt: 'C++ â€¢ SFML 2.x', nl: 'C++ â€¢ SFML 2.x' },
                content: { en: 'A raycasting first-person shooter built from core C++ systems.', pt: 'Um first-person shooter de raycasting construido com sistemas centrais em C++.', nl: 'Een raycasting first-person shooter gebouwd met C++-kernsystemen.' },
                detailContent: {
                    en: 'DoomLikeShooter is a C++ and SFML raycasting prototype focused on making first-person rendering understandable and inspectable. It combines grid maps, collision-aware movement, DDA traversal, wall projection, weapon selection, and procedural muzzle flash feedback.',
                    pt: 'DoomLikeShooter e um prototipo de raycasting em C++ e SFML focado em tornar a renderizacao em primeira pessoa compreensivel e facil de analisar. Ele combina mapas em grid, movimento com colisao, percurso DDA, projecao de paredes, selecao de armas e feedback procedural de muzzle flash.',
                    nl: 'DoomLikeShooter is een C++- en SFML-raycastingprototype dat first-person rendering begrijpelijk en inspecteerbaar maakt. Het combineert gridkaarten, botsingsbewuste beweging, DDA-traversal, muurprojectie, wapenkeuze en procedurele muzzle-flash-feedback.'
                }
            },
            {
                title: { en: 'TowerDefense', pt: 'TowerDefense', nl: 'TowerDefense' },
                description: { en: 'Unity â€¢ C#', pt: 'Unity â€¢ C#', nl: 'Unity â€¢ C#' },
                content: { en: 'Defensive strategy prototype focused on pacing.', pt: 'ProtÃ³tipo de estrategia defensiva focado em ritmo.', nl: 'Defensive strategy prototype met focus op pacing.' },
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
                description: { en: 'C++ â€¢ Core systems', pt: 'C++ â€¢ Sistemas base', nl: 'C++ â€¢ Core systems' },
                content: { en: 'Engine-level logic and fundamentals practice.', pt: 'Pratica de logica em nivel de engine e fundamentos.', nl: 'Oefening in engine-level logica en fundamentals.' },
                detailContent: {
                    en: 'A collection of small C++ game projects where I focused on game loops, input, object-oriented architecture, and performance-aware coding.',
                    pt: 'Colecao de pequenos projetos em C++ com foco em game loop, input, arquitetura orientada a objetos e codigo atento a performance.',
                    nl: 'Een verzameling kleine C++ game-projecten met focus op game loops, input, objectgeorienteerde architectuur en performance-bewuste code.'
                }
            },
            {
                title: { en: 'Fractured', pt: 'Fractured', nl: 'Fractured' },
                description: { en: 'Unity 6.2 â€¢ Physics and destruction systems', pt: 'Unity 6.2 â€¢ Sistemas de fisica e destruicao', nl: 'Unity 6.2 â€¢ Physics- en destructiesystemen' },
                content: { en: 'A physics-driven interaction system built around launching, momentum, and destructible environments.', pt: 'Um sistema de interacao baseado em fisica, lancamento, momentum e ambientes destrutiveis.', nl: 'Een physics-gedreven interactiesysteem rond lanceren, momentum en destructieve omgevingen.' },
                detailContent: {
                    en: 'Fractured is a physics-based Unity game where the player launches a character through an interactive environment, using momentum to break walls and shatter glass.',
                    pt: 'Fractured e um jogo de fisica em Unity onde o jogador lanca um personagem por um ambiente interativo, usando momentum para quebrar paredes e vidro.',
                    nl: 'Fractured is een physics-game in Unity waarin de speler een personage door een interactieve omgeving lanceert en momentum gebruikt om muren en glas te breken.'
                }
            },
            {
                title: { en: 'Digital Divinity', pt: 'Digital Divinity', nl: 'Digital Divinity' },
                description: { en: 'Unity â€¢ C# â€¢ Stealth horror systems', pt: 'Unity â€¢ C# â€¢ Sistemas de stealth horror', nl: 'Unity â€¢ C# â€¢ Stealth-horrorsystemen' },
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
        detailed: 'Godot Game is an engine exploration project focused on transferring design and systems thinking across engines.'
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
                    text: 'Ship is complete and Pong is the current implementation focus. Terminal Arcade remains unfinished. Car Dodge and Tetris are planned next, with each small game adding a new movement, collision, or game-loop challenge without losing the projectâ€™s focused scope.'
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
        detailed: 'This project explores a side-scroller roguelike combining action-platformer controls with procedural progression.'
    },
    'Vertical Slice': {
        github: 'https://github.com/zmbfiedk/Vertical-Slice2.0',
        detailed: 'Vertical Slice centers on deterministic physics for precise character gameplay.'
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


const ENGINES = {
    unity: { label: 'Unity', icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="m16 2 4.8 8.3h-3.7L16 7.8l-1.1 2.5h-3.7L16 2Zm-8.8 10.2 3 5.2-3 5.2 2.8 1.6 3-5.2h6l3 5.2 2.8-1.6-3-5.2 3-5.2-2.8-1.6-3 5.2h-6l-3-5.2-2.8 1.6ZM13 16l3-1.7 3 1.7-3 1.7-3-1.7Zm3 14-4.8-8.3h3.7l1.1 2.5 1.1-2.5h3.7L16 30Z"/></svg>' },
    unreal: { label: 'Unreal Engine', icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 2c7.7 0 14 6.3 14 14 0 8.1-6.1 14-14 14S2 24.1 2 16C2 8.3 8.3 2 16 2Zm-6 8.3v11.2c1.9 1.8 4.1 2.7 6.7 2.7 3.2 0 5.8-1.7 7.3-4.1l-3.3-2.1c-1 1.4-2.1 2.1-3.6 2.1-1.3 0-2.4-.7-2.4-2.4v-7.4L10 10.3Z"/></svg>' },
    godot: { label: 'Godot', icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M5 12h3V8h4v4h8V8h4v4h3v14H5V12Zm4 4v6h4v-3h-2v-2h6v2h-2v3h4v-6H9Zm13 0h-2v3h2v-3Z"/></svg>' },
    gamemaker: { label: 'GameMaker', icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M4 7h24v18H4V7Zm5 4v10h4v-3h-2v-4h5v-3H9Zm12 0-5 10h5l1-2h3v-8h-4Zm1 3h1v2h-2l1-2Z"/></svg>' },
    cpp: { label: 'C++', icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 4a12 12 0 1 0 10.4 18l-3.2-1.9A8.3 8.3 0 1 1 16 8c2.5 0 4.8 1.1 6.4 3h-3v3h8V6.2h-3v2A12 12 0 0 0 16 4Zm-7 9v2H7v4h2v2h4v-2h2v-4h-2v-2H9Zm10 0v2h-2v4h2v2h4v-2h2v-4h-2v-2h-4Z"/></svg>' },
    web: { label: 'Web', icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" stroke-width="2"/><path fill="none" stroke="currentColor" d="M4 16h24M16 4c4 4 4 20 0 24M16 4c-4 4-4 20 0 24"/></svg>' },
    other: { label: 'Other', icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3 29 10v12L16 29 3 22V10L16 3Zm0 4L8 11l8 4 8-4-8-4Zm-9 8v5l7 4v-5l-7-4Zm11 4v5l7-4v-5l-7 4Z"/></svg>' }
};

const PROJECT_METADATA = {
    'Tower of Babel': { engine: 'unity', language: 'C#', year: '2026', role: 'Gameplay developer', tags: ['combat', 'waves', 'AI'], openMode: 'dual' },
    DoomLikeShooter: { engine: 'cpp', language: 'C++', tags: ['raycasting', 'SFML'], openMode: 'dual' },
    TowerDefense: { engine: 'unity', language: 'C#', tags: ['strategy', 'waves'], openMode: 'dual' },
    'Godot Game': { engine: 'godot', language: 'GDScript', tags: ['engine exploration'], openMode: 'dual' },
    'Small C++ Games': { engine: 'cpp', language: 'C++', tags: ['console', 'prototyping'], openMode: 'dual' },
    Fractured: { engine: 'unity', language: 'C#', tags: ['physics'], openMode: 'dual' },
    'Digital Divinity': { engine: 'unity', language: 'C#', tags: ['gameplay'], openMode: 'dual' },
    'Roguelike Action Platformer': { engine: 'unity', language: 'C#', tags: ['roguelike'], openMode: 'dual' },
    'Vertical Slice': { engine: 'unity', language: 'C#', tags: ['vertical slice'], openMode: 'dual' }
};

const REMOVED_PROJECTS = new Set(['Godot Game', 'Roguelike Action Platformer', 'Vertical Slice']);
menuData[0].items = menuData[0].items.filter((item) => !REMOVED_PROJECTS.has(item.title.en));
menuData[0].items.forEach((item) => Object.assign(item, PROJECT_METADATA[item.title.en] || { engine: 'other', tags: [] }));

const LINK_ICONS = {
    mail: '<svg viewBox="0 0 24 24"><path d="M3 5h18v14H3zM4 7l8 6 8-6" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7.99c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.64c0 .26.18.57.69.47A10 10 0 0 0 12 2Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M5 8H2V21h3V8ZM3.5 3A1.75 1.75 0 1 0 3.5 6.5 1.75 1.75 0 0 0 3.5 3ZM22 13.5c0-3.92-2.09-5.75-4.88-5.75-2.25 0-3.25 1.24-3.8 2.11V8H10v13h3.32v-6.44c0-1.7.32-3.35 2.43-3.35 2.08 0 2.1 1.95 2.1 3.46V21H22v-7.5Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    link: '<svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.07.07l2-2A5 5 0 0 0 12 4l-1 1m3 6a5 5 0 0 0-7.07-.07l-2 2A5 5 0 0 0 12 20l1-1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    file: '<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6zM14 3v5h5" fill="none" stroke="currentColor" stroke-width="2"/></svg>'
};

const CONTACT_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3zM4 7l8 6 8-6" fill="none" stroke="currentColor" stroke-width="2"/></svg>';

const CONTACT = {
    intro: 'Reach out at arthurhgarcia10@gmail.com for project opportunities, collaborations, or technical discussions. I am always open to building meaningful game experiences.',
    groups: [{
        title: 'Contact',
        links: [
            { label: 'Email', url: 'mailto:arthurhgarcia10@gmail.com', icon: 'mail', note: 'arthurhgarcia10@gmail.com' },
            { label: 'GitHub', url: 'https://github.com/zmbfiedk', icon: 'github', note: 'github.com/zmbfiedk' },
            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/arthur-hgarcia-210810385/', icon: 'linkedin', note: 'linkedin.com/in/arthur-hgarcia-210810385' },
            { label: 'Instagram', url: 'https://www.instagram.com/zmbfiedk_backup_/', icon: 'instagram', note: 'instagram.com/zmbfiedk_backup_' }
        ]
    }]
};

const contactLinks = Object.fromEntries(CONTACT.groups.flatMap((group) => group.links.map((link) => [link.label, link.url])));

const desktopIcons = [
    { id: 'projects', label: 'My Projects', type: 'folder', path: ['Projects'] },
    { id: 'about', label: 'About Me', type: 'folder', path: ['About Me'] },
    { id: 'contact', label: 'Contact', type: 'app', app: 'contact', icon: CONTACT_ICON },
    { id: 'resume', label: 'Resume.pdf', type: 'file', app: 'resume', href: 'Docs/CV/Arthur_Garcia_CV.pdf' },
    { id: 'blog', label: 'Blog', type: 'folder', path: ['Blog'] },
    { id: 'recycle', label: 'Recycle Bin', type: 'recycle' }
];

const fileSystem = {
    Projects: {},
    'About Me': {
        'Introduction.txt': { type: 'text', content: () => menuData[1].items[0].detailContent.en },
        'Education.txt': { type: 'text', content: () => menuData[1].items[1].detailContent.en },
        'Focus.txt': { type: 'text', content: () => menuData[1].items[2].detailContent.en }
    },
    Blog: {
        'README.txt': { type: 'text', content: 'Blog placeholder\\n\\nNo blog posts have been added yet.' }
    },
    Contact: Object.fromEntries(CONTACT.groups.flatMap((group) => group.links.map((link) => [
        `${link.label}.url`,
        { type: 'url', href: link.url }
    ])))
};

Object.assign(fileSystem.Projects, Object.fromEntries(menuData[0].items.map((item) => {
    const info = PROJECT_DETAIL_INFO[item.title.en] || {};
    const caseStudy = info.caseStudy || {
        intro: 'Case study placeholder — this project is ready for its original project story to be added.',
        stats: [{ value: '—', label: 'Add project data' }],
        sections: [{ title: 'Content placeholder', text: 'Add the existing project chapters, media, and code to this data object. No project facts have been invented here.' }],
        codeSnippets: [],
        diagrams: []
    };
    const children = {
        'Case Study.html': { type: 'case-study', project: item.title.en },
        'README.txt': { type: 'text', content: () => item.detailContent.en || item.content.en },
        'Screenshot.png': {
            type: 'image',
            src: info.coverPath || (info.imagePath && info.diagrams?.[0] ? `${info.imagePath}/${info.diagrams[0].file}` : '')
        },
        'Source Code.url': { type: 'url', href: info.github || 'https://github.com/zmbfiedk' }
    };
    if (info.demo) children['Live Demo.url'] = { type: 'url', href: info.demo };
    item.caseStudy = caseStudy;
    const folder = Object.assign({}, children);
    Object.defineProperties(folder, {
        engine: { value: item.engine, enumerable: false },
        language: { value: item.language, enumerable: false },
        year: { value: item.year, enumerable: false },
        role: { value: item.role, enumerable: false },
        tags: { value: item.tags, enumerable: false },
        openMode: { value: item.openMode || 'dual', enumerable: false }
    });
    return [item.title.en, folder];
})));

function getLocalized(value, language = 'en') { return value && typeof value === 'object' ? (value[language] || value.en || '') : (value || ''); }
function getProjectInfo(title) { return PROJECT_DETAIL_INFO[title] || {}; }
