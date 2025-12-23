# 蛍光ペン PRO - SEO寫手數位工具

![Version](https://img.shields.io/badge/version-7.4-374B6D?style=flat-square)
![Type](https://img.shields.io/badge/tool-SEO_Writer_Suite-B93A32?style=flat-square)
![License](https://img.shields.io/badge/copyright-Kaoru_Tsai_2025-gray?style=flat-square)

> **專為 SEO 內容創作者打造的數位文房具。**
> 結合日系文青美學與強大的 Google Docs 相容性，讓寫作、標註、輸出的一連串心流不再受阻。

---

## 📖 專案簡介 (Introduction)

**蛍光ペン PRO** 是一款運行於瀏覽器的單頁式應用程式 (SPA)。它解決了 SEO 寫手最常見的痛點：**「在編輯器寫好的格式，貼到 Google Docs 全跑版」**。

透過獨家的樣式隔離技術，本工具能確保您標註的「紅字重點」與「標題層級」完美無縫地轉移至 Google Docs，並自動套用最適合中文閱讀的微軟正黑體 (Microsoft JhengHei)。

## ✨ 核心功能 (Key Features)

### 1. 沉浸式寫作環境 (Zen Workspace)
* **日系雜誌風格**：採用 `Noto Serif JP` (明朝體) 呈現優雅的編輯體驗。
* **深海夜間模式 (Deep Ocean)**：一鍵切換深色主題，保護深夜趕稿的眼睛。
* **全裝置響應 (Responsive)**：從 27 吋螢幕到手機、平板 (1024px 以下自動切換 Tabs 模式)，排版永不崩壞。

### 2. SEO 智能輔助 (SEO Intelligence)
* **關鍵字密度監測**：即時計算關鍵字出現頻率，避免過度堆砌 (Keyword Stuffing)。
* **一鍵自動標註 (Auto Mark)**：輸入關鍵字，系統自動將文中所有出現處標示為 **[紅字+粗體]**。
    * *技術特點*：此標註僅改變顏色與粗細，**絕不影響原本的字體大小**。
* **標點自動轉全形**：側邊欄貼心開關，解決半形標點混用的問題。

### 3. Google Docs 完美對接 (Docs Perfect Paste)
* **樣式清洗技術**：複製時自動封裝為 `Microsoft JhengHei` 字體，解決 Docs 預設字體顯示問題。
* **結構化標籤**：提供 H1 (大標)、H2 (副標)、P (內文) 快速按鈕，確保 SEO 結構層級分明。
* **字級模擬器**：仿 Google Docs 的字體大小控制 (1-7 級)，所見即所得。

---

## 🚀 快速上手 (Quick Start)

無需安裝，直接開啟 `index.html` 即可使用。

1.  **輸入原文**：在左側「原文輸入」貼上草稿，或直接開始打字。
2.  **設定關鍵字**：在左側「SEO 關鍵字庫」輸入目標詞彙（每行一個）。
3.  **一鍵標註**：點擊 `一鍵標註 (Auto Mark)`，系統會自動將關鍵字上色。
4.  **結構調整**：選取標題文字，使用上方工具列的 `[大標]` 或 `[副標]` 設定層級。
5.  **輸出交付**：點擊右下角的 `複製到 Docs` 按鈕，直接貼上 Google Docs 即完成交付。

---

## 🛠️ 技術規格 (Technical Specs)

* **Core Logic**: Vanilla JavaScript (ES6+)
* **Styling**: Tailwind CSS (CDN) + Custom CSS Variables
* **Storage**: LocalStorage (自動保存寫作進度與設定)
* **Compatibility**: Chrome, Edge, Safari, Firefox (Desktop & Mobile)

### Google Docs 樣式鎖定機制
本版本 (V7.4) 採用了特殊的 `Range Surround` 技術來處理紅字標註：
```javascript
// 確保只改變顏色與粗細，不污染字體大小
span.style.fontWeight = "700";
span.style.color = "#B93A32";
// No font-size property is injected here
