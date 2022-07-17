/*
 * @Author: pang 7861445+redmapleleaf@user.noreply.gitee.com
 * @Date: 2022-07-16 20:52:59
 * @LastEditors: pang 7861445+redmapleleaf@user.noreply.gitee.com
 * @LastEditTime: 2022-07-16 21:29:48
 * @FilePath: \project-management\node.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

(function() {
    'use strict';
      if (location.host.startsWith("juejin.cn")) {
        const siginPage =
              "https://juejin.cn/user/center/signin?from=sign_in_menu_bar";
        const date = new Date().toDateString();
        const isFirst = !localStorage.getItem(date);
        console.log("isFirst", isFirst);
        if (!isFirst) {
            return;
        }
        if (location.href.includes(siginPage.split("?")[1])) {
            setTimeout(() => {
                const btn = Array.from(document.getElementsByTagName("button")).find(
                    (btn) => btn.innerText.includes("签到")
                );
                if (btn) {
                    btn.click();
                    window.close();
                    localStorage.setItem(date, "true");
                }
            }, 3000);
        } else {
            // 打开签到页面
                window.open(siginPage,'_self');
        }
    }

})();