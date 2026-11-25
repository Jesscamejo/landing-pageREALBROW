# Continuidad · Experiencia de Navidad 2026 · Real Brow Studio

Informe para retomar el diseño de Navidad en una sesión nueva sin perder decisiones.
Redactado el 25 de noviembre de 2026 (America/Bogota). No sustituye a decisiones.md: las
decisiones de diseño de este informe aún no están registradas allí y hacerlo requiere
aprobación de la responsable.

## 1. Estado general

- La web publicada y la rama main no han cambiado: main sigue en el commit 59195ec y la web
  publicada coincide byte a byte con main.
- La experiencia de Navidad NO está activa. El periodo aprobado empezó el 25 de noviembre.
- Existe una vista previa local de la campaña (no publicada) con la portada aprobada.
- Esta carpeta guarda una copia de respaldo del código de esa vista previa. No se publica:
  GitHub Pages no sirve .claude/ y por decisión de la responsable .claude/ no se lleva a main.

## 2. Archivos de este respaldo

| Archivo         | Contenido                                            | SHA-256 (verificado)                                               |
|-----------------|------------------------------------------------------|--------------------------------------------------------------------|
| campana.css     | Estilos de la vista previa de la campaña             | 17eef3c9d34a24427da683cd65eeebf5ef149c330cb5280ef4cc6690e65d7184 |
| campana.js      | Estructura y elementos de la vista previa            | 7b7366a3287ac5cd6815e9a768415d1944eff4e15ac9f02026ae642a5554d6cc |
| CONTINUIDAD.md  | Este informe                                         |                                                                    |

Las dos copias son idénticas byte a byte a los archivos con los que se generaron las capturas
de esta sesión.

Atención: campana.css y campana.js incluyen también elementos NO aprobados (ver apartados
5 y 6). Lo primero al retomar es retirar el papel rasgado v2.

La fotografía de portada NO está en el repositorio (ver apartado 4).

## 3. Cómo volver a montar la vista previa local

1. Copiar la web de la rama (index.html, imagenes/, videos/) a una carpeta temporal, fuera
   del repositorio.
2. Copiar ahí campana.css y campana.js de esta carpeta.
3. Colocar la fotografía de portada como imagenes/campana-portada.webp (la responsable debe
   volver a adjuntarla).
4. En la copia de index.html (nunca en el original) añadir dos líneas:
   - Justo después de `</style>` (fin del bloque de estilos del head):
     `<link rel="stylesheet" href="campana.css">`
   - Justo después del `</script>` final, antes de `</body>`:
     `<script src="campana.js"></script>`
5. Servirla con un servidor local (no abrir como file://: el navegador bloquea las máscaras
   del logo). En la sesión anterior se usó un servidor Node de solo lectura en
   http://127.0.0.1:8765/.
6. Añadir ?habitual=1 a la dirección muestra la web sin la campaña, para comparar.

## 4. Fotografía de portada

- Archivo entregado por la responsable: 1536 × 1024 px, formato WebP, unos 490 KB.
- Contenido: modelo con vestido de encaje rojo, sentada junto a un árbol de Navidad con luces
  desenfocadas, peinando su ceja con un cepillo spoolie; sofá con tapizado verde y blanco.
- No se ha subido al repositorio porque es público y quedaría en su historial, y porque
  falta confirmar su origen y los derechos de uso.
- Pendiente antes de publicar: confirmar origen y derechos. Si la ceja no es trabajo del
  estudio, se usa solo como imagen de campaña y nunca se presenta como resultado.
- Una foto anterior (modelo con gorro de Papá Noel y abrigo borgoña) quedó sustituida.

## 5. Aprobado

### Portada navideña (aprobada; no modificar sin nueva aprobación)
- Fotografía integrada a sangre, sin marcos ni tarjetas.
  - Computador: ocupa toda la portada; velo vino degradado sobre el lado del árbol para la
    legibilidad; textos a la izquierda, lejos del rostro.
  - Celular: encuadre vertical de la foto arriba a todo el ancho (conserva rostro, ceja,
    spoolie, manos y brazos); la parte baja se funde con el fondo vino y debajo van los textos.
  - Tableta: foto completa a todo el ancho y textos debajo.
  - Ningún texto sobre el rostro ni sobre las cejas.
