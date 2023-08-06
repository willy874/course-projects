## 資料格式初步規劃

- 以 `全稱`, `底線` 為主要敘述 `(prod -> product, aaBb -> aa_bb)`.
- 許多部份事先限制, 提供後續擴充彈性。
- `ts-type` 型別部分，由 `chatGPT` 協助生成即可。

### :rocket: 商品資訊

- 產品編號系統分類規劃
- 產品照片區分: `主照片(main)`、`料理照(dish)`、`其他樣式(other)`

```json
{
  /** 產品編號 */ "product_id": "PD001-001",
  /** 產品名稱 */ "product_name": "超級大龍蝦 (Lobster)",
  /** 產品標籤 */ "product_tags": ["海鮮", "美食"],
  /** 產品照片 */ "product_image_url": [],
  /** 產品產地 */ "product_origin": "台南",
  /** 生產廠商 */ "product_manufacturer": "龍蝦漁場公司",
  /** 庫存量 */ "product_inventory": 50,
  /** 產品單價 */ "product_price": {
    /** 單價(台斤) */ "per_catty": 600,
    /** 單價(100g) */ "per_100g": 100
  },
  /** 產品敘述 */ "product_description": "產品敘述",
  /** 其他資訊 */ "product_other_info": ["Omega-3 脂肪酸，對心血管健康有益。"],
  /** 上傳時間 */ "product_upload_time": "2022-12-10",
  /** 列表可見 */ "is_display_list": false,
  /** 商品評論 */ "product_reviews": [
    {
      /** 用戶名稱 */ "product_username": "用戶A",
      /** 評分 */ "product_rating": 5,
      /** 評論內容 */ "product_comment": "真的超好吃！推薦大家都來試試。"
    },
    {
      /** 用戶名稱 */ "product_username": "用戶B",
      /** 評分 */ "product_rating": 4,
      /** 評論內容 */ "product_comment": "味道不錯，但價格稍微貴了一些。"
    }
  ]
}
```

---

### :rocket:客戶資訊

<!-- - 可以偵測 IP 去匯入資料 -->

```json
{
  /** 客戶編號 */ "customer_id": 1,
  /** 客戶姓名 */ "customer_name": "客戶A",
  /** 電話號碼 */ "customer_phone_number": "0912345678",
  /** 客戶信箱 */ "customer_email": "asdasd@gmail.com",
  /** 客戶地址 */ "customer_address": "新北市XX區XX路X號X樓",
  /** 權限等級 */ "customer_permissions": "normal",
  /** 違規次數 */ "customer_violations": 0,
  /** 註冊時間 */ "customer_registration_date": "2023-08-06",
  /** 最後登入時間 */ "customer_last_login": "2023-08-05 18:30:00",
  /** 購買次數 */ "customer_purchase_count": 10,
  /** 累計消費金額 */ "customer_total_spent": 1500,
  /** 訂閱通知 */ "customer_subscribed": true,
  /** 生日日期 */ "customer_birthday": "1990-05-15",
  /** 支付方式 */ "customer_payment_methods": [
    {
      "method": "credit_card",
      "card_number": "1234-5678-9012-3456",
      "expiration_date": "05/25"
    },
    {
      "method": "bank_transfer",
      "account": "700-01234567890",
      "email": "customer@example.com"
    }
  ],
  /** 優惠券 */ "customer_coupons": [
    {
      "coupon_code": "SUMMER20",
      "expiration_date": "2023-08-31"
    }
  ],
  /** 退換貨記錄 */ "customer_return_exchange_records": [
    {
      "order_id": "20230806-001",
      "return_date": "2023-08-08",
      "return_reason": "商品損壞",
      "status": "已處理"
    }
  ],
  /** 收藏商品 */ "customer_favorite_products": [
    {
      "product_id": 3,
      "product_name": "特級牛排",
      "added_date": "2023-07-20"
    }
  ],
  /** 購買歷史 */ "customer_purchase_history": [
    {
      "order_id": "20230806-001",
      "purchase_date": "2023-08-06",
      "total_amount": 200,
      "products": [
        {
          "product_id": 1,
          "product_name": "超級大龍蝦",
          "quantity": 2,
          "subtotal": 400
        }
      ]
    }
  ]
}
```

---

### :rocket:訂單資訊

```json
{
  /** 訂單編號 */ "order_id": "O-20230806-001",
  /** 訂購人姓名 */ "customer_name": "客戶A",
  /** 訂購人電話號碼 */ "customer_phone_number": "0912345678",
  /** 訂購日期 */ "order_date": "2023-08-06",
  /** 訂單總金額 */ "total_amount": 600,
  /** 收件人姓名 */ "recipient_name": "收件人B",
  /** 收件人地址 */ "shipping_address": "新北市YY區YY路Y號Y樓",
  /** 付款方式 */ "payment_method": "credit_card",
  /** 訂單狀態 */ "order_status": true, // 已付款, 未付款
  /** 訂單內容 */ "order_items": [
    {
      "product_id": 1,
      "product_name": "超級大龍蝦",
      "quantity": 2,
      "subtotal": 400
    },
    {
      "product_id": 3,
      "product_name": "特級牛排",
      "quantity": 1,
      "subtotal": 200
    }
  ],
  /** 物流資訊 */ "shipping_info": {
    "carrier": "宅急便",
    "tracking_number": "1234567890",
    "estimated_delivery_date": "2023-08-08"
  },
  /** 備註 */ "order_notes": "請儘快配送，謝謝！"
}
```

---

### :rocket:進貨管理

- 進貨管理區分: `bank_transfer`, `credit_card`, `cash`.

```json
{
  /** 進貨單編號 */ "purchase_order_id": "PO-20230806-001",
  /** 供應商名稱 */ "supplier_name": "供應商A",
  /** 進貨日期 */ "purchase_date": "2023-08-06",
  /** 進貨總金額 */ "total_amount": 1450,
  /** 進貨內容 */ "purchase_items": [
    {
      "product_id": 1,
      "product_name": "超級大龍蝦",
      "quantity": 5,
      "unit_price": 200,
      "subtotal": 1000
    },
    {
      "product_id": 2,
      "product_name": "特級牛排",
      "quantity": 3,
      "unit_price": 150,
      "subtotal": 450
    }
  ],
  /** 付款方式 */ "payment_method": "bank_transfer",
  /** 付款狀態 */ "payment_status": true,
  /** 進貨單狀態 */ "purchase_order_status": true,
  /** 備註 */ "purchase_order_notes": "備註A"
}
```

---

`後續更新項目`

- 進貨商清單與紀錄
- 員工資訊
- 會員系統
