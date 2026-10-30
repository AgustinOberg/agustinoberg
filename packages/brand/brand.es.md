# Agustín Oberg · design language v3.0

> **Para IA:** esta es la traducción al español de `brand.md`, que está en inglés y es la versión principal. Si alguna vez difieren, gana `brand.md`. Esta guía es la fuente de verdad de cómo diseño, para cualquier proyecto en mi estilo (apps, sitios, portfolios, presentaciones o shots), no solo para mi marca. Leela completa antes de diseñar. Las reglas definen la mano, no un layout: la sección 4, "Rango y vida", dice qué queda fijo, qué decide cada proyecto y qué evita que una pantalla se vea vacía o hecha por IA. Leé su parte "Vida" antes de la primera pantalla. Para el producto de otro, seguí la sección 14, "Trabajar como un estudio": manda la identidad del cliente, y mi oficio y mi toque van encima; mi propio look (el estilo de la casa) es solo para mi marca o cuando lo piden. Para mi portfolio, la 15, "Receta: portfolio". Los valores exactos están en `tokens.json` y listos para usar en `tokens.css`. Si te falta contenido real (proyectos, textos, métricas, imágenes), **preguntá antes de inventar** y usá placeholders marcados `[TODO]`.

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
- **En una línea:** un marco quieto alrededor de un contenido lleno de vida (fotos, personas, lugares, objetos y color), con profundidad hecha de luz y blur, y un movimiento preciso que explica.
- **Referencias de origen:** el trabajo de Dominik Tyka (dribbble.com/dominikt), el estudio Figura (figura.digital) y Revmp Studio (revmp.studio), cuyo acabado me enseñó las series uniformes, los flujos de tres pantallas, un oscuro suave y una mano humana. Se toma el criterio, nunca las piezas: no reutilizar sus logos, nombres de proyecto, textos, ilustraciones ni imágenes.
- **Nombre en pantalla:** "Agustín Oberg", con mayúsculas como cualquier nombre propio, Inter Display 650, tracking −3.5%. Monograma provisorio: "ao" en un cuadrado redondeado de 28 px (radio 9), invertido (fg sobre bg). `[TODO: logo definitivo]`

---

## 1. Filosofía

La gente no lee interfaces: las siente.

1. **El detalle es el producto.** Dos apps con las mismas funciones no se sienten igual. La diferencia está en 200 ms, en un blur de 6 px, en un botón que se achica al tocarlo. Ahí va la mayor parte del tiempo.
2. **Marco quieto, contenido que suena fuerte.** Fondos neutros y un chrome sobrio, para que el contenido pueda sonar fuerte: fotos, personas, lugares, objetos y color. Cuanto más callado el marco, más se escucha el producto. Un marco quieto alrededor de una pantalla vacía es solo una pantalla gris.
3. **Profundidad con luz, no con líneas.** Las capas se separan con desenfoque, transparencia y sombras suaves. Los bordes y las cajas dividen; el blur ordena sin cortar la imagen.
4. **El movimiento explica.** Se anima para mostrar de dónde viene algo y adónde va. Si una animación no responde una pregunta, se saca.
5. **Un color manda en cada historia, y el contenido trae el resto.** El marco vive en negro, blanco y grises para que el color pueda sonar fuerte donde significa algo. Cada proyecto elige un color protagonista y se compromete con él: a veces como un acento puntual y a veces como superficies enteras. Fotos, objetos, personas y datos suman su propio color encima.
6. **Claro y oscuro desde el día uno.** Los dos modos se diseñan en paralelo. Nada se invierte automáticamente.
7. **Las palabras también son diseño.** Copy corto, voz activa, cero jerga. Si un botón necesita explicación, el botón está mal.
8. **Vivo, no estéril.** Cada pantalla muestra algo del mundo real: una foto, una cara, un lugar, un objeto o datos en color. Si una pantalla podría ser de cualquier app, no está terminada.

---

## 2. Decisiones y por qué

| decisión | por qué | regla |
|---|---|---|
| Botones siempre pastilla | Se leen como tocables, entran bajo el pulgar y repiten la curva del teléfono. | radio 999 · alto 40 o 52 |
| Titulares chicos en dos tonos | La seguridad no necesita tamaño. El gris arma la jerarquía y deja el tamaño grande para los números. | línea 1 `fg`, línea 2 `fg-2`, mismo tamaño y peso |
| Números enormes | Hora, plata y puntaje son lo que la gente vino a ver. | 600 · tabular-nums · tracking −4.5% |
| Una sola sans para la mano | Inter Display tiene tamaño óptico y números tabulares, y se parece a SF Pro. Un producto igual puede hablar con su propia voz. | Inter Display en mi marca y por defecto · los productos eligen una voz tipográfica (sección 7) |
| Geist Mono solo donde es técnico | Marca specs, metadata y los labels de sección de mi marca sin competir. En un producto de consumo se lee frío. | 11 px · mayúsculas · +6% · nunca como título de sección de un producto |
| Negro puro en oscuro | En OLED el negro desaparece, el device se funde y los glows ganan contraste. | `bg` #000 |
| Texto blanco suave en oscuro | El blanco puro sobre negro puro encandila en pantallas grandes. Un toque por debajo del blanco mantiene el contraste sin la vibración. | `fg` #FAFAFA en oscuro |
| Stage tonal en oscuro | Un panel claro sobre negro corta la página en dos. Un stage un escalón arriba del fondo sostiene UI clara y oscura por igual. | `stage` #111111 en oscuro |
| Gris claro en claro | El blanco puro cansa y no deja separar cards. | `bg` #F4F4F4, cards #FFF |
| Blur en vez de bordes | El vidrio deja ver el contexto y separa sin cortar. | blur 20 · saturate 180% · luz interna 1 px |
| Sheets flotantes y concéntricos | Separado del borde se lee como capa; concéntrico parece hardware. | inset 12 · radio = exterior − inset |
| Ease-out por defecto | Responde al instante y frena como algo real. | `cubic-bezier(.22,1,.36,1)` |
| Cerrar más rápido que abrir | Quien cierra ya decidió. | abrir 420 ms · cerrar 280 ms |
| Un color protagonista por proyecto | Un color sostenido se recuerda. | elegir 1 de 6 atmósferas o crear una con la misma receta · nunca dos protagonistas |
| Un dial de color, no una prohibición | Hay productos que susurran y productos que gritan. Mono con un acento puntual y una pantalla inundada de color son los dos míos. | dial 0–3 por proyecto (sección 6) |
| El contenido trae su propio color | Fotos, objetos 3D, avatares y datos son lo que la gente vino a ver. Un marco quieto los hace brillar. | los colores de contenido y de datos no cuentan contra el protagonista |
| Primero el contenido, el chrome al final | Fotos, caras, lugares y objetos hacen que una pantalla sea específica y esté viva. Sin ellos, cualquier app se parece a todas. | al menos una fuente de vida por pantalla (sección 4) |
| Tonos acompañantes | Un color protagonista sin compañía se ve estéril. El mundo del producto (el mar, la comida, la pista) trae algunos tonos más suaves alrededor. | 2–4 tonos del contenido · nunca en botones ni en el chrome (sección 6) |
| Series uniformes | Una galería se ve terminada cuando todos los tiles coinciden. Solo cambian las pantallas. | tiles 6:5 · gap 24 · un stage, un device, una escala |
| Flujos de tres pantallas | Una pantalla es una imagen; tres son una historia: dónde estás, qué abrís, qué pasa. | 2–3 devices por tile, de izquierda a derecha |
| Lo pesado se mueve lento | Un chip encaja al instante; un stage llega. Una velocidad acorde al tamaño se lee como física. | stages e imágenes suben 32 px en 800 ms |
| Mockups frontales, sin manos | La perspectiva y las manos achican la pantalla. | device ≤ 60% del alto |

