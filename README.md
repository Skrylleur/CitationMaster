# 📚 CitationMaster

CitationMaster est une application web moderne permettant de gérer une base de citations inspirantes, drôles ou philosophiques. Elle est conçue avec **Next.js 15**, **Prisma** et **Tailwind CSS**, et propose une interface simple pour **ajouter**, **modifier**, **supprimer** ou **partager** des citations.

---

## Aperçu

![Aperçu 1 de l'application](public/images/Site_img1.png)
![Aperçu 2 de l'application](public/images/Site_img2.png)
![Aperçu 3 de l'application](public/images/Site_img3.png)
![Aperçu 4 de l'application](public/images/Site_img4.png)
![Aperçu 5 de l'application](public/images/Site_img5.png)

---

## ✨ Fonctionnalités

- 📝 Ajout de citations (texte + auteur)
- 🔄 Modification d’une citation existante
- ❌ Suppression avec confirmation
- 🔗 Affichage public de chaque citation via un lien dédié
- 💅 Interface responsive et épurée via Tailwind CSS
- ⚙️ Backend solide avec Prisma et SQLite (par défaut)

---

## 🧱 Tech Stack

- **Next.js 15 (App Router + Server Actions)**
- **TypeScript**
- **Tailwind CSS**
- **Prisma ORM**
- **SQLite** (modifiable en PostgreSQL/MySQL)

---

## 🚀 Démarrage rapide

```bash
# Installe les dépendances
npm install

# Génère le client Prisma
npx prisma generate

# Lance le serveur en dev
npm run dev

---

## Structure du projet

/src
 ├─ /app
 │   ├─ /admin             → Interface d'administration (CRUD)
 │   ├─ /citations         → Affichage public d'une citation
 │   └─ layout.tsx         → Layout principal
 ├─ /components            → UI (Button, Card, etc.)
 ├─ /lib/prisma.ts         → Client Prisma configuré
 └─ /styles/globals.css    → Styles globaux