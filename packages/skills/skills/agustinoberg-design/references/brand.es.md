<!-- Generated from packages/brand/brand.es.md by packages/skills/scripts/sync/agustinoberg-design.mjs. Do not edit here: edit the brand spec and run `pnpm sync:skills`. -->

# Agustín Oberg · design language v2.1

> **Para IA:** esta es la traducción al español de `brand.md`, que está en inglés y es la versión principal. Si alguna vez difieren, gana `brand.md`. Esta guía es la fuente de verdad de cómo diseño, para cualquier proyecto en mi estilo (apps, sitios, portfolios, presentaciones o shots), no solo para mi marca. Leela completa antes de diseñar. Las reglas definen la mano, no un layout: la sección 4, "Rango", dice qué queda fijo y qué decide cada proyecto. Para un producto, seguí la sección 14, "Aplicar a cualquier proyecto"; para mi portfolio, la 15, "Receta: portfolio". Los valores exactos están en `tokens.json` y listos para usar en `tokens.css`. Si te falta contenido real (proyectos, textos, métricas, imágenes), **preguntá antes de inventar** y usá placeholders marcados `[TODO]`.

En el sitio (https://agustinoberg-design.pages.dev por ahora; después https://design.agustinoberg.com):
- `brand.md`: la spec en inglés (principal). `brand.es.md`: este documento.
- `tokens.css` y `tokens.json`: todos los valores, por modo.
- `llms.txt`: índice para modelos. `llms-full.txt`: la spec y los tokens en un solo archivo.
- `/` y `/es/`: la guía visual con demos interactivas, en inglés y en español.

En el repo: `packages/brand/` (spec y tokens, paquete `@agustinoberg/brand`), `apps/design/` (el sitio) y `packages/skills/` (las skills para agentes).

---

## 0. Identidad

- **Quién:** Agustín Oberg, product designer. Mobile primero, con foco en motion y sistemas. `[TODO: confirmar rol, seniority, ubicación y tipo de cliente]`
- **Posicionamiento (borrador):** "Product design and motion for teams that ship."
- **En una línea:** interfaces monocromas donde el producto es el protagonista, con profundidad hecha de luz y blur, y un movimiento preciso que explica.
- **Referencias de origen:** el trabajo de Dominik Tyka (dribbble.com/dominikt) y el estudio Figura (figura.digital). Se toma el criterio, nunca las piezas: no reutilizar sus logos, nombres de proyecto, textos ni imágenes.
- **Nombre en pantalla:** "Agustín Oberg", con mayúsculas como cualquier nombre propio, Inter Display 650, tracking −3.5%. Monograma provisorio: "ao" en un cuadrado redondeado de 28 px (radio 9), invertido (fg sobre bg). `[TODO: logo definitivo]`

---

## 1. Filosofía

La gente no lee interfaces: las siente.

1. **El detalle es el producto.** Dos apps con las mismas funciones no se sienten igual. La diferencia está en 200 ms, en un blur de 6 px, en un botón que se achica al tocarlo. Ahí va la mayor parte del tiempo.
2. **Marco quieto, producto protagonista.** Fondos neutros, tipografía contenida y casi nada de color alrededor de la pantalla. Cuanto más callado el marco, más se escucha el producto.
3. **Profundidad con luz, no con líneas.** Las capas se separan con desenfoque, transparencia y sombras suaves. Los bordes y las cajas dividen; el blur ordena sin cortar la imagen.
4. **El movimiento explica.** Se anima para mostrar de dónde viene algo y adónde va. Si una animación no responde una pregunta, se saca.
5. **Un color manda en cada historia, y el contenido trae el resto.** El marco vive en negro, blanco y grises para que el color pueda sonar fuerte donde significa algo. Cada proyecto elige un color protagonista y se compromete con él: a veces como un acento puntual y a veces como superficies enteras. Fotos, objetos, personas y datos suman su propio color encima.
6. **Claro y oscuro desde el día uno.** Los dos modos se diseñan en paralelo. Nada se invierte automáticamente.
7. **Las palabras también son diseño.** Copy corto, voz activa, cero jerga. Si un botón necesita explicación, el botón está mal.

---

## 2. Decisiones y por qué

| decisión | por qué | regla |
|---|---|---|
| Botones siempre pastilla | Se leen como tocables, entran bajo el pulgar y repiten la curva del teléfono. | radio 999 · alto 40 o 52 |
| Titulares chicos en dos tonos | La seguridad no necesita tamaño. El gris arma la jerarquía y deja el tamaño grande para los números. | línea 1 `fg`, línea 2 `fg-2`, mismo tamaño y peso |
| Números enormes | Hora, plata y puntaje son lo que la gente vino a ver. | 600 · tabular-nums · tracking −4.5% |
| Una sola sans | Inter Display tiene tamaño óptico y números tabulares, y se parece a SF Pro. | Inter Display + Geist Mono solo en labels |
| Geist Mono en labels | Marca lo técnico y ordena sin competir. | 11 px · mayúsculas · +6% |
| Negro puro en oscuro | En OLED el negro desaparece, el device se funde y los glows ganan contraste. | `bg` #000 |
| Gris claro en claro | El blanco puro cansa y no deja separar cards. | `bg` #F4F4F4, cards #FFF |
| Blur en vez de bordes | El vidrio deja ver el contexto y separa sin cortar. | blur 20 · saturate 180% · luz interna 1 px |
| Sheets flotantes y concéntricos | Separado del borde se lee como capa; concéntrico parece hardware. | inset 12 · radio = exterior − inset |
| Ease-out por defecto | Responde al instante y frena como algo real. | `cubic-bezier(.22,1,.36,1)` |
| Cerrar más rápido que abrir | Quien cierra ya decidió. | abrir 420 ms · cerrar 280 ms |
| Un color protagonista por proyecto | Un color sostenido se recuerda. | elegir 1 de 6 atmósferas o crear una con la misma receta · nunca dos protagonistas |
| Un dial de color, no una prohibición | Hay productos que susurran y productos que gritan. Mono con un acento puntual y una pantalla inundada de color son los dos míos. | dial 0–3 por proyecto (sección 6) |
| El contenido trae su propio color | Fotos, objetos 3D, avatares y datos son lo que la gente vino a ver. Un marco quieto los hace brillar. | los colores de contenido y de datos no cuentan contra el protagonista |
| Mockups frontales, sin manos | La perspectiva y las manos achican la pantalla. | device ≤ 60% del alto |

---

## 3. Reglas si/entonces (para aplicar sin pensar)

- **Si diseñás un botón:** pastilla. Primario = `fg` de fondo y `bg` de texto (se invierte por modo). Secundario = `btn-2`. Sobre imagen o atmósfera = vidrio. Alto 40 (normal) o 52 (principal de pantalla). Texto 14/600 o 16/600.
- **Si diseñás un titular de afirmación** (un hero, la apertura de una sección, un estado vacío): dos líneas máximo. Primera en `fg` (afirma), segunda en `fg-2` (explica). Peso 600 y tracking negativo. No más de 48 px en web salvo display; en mobile, 22–28. Los títulos de cards, filas y bloques chicos van en un solo tono.
- **Si hay un número importante:** que sea lo más grande de la pantalla. Tabular-nums. Cuando cambia, rueda.
- **Si algo flota sobre contenido** (sheet, card, toast): se separa del borde, lleva radio concéntrico y, si hay imagen detrás, vidrio.
- **Si hay contenido detrás de un sheet:** retrocede. Blur 10 px, scale 0.96, opacity 0.6.
- **Si una lista o barra scrollea:** blur progresivo en el borde, nunca un corte duro.
- **Si hay un mapa, foto o cámara de fondo:** blur de borde, nítido al centro.
- **Si un estado cambia** (enviar → enviando → enviado): cambio con blur en el mismo lugar.
- **Si algo está cargando con texto:** shimmer. Si algo está en vivo: punto vivo.
- **Si hay que confirmar una acción con resultado:** el botón se convierte en el check. No toast.
- **Si hay que avisar algo sin decisión:** toast. Si hay decisión: sheet.
- **Si separás capas en modo claro:** sombra suave. En oscuro: escalón de superficie y una luz de 1 px arriba.
- **Si arrancás un proyecto:** elegí su color protagonista (una atmósfera) y su dial de color (0–3). Mono es una elección, no el default.
- **Si hay fotos, objetos 3D, avatares o ilustraciones:** dejalos a todo color. No desatures el contenido para que combine con el marco.
- **Si los datos tienen categorías** (métricas, series de un gráfico, tags, capas de un mapa): dale a cada categoría su color de datos, el mismo en todo el producto.
- **Si diseñás el chrome de mi marca personal** (nav, tipografía, botones de mi sitio): mono. Los proyectos que se muestran adentro llevan todo su color.
- **Si dudás entre agregar o sacar:** sacá.
- **Si escribís un nombre, un link de la nav o un título:** mayúsculas normales. Los nombres propios como los escriben sus dueños (Agustín Oberg, TraiNow), la nav y los botones con mayúscula inicial (Work, About, Book a call) y el copy en sentence case. Solo los labels mono van en mayúsculas.
- **Si un layout se parece a uno que ya hiciste en este lenguaje:** cambialo (sección 4).

---

## 4. Rango: la misma mano, trabajos distintos

Las reglas de arriba definen cómo se siente mi trabajo. No definen un layout. Si dos proyectos en mi estilo parecen el mismo template con otras palabras, el lenguaje falló. El objetivo es un aire de familia: se reconoce la mano, no la página.

### Fijo: la mano
Esto no cambia entre proyectos.
- Los tokens: escala mono, colores semánticos, familias tipográficas, escala de radios, base de espaciado, límites de blur, curvas y duraciones.
- Botones pastilla, radios concéntricos, profundidad con luz en vez de líneas y titulares de afirmación en dos tonos.
- Claro y oscuro, cada uno con sus propios valores.
- El vocabulario de motion, los micro-blurs y sus límites.
- Las reglas de voz, y nada inventado.

### Libre: el trabajo
Cada proyecto lo decide a partir de su propio contenido. Las opciones son ejemplos, no un menú para recorrer en orden.

| eje | rango |
|---|---|
| composición | columna editorial · split asimétrico · stages a sangre · índice o grilla · una pantalla que se comporta como app · scroll narrativo largo · un objeto centrado en un stage |
| ritmo de secciones | label mono en una columna lateral · label arriba del contenido · capítulos numerados · sin labels, solo espacio |
| dónde vive la escala | un número enorme · una imagen u objeto enorme · una palabra gigante con blur detrás (profundidad por capas) · nada grande, todo preciso |
| densidad | una idea por pantalla ↔ índice denso, tablas y specs |
| historia de color | el color protagonista (uno de seis, o uno nuevo con la misma receta) y el dial: 0 mono · 1 acento · 2 atmósfera · 3 superficie (sección 6) |
| imagen | device en un stage · foto a sangre con blur de borde · objeto de marca · solo tipografía · datos y diagramas |
| navegación | barra arriba · pill flotante · índice lateral · ninguna (una sola página) |
| temperamento del motion | quieto y exacto · un momento protagonista · reveals contados con el scroll (dentro de los límites de la sección 11) |
| momento firma | el detalle que la gente va a recordar. Uno manda; de dos a cinco lo acompañan. |

### Los defaults son una respuesta, no la respuesta
El layout y la nav de la sección 8, la receta mobile de la sección 14 y el portfolio de la sección 15 son buenos defaults. Usalos solo cuando el contenido no da una razón para hacer otra cosa, y preguntate primero qué pide el contenido.

### Dirección antes que píxeles
Antes de cualquier layout, escribí la dirección en tres líneas:
1. **Idea:** una frase sobre este contenido que el diseño tiene que expresar. Ejemplo: "un horario de trenes: preciso, rítmico, todo es tiempo".
2. **Elecciones:** una por cada eje libre, cada una con una razón que sale del contenido.
3. **Momento firma:** lo único que la gente va a recordar.

Si esas tres líneas sirven para cualquier proyecto, no son una dirección. Reescribilas. Para piezas más grandes (un sitio, una home, una pantalla clave), bocetá dos o tres direcciones que difieran en al menos tres ejes, y elegí una o dejame elegir.

### No te repitas
- Mi sitio de diseño (columna de labels sticky a la izquierda, titular de dos tonos con dos botones en el hero) es una instancia del lenguaje, no su template.
- Si conocés otro trabajo en este lenguaje (el sitio de diseño, el portfolio, pantallas anteriores del proyecto o de la conversación), cambiá al menos tres ejes libres.
- El mismo tipo de contenido no implica el mismo layout. Dos portfolios pueden no compartir ninguna estructura.

### La prueba
- Tapá el nombre: ¿igual se sabe qué proyecto es? Tiene que ser distinto.
- Mirá los detalles: ¿se sabe quién lo diseñó? Tiene que ser la misma mano.

Las dos respuestas tienen que ser sí.

---

## 5. Claro y oscuro

Los dos modos son de primera clase. Por defecto se sigue al sistema y la persona puede elegir sistema, claro u oscuro. En web: `data-theme="light|dark"` en `<html>`; sin atributo sigue a `prefers-color-scheme`. Para forzar una parte: clase `.theme-light` o `.theme-dark`.

| aspecto | claro | oscuro |
|---|---|---|
| fondo (`bg`) | #F4F4F4 | #000000 |
| cards (`surface-1`) | #FFFFFF + sombra suave | #111111 + luz interna de 1 px |
| dentro de cards (`surface-2`) | #F0F0F0 | #1F1F1F |
| sheet opaco (`sheet-bg`) | #FFFFFF | #1F1F1F |
| texto (`fg` / `fg-2` / `fg-3`) | #0A0A0A / #6B6B6B / #A1A1A1 | #FFFFFF / #8F8F8F / #5C5C5C |
| botón secundario (`btn-2`) | #E6E6E6 | #1F1F1F |
| vidrio (`glass`) | blanco 68% | blanco 12% |
| hairline (`line`) | negro 7% | blanco 8% |
| separación | sombra | escalón de superficie + hairline |
| atmósferas | pastel con glow saturado | profundas con glow brillante |
| grano | 5% | 12% |
| stage de devices | #E8E8E8 | #EDEDED (el stage claro se mantiene) |

**Siempre:**
- Diseñar los dos modos en paralelo.
- Darle a cada token un valor elegido por modo.
- Revisar contraste AA en ambos.
- En los shots, mostrar un modo por shot o cortar claro → oscuro a mitad del loop.

**Nunca:**
- Gris medio como fondo oscuro.
- Sombras grandes en oscuro.
- Dejar un modo "para después".
- Usar el mismo vidrio en los dos modos.

---

## 6. Color

### Escala mono (igual en ambos modos)
black #000000 · ink-950 #0A0A0A · ink-900 #111111 · ink-800 #1F1F1F · ink-700 #2B2B2B · ink-600 #3D3D3D · ink-500 #5C5C5C · ink-400 #8F8F8F · ink-300 #B8B8B8 · ink-200 #D9D9D9 · ink-150 #E6E6E6 · ink-100 #EDEDED · ink-50 #F4F4F4 · white #FFFFFF

### Semánticos (solo estados, nunca decoración)
positive #34C759 · warning #FF9F0A · critical #FF453A

### Atmósferas (una manda en cada proyecto)
Se arman como gradiente radial desde arriba (`a-2` → `a-1` → `a-0`), con un glow central al 38% y grano. Los tonos 1 y 2 también sirven como superficies teñidas, y el glow es el acento.

| atmósfera | para | oscuro (0 / 1 / 2 / glow) | claro (0 / 1 / 2 / glow) |
|---|---|---|---|
| forest | deporte, outdoor, foco | #07130B / #183021 / #3F7A45 / #8FD68A | #F4F8F3 / #E3EFE0 / #B9DCB3 / #7CC874 |
| ember | tiempo, energía, descanso | #0F0A02 / #3D2905 / #B8821A / #FFCF5C | #FBF7EF / #F5E7C8 / #ECCB83 / #E0A730 |
| tide | plata, confianza, chat | #03081A / #0F2152 / #2F5BD6 / #8FB4FF | #F2F5FC / #DFE7FA / #B3C7F2 / #5B86E8 |
| rouge | social, ubicación, alertas | #14030A / #4A0D24 / #D6245E / #FF8FB4 | #FBF2F5 / #F7DDE6 / #F0B0C6 / #E2557F |
| iris | creatividad, IA, talento, noche | #0B0719 / #231552 / #6D45E0 / #B9A4FF | #F6F4FD / #E9E3FB / #CBBDF6 / #8C6CF0 |
| flame | deporte intenso, comida, urgencia, calor | #140802 / #4A1C08 / #D9531A / #FF9F6B | #FCF5F1 / #F9E3D7 / #F3BC9F / #F2753A |

Los hex del núcleo oscuro y del vidrio vienen del CSS de figura.digital. Los de las atmósferas son propios, aproximados a partir de las referencias.

### Dial de color (uno por proyecto)
Las referencias no son blanco y negro. Sus marcos son quietos, pero los productos de adentro están llenos de color: fotos, objetos 3D, colores por categoría y, a veces, una pantalla entera en el color de la marca. Cada proyecto define qué tan fuerte suena su color protagonista.

| dial | qué cubre el color protagonista | sirve para |
|---|---|---|
| **0 · mono** | Nada. El color viene solo del contenido y los datos. | El chrome de mi marca personal, herramientas donde el contenido ya es colorido. |
| **1 · acento** | Un solo tipo de elemento por pantalla: la acción del dominio (Book, Pay), los pins o el progreso activo. | Productos tranquilos, utilitarios y de plata. |
| **2 · atmósfera** | El acento, más la atmósfera completa en momentos clave (onboarding, estados vacíos, confirmaciones grandes, heroes) y superficies teñidas (tono 1) en cards destacadas. | La mayoría de los productos de consumo. |
| **3 · superficie** | El color como superficie: cards, paneles, headers o pantallas enteras en el glow o el tono 2, con texto on-accent. Lo mono queda para el texto corrido y el chrome. | Marcas audaces, lanzamientos, social, deporte, juegos, shots de presentación. |

En cualquier dial, el botón primario genérico sigue siendo `fg` sobre `bg`, y el protagonista es el único color de marca. En CSS, `.accent-{atmósfera}` en un contenedor da `--accent`, `--accent-1` y `--accent-2`; `.surface--tint` y `.surface--accent` pintan una superficie. Sobre `.surface--accent`, todo el texto va en on-accent (#0A0A0A) y la jerarquía sale del tamaño y el peso.

### Color de contenido (siempre permitido)
Fotos, video, objetos 3D y de marca, avatares, ilustraciones, mapas e íconos de apps mantienen todo su color en cualquier dial. No cuentan como un segundo color. Enmarcalos en mono para que brillen; nunca los tiñas ni los desatures para que combinen.

### Color de datos (solo categorías)
Cuando los datos tienen categorías (métricas de salud, series de un gráfico, tags, capas de un mapa, colores de tee), cada categoría recibe un color de datos y lo mantiene en todos lados: `--data-forest`, `--data-ember`, `--data-tide`, `--data-rouge`, `--data-iris`, `--data-flame`. El protagonista va primero. En claro son más profundos que los glows para que las marcas lleguen a 3:1; en oscuro son los glows. Usalos en puntos, íconos, barras y labels chicos, nunca como rellenos grandes decorativos. Con más de cuatro series, etiquetá directo.

---

## 7. Tipografía

- **Inter Display** (Google Fonts: Inter con eje `opsz` 14–32) para todo.
- **Geist Mono** solo para labels.

| rol | tamaño / peso | tracking | color |
|---|---|---|---|
| display | 56 / 600 (clamp 36–56) | −3% | fg |
| h1 | 40 / 600 | −3% | fg |
| h2 | 28 / 600 | −1.5% a −3% | fg + fg-2 |
| h3 | 22 / 600 | −1.5% | fg |
| body | 16 / 400, interlineado 1.55, ≤ 62 caracteres | 0 | fg-2 |
| small | 14 / 500 | 0 | fg-2 |
| label | Geist Mono 11 / 400, mayúsculas | +6% | fg-2 o fg-3 |
| números | 64–128 / 600, tabular-nums | −4.5% | fg |

Reglas:
- Mayúsculas normales en todo. Los nombres (personas, proyectos, apps, lugares) se escriben como los escriben sus dueños: Agustín Oberg, Mi Huerta, TraiNow. Los links de la nav, los botones y los tabs arrancan con mayúscula (Work, About, Book a call). Titulares, títulos de shots, posts y copy en sentence case. Nada va en minúscula por estilo.
- Las mayúsculas sostenidas son solo para los labels mono y el acento serif opcional de abajo.
- `→` para flujos: `Onboarding → first payment`.
- `®` solo si la marca está registrada.
- Acento editorial opcional: una línea en serif y mayúsculas para el nombre de una marca o colección (visto en referencias). Máximo una por pantalla.

---

## 8. Forma, espacio y layout

- **Radios:**
  - `r-xs` 8: stage.
  - `r-md` 16: thumbs e inputs.
  - `r-lg` 24: cards.
  - `r-xl` 32: sheets.
  - `r-pill` 999: botones, chips, toggles y segmented.
  - `r-device` 50: marco de iPhone a ~270 px de ancho.
- **Concéntrico:** radio interno = radio externo − margen. Ejemplo: pantalla 44, sheet a 12 del borde → radio 32.
- **Espacio (base 4):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 160.
- **Layout web, fijo:**
  - Ancho máximo 1280 y gutter 24 (16 en mobile). Un layout puede ser más angosto, o ir a sangre en stages e imágenes.
  - Separación entre secciones según la escala: 96 por defecto (64 en mobile). Los layouts densos pueden bajar a 48; los aireados, subir a 160.
- **Layout web, default** (una opción; decide la dirección, ver sección 4): secciones con un label mono en una columna izquierda sticky de 200 px y el contenido a la derecha.
- **Nav web, fijo:** tenga la forma que tenga, una nav que queda en pantalla lleva blur progresivo que se desvanece 36 px debajo, links de 14 px con mayúscula inicial y el selector de tema.
- **Nav web, default** (una opción): barra sticky, wordmark a la izquierda, links a la derecha y una línea de 40 px antes del último link o CTA. Otras formas: una pill flotante, un índice lateral o ninguna nav en una página única.
- **Cards:** `surface-1`, radio 24, padding 24, `elev-1` + hairline. Usarlas solo donde hace falta separar un objeto; no todo es card.

---

## 9. Componentes

- **Botón primario:** pastilla, `fg`/`bg`, 600. Hover: mezcla del 86% hacia `bg`. Press: scale 0.97.
- **Botón secundario:** pastilla, `btn-2`; hover `btn-2-hover`.
- **Botón vidrio:** `glass` + blur 20 + saturate 180% + luz interna de 1 px. Solo sobre imagen o atmósfera.
- **Chip:** pastilla de 26 px, 12/500, `btn-2`. Punto de estado opcional de 6 px.
- **Sheet:**
  - Opaco: `sheet-bg`, radio 32, `elev-2` y grabber de 36×5.
  - Flotante sobre imagen: vidrio, blur 32, saturate 160%, inset 12, radio concéntrico.
- **Segmented:** pastilla `surface-2` con thumb `fg` que viaja. El texto activo va en `bg`.
- **Toggle:** 64×34, thumb de 28 que se estira a 36 al apretar. Encendido = positive.
- **Toast:** pastilla `fg`/`bg`, abajo al centro, 1600 ms.
- **Island pill:** pastilla negra de 36 px de alto que crece a card (radio 32) para actividades en vivo.
- **Stage:** panel `stage`, radio 8, device centrado.

---

## 10. Micro-blurs y micro-animaciones

Es la capa que más importa. Ninguno se nota solo; juntos son la diferencia.
- Fuera del vidrio, el blur nunca pasa de 10 px.
- Ninguna micro-animación dura más de 420 ms (salvo los loops de carga y en vivo).

| patrón | dónde | spec | por qué |
|---|---|---|---|
| **Blur progresivo** | bordes de listas, nav, tab bars | 4 capas con blur 1/2/4/8 px y máscaras de 100/75/50/25% del alto. Alto 72 px más un fade del color de fondo. Clase `.pblur`. | El contenido se va de a poco, como en iOS. |
| **Blur de borde** | mapas, fotos, cámara | Blur 10 px + saturate 110%. Máscara radial: nítido hasta el 40%, blur pleno en el borde. Clase `.edgeblur`. | Profundidad de campo: el ojo va al centro. |
| **Vidrio flotante** | sheets y cards sobre imagen | Blur 32, saturate 160%, tinte del 55%, luz interna de 1 px y hairline. Inset 10–12 con radio concéntrico. Clase `.float-sheet`. | Se lee como capa y parece hardware. |
| **Fondo que retrocede** | al abrir un sheet o modal | Lo de atrás: blur 0 → 10, scale 1 → 0.96, opacity 1 → 0.6. 420 ms ease-out al abrir, 280 al cerrar. | Profundidad sin tapar todo de negro. |
| **Cambio con blur** | estados de botones y labels | Lo que sale: opacity → 0, blur → 6, scale → 0.96. Lo que entra hace lo inverso, en simultáneo. 240 ms ease-out. Clase `.swap`. | El ojo lee continuidad, no un salto. |
| **Texto que llega** | respuestas de IA, confirmaciones | Por palabra: opacity 0.15 → 1, blur 4 → 0, y 4 → 0. 420 ms con 30 ms entre palabras. | Se siente escrito en vivo. |
| **Reveal de titular** | hero, confirmaciones | Por línea: color fg-3 → fg, y 6 → 0, blur 4 → 0. 800 ms con 120 ms entre líneas. | Llega sin aparecer de la nada. |
| **Texto pensando** | cargas con texto | Gradiente fg-3 → fg → fg-3 de 300% de ancho, que recorre el texto en 2.2 s linear, en loop. | Dice "trabajando" sin spinner. |
| **Profundidad por capas** | pantallas de producto, heroes | Palabra gigante atrás (700, opacity 14%, blur 2.5). Objeto nítido adelante. Sombra de contacto (elipse del 70%, blur 4, negro al 35%). Un sticker opcional rotado −4°. | Tres planos se leen como espacio real. |
| **Pill que crece** | llamadas, timers, en vivo | Ancho, alto y radio juntos en 420 ms ease-in-out. El contenido cambia con blur en 240 ms, con 120 ms de delay. | Crece desde donde ya estaba. |
| **Ícono que muta** | agregar/cerrar, copiar | + → × con rotate 45° (240 ms spring). Copiar → check con cambio con blur, y vuelve a los 1.4 s. | Confirma sin toast. |
| **Interruptor elástico** | toggles | El thumb se estira de 28 a 36 al apretar. Viaja en 240 ms spring. | Se siente blando bajo el dedo. |
| **Punto vivo** | en vivo, pendiente, grabando | El anillo escala 1 → 2.6 y su opacity va de 0.55 a 0. 1.6 s ease-out, en loop solo mientras dura el estado. | "Está pasando" sin pedir atención. |
| **Subrayado que crece** | links | Línea de 1 px que crece de izquierda a derecha en 240 ms ease-out. | Feedback mínimo de hover. |

---

## 11. Motion

### Principios
1. **Responder al instante:** feedback en menos de 100 ms.
2. **Entrar rápido, frenar suave:** ease-out por defecto. Cerrar es más rápido que abrir.
3. **Nada aparece de la nada:** las cosas entran desde donde se originan.
4. **Una cosa a la vez:** escalonar 120 ms entre líneas, 50 ms entre ítems (tope 6) y 30 ms entre palabras.
5. **El texto no baila:** se revela y queda quieto.

### Curvas
- `ease-out` `cubic-bezier(.22, 1, .36, 1)`: entradas, respuestas y reveals.
- `ease-in-out` `cubic-bezier(.65, 0, .35, 1)`: recorridos, morphs y cierres.
- `ease-spring` `cubic-bezier(.34, 1.56, .64, 1)`: solo cosas chicas.

### Duraciones
- `dur-1` 120: press y hover.
- `dur-2` 240: chips, toggles, color y cambios con blur.
- `dur-exit` 280: cerrar.
- `dur-3` 420: abrir y morphs.
- `dur-count` 600: números.
- `dur-4` 800: titulares.

### Catálogo
| patrón | spec |
|---|---|
| Tocar | scale 1 → 0.97 en 120 ms ease-out; al soltar, 240 ms spring. Haptic light. |
| Rodar número | Cada dígito rueda en vertical con blur de 1.5 px mientras se mueve. 600 ms ease-out, 40 ms entre dígitos. |
| Cambiar selección | Indicador con translateX en 240 ms ease-in-out. Haptic selection. |
| Confirmar | El label sale con blur en 120 ms. El botón pasa a círculo de 52 px en 420 ms ease-in-out. El check aparece con spring en 240 ms, con 420 ms de delay. Haptic success. |
| Entrar lista | opacity 0 → 1, y 12 → 0, blur 2 → 0. 420 ms ease-out, 50 ms entre ítems. |
| Toast | Entra con y 16 → 0 y blur 4 → 0 en 420 ms ease-out. Queda 1600 ms y sale en 240 ms. |
| Pasar de pantalla | La nueva entra con x 100% → 0 en 420 ms ease-out. La anterior va a x −30% con brightness 0.8. Volver es lo inverso, en 280 ms. |
| Cambiar tema | Revelado circular con clip-path desde el punto tocado, 520 ms ease-out. Sin soporte: crossfade de 420 ms. |

### Transiciones de pantalla
- **push:** 420 ease-out.
- **back:** 280 ease-in-out; con gesto, sigue al dedo.
- **modal:** sheet en 420 ease-out, con el fondo que retrocede.
- **tab:** crossfade con blur de 4 px en 240 ms.
- **elemento compartido:** posición, tamaño y radio juntos en 420 ease-in-out.

### Qué no se anima
- Texto mientras se lee.
- Parallax o scroll secuestrado.
- Loops en UI, salvo carga y estados en vivo.
- Rebotes en elementos grandes.
- Animaciones al cargar que nadie pidió.

### Movimiento reducido
- Sin desplazamiento, escala ni blur.
- Los cambios de estado pasan a un crossfade de 120 ms.
- Los números muestran el valor final y los loops se detienen.
- Los haptics se mantienen.

### Código
React Native con Reanimated y expo-blur:
```ts
import { Easing, withTiming, withSpring, withDelay } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';

export const ease = { out: Easing.bezier(0.22, 1, 0.36, 1), inOut: Easing.bezier(0.65, 0, 0.35, 1) };
export const dur = { press: 120, quick: 240, exit: 280, base: 420, count: 600, reveal: 800 };
export const spring = { damping: 16, stiffness: 260, mass: 1 }; // aprox. a ease-spring; ajustar a ojo

// press
onPressIn:  scale.value = withTiming(0.97, { duration: dur.press, easing: ease.out });
onPressOut: scale.value = withSpring(1, spring);

// sheet + fondo que retrocede
sheetY.value = withTiming(0, { duration: dur.base, easing: ease.out });
behindScale.value = withTiming(0.96, { duration: dur.base, easing: ease.out });
// blur del fondo: <BlurView intensity={...} /> animado, o Skia <Blur blur={10} />

// item i de una lista
opacity.value = withDelay(Math.min(i, 5) * 50, withTiming(1, { duration: dur.base, easing: ease.out }));
```
En web, todo está como variables en `tokens.css` y clases (`.pblur`, `.edgeblur`, `.float-sheet`, `.swap`, `.shimmer`, `.reveal`, `.words`, `.stagger`, `.live`, `.link`).

### Video para shots
- **Formato:** MP4 H.264, 1600×1200 (Dribbble) o 1920×1080 (sitio).
- **Frames:** 60 fps, en tiempo real.
- **Duración:** 6 a 10 s, en loop perfecto.
- **Ritmo:** pausas de 600 a 800 ms en cada estado clave.
- **Toques:** sin cursor; si hace falta, un círculo blanco al 25% de 44 px.

---

## 12. Imagen y presentación

Tres puestas, una por shot:
1. **Stage claro:** device centrado sobre #E8E8E8. Para UI clara y flujos.
2. **Stage negro:** la pantalla es la única luz. Para UI oscura.
3. **Objeto de marca:** objeto 3D brillante con el glow de la atmósfera, grano y sombra de contacto. Para lanzamientos y covers.

- **Formato:** 4:3 para Dribbble y 16:9 para el sitio.
- **Device:** iPhone frontal, sin perspectiva, ocupando como mucho el 60% del alto. Se vale cortarlo con el borde del stage para acercarse a un detalle.
- **Íconos:** de trazo 1.8, con terminaciones redondeadas. Íconos 3D o emoji solo como objetos de contenido (pins, logros), nunca como íconos de UI.

---

## 13. Voz

- **Idioma:** inglés para la marca pública; español para documentación interna.
- **Estilo:** frases cortas, voz activa, verbos concretos. Sin jerga de agencia ("innovative solutions", "unique experiences").
- **Ejemplos (borrador):**
  - hero: "Product design and motion for teams that ship." / "Screens, systems and the small moments between them."
  - about: "I work in prototypes, not decks." / "You see it moving by the end of week one."
  - shot: `Verdant → round summary`
  - post: `Sheet transitions for a booking flow` (una línea, sin hashtags, con video)
- **Botones:** dicen exactamente lo que pasa ("Schedule transfer", no "Continue"). Los errores dicen qué pasó y cómo arreglarlo.

---

## 14. Aplicar a cualquier proyecto

Este lenguaje no es solo para mi marca. Sirve para diseñar cualquier producto en mi estilo: una app de viajes, un banco, una herramienta interna. Antes de empezar, separá qué se transfiere y qué no.

| | qué incluye |
|---|---|
| **Se transfiere** (sin referencias; con referencias, solo mi toque) | Filosofía, decisiones, reglas si/entonces, tipografía, radios, espacio, componentes, micro-blurs, motion, claro y oscuro, imagen y el checklist de calidad. |
| **Se adapta al producto** | Color protagonista (una atmósfera) y dial de color, nombre y logo, copy (en la voz del producto, con mis reglas de escritura), idioma, íconos y fotos del dominio. |
| **Solo de mi marca** | El wordmark "Agustín Oberg", el monograma "ao", mi posicionamiento, mis textos de ejemplo y la regla de que el chrome de mi marca personal es mono (los proyectos de adentro mantienen su color). |

### Con referencias o sin referencias
Antes de diseñar, fijate qué referencias de diseño hay: un Figma, capturas, la marca del cliente o apps que la persona quiere seguir.

| caso | base visual | qué se suma |
|---|---|---|
| **Hay referencias** | Las referencias mandan: tipografía, colores, radios, íconos, ilustración y layout. | Mi toque (abajo). |
| **Referencias parciales** (por ejemplo, solo logo y colores) | Las referencias en lo que definen. | Mi diseño completo en todo lo que no definen. |
| **No hay referencias** | Mi diseño completo. | — |

Aunque haya referencias, el resultado tiene que sentirse hecho por mí. No igual a lo mío, sino con detalles en común.

### Mi toque (la firma portátil)
Son los detalles que van arriba de cualquier diseño sin pisar su identidad. Elegí **entre 3 y 6** según lo que encaje; nunca todos.

- **Siempre, porque no tocan la identidad visual:**
  - Mi vocabulario de motion: ease-out por defecto, press 0.97, cerrar más rápido que abrir, la puerta de frecuencia.
  - Micro-blurs: blur progresivo en bordes de scroll y barras, el fondo que retrocede al abrir un sheet, el cambio con blur en los estados, las palabras que llegan.
  - Los números importantes como protagonistas, tabulares y grandes.
  - Haptics como puntuación.
  - Mis reglas de copy: corto, concreto, una etiqueta por intención.
  - Claro y oscuro completos.
- **Si la referencia no lo contradice:** sheets flotantes con radio concéntrico, titulares en dos tonos (usando la tipografía de la referencia), profundidad por capas en heroes y el botón que se convierte en check.
- **Nunca:** cambiar los colores, la tipografía, el logo o la escala de radios de la referencia. Tampoco meter mis atmósferas en una marca que ya tiene su paleta.

### Color en productos
- El producto elige **una** atmósfera protagonista según su tema (forest, ember, tide, rouge, iris o flame), o crea una nueva con la misma receta: 4 tonos por modo, del más profundo al glow.
- El acento es el `glow` de esa atmósfera, en los dos modos. El texto sobre el acento va en #0A0A0A. En CSS: clase `.accent-{atmósfera}` en un contenedor, y `.btn--accent`, `.surface--tint` o `.surface--accent`.
- El producto elige su **dial de color** (sección 6). El dial 1 deja el acento en un solo tipo de elemento por pantalla. El dial 2 suma la atmósfera completa en momentos clave y cards teñidas. El dial 3 pinta superficies enteras con el color. Elegilo según el contenido y el temperamento de la marca, no por costumbre.
- El contenido (fotos, objetos, avatares, mapas) va a todo color en cualquier dial, y las categorías usan los colores de datos.
- El botón primario genérico sigue siendo `fg` sobre `bg`.

### Primero la dirección
Escribí la dirección de la sección 4 antes de la primera pantalla: la idea, una elección por eje libre y el momento firma. La receta de abajo dice qué patrones usa cada tipo de pantalla. La composición, la densidad, la escala y la imagen salen de la dirección, así que dos productos hechos con esta receta no deberían parecerse.

### Receta: app mobile
Stack sugerido: Expo / React Native con Reanimated y expo-blur (o Skia para el blur progresivo). En web: importar `tokens.css`.

| pantalla | patrón por defecto |
|---|---|
| onboarding | Atmósfera completa, objeto de marca con sombra de contacto, titular de dos tonos y un solo CTA. |
| home / explorar | Lista o mapa. Mapa con blur de borde y pins blancos. Pills flotantes arriba, card que asoma abajo y tab bar de vidrio con blur progresivo. |
| detalle | Hero con profundidad por capas o foto con blur de borde. El nombre, y el dato clave como número grande. |
| acción | Sheet flotante concéntrico con el fondo que retrocede. Segmented o calendario adentro. |
| confirmación | Botón que muta en check, texto que llega y haptic success. |
| en curso | Island pill con punto vivo (timer, viaje, llamada). |
| carga | Shimmer en el texto y esqueletos en `surface-2`. Sin spinners. |
| vacío | Atmósfera suave, titular de dos tonos y una sola acción. |
| ajustes | Lista agrupada en cards, toggles elásticos y labels mono para los grupos. |

Navegación: push para profundizar, sheets para tareas cortas y tabs con crossfade. Los dos modos desde el día uno, con movimiento reducido respetado.

### Ejemplo: app de viajes
- **Atmósfera:** tide (mar, vuelos, confianza). Si el producto es de naturaleza u outdoor, forest. Dial 2: las fotos de los destinos traen la mayor parte del color, y tide manda en la acción de reservar, los estados vacíos y la confirmación.
- **Explorar:** mapa con blur de borde, pins blancos con la foto del lugar y cards de destinos que asoman abajo, con precio.
- **Destino:** foto a sangre con blur de borde, nombre del lugar, precio por noche como número grande y, como máximo, un sticker ("NEW") por pantalla.
- **Reservar:** sheet flotante con fechas (segmented para las noches y calendario) y el fondo que retrocede.
- **Pagar:** botón de acento "Book · $1,240" que muta en check. El código de reserva llega palabra por palabra.
- **Viaje en curso:** island pill con punto vivo ("Boarding in 0:45").
- **Copy:** corto y concreto ("Book", "Change dates"). Los nombres de lugares van con mayúscula porque son nombres propios.

### Checklist para cualquier proyecto
- [ ] ¿Hay una dirección escrita (idea, ejes libres, momento firma) que solo sirve para este proyecto?
- [ ] ¿Se parece a sí mismo, y no a mi sitio de diseño ni a otro proyecto en este lenguaje?
- [ ] ¿Si había referencias, mandan en lo visual, y mi toque está presente con 3 a 6 detalles sin pisarlas?
- [ ] ¿Una sola atmósfera protagonista, con un dial de color elegido a propósito y aplicado de forma consistente?
- [ ] ¿El contenido a todo color, y cada categoría de datos con un solo color de datos en todos lados?
- [ ] ¿Titulares de afirmación en dos tonos, números grandes y botones pastilla?
- [ ] ¿Mayúsculas normales: nombres como los escriben sus dueños, nav y botones con mayúscula inicial?
- [ ] ¿Sheets flotantes concéntricos con el fondo que retrocede?
- [ ] ¿Blur progresivo en barras y bordes de scroll, y blur de borde en mapas y fotos?
- [ ] ¿Cada cambio de estado tiene su micro-animación (press, cambio con blur, check)?
- [ ] ¿Claro y oscuro completos, contraste AA y movimiento reducido?
- [ ] ¿No quedó nada de mi marca personal (wordmark, monograma, mis textos) en el producto?
- [ ] ¿Ningún dato, nombre o métrica fue inventado sin marcar `[TODO]`?

---

## 15. Receta: portfolio

Cuando me pidan "haceme un portfolio", seguí esto. Dice qué tiene que tener el portfolio, no cómo se tiene que ver: el orden, la composición y la presentación salen de la dirección (sección 4). El layout descrito es una opción.

### Stack sugerido
- Página estática o Next.js.
- Importar `@agustinoberg/brand/tokens.css` (en este repo) o `tokens.css` desde el sitio.
- Las fuentes de la sección 7.
- Claro y oscuro con selector (sistema / claro / oscuro) y revelado circular al cambiar.

### Contenido de la home
1. **Nav:** el wordmark, links (Work, About, Contact), un CTA pastilla "Book a call" y el selector de tema, con blur progresivo si queda en pantalla. La forma es libre: barra, pill flotante o índice lateral.
2. **Hero:**
   - Titular de dos tonos de 2 líneas como máximo, con reveal.
   - Uno o dos CTAs.
   - Prueba, si la hay: logos de clientes en gris o meta en mono. `[TODO: clientes reales]`
   - Qué manda es libre: el titular, un proyecto ya reproduciéndose, un número grande o un objeto de marca.
3. **Trabajo seleccionado:**
   - Entre 3 y 6 proyectos, cada uno con su atmósfera. `[TODO: proyectos reales]`
   - Cada uno muestra su nombre como lo escribe el proyecto, una línea de descripción en `fg-2` y sus tags.
   - La presentación es libre: stages de ancho completo con video, una grilla, un índice con preview al pasar el mouse, o un proyecto por pantalla.
4. **Manifiesto corto** (opcional): 3 a 5 líneas de la filosofía, con reveal de gris a fg al scrollear. El texto siempre visible.
5. **About:**
   - Foto en blanco y negro.
   - 2 o 3 párrafos cortos.
   - Servicios como lista simple con label mono.
6. **Contacto:** titular de dos tonos, CTA "Book a call" y el email visible como texto.
7. **Footer:** labels mono (SITEMAP, SOCIAL), links en `fg`, y legales en 12 px `fg-3`.

### Plantilla de caso de estudio
1. **Hero:** atmósfera del proyecto con objeto de marca o device, el nombre del proyecto y una línea de qué es.
2. **Contexto:** problema en 2 o 3 líneas y rol / equipo / tiempo en labels mono.
3. **Decisiones:** de 3 a 5, cada una con su "por qué", en filas, no cards.
4. **Pantallas:** stages claros u oscuros según la UI. Mostrar los dos modos si existen.
5. **Motion:** videos en loop de las micro-interacciones clave, cada uno con su spec en mono.
6. **Resultado:** números grandes, tabulares y reales. `[TODO: nunca inventar métricas]`
7. **Siguiente proyecto:** card grande con la atmósfera del siguiente.

### Requisitos técnicos
- Responsive desde 360 px, sin scroll horizontal.
- Claro y oscuro completos.
- `prefers-reduced-motion`.
- Videos con `poster`, `muted`, `playsinline` y carga diferida.
- Foco visible y contraste AA.
- Todo el texto en HTML, no en imágenes.

### Checklist antes de entregar
- [ ] ¿Hay una dirección escrita, y el resultado parece una pieza nueva y no mi sitio de diseño?
- [ ] ¿Cada botón es pastilla y cada titular de afirmación es de dos tonos?
- [ ] ¿Mayúsculas normales: "Agustín Oberg", Work / About / Contact, nombres de proyecto como se escriben?
- [ ] ¿Los dos modos están terminados y probados?
- [ ] ¿Hay blur progresivo en nav y en los bordes de scroll?
- [ ] ¿Los sheets flotan con radio concéntrico y el fondo retrocede?
- [ ] ¿Cada proyecto usa una sola atmósfera protagonista, se muestra con su color real y en el dial que le corresponde?
- [ ] ¿Ningún dato, cliente o métrica fue inventado?
- [ ] ¿Funciona con movimiento reducido?

---

## 16. Nunca

- Gradientes violeta-azul genéricos, glassmorphism exagerado (blur de más de 40 o bordes blancos gruesos).
- Mockups en perspectiva, manos sosteniendo el teléfono, emojis como íconos de UI.
- Botones rectos o con radios chicos.
- Dos colores protagonistas en un mismo proyecto. Los colores de contenido y de datos no son protagonistas.
- Colores de datos usados como decoración, o contenido desaturado para que parezca "de la marca".
- Ir a mono por default porque se siente seguro. Mono es una posición del dial que se elige por una razón.
- Sombras grandes en oscuro.
- Todo dentro de cards.
- El mismo layout en todos los proyectos. Si parece el sitio de diseño con otras palabras, empezá de nuevo desde la dirección.
- Nombres, links de la nav o títulos en minúscula como estilo.
- Copy de agencia, lorem ipsum, o proyectos, clientes y métricas inventados.
- Copiar logos, nombres, textos o piezas de Dominik Tyka o Figura.

---

## 17. Pendiente

- [ ] Rol, posicionamiento y copy reales.
- [ ] Logo y monograma definitivos.
- [ ] Proyectos reales para el portfolio.
- [ ] Plantillas de shot en Figma para las tres puestas.
- [ ] Dominio final, para poner URLs absolutas en `llms.txt`.