---

## 3. Reglas si/entonces (para aplicar sin pensar)

- **Si diseñás un botón:** pastilla. Primario = `fg` de fondo y `bg` de texto (se invierte por modo). Secundario = `btn-2`. Sobre imagen o atmósfera = vidrio. Alto 40 (normal) o 52 (principal de pantalla). Texto 14/600 o 16/600.
- **Si diseñás un titular de afirmación** (un hero, la apertura de una sección, un estado vacío): dos líneas máximo. Primera en `fg` (afirma), segunda en `fg-2` (explica). El orden puede invertirse cuando la segunda línea es el remate: primero un planteo en gris y después la respuesta en `fg`. Peso 600 y tracking negativo. No más de 48 px en web salvo display; en mobile, 22–28. Los títulos de cards, filas y bloques chicos van en un solo tono.
- **Si escribís más de tres líneas de copy** (un manifiesto, una intro, una historia): párrafos en dos tonos. El relato en `fg-2` y los puntos de giro en `fg`, más o menos una línea de cada cuatro. El copy centrado mantiene una medida de 40–50 caracteres.
- **Si titulás una sección dentro de un producto:** sentence case, 17–22 / 600, en `fg` ("Upcoming trips", "For you"). Nunca un label mono.
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
- **Si arrancás un proyecto:** elegí su color protagonista (una atmósfera), su dial de color (0–3) y 2–4 tonos acompañantes de su mundo. Mono es una elección, no el default.
- **Si arrancás una pantalla:** decidí qué le da vida antes que el layout: qué foto, cara, lugar, objeto o dato en color la sostiene (sección 4, "Vida").
- **Si no tenés imágenes reales:** pedilas. Si tenés que avanzar igual, usá fotografía de stock real marcada `[TODO: reemplazar]`, o dibujá los objetos del dominio en un solo estilo de ilustración. Nunca cajas grises ni gradientes planos en lugar de fotos.
- **Si una foto manda en la pantalla** (un perfil, un lugar, un álbum): teñí el fondo con el color dominante de la foto.
- **Si hay fotos, objetos 3D, avatares o ilustraciones:** dejalos a todo color. No desatures el contenido para que combine con el marco.
- **Si hay opciones** (planes, niveles, tamaños): el color protagonista pinta solo la recomendada. Las otras quedan neutras.
- **Si algo se gana** (una racha, una insignia, un hito): mostralo como un objeto a todo color sobre un glow suave, en un sheet sobre la pantalla que retrocede, con una sola acción primaria y un "Later" discreto.
- **Si un perfil o un resumen tiene varios números:** un trío de números. Tres valores lado a lado, el label arriba en `fg-2` y hairlines entre ellos.
- **Si presentás trabajo** (una galería, un caso de estudio, un portfolio): una serie uniforme de stages, cada uno contando un flujo de tres pantallas (sección 12).
- **Si algo grande entra con el scroll** (un stage, una imagen, un tile de galería): sube según su masa, más lento y más lejos que las cosas chicas (sección 10).
- **Si los datos tienen categorías** (métricas, series de un gráfico, tags, capas de un mapa): dale a cada categoría su color de datos, el mismo en todo el producto.
- **Si diseñás el chrome de mi marca personal** (nav, tipografía, botones de mi sitio): mono. Los proyectos que se muestran adentro llevan todo su color.
- **Si dudás entre agregar o sacar chrome:** sacá. **Si una pantalla se siente vacía:** agregá contenido (una foto, una cara, un objeto), nunca más chrome.
- **Si escribís un nombre, un link de la nav o un título:** mayúsculas normales. Los nombres propios como los escriben sus dueños (Agustín Oberg, TraiNow), la nav y los botones con mayúscula inicial (Work, About, Book a call) y el copy en sentence case. Solo los labels mono van en mayúsculas.
- **Si un layout se parece a uno que ya hiciste en este lenguaje:** cambialo (sección 4).

---

## 4. Rango y vida: la misma mano, trabajos distintos

Las reglas de arriba definen cómo se siente mi trabajo. No definen un layout. Si dos proyectos en mi estilo parecen el mismo template con otras palabras, el lenguaje falló. El objetivo es un aire de familia: se reconoce la mano, no la página. Lo que hace que cada proyecto sea distinto, y que esté vivo, es su contenido.

