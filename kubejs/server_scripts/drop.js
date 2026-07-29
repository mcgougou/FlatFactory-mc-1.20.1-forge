ServerEvents.blockLootTables(event=>{
    event.addBlock('minecraft:grass_block', loot => {
        loot.addPool(pool => {
            pool.addItem('dirt').count(1)
        }) 
        loot.addPool(pool => {
            pool.addItem('minecraft:grass').randomChance(0.75)}) 
    
    })
    // event.addBlock('minecraft:oak_log', loot => {
    //     loot.addPool(pool => {
    //         pool.addItem('mcgougou:oak_bark').count(1)

    //     })
    //     loot.addPool(pool => {
    //         pool.addItem('minecraft:stripped_oak_log').count(1)}) 
    // })
})