# Esther Ifra Breslev Books Theme

## 📚 Project Overview
Custom Shopify Theme for "Esther Ifra Breslev Books", designed to display the works of Rabbi Nachman and other Breslev writings with dignity and clarity.

**Version:** 1.0.0
**Author:** Jules (Agent)

## 🏗 Architecture
This theme is built on Shopify 2.0 architecture using JSON templates.

### Directory Structure
- `layout/`: Contains `theme.liquid`.
- `templates/`: JSON templates for Index, Product, Collection, Cart, Pages.
- `sections/`: Liquid sections (Header, Hero, Product, etc.).
- `snippets/`: Reusable bits (SEO, Schema).
- `assets/`: CSS, JS, and fonts.
- `config/`: Settings schema and data.
- `locales/`: Translations (FR, EN, HE).
- `setup/`: Helper scripts and definitions for data import.

## 🛠 Setup & Configuration

### 1. Product Metafields
To fully utilize the theme features, create the following Metafields in Shopify Admin (Settings > Custom Data > Products):

| Namespace | Key | Type | Description |
|-----------|-----|------|-------------|
| `custom` | `author` | Single line text | Author Name |
| `custom` | `translator` | Single line text | Translator Name |
| `custom` | `pages_count` | Integer | Number of pages |
| `custom` | `publication_year` | Integer | Year |
| `custom` | `original_language` | Single line text | Original Language |
| `custom` | `extract_pdf` | File (PDF) | Sample chapter |
| `custom` | `summary` | Multi-line text | Detailed Table of Contents |
| `custom` | `approvals` | List of Files (Images) | Rabbinical Approvals |

### 2. Collections
Create the following automated collections:
- **Rabbi Nachman**: `custom.author` contains "Rabbi Nachman".
- **Rabbi Nathan**: `custom.author` contains "Rabbi Nathan".
- **Nouveautés**: Sort by Date (Newest first).

### 3. Navigation
Configure the "Main Menu" in Navigation settings to include links to these collections.

## 🌍 Localization
The theme supports:
- **French (fr)**: Default.
- **English (en)**: For international visitors.
- **Hebrew (he)**: Fully supported with RTL (Right-To-Left) layout.

## 🧠 AI Assistant
The theme includes a basic AI "Conseiller Breslev" widget (`assets/ai-assistant.js`).
To customize the recommendations, edit the `recommendations` object in `assets/ai-assistant.js`.

## 🧪 Testing & QA
See `QA_REPORT.md` for details on verified features.

## 🚀 Import Data
Use the CSV format provided in `setup/books_sample_data.csv` to bulk import books.