### Fijo: la mano
Esto se mantiene en todos los proyectos. Los tokens son fijos en mi estilo de la casa y son el kit de arranque para un producto que todavía no tiene identidad; cuando un cliente trae su propia marca, su identidad reemplaza los tokens que define, y el oficio y el toque quedan (sección 14).
- Los tokens: escala mono, colores semánticos, escala de radios, base de espaciado, límites de blur, curvas y duraciones. Inter Display y Geist Mono en mi propia marca; en los productos, la voz tipográfica es un eje libre.
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
| historia de color | el color protagonista (uno de seis, o uno nuevo con la misma receta), el dial (0 mono · 1 acento · 2 atmósfera · 3 superficie) y 2–4 tonos acompañantes del contenido (sección 6) |
| fuente de vida | fotografía · personas · lugares y mapas · objetos y coleccionables · ilustración · datos en color (ver "Vida" abajo) |
| voz tipográfica | mi sans (Inter Display) · la fuente de la plataforma (SF Pro, SF Pro Rounded, Roboto Flex) · una tipografía display que sale del contenido, solo para títulos (sección 7) |
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

- **La prueba del competidor.** Antes de la idea, anotá 8–12 datos que sean solo de este producto: qué significa su nombre, su lugar, sus números, sus rituales, lo que imprime o reparte. Armá la idea a partir de ellos. Después poné el nombre del competidor más cercano en la frase: si sigue funcionando, la idea es de la categoría, no del producto. Reescribila.
- **Nombrá el default que rechazás.** Escribí lo que hacen todos los productos de la categoría (y su opuesto predecible, que es solo un segundo default), y decí cuál no vas a hacer y por qué.
- **Guardala.** En un proyecto con archivos, escribí la dirección en `DESIGN.md` (o en el documento de diseño del proyecto) antes de la primera pantalla, para que cada pantalla que venga después lea el mismo contrato.

### No te repitas
- Mi sitio de diseño (columna de labels sticky a la izquierda, titular de dos tonos con dos botones en el hero) es una instancia del lenguaje, no su template.
- Si conocés otro trabajo en este lenguaje (el sitio de diseño, el portfolio, pantallas anteriores del proyecto o de la conversación), cambiá al menos tres ejes libres.
- El mismo tipo de contenido no implica el mismo layout. Dos portfolios pueden no compartir ninguna estructura.

### La prueba
- Tapá el nombre: ¿igual se sabe qué proyecto es? Tiene que ser distinto.
- Mirá los detalles: ¿se sabe quién lo diseñó? Tiene que ser la misma mano.
- ¿Alguien le sacaría una captura para mandársela a un amigo? Tiene que estar vivo.

Las tres respuestas tienen que ser sí.

### Vida
Un marco quieto solo funciona si lo que tiene adentro suena fuerte. Sin contenido real, este lenguaje se derrumba en cards grises, labels mono y un gradiente teñido: una pantalla que parece hecha por IA y que nadie quiere usar. La vida no es decoración. Es el contenido del que trata el producto, mostrado con generosidad.

**Fuentes de vida.** Cada pantalla usa al menos una. Las homes, las pantallas de explorar, los heroes y los estados vacíos usan dos o más.
- **Fotografía:** lugares, comida, productos y personas. Grande y redondeada (radio 20–28) o a sangre con blur de borde. Nunca del tamaño de una estampilla.
- **Personas:** caras reales en los avatares, avatares apilados en todo lo compartido, nombres al lado de las acciones. Un producto con personas adentro se siente usado.
- **Lugares:** mapas a todo color (agua, parques, calles) con pins con foto.
- **Objetos:** cosas 3D o ilustradas que pertenecen al dominio, como un ticket, una medalla, una planta o un disco. Inclinadas de −6° a 6°, con sombra de contacto. Los coleccionables se ven mejor en una grilla suelta.
- **Datos en color:** anillos, barras, rachas y calendarios en colores de datos.
- **Ilustración:** un solo estilo por producto, en sus tonos acompañantes.

**Tonos acompañantes.** Al lado del color protagonista, tomá 2–4 tonos del mundo del producto. Una guía de Lisboa lleva azul azulejo, terracota y arena; una app de running, naranja de pista, pasto y cielo. Llenan ilustraciones, fondos de objetos, placeholders de imágenes, tags y tiles de categorías. Son más suaves que el protagonista (pastel en claro, profundos en oscuro), nunca van en botones ni en el chrome, y no cuentan como un segundo color protagonista.

**Superficies teñidas por la foto.** Cuando una foto manda en una pantalla, su color dominante tiñe lo que la rodea: en oscuro, el color al 25–35% sobre negro (o la misma foto con blur de 40 px bajo un velo negro al 60%); en claro, un tinte del 10–15% sobre `bg`. La pantalla toma el clima de su contenido. Clase `.tinted` con `--tint`.

**Densidad.** Sin scrollear, una home o una pantalla de explorar muestra al menos tres fotos, caras u objetos. Las listas de solo texto quedan para ajustes, recibos y logs.

**Todavía sin assets reales.** Pedilos primero. Si tenés que avanzar igual, usá fotografía de stock real (Unsplash, Pexels) y marcá cada una `[TODO: reemplazar]`, o dibujá los objetos del dominio en un solo estilo de ilustración. Nunca cajas grises, nunca gradientes planos en lugar de fotos, nunca iniciales donde debería ir una cara en un producto social.

**Señales de que un diseño lo hizo una IA.** Corregí todas las que encuentres:
- Una pantalla sin foto, cara, objeto, mapa ni datos en color: solo cards, íconos y texto.
- Labels mono en mayúsculas como títulos de sección en un producto de consumo ("UP NEXT", "YOUR TRIPS").
- Un título "Home" gigante como lo primero de la pantalla de inicio.
- Una grilla de tiles de íconos iguales (Activity · Place · Expense · Memory) como contenido principal.
- Una sola card con gradiente lavanda o azul como único color de la pantalla.
- Todo en cards blancas sobre gris, todas con el mismo peso.
- Un checklist de configuración ("Getting ready · 1 of 6") donde debería estar el contenido del producto.
- Title Case En Todos Lados, copy de agencia y copy que explica en vez de hacer.
- La primera paleta "de buen gusto" que se te ocurre (crema, una serif editorial, terracota, luz cálida). Es el default de la IA hoy: usala solo cuando el contenido la pide, y decí por qué.
- Detalles firma usados por costumbre. Los labels mono, los heroes con un número grande, el vidrio y las pills flotantes están en las listas de señales de otros estudios cuando nada en el contenido los pide. Cada detalle del toque necesita una razón que salga del contenido.

---

## 5. Claro y oscuro

