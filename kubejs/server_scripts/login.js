PlayerEvents.loggedIn(event=>{
    event.server.runCommand("tellraw @a {\"text\":\"0.3.1可能有影响的内容如下，请对照检查，如果是新玩家请直接忽略：\"}")
    event.server.runCommand("tellraw @a {\"text\":\"1.修改了稀土萃取的配方，现在需要1号电路\"}")
    event.server.runCommand("tellraw @a {\"text\":\"0.3.0可能有影响的内容如下，请对照检查，如果是新玩家请直接忽略：\"}")
    event.server.runCommand("tellraw @a {\"text\":\"1.删除了编程电路卡相关内容；\"}")
})