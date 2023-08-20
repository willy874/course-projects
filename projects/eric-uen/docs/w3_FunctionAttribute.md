### 第3周_運動會報名系需求功能列表及相關屬性應用說明
-
主頁
* 導覽列(navi bar)
    * 人員 (人員名冊帳密需先匯入到mysql內)
        * 登入(button)打開登入區塊
            * csrf
            * staffId(學號或員工號)
                * 字串數字，會有"0"開頭的學號。
                * input type ="text"
                * 驗證:required|min:6|max:7,如果用正則表達式，^/d{6,7}$
            * 密碼
                * input type ="password"
                * 驗證:required|min:8
            * submit
                * 驗證帳密是否符合
    * (登入後再出現)項目管理(button, router link)打開下面項目管理頁面(/item/index)
    * (登入後再出現)報名管理(button, router link)打開下面報名管理頁面(/enroll/index)
* 項目管理(form)
    * csrf
    * 項目
        * 新增(/item/create)
            * 比賽項目:item
                * input type ="text"
                * 驗證:required|min:6|max:20
            * 項目類別:itemKind
                * input type="radio", "田賽","徑賽"
            * 性別類別:itemGender
                * input type="radio", "男子組","女子組"
            * 該項目接受每班可報名人數上限:itemClassLimit
                * input type ="number"
                * 驗證:required|min:1|max:10
            * 該項目可報名的年級:itemGrade
                * select option
            * 報名截止日期:expiryDate
                * input type="date"
        * 修改(/item/edit/{id})
            * 比賽項目:item
                * input type ="text"
                * 驗證:required|min:6|max:20
            * 項目類別:itemKind
                * select type="radio", "田賽","徑賽"
            * 性別類別:itemGender
                * input type="radio", "男子組","女子組"
            * 該項目接受每班可報名人數上限:itemClassLimit
                * input type ="number"
                * 驗證:required|min:1|max:10
            * 該項目可報名的年級:itemGrade
                * select option
            * 報名截止日期:expiryDate
                * input type="date"
        * 刪除(/item/delete/{id})
* 報名管理(form)
    * csrf
    * 報名作業
        * 個人報名(/enroll/idv/index),每人僅能報名一項,進入時先檢查日期是否超過截止日或者班級是否完成複審，如已過期或已完成複審，個人的報名的新增、修改、刪除功能隱藏
            * 新增button(/enroll/idv/create),進入新增比賽項目頁面前，先檢查該id是否有報名紀錄，如有，跳到個人報名修改頁redirect '/enroll/idv/edit/{id}'
                * staffId
                    * 自login session取得
                * itemKind
                    * input type="radio"
                * itemId 依上方的田、徑賽類別選擇，出現該類,該年級,及報名者性別可報名的項目
                    * select option
            * 修改button(/enroll/idv/edit/{id})
                * staffId
                    * 自login session取得
                * itemKind
                    * input type="radio"
                * itemId 依上方的田、徑賽類別選擇，出現該類,該年級,及報名者性別可報名的項目
                    * select option
            * 取消報名(刪除)button(/enroll/idv/delete/{id})
        * 班級複審button 預設隱藏，登入者權限為班級管理者的才出現
            * 比賽項目各班已報名人員名冊 button(/enroll/class/{classId}/index)
                * 依登入者身份列出該班各項目的報名名冊
            * 比賽項目報名人數檢視 button(/enroll/class/{classId}/kind/index)
                * select option 依選擇的項目，列出比賽人員
                * 換人(edit)button: (/enroll/class/kind/edit/{id})
                * 取消報名(delete)button: (/enroll/class/kind/delete/{id})
        * 業務承辦人審核button 預設隱藏，登入者權限為業務承辦人才出現
            * 各班報名名冊 button(/enroll/class/{classId}/index)
                * select option 班級
                * 依點選下拉選單列出該班的報名名冊
                * pdf button 輸出成PDF檔
            * 比賽項目報名人員檢視 button(/enroll/item/{itemId}/index)
                * select option 比賽項目下接選單
                * 依選單選擇，依年級、依班級、依男女子組列出該項目已報名名冊
                * pdf button 輸出成PDF檔