Los dos modos son de primera clase. Por defecto se sigue al sistema y la persona puede elegir sistema, claro u oscuro. En web: `data-theme="light|dark"` en `<html>`; sin atributo sigue a `prefers-color-scheme`. Para forzar una parte: clase `.theme-light` o `.theme-dark`.

| aspecto | claro | oscuro |
|---|---|---|
| fondo (`bg`) | #F4F4F4 | #000000 |
| cards (`surface-1`) | #FFFFFF + sombra suave | #111111 + luz interna de 1 px |
| dentro de cards (`surface-2`) | #F0F0F0 | #1F1F1F |
| sheet opaco (`sheet-bg`) | #FFFFFF | #1F1F1F |
| texto (`fg` / `fg-2` / `fg-3`) | #0A0A0A / #6B6B6B / #A1A1A1 | #FAFAFA / #8F8F8F / #5C5C5C |
| botón secundario (`btn-2`) | #E6E6E6 | #1F1F1F |
| vidrio (`glass`) | blanco 68% | blanco 12% |
| hairline (`line`) | negro 7% | blanco 8% |
| separación | sombra | escalón de superficie + hairline |
| atmósferas | pastel con glow saturado | profundas con glow brillante |
| grano | 5% | 12% |
| tinte de foto (`.tinted`) | 14% del color de la foto sobre `bg` | 30% sobre negro |
| stage de devices (`stage`) | #E8E8E8 | #111111 (tonal: un escalón arriba de `bg`) |

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
black #000000 · ink-950 #0A0A0A · ink-900 #111111 · ink-800 #1F1F1F · ink-700 #2B2B2B · ink-600 #3D3D3D · ink-500 #5C5C5C · ink-400 #8F8F8F · ink-300 #B8B8B8 · ink-200 #D9D9D9 · ink-150 #E6E6E6 · ink-100 #EDEDED · ink-50 #F4F4F4 · ink-25 #FAFAFA · white #FFFFFF

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

Los hex del núcleo oscuro y del vidrio vienen del CSS de figura.digital, y los del blanco suave y el stage tonal, de revmp.studio. Los de las atmósferas son propios, aproximados a partir de las referencias.

### Dial de color (uno por proyecto)
Las referencias no son blanco y negro. Sus marcos son quietos, pero los productos de adentro están llenos de color: fotos, objetos 3D, colores por categoría y, a veces, una pantalla entera en el color de la marca. Cada proyecto define qué tan fuerte suena su color protagonista.

| dial | qué cubre el color protagonista | sirve para |
|---|---|---|
| **0 · mono** | Nada. El color viene solo del contenido y los datos. | El chrome de mi marca personal, herramientas donde el contenido ya es colorido. |
| **1 · acento** | Un solo tipo de elemento por pantalla: la acción del dominio (Book, Pay), los pins o el progreso activo. | Productos tranquilos, utilitarios y de plata. |
| **2 · atmósfera** | El acento, más la atmósfera completa en momentos clave (onboarding, estados vacíos, confirmaciones grandes, heroes) y superficies teñidas (tono 1) en cards destacadas. | La mayoría de los productos de consumo. |
| **3 · superficie** | El color como superficie: cards, paneles, headers o pantallas enteras en el glow o el tono 2, con texto on-accent. Lo mono queda para el texto corrido y el chrome. | Marcas audaces, lanzamientos, social, deporte, juegos, shots de presentación. |

