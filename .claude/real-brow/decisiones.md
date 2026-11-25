# Registro de decisiones · Real Brow Studio

Registro de las decisiones tomadas y aprobadas por la responsable del estudio. Solo se anotan
decisiones reales; lo que sigue abierto figura en «Pendientes». Cada nueva entrada o cambio
en este archivo requiere aprobación. Las fechas se registran con la hora de America/Bogota.

## Pendientes

- Autorizar la escritura de los seis archivos de configuración con su contenido aprobado.
- Autorizar el commit y el push a la rama de trabajo claude/landing-real-brow.
- Decidir si la configuración del agente se lleva a main, para que las sesiones nuevas la
  carguen automáticamente.
- Comprobar, en una sesión nueva, que el agente se activa solo. Si no se activa, aplicar el
  respaldo acordado: trasladar su identidad a .claude/CLAUDE.md.
- Comprobar en uso real las reglas de confirmación sobre las herramientas de GitHub, que no
  pudieron probarse en sesiones aisladas.
- Diseñar y aprobar cada una de las cuatro Skills, una por una. El orden entre ellas no está
  definido.
- Realizar la primera misión: la auditoría de la web existente.
- Ciclo de fin de año 2026: decidir si se realiza, definir la fecha de inicio de Navidad y la
  fecha de fin de Año Nuevo, y compartir las referencias visuales.
- Verificar las fechas de las celebraciones de 2027.
- Permitir el acceso a jesscamejo.github.io desde el entorno cuando haga falta verificar la
  web publicada.

## Arquitectura del agente

- El agente principal se llama landing-page-creative-director.
- Funciona como agente de la conversación principal, para poder conversar, preguntar,
  presentar propuestas y pedir aprobaciones durante el proceso.
- Se configura dentro del repositorio, en la carpeta .claude/, y solo se aplica a este
  proyecto. No se usa la configuración global ni la memoria del usuario.
- Seis archivos de configuración:
  - .claude/settings.json: activa el agente y define las reglas técnicas de permisos.
  - .claude/CLAUDE.md: reglas del proyecto.
  - .claude/agents/landing-page-creative-director.md: identidad y metodología del agente.
  - .claude/real-brow/marca.md: identidad visual y verbal.
  - .claude/real-brow/calendario-temporadas.md: calendario de experiencias temáticas.
  - .claude/real-brow/decisiones.md: este registro.
- Cuatro Skills independientes, que se crean más adelante, una por una, con aprobación de su
  diseño:
  - landing-page-research: investigación de referencias, tendencias y oportunidades.
  - seasonal-web-experience: diseño de experiencias de temporada.
  - landing-page-development: implementación de cambios aprobados.
  - web-quality-audit: auditoría visual y técnica, y filtro obligatorio antes de cada
    publicación.
- Mientras las Skills no existan, el agente aplica directamente su metodología.

## Propósito y responsabilidades del agente

- Reúne seis roles: director creativo digital, diseñador web senior UX/UI, director de arte
  para marcas premium, desarrollador frontend, especialista en conversión y experiencia de
  usuario, y consultor de estrategia digital para negocios de belleza.
- Actúa con criterio de director creativo: propone experiencias originales, con
  personalidad, elegancia y alto nivel visual, y evita diseños genéricos o de plantilla.
- Investiga referencias internacionales de estudios de cejas, artistas de cejas y marcas
  premium de belleza, incluidas sus estrategias de confianza y conversión, sin copiar.
- Trabaja con enfoque mobile-first, porque el tráfico llega principalmente desde Instagram,
  y garantiza también la experiencia en tabletas y escritorio.
- Es proactivo para proponer, nunca para modificar por cuenta propia.
- Al iniciar cada sesión revisa este registro y las próximas temporadas, e informa. No crea
  tareas programadas ni recordatorios automáticos.
- La responsable del estudio tiene siempre la decisión final.

## Página web existente

- La web actual se conserva y evoluciona: se estudia, se audita y se mejora, sin
  reconstruirla desde cero por defecto.
- La primera misión es una auditoría completa, empezando por el celular, sin modificar
  archivos.
- El diagnóstico se organiza en cuatro categorías: conservar, corregir, mejorar y agregar.
- Cada hallazgo se marca como problema comprobado, oportunidad de mejora, recomendación
  creativa o no verificado. No se presentan suposiciones como problemas confirmados.
- Después se presenta un plan de trabajo priorizado: urgente, mayor valor y puede esperar.
  Nada se implementa hasta que el plan esté aprobado.

## Identidad visual

- La identidad permanente está definida en .claude/real-brow/marca.md, que es su única
  fuente.
- Paleta de marca: Beige #D1CDC2, Espresso #2D2D2D e Ivory #F4EFE9.
- Tipografías principales: Cormorant Garamond para titulares y Jost para textos y navegación.
- Dirección de arte: editorial, quiet luxury, minimalista, premium y natural.
- El tono de voz es elegante, profesional, cercano, sereno, educativo y persuasivo con
  sutileza, sin exageraciones, promesas de resultados ni presión comercial.
- En las experiencias de temporada se permiten tipografías especiales como acento, siempre
  que Cormorant Garamond y Jost sigan siendo las principales.

## Fotografías de clientas

- Las fotografías que entrega la responsable se consideran autorizadas para el propósito que
  indique. No se pide autorización adicional por cada fotografía.
- La optimización técnica de tamaño, compresión y formato está permitida dentro del cambio
  aprobado, siempre que no altere el aspecto de la imagen.
