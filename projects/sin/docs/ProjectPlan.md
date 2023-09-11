## 需求拆分
1. 頁面切分
   1. 左側 - 功能選單
   2. 中間 - 主要編輯區塊
      1. header
      2. min
   3. 右側 - 使用功能
2. 左側 - 功能選單 
   1. LeftSide.vue
      1. router-link
      2. 控制右側 顯示可使用功能
         - router-view 
3. 中間 - 主要編輯區塊
   1. MainEditorial.vue
4. 右側 - 使用功能
   1. Front.vue
   2. UploadImage.vue
   3. Background.vue
   4. QRCode.vue
   5. Print.vue
   6. Download.vue

## 可共用元件列表
- InputModel.vue
  - input＆ confirm button
    - 輸入限制的驗證
    - props - formatter
  - 確認按鈕觸發function
    -  emit('check',v-model value)

## 工作規劃
1. wireframe 大約線搞
2. 依照線搞二次嘗試拆分元件、共用元件
3. 依照畫面配置，左、中、右切版
4. 功能刻畫
   1. 可共用資料整理，建立store
   2. ts型別建立
   3. 複用功能封裝