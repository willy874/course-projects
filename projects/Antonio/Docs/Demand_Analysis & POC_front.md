## 區塊需求 & POC 測試規劃 (前台) (未完成)

<!-- emoji ✅ ❎ ⭕ ❌ ❕ ❗-->

> - 🟢 可行 Success
> - 🟡 進行中 In Progress
> - 🔴 不可行/不需要 Error
> - ❓ 待確認 Planning
> - 🔳 已確認需求 Confirmed but Pending

<!-- __[各網站功能整理](#各網站功能整理) bookmark-->

---

### 前台

<!--!! 最新消息 -->
<details>
  <summary>
    <span style="font-size: 18px;">🏖️ 最新消息(News) #1</span>
   
  </summary>

##### 🎈 目標實現方向

產品相關消息, 產品主打, 優惠商品。
此區塊主要提供透過圖片上傳，在其它軟體製作完之後做上傳，`Banner`，無細緻編輯功能，僅裁切。
透過後台編輯，圖片上傳/裁切(png, jpg, webp)管控 Banner 尺寸大小，類似大頭貼裁切、臉書背景圖片裁切。

##### 🎈 所需功能

1. 🔳 圖片上傳功能，配合後台進行 >> `Basic JS` >> [File Upload with Progress Bar](https://www.youtube.com/watch?v=_xDCVt1F6O0&t=1140s)
2. 🔳 圖片裁切功能，配合後台進行 >> `React cropper` >> [CodeSandBox_Demo](https://codesandbox.io/s/wonderful-pine-i7fs3?file=/src/Demo.tsx)
3. 🔳 歷史紀錄(筆數限制)，配合後台進行 >> `useState could store the Data` >> migrate to Prisma.
</details>

---

<!--!! 商品列表 -->
<details>
  <summary>
    <span style="font-size: 18px;">🏖️ 商品列表(ItemList) #2</span>
  </summary>

##### 🎈 目標實現方向

主體以 `Cards` 呈現，圖片點入會有 `ItemDetail`，

<img src="./assets/Demand_Analysis%20&%20POC/ItemDetail_2.png" width=400 height/>

`Item(Cards)`

1. 品項名稱
2. 產地
3. 單價價格(原價/特價?)
4. 數量 / 克數 / 斤數
5. 加入購物車

`ItemDetail(Pages/Modal)`，除 `Card` 資訊外，需另外加入其它

1. 產品編號
2. 可運送選擇說明
3. 商品圖片檢視(Gallery)
4. 產品敘述與介紹、成分規格、配送說明、注意事項等等
   <img src="./assets/Demand_Analysis%20&%20POC/ItemDetail_1.png" width=400/>

##### 🎈 所需功能

1. ❓ 圖片檢視功能(Gallery) >> 尚未選型!
2. 🔳 購物車功能，配合後台進行 >> `Global States` 管理訂單數量。
3. 🔳 產品敘述 >> `Accordion` / `Tab` 顯示方式可選擇。
</details>

---

<!--!! 產品證明、食譜分享、相關文章、常見問題  -->
<details >
  <summary>
    <span style="font-size: 18px;">🏖️ 產品證明、食譜分享、相關文章、關於我們、常見問題 #3~7</span>
  </summary>

##### 🎈 目標實現方向

此處內容主要以靜態網頁呈現 => 基本上會以 `.md` 檔撰寫、轉檔為 PDF 檔案，呈現在網站上。

##### 🎈 所需功能

1. 🔳 檔案 `.pdf` 上傳、配合後台進行。
2. 🔳 檔案下載(僅產品證明、食譜分享會有)
3. 🔳 PDF 顯示工具(尚未選型)
4. ❓ Rich Editor 的必要性? (目前先以線下編輯、後上傳為主)
</details>

---

<!--!! 購物車系統  -->
<details>
  <summary>
    <span style="font-size: 18px;">🏖️ 購物車系統(Carts) #8</span>
  </summary>

##### 🎈 目標實現方向

購物車系統，直接在商品列表內做選擇加入購物車 => 具備 tooltip 提示
購物車區分兩頁面。

- 購物車整體頁面
- offcanvas 的側邊頁面 => 需確認 shadcn/ui 有沒有辦法實際做到(下方是 bootstrap 的套件)
  <img src="./assets/Demand_Analysis%20&%20POC/offcanvas.gif" width=300 height=200/>

至少要有 `品項名稱`, `單價`, `數量`, `總額`, `新增/移除` 等基礎功能。

##### 🎈 所需功能

1. ❓ 確認套件選型, 需確認是否為此引入 `bootstrap Offcanvas`。
2. 🔳 其餘部分一般 `React` 製作 `components` 即可。

</details>

---

<!--!! 結帳系統  -->
<details>
  <summary>
    <span style="font-size: 18px;">🏖️ 結帳系統(checkout) #9</span>
  </summary>

##### 🎈 目標實現方向

需製作完整頁面，並且將內部資訊做統一整理，需要的項目包含以下，`訂購清單`, `運送地址`, `訂購人`, `訂購人資料`，另後期考量 `金流串接` ex: 綠界, linePay 等等。

- 購物車整體頁面
- offcanvas 的側邊頁面 => 需確認 shadcn/ui 有沒有辦法實際做到(下方是 bootstrap 的套件)
  <img src="./assets/Demand_Analysis%20&%20POC/checkout_Demo.jpg" width=400 height=300/>

*針對特定條件運費免運部分，須提出對策與制定。
*針對產品優惠應以優惠券形式，避免修改原本價格。

##### 🎈 所需功能

1. 🔳 結帳資料表格處理 `React-Hoor-Form`
2. 🔳 優惠券處理邏輯 (非優先)
3. 🔳 結帳部分仍需可以修改數量。
4. 🔳 結帳流程圖 => `Timeline Horizontal` => [Tailwind UI](https://flowbite.com/docs/components/timeline/)
   <img src="./assets/Demand_Analysis%20&%20POC/../Demand_Analysis%20&%20POC/Timeline_h.jpg" width=400 height=150/>

</details>