En cualquier dial, el botón primario genérico sigue siendo `fg` sobre `bg`, y el protagonista es el único color de marca. En CSS, `.accent-{atmósfera}` en un contenedor da `--accent`, `--accent-1` y `--accent-2`; `.surface--tint` y `.surface--accent` pintan una superficie. Sobre `.surface--accent`, todo el texto va en on-accent (#0A0A0A) y la jerarquía sale del tamaño y el peso.

**El color elige la opción recomendada.** Cuando hay opciones (planes, niveles, tamaños), el color protagonista pinta solo la que recomendás, como un gradiente suave dentro de su propia rampa (`.surface--featured`). Las otras quedan en `surface-1`. El color dice "esta" sin un badge. Funciona en cualquier dial, incluso en el 0.

### Tonos acompañantes (del mundo del producto)
Un color protagonista sin compañía se ve estéril; el mundo de un producto nunca es de un solo color. Tomá 2–4 tonos acompañantes del contenido: la ciudad, la comida, el deporte, el material. Una guía de Lisboa: azul azulejo, terracota, arena. Una app de running: naranja de pista, pasto, cielo. Una app de plantas: hoja, tierra, maceta de terracota.
- **Dónde:** ilustraciones, los fondos de objetos y coleccionables, placeholders de imágenes, tags, tiles de categorías y cards teñidas.
- **Cómo:** más suaves que el color protagonista. En claro, pastel (luminosidad 85–92%); en oscuro, profundos (luminosidad 15–25%), con el contenido encima a todo color.
- **Nunca:** en botones, nav, tabs ni ningún chrome; nunca como un segundo protagonista. Si no podés nombrar la cosa del mundo de la que sale un tono, sacalo.

### Color de contenido (siempre permitido)
Fotos, video, objetos 3D y de marca, avatares, ilustraciones, mapas e íconos de apps mantienen todo su color en cualquier dial. No cuentan como un segundo color. Enmarcalos en mono para que brillen; nunca los tiñas ni los desatures para que combinen.

### Color de datos (solo categorías)
Cuando los datos tienen categorías (métricas de salud, series de un gráfico, tags, capas de un mapa, colores de tee), cada categoría recibe un color de datos y lo mantiene en todos lados: `--data-forest`, `--data-ember`, `--data-tide`, `--data-rouge`, `--data-iris`, `--data-flame`. El protagonista va primero. En claro son más profundos que los glows para que las marcas lleguen a 3:1; en oscuro son los glows. Usalos en puntos, íconos, barras y labels chicos, nunca como rellenos grandes decorativos. Con más de cuatro series, etiquetá directo.

---

## 7. Tipografía

- **Inter Display** (Google Fonts: Inter con eje `opsz` 14–32) para todo en mi marca, y por defecto.
- **Geist Mono** solo para labels técnicos: specs, metadata y los labels de sección de mi marca. Nunca como títulos de sección de un producto.
- **Caveat** (Google Fonts) solo para el acento a mano de abajo. `[TODO: reemplazar por mi propia letra]`
- **Voz tipográfica (productos):** un producto puede hablar con la fuente de su plataforma (SF Pro o SF Pro Rounded en iOS, Roboto Flex en Android) o usar una tipografía display que salga de su contenido, solo para títulos: redondeada para lo amigable y social, una serif editorial para viajes y comida, una condensada para deporte. El texto corrido sigue en una sans neutra. Los titulares en dos tonos, los números grandes y tabulares, y el resto de la mano siguen valiendo en cualquier voz.

| rol | tamaño / peso | tracking | color |
|---|---|---|---|
| display | 56 / 600 (clamp 36–56) | −3% | fg |
| h1 | 40 / 600 | −3% | fg |
| h2 | 28 / 600 | −1.5% a −3% | fg + fg-2 |
| h3 | 22 / 600 | −1.5% | fg |
| título de sección (producto) | 17–22 / 600, sentence case | −1% | fg |
| body | 16 / 400, interlineado 1.55, ≤ 62 caracteres (40–50 si va centrado) | 0 | fg-2 |
| small | 14 / 500 | 0 | fg-2 |
| label | Geist Mono 11 / 400, mayúsculas | +6% | fg-2 o fg-3 |
| mano | Caveat 20–28 / 500 | 0 | fg o fg-2 |
| números | 64–128 / 600, tabular-nums | −4.5% | fg |

Reglas:
- Mayúsculas normales en todo. Los nombres (personas, proyectos, apps, lugares) se escriben como los escriben sus dueños: Agustín Oberg, Mi Huerta, TraiNow. Los links de la nav, los botones y los tabs arrancan con mayúscula (Work, About, Book a call). Titulares, títulos de shots, posts y copy en sentence case. Nada va en minúscula por estilo, ni en Title Case Por Estilo.
- Las mayúsculas sostenidas son solo para los labels mono y el acento serif opcional de abajo.
- `→` para flujos: `Onboarding → first payment`.
- `®` solo si la marca está registrada.
- **Párrafos en dos tonos:** en el copy más largo, el relato va en `fg-2` y los puntos de giro en `fg` (clase `.story` con `.beat`). Más o menos una línea de cada cuatro se vuelve blanca; si son más, nada se destaca.
- **El acento a mano:** una nota escrita a mano, como un diseñador que anota el trabajo: "Before", "After", "Step 1", "this part moves". Caveat 500, en `fg` dentro de una pastilla `btn-2` (clase `.note`) o suelta en `fg-2` al lado de lo que señala, opcionalmente rotada −3°. Una o dos por página. Nunca en el chrome de un producto, nunca en botones, nunca un párrafo.
- Acento editorial opcional: una línea en serif y mayúsculas para el nombre de una marca o colección (visto en referencias). Máximo una por pantalla, y nunca en la misma pantalla que el acento a mano.

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
- **Tiles de serie:** 6:5, fondo `stage`, radio 8, gap 24 (16 en mobile). Clase `.series`.

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
- **Opción destacada:** entre planes o niveles, la recomendada es `.surface--featured`, con texto on-accent y una pastilla `fg`/`bg`. El resto queda en `surface-1`.
- **Trío de números:** tres valores en fila (`.stat-trio`): label 12/500 en `fg-2` arriba, valor 20–24/600 tabular abajo y hairlines de 1 px entre ellos.
- **Card de foto:** una foto que llena una card de radio 24, el nombre y el lugar sobre un velo suave abajo, y las acciones como pastillas de vidrio dentro de la foto. Avatares apilados cuando hay personas.
- **Sheet de recompensa:** un sheet flotante sobre la pantalla que retrocede. El objeto ganado va centrado sobre un glow suave del color protagonista (rayos opcionales al 6%), con un titular de dos tonos, una sola acción primaria ("Share", "Claim") y una secundaria discreta ("Later").
- **Nota:** el acento a mano dentro de una pastilla `btn-2` de 44 px de alto (`.note`), usada como label de sección en una página o arriba de tiles de antes/después.

---

## 10. Micro-blurs y micro-animaciones

Es la capa que más importa. Ninguno se nota solo; juntos son la diferencia.
- Fuera del vidrio, el blur nunca pasa de 10 px.
- Ninguna micro-animación dura más de 420 ms (salvo los loops de carga y en vivo). Lo grande no es micro: los titulares se revelan en 800 ms y los stages suben en 800 ms.

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
| **Subida por masa** | stages, imágenes y tiles de galería que entran con el scroll | y 32 → 0 y opacity 0 → 1 en 800 ms ease-out. Sin blur, sin rebote, una vez por elemento. Clase `.rise-in`. | Un chip encaja al instante; un stage llega. Una velocidad acorde al tamaño se lee como peso. |

---

## 11. Motion

### Principios
1. **Responder al instante:** feedback en menos de 100 ms.
2. **Entrar rápido, frenar suave:** ease-out por defecto. Cerrar es más rápido que abrir.
3. **Nada aparece de la nada:** las cosas entran desde donde se originan.
4. **Una cosa a la vez:** escalonar 120 ms entre líneas, 50 ms entre ítems (tope 6) y 30 ms entre palabras.
5. **El texto no baila:** se revela y queda quieto.
6. **El peso marca la velocidad:** las cosas chicas se mueven en 120–240 ms, los componentes en 420, los stages y las imágenes en 800. Cuanto más grande, más lejos y más lento viaja, nunca con rebote.

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
- `dur-rise` 800: stages e imágenes que suben al entrar en pantalla (recorrido `lift-lg` 32 px).

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

El trabajo se muestra en serie, y una serie se ve terminada cuando solo cambian las pantallas.

- **Serie uniforme:** todos los tiles de una galería o un caso de estudio tienen la misma proporción (6:5 en la web, 4:3 en Dribbble), el mismo modelo y la misma escala de device, el mismo stage y el mismo gap (24, o 16 en mobile). Sin epígrafes dentro de los tiles.
- **Flujo de tres pantallas:** cada tile cuenta una historia chica con 2–3 devices, de izquierda a derecha: dónde estás → qué abrís → qué pasa. El tercero suele ser un sheet o una recompensa sobre la pantalla que retrocede.
- **El stage:** `stage` (claro #E8E8E8, oscuro #111111). Un stage por serie, sea cual sea el modo de la UI de adentro: las pantallas claras y las oscuras lo comparten.
- **Antes → después:** para un rediseño, dos tiles lado a lado con una nota arriba de cada uno ("Before", "After"). Solo con una versión anterior real.
- **Objeto de marca:** un objeto 3D, brillante o táctil (piedra, cuero, goma), con el glow de la atmósfera o en mono, grano y sombra de contacto. Para lanzamientos, covers y el cierre de una página.
- **Formato:** 4:3 para Dribbble, tiles 6:5 en la web, 16:9 para video.
- **Device:** iPhone frontal, sin perspectiva. Un device ocupa como mucho el 60% del alto del tile; tres ocupan como mucho el 75% de su ancho. Cortar con el borde solo a propósito, para acercarse a un detalle.
- **Íconos:** de trazo 1.8, con terminaciones redondeadas. Íconos 3D o emoji solo como objetos de contenido (pins, logros, coleccionables), nunca como íconos de UI.

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

## 14. Trabajar como un estudio: aplicar a cualquier proyecto

Trabajo como un estudio de diseño, no como un sello. Nadie contrata a un estudio para que le pinte la marca del estudio en su producto. Lo contrata por una mirada de afuera, un gusto entrenado en muchos productos, un proceso que convierte una necesidad vaga en una dirección clara, y un acabado para el que su propio equipo no tiene tiempo. El trabajo tiene que parecer el producto del cliente, hecho con mis manos: al estudio se lo reconoce por la calidad y por algunos detalles de firma, nunca por un look de la casa.

### Por qué un estudio, y para qué sirve
- **Mirada de afuera:** ve el producto como lo ve alguien que lo usa por primera vez, y dice qué confunde.
- **Rango:** ya resolvió este tipo de problema en otras categorías, y trae lo que funciona.
- **Proceso:** convierte opiniones en una dirección con razones, y las decisiones dejan de ser peleas de gusto.
- **Oficio:** el último 10% (cada estado, el motion, los detalles, los dos modos) que hace que un producto se sienta confiable.
- **Identidad:** un producto que se parece a sí mismo, no a un template ni al estudio.

### Tres capas: oficio, toque y estilo de la casa
| capa | qué es | cuándo |
|---|---|---|
| **Oficio** | La vara de calidad: vida (contenido real), cada estado, los dos modos con sus propios valores, el vocabulario de motion y la puerta de frecuencia, los micro-blurs, la profundidad con luz, las reglas de copy, la accesibilidad y el ciclo de verificación. | Todos los proyectos. Es invisible: la gente solo lo siente. |
| **Toque** | De 3 a 6 detalles de firma visibles que encajan con el producto (lista abajo). | Todos los proyectos, elegidos a propósito; nunca todos. |
| **Estilo de la casa** | Mi propio look: el chrome mono y sus valores exactos (#F4F4F4, #000, #FAFAFA), Inter Display y Geist Mono, las seis atmósferas tal como son, el acento a mano y mis stages de presentación. Además, el wordmark "Agustín Oberg", el monograma "ao", mi posicionamiento y mis textos de ejemplo. | Mi propia marca; un cliente que pide "tu estilo"; o cuando gana como una de las direcciones propuestas. Nunca por defecto en el producto de otro. |

### El proceso
1. **Brief y descubrimiento.** Para quién es, el problema, el objetivo y cómo se mide el éxito, las restricciones, y lo que ya existe: marca, logo, colores, tipografía, una app, competidores que el cliente admira o que no le gustan. Preguntá; no supongas. Lo que el brief deja abierto le toca proponerlo al estudio.
2. **Investigación.** Estudiá la categoría y sus mejores productos (pantallas reales, no de memoria). Anotá qué espera la gente, y dónde todos los competidores se ven iguales.
3. **Direcciones.** Proponé 2–3 direcciones que difieran en al menos tres ejes libres (sección 4). Cada una tiene un nombre, una idea en una frase, una paleta (color protagonista y tonos acompañantes), una voz tipográfica, un carácter de forma, su fuente de vida y su estilo de imagen, un temperamento de motion, un momento firma y una pantalla clave. Cada una dice por qué encaja con este producto. Como mucho una de ellas es mi estilo de la casa, y solo cuando encaja.
4. **Elegir.** El cliente elige una, o mezcla. Recomendá una y decí por qué. Cuando la persona quiere velocidad, elegila vos y decí cuál y por qué.
5. **Diseñar.** Primero las pantallas clave, después los flujos, cada estado y el sistema (tokens y componentes). Primero el contenido, después el layout.
6. **Criticar.** Revisalo como lo hace un estudio antes de mostrarlo: la vara del oficio, el toque, las señales de IA (sección 4) y la prueba de la captura.
7. **Entregar.** El trabajo, el sistema y las razones detrás, más cada `[TODO]` que haya quedado.

### La base visual
Antes de diseñar, fijate qué referencias hay: un Figma, capturas, la marca del cliente o apps que la persona quiere seguir.

| caso | identidad | qué suma el estudio |
|---|---|---|
| **El cliente tiene marca o referencias** | La suya manda: tipografía, colores, radios, íconos, ilustración y layout. | Oficio, y 3–6 detalles de toque que no la pisan. |
| **Parcial** (por ejemplo, solo logo y colores) | La suya, en lo que define. El estudio la extiende a una identidad completa con el mismo espíritu: voz tipográfica, tonos acompañantes, forma, imagen. | Oficio y toque. |
| **Todavía nada** | El estudio propone 2–3 direcciones que salen del producto (paso 3), y la elegida se vuelve su identidad. Mis tokens son el kit de arranque (escala de radios, espaciado, motion, límites de blur, la receta de las atmósferas); la identidad decide el resto. | Oficio y toque. |
| **Mi propia marca, o "hacelo en tu estilo"** | Mi estilo de la casa. | Todo lo de esta guía. |

Sea cual sea el caso, el resultado tiene que sentirse hecho por mi estudio: no como mis otros trabajos, sino compartiendo su cuidado y algunos de sus detalles.

### Mi toque (la firma portátil)
Son los detalles que van arriba de cualquier identidad sin pisarla. Los de oficio van siempre; del resto, elegí **entre 3 y 6** según lo que encaje, nunca todos.

- **Oficio, siempre, porque no tocan la identidad visual:**
  - Mi vocabulario de motion: ease-out por defecto, press 0.97, cerrar más rápido que abrir, la puerta de frecuencia.
  - Micro-blurs: blur progresivo en bordes de scroll y barras, el fondo que retrocede al abrir un sheet, el cambio con blur en los estados, las palabras que llegan.
  - Los números importantes como protagonistas, tabulares y grandes.
  - Haptics como puntuación.
  - Mis reglas de copy: corto, concreto, una etiqueta por intención.
  - Claro y oscuro completos.
  - Vida: primero el contenido real (fotos, personas, lugares, objetos), mostrado con generosidad.
- **Toque, cuando la identidad no lo contradice:** botones pastilla, sheets flotantes con radio concéntrico, titulares en dos tonos (usando la tipografía del producto), profundidad por capas en heroes, el botón que se convierte en check, las superficies teñidas por la foto, el sheet de recompensa y el trío de números.
- **Nunca:** cambiar los colores, la tipografía, el logo o la escala de radios del cliente. Tampoco meter mis atmósferas, mi chrome mono ni mis fuentes en una marca que ya tiene las suyas.

### Color en productos
- La paleta del producto sale de su marca o de la dirección elegida. Tiene **un** color protagonista: una de mis seis atmósferas cuando encaja (forest, ember, tide, rouge, iris o flame) o, más seguido en un cliente, una nueva armada a partir de la marca o del dominio con la misma receta: 4 tonos por modo, del más profundo al glow.
- El acento es el `glow` de esa atmósfera, en los dos modos. El texto sobre el acento va en #0A0A0A. En CSS: clase `.accent-{atmósfera}` en un contenedor, y `.btn--accent`, `.surface--tint` o `.surface--accent`.
- El producto elige su **dial de color** (sección 6). El dial 1 deja el acento en un solo tipo de elemento por pantalla. El dial 2 suma la atmósfera completa en momentos clave y cards teñidas. El dial 3 pinta superficies enteras con el color. Elegilo según el contenido y el temperamento de la marca, no por costumbre.
- El producto nombra sus **2–4 tonos acompañantes** y de dónde sale cada uno en su mundo (sección 6).
- El contenido (fotos, objetos, avatares, mapas) va a todo color en cualquier dial, las pantallas que lidera una foto toman su tinte, y las categorías usan los colores de datos.
- El botón primario genérico sigue siendo `fg` sobre `bg`.

### Primero, juntar la vida
Antes de la primera pantalla, hacé la lista de lo que va a mostrar el producto: sus fotos (lugares, comida, productos, personas), sus personas (avatares, nombres), sus objetos (tickets, medallas, plantas) y sus datos en color. Pedile a la persona los assets reales. Si todavía no hay, elegí fotografía de stock que encaje (`[TODO: reemplazar]` en cada una) o definí un solo estilo de ilustración para los objetos del dominio. Una pantalla se diseña alrededor de su contenido, no se rellena con él al final.

### Primero la dirección
Escribí la dirección de la sección 4 antes de la primera pantalla: la idea, una elección por eje libre y el momento firma. La receta de abajo dice qué patrones usa cada tipo de pantalla. La composición, la densidad, la escala y la imagen salen de la dirección, así que dos productos hechos con esta receta no deberían parecerse.

### Receta: app mobile
Stack sugerido: Expo / React Native con Reanimated y expo-blur (o Skia para el blur progresivo). En web: importar `tokens.css`.

| pantalla | patrón por defecto |
|---|---|
| onboarding | Atmósfera completa, el contenido real del producto o un objeto de marca con sombra de contacto, titular de dos tonos y un solo CTA. |
| home / explorar | Manda el contenido: cards grandes de fotos (radio 24) con caras encima, o un mapa a todo color con pins con foto y blur de borde. Títulos de sección en sentence case, pills flotantes arriba, card que asoma abajo y tab bar de vidrio con blur progresivo. |
| detalle | Una foto con blur de borde, o un hero con profundidad por capas, sobre un fondo teñido por la foto. El nombre, el dato clave como número grande y un trío de números. |
| perfil | La foto de la persona manda y tiñe la pantalla. Trío de números, intereses como chips con íconos, y sus fotos o su trabajo en una grilla. |
| acción | Sheet flotante concéntrico con el fondo que retrocede. Segmented o calendario adentro. |
| confirmación | Botón que muta en check, texto que llega y haptic success. |
| recompensa / hito | Sheet de recompensa: el objeto ganado a todo color sobre un glow, sobre la pantalla que retrocede. Share, o Later. |
| en curso | Island pill con punto vivo (timer, viaje, llamada). |
| carga | Shimmer en el texto y esqueletos en `surface-2`. Sin spinners. |
| vacío | Un objeto ilustrado o una foto del dominio, titular de dos tonos y una sola acción. |
| ajustes | Lista agrupada en cards, toggles elásticos y títulos de grupo en sentence case. |

Navegación: push para profundizar, sheets para tareas cortas y tabs con crossfade. Los dos modos desde el día uno, con movimiento reducido respetado.

### Ejemplo: app de viajes
Un ejemplo resuelto, no un template. La dirección va primero.
- **Idea:** el viaje empieza antes de salir: lugares y personas que casi se pueden tocar.
- **Vida:** fotografía de destinos en todos lados, las caras de los amigos en cada viaje compartido, un mapa a todo color y el talón del pasaje como objeto del viaje.
- **Color:** manda tide (mar, vuelos, confianza), en el dial 2. Si el producto es de naturaleza u outdoor, forest. Los tonos acompañantes salen de cada destino: Lisboa lleva azul azulejo, terracota y arena; Kioto, musgo, bermellón y papel. Las fotos traen el resto.
- **Voz tipográfica:** SF Pro en iOS, con una serif editorial solo para los nombres de destinos.
- **Home:** la cara de la persona y un saludo; después, "Upcoming trips" como cards grandes de fotos, con los amigos que van apilados en cada una y los días que faltan como número protagonista. Abajo, "Open trips" con una foto, una propuesta en dos líneas y los cupos que quedan. Sin labels mono, sin grilla de íconos, sin checklist de configuración.
- **Mapa:** a todo color, con pins con foto y avatares apilados, blur de borde y cards de destinos que asoman abajo, con precio.
- **Destino:** foto a sangre con blur de borde sobre un fondo teñido por ella, nombre del lugar, precio por noche como número grande, un trío de números (noches · amigos que van · tiempo de vuelo) y, como máximo, un sticker ("NEW") por pantalla.
- **Reservar:** sheet flotante con fechas (segmented para las noches y calendario) y el fondo que retrocede.
- **Pagar:** botón de acento "Book · $1,240" que muta en check. El código de reserva llega palabra por palabra.
- **Viaje en curso:** island pill con punto vivo ("Boarding in 0:45").
- **Después del viaje:** un sheet de recompensa donde el talón del pasaje entra inclinado sobre la pantalla que retrocede, con la ciudad, las fechas y una foto. "Share" o "Later".
- **Copy:** corto y concreto ("Book", "Change dates"). Los nombres de lugares van con mayúscula porque son nombres propios.

### Checklist para cualquier proyecto
- [ ] ¿Hay una dirección escrita (idea, ejes libres, momento firma) que solo sirve para este proyecto?
- [ ] ¿Cada pantalla tiene una fuente de vida, y la home y explorar muestran tres o más fotos, caras u objetos sin scrollear?
- [ ] ¿Hay 2–4 tonos acompañantes, cada uno rastreable al mundo del producto, y ninguno en el chrome?
- [ ] ¿Cero señales de IA (sección 4, "Vida"): sin títulos de sección mono, sin una grilla de tiles de íconos como contenido, sin una card con gradiente solitaria, sin cajas grises en lugar de fotos?
- [ ] ¿Alguien le sacaría una captura para mandársela a un amigo?
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
   - Qué manda es libre: el titular, un proyecto ya reproduciéndose, un número grande o un objeto de marca. En lo primero que se ve hay algo vivo: íconos de apps reales como objetos, las pantallas de un proyecto o una foto.
3. **Trabajo seleccionado:**
   - Entre 3 y 6 proyectos, cada uno con su atmósfera. `[TODO: proyectos reales]`
   - Cada uno muestra su nombre como lo escribe el proyecto, una línea de descripción en `fg-2` y sus tags.
   - Se muestran como una serie uniforme (sección 12): el mismo tile para cada proyecto, cada uno con 2–3 de sus pantallas reales contando un flujo. Las pantallas que falten son un `[TODO]`, nunca UI inventada.
   - La disposición es libre: un tile por fila, una grilla, un índice con preview al pasar el mouse, o un proyecto por pantalla.
4. **Manifiesto corto** (opcional): 3 a 5 líneas de la filosofía, como párrafos en dos tonos o con reveal de gris a fg al scrollear. El texto siempre visible.
5. **La mano** (opcional): una o dos notas con el acento a mano, como labels de sección o anotaciones sobre el trabajo.
6. **About:**
   - Foto en blanco y negro.
   - 2 o 3 párrafos cortos.
   - Servicios como lista simple con label mono.
7. **Contacto:** titular de dos tonos, CTA "Book a call" y el email visible como texto.
8. **Footer:** labels mono (SITEMAP, SOCIAL), links en `fg`, y legales en 12 px `fg-3`.

### Plantilla de caso de estudio
1. **Hero:** atmósfera del proyecto con objeto de marca o device, el nombre del proyecto y una línea de qué es.
2. **Contexto:** problema en 2 o 3 líneas y rol / equipo / tiempo en labels mono.
3. **Decisiones:** de 3 a 5, cada una con su "por qué", en filas, no cards.
4. **Pantallas:** una serie uniforme de stages, cada uno con un flujo de tres pantallas. Mostrar los dos modos si existen.
5. **Antes → después** (solo con una versión anterior real): dos tiles lado a lado, cada uno con una nota arriba.
6. **Motion:** videos en loop de las micro-interacciones clave, cada uno con su spec en mono.
7. **Resultado:** números grandes, tabulares y reales. `[TODO: nunca inventar métricas]`
8. **Siguiente proyecto:** card grande con la atmósfera del siguiente.

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
- [ ] ¿El trabajo es una serie uniforme, con pantallas reales donde existen y un `[TODO]` donde no?
- [ ] ¿Hay algo vivo en lo primero que se ve, y como máximo dos notas a mano en la página?
- [ ] ¿Ningún dato, cliente o métrica fue inventado?
- [ ] ¿Funciona con movimiento reducido?

---

## 16. Nunca

- Gradientes violeta-azul genéricos, glassmorphism exagerado (blur de más de 40 o bordes blancos gruesos).
- Pantallas sin foto, cara, lugar, objeto ni datos en color. Cajas grises o gradientes planos en lugar de fotos.
- Labels mono en mayúsculas como títulos de sección en un producto de consumo, un título "Home" gigante, o una grilla de tiles de íconos iguales como contenido principal.
- Mockups en perspectiva, manos sosteniendo el teléfono, emojis como íconos de UI.
- Botones rectos o con radios chicos.
- Dos colores protagonistas en un mismo proyecto. Los colores de contenido y de datos no son protagonistas.
- Colores de datos usados como decoración, o contenido desaturado para que parezca "de la marca".
- Ir a mono por default porque se siente seguro. Mono es una posición del dial que se elige por una razón.
- Sombras grandes en oscuro.
- Todo dentro de cards.
- El mismo layout en todos los proyectos. Si parece el sitio de diseño con otras palabras, empezá de nuevo desde la dirección.
- Nombres, links de la nav o títulos en minúscula como estilo, o Title Case En Todos Lados.
- Una galería donde los tiles cambian de tamaño, device, escala o stage de uno a otro.
- Copy de agencia, lorem ipsum, o proyectos, clientes y métricas inventados.
- Copiar logos, nombres, textos, ilustraciones o piezas de Dominik Tyka, Figura o Revmp Studio.

---

## 17. Pendiente

- [ ] Rol, posicionamiento y copy reales.
- [ ] Logo y monograma definitivos.
- [ ] Proyectos reales para el portfolio.
- [ ] Plantillas de shot en Figma para las tres puestas.
- [ ] Dominio final, para poner URLs absolutas en `llms.txt`.
- [ ] Mi propia letra como fuente, para reemplazar a Caveat en el acento a mano.
- [ ] Capturas crudas de TraiNow, Mi Huerta y LockBox, para que cada proyecto de la serie del portfolio muestre pantallas reales.
