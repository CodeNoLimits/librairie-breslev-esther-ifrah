# ⚠️ PROTECTION DU PROJET & ISOLATION

Ce dossier contient deux projets **distincts** qui ne doivent pas être mélangés.

## 1. Site Principal (Racine)
- **Type:** Site Statique (HTML/CSS)
- **Dossier:** `/` (Racine)
- **Fichiers:** `index.html`, `contract.html`, `netlify.toml`, etc.
- **Déploiement:** Netlify (ou autre hébergeur statique).

## 2. Thème Shopify (Dossier `esther-books-theme`)
- **Type:** Thème Shopify 2.0 (Liquid/JSON)
- **Dossier:** `/esther-books-theme/`
- **Statut:** 🔒 **ISOLÉ**
- **Instruction:** Ce dossier est ignoré par Git (`.gitignore`) et Netlify (`.netlifyignore`) pour éviter toute publication accidentelle.

---

### 🛡️ Comment travailler ?

1. **Pour le site vitrine actuel :**
   Continuez à travailler à la racine normalement. Le dossier Shopify sera invisible pour Git et vos déploiements.

2. **Pour le site Shopify :**
   Si vous voulez travailler dessus ou le publier, vous devez :
   - Entrer dans le dossier : `cd esther-books-theme`
   - Initialiser un NOUVEAU dépôt git si nécessaire : `git init`
   - Utiliser Shopify CLI depuis ce dossier uniquement.

**NE JAMAIS ENLEVER `esther-books-theme/` DU FICHIER `.gitignore` À LA RACINE.**
