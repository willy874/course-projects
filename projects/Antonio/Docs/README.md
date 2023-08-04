## E Commerce

---

![](./asset/../assets/Basics-of-ECommerce.jpg)

### >> Reference:

[漁夫先生](https://www.mrfisherman.tw/%E6%B5%B7%E9%AE%AE%E5%A5%97%E7%B5%84B-seafood-Gift-box-b)
[統一生機](https://www.organicshops.cc/)
[湯瑪士肉舖](https://www.thomasmeat.com.tw/)

<!-- [MindSet & Diagram Link](https://whimsical.com/e-commerce-MDjY2EtCpDLkeyXaRkwbbx) -->

[Figma](https://www.figma.com/file/iNOVVwhCWzuzXlLcHdZD2v/E_commerce?type=design&node-id=0%3A1&mode=design&t=aP5KVNOiDwt6zrJk-1)

---

### >> Framework & Packages:

Languages & Framework： `Next.js`, `TypeScript`
DataBase： `Prisma(serverless DB)`
State management： `Zustand`
Packages: `Email.js, React-Hook-Form`
UI： `Tailwind UI / shadcn-ui`
🔥Deployment (yet)： `Vercel`
🔥Rich-Text: ` `
🔥Testing (yet)： `Test ( Jest / React Testing Library)`

---

<span style="color: red;">// 下列內容以針對不同前台功能向概略區分</span>

<!-- <img src="./assets/MindSet.png" width="800" alt="架構圖_Diagram" /> -->

### >> :computer: 前台 \_ <span style="font-size: 14px">[POC(front)\_Links](./Demand_Analysis%20&%20POC_front.md)</span>

> `SEO: MetaData 給網站首頁`, `SSR: 處理靜態文章部分`, `CSR: 處理使用者互動部分 `

1. :bulb:最新消息 (News) - `server side` : 產品相關消息, 產品主打, 優惠商品
2. :bulb:商品列表 (ItemList) - `client side`
3. :bulb:食譜分享 (Recipes) - `server side` : 商品基礎烹飪方法與教學
4. :bulb:相關文章 (Article) - `server side` : 產品生產紀實, 其它文章
5. :bulb:產品證明 (Provements) - `server side` : 相關標章, 產品合格文件
6. :bulb:關於我們 (About/Contact) - `server side` : 店家資訊, 經營許可
7. :bulb:常見問題 (FAQ) - `server side` : 網站操作, 物流說明, 生鮮保存指引
8. :bulb:購物車系統 (ShoppingCart) - `client side` : 側邊欄, 訂單管理
9. :bulb:結帳系統(checkout) - `client side` : 訂單結帳, 運送地點, 匯款帳號,==金流串接??==

❓ 會員管理 (Membership) - `client side` : 訂單紀錄, 我的最愛, 常用設定
❓ 訂單查詢 (Query) - `client side`
❓ 評分/留言系統 (Comments) - `client side`

> 前台主邏輯架構

<img src="./assets/diagram.png" width="400" alt="架構圖_Diagram" />

---

### >> :computer: 後台 \_ <span style="font-size: 14px">[POC(back)\_Links](./Demand_Analysis%20&%20POC_back.md)</span>

1. :bulb:訂單管理 (Orders) : 清單管理, 通知系統
2. :bulb:週期事項 (Routines) : 每周/每日上線確認待辦事項
3. :bulb:商品管理 (Merchandise): 清單管理, 商品增刪改
4. :bulb:報表管理 (Report): `依需求擴增內容，預計以時間區隔配合開放式勾選做資料匯出`

---

##### `更新紀錄`

- 230804 :
  - 將 `README.md` 作為「入口」進行整理，移除不必要分段、圖片，加入移動連結，避免重點混亂。
  - 前台加入「購物車系統」，納入開發規劃中。
  - 區分 POC 測試規劃 (front / back)。
