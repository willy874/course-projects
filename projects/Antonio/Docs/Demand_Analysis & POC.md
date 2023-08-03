## 區塊需求 & POC 測試 (未完成)

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
    <span style="font-size: 23px;">🏖️ 最新消息(News)</span>
  </summary>

##### 🎈 目標實現方向

- 最新消息, 本月產品主打, 優惠商品, ~~其它~~
  此區塊應可以在後台持續編輯，建立圖片(png, jpg, webp)上傳/裁切功能，管控 Banner 尺寸大小，類似大頭貼裁切、臉書背景圖片裁切。

##### 🎈 所需功能

1. 🔳 圖片上傳功能，配合後台進行 >> `Basic JS` >> [File Upload with Progress Bar](https://www.youtube.com/watch?v=_xDCVt1F6O0&t=1140s)
2. 🔳 圖片裁切功能，配合後台進行 >> `React cropper` >> [CodeSandBox_Demo](https://codesandbox.io/s/wonderful-pine-i7fs3?file=/src/Demo.tsx)
3. 🔳 歷史紀錄(筆數限制)，配合後台進行 >> `useState could store the Data` >> migrate to Prisma.
4. 🔴 ~~圖片畫廊功能~~
</details>

<!--!! 商品列表 -->
<details>
  <summary>
    <span style="font-size: 23px;">🏖️ 商品列表(ItemList)</span>
  </summary>

##### 🎈 目標實現方向

主體以 `Cards` 呈現，圖片點入會有 `ItemDetail`，

<img src="./assets/Demand_Analysis%20&%20POC/ItemDetail_2.png" width=400 height/>

- `Item(Cards)`

  1. 品項名稱
  2. 產地
  3. 單價價格(原價/特價?)
  4. 數量 / 克數 / 斤數
  5. 加入購物車

- `ItemDetail(Pages/Modal)`，除 `Card` 資訊外，需另外加入其它

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

<!--!! 產品證明、食譜分享、相關文章、常見問題  -->
<details >
  <summary>
    <span style="font-size: 23px;">🏖️ 產品證明、食譜分享、相關文章、常見問題</span>
  </summary>

##### 🎈 目標實現方向

此處內容主要以靜態網頁呈現=> 以`.md`檔撰寫、轉檔為 PDF 檔案，呈現在網站上。

##### 🎈 所需功能

1. ❓ PDF 顯示工具(尚未選型)
2. 🔳 檔案 `.pdf` 上傳、配合後台進行
3. 🔳 檔案下載
</details>

<!--!! 購物車系統  -->
<details >
  <summary>
    <span style="font-size: 23px;">🏖️ 購物車系統(Carts)</span>
  </summary>

##### 🎈 目標實現方向

此處內容主要以靜態網頁呈現=> 以`.md`檔撰寫、轉檔為 PDF 檔案，呈現在網站上。

##### 🎈 所需功能

1. ❓ PDF 顯示工具(尚未選型)
2. 🔳 檔案 `.pdf` 上傳、配合後台進行
3. 🔳 檔案下載
</details>

<!-- ### 後台

<details>
  <summary>
    <span style="font-size: 23px;">🏖️ 訂單管理</span>
  </summary>

##### 🎈 目標實現方向

  <img src="./assets/Demand_Analysis%20&%20POC/ItemDetail_1.png" width=400/>

##### 🎈 所需功能

1. ❓ 圖片檢視功能(Gallery) >> 尚未選型!
2. 🔳 購物車功能 >> `Global States` 管理訂單數量。
3. 🔳 產品敘述 >> `Accordion` / `Tab` 顯示方式可選擇。
</details>  -->