- Tipografía: «TEMPORADA» en Cormorant Garamond mayúscula con espaciado amplio; «Navideña»
  en Pinyon Script (Google Fonts), grande, en champán, entrelazada con la línea superior.
- Filete champán y mensaje secundario: «Este diciembre, regálate un momento *para ti*.»
- Botón «Reservar mi cita» (lleva al formulario actual, que abre WhatsApp) y enlace
  «Ver mis trabajos».
- Logo original de Real Brow Studio recoloreado con máscara, sin redibujarlo: champán sobre
  vino y vino sobre marfil o crema. En celular va en la cabecera; en computador, sobre el
  título.
- Comprobado: la reserva se ve y se puede tocar en la primera pantalla a 390 y 360 px, en
  tableta (768 px) y en computador (1280 y 1440 px), sin desbordes ni errores.

### Reglas de dirección dadas por la responsable
- Campaña editorial navideña de una marca premium de belleza especializada en cejas, no una
  plantilla navideña con el logo.
- Paleta: vino profundo y borgoña como protagonistas; marfil y crema para equilibrar;
  champán y dorado suave solo en detalles.
- Tipografía: serif editorial de alto contraste más una caligrafía fina y fluida como
  acento; nada infantil ni recargado.
- Fotografías grandes e integradas, nunca en tarjetas pequeñas.
- Cambios de composición entre secciones; riqueza visual sin plantillas.
- Logo siempre el original, adaptando solo el color al fondo.
- Experiencia decorativa: sin promociones, descuentos ni cuentas atrás.
- Papel rasgado como recurso en algunas divisiones estratégicas, no en todas (la idea está
  aprobada; la ejecución actual no).
- Guiño sutil a las Velitas dentro de Navidad, sin campaña aparte (cómo hacerlo, pendiente;
  sin velas).

### Organización (ya registrada en decisiones.md)
- Fechas: Navidad del 25 de noviembre al 29 de diciembre de 2026; Fin de Año 30 y 31 de
  diciembre; Año Nuevo del 1 al 6 de enero de 2027; regreso al diseño habitual el 7 de
  enero de 2027 a las 00:00.
- Dos aprobaciones por etapa: implementar en la rama de trabajo y, aparte, publicar.
- A main solo se llevan archivos de la web, con verificación previa del alcance.
- Skills pospuestas a enero de 2027.

## 6. Rechazado o descartado

- Papel rasgado v1 y v2 (bordes vectoriales generados por código con fibra blanca, sombra y
  textura): rechazado por la responsable. Está en campana.css (bloque «PAPEL RASGADO») y en
  campana.js (apartado «9. Papel rasgado v2»); hay que retirarlo o rehacerlo.
- Dirección «Terciopelo y marfil»: banda o tarjeta superpuesta, velas, cinta de satén dorada,
  iconos de corazón, hoja y ceja.
- Primera banda de temporada pegada sobre la portada («parece una tarjeta publicitaria»).
- Tres direcciones iniciales («Vitrina», «Claroscuro», «Proporción»): sustituidas por la
  dirección basada en las referencias de la responsable.
- Sello dorado con monograma «RB»: retirado; solo se usa el logo original.
- Velas, iconos decorativos y gráficos que parezcan prediseñados o generados en serie.
- Nieve: no corresponde al clima de Arauca.
- Fotografías de modelos o cejas generadas o de banco presentadas como trabajo del estudio:
  prohibido por las reglas del proyecto.

## 7. Referencias visuales de la responsable (no guardadas en el repositorio)

