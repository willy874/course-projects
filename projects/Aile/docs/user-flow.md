# User Flow
- 想法:
    - 婚禮當天需要用到的資訊
    - 現場工作人員可直接手機 / 平板操作
	- 禮金簿/簽到表可透過外接螢幕與賓客確認、操作
	- 可選擇主題顏色(?)
	- 有些功能不確定自己的技術現在能不能完成 XD


1. 首頁
	- 規劃功能:
		- 功能表
		- 可選擇主題顏色(提供些許配色可挑選)

2. 來賓資訊管理
    - 規劃功能:
		- 新增、查詢
		- 多筆修改(固定欄位 Ex.桌次)
        - 設定欄位(可自行勾選要顯示的欄位)
        - 以這個表作為資訊主檔，跟其他表單做連結
		- 檢視詳細頁
		- 報表(彙總資訊:可勾選欄位計算，例如:已出席人數、領取喜餅人數、尚未出席人數...)
		- 操作要簡單快速、減少誤觸情況
		- 桌次管理(最大桌數、單桌人數)
	- 畫面及欄位:
		- 新增頁 - 欄位
			- 個人資訊: 賓客序號、賓客姓名、連絡電話、與新人關係、是否出席
			- 桌次資訊: 出席人數、素食人數、兒童椅數量、安排桌次
			- 喜餅及禮金簿: 是否送餅、是否領取、禮金金額
			- 其他: 備註
			- 儲存
		- 新增頁 - 欄位說明
			- 賓客序號: 系統自動帶入(方便與現場紅包袋上的序號對應用)
			- input: 賓客姓名、連絡電話、禮金金額(format)、備註
			- radio button: 與新人關係
			- checkbox: 是否回覆出席、是否送餅、是否領取
			- select: 出席人數、素食人數、兒童椅數量、安排桌次
		- 總表頁 - 欄位
			- 賓客序號(checkbox)、賓客姓名、與新人關係、出席、桌次、是否送餅、已領取(餅)
			- 新增: 進入新增頁
			- 檢視: 點選後可進入檢視頁(修改頁)
			- 設定欄位: 點選後可選擇想要在總表頁顯示的欄位
			- 桌次管理: 設定最大桌數、單桌人數、如果有勾選多筆資料可以一併更改桌次
			- 報表: 點選後可選擇要計算的欄位資訊
		- 總表頁 - 欄位說明
			- readonly:賓客姓名、與新人關係、出席
			- checkbox: 賓客序號、是否送餅、已領取(餅)
			- button: 新增、檢視、設定欄位、桌次管理、報表
		- 檢視頁(修改頁) - 欄位
			- 欄位同新增頁，但「賓客序號」不得更改
			- 儲存
		- 檢視頁 - 欄位說明
			- 同新增頁
3. 桌次表(帶位表)
    - 規劃功能:
		- 查詢(輸入來賓姓名模糊查詢)
		- 根據賓客總表所輸入桌次資訊帶入資料
		- 同一桌的賓客顯示相同底色，方便查看
	- 欄位:
		- 桌號、來賓姓名、兒童椅數量、總人數、已入座
4. 禮金簿
	- 規劃功能:
		- 自動加總
		- 以賓客總表帶入資訊(來賓序號、來賓姓名、與新人關係)
		- 方便輸入姓名用 datalist 查
	- 欄位:
		- 來賓序號、來賓姓名、禮金金額、與新人關係
		- 報表(可分別計算男/女方禮金金額、總額)
	- 欄位說明:
		- datalist: 來賓姓名
		- readonly: 來賓序號(輸入「來賓姓名」後自動填入)
		- select: 與新人關係(輸入「來賓姓名」後自動填入)
		- button: 報表
5. 流程表
	- 規劃功能:
		- 新增流程
		- 修改流程
		- 查看流程表
	- 畫面及欄位:
		- 新增頁 - 欄位
			- 起始時間、結束時間、總時間、行程、描述、備註
			- 儲存(點選後自動計算總時間)
		- 新增頁 - 欄位說明
			- input type="time":起始期間、結束時間
			- input: 行程、描述、備註
			- readonly: 總時間
		- 流程表 - 欄位
			- 起始時間、結束時間、總時間、行程、描述、備註
			- 修改
		- 流程表 - 欄位說明
			- button: 修改
		- 修改頁 - 欄位
			- 同新增頁
			- 儲存
6. 工作人員連絡簿
	- 規劃功能:
		- 新增工作人員
		- 修改工作人員
		- 查看聯絡簿
	- 畫面及欄位:
		- 新增頁 - 欄位
			- 姓名、聯絡電話、職務、與新人關係
			- 儲存
		- 新增頁 - 欄位說明
			- input: 姓名、連絡電話
			- select: 職務、與新人關係
		- 聯絡簿 - 欄位
			- 姓名、連絡電話、職務、與新人關係
			- 修改
		- 修改頁 - 欄位
			- 同新增頁