## E Commerce

---

> 心智圖: https://whimsical.com/e-commerce-MDjY2EtCpDLkeyXaRkwbbx

![](./asset/../assets/Basics-of-ECommerce.jpg)

#### Main Skills & Framework:

Languages & Framework： `Next.js`, `TypeScript`
DataBase： `Prisma(serverless DB)`
State management： `Zustand`
Packages: `Email.js`
UI： `Tailwind UI/shadcn-ui`
🔥Deployment (yet)： `Vercel`
🔥Rich-Text: ` `
🔥Testing (yet)： `Test(Jest/React Testing Library)`

---

### >> :computer:前台

> `SEO`, `SSR`, `CSR`

##### :bulb:首頁(MainPages) - `use server` (static)

- Header
- Section
  - 最新消息(News) / Hero / Banner (Carousel)
  - 商品卡(Cards)
- Footer
  - 聯絡方式(Contacts Us)
  - 地點(Location)
  - 版權(CopyRights)

##### :bulb:最新消息(News) - `use server` (static)

- 產品相關消息
- 產品主打
- 優惠商品
- 其它通知事項

##### :bulb:商品列表(ItemList) - `use client`

##### :bulb:食譜分享(Recipe) - `use server` (static)

- 商品烹飪方法與教學

##### :bulb:(Blog/Article) - `use server` (static)

- 產品生產紀實
- 其它文章、健康文章

##### :bulb:產品證明(Provements) - `use server` (static)

- 相關標章
- 產品合格文件

##### :bulb:關於我們(About/Contact) - `use server` (static)

- 店家資訊
- 經營許可

##### :bulb:常見問題(Q&A) - `use server` (static)

- 網站操作
- 物流說明
- 生鮮保存指引

##### 訂單查詢(Query)

##### 評價系統(Comments)

##### 會員管理(Membership) (有與購物車系統重疊處 需要考量)

##### 購物車系統(ShoppingCart) - `use client`

- 側邊欄(offset carts)
- 訂單管理(OrderManagement)
- 會員訂購/ 非會員訂購 (member/none-member)

---

### >> :computer:後台

##### :bulb:訂單管理

- 行程管理
- 通知
  - 訂購通知
  - 物流通知

##### :bulb:週期事項

- 每周/每日上線確認待辦事項

##### :bulb:報表管理

- `依需求擴增內容，預計以時間區隔配合開放式勾選做資料匯出`

##### :bulb:商品管理

- 清單管理
- 商品增改