Las imágenes no se conservan; se describen para poder pedirlas de nuevo.
1. Plantilla de boletín navideño (Meraki Templates): bloques vino y crema alternados,
   tarjetas redondeadas, serif con palabra en caligrafía («Let's fix that»). Le gustan los
   bloques alternos, las tarjetas redondeadas y la combinación serif + caligrafía. Se
   descartan la cuenta atrás y el código de descuento.
2. Only Minerals «Shining Star»: carmesí con cortes diagonales y paneles crema, zigzag de
   imagen y texto, dorado.
3. Maqueta de landing «Navidad en Real Brow» en vino: composición de portada, filete dorado,
   franja de valores. No se pueden usar sus personas, cejas, servicios inventados ni textos
   con promesas.
4. Presentación «The Christmas Campaign»: bloques vino, verde y crema, serif con caligrafía,
   numeraciones, bordes a rayas.
5. «Moonlit Night»: damasco tonal rojo, sello dorado, guion caligráfico dorado, bodegón.
6. Foto de portada actual (ver apartado 4).
7. y 8. Referencias de papel rasgado («Holiday Collection»): franja vino con bordes de papel
   rasgado y caligrafía de lujo en champán.
9. Papel marfil rasgado sobre fondo vino, con bordes fibrosos y sombra.
10. y 11. Referencias finales del papel rasgado que la responsable quiere seguir
   («necesito que lo hagas de esta forma»):
   - Papel de aspecto fotográfico real, con textura de fibra muy visible y borde ancho,
     blanco y esponjoso.
   - Contornos grandes, suaves y orgánicos, no un dentado fino.
   - El papel funciona como panel de contenido: franjas de papel rasgadas arriba y abajo,
     con el texto encima, sobre fondo vino o beige.
   - Recomendación: usar una textura real de papel rasgado (foto o escaneo con transparencia,
     propia o con licencia) en lugar de dibujarla por código.

## 8. Avances en la vista previa (pendientes de revisión, no aprobados)

- Franja «Cejas que enmarcan *tu mirada*» con los valores ya aprobados de «Sobre mí» en lista
  numerada.
- Servicios en un panel con borde a rayas vino y marfil y precio en forma de etiqueta.
- Secciones de servicio con fotos a sangre y números de capítulo 01 a 04.
- Técnica Real Brow en vino como capítulo central.
- «Nota de Jessica» con retrato y logo.
- Galería sobre vino con las fotos como copias impresas ligeramente giradas.
- Formulario de reserva como tarjeta de regalo con banda a rayas.
- Damasco tonal (estrella de ocho puntas) en fondos vino y crema; grano de papel en las
  secciones claras.
- Titulares con caligrafía: «TÉCNICA / *Real Brow*», «MIS / *trabajos*»,
  «RESERVA / *tu cita*».
- Pie con «Real Brow Studio · Edición de Navidad · Arauca · MMXXVI».

## 9. Pendiente

Diseño
1. Rehacer el papel rasgado según las referencias 10 y 11, con textura real.
2. Revisar y aprobar las secciones del apartado 8.
3. Aprobar o descartar los titulares con caligrafía.
4. Aprobar los textos nuevos: «Una nota de Jessica» y su texto («Gracias por confiarme tu
   mirada este año. En diciembre te espero con calma, para que este momento sea solo para
   ti.»), «Real Brow Studio · Navidad» y «Edición de Navidad · Arauca · MMXXVI».
5. Definir el guiño a las Velitas sin velas.

Antes de publicar
6. Confirmar origen y derechos de la fotografía de portada.
7. Optimizar la fotografía para celular sin alterar su aspecto.
8. Confirmar el horario de los festivos (24, 25 y 31 de diciembre y 1 de enero); no se
   inventa.
9. Proponer la estructura técnica de temporadas: carpeta temporadas/, activación por fechas
   en hora de Bogotá, vuelta automática al diseño habitual, carga solo si está activa.
10. Probar el paso de Instagram a WhatsApp en un iPhone y un Android reales.
11. Auditoría antes de publicar y publicación selectiva de archivos de la web en main, con
   aprobación expresa.

Calendario y otros
12. Diseñar Fin de Año y Año Nuevo (la responsable decidió dejarlos para después; deben
   quedar aprobados antes del 30 de diciembre según el calendario).
13. Registrar en decisiones.md las decisiones de diseño de este informe (requiere
   aprobación).
14. Pendientes del plan de auditoría: portada móvil permanente (etapa 1, no presentada),
   foto «2026» de la portada habitual, enlace de Facebook, resto de etapas.

## 10. Al empezar la sesión nueva

- Iniciar la sesión desde la rama claude/landing-real-brow.
- Leer decisiones.md y este informe.
- Pedir a la responsable que vuelva a adjuntar la fotografía de portada y las referencias
  10 y 11 del papel rasgado.
- No modificar la portada aprobada sin una nueva aprobación.
