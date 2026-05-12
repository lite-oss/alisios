import { defineConfig, type TinaField } from "tinacms";

const siteFields: TinaField[] = [
  { type: "string", name: "title", label: "Nombre del sitio" },
  { type: "string", name: "description", label: "Descripción", ui: { component: "textarea" } },
  { type: "string", name: "email", label: "Email de contacto" },
  { type: "string", name: "linkedin", label: "URL de LinkedIn" },
  { type: "string", name: "stat_countries", label: "Estadística — Países" },
  { type: "string", name: "stat_languages", label: "Estadística — Idiomas" },
  { type: "string", name: "stat_ideas", label: "Estadística — Ideas" },
  { type: "string", name: "about_image_url", label: "Imagen About — URL" },
  { type: "string", name: "about_image_alt", label: "Imagen About — Texto alternativo" },
  { type: "string", name: "copyright_year", label: "Año copyright" },
];

const contentFields: TinaField[] = [
  // Navegación
  { type: "string", name: "nav_sobre", label: "Nav — Sobre" },
  { type: "string", name: "nav_areas", label: "Nav — Áreas" },
  { type: "string", name: "nav_colabora", label: "Nav — Colabora" },
  { type: "string", name: "nav_contacto", label: "Nav — Contacto" },
  { type: "string", name: "nav_cta", label: "Nav — Botón CTA" },
  // Hero
  { type: "string", name: "hero_eyebrow", label: "Hero — Eyebrow" },
  { type: "string", name: "hero_title", label: "Hero — Título (admite HTML)", ui: { component: "textarea" } },
  { type: "string", name: "hero_lead", label: "Hero — Texto introductorio", ui: { component: "textarea" } },
  { type: "string", name: "hero_btn1", label: "Hero — Botón primario" },
  { type: "string", name: "hero_btn2", label: "Hero — Botón secundario" },
  // Misión
  { type: "string", name: "mission_quote", label: "Misión — Cita", ui: { component: "textarea" } },
  // Sobre PASS-A
  { type: "string", name: "about_eyebrow", label: "Sobre — Eyebrow" },
  { type: "string", name: "about_title", label: "Sobre — Título (admite HTML)", ui: { component: "textarea" } },
  { type: "string", name: "about_p1", label: "Sobre — Párrafo 1", ui: { component: "textarea" } },
  { type: "string", name: "about_p2", label: "Sobre — Párrafo 2", ui: { component: "textarea" } },
  // Pilares
  { type: "string", name: "p1_title", label: "Pilar 1 — Título" },
  { type: "string", name: "p1_text", label: "Pilar 1 — Texto" },
  { type: "string", name: "p2_title", label: "Pilar 2 — Título" },
  { type: "string", name: "p2_text", label: "Pilar 2 — Texto" },
  { type: "string", name: "p3_title", label: "Pilar 3 — Título" },
  { type: "string", name: "p3_text", label: "Pilar 3 — Texto" },
  { type: "string", name: "p4_title", label: "Pilar 4 — Título" },
  { type: "string", name: "p4_text", label: "Pilar 4 — Texto" },
  // Estadísticas
  { type: "string", name: "stat1", label: "Estadística 1 — Etiqueta" },
  { type: "string", name: "stat2", label: "Estadística 2 — Etiqueta" },
  { type: "string", name: "stat3", label: "Estadística 3 — Etiqueta" },
  // Áreas
  { type: "string", name: "areas_eyebrow", label: "Áreas — Eyebrow" },
  { type: "string", name: "areas_title", label: "Áreas — Título" },
  { type: "string", name: "a1_title", label: "Área 1 — Título" },
  { type: "string", name: "a1_text", label: "Área 1 — Texto" },
  { type: "string", name: "a2_title", label: "Área 2 — Título" },
  { type: "string", name: "a2_text", label: "Área 2 — Texto" },
  { type: "string", name: "a3_title", label: "Área 3 — Título" },
  { type: "string", name: "a3_text", label: "Área 3 — Texto" },
  { type: "string", name: "a4_title", label: "Área 4 — Título" },
  { type: "string", name: "a4_text", label: "Área 4 — Texto" },
  { type: "string", name: "a5_title", label: "Área 5 — Título" },
  { type: "string", name: "a5_text", label: "Área 5 — Texto" },
  { type: "string", name: "a6_title", label: "Área 6 — Título" },
  { type: "string", name: "a6_text", label: "Área 6 — Texto" },
  // Colabora
  { type: "string", name: "collab_eyebrow", label: "Colabora — Eyebrow" },
  { type: "string", name: "collab_title", label: "Colabora — Título" },
  { type: "string", name: "collab_lead", label: "Colabora — Texto intro", ui: { component: "textarea" } },
  { type: "string", name: "c1_tag", label: "Tarjeta 1 — Etiqueta" },
  { type: "string", name: "c1_title", label: "Tarjeta 1 — Título" },
  { type: "string", name: "c1_text", label: "Tarjeta 1 — Texto", ui: { component: "textarea" } },
  { type: "string", name: "c1_features", label: "Tarjeta 1 — Beneficios", list: true },
  { type: "string", name: "c1_btn", label: "Tarjeta 1 — Botón" },
  { type: "string", name: "c2_tag", label: "Tarjeta 2 — Etiqueta" },
  { type: "string", name: "c2_title", label: "Tarjeta 2 — Título" },
  { type: "string", name: "c2_text", label: "Tarjeta 2 — Texto", ui: { component: "textarea" } },
  { type: "string", name: "c2_features", label: "Tarjeta 2 — Beneficios", list: true },
  { type: "string", name: "c2_btn", label: "Tarjeta 2 — Botón" },
  // Contacto
  { type: "string", name: "contact_label", label: "Contacto — Etiqueta" },
  { type: "string", name: "contact_title", label: "Contacto — Título (admite HTML)", ui: { component: "textarea" } },
  // Footer
  { type: "string", name: "footer_tagline", label: "Footer — Tagline", ui: { component: "textarea" } },
  { type: "string", name: "footer_col1", label: "Footer — Columna 1 título" },
  { type: "string", name: "footer_col2", label: "Footer — Columna 2 título" },
  { type: "string", name: "footer_areas", label: "Footer — Enlace Áreas" },
  { type: "string", name: "footer_pub", label: "Footer — Enlace Publicaciones" },
  { type: "string", name: "footer_events", label: "Footer — Enlace Eventos" },
  { type: "string", name: "footer_community", label: "Footer — Enlace Comunidad" },
  { type: "string", name: "footer_sub", label: "Footer — Enlace Suscripción" },
];

export default defineConfig({
  branch: process.env.GITHUB_BRANCH ?? process.env.HEAD ?? "main",
  clientId: process.env.TINA_CLIENT_ID ?? "",
  token: process.env.TINA_TOKEN ?? "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "ajustes",
        label: "⚙️ Ajustes del sitio",
        path: "src/_data",
        format: "json",
        match: { include: "site" },
        fields: siteFields,
        ui: { allowedActions: { create: false, delete: false } },
      },
      {
        name: "es",
        label: "🇪🇸 Español",
        path: "src/_data/lang",
        format: "json",
        match: { include: "es" },
        fields: contentFields,
        ui: { allowedActions: { create: false, delete: false } },
      },
      {
        name: "en",
        label: "🇬🇧 English",
        path: "src/_data/lang",
        format: "json",
        match: { include: "en" },
        fields: contentFields,
        ui: { allowedActions: { create: false, delete: false } },
      },
      {
        name: "fr",
        label: "🇫🇷 Français",
        path: "src/_data/lang",
        format: "json",
        match: { include: "fr" },
        fields: contentFields,
        ui: { allowedActions: { create: false, delete: false } },
      },
    ],
  },
});
