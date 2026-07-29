StartupEvents.registry("block", (event) => {
    event.create("mcgougou:shimo", "basic")
    .tagBlock("minecraft:mineable/pickaxe")
    .requiresTool(true)
})