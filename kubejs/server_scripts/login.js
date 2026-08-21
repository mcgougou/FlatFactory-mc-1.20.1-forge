PlayerEvents.loggedIn(event=>{
    event.server.runCommand("say 0.2.999可能有影响的内容如下，请对照检查，如果是新玩家请直接忽略：")
    event.server.runCommand("say 1.现在编写带电路的样板，样板描述会提示编程电路为X号，使用新样板可以自动切换电路，无需使用编程电路卡和可编程仓。")
    event.server.runCommand("say 巨型输入总成不支持自动切换电路，请更改为商店售卖的MAX输入总成")
    event.server.runCommand("say 本版本已经删除电路卡和可编程仓的购买，下个版本会完全停止支持，因此请抓紧时间重新编写样板！")
    event.server.runCommand("say 目前原有样板仍能使用，但是请不要新旧样板混用！")
    event.server.runCommand("say 2.通用电路板的合成由组装机改为打包机。")
})