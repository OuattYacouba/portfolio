# Portfolio — Yacouba Ouattara

Data Analyst · Business Intelligence · Pilotage & valorisation de la donnée.

**Site en ligne : https://portfolio-umber-alpha-cap35chbad.vercel.app**

Portfolio bilingue (français / anglais) qui présente mes projets data sous forme d'études de cas : contexte, démarche, livrables et résultats.

## Projets présentés

| Projet | Outils |
|---|---|
| Pilotage de la performance et aide à la décision | Python, Pandas, Scikit-Learn, Streamlit, Plotly, LLM (Gemini) |
| Automatisation du reporting financier | ERP Odoo, Excel avancé, Power Query |
| Tableau de bord des ventes e-commerce | Excel, Power Pivot, modèle de données, CUBEVALUE |

## Le site

- HTML, CSS et JavaScript, sans framework, sans dépendance et sans étape de build.
- Bilingue FR / EN, thème jour / nuit, filtres de projets par outil.
- Études de cas accessibles par une adresse dédiée (`#/projet/<id>`), captures agrandissables.
- Polices auto-hébergées (Source Serif 4), aucun traceur.

## Structure

```
index.html            page unique
vercel.json           en-têtes HTTP et cache
assets/
  data.js             contenu : liens, projets, compétences, parcours, certifications
  app.js              logique : langue, thème, filtres, études de cas, visionneuse
  styles.css          mise en page et typographie
  projects/           captures des projets
  fonts/              Source Serif 4
```

## Lancer en local

```bash
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## Déploiement

Hébergé sur Vercel : chaque push sur `main` redéploie le site.

## Contact

- LinkedIn : https://www.linkedin.com/in/yacouba-ouattara-b7156a178/
- E-mail : ouattara.yacouba111@gmail.com
