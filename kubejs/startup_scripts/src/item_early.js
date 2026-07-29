//priority: 97
GTCEuStartupEvents.registry('gtceu:material', event =>{
event.create('tuag')
        .ingot()
        .liquid(1355)
        .components("999x gtceu:copper","1x gtceu:silver")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .flags(GTMaterialFlags.NO_SMELTING)
        .color(0xB87333).iconSet(GTMaterialIconSet.DULL)
        .cableProperties(2097152, 16, 0, true)
})