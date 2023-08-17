# 記帳功能發想

## 目標

讓自己養成記帳習慣，該網站可在任何裝置登入記帳，並且讓人想持續記錄

### 競品分析

#### [Expensify](https://www.expensify.com/)

以開收據店家為產品發想的使用概念，便於頻繁出差、需報帳的個人使用

-   以收件匣形式給予使用者提示
    -   協助完成個人資料建立
    -   協助熟悉操作流程

#### [Money love web](https://web.moneylover.me/)

功能較為基礎的記帳網站，介面簡潔，有些功能需要找一下

-   以帳戶概念對應不同金流、可設置對應 icon 以便記憶
-   設定幣值
-   開銷分類(無客製)
    -   必要開銷（飯錢、交通、房租、水電...）
    -   對個人的投資 up and comer（個人進修、保險、維修費、家居用品、健康檢查
    -   娛樂/放鬆（健身、打扮、送禮/捐款、串流、娛樂）
    -   投資（投資、借錢（出）、貸款（入））
    -   收入（薪資、其他）
    -   其他（帳戶收入、帳戶支出）
-   開銷時間（可輸入過去日及未來日）
-   圖表分析（以月為時間單位）

以下三者皆為注重回饋的記帳 app

-   [記帳城市](https://sparkful.app/zh-TW/fortune-city)

    -   將記帳概念遊戲化，適合以玩遊戲目的為主但又想記帳的用戶
        -   實際研究會注意到他在記帳細節上比另外兩個 app 都還要細膩
    -   輸入款項時提供簡易 tag，鼓勵不填款項名稱快速輸入
        -   以 tag +輸入文字作為分類，分析後續頻率次數的統計
    -   支出回顧，以想要/需要、投資/消費對支出分類，檢討金錢流向（付費功能）
        -   功能論點所付參考一[Warren Buffett's best investing advice for beginners](https://www.businessinsider.com/warren-buffett-best-investing-advice-for-beginners-2017-11)
        -   功能論點所付參考二[美國消費者金融保護局](https://www.consumerfinance.gov/consumer-tools/money-as-you-grow/)
    -   總預算控制
        -   分類預算控制（付費功能）
    -   可匯出記帳資料(.csv)（付費功能）
    -   每月總之出及分類支出差異分析（付費功能）
        -   列出分析該月份三筆金額最大的資料
    -   以頻率分析開銷，分類依據為 tag+備註(ex:天天手搖)

-   [碎碎念記帳](https://www.naggingmoney.com/naggingmoney_web/)
    -   可自定義分類
    -   每輸入一項紀錄，app 將針對紀錄回覆
    -   語音輸入時自動判別分類
    -   可調整回覆語氣
-   [哈拉 Money](https://halamoney.tw/)
    -   與記帳城市相比，是記帳為主輔以些許遊戲元素的記帳 app
    -   每個類型是一種怪獸，輸入金額可以培育怪獸

### 著手重點

-   定位為面向記帳新手，培養記帳習慣
    -   除了輸入項目紀錄外，用掃描發票記錄？
        -   瀏覽器可以使用攝影機並使用 QRcode 資訊嗎？
-   降低上手難度，增加持續記錄的動力
    -   增加趣味性
    -   給予獎勵/回饋
    -   允許多平台登入
-   鼓勵定時回顧，檢討內容才能實際獲得記帳效益

## 預計實作內容

### 預期功能

1. 可使用 email 或第三方登入，也能選擇不登入
2. 可在手機及電腦查看(以手機為主的 RWD )
3. 記帳功能
    1. 可設定多個錢包
    2. 設定日期，可設定未來日及過去日
    3. 可設定分類
        1. 無借貸分類（這部分太複雜）
    4. 可輸入名稱，無備註
    5. 可針對總金額及個別分類設置預算
4. 圖表分析
    1. 以月為單位、柱狀圖分析收入支出（圓餅圖在手機上的字數可能太小）
    2. 總支出分析、分類分析、同分類且同備註的次數分析（需要在使用前提醒使用者）、金額極值分析
5. 回饋
    1. 以輸入當下的回饋為主
    2. 根據分類給予不同內容的輸入成功用詞
    3. 每個月固定日期提醒使用者查看圖表分析
        1. 進入該頁面當下給予鼓勵用詞

### 預期技術

-   框架： [Remix](https://remix.run/) + [TypeScript](https://www.typescriptlang.org/)
-   UI framework: [Mui](https://mui.com/core/) + [Tailwind](https://tailwindcss.com/)
-   Input validation: [React Hook Form](https://www.react-hook-form.com/) + [Zod](https://zod.dev/)
-   API: [Axios](https://github.com/axios/axios)(如果用不到 Interceptor 就不使用)
-   Cache: [TanStack Query](https://tanstack.com/query/latest)
-   State management: [Zustand](https://zustand-demo.pmnd.rs/)
-   Chart Analysis: [VICTORY]https://formidable.com/open-source/victory/ / [Recharts](https://recharts.org/en-US/)
-   Test Framework: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
