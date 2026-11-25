# Real Brow Studio · Reglas del proyecto

Este repositorio contiene la web de Real Brow Studio, estudio especializado en diseño,
embellecimiento y cuidado estético de cejas en Arauca, Colombia.
Estas reglas se aplican a cualquier sesión que trabaje en este repositorio.

@real-brow/marca.md
@real-brow/calendario-temporadas.md

## Publicación
- La web pública (GitHub Pages) se publica desde la rama `main`.
- La rama de trabajo es `claude/landing-real-brow`. Trabajar en ella no cambia la web.
- Llevar cambios a `main` equivale a publicar.

## Estructura
- `index.html`: toda la página (HTML, CSS y JS).
- `imagenes/` y `videos/`: fotos y videos reales del estudio.
- `README.md`: guía de edición para la responsable del estudio.
- `.claude/`: configuración del agente. GitHub Pages no publica esta carpeta.

## Zonas protegidas
No se modifican sin aprobación expresa:
- El bloque «TUS DATOS» de `index.html`: datos del estudio, servicios, precios, contacto y galería.
- Los textos comerciales: servicios, descripciones, duraciones y precios.
- Las fotos y los videos de `imagenes/` y `videos/`.
- La configuración de `.claude/`.

## Requiere aprobación expresa
Antes de actuar, explicar qué cambia, por qué y qué impacto tiene, y esperar un sí explícito para:
- Crear, editar, mover o eliminar cualquier archivo del repositorio.
- Hacer commits, pushes o merges, o cambiar de rama.
- Cambiar la estructura permanente de la página.
- Modificar información comercial, precios o servicios.
- Crear, activar o desactivar promociones, descuentos o experiencias de temporada.
- Publicar o desplegar (cualquier cambio que llegue a `main`).
- Cualquier acción en servicios externos conectados que cree, modifique, elimine, publique o
  envíe información (ver «Servicios externos conectados»).
- Cualquier acción irreversible.

### Servicios externos conectados
Se aplica a GitHub, a las plataformas de marketing y redes sociales conectadas y a cualquier
otro servicio externo:
- **Permitido sin autorización:** consultas de lectura, investigación y revisión, siempre que
  no produzcan cambios ni envíen información.
- **Requiere aprobación expresa:** cualquier acción que cree, modifique, elimine, publique o
  envíe información; por ejemplo, issues, comentarios, revisiones, pull requests,
  publicaciones, mensajes o cambios en campañas.
- Las búsquedas y consultas de investigación nunca incluyen datos privados del estudio, de la
  responsable ni de clientas.

## Prohibido siempre
- Inventar precios, descuentos, promociones, testimonios, reseñas o resultados.
- Usar fotos de antes y después que no sean trabajos reales del estudio, o retocarlas para exagerar resultados.
- Buscar, descargar o tomar fotografías de clientas de otras fuentes (redes sociales, internet
  u otras) por iniciativa propia. Solo se usan las que entrega la responsable del estudio.
- Usar una fotografía de clienta para un propósito distinto del que indicó la responsable.
- Inventar, alterar o simular resultados con imágenes, o atribuir a una fotografía resultados
  que no correspondan a la realidad.
- Copiar literalmente diseños, textos o ilustraciones de las referencias.
- Usar imágenes, tipografías o personajes sin licencia o protegidos por derechos de autor.
- Cambiar el número de WhatsApp o los datos de contacto sin instrucción expresa.
- Escribir o borrar archivos con scripts, redirecciones del shell (`>`, `>>`, `sed -i`, `tee`)
  u otras vías que eviten las herramientas de edición y sus controles.
- Forzar pushes o reescribir el historial.
- Crear tareas programadas o recordatorios automáticos.

## Fotografías de clientas
- Cuando la responsable comparte fotografías para la web, galerías, publicaciones o diseños,
  esa entrega es la autorización para el propósito que indique. No se pide una autorización
  adicional por cada fotografía.
- Incorporarlas al proyecto sigue el proceso normal de cambios: se propone dónde y cómo
  aparecen, y el cambio se aprueba una vez para el conjunto.
- La optimización técnica de tamaño, compresión y formato está permitida dentro del cambio
  aprobado, siempre que no altere el aspecto de la imagen. Cualquier retoque que cambie el
  aspecto del resultado está prohibido.

### Retirada a petición de una clienta
1. Localizar todos los lugares donde aparece la fotografía: archivos de `imagenes/`,
   `index.html`, experiencias de temporada y cualquier otro material del proyecto.
2. Informar a la responsable de lo encontrado y preparar la propuesta de retirada.
3. Primera autorización, para la rama de trabajo: cuando la responsable apruebe la propuesta,
   preparar y ejecutar la retirada en la rama de trabajo `claude/landing-real-brow`. Esta
   autorización no incluye llevar el cambio a `main` ni publicarlo.
4. Segunda autorización, expresa e independiente, para publicar: llevar el cambio a `main` y
   publicar la retirada solo cuando la responsable lo autorice expresamente.
5. Verificación: una vez realizado el paso a `main`, comprobar que la fotografía ya no aparece
   en esa rama. Si existe acceso a la página publicada, comprobar también que ya no aparece
   allí.
6. Si no existe acceso a la página publicada, dejar constancia ante la responsable de que la
   verificación en el sitio web queda pendiente. Nunca se afirma que se verificó algo que no
   pudo comprobarse.

### Límites de la retirada
- Retirar una fotografía de la página no garantiza su eliminación de las versiones
  anteriores del repositorio, que es público: el archivo puede seguir existiendo en el
  historial de git.
- Tampoco elimina las copias externas, como publicaciones en redes sociales o cachés de
  buscadores.
- Cualquier intervención sobre el historial del repositorio requiere la decisión y la
  intervención expresa de la responsable. El agente nunca reescribe el historial ni hace
  push forzados; solo informa y explica las opciones si se le piden.

## Privacidad
El repositorio es público. Ningún archivo debe contener credenciales, correos, teléfonos
personales, direcciones, datos de clientas ni enlaces privados.

## Seguridad: control técnico frente a instrucciones
Las reglas de `.claude/settings.json` son una capa de protección, no una garantía absoluta.

Control técnico:
- Bloqueado siempre: los push forzados, crear o copiar repositorios y crear tareas
  programadas.
- Confirmación del sistema: crear o editar archivos del repositorio (también con
  redirecciones, `touch`, `cp` o `sed -i`); las operaciones de git que cambian archivos,
  historial, ramas o configuración, incluidas las variantes `git -C` y `git -c`;
  `bash -c` y `sh -c`; el código Python o Node escrito en la línea de comandos; `rm`, `mv`
  y `gh`; las herramientas de GitHub que escriben o publican; y las acciones en plataformas
  de marketing conectadas.

Operaciones no cubiertas:
- Lo que el control técnico no detecta (scripts guardados en archivos, instalación de
  paquetes, otros intérpretes o cualquier vía no prevista) queda igualmente sujeto a las
  reglas de «Requiere aprobación expresa».
- Esas vías no se usan para modificar archivos del repositorio ni servicios externos sin
  aprobación, y nunca para evitar una confirmación del sistema.
- Ante la duda sobre si una acción está cubierta, se pide aprobación en el chat antes de
  ejecutarla.

Confirmaciones del sistema: elegir «permitir una vez», nunca «permitir siempre».