- No se buscan ni se toman fotografías de clientas de otras fuentes por iniciativa propia, y
  no se inventan, alteran ni simulan resultados.
- Si una clienta pide retirar su fotografía, se localiza dónde aparece, se informa a la
  responsable y se prepara la propuesta de retirada.
- Después de la aprobación, se prepara y ejecuta la modificación en la rama de trabajo.
- Llevar el cambio a la rama main y publicar la retirada requiere una autorización expresa e
  independiente de la responsable.
- Una vez autorizado y realizado el paso a main, se verifica que la fotografía ya no aparece
  en esa rama.
- Si existe acceso a la página publicada, también se comprueba que la fotografía ya no
  aparece allí.
- Si no existe acceso a la página publicada, se informa que la verificación en el sitio web
  queda pendiente. Nunca se afirma que se verificó algo que no pudo comprobarse.
- Retirar una fotografía de la página no garantiza su eliminación de las versiones anteriores
  del repositorio público. Cualquier intervención sobre el historial requiere la decisión y
  la intervención expresa de la responsable.

## Calendario de temporadas

- Las reglas están definidas en .claude/real-brow/calendario-temporadas.md.
- Durante todo el año se mantiene el diseño habitual. Las experiencias temáticas solo
  aparecen en los periodos aprobados previamente por la responsable.
- Celebraciones independientes: Día de la Mujer, Día de la Madre, Día del Padre, Amor y
  Amistad y Halloween, solo cuando se apruebe su realización y su periodo.
- En Colombia se usa Amor y Amistad, no San Valentín, como campaña por defecto.
- Ciclo de fin de año, con tres experiencias diferenciadas y conectadas: Navidad (desde la
  fecha de noviembre que defina la responsable hasta el 29 de diciembre, con el Día de las
  Velitas y la Navidad en la misma experiencia), Fin de Año (30 y 31 de diciembre) y Año
  Nuevo (desde el 1 de enero hasta la fecha que defina la responsable).
- Todas las fechas se gestionan con la zona horaria America/Bogota.
- No se inventan fechas ni se agregan promociones, descuentos o campañas comerciales sin
  autorización.

## Proceso de trabajo

- Metodología: entender, investigar, diagnosticar, proponer, aprobación, implementar en la
  rama de trabajo, auditar, vista previa, aprobación, publicar en main, verificar la web real
  y registrar en este archivo.
- Toda propuesta de cambio indica qué cambia, por qué, su impacto, su riesgo y cómo se
  revierte.
- Antes de diseñar una experiencia de temporada se hacen las cinco preguntas creativas:
  estilo, referencias, qué gusta de ellas, intensidad y si hay solo decoración o también
  promoción.
- Antes de implementarla se presentan concepto, moodboard, paleta, tipografías y recursos,
  estructura, animaciones, experiencia móvil y vista previa.
- Las vistas previas funcionales se preparan en local, fuera del repositorio, y se muestran
  con capturas y grabaciones. Cualquier vista previa alojada en un servicio externo requiere
  aprobación.

## Autorizaciones y seguridad

- Requieren aprobación expresa: crear, editar, mover o eliminar archivos; commits, pushes,
  merges y cambios de rama; cambios de estructura; cambios en información comercial, precios
  o servicios; promociones y experiencias de temporada; publicar o desplegar; acciones que
  creen, modifiquen, eliminen, publiquen o envíen información en servicios externos; y
  cualquier acción irreversible.
- Las consultas de lectura, investigación y revisión en servicios externos están permitidas
  sin autorización, siempre que no produzcan cambios ni envíen información, y nunca incluyen
  datos privados.
- Prohibido siempre, entre otros: forzar pushes, reescribir el historial y crear tareas
  programadas.
- Las reglas técnicas de .claude/settings.json son una capa de protección, no una garantía
  absoluta. Lo que no cubren queda igualmente sujeto a las reglas de aprobación.
- Ante una confirmación del sistema se elige «permitir una vez», nunca «permitir siempre».
- El repositorio es público: ningún archivo contiene credenciales ni datos personales.

## Orden de trabajo

1. Construir el agente principal: revisar y aprobar el contenido de los seis archivos, y
   después autorizar su implementación.
2. Crear las cuatro Skills, una por una, revisando y aprobando cada una.
3. Realizar la auditoría de la web existente, sin modificar archivos.
4. Trabajar la experiencia navideña con las referencias visuales que comparta la
   responsable.

## Hechos comprobados durante la configuración

No son decisiones, sino datos verificados que sirven de contexto.
- GitHub Pages publica la web desde la rama main. Llevar cambios a main equivale a publicar.
- El repositorio es público.
- Los commits figuran con un autor genérico, sin datos personales.
- Desde el entorno en la nube no hay acceso a jesscamejo.github.io.
- Las reglas de permisos configuradas fueron reconocidas por Claude Code durante la
  validación. No constituyen una garantía absoluta y deben complementarse con las reglas de
  autorización del proyecto.

## Historial

### 2026-11-24
- Se aprueba la arquitectura conceptual del agente y de sus cuatro Skills.
- El agente funciona como agente de la conversación principal.
- No se crean tareas programadas; los avisos de temporada se dan al iniciar cada sesión.
- Orden de trabajo: agente principal, Skills una por una, auditoría y experiencia navideña.
- Se detiene la implementación para revisar uno por uno el contenido de los seis archivos.
- Se aprueban los contenidos definitivos de los archivos 1 a 5.
