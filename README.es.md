# Agustín Oberg

**Hago productos que la gente usa de verdad.**
Mobile, web, backend e infra, para equipos y para mis propias apps.

Full-stack engineer en Buenos Aires, construyendo desde 2020. Hoy, senior React Native engineer en SQUIRE.

[Portfolio](https://agustinoberg.pages.dev/es/) · [Lenguaje de diseño](https://agustinoberg-design.pages.dev/es/) · [LinkedIn](https://www.linkedin.com/in/oberg-agustin/) · [X](https://x.com/agus_tsx) · [Email](mailto:agustin.oberg@gmail.com) · [English](README.md)

---

### En números

| | |
|---:|---|
| **30K+** | usuarios activos en las apps de SQUIRE en las que trabajo |
| **15K+** | descargas en mis propias apps, en Google Play |
| **4.8★** | o más en cada app que publiqué, sobre 121 reseñas |
| **6 años** | construyendo productos web, mobile y backend |

### Trabajo

Productos con usuarios reales detrás, para empresas y clientes de Estados Unidos y Argentina.

| | | |
|---|---|---|
| **SQUIRE** | Apps mobile para la industria de servicios. Arquitectura frontend, una migración desde cero, performance y testing. | 30K+ usuarios activos |
| **Givers** | Inscribe, acompaña y les paga a cuidadores familiares a través de programas estatales de Estados Unidos. Construí el producto de punta a punta, incluida la configuración de Google Cloud. | ~10K cuidadores (2023) |
| **Galeno** | Medicina prepaga en Argentina. Web y mobile con React, Next.js, React Native y Node, y la configuración de Azure detrás. | 500K+ descargas |

### Mis apps

Diseñadas, desarrolladas y lanzadas por mí: la app, el backend y el lanzamiento.

| | | | |
|---|---|---|---|
| <img src="https://play-lh.googleusercontent.com/HpSAhMJ03uA-BQx9kFQi-D4tfPTJ_F972eCtMVQpURwFbG1RYXpbIqiJ5WdfY6lVb5ia8g-jfN1LKISD6vHs=s96-rw" width="40" height="40" alt=""> | **Mi Huerta** | Un compañero para tu huerta que asocia las plantas que se llevan bien. | 10K+ descargas · [Google Play](https://play.google.com/store/apps/details?id=com.miHuerta.agustin.aguilera) |
| <img src="https://play-lh.googleusercontent.com/yFnedREOZAjjFidCdyIJfJMIqAbxzpVWiqBIq9_H4sw67a0fYrw_PcWj6w_LUCfM1ToMfwBDx92dp8nHGTMS=s96-rw" width="40" height="40" alt=""> | **LockBox** | Tus contraseñas en un solo lugar, cifradas. | 5K+ descargas · [Google Play](https://play.google.com/store/apps/details?id=com.agustinoberg.lockbox) |
| <img src="https://play-lh.googleusercontent.com/HHKzdBMl6N0iJtA_y3RG6gnCw314izY0xUDMkJV0JZRtDzlcJ38UgCkOi3A2YeFNCIeHwy6Hpnix4RY2uJYlRw=s96-rw" width="40" height="40" alt=""> | **TraiNow** | Planificá rutinas, registrá cada serie y mirá tu progreso real. | 5.0★ · [App Store](https://apps.apple.com/app/id6756187372) · [Google Play](https://play.google.com/store/apps/details?id=com.trainow.mobile) |
| <img src="https://agustinoberg.pages.dev/apps/musu.png" width="40" height="40" alt=""> | **Musu** | Sacale una foto a la etiqueta y sabé si es para vos. Un escáner de comida con AI. | En revisión |
| | **Tavi** | Una app de viajes. Lo que está en el horno ahora. | Próximamente |

### Con qué trabajo

- **Mobile:** React Native, Expo, TypeScript
- **Web:** React, Next.js, Astro
- **Backend:** Node, PostgreSQL, MongoDB, MariaDB, DynamoDB
- **Cloud:** AWS, Google Cloud, Azure, Docker, Kubernetes, serverless

### Cómo trabajo

> La gente no lee las interfaces. Las siente.
>
> Si dudo entre agregar y sacar, saco.

---

<details>
<summary><b>Sobre este repo</b></summary>

<br>

Este repo es mi portfolio, mi lenguaje de diseño y mis skills para agentes, en un solo Turborepo.

| ruta | qué es |
|---|---|
| [`apps/portfolio`](apps/portfolio) | El portfolio, en Astro → [agustinoberg.pages.dev](https://agustinoberg.pages.dev/es/) |
| [`apps/design`](apps/design) | El sitio del lenguaje de diseño → [agustinoberg-design.pages.dev](https://agustinoberg-design.pages.dev/es/) |
| [`packages/brand`](packages/brand) | La especificación ([`brand.es.md`](packages/brand/brand.es.md)) y los tokens |
| [`packages/skills`](packages/skills) | Skills para que un agente diseñe y construya como yo |

Instalá las skills en Claude Code, Cursor, Codex o cualquier agente compatible con Agent Skills:

```sh
npx skills add AgustinOberg/agustinoberg
```

Para correrlo local:

```sh
pnpm install
pnpm dev:portfolio   # http://localhost:4321
pnpm dev:design      # http://localhost:5173
```

</details>
