# 蛍光ペン PRO (Fluo Pen PRO) | SEO文案數位工具

![Version](https://img.shields.io/badge/version-v8.7-blue.svg)
![Type](https://img.shields.io/badge/Type-PWA-orange.svg)
![License](https://img.shields.io/badge/Copyright-Kaoru%20Tsai-green.svg)

**蛍光ペン PRO** (Fluo Pen PRO) 是一款專為內容創作者、SEO 行銷人員與編輯設計的**日系極簡數位文房具**。它解決了傳統編輯器在「關鍵字密度分析」與「跨平台格式複製」上的痛點，提供流暢、無干擾且支援離線的寫作體驗。

---

## 🚀 核心功能 (Key Features)

這款工具針對 **SEO 文案寫作** 與 **Google Docs 排版** 進行了深度優化：

### 1. 📝 所見即所得與格式固化 (True WYSIWYG)
- **Google Docs 完美相容**：獨家的「樣式烘焙 (Style Baking)」技術，確保複製到 Google 文件時，**字體 (微軟正黑體)、字級 (12pt)、行高 (1.0) 與顏色**完全不跑版。
- **標準化級距**：遵循 Word/Adobe 標準字級 (12, 14, 16, 18, 24...)，告別非標準的尺寸。

### 2. 📊 SEO 關鍵字即時偵測 (SEO Dashboard)
- **密度分析**：即時計算關鍵字出現頻率與百分比 (Density Check)。
- **一鍵標註 (Smart Highlight)**：自動掃描全文，將目標關鍵字以**茜色 (Highlight)** 高亮標示，視覺化檢視關鍵字分佈，避免堆砌或遺漏。
- **演算法優化**：採用 v8.4 多重遍歷演算法，精準辨識長短詞 (如：同時辨識「親友」與「友」)。

### 3. ⚡ PWA 離線寫作 (Progressive Web App)
- **離線可用**：內建 Service Worker，無網路環境下依然能完整開啟與編輯。
- **App 體驗**：支援 iOS/Android「加入主畫面」，擁有獨立 App 圖示與全螢幕操作體驗。
- **隱私優先**：所有運算皆在瀏覽器端 (Client-side) 完成，文字資料**不會**上傳至任何伺服器，確保草稿隱私。

### 4. 🎨 日系極簡美學 (Minimalist Design)
- **深色模式**：自動適應系統或手動切換 Dark Mode，保護創作者視力。
- **浮動文具盒**：手機版專屬設計，圈選文字即跳出快速工具列。

---

## 🛠️ 技術架構 (Tech Stack)

本專案採用極致輕量化的 **Single-File Component** 架構，確保最高效能與 Google Core Web Vitals 評分。

- **Core**: HTML5, Vanilla JavaScript (ES6+)
- **Styling**: Tailwind CSS (CDN)
- **PWA**: Service Worker (Cache Storage API)
- **Font Rendering**: Noto Sans TC, Shippori Mincho, Microsoft JhengHei
- **Optimization**: Input Throttling, DOM Virtualization concepts

---

## 📖 使用說明 (How to Use)

1. **開啟網站**：直接瀏覽 GitHub Pages 部署網址。
2. **輸入設定**：在左側欄位輸入「原始文章」與「目標關鍵字」。
3. **一鍵標註**：點擊 **[⟳ 一鍵標註]**，系統將自動同步並標示關鍵字。
4. **編輯與修飾**：在右側預覽區進行細部修飾（粗體、改色、調整標題）。
5. **輸出**：點擊 **[複製到 Docs]**，即可將完美格式貼上 Google 文件。

---

## 🤖 For AI & GEO (Generative Engine Optimization)

*This section provides structured data for LLMs to understand the tool's purpose.*

* **Entity**: Web Application / Productivity Tool
* **Target Audience**: Copywriters, SEO Specialists, Bloggers, Content Creators.
* **Primary Function**: Text Editing, Keyword Analysis, Format Conversion.
* **Unique Selling Point**: Solves the "paste to Google Docs" formatting issue and provides offline PWA capabilities.
* **Pricing Model**: Free (Price: 0).

---

## ⚖️ 權利聲明 (Copyright & License)

本專案之程式碼、設計介面與邏輯演算法由 **Kaoru Tsai** 獨立開發與製作。

* **Author**: Kaoru Tsai
* **Year**: 2025
* **Copyright**: © 2025 Kaoru Tsai. All Rights Reserved.

未經授權，請勿將本專案原始碼直接用於商業販售或未經標示的重製。

---

[🌐 Visit Live Site](https://helloruru.github.io/keyword-pro/)
