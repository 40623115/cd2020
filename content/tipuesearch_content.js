var tipuesearch = {"pages": [{'title': 'About', 'text': '產品協同設計 第4組 \n 40623115 吳隆廷 \n 課程進度 \n', 'tags': '', 'url': 'About.html'}, {'title': '課程進度', 'text': 'Week1-Week5 \n Week6-Week9 \n Week10-Week14 \n Week15-Week18 \n', 'tags': '', 'url': '課程進度.html'}, {'title': 'Week1-Week5', 'text': 'week2 \n 建立個人倉儲 \n 可攜系統網址 \n 至github網站上 建立新專案 將名稱命名為CD2020 \n 下載完可攜系統，開啟start(會跑出CMD及Sc1) \n 使用CMD(程式視窗) 將網站用git clone指令抓下來後，將老師的 示範倉儲 用git submodule 指令抓下來放到自己的倉儲cd2020，並命名資料夾為cmsimde \n 前往cmsumde-->up_dir 將資料夾裡的資料全部複製到cd2020 \n 完成後使用CMD再次前往cmsumde資料夾，利用python wsgi.py打開近端 \n 按照提示中的網址前往近端，更新Cmsimde網站。 \n \n Week3 \n 分組工作分配 \n \n \n \n \n \n 1.請描述如何針對該課程進行有效的隨機分組，或者隨機進行點名？ \n 2.描述如何為Windows 10 64位系統準備一個可移植的Python編程系統，以允許在Github上維護CMSiMDE網站，Pelican博客和Reveal.js演示文稿？ \n 3.您需要從 http://www.coppeliarobotics.com/helpFiles/index.html了解什麼來實現四輪機器人？ \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 分工表： \n \n \n \n \n \n \n \n 40623115 亂數分組程式 40623251 可攜系統 40723204 可攜系統 42723210 四輪車 40723212 四輪車 40723225 四輪車 40723232 亂數分組程式 40723234 可攜系統 40723238 四輪車 40723245 亂數分組程式 40723250 亂數分組程式 \n \n \n Week4 \n 作業一 \n 請描述如何針對該課程進行有效的隨機分組，或者隨機進行點名？ \n \n   隨機分組 \n \n (1)random.shuffle的語法 \n 使用 shuffle()\xa0 將序列中的所有數字随機排列。 \n import random\n \nlist = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; # 分組名單\n\nrandom.shuffle(list) #打亂名單\n\nprint("打亂後的名單=",list) #顯示打亂後的名單 \n \n (2)for迴圈 \n import random\n \nlist = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; # 分組名單\n\nrandom.shuffle(list) #打亂名單\n\nprint("打亂後的名單=",list) #顯示打亂後的名單\n\nX = 5 #分為幾組\n\nY=int(len(list)/X) #計算多少人為一組\n\nlist_2 = [] \n\nfor i in range(0,len(list),Y): #執行for迴圈 i ，將名單循環列出 \n    \n    list_2.append(list[i:i+Y]) #依序排列分組人數\n\n    \nprint("分組名單=",list_2) #顯示結果\n\n\n \n \n \n   隨機進行點名 \n \n random.sample(list, X) \n import random\n \nlist = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; # 名單\n\nX = 5 #抽點人數\n\nprint(random.sample(list,X)) #在名單中，隨機抽出X人數\n\n\n\n \n PDF： 作業一.pdf \n Week5 \n 清明節快樂！！！ \n', 'tags': '', 'url': 'Week1-Week5.html'}, {'title': 'Week6-Week9', 'text': 'Week6 \n 直播網址： https://www.youtube.com/watch?v=a69tNWKmC64&feature=youtu.be \n 工作分配： \n topic 1：40623115、40623251、40723204、42723210、40723212、40723225 \n topic 0；40723232、40723234、40723238、40723245、40723250 \n \n Week7 \n topic 0 PDF： \n https://drive.google.com/file/d/13THamnfayiRT4Wa9KzmjXQSP4ZW2jIej/view \n （ 請各學員登入 gm 帳號，從\xa0 http://mde.tw/cd2020/content/ Topics.html \xa0 下載 pdf 課程教材。） \n topic 1 PDF \n TOPIC 0\xa0 翻譯 \n Week8 \n 本周採用線上教學課程 \n 直播網址： \n https://www.youtube.com/watch?v=FaOQiIGeK0U \xa0第一支影片 \n https://youtu.be/x1qccPR0fug 第二支影片 \n 第三堂課各組抽4位同學直播 \n 直播名單： \n group 1:40723246 group 1:40723223 group 1:40723201 group 1:40732319 \n group 2:40623117 group 2:40723236 group 2:40723240 group 2:40723249 \n group 3:40723209 group 3:40723203 group 3:40723247 group 3:40623114 \n group 4:40723212 group 4:40723232 group 4:40723204 group 4:40623115 \n 本機直播網址： \n https://youtu.be/o3xLqFTSaZU \n 課堂問卷： \n http://mde.tw/cd2020pj1/content/Streaming.html \n \n Week9 \n 期中考周 \n 老師與組長在GOOGLE MEET中開會， 同時開放 live streaming，解決課程中遇到的問題。 \n 透過GOOGLE行事曆建立 Google Handout Meet 會議，錄製至少 10 分鐘的個人期中簡報影片，說明個人於 W1-W8 所完成的相關內容。 \n 個人簡報錄製後，會儲存至個人 Google Drive 中，將期中簡報 mp4 影片以共享設置為所有登入 @gm 帳號的用戶都可以觀看。 \n \n 完成後請登入 @gm 個人帳號，至 \xa0 https://forms.gle/T1Vs4sv9EdetxoWF7 \xa0 填寫表單並完成期中個人自評成績登錄。 \n', 'tags': '', 'url': 'Week6-Week9.html'}, {'title': 'Week10-Week14', 'text': 'topic 2 PDF\xa0 MSModelingAndTFApproaches.pdf . \n 翻譯PDF \n 分組名單 \n \n \n \n 翻譯MSModelingAndTFApproaches: \n \n \n \n 40723232\xa0 \n 1-20 \n \n \n 40723234\xa0 \n 21-50 \n \n \n 40723204\xa0 \n 51-80 \n \n \n 40723225\xa0 \n 81-110 \n \n \n 40623115\xa0 \n 111-140 \n \n \n 40723245\xa0 \n 171-207 \n \n \n 翻譯 MSModelingAndTFApproaches: \n 40723238、40723210 \n \n \n 翻譯MechEducFutureNeed: \n 40723250、40723210 \n \n \n 翻譯MechaFutureAndChallenges: \n 40723212 \n \n \n Mechatronic project \n 40723210 \n \n \n \n 直播影片： https://www.youtube.com/watch?v=GmKxlNPx-gs&feature=youtu.be \n \n ssh to\xa0 github \n \n \n 將SSH密鑰複製到剪貼板。 \n 如果您的SSH密鑰文件的名稱與示例代碼的名稱不同，請修改文件名以匹配當前設置。複製密鑰時，請勿添加任何換行符或空格。 \n $ clip < ~/.ssh/id_rsa.pub \n# Copies the contents of the id_rsa.pub file to your clipboard \n \n 提示： 如果 clip 不起作用，則可以找到隱藏的 .ssh 文件夾，在您喜歡的文本編輯器中打開文件，然後將其複製到剪貼板。 \n \n \n \n 在任何頁面的右上角，點擊您的個人資料照片，然後點擊 設置 。 \n \n \n \n \n 在用戶設置邊欄中，點擊 SSH和GPG密鑰 。 \n \n \n \n \n 單擊“ \xa0 新建SSH密鑰” 或“ \xa0 添加SSH密鑰” 。 \n \n \n \n \n 在“標題”字段中，為新密鑰添加一個描述性標籤。例如，如果您使用的是個人Mac，則可以將此鍵稱為“個人MacBook Air”。 \n \n \n 將您的密鑰粘貼到“密鑰”字段中。 \n \n \n \n \n 單擊 添加SSH密鑰 。 \n \n \n \n \n 如果出現提示，請確認您的GitHub Enterprise密碼。 \n \n \n \n \n \n \n \n Vrep虛擬主機連線 \n 下載 Ubuntu 和 VirtualBox \n 開啟VirtualBox>點擊檔案>匯入應用程式>點選剛剛下載的Ubuntu檔案 \n 回到VirtualBox>點擊檔案>喜好設定>網路>新增Net網路>確定 \n 回到VirtualBox>點擊已匯入的Ubuntu檔>設定>網路>附加到改為僅限主機介面卡>確定 \n 回到VirtualBox> 點擊已匯入的Ubuntu檔>啟動 \n \n 輸入密碼kmol2020>案左上角Activities>Show App>LXTerminal \n 輸入cd coppeliasim4_rev4/CoppeliaSim_Edu_V4_0_0_Ubuntu18_04 \n \n 輸入 ./coppeliaSim.sh 即可開啟Vrep完成連線 \n \n Remote API 連線 \n 下載 控制程式 和 Xming \n 開啟VirtualBox>點擊Ubuntu>設定>網路>附加到改為NAT>進階>連接埠傳送 \n 新增三個連接埠>設定IP>確定 \n 回到 VirtualBox>點擊Ubuntu>啟動 \n 輸入密碼kmol2020>點擊左上角 Activities>Show App>Settings \n Power>Blank screen>Never \n Automatic Suspend>將兩個選項都關閉，關閉螢幕與電腦自動休眠 \n 方法一 \n 開啟Putty>Host name輸入localhost，Saved Sessions輸入localhost按下Save \n SSH>X11>X display location>localhost:0.0>將Enable X11 forwarding打勾>按下OPEN \n 輸入帳號kmol2020>密碼kmol2020>輸入 \n 打開XLaunch>都按下一步 \n 回到Putty>輸入Xterm& \n 輸入cd coppeliasim4_rev4/CoppeliaSim_Edu_V4_0_0_Ubuntu18_04 \n 輸入 ./coppeliaSim.sh 開啟Vrep>使用SciET開啟控制程式car_model.py \n 回到Vrep>File>open recent scent>sdc.ttt開啟四輪車模擬圖 \n 點擊右上角開始按鈕 \n 開啟car_model.py中案F5(tool>GO) \n 方法二 \n 輸入密碼kmol2020>案左上角Activities>Show App>LXTerminal \n 輸入cd coppeliasim4_rev4/CoppeliaSim_Edu_V4_0_0_Ubuntu18_04 \n 輸入 ./coppeliaSim.sh 開啟Vrep> open recent scent>sdc.ttt開啟四輪車模擬圖 \n 點擊右上角開始按鈕 \n 開啟car_model.py中案F5(tool>GO) \n IPV4 Ubuntu 對外連線 \n 新增整體系統阜號，主機網路為NAT Network。 \n 按下啟動，密碼 kmol2020，開啟 LXTermmial。 \n 輸入ifconfig -> sudo apt install net-tools，密碼 kmol2020。 \n 輸入ping 127.0.0.1測試，然後進入cd2020pj1->git pull。 \n 輸入sudo vi wsgi.py編輯內容，按 i 編輯，近端的host 改為10.0.2.4。 \n 按下esc後，輸入"wq" 儲存，開啟cd2020pj1.leo，在nav中搜尋"allowExt"。 \n 新增 ttt檔，然後在tmp下sudo vi oauth_scrum.txt中輸入內容 \n 輸入python3 wsgi.py 去啟動遠端。 \n 前往網站https:/127.0.0.0.1.1.8443/alogin。 \n --------------------------------------------------------- \n FlieZilla虛擬主機共享 \n 下載 FlieZilla \n 開啟Ubuntu>檔案>喜好設定>網路>NatNatwork>編輯>連接埠轉送>設定埠號>案下確定 \n 開啟Putty> Host name輸入::1，Saved Sessions輸入::1 \n SSH>X11>X display location>localhost:0.0>將Enable X11 forwarding打勾>按下OPEN \n 輸入帳號kmol2020>密碼kmol2020>輸入 \n \n 開啟FlieZilla>檔案>站台管理員>新增站台>主機名稱為改::1>協定改為SFTP \n 主機輸入 [::1]>連接埠輸入22>按下連接>輸入密碼kmol2020完成共享 \n \n', 'tags': '', 'url': 'Week10-Week14.html'}, {'title': 'Week15-Week18', 'text': '\n \n IPV6連線個人倉儲 \n 開啟VirtualBox>啟動Ubuntu主機>把自己的網站Clone下來 \n 輸入ifconfig>複製Ipv6 \n 進入cmsimde>輸入sudo vi wsgi.py>找到host將原先的刪除，複製的Ipv6貼上去 \n 輸入wo儲存>輸入python wsgi.py啟動近端 \n 到網站上輸入 https://[2001:288:6004:17:2020:2:0:7210]:19443\xa0開啟 \n 到VirtualBox更改IP設定>按下重新整理>開始編輯 \n', 'tags': '', 'url': 'Week15-Week18.html'}, {'title': 'Topic 0 翻譯', 'text': '翻譯範圍：第一章 \n 第1章 成功的設計 \n 本章為您介紹了設計電子產品外殼的方法，並定義了“成功的設計”。 \n 我們將討論設計師在產品需求設置中的角色，其中設計師將適應整個產品開發圖，溝通的重要性以及開始設計時要考慮的初始因素。 在開始之前，我們先簡單定義一下“電子產品”的含義。 它是其中裝有電路板的產品，通常具有某些輸入/輸出設備，例如LCD。 電子產品的示例包括手機，數碼相機和超聲波牙刷。 \n 電子產品外殼是包圍並支撐電路板的物品。 外殼使設備對消費者可用。 出於多種原因，必須使用該外殼–為了保護電子設備（電路板和LCD）免受環境或物理震動（如掉落產品）的侵害。 外殼可通過按鍵或按鈕訪問設備的輸入信息，並允許從設備傳輸信息。 外殼提供了結構，因此可以支持和保護電路板邏輯。 近年來開發的一些非常有效的產品外殼的示例是Apple iPhone 7或HP Spectre便攜式計算機（均為大約2016年）。 \n 本質上，一種成功的外殼設計將是一種設計，該設計要符合產品的書面規格（規格），並且要在設置的成本和時間參數內完成設計。 現在，我們開始設計這些機箱的過程。 \n 1.1設計指南 本文旨在作為成功的設計指南，以單一參考文獻的形式提供。 電子產品外殼的機械設計。 \n 讓我們分解一下上面句子中的一些詞以進一步定義（在其子主題中定義“成功”一詞）。 設計指南本文是一個起點，是參考點。設計師將在他們的工作中使用許多指南。本文旨在提供一般幫助，並有助於增加設計師的整個過去經驗以及他們目前的組織的既定流程。 電子產品外殼（EPE =電子產品外殼） 電子產品外殼由產品的外部和內部結構元素組成。它包括用於用戶接口的任何硬件，用於連接電纜的任何連接器以及用戶將要物理連接的任何元素。 老繭的感覺和看到。許多電子機殼包含一個或多個PCBA（印刷電路板組件），必須對它們進行嚴格的常規使用保護。 外殼可能非常簡單，也可能非常複雜，具有成千上萬個單獨的零件。設計師的首要任務之一是定義他們正在設計的“系統”，這將在下一章中介紹。術語“外殼”（在本文中）將位於頻譜不太複雜的一端，以及方法 解釋可以擴展到更複雜的設計情況。 \n EPE設計師 \n 這是負責設計電子產品外殼的人員。在許多情況下，它是機械工程師，但也可以是在機械工程方面具有背景知識或具有該領域經驗的人。優秀的EPE設計師將具有以下特徵： •理解並符合產品規格的能力 •能夠添加並幫助創建產品規格 •為產品提出的問題創建創造性的解決方案 因此，EPE設計人員必須既有創造力，又要遵循項目的主要目標。 \n 1.2定義整體團隊 本部分的目的是表明工程（尤其是機械工程）不是自己設計產品； 他們當然是團隊的一部分。 整個團隊的特徵是團隊可以是： • 小或大 •位於一個位置或分佈在全球 •資源有限或可以訪問幾乎無限的資源 •是否擁有最新工具 • 出於各種原因而實現目標的動機 \n •變化的經驗 整個工程工作包括多個學科之間的設計融合。 這些學科包括： •電氣工程 •軟件和固件工程 •機械工程（包括結構和熱學） •工業工程 • 系統工程 \n 因此，已經認識到機械工程只是電子產品總體工程設計的一部分，並且許多決策是與其他學科合作制定的。 當代產品設計應權衡生產發布產品的所有因素之間的各種權衡。 確實，整個工程工作（來自第1.2節的所有學科）只是產品發布（銷售）的全部工作的一部分。 除工程上的努力外，以下小組也做出了貢獻： 定義每個組，然後定義機械設計與該組“交互”的具體方式。 所有這些都是為了強調機械設計不是“在真空中”完成的，而是作為多任務產品交付團隊的一部分。 市場營銷（包括來自銷售的投入）該組織負責產品定義，即從客戶的角度定義客戶想要什麼以及產品將是什麼。 該“產品定義”通常採用工程形式將作為產品要求接受的文檔的形式。 營銷還負責監督特定產品如何適合公司的整個產品線（或公司的部門）。 \n EPE設計人員與市場營銷部門進行交互，以定義產品將如何工作，該功能將如何向客戶展示（用戶界面）以及產品對客戶的外觀（工業設計）。 運營（製造）該組織負責單個組件的完整材料流程，以及如何製造，組裝和交付這些單個組件給客戶。 如果工程師的職責是生產產品文檔，則操作人員應該能夠獲取該文檔，並生產出符合產品規格的產品。 \n EPE設計人員通過對零件製造技術，供應商（供應商）選擇以及質量/成本/外觀之間的任何取捨做出決策來與運營相交。 測試（設計驗證）該組織負責測試原型設計和成熟設計。這可以通過機械設計組（本身）內的資源或為此特定的獨立組設置來完成 功能。 \n EPE設計器通過執行或查看測試結果來與測試功能相交。 在產品上進行的測試實際上是產品需求文檔（PRD）的一部分，並且必須證明該產品通過了該文檔中定義的測試。 例如，如果PRD聲明產品必須承受一米高的跌落，則必須定義一項測試，其中包括以下注意事項： •單個物品有多少滴（測試中） •物品的撞擊面或角落 •進行測試的環境（例如環境溫度） •統計問題（例如必須通過測試的單個項目數） •測試順序（單元將進行的各種測試中） •“生存”的定義（測試後功能或外觀的程度） 質量控制/質量保證該組織確定單個零件（或整個組件）的可接受極限是否滿足單個產品規格（圖）和已建立的總體公司標準中指定的標準。 質量控制將與戰術情況有關，而（公司）質量保證將與戰略情況有關。 \xa0大多數公司都有控制和監視產品質量的各種方法，並且肯定會涉及到客戶滿意度和服務問題。 EPE設計人員通過在其文檔中指定每個零件的可接受性限制來與該組織相交，並且可以將所有零件包括在內。 通常，可接受性限制採取以下形式： \n •圖紙公差中指定的尺寸（幾何）控件 •圖紙上註明的材料和鍍層規格 •圖紙上規定的外觀缺陷排除標準 •功能規格如圖紙所示 •確定零件文檔某些方面的“關鍵”性質。 服務該組織負責產品功能的維修，保修和退貨。 它們有助於確定設備現場問題的解決方案。 EPE設計人員通過設計合理的過程來拆卸和維修產品，從而與此組織相交。當然，設計可靠的設計將減少維修的理由。還可以提供確定產品濫用的方法。 \n 項目管理該組織負責跟踪以下項目： •時間分配–遵守約定的最後期限 • 資源分配 \n •優先級管理（針對單個項目以及相對於爭奪相同資源的項目） •符合產品規格 •實現成本目標 •項目報告情況 EPE設計人員通過報告機械零件責任的所有單獨行項目的時間和資源估算與該組織相交。 \n 首先從產品概念化，設計，原型設計和測試開始，直到後續的最終版本文檔。 隨著里程碑的實現，時間和資源的估計也會更新。 高層管理人員包括負責該項目並需要了解該項目的任何人。 項目更新將在項目期間的特定時間提供給該小組。 高層管理人員將為項目提供領導力和遠見。 EPE設計器以間接方式與高層管理人員相交。 項目狀態的報告在任何時候都是相關的，通常是通過項目經理提供的。 \n 1.3產品要求 確定成功是滿足（或超過）項目要求的問題。 這是一個簡單的聲明，但實際上在相互關聯的方面非常複雜。 如果項目達到了目標，則可以確定為成功。這些目標可以通過以下一份或多項書面文件解決。 產品要求文檔（PRD）該文檔可以使用多種名稱（因公司而異）。基本上，這是試圖指定產品基本功能的“合同”。 它可以像幾個段落一樣簡單，也可以極其複雜。 它可以包含： \n （a）產品將為客戶帶來什麼成就的描述-通常不會確切說明產品的工作方式。也就是說，關於“如何從這裡到達那裡”的細節並不明確。該描述使用的是產品“最終外觀”上的文字，而不是“內部工作方式”的細節。後續文檔（或規格）也可以指定產品的詳細信息。同樣，珠三角會在市場營銷和工程師之間達成協議， 關於產品將是什麼。 PRD的內容詳細信息可能有所不同。 在項目進行過程中，隨著元素的修訂或添加，它應該（應該）進行更新。 在每次整體產品審核時，應在以下方面進行比較： 設計如何符合PRD。 \n （b）產品如何與客戶互動的說明。其中包括： •如何向客戶顯示信息或如何從客戶向產品獲取信息。 這可以是視覺，聽覺或觸覺的。 •產品的各種接口，例如連接器，開關或按鈕。 •用於向客戶提供信息的標籤或圖標。 （c）產品各個組成部分的說明。也就是說，如果產品（正在設計的產品）需要其他設備或電纜才能在較大的系統中運行，則將需要描述“系統”的各個部分。 因此，人們將需要圍繞該產品（正在設計）的確切內容“劃界”。到底什麼是“可交付成果”？ 顧客？ \n （d）表明產品的最終美學（外觀）。顏色，紋理和工業設計通常非常詳細。 \n （e）產品將在其中運行和存儲的環境的清單。 \n 這包括溫度，衝擊，跌落，振動，濕度，出水保護，運輸條件，海拔高度和特定的腐蝕性氣氛。 \n （f）產品需要通過的任何標準的清單。其中包括安全和法規標準，例如安全性保險商實驗室（UL），電動勢電磁干擾（EMI）的聯邦通信合規性（FCC）以及數百種其他的合規性標準，這些標準已成為當今設計界的重要組成部分。其中一些標準是針對特定國家/地區的，而另一些則在全球範圍內被接受。顯然， 使用醫療，食品或兒童玩具時，必須通過自己的嚴格測試標準。 內部測試報告這些表示積極的測試結果。這些測試結果表明PRD中提出的要求已通過。 如果尚未通過測試，則將啟動行動計劃以改進產品並進行進一步的測試。 初始客戶的報告這是“ alpha”或“ beta”測試，其中客戶反饋為正面或負面。希望客戶從產品中獲得可衡量的價值。當此“實際”反饋可用時，可以對產品進行合理的改進。 “ Alpha”測試通常由模擬實際客戶的內部人員完成，而“ beta”測試通常在發貨至實際（付款）之前對現有客戶進行測試 顧客。 項目管理報告 （a）支出（預期與實際）。這包括工資，固定設備，工具等的支出。 費用監控可以導致對項目的真實“投資回收期”進行分析，並更好地預測未來費用 項目。 （b）里程碑日期的狀態（預期的與實際的）：與費用一樣，對項目實現其時間承諾的監控程度可以表明該項目的真正“投資回收期”。分析未達到里程碑的位置可以為將來的項目提供更好的預測。 \n 可以通過以下方法來衡量“成功”的持續分析（隨著產品在現場的成熟）： \n 質量保證報告包含有關客戶滿意度和保修退貨的信息：必須迅速解決產品的任何問題或問題，以保護公司在行業中的聲譽。如果需要進行修訂，則必須立即執行。 因此，如果客戶滿意度達到一定的可靠性水平，則產品設計團隊將獲得成功。 從項目的所有學科中分析“經驗教訓”：每個項目都將包含本可以做得更好的項目。應努力不斷改進。應該有一種方法可以收集產品設計過程中每個人有關需要改進哪些項目的反饋。這將提高未來項目的成功率。有關此主題的更多信息，請參見第5章。 預期銷售額與實際銷售額。銷售數字可以表明該項目的成功–從某種意義上說，市場營銷已經預測了對產品的需求，工程/運營已將產品交付給客戶，並且客戶確實（確實）對產品進行了估價。或者，在相反的情況下，銷售額可能會低於預期（預測）。 發生這種情況可能有多種原因（例如）： \n •產品並非（確切地）滿足客戶的需求（價格太高/性能功能太低）。 •產品進入市場為時已晚，也就是說，將產品投入市場花費的時間太長，客戶現在有了更好的選擇。 •產品進入市場為時過早（“早期採用者”不足）。 當產品的技術與當時（當時）客戶的價值不匹配或其他支持技術不可用時，就會發生這種情況，這將使該特定產品完全有用。 •低可靠性。 以上所有原因都應放在“競爭舞台”上。 也就是說，大多數產品在其市場中都有競爭。 客戶將根據對性能，價格和質量的需求選擇購買。新技術解決方案必須與舊解決方案競爭。 在產品發佈時很難獲得所有數據來確定產品設計工作的“成功”程度。 產品設計通常有所增加 成功的風險，如果： \n •里程碑完成日期被不合理地縮短了。 •設計中包含大量的全新組件。 •對項目的更改（添加）以難以控制的速度發生。 成功的設計簡單描述為： 1.功能規格 2.準時按計劃進度交付 3.以預計的成本交貨 當然，項目可能會超出功能，可能會提前交付，甚至成本更低。 這是值得慶祝的原因（儘管需要進行一些檢查，以了解“實際情況”與“可預測因素”為何不匹配）。 然而，在上述用於成功設計的“簡單陳述”的背後，有一些非常大的含義，而並非那麼“簡單”。 讓我對以上三個變量進行一些分解。 這三個方面在幾個層面上相互關聯。 \n 1.3.1規範功能 \n 規格有多種形式。它們可以是書面文件，會議記錄，甚至是口頭指示。 項目創建規格的方式因公司而異，實際上在公司內部也可能有所不同。 此外，您（特定的設計師）可以進入整個項目的各個階段。 因此，沒有任何一種特定的方式可以使工作描述向EPE設計者展現。 \n 儘管EPE設計人員最終不負責設置完整的產品要求（在規範中），但設計人員的輸入至關重要。 EPE設計人員將負責提供有關設計限制可以走多遠的信息。 例如，如果“產品要求”“任意”確定 如果產品的衝擊等級最大為40 g，則EPE設計人員必須就可能的衝擊等級或過去達到的衝擊等級進行一些研究（或初步測試）。 因此，最初是“提議” 40 g級別的，EPE設計者必須同意該級別或提出不同級別的論點。甚至可能會同意更高的g含量。 同樣，如果規範中的成本目標似乎過於激進，EPE設計者必須在其預算部分中做一些“功課”，以向項目規範提供合理的數據。 EPE設計師需要關注的重要項目是寫下規格說明以及項目的各個成員之間的後來的協議（正式或非正式）。例如，讓我們說一般的任務是設計可移動磁盤驅動器模塊之一。這是導致其“成功設計”的一些可能情況。 任務（示例）：可移動磁盤驅動器模塊方案1：最小輸入 （對設計師而言）–規範的起點 \n 這將意味著在進行設計時只需要口頭信息即可（如上所述）。 設計人員可能會繼續尋找會影響設計的項目，例如： 1.將驅動器卸下多少次？它僅用於維護還是更像一天一次來保護數據？ 2.模塊可以設計多大？ 3.模塊（在基本單元中）是否有現有的開口？ 4.磁盤驅動器是否有電擊問題（電擊的等級如何）？ 5.此模塊是否可以在其他基本單元中使用？ 此時必須考慮這些問題，以便就如何進行設計達成共識。 現在應該舉行正式或非正式會議（通訊）以獲取答案，即使當前答案“目前未知”。 在這一點上，重要的事情是設計師通過寫下有關設計的已知（和未知）知識來創建自己的設計“工作規範”。 現在，每次在與項目有關的人員的同意下（此時），都可以根據需要對文檔（再次創建規範）進行必要的修訂。 此時的文檔不必太長。 例如，在我們啟動的磁盤驅動器示例中，它可以盡可能簡潔： 項目：磁盤驅動器模塊 作者：（設計師） 修訂級別：1（日期） •設計要求： –磁盤驅動器模塊將在20 g的衝擊負荷下運行。 –磁盤驅動器模塊將承受100 g的衝擊負載（不工作）。 –磁盤驅動器模塊附近的周圍空氣最高溫度為30°C（運行中）。 以上僅僅是本規範的開始，但是正如已知的（指定的）更多內容，設計人員可以繼續進行。 之所以可以繼續進行設計，是因為設計者現在已經對成功有了一些想法，也就是說，設計是否通過了旨在確定設計是否通過規格的測試。 在此“方案”中，只需最少的輸入，就肯定會添加規範，並且與該項目有關的許多人都需要審閱並批准該規範。 但是，設計者至少可以繼續取得一些進展或顯示一些設計選項。 •方案2：完整規範 本規範詳細描述了機械設計的所有要求。 （該規範實際上詳細描述了設計中所有設計元素的所有要求，不僅是機械部分，而且我們將在此處集中說明機械要求。） 其中包括： \n • 產品描述 •產品財務 •產品排程 它將在其設計要求中包括以下所需的詳細信息： •模塊可直接插入背板以滿足電源和信號要求 •模塊可在非金屬表面上滑動，以方便進入/退出 （加上大量其他要求，包括環境，人體工程學，電氣接口，機構認可，所需測試等） •方案3：工作規範 該規範是（到目前為止）設計人員遵守的最常見的規範。 規範的完整性介於“完整”和“無意義”（開頭）規範之間（場景1和2）。 對於工作規範，項目經理通常對設計約束有一定的了解，但尚未全面審查所有方面。 現在，該規範處於“變更控制”之下，也就是說，在項目的開始階段就經常對其進行更新，並且任何變更或增補都由項目人員負責並負責簽名。隨著項目的成熟，對主要更改進行嚴格的審查，因為這些更改會極大地影響項目的完成日期和里程碑。 \n 1.3.2準時按計劃進度交付 \n 在項目期間準備各種時間表。每個（由項目團隊批准的）進度表都是當前項目進度表的“快照”。 重要的第一個時間表是用於證明項目合理性的時間表。 該進度表將被用作項目的“淨現值”（NPV）。該NPV項目進度表將包括以下方面的最佳估計： •完成項目所需的人力資源（在給定日期之前） •完成項目所需的資金（在給定日期之前） •產品的預期銷售以及以什麼價格出售（如果在給定日期之前銷售產品） •產品的預期銷售成本（如果在給定日期之前銷售產品） 因此，如果該項目在其預期日期（即進度表當前指出的日期）之前完成，則該項目具有預期的“價值”。 但是，在項目進行過程中，各種注意事項可能會發生變化。他們可以： •出現技術問題，改變了原始設計的實施。 •從事項目變更的人員（特定成員或 球隊）。 •修改項目範圍（增加或減少）。 \n •隨著項目的進行，修訂各種項目組成部分的成本。 隨著每個（以上）考慮因素的變化，項目團隊將開會確定其對整個項目進度的影響，並查看其如何影響項目的淨現值。 決定以修訂後的NPV繼續該項目或中止該項目。通常，隨著項目時間的延長，與該擴展相關的費用會更多，並且淨現值會降低。 回到將“成功”確定為“按時交付給項目進度表”之後，每個項目都可以通過剖析任何延長時間進度表的原因來分析它們是否確實按“按時交付給項目進度表”交付了該項目。 。 如果擴展被認為是“合理的”和“合理的”，則該項目在這方面可以被認為是成功的。 \n 1.3.3按預期成本交貨 \n 正如時間表可以更改（在上述1.3.2節中）一樣，產品的成本或設計和交付該產品所需的成本也可以更改。 成本可能會因以下原因而發生變化： •修改了完成項目所需的人力資源。 •完成項目所需的資本資源被修改。 •修訂了產品的預期銷售成本。 因此，正如進度表更改並確定更改是否“合理”和“合理”一樣，項目成本也可能以類似方式更改。如果確定項目成本的更改是“合理且合理的”，則從成本角度來看，該項目可以被認為是成功的。 \n 當然，以上三個因素（規格，時間和成本）在項目進行期間和之後都需要進行分析。 第13章（持續改進）探討了確定項目是否可以視為“成功”的其他方面。 有關產品成本的更多信息，請參見第1.7節“工程經濟”。 \n 1.4草繪與細節 \n EPE設計人員必須知道何時在以下兩種模式之間切換： •素描或頭腦風暴：這是一個非常快速的構思階段。通常是用鉛筆完成的（不要使用橡皮，這會減慢思考的速度）。 沒有詳細說明-這些似乎完全適合這些草圖。規模並不是很重要；稍後再說。 獲得了其他人的反饋。 速度是這裡的重點。設計師在紙上獲得了主要選擇，因此可以確定幾種選擇的優缺點。 定向的其他選擇是什麼？起來嗎下？側身？ •詳圖：即提供“一定數量”的詳圖。所需的細節量取決於情況的嚴重性或獨特性。 在草圖（階段）中，一切正常，您已經“遮蓋了”可能絆腳石的項目。您已完成此操作以加快整個設計過程，但是現在在詳細信息模式下，需要進行更嚴格的分析。 在“詳細模式”下，您可以（準確地）計算出設計中的一些關鍵部分，而設計人員將這些部分視為“交易破壞者”。 細節通常需要CAD設計才能提供真實的幾何圖形並根據情況進行縮放。同樣，設計審查可能至關重要，可以迅速沿著同意的設計道路繼續前進。 \n 我想繼續討論基本佈局，並假設我們正在研究一種全新的設計。許多概念將適用於延續或修改設計。另外，我想繼續進行設計討論，就好像我們仍處於“草圖階段”一樣。 \n 1.5設計評論 \n 除了在“草圖”和“詳細”模式之間來回移動（如上）外，設計師還需要對何時讓設計團隊中的其他人審閱或評論他們的設計（無論處於何種階段的設計）有紮實的感覺。在）。 這些設計審查中的一些是非常正式的，而其他設計審查可能是非常非正式的。 正式設計評審通常是按照項目進度計劃中的計劃里程碑進行的。 他們包括設計團隊的特定成員，並由這些成員明確簽署。 \n 非正式的設計評審是偶爾和/或自發進行的。 就像設計師去下一個辦公室並要求同事“看看”或在設計師認為足夠接近設計問題或已有經驗的少數人中召開簡短會議一樣簡單具有類似的設計。 關於設計評論的一些一般性評論： 1.參加會議，並註意參加會議的人。 2.（至少，粗略地）記錄所提出的所有（相關）問題。 3.可能邀請不熟悉基本設計的人參加設計審查。 他們可以是公司內其他部門或部門的人員。有時，當他們從不同的角度查看問題時，此人可以在問題上添加不同的“觀點”。 4.簡要回顧設計的主要目標。 5.設計者已經考慮了提出的一些想法；很好，請按照您的原理快速進行。 \n 6.有些想法（最初）似乎沒有價值或不“切合實際”。 只需注意它們並繼續前進即可；以後可能會看到該值。 7.您將從設計評審中獲得價值–如果您“開放”，它總是會發生的。感謝所有相關人員，因為他們為您提供了他們的見識和經驗。 8.將您在會議上的筆記發布給與會人員和整個項目團隊。 這將記錄您和其他人採取的進一步行動，以使設計取得進展。 要求您的設計審查團隊提供進一步的意見。 \n 1.6溝通 \n 溝通是設計成功的必要條件。該句話本身是正確的，但值得進行更充分的討論。 \n 1.6.1溝通目的 交流的目的是傳達有關設計的信息。 之所以需要這樣做，是因為信息可以提供問題的答案，記錄當前存在的設計以及記錄設計的演變。 交流可以書面，電影或口頭形式進行。書面文件的形式為： •規格 •圖紙 •項目會議記錄/時間表 •筆記本中的筆記 •特定於項目或程序的電子郵件（任何數字通信） 電影文檔是項目過程，測試和事件的攝像機記錄。 口頭交流是使項目進入完成狀態的任何語言。所有重要的口頭交流都需要以書面形式進行，以便項目的所有成員都可以審查這些交流。 \n 1.6.2溝通的價值 良好的溝通將使項目更加成功。良好的溝通具有以下屬性： •準確–信息真實，並有測試/文檔支持。 •簡潔–信息直截了當，沒有過多的措辭。 \n •分佈式–分發給所有需要信息的人員。 •快速-信息迅速傳播。 •提供解決方案–為問題提出解決方案，可以加快解決過程。 \n 1.6.3通信鏈中的鏈接 交流的目標之一是將信息提供給需要信息的人。從第1.2節中可以看出，項目團隊可以包含許多學科。 電子郵件分發和文檔控制分發很容易創建。 EPE設計師應該在項目團隊的所有相關人員之間做出決定，這些人對於做出需要做出的決定至關重要，並且僅出於身份目的複制這些人。 \n 1.7工程經濟 \n 不討論工程經濟學的基本原理，就不可能完成關於成功設計的章節。在幾乎所有的工作中，“付出什麼代價”都是最重要的考慮因素。 在許多產品設計中，它將成為產品成功或失敗的主要原因之一。 第4章將討論成本與時間與規格之間的取捨，但現在，讓我們開始討論，指出EPE設計人員必須能夠提供成本信息和一些收支平衡分析。 在參考文獻中[1]指出，“如果一個工程項目要成功滿足人類的需求，則其設計和運行必須保證物理和經濟的可行性。” \n 由於成本是如此重要，因此設計師需要： 1.注意設計的成本目標（對於單個零件還是整個組件）。 2.注意所設計零件的材料和工藝選擇。 EPE設計者有責任提出各種選擇，以通過（也許）在功能上進行折衷來達到（或降低）成本目標。 設計人員在任何情況下都不應在任何安全考慮上妥協。 必須將所有選項清楚地呈現給管理層，以便可以全面確定所有折衷方案。 這是EPE設計師為產品整體設計帶來的最重要的創造力元素之一。 \n 3.為適合產品整個生命週期的材料和過程提出解決方案。與成熟生產相比，某些解決方案可能更適合早期生產（上市時間非常關鍵）。 4.根據訂購的適當數量，將成本信息提供給項目團隊，以使這一重要指標始終眾所周知。 \n 讓我們來看一個例子。 如第一章所示。 在圖4中，提到了是否“工具化”零件的選擇。 可以通過以下選擇來分析此類問題： （每種情況下每月需要200個零件） •選擇A：供應商A的非工具零件成本為5.00美元 •選擇B：設計工具零件，並讓供應商T製作工具。 成本估算：加工零件成本為1.00美元，加工成本為4000.00美元。在什麼時候加工成本和新零件成本將等於舊零件成本？ 這就是所謂的“收支平衡點”。 答：這很容易計算或繪製（見圖1.1）： \n “ M”顯示為5個月。 因此，選擇B（工具版本）與選擇A（非工具版本）“收支平衡”需要5個月的時間。 5個月的總成本為：選擇A $ =×5 / /零件200個月m×= 5月$ 5000 \n \n ChoiceB = ($1 /part x 200 parts /month x 5 month)+$4000 = $5000 \n 5個月後，工具零件Choice B的總成本將減少。 顯然，如果產品生產了5個月或更長時間，我們將選擇對零件進行加工。 但是，上述“經濟現實”實際上有一些複雜之處。 選項B的費用（上述）不包括： 1.設計和記錄工具零件的成本。 2.競標工具並確定供應商T是最佳工具供應商的成本。 3.對工具零件進行原型製作的成本（在批准工具零件的圖紙之前）。 4.批准工具零件的第一篇文章的費用（我們在此假設第一篇文章已獲得批准–希望不需要任何工具修改，因為這將是額外的費用）。 5.測試工具零件的成本（作為未工具零件的替代品）。 6.“用完”未使用工具的零件並切換到使用工具的零件的成本。 （應將此零件所在的裝配體的日期編碼為註釋） 轉換？） 7.模具費用。也就是說，4000美元的工具成本實際上價值超過4000美元。讓我解釋。 如果不將4000美元提供給工具製造商，則對公司而言將是賺錢的興趣。 “簡單利息”計算將獲得4000美元的利息（按2％/年計）：4000美元×0.02 / 12個月×5個月（收支平衡時間）= 33美元。但是，這裡的問題可能是： 公司用4000美元能做些什麼，而不是僅僅創造33美元的單利呢？ 也許他們可以將其投資到新產品的開發中，該產品可以產生更多的收入，或者將其用於另一個可以帶來更多收入的項目的其他工具上。是的，這並不簡單。 在上面的七個項目中，設計和記錄工具零件的成本並不是一筆小數目。如果設計，文檔製作和原型製作需要1週的時間，則採用工具化的零件可能會使公司在設計者的時間上花費1000美元（例如，每週工資為1000美元）。 \n 大多數公司在“盈虧平衡”分析中不會“考慮”上述七個項目，但是在某些情況下值得考慮。 \n 設計師需要熟悉的另一個術語是“投資回報率”或簡稱為ROI。這類似於前面所述的“收支平衡點”，但提出的問題略有不同。 在與上述相同的問題中（選擇A和B），該問題將提出： 4000美元的工具降低5美元零件的單價的投資回報是多少？ 一旦知道了新的加工件價格（1美元）並訂購了數量（例如，每月= 200個零件/月），則ROI = 5個月。 因此，基本上4000美元的投資回報將為5個月。 \n 章節總結 第1章介紹了設計電子產品外殼的方法。 由於我們並不孤單，因此本章還定義了設計中涉及的其他主要組及其通常的功能。 本章向我們介紹瞭如何將設計視為“成功”，以及設計如何滿足（或超過）（定義的）產品要求。 本章將帶您進入幾個“設計方案”，從“完全定義”的規範到簡約的規範，我們應有盡有。 我們定義了以“頭腦風暴”或“高度詳細”模式進行設計的方式。 \n 討論了一般設計過程中設計評審和良好溝通路徑的需求。 最終，工程經濟學的主題開始了。 這將在第4章中進一步放大。 \n 參考 1. Thuesen HG，Fabrycky WJ和Thuesen GJ。 工程經濟，1971年，Prentice-Hall Inc.， Englewood Cliffs, N.J. \n', 'tags': '', 'url': 'Topic 0 翻譯.html'}]};