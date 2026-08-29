GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    //自定义配方类型
    //event.create(配方类型id String)
    event.create('ore_breaker_recipe')
        //类
        .category('example')
        //setEUIO 耗能in/产能out
        .setEUIO('in')
        //setMaxIOSize(int,int,int,int)
        //物品输入槽位，物品输出槽位，流体输入槽位，流体输出槽位
        .setMaxIOSize(3, 10, 0, 0)
        
        .setMaxTooltips(5)//设置最大信息提示
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//处理中的图标,处理中图标的方向
        
        .setSound(GTSoundEntries.ARC)                                                                        //机器运行时的声音
    event.create('fluid_driller_recipe')
        //类
        .category('example')
        //setEUIO 耗能in/产能out
        .setEUIO('in')
        //setMaxIOSize(int,int,int,int)
        //物品输入槽位，物品输出槽位，流体输入槽位，流体输出槽位
        .setMaxIOSize(2, 0, 0, 1)
        
        .setMaxTooltips(5)//设置最大信息提示
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//处理中的图标,处理中图标的方向
        
        .setSound(GTSoundEntries.DRILL_TOOL)   
    event.create('monster_killer_recipe')
        //类
        .category('example')
        //setEUIO 耗能in/产能out
        .setEUIO('in')
        //setMaxIOSize(int,int,int,int)
        //物品输入槽位，物品输出槽位，流体输入槽位，流体输出槽位
        .setMaxIOSize(3,10, 0, 0)
        
        .setMaxTooltips(5)//设置最大信息提示
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//处理中的图标,处理中图标的方向
        
        .setSound(GTSoundEntries.ARC)     
    event.create('h2so4_factory_recipe')
        //类
        .category('example')
        //setEUIO 耗能in/产能out
        .setEUIO('in')
        //setMaxIOSize(int,int,int,int)
        //物品输入槽位，物品输出槽位，流体输入槽位，流体输出槽位
        .setMaxIOSize(2, 0, 4, 1)
        
        .setMaxTooltips(5)//设置最大信息提示
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//处理中的图标,处理中图标的方向
        
        .setSound(GTSoundEntries.CHEMICAL)   
    event.create('nh3_factory_recipe')
        //类
        .category('example')
        //setEUIO 耗能in/产能out
        .setEUIO('in')
        //setMaxIOSize(int,int,int,int)
        //物品输入槽位，物品输出槽位，流体输入槽位，流体输出槽位
        .setMaxIOSize(3,0, 2, 1)
        
        .setMaxTooltips(5)//设置最大信息提示
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//处理中的图标,处理中图标的方向
        
        .setSound(GTSoundEntries.ARC)     
    event.create('hno3_recipe')
        //类
        .category('example')
        //setEUIO 耗能in/产能out
        .setEUIO('in')
        //setMaxIOSize(int,int,int,int)
        //物品输入槽位，物品输出槽位，流体输入槽位，流体输出槽位
        .setMaxIOSize(2,0, 3, 1)
        
        .setMaxTooltips(5)//设置最大信息提示
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//处理中的图标,处理中图标的方向
        
        .setSound(GTSoundEntries.CHEMICAL)
    event.create('air_fenli_recipe')
        //类
        .category('example')
        //setEUIO 耗能in/产能out
        .setEUIO('in')
        //setMaxIOSize(int,int,int,int)
        //物品输入槽位，物品输出槽位，流体输入槽位，流体输出槽位
        .setMaxIOSize(3,0, 1, 2)
        .setMaxTooltips(5)//设置最大信息提示
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//处理中的图标,处理中图标的方向
        
        .setSound(GTSoundEntries.ARC)    
    event.create('bayer_recipe')
        //类
        .category('example')
        //setEUIO 耗能in/产能out
        .setEUIO('in')
        //setMaxIOSize(int,int,int,int)
        //物品输入槽位，物品输出槽位，流体输入槽位，流体输出槽位
        .setMaxIOSize(7,5, 1, 2)
        .setMaxTooltips(5)//设置最大信息提示
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//处理中的图标,处理中图标的方向
        
        .setSound(GTSoundEntries.ARC)       
    event.create('plastic_recipe')
        //类
        .category('example')
        //setEUIO 耗能in/产能out
        .setEUIO('in')
        //setMaxIOSize(int,int,int,int)
        //物品输入槽位，物品输出槽位，流体输入槽位，流体输出槽位
        .setMaxIOSize(3,0, 4, 2)
        .setMaxTooltips(5)//设置最大信息提示
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//处理中的图标,处理中图标的方向
        
        .setSound(GTSoundEntries.COMPRESSOR)   
    event.create('steel_recipe')
        //类
        .category('example')
        //setEUIO 耗能in/产能out
        .setEUIO('in')
        //setMaxIOSize(int,int,int,int)
        //物品输入槽位，物品输出槽位，流体输入槽位，流体输出槽位
        .setMaxIOSize(2,1, 0, 0)
        .setMaxTooltips(5)//设置最大信息提示
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//处理中的图标,处理中图标的方向
        
        .setSound(GTSoundEntries.FURNACE)   
    event.create('mv_generator_recipe')
        //类
        .category('example')
        //setEUIO 耗能in/产能out
        .setEUIO('out')
        //setMaxIOSize(int,int,int,int)
        //物品输入槽位，物品输出槽位，流体输入槽位，流体输出槽位
        .setMaxIOSize(2,1, 1, 0)
        .setMaxTooltips(5)//设置最大信息提示
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//处理中的图标,处理中图标的方向
        
        .setSound(GTSoundEntries.TURBINE)    
    event.create('hv_generator_recipe')
        //类
        .category('example')
        //setEUIO 耗能in/产能out
        .setEUIO('out')
        //setMaxIOSize(int,int,int,int)
        //物品输入槽位，物品输出槽位，流体输入槽位，流体输出槽位
        .setMaxIOSize(3,1, 3, 1)
        .setMaxTooltips(5)//设置最大信息提示
        .setSound(GTSoundEntries.TURBINE)   
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//处理中的图标,处理中图标的方向
    event.create('ev_generator_recipe')
        //类
        .category('example')
        //setEUIO 耗能in/产能out
        .setEUIO('out')
        //setMaxIOSize(int,int,int,int)
        //物品输入槽位，物品输出槽位，流体输入槽位，流体输出槽位
        .setMaxIOSize(3,1, 3, 1).setSound(GTSoundEntries.TURBINE)   
        .setMaxTooltips(5)//设置最大信息提示
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//处理中的图标,处理中图标的方向
    event.create('xitu_recipe')
        //类
        .category('example')
        //setEUIO 耗能in/产能out
        .setEUIO('in')
        //setMaxIOSize(int,int,int,int)
        //物品输入槽位，物品输出槽位，流体输入槽位，流体输出槽位
        .setMaxIOSize(3,3, 7, 20)
        .setMaxTooltips(5)//设置最大信息提示
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//处理中的图标,处理中图标的方向
        
        .setSound(GTSoundEntries.CHEMICAL)    
    event.create('youji_recipe')
        //类
        .category('example')
        //setEUIO 耗能in/产能out
        .setEUIO('in')
        //setMaxIOSize(int,int,int,int)
        //物品输入槽位，物品输出槽位，流体输入槽位，流体输出槽位
        .setMaxIOSize(6,6, 6, 6)
        .setMaxTooltips(5)//设置最大信息提示
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//处理中的图标,处理中图标的方向
        
        .setSound(GTSoundEntries.CHEMICAL)    
    event.create('greenhouse')
        .category('example')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
    })
const EnhancedCoilElectricMachine = Java.loadClass('com.liangqu.gtuf.common.machine.multiblock.electric.EnhancedCoilElectricMachine')
const ThreadHatchPartMachine = Java.loadClass('com.liangqu.gtuf.common.machine.multiblock.part.ThreadHatchPartMachine')
const CoilWorkableElectricMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine")
const $LargeTurbineMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.generator.LargeTurbineMachine")
const $GTRecipe = Java.loadClass("com.gregtechceu.gtceu.api.recipe.GTRecipe");
const $MetaMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.MetaMachine");
const EnhancedFluidHatchPartMachine = Java.loadClass('com.liangqu.gtuf.common.machine.multiblock.part.EnhancedFluidHatchPartMachine')
const EnhancedParallelHatchPartMachine = Java.loadClass('com.liangqu.gtuf.common.machine.multiblock.part.EnhancedParallelHatchPartMachine')
const IndustrialSteamHatchPartMachine = Java.loadClass('com.liangqu.gtuf.common.machine.multiblock.part.IndustrialSteamHatchPartMachine')
const GTUF_Machines = Java.loadClass('com.liangqu.gtuf.common.data.GTUF_Machines')

const TierElectricParallelMachine = Java.loadClass('com.liangqu.gtuf.common.machine.multiblock.electric.TierElectricParallelMachine')
const ConfigurableElectricParallelMachine = Java.loadClass('com.liangqu.gtuf.common.machine.multiblock.electric.ConfigurableElectricParallelMachine')
const EnhanceableElectricMachine = Java.loadClass('com.liangqu.gtuf.common.machine.multiblock.electric.EnhanceableElectricMachine')

const GTUFPatternPredicates = Java.loadClass('com.liangqu.gtuf.api.pattern.GTUF_PatternPredicates')
const GTUFPartAbility = Java.loadClass('com.liangqu.gtuf.api.machine.multiblock.GTUF_PartAbility')
const GTUFModels = Java.loadClass('com.liangqu.gtuf.common.data.models.GTUFModels')

const AdjustableSteamParallelMachine = Java.loadClass('com.liangqu.gtuf.common.machine.multiblock.steam.AdjustableSteamParallelMachine')
const EnhanceableSteamMachine = Java.loadClass('com.liangqu.gtuf.common.machine.multiblock.steam.EnhanceableSteamMachine')
const IndustrialSteamMachine = Java.loadClass('com.liangqu.gtuf.common.machine.multiblock.steam.IndustrialSteamMachine')
// const $CoilWorkableElectricMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine");
// const $RecipeModifier = Java.loadClass("com.gregtechceu.gtceu.api.recipe.modifier.RecipeModifier");
 
function time_half(machine, recipe) {
    if (!(machine instanceof $MetaMachine)) return ModifierFunction.NULL;
    if (!(recipe instanceof $GTRecipe)) return ModifierFunction.NULL;
 
 
 
                            //步差大于等于1时，执行配方加速
    return ModifierFunction.builder()
        .durationMultiplier(0.5)
        .build();
        //其他可用的方法
        //.eutMultiplier(double)             能量消耗
        //.outputMultiplier(double)       
        //.chanceMultiplier(double)       
         
}
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("ore_breaker", "multiblock")
       // .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('ore_breaker_recipe')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT//,(machine,recipe)=>time_half(machine,recipe)

        ])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('ABFFFFFFBA', 'ABFFFFFFBA', 'ABFFFFFFBA', 'ABFFFFFFBA', 'ABFFFFFFBA', 'ABBBBBBBBA')
  .aisle('BCCCCCCCCB', 'BCCCCCCCCB', 'BCCCCCCCCB', 'BCCCCCCCCB', 'BCCCCCCCCB', 'BFFFFFFFFB')
  .aisle('FCFFFFFFCF', 'FCFFFFFFCF', 'FCFFFFFFCF', 'FCFFFFFFCF', 'FCDDDDDDCF', 'BFFFFFFFFB')
  .aisle('FCFFFFFFCF', 'FCFFFFFFCF', 'FCFDDDDFCF', 'FCFDDDDFCF', 'FCDDDDDDCF', 'BFFFFFFFFB')
  .aisle('FCFFDDFFCF', 'FCFFDDFFCF', 'FCFDDDDFCF', 'FCFDDDDFCF', 'FCDDDDDDCF', 'BFFFFFFFFB')
  .aisle('FCFFDDFFCF', 'FCFFDDFFCF', 'FCFDDDDFCF', 'FCFDDDDFCF', 'FCDDDDDDCF', 'BFFFFFFFFB')
  .aisle('FCFFDDFFCF', 'FCFFDDFFCF', 'FCFDDDDFCF', 'FCFDDDDFCF', 'FCDDDDDDCF', 'BFFFFFFFFB')
  .aisle('FCFFFFFFCF', 'FCFFFFFFCF', 'FCFDDDDFCF', 'FCFDDDDFCF', 'FCDDDDDDCF', 'BFFFFFFFFB')
  .aisle('FCFFFFFFCF', 'FCFFFFFFCF', 'FCFFFFFFCF', 'FCFFFFFFCF', 'FCDDDDDDCF', 'BFFFFFFFFB')
  .aisle('BCCCCCCCCB', 'BCCCCECCCB', 'BCCCCCCCCB', 'BCCCCCCCCB', 'BCCCCCCCCB', 'BFFFFFFFFB')
  .aisle('ABFFFFFFBA', 'ABFFFFFFBA', 'ABFFFFFFBA', 'ABFFFFFFBA', 'ABFFFFFFBA', 'ABBBBBBBBA')
  
  .where('A', Predicates.blocks('minecraft:oak_log'))
  .where('B', Predicates.blocks('gtceu:wood_frame'))
  .where('C', Predicates.blocks('minecraft:oak_planks')
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
  .where('D', Predicates.blocks('minecraft:obsidian'))
  .where('E', Predicates.controller(Predicates.blocks(definition.get())))
  .where('F', Predicates.any())
  .build()
)
        .workableCasingModel("minecraft:block/oak_planks",
            "gtceu:block/multiblock/pyrolyse_oven");
event.create("monster_killer","multiblock")
        //.machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("monster_killer_recipe")
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('AAAAA', 'ABBBA', 'ABBBA', 'ABBBA', 'AAAAA')
  .aisle('AAAAA', 'B###B', 'B###B', 'B###B', 'ACCCA')
  .aisle('AAAAA', 'B###B', 'B###B', 'B###B', 'ACCCA')
  .aisle('AAAAA', 'B###B', 'B###B', 'B###B', 'ACCCA')
  .aisle('AAAAA', 'AADAA', 'AAAAA', 'ABBBA', 'AAAAA')
  .where('B', Predicates.blocks('minecraft:iron_bars'))
  .where('D', Predicates.controller(Predicates.blocks(definition.get())))
  .where('A', Predicates.blocks('minecraft:smooth_stone')
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
  .where('C', Predicates.blocks('minecraft:obsidian'))
  .where('#', Predicates.any())
  .build()
).workableCasingModel("minecraft:block/smooth_stone",
            "gtceu:block/multiblock/pyrolyse_oven");
event.create("steel_fluid_drilling","multiblock")
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("fluid_driller_recipe")
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('AAA', '#B#', '#B#', '#B#', '###', '###', '###')
  .aisle('AAA', 'BAB', 'BAB', 'BAB', '#B#', '#B#', '#B#')
  .aisle('ACA', '#B#', '#B#', '#B#', '###', '###', '###')
  .where('C', Predicates.controller(Predicates.blocks(definition.get())))
  .where('B', Predicates.blocks('gtceu:steel_frame'))
  .where('A', Predicates.blocks('gtceu:solid_machine_casing')
  .or(Predicates.autoAbilities(definition.getRecipeTypes())))
  .where('#', Predicates.any())
  .build()
).workableCasingModel("gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/pyrolyse_oven");
event.create("simple_air_distillery","multiblock")
        //.machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("air_fenli_recipe")
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('AAAAAA', 'AAAAAA', 'AAAAAA', 'AAAAAA', 'ABBBBA', 'ABBBBA', 'ABBBBA', 'ABBBBA', 'ABBBBA', 'ABBBBA', 'ABBBBA', 'ABBBBA', 'AAAAAA')
  .aisle('AAAAAA', 'ACCCCA', 'A####A', 'A####A', 'B####B', 'B####B', 'BDDDDB', 'B####B', 'B####B', 'B####B', 'B####B', 'B####B', 'AAAAAA')
  .aisle('AAAAAA', 'ACCCCA', 'A####A', 'A####A', 'B####B', 'B####B', 'BDDDDB', 'B####B', 'B####B', 'B####B', 'B####B', 'B####B', 'AAEEAA')
  .aisle('AAAAAA', 'ACCCCA', 'A####A', 'A####A', 'B####B', 'B####B', 'BDDDDB', 'B####B', 'B####B', 'B####B', 'B####B', 'B####B', 'AAEEAA')
  .aisle('AAAAAA', 'ACCCCA', 'A####A', 'A####A', 'B####B', 'B####B', 'BDDDDB', 'B####B', 'B####B', 'B####B', 'B####B', 'B####B', 'AAAAAA')
  .aisle('AAAAAF', 'AAAAAA', 'AAAAAA', 'AAAAAA', 'ABBBBA', 'ABBBBA', 'ABBBBA', 'ABBBBA', 'ABBBBA', 'ABBBBA', 'ABBBBA', 'ABBBBA', 'AAAAAA')
  .where('A', Predicates.blocks('gtceu:frostproof_machine_casing').or(Predicates.autoAbilities(definition.getRecipeTypes()))
  .or(Predicates.abilities(PartAbility.MAINTENANCE)))
  .where('B', Predicates.blocks('gtceu:tempered_glass'))
  .where('F', Predicates.controller(Predicates.blocks(definition.get())))
  .where('D', Predicates.blocks('gtceu:filter_casing'))
  .where('C', Predicates.blocks('minecraft:blue_ice'))
  .where('E', Predicates.abilities(PartAbility.MUFFLER))
  .where('#', Predicates.air())
  .build()
).workableCasingModel("gtceu:block/casings/solid/machine_casing_frost_proof",
            "gtceu:block/multiblock/pyrolyse_oven");
event.create("nh3_factory","multiblock")
.machine((holder) => new EnhancedCoilElectricMachine(holder, 8, 0.1, 0, 0, true))
        .recipeModifiers(true, GTRecipeModifiers.PARALLEL_HATCH,(machine, recipe) => EnhancedCoilElectricMachine.recipeModifier(machine, recipe))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("nh3_factory_recipe")
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('##AAAAA', '##ABABA', '##ABBBA', '##ABBBA', '##ABBBA', '##ABBBA', '##AAAAA', '#######', '#######', '#######', '#######', '#######')
  .aisle('##ADDDA', '##BE#EB', '##B###B', '##B###B', '##B###B', '##B###B', '##AAFAA', '#GGGG##', '#######', '#######', '#######', '#######')
  .aisle('##ADDDA', '##B###B', '##B###B', '##B###B', '##B###B', '##B###B', '#GAFFFA', 'GHHHHG#', '#GGGG##', '#######', '#######', '#######')
  .aisle('##ADDDA', '##BE#EB', '##B###B', '##B###B', '##B###B', '##B###B', '#GAAFAA', 'GHGGG##', '#G#####', '#######', '#######', '#######')
  .aisle('##AAAAA', '##ABHBA', '##ABBBA', '##ABBBA', '##ABBBA', '##ABBBA', '#GAAAAA', 'GHG####', '#G#####', '#######', '#######', '#######')
  .aisle('##DDDDD', '##DBHBD', '##DBBBD', '##DBBBD', '##DBBBD', '##DBBBD', '#GDBBBD', 'GHDBBBD', '#GDBBBD', '##DBBBD', '##DBBBD', '##DDDDD')
  .aisle('##DDDDD', '##BEHEB', '##BEEEB', '##BEEEB', '##BEEEB', '##BEEEB', '#GBEEEB', 'GHBEEEB', '#GBEEEB', '##BEEEB', '##BEEEB', '##DDDDD')
  .aisle('##DDDDD', '##BEHEB', '##BEHEB', '##BEHEB', '##BEHEB', '##BEHEB', '#GBEHEB', 'GHBEHEB', '#GBEHEB', '##BEHEB', '##BEHEB', '##DDGDD')
  .aisle('##DDDDD', '##BEEEB', '##BEEEB', '##BEEEB', '##BEEEB', '##BEEEB', '#GBEEEB', 'GHBEEEB', '#GBEEEB', '##BEEEB', '##BEHEB', '##DDGDD')
  .aisle('##DDDDD', '##DBBBD', '##DBBBD', '##DBBBD', '##DBBBD', '##DBBBD', '#GDBBBD', 'GHDBBBD', '#GDBBBD', '##DBBBD', '##DBHBD', '##DDGDD')
  .aisle('###GHG#', '###GHG#', '###GHG#', '###GHG#', '###GHG#', '###GHG#', '#GGGHG#', 'GHHHHG#', '#GGGG##', '####G##', '###GHG#', '####G##')
  .aisle('##AAHAA', '##ABBBA', '##ABBBA', '##ABBBA', '##ABBBA', '##ABBBA', '##ABBBA', '#GABBBA', '##ABBBA', '##AAAAA', '###GHG#', '####G##')
  .aisle('##AAHAA', '##BIIIB', '##BIIIB', '##BIIIB', '##BIIIB', '##BIIIB', '##BIIIB', '##BIIIB', '##BIIIB', '##AAAAA', '###GHG#', '####G##')
  .aisle('##AHHHA', '##BIHIB', '##BIHIB', '##BIHIB', '##BIHIB', '##BIHIB', '##BIHIB', '##BIHIB', '##BIHIB', '##AAHAA', '###GHG#', '####G##')
  .aisle('##AAAAA', '##BIIIB', '##BIIIB', '##BIIIB', '##BIIIB', '##BIIIB', '##BIIIB', '##BIIIB', '##BIIIB', '##AAAAA', '####G##', '#######')
  .aisle('##AAMAA', '##ABBBA', '##ABBBA', '##ABBBA', '##ABBBA', '##ABBBA', '##ABBBA', '##ABBBA', '##ABBBA', '##AAAAA', '#######', '#######')
  .where('E', Predicates.blocks('minecraft:blue_ice'))
  .where('D', Predicates.blocks("gtceu:frostproof_machine_casing"))
.where('I', Predicates.heatingCoils())
  .where('A', Predicates.blocks("gtceu:solid_machine_casing")
  .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)).or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
  .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2)).or(Predicates.autoAbilities(definition.getRecipeTypes())))
  .where('M', Predicates.controller(Predicates.blocks(definition.get())))
  .where('B', Predicates.blocks("gtceu:tempered_glass"))
  .where('G', Predicates.blocks('gtceu:steel_frame'))
  .where('F', Predicates.blocks("gtceu:filter_casing"))
  .where('H', Predicates.blocks("gtceu:steel_pipe_casing"))
  // .where('N', Predicates.abilities(PartAbility.MAINTENANCE))
  // .where('C', Predicates.abilities(PartAbility.EXPORT_FLUIDS))
  // .where('J', Predicates.abilities(PartAbility.IMPORT_FLUIDS))
  // .where('L', Predicates.abilities(PartAbility.IMPORT_ITEMS))
  .where('#', Predicates.any())
  .build()
)
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/pyrolyse_oven");
event.create("bayer","multiblock")
.machine((holder) => new EnhancedCoilElectricMachine(holder, 8, 0.1, 0, 0, true))
        .recipeModifiers(true, GTRecipeModifiers.PARALLEL_HATCH,(machine, recipe) => EnhancedCoilElectricMachine.recipeModifier(machine, recipe))
.rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("bayer_recipe")
  //       .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH])
  //  .recipeModifier((machine, recipe) => TierElectricParallelMachine.recipeModifier(machine, recipe), true)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('##AAAAA#', '##AAAAA#', '##ADDDA#', '##ADDDA#', '##AEAEA#', '########', '########')
  .aisle('#EAAAAA#', '#EDFFFD#', '#ED#G#D#', '#EDGHGD#', '#EEHEHE#', '#EEEEE##', '########')
  .aisle('EHAAAAA#', 'EHDFFFD#', 'EHDG#GD#', 'EHDHGHD#', 'EHEEHEA#', 'EHHHHE##', '#EEEE###')
  .aisle('EHAAAAA#', '#EDFFFD#', '#ED#G#D#', '#EDGHGD#', '#EEHEHE#', '#EEEEE##', '########')
  .aisle('EHAAAAA#', '#EADHDA#', '##ADDDA#', '##ADDDA#', '##AEAEA#', '########', '########')
  .aisle('EHE#####', '#E##H###', '########', '########', '########', '########', '########')
  .aisle('EHE#####', '#E##H###', '########', '########', '########', '########', '########')
  .aisle('EHIIIII#', '#EIDHDI#', '##IDDDI#', '##IDDDI#', '##IDDDI#', '##IIIII#', '########')
  .aisle('EHIIIII#', '#EDFHFD#', '##DFFFD#', '##DFFFD#', '##DFFFD#', '##IDDDI#', '########')
  .aisle('EHIIIII#', '#EDFHFD#', '##DFFFD#', '##DFFFD#', '##DFFFD#', '##IDEDI#', '########')
  .aisle('EHIIIII#', '#EDFHFD#', '##DFHFD#', '##DFHFD#', '##DFHFD#', '##IEHEI#', '####E###')
  .aisle('EHIIIII#', '#EIDDDI#', '##IDDDI#', '##IDDDI#', '##IDDDI#', '##IEHEI#', '####E###')
  .aisle('EHEEE###', '#E######', '########', '########', '####E###', '###EHE##', '####E###')
  .aisle('EHHHHE##', '#EEEE###', '########', '########', '####E###', '###EHE##', '####E###')
  .aisle('#EAAHHAA', '##A#JJ#A', '##A#JJ#A', '##A#JJ#A', '##AAAAAA', '###EHE##', '####E###')
  .aisle('##AAHHAA', '###JDDJ#', '###JDDJ#', '###JDDJ#', '##AAAAAA', '###EHE##', '####E###')
  .aisle('##AAHHHA', '##JD##DJ', '##JD##DJ', '##JD##DJ', '##AAGGAA', '###EHHE#', '####EE##')
  .aisle('##AAHHHA', '##JD##DJ', '##JD##DJ', '##JD##DJ', '##AAGGAA', '###EHHE#', '####EE##')
  .aisle('##AAHHAA', '###JDDJ#', '###JDDJ#', '###JDDJ#', '##AAAAAA', '####EE##', '########')
  .aisle('##AAAAAN', '##A#JJ#A', '##A#JJ#A', '##A#JJ#A', '##AAAAAA', '########', '########')
  .where('E', Predicates.blocks('gtceu:steel_frame'))
  .where('G', Predicates.blocks("gtceu:filter_casing"))
  .where('A', Predicates.blocks("gtceu:solid_machine_casing").or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)).or(Predicates.autoAbilities(definition.getRecipeTypes()))
  .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
  .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
  .where('D', Predicates.blocks("gtceu:tempered_glass"))
  .where('N', Predicates.controller(Predicates.blocks(definition.get())))
  .where('I', Predicates.blocks("gtceu:frostproof_machine_casing"))
  .where('H', Predicates.blocks("gtceu:steel_pipe_casing"))
  .where('J', Predicates.heatingCoils())
  .where('F', Predicates.any())
  // .where('C', Predicates.abilities(PartAbility.EXPORT_ITEMS))
  // .where('B', Predicates.abilities(PartAbility.EXPORT_FLUIDS))
  // .where('L', Predicates.abilities(PartAbility.IMPORT_FLUIDS))
  // .where('M', Predicates.abilities(PartAbility.IMPORT_ITEMS))
  .where('#', Predicates.any())
  .build()
)
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/pyrolyse_oven");
event.create("h2so4_factory","multiblock")
.machine((holder) => new EnhancedCoilElectricMachine(holder, 8, 0.1, 0, 0, true))
        .recipeModifiers(true, GTRecipeModifiers.PARALLEL_HATCH,(machine, recipe) => EnhancedCoilElectricMachine.recipeModifier(machine, recipe))
.rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("h2so4_factory_recipe")
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('##AAA##', '##AAA##', '##AAA##', '##AAA##', '##AAA##', '##AAA##', '##AAA##', '##AAA##', '##AAA##', '##AAA##', '##AAA##', '#######', '#######', '#######', '#######')
  .aisle('#ABBBA#', '#ABBBA#', '#ABBBA#', '#ABBBA#', '#ABBBA#', '#ABBBA#', '#ABBBA#', '#ABBBA#', '#ABBBA#', '#ABBBA#', '#ABBBA#', '##AAA##', '#######', '#######', '#######')
  .aisle('ABBBBBA', 'AB###BA', 'AB###BA', 'ABBBBBA', 'AB###BA', 'AB###BA', 'AB###BA', 'ABBBBBA', 'AB###BA', 'AB###BA', 'AB###BA', '#ACCCA#', '##DAD##', '###A###', '###A###')
  .aisle('ABBBBBA', 'AB###BA', 'AB###BA', 'ABBBBBA', 'AB###BA', 'ABBBBBA', 'AB###BA', 'ABBBBBA', 'AB###BA', 'ABBBBBA', 'AB###BA', '#ACECA#', '##A#A##', '##A#A##', '##A#A##')
  .aisle('ABBBBBA', 'AB###BA', 'AB###BA', 'AB###BA', 'AB###BA', 'ABBBBBA', 'AB###BA', 'AB###BA', 'AB###BA', 'ABBBBBA', 'AB###BA', '#ACCCA#', '##DAD##', '###A###', '###A###')
  .aisle('#ABCBA#', '#ABCBA#', '#ABBBA#', '#ABBBA#', '#ABBBA#', '#ABBBA#', '#ABBBA#', '#ABBBA#', '#ABBBA#', '#ABBBA#', '#ABBBA#', '##AAA##', '#######', '#######', '#######')
  .aisle('##ACA##', '##AAA##', '##AAA##', '##AAA##', '##AAA##', '##AAA##', '##AAA##', '##AAA##', '##AAA##', '##AAA##', '##AAA##', '#######', '#######', '#######', '#######')
  .aisle('##DCD##', '###D###', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######')
  .aisle('##DCD##', '###D###', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######')
  .aisle('AACCCAA', 'AFFFFFA', 'AFFFFFA', 'AFFFFFA', 'AFFFFFA', 'AFFFFFA', 'AFFFFFA', 'AFFFFFA', 'AFFFFFA', 'AFFFFFA', 'AAAAAAA', '#######', '#######', '#######', '#######')
  .aisle('AACACAA', 'FG#G#GF', 'FGHGHGF', 'FG#G#GF', 'FG#G#GF', 'FGHGHGF', 'FG#G#GF', 'FG#G#GF', 'FGHGHGF', 'FG#G#GF', 'AAAAAAA', '##DDD##', '#######', '#######', '#######')
  .aisle('AACACAA', 'F#CCC#F', 'FHCHCHF', 'F#C#C#F', 'F#C#C#F', 'FHCHCHF', 'F#C#C#F', 'F#C#C#F', 'FHCHCHF', 'F#CCC#F', 'AAIIIAA', '#DCCCD#', '##DDD##', '#######', '#######')
  .aisle('AAAAAAA', 'FGCCCGF', 'FGHCHGF', 'FG#C#GF', 'FG#C#GF', 'FGHCHGF', 'FG#C#GF', 'FG#C#GF', 'FGHCHGF', 'FGCCCGF', 'AAIIIAA', '#DCCCD#', '##DDD##', '#######', '#######')
  .aisle('AAAAAAA', 'F#CCC#F', 'FHCHCHF', 'F#C#C#F', 'F#C#C#F', 'FHCHCHF', 'F#C#C#F', 'F#C#C#F', 'FHCHCHF', 'F#CCC#F', 'AAIIIAA', '#DCCCD#', '##DDD##', '#######', '#######')
  .aisle('AAAAAAA', 'FGCGCGF', 'FGHGHGF', 'FG#G#GF', 'FG#G#GF', 'FGHGHGF', 'FG#G#GF', 'FG#G#GF', 'FGHGHGF', 'FG#G#GF', 'AAAAAAA', '##DCD##', '###D###', '#######', '#######')
  .aisle('AAAAAAA', 'AFCCCFA', 'AFFFFFA', 'AFFFFFA', 'AFFFFFA', 'AFFFFFA', 'AFFFFFA', 'AFFFFFA', 'AFFFFFA', 'AFFFFFA', 'AAAAAAA', '##DCD##', '###D###', '#######', '#######')
  .aisle('###D###', '##DCD##', '##DCD##', '##DCD##', '##DCD##', '##DCD##', '##DCD##', '##DCD##', '##DCD##', '##DCD##', '##DCD##', '##DCD##', '###D###', '#######', '#######')
  .aisle('#JJJJJ#', '#JGGGJ#', '#JGGGJ#', '#JJJJJ#', '##DCD##', '###D###', '###D###', '###D###', '###D###', '###D###', '###D###', '###D###', '#######', '#######', '#######')
  .aisle('#JJJJJ#', '#G###G#', '#G###G#', '#JIIIJ#', '##DCD##', '###D###', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######')
  .aisle('#JJJJJ#', '#G###G#', '#G###G#', '#JIIIJ#', '##DCD##', '###D###', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######')
  .aisle('#JJJJJ#', '#G###G#', '#G###G#', '#JIIIJ#', '##DDD##', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######')
  .aisle('#JJMJJ#', '#JGGGJ#', '#JGGGJ#', '#JJJJJ#', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######', '#######')
  .where('J', Predicates.blocks(GTBlocks.CASING_INVAR_HEATPROOF.get()).or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
  .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)).or(Predicates.autoAbilities(definition.getRecipeTypes())))
  .where('G', Predicates.heatingCoils())
  .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
  .where('M', Predicates.controller(Predicates.blocks(definition.get())))
  .where('A', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
  .where('D', Predicates.blocks('gtceu:steel_frame'))
  .where('H', Predicates.blocks('gtceu:vanadium_pentoxide_block'))
  .where('I', Predicates.blocks(GTBlocks.FILTER_CASING.get()))
  .where('F', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
  .where('B', Predicates.blocks('mcgougou:shimo'))
  .where('E', Predicates.abilities(PartAbility.MUFFLER))
  .where('#', Predicates.any())
  .build()
)
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_heatproof",
            "gtceu:block/multiblock/pyrolyse_oven");
            ////////////////////////////////////
    event.create("hno3_factory","multiblock")
    .machine((holder) => new EnhancedCoilElectricMachine(holder, 8, 0.1, 0, 0, true))
        .recipeModifiers(true, GTRecipeModifiers.PARALLEL_HATCH,(machine, recipe) => EnhancedCoilElectricMachine.recipeModifier(machine, recipe))
    .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("hno3_recipe")
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('#AAA#', '#AAA#', '#AAA#', '#AAA#', '#AAA#', '#AAA#', '#AAA#', '#AAA#', '#AAA#', '#AAA#', '#AAA#', '#####', '#####', '#####', '#####')
  .aisle('AABAA', 'ACCCA', 'ACCCA', 'ACCCA', 'AAAAA', 'ACCCA', 'ACCCA', 'ACCCA', 'AAAAA', 'ACCCA', 'ADDDA', '#AAA#', '##A##', '##A##', '##A##')
  .aisle('ABBBA', 'ACCCA', 'AAAAA', 'ACCCA', 'AAAAA', 'ACCCA', 'AAAAA', 'ACCCA', 'AAAAA', 'ACCCA', 'ADEDA', '#A#A#', '#A#A#', '#A#A#', '#A#A#')
  .aisle('AABAA', 'ACCCA', 'AAAAA', 'ACCCA', 'ACCCA', 'ACCCA', 'AAAAA', 'ACCCA', 'ACCCA', 'ACCCA', 'ADDDA', '#AAA#', '##A##', '##A##', '##A##')
  .aisle('#ABA#', '#AAA#', '#AAA#', '#AAA#', '#AAA#', '#AAA#', '#AAA#', '#AAA#', '#AAA#', '#AAA#', '#ABA#', '##F##', '#####', '#####', '#####')
  .aisle('#FBF#', '##F##', '##F##', '##F##', '##F##', '##F##', '##F##', '##F##', '##F##', '##F##', '#FBF#', '##F##', '#####', '#####', '#####')
  .aisle('#FBF#', '#FBF#', '#FBF#', '#FBF#', '#FBF#', '#FBF#', '#FBF#', '#FBF#', '#FBF#', '#FBF#', '#FBF#', '##F##', '#####', '#####', '#####')
  .aisle('AAAAA', 'AGGGA', 'AGGGA', 'AGGGA', 'AGGGA', 'AGGGA', 'AGGGA', 'AGGGA', 'AGGGA', 'AAAAA', '#FBF#', '##F##', '#####', '#####', '#####')
  .aisle('AAAAA', 'GHIHG', 'GHIHG', 'GHIHG', 'GHIHG', 'GHIHG', 'GHIHG', 'GHIHG', 'GHIHG', 'AAAAA', '#FBF#', '##F##', '#####', '#####', '#####')
  .aisle('AAAAA', 'GIBIG', 'GIBIG', 'GIBIG', 'GIBIG', 'GIBIG', 'GIBIG', 'GIBIG', 'GIBIG', 'AABAA', '#FBF#', '##F##', '#####', '#####', '#####')
  .aisle('AAAAA', 'GHIHG', 'GHIHG', 'GHIHG', 'GHIHG', 'GHIHG', 'GHIHG', 'GHIHG', 'GHIHG', 'AAAAA', '##F##', '#####', '#####', '#####', '#####')
  .aisle('AAMAA', 'AGGGA', 'AGGGA', 'AGGGA', 'AGGGA', 'AGGGA', 'AGGGA', 'AGGGA', 'AGGGA', 'AAAAA', '#####', '#####', '#####', '#####', '#####')
  .where('E', Predicates.abilities(PartAbility.MUFFLER))
  .where('I', Predicates.blocks('gtceu:pt10rh_block'))
  .where('H',Predicates.heatingCoils())
    .where('M', Predicates.controller(Predicates.blocks(definition.get())))
  .where('G', Predicates.blocks('gtceu:tempered_glass'))
  .where('F', Predicates.blocks('gtceu:polytetrafluoroethylene_frame'))
  .where('D', Predicates.blocks('gtceu:filter_casing'))
.where('C', Predicates.air())
  .where('B', Predicates.blocks('gtceu:ptfe_pipe_casing'))
  .where('A', Predicates.blocks('gtceu:inert_machine_casing').or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
  .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)).or(Predicates.autoAbilities(definition.getRecipeTypes())))
  .where('#', Predicates.any())
  .build()
)
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_inert_ptfe",
            "gtceu:block/multiblock/pyrolyse_oven");
            ////////////////////////////////////////////////////////////////////////////
event.create("plastic_factory","multiblock")
.machine((holder) => new EnhancedCoilElectricMachine(holder, 8, 0.1, 0, 0, true))
        .recipeModifiers(true, GTRecipeModifiers.PARALLEL_HATCH,(machine, recipe) => EnhancedCoilElectricMachine.recipeModifier(machine, recipe))
.rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("plastic_recipe")
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('AAAAAAAAA', 'AAAAAAAAA', 'AAAABAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA')
  .aisle('ACCCCCCCA', 'ACCCCCCCA', 'ACCCBCCCA', 'ACCCCCCCA', 'ACCCCCCCA', 'ACCCCCCCA', 'AAAAAAAAA')
  .aisle('ACCCCCCCA', 'ACDDDDDCA', 'ACDDBDDCA', 'ACDDDDDCA', 'ACDDDDDCA', 'ACCCCCCCA', 'AAAAAAAAA')
  .aisle('ACCCCCCCA', 'ACDDDDDCA', 'ACD###DCA', 'ACD###DCA', 'ACDDDDDCA', 'ACCCCCCCA', 'AAAEEEAAA')
  .aisle('ACCCCCCCA', 'ACDDDDDCA', 'BBB#D#BBB', 'ACD#D#DCA', 'ACDDDDDCA', 'ACCCCCCCA', 'AAAEEEAAA')
  .aisle('ACCCCCCCA', 'ACDDDDDCA', 'ACD###DCA', 'ACD###DCA', 'ACDDDDDCA', 'ACCCCCCCA', 'AAAEEEAAA')
  .aisle('ACCCCCCCA', 'ACDDDDDCA', 'ACDDBDDCA', 'ACDDDDDCA', 'ACDDDDDCA', 'ACCCCCCCA', 'AAAAAAAAA')
  .aisle('ACCCCCCCA', 'ACCCCCCCA', 'ACCCBCCCA', 'ACCCCCCCA', 'ACCCCCCCA', 'ACCCCCCCA', 'AAAAAAAAA')
  .aisle('AAAAAAAAA', 'AAAAFAAAA', 'AAAABAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA')
  .where('F', Predicates.controller(Predicates.blocks(definition.get())))
  .where('B', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
  .where('D', Predicates.heatingCoils())
  .where('A', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()).or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
  .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)).or(Predicates.autoAbilities(definition.getRecipeTypes())))
  .where('C', Predicates.blocks(GTBlocks.CASING_INVAR_HEATPROOF.get()))
  .where('E', Predicates.abilities(PartAbility.MUFFLER))
  .where('#', Predicates.air())
  .build()
)
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/pyrolyse_oven");
///////////////////////////
event.create("mcgougou_blast","multiblock")
.machine((holder) => new EnhancedCoilElectricMachine(holder, 64, 0.1, 64, 0, true))
        .recipeModifiers(true,GTRecipeModifiers.PARALLEL_HATCH,//(machine, recipe) => GTRecipeModifiers.ebfOverclock(machine, recipe),
        (machine, recipe) => EnhancedCoilElectricMachine.recipeModifier(machine, recipe))
.rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("electric_blast_furnace")
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('AAAAAAA', 'B#####B', 'B#####B', 'B#####B', 'B#####B', 'B#####B', 'AAAAAAA')
  .aisle('AAAAAAA', '#CCCCC#', '#CCCCC#', '#CCCCC#', '#CCCCC#', '#CCCCC#', 'AAAAAAA')
  .aisle('AAAAAAA', '#C###C#', '#C###C#', '#C###C#', '#C###C#', '#C###C#', 'AADDDAA')
  .aisle('AAAAAAA', '#C#C#C#', '#C#C#C#', '#C#C#C#', '#C#C#C#', '#C#C#C#', 'AADADAA')
  .aisle('AAAAAAA', '#C###C#', '#C###C#', '#C###C#', '#C###C#', '#C###C#', 'AADDDAA')
  .aisle('AAAAAAA', '#CCCCC#', '#CCCCC#', '#CCCCC#', '#CCCCC#', '#CCCCC#', 'AAAAAAA')
  .aisle('AAAEAAA', 'B#####B', 'B#####B', 'B#####B', 'B#####B', 'B#####B', 'AAAAAAA')
  .where('E', Predicates.controller(Predicates.blocks(definition.get())))
  .where('A', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get()).or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
  .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)).or(Predicates.autoAbilities(definition.getRecipeTypes())))
  .where('C', Predicates.heatingCoils())
  .where('B', Predicates.blocks(GTBlocks.CASING_TITANIUM_STABLE.get()))
  .where('D', Predicates.blocks('gtceu:ev_muffler_hatch'))
  .where('#', Predicates.any())
  .build()
)
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_robust_tungstensteel",
            "gtceu:block/multiblock/pyrolyse_oven");
///xitu
event.create("xitu_factory","multiblock").machine((holder) => new ConfigurableElectricParallelMachine(holder, 8,1,1))
        .recipeModifiers(true, GTRecipeModifiers.PARALLEL_HATCH,(machine, recipe) => ConfigurableElectricParallelMachine.recipeModifier(machine, recipe))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("xitu_recipe")
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('#########################', '###AAA###################', '#####A###################', '#BBB#A###################', '#B###A###################', '#B###A###################', '#B#AAA###################', '#B#######################', '#BBB#####################', '#########################')
  .aisle('#########################', '##ACCCA##################', '#BBDACA##################', 'BEEEDCA##################', 'BEBBACA##################', 'BEB#ACA##################', 'BEDCCCA##################', 'BEBDAA###################', 'BEEEB####################', '#BBB#####################')
  .aisle('###AFFFFFFFFFFFFFFFFFFF##', '##ACFGGGGGGGGGGGGGGGGGFA#', '###DFGGGGGGGGGGGGGGGGGF##', '#BBEFGGGGGGGGGGGGGGGGGFB#', '#B#BFGGGGGGGGGGGGGGGGGF##', '#B#AFFFFFFFFFFFFFFFFFFF##', '#BACFGGGGGGGGGGGGGGGGGFA#', '#B#DFGGGGGGGGGGGGGGGGGF##', '#BBEFGGGGGGGGGGGGGGGGGFB#', '###BFGGGGGGGGGGGGGGGGGF##')
  .aisle('###AFFFFFFFFFFFFFFFFFFFA#', '##ACCCCCCCCCCCCCCCCCCCCCA', '###DF##F##F##F##F##F##FD#', '##BEEEEEEEEEEEEEEEEEEEEEB', '###BGGGGGGGGGGGGGGGGGGGB#', '###AFFFFFFFFFFFFFFFFFFFA#', '##ACCCCCCCCCCCCCCCCCCCCCA', '###DF##F##F##F##F##F##FD#', '##BEEEEEEEEEEEEEEEEEEEEEB', '###BGGGGGGGGGGGGGGGGGGGB#')
  .aisle('####FFFFFFFFFFFFFFFFFFFA#', '###AF##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '###BF##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#', '####FFFFFFFFFFFFFFFFFFFA#', '###AF##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '###BF##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#')
  .aisle('####FFFFFFFFFFFFFFFFFFFA#', '###AF##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '###BF##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#', '####FFFFFFFFFFFFFFFFFFFA#', '###AF##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '###BF##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#')
  .aisle('###AFFFFFFFFFFFFFFFFFFFA#', '##ACCCCCCCCCCCCCCCCCCCCCA', '###DF##F##F##F##F##F##FD#', '##BEEEEEEEEEEEEEEEEEEEEEB', '###BGGGGGGGGGGGGGGGGGGGB#', '###AFFFFFFFFFFFFFFFFFFFA#', '##ACCCCCCCCCCCCCCCCCCCCCA', '###DF##F##F##F##F##F##FD#', '##BEEEEEEEEEEEEEEEEEEEEEB', '###BGGGGGGGGGGGGGGGGGGGB#')
  .aisle('###AFFFFFFFFFFFFFFFFFFF##', '##ACFGGGGGGGGGGGGGGGGGFA#', '###DFGGGGGGGGGGGGGGGGGF##', '##BEFGGGGGGGGGGGGGGGGGFB#', '###BFGGGGGGGGGGGGGGGGGF##', '###AFFFFFFFFFFFFFFFFFFF##', '##ACFGGGGGGGGGGGGGGGGGFA#', '###DFGGGGGGGGGGGGGGGGGF##', '##BEFGGGGGGGGGGGGGGGGGFB#', '###BFGGGGGGGGGGGGGGGGGF##')
  .aisle('###AFFFFFFFFFFFFFFFFFFFA#', '##ACCCCCCCCCCCCCCCCCCCCCA', '###DF##F##F##F##F##F##FD#', '##BEEEEEEEEEEEEEEEEEEEEEB', '###BGGGGGGGGGGGGGGGGGGGB#', '###AFFFFFFFFFFFFFFFFFFFA#', '##ACCCCCCCCCCCCCCCCCCCCCA', '###DF##F##F##F##F##F##FD#', '##BEEEEEEEEEEEEEEEEEEEEEB', '###BGGGGGGGGGGGGGGGGGGGB#')
  .aisle('####FFFFFFFFFFFFFFFFFFFA#', '###AF##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '###BF##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#', '####FFFFFFFFFFFFFFFFFFFA#', '###AF##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '###BF##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#')
  .aisle('####FFFFFFFFFFFFFFFFFFFA#', '###AF##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '###BF##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#', '####FFFFFFFFFFFFFFFFFFFA#', '###AF##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '###BF##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#')
  .aisle('###AFFFFFFFFFFFFFFFFFFFA#', '##ACCCCCCCCCCCCCCCCCCCCCA', '###DF##F##F##F##F##F##FD#', '##BEEEEEEEEEEEEEEEEEEEEEB', '###BGGGGGGGGGGGGGGGGGGGB#', '###AFFFFFFFFFFFFFFFFFFFA#', '##ACCCCCCCCCCCCCCCCCCCCCA', '###DF##F##F##F##F##F##FD#', '##BEEEEEEEEEEEEEEEEEEEEEB', '###BGGGGGGGGGGGGGGGGGGGB#')
  .aisle('###AFFFFFFFFFFFFFFFFFFF##', '##ACFGGGGGGGGGGGGGGGGGFA#', '###DFGGGGGGGGGGGGGGGGGF##', '##BEFGGGGGGGGGGGGGGGGGFB#', '###BFGGGGGGGGGGGGGGGGGF##', '###AFFFFFFFFFFFFFFFFFFF##', '##ACFGGGGGGGGGGGGGGGGGFA#', '###DFGGGGGGGGGGGGGGGGGF##', '##BEFGGGGGGGGGGGGGGGGGFB#', '###BFGGGGGGGGGGGGGGGGGF##')
  .aisle('###AFFFFFFFFFFFFFFFFFFFA#', '##ACCCCCCCCCCCCCCCCCCCCCA', '###DF##F##F##F##F##F##FD#', '##BEEEEEEEEEEEEEEEEEEEEEB', '###BGGGGGGGGGGGGGGGGGGGB#', '###AFFFFFFFFFFFFFFFFFFFA#', '##ACCCCCCCCCCCCCCCCCCCCCA', '###DF##F##F##F##F##F##FD#', '##BEEEEEEEEEEEEEEEEEEEEEB', '###BGGGGGGGGGGGGGGGGGGGB#')
  .aisle('####FFFFFFFFFFFFFFFFFFFA#', '###AF##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '###BF##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#', '####FFFFFFFFFFFFFFFFFFFA#', '###AF##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '###BF##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#')
  .aisle('####FFFFFFFFFFFFFFFFFFFA#', '###AF##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '###BF##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#', '####FFFFFFFFFFFFFFFFFFFA#', '###AF##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '###BF##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#')
  .aisle('###AFFFFFFFFFFFFFFFFFFFA#', '##ACCCCCCCCCCCCCCCCCCCCCA', '###DF##F##F##F##F##F##FD#', '##BEEEEEEEEEEEEEEEEEEEEEB', '###BGGGGGGGGGGGGGGGGGGGB#', '###AFFFFFFFFFFFFFFFFFFFA#', '##ACCCCCCCCCCCCCCCCCCCCCA', '###DF##F##F##F##F##F##FD#', '##BEEEEEEEEEEEEEEEEEEEEEB', '###BGGGGGGGGGGGGGGGGGGGB#')
  .aisle('###AFFFFFFFFFFFFFFFFFFF##', '##ACFGGGGGGGGGGGGGGGGGFA#', '###DFGGGGGGGGGGGGGGGGGF##', '##BEFGGGGGGGGGGGGGGGGGFB#', '###BFGGGGGGGGGGGGGGGGGF##', '###AFFFFFFFFFFFFFFFFFFF##', '##ACFGGGGGGGGGGGGGGGGGFA#', '###DFGGGGGGGGGGGGGGGGGF##', '##BEFGGGGGGGGGGGGGGGGGFB#', '###BFGGGGGGGGGGGGGGGGGF##')
  .aisle('###AFFFFFFFFFFFFFFFFFFFA#', '##ACCCCCCCCCCCCCCCCCCCCCA', '###DF##F##F##F##F##F##FD#', '##BEEEEEEEEEEEEEEEEEEEEEB', '###BGGGGGGGGGGGGGGGGGGGB#', '###AFFFFFFFFFFFFFFFFFFFA#', '##ACCCCCCCCCCCCCCCCCCCCCA', '###DF##F##F##F##F##F##FD#', '##BEEEEEEEEEEEEEEEEEEEEEB', '###BGGGGGGGGGGGGGGGGGGGB#')
  .aisle('####FFFFFFFFFFFFFFFFFFFA#', '###AF##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '###BF##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#', '####FFFFFFFFFFFFFFFFFFFA#', '###AF##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '###BF##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#')
  .aisle('####FFFFFFFFFFFFFFFFFFFA#', '###AF##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '###BF##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#', '####FFFFFFFFFFFFFFFFFFFA#', '###AF##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '###BF##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#')
  .aisle('###AFFFFFFFFFFFFFFFFFFFA#', '##ACCCCCCCCCCCCCCCCCCCCCA', '###DF##F##F##F##F##F##FD#', '##BEEEEEEEEEEEEEEEEEEEEEB', '###BGGGGGGGGGGGGGGGGGGGB#', '###AFFFFFFFFFFFFFFFFFFFA#', '##ACCCCCCCCCCCCCCCCCCCCCA', '###DF##F##F##F##F##F##FD#', '##BEEEEEEEEEEEEEEEEEEEEEB', '###BGGGGGGGGGGGGGGGGGGGB#')
  .aisle('###AFFFFFFFFFFFFFFFFFFF##', '##ACFGGGGGGGGGGGGGGGGGFA#', '###DFGGGGGGGGGGGGGGGGGF##', '##BEFGGGGGGGGGGGGGGGGGFB#', '###BFGGGGGGGGGGGGGGGGGF##', '###AFFFFFFFFFFFFFFFFFFF##', '##ACFGGGGGGGGGGGGGGGGGFA#', '###DFGGGGGGGGGGGGGGGGGF##', '##BEFGGGGGGGGGGGGGGGGGFB#', '###BFGGGGGGGGGGGGGGGGGF##')
  .aisle('###AFFFFFFFFFFFFFFFFFFFA#', '##ACCCCCCCCCCCCCCCCCCCCCA', '###DF##F##F##F##F##F##FD#', '##BEEEEEEEEEEEEEEEEEEEEEB', '###BGGGGGGGGGGGGGGGGGGGB#', '###AFFFFFFFFFFFFFFFFFFFA#', '##ACCCCCCCCCCCCCCCCCCCCCA', '###DF##F##F##F##F##F##FD#', '##BEEEEEEEEEEEEEEEEEEEEEB', '###BGGGGGGGGGGGGGGGGGGGB#')
  .aisle('####FFFFFFFFFFFFFFFFFFFA#', '###AF##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '###BF##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#', '####FFFFFFFFFFFFFFFFFFFA#', '###AF##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '###BF##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#')
  .aisle('####FFFFFFFFFFFFFFFFFFFA#', '####F##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '####F##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#', '####FFFFFFFFFFFFFFFFFFFA#', '####F##F##F##F##F##F##FCA', '####F##F##F##F##F##F##FD#', '####F##F##F##F##F##F##FEB', '####GGGGGGGGGGGGGGGGGGGB#')
  .aisle('####FFFFFFFFFFFFFFFFFFFA#', '####HCCCCCCCCCCCCCCCCCCCA', '####F##F##F##F##F##F##FD#', '####IEEEEEEEEEEEEEEEEEEEB', '####GGGGGGGGGGGGGGGGGGGB#', '####FFFFFFFFFFFFFFFFFFFA#', '####ICCCCCCCCCCCCCCCCCCCA', '####F##F##F##F##F##F##FD#', '####HEEEEEEEEEEEEEEEEEEEB', '####GGGGGGGGGGGGGGGGGGGB#')
  .aisle('####JFFFFFFFFFFFFFFFFFF##', '####FGGGGGGGGGGGGGGGGGFA#', '####FGGGGGGGGGGGGGGGGGF##', '####FGGGGGGGGGGGGGGGGGFB#', '####FGGGGGGGGGGGGGGGGGF##', '####FFFFFFFFFFFFFFFFFFF##', '####FGGGGGGGGGGGGGGGGGFA#', '####FGGGGGGGGGGGGGGGGGF##', '####FGGGGGGGGGGGGGGGGGFB#', '####FGGGGGGGGGGGGGGGGGF##')
  .where('B', Predicates.blocks('gtceu:titanium_frame'))
  .where('D', Predicates.blocks('gtceu:stainless_steel_frame'))
  .where('A', Predicates.blocks('gtceu:polytetrafluoroethylene_frame'))
  .where('F', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()).or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
  .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)).or(Predicates.abilities(PartAbility.IMPORT_ITEMS)).or(Predicates.abilities(PartAbility.EXPORT_ITEMS)).or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2)))
  .where('G', Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get()))
  .where('C', Predicates.blocks(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get()))
  .where('J', Predicates.controller(Predicates.blocks(definition.get())))
  .where('E', Predicates.blocks(GTBlocks.CASING_TITANIUM_PIPE.get()))
  .where('I', Predicates.abilities(PartAbility.EXPORT_FLUIDS))
  .where('H', Predicates.abilities(PartAbility.IMPORT_FLUIDS))
  .where('#', Predicates.any())
  .build()
)
    .workableCasingModel("gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/pyrolyse_oven");
function hv(machine, recipe) {
    if (!(machine instanceof $MetaMachine)) return ModifierFunction.NULL;
    if (!(recipe instanceof $GTRecipe)) return ModifierFunction.NULL;
 
 
 
                            //步差大于等于1时，执行配方加速
    return ModifierFunction.builder()
        .durationMultiplier(0.5).eutMultiplier(0.8) 
        .build();
        //其他可用的方法
        //.eutMultiplier(double)             能量消耗
        //.outputMultiplier(double)       
        //.chanceMultiplier(double)       
         
}

event.create("hv_ore","multiblock").machine((holder) => new ConfigurableElectricParallelMachine(holder, 8,0.5,0.5))
        .recipeModifiers(true, GTRecipeModifiers.PARALLEL_HATCH,
        (machine, recipe) => ConfigurableElectricParallelMachine.recipeModifier(machine, recipe))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("ore_breaker_recipe")
        .recipeTypes("fluid_driller_recipe")
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('AAAAAAAAA', 'AAAAAAAAA', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########')
  .aisle('AABAAABAA', 'AACAAACAA', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########')
  .aisle('ABBBABBBA', 'ACBCACBCA', '#CBC#CBC#', '#CBC#CBC#', '#CBC#CBC#', '#CBC#CBC#', '#CBC#CBC#', '#CBC#CBC#', '#CBC#CBC#', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##')
  .aisle('AABBABBAA', 'AACBABCAA', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########')
  .aisle('AAAABAAAA', 'AAAABAAAA', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########')
  .aisle('AABBABBAA', 'AACBABCAA', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########')
  .aisle('ABBBABBBA', 'ACBCACBCA', '#CBC#CBC#', '#CBC#CBC#', '#CBC#CBC#', '#CBC#CBC#', '#CBC#CBC#', '#CBC#CBC#', '#CBC#CBC#', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##')
  .aisle('AABAAABAA', 'AACAAACAA', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '##C###C##', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########')
  .aisle('AAAADAAAA', 'AAAAAAAAA', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########')
  .where('A', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()).or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
  .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)).or(Predicates.autoAbilities(definition.getRecipeTypes())))
  .where('B', Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
  .where('C', Predicates.blocks('gtceu:stainless_steel_frame'))
  .where('D', Predicates.controller(Predicates.blocks(definition.get())))
  .where('#', Predicates.any())
  .build()
)
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/pyrolyse_oven");
event.create("hv_yasuo","multiblock")
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("bender").recipeTypes("compressor")  .recipeTypes("extruder").recipeTypes("fluid_solidifier") .recipeTypes("forge_hammer").recipeTypes("forming_press").recipeTypes("lathe").recipeTypes("wiremill")
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH,
          GTRecipeModifiers.OC_NON_PERFECT,
            (machine, recipe)=> hv(machine,recipe)])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('AAA', 'AAA', 'AAA')
  .aisle('ABA', 'ACA', 'AFA')
  .aisle('AAA', 'ADA', 'AAA')
  .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
  .where('F', Predicates.heatingCoils())
  .where('D',  Predicates.controller(Predicates.blocks(definition.get())))
  .where('B', Predicates.blocks('minecraft:piston'))
  .where('A', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()).setMinGlobalLimited(13)
  .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)).or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)).or(Predicates.autoAbilities(definition.getRecipeTypes())))
  .build()
)
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/pyrolyse_oven");
event.create("hv_fenli","multiblock")
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS).recipeTypes("centrifuge").recipeTypes("cutter").recipeTypes("distillery").recipeTypes("electrolyzer").recipeTypes("electromagnetic_separator")
        .recipeTypes("sifter").recipeTypes("thermal_centrifuge") .recipeTypes("macerator")
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH,
          GTRecipeModifiers.OC_NON_PERFECT,
            (machine, recipe)=> hv(machine,recipe)])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('AAA', 'AAA', 'AAA')
  .aisle('AAA', 'ABA', 'ACA')
  .aisle('AAA', 'A#A', 'AAA')
  .where('A', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()).setMinGlobalLimited(13)
    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)).or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)).or(Predicates.autoAbilities(definition.getRecipeTypes())))
  .where('B', Predicates.blocks(GTBlocks.FILTER_CASING.get()))
  .where('C',  Predicates.heatingCoils())
  .where('#',  Predicates.controller(Predicates.blocks(definition.get())))
  .build()
)
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/pyrolyse_oven");
event.create("hv_jiagong","multiblock")
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("assembler").recipeTypes("brewery").recipeTypes("canner").recipeTypes("chemical_bath").recipeTypes("fermenter").recipeTypes("mixer").recipeTypes("ore_washer").recipeTypes("packer")
         .recipeTypes("polarizer").recipeTypes("laser_engraver").recipeTypes("circuit_assembler")
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH,
          GTRecipeModifiers.OC_NON_PERFECT,
            (machine, recipe)=> hv(machine,recipe)])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('AAA', 'AAA', 'AAA')
  .aisle('ABA', 'ABA', 'ACA')
  .aisle('AAA', 'A#A', 'AAA')
  .where('C', Predicates.heatingCoils())
  .where('A', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()).setMinGlobalLimited(13)
    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)).or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)).or(Predicates.autoAbilities(definition.getRecipeTypes())))
  .where('B', Predicates.blocks(GTBlocks.CASING_GRATE.get()))
  .where('#', Predicates.controller(Predicates.blocks(definition.get())))
  .build()
)
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/pyrolyse_oven");
event.create("hv_jiare","multiblock")
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS).recipeTypes("electric_furnace").recipeTypes("alloy_smelter").recipeTypes("arc_furnace").recipeTypes("autoclave").recipeTypes("extractor").recipeTypes("fluid_heater")

        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH,
          GTRecipeModifiers.OC_NON_PERFECT,
            (machine, recipe)=> hv(machine,recipe)])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('AAA', 'AAA', 'AAA')
  .aisle('ABA', 'ABA', 'ABA')
  .aisle('AAA', 'A#A', 'AAA')
  .where('A', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()).setMinGlobalLimited(13)
    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)).or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)).or(Predicates.autoAbilities(definition.getRecipeTypes())))
  .where('B', Predicates.heatingCoils())
  .where('#',  Predicates.controller(Predicates.blocks(definition.get())))
  .build()
)
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/pyrolyse_oven");
///////////////////////////////////
    event.create("youji_factory","multiblock")
.machine((holder) => new EnhancedCoilElectricMachine(holder, 16, 0.1, 0, 0, true))
        .recipeModifiers(true, GTRecipeModifiers.PARALLEL_HATCH,(machine, recipe) => EnhancedCoilElectricMachine.recipeModifier(machine, recipe))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("youji_recipe")
        .recipeTypes("large_chemical_reactor")
        .recipeTypes("distillation_tower")
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA')
  .aisle('AAAAA', 'A###A', 'A###A', 'A###A', 'A###A', 'A###A', 'A###A', 'A###A', 'A###A', 'AAAAA')
  .aisle('AABAA', 'A#C#A', 'A#C#A', 'A#C#A', 'A#C#A', 'A#C#A', 'A#C#A', 'A#C#A', 'A#C#A', 'AAAAA')
  .aisle('AABAA', 'A###A', 'A###A', 'A###A', 'A###A', 'A###A', 'A###A', 'A###A', 'A###A', 'AAAAA')
  .aisle('AABAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA')
  .aisle('##B##', '#####', '#####', '#####', '#####', '#####', '#####', '#####', '#####', '#####')
  .aisle('DDBDD', 'DEEED', 'DEEED', 'DEEED', 'DDDDD', '#####', '#####', '#####', '#####', '#####')
  .aisle('DDBDD', 'E###E', 'E###E', 'E###E', 'DDDDD', '#####', '#####', '#####', '#####', '#####')
  .aisle('DDBDD', 'E###E', 'E###E', 'E###E', 'DDDDD', '#####', '#####', '#####', '#####', '#####')
  .aisle('DDDDD', 'E###E', 'E###E', 'E###E', 'DDDDD', '#####', '#####', '#####', '#####', '#####')
  .aisle('DDFDD', 'DEEED', 'DEEED', 'DEEED', 'DDDDD', '#####', '#####', '#####', '#####', '#####')
  .where('C', Predicates.heatingCoils())
  .where('B', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_PIPE.get()))
  .where('F', Predicates.controller(Predicates.blocks(definition.get())))
  .where('E', Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get()))
  .where('D', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get()).or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
  .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)).or(Predicates.autoAbilities(definition.getRecipeTypes())))
  .where('A', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()))
  .where('#', Predicates.any())
  .build()
)
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_inert_ptfe",
            "gtceu:block/multiblock/pyrolyse_oven");

function furn(machine, recipe) {
    if (!(machine instanceof $MetaMachine)) return ModifierFunction.NULL;
    if (!(recipe instanceof $GTRecipe)) return ModifierFunction.NULL;
 
 
 
                            //步差大于等于1时，执行配方加速
    return ModifierFunction.builder()
        .durationMultiplier(0.005).eutMultiplier(0) 
        .build();
        //其他可用的方法
        //.eutMultiplier(double)             能量消耗
        //.outputMultiplier(double)       
        //.chanceMultiplier(double)       
         
}
event.create("mcgougou_steel","multiblock")
        .machine((holder) => new ConfigurableElectricParallelMachine(holder, 16,1,1))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("steel_recipe")        
        .recipeModifiers(true,GTRecipeModifiers.BATCH_MODE,
          GTRecipeModifiers.PARALLEL_HATCH,(machine, recipe) => ConfigurableElectricParallelMachine.recipeModifier(machine, recipe))
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', '#######', '#######', '#######', '#######')
  .aisle('AAAAAAA', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', '#AAAAA#', '#AAAAA#', '#AAAAA#', '#AAAAA#')
  .aisle('AAAAAAA', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', '#ABABA#', '#A#A#A#', '#A#A#A#', '#A#A#A#')
  .aisle('AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', '#AAAAA#', '#AAAAA#', '#AAAAA#', '#AAAAA#')
  .aisle('AAAAAAA', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', '#ABABA#', '#A#A#A#', '#A#A#A#', '#A#A#A#')
  .aisle('AAAAAAA', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', 'A##A##A', '#AAAAA#', '#AAAAA#', '#AAAAA#', '#AAAAA#')
  .aisle('AAACAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', '#######', '#######', '#######', '#######')
  .where('C',  Predicates.controller(Predicates.blocks(definition.get())))
  .where('A', Predicates.blocks('gtceu:firebricks').or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)).or(Predicates.autoAbilities(definition.getRecipeTypes())))
  .where('B', Predicates.blocks('minecraft:campfire'))
  .where('#', Predicates.any())
  .build()
).workableCasingModel("gtceu:block/casings/solid/machine_primitive_bricks",
            "gtceu:block/multiblock/pyrolyse_oven");
event.create("mcgougou_furnace","multiblock")
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("electric_furnace")
        .recipeModifiers([(machine,recipe)=>furn(machine,recipe),GTRecipeModifiers.BATCH_MODE,GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA')
  .aisle('AAAAAAA', 'ABBBBBA', 'A#####A', 'ACCCCCA', 'ACCCCCA', 'ACCCCCA', 'AAAAAAA')
  .aisle('AAAAAAA', 'ABBBBBA', 'A#####A', 'AC###CA', 'AC###CA', 'AC###CA', 'AA###AA')
  .aisle('AAAAAAA', 'ABBBBBA', 'A#####A', 'AC###CA', 'AC###CA', 'AC###CA', 'AA###AA')
  .aisle('AAAAAAA', 'ABBBBBA', 'A#####A', 'AC###CA', 'AC###CA', 'AC###CA', 'AA###AA')
  .aisle('AAAAAAA', 'ABBBBBA', 'A#####A', 'ACCCCCA', 'ACCCCCA', 'ACCCCCA', 'AAAAAAA')
  .aisle('AAAAAAA', 'AAADAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA')
  .where('C', Predicates.blocks('minecraft:furnace'))
  .where('A', Predicates.blocks('minecraft:cobblestone').or(Predicates.autoAbilities(definition.getRecipeTypes())))
  .where('B', Predicates.blocks('minecraft:campfire'))
  .where('D',  Predicates.controller(Predicates.blocks(definition.get())))
  .where('#', Predicates.any())
  .build()
).workableCasingModel("minecraft:block/cobblestone",
            "gtceu:block/multiblock/pyrolyse_oven");

function furn_2(machine, recipe) {
    if (!(machine instanceof $MetaMachine)) return ModifierFunction.NULL;
    if (!(recipe instanceof $GTRecipe)) return ModifierFunction.NULL;
 
 
 
                            //步差大于等于1时，执行配方加速
    return ModifierFunction.builder()
        .durationMultiplier(0.005).eutMultiplier(0.02) 
        .build();
        //其他可用的方法
        //.eutMultiplier(double)             能量消耗
        //.outputMultiplier(double)       
        //.chanceMultiplier(double)       
         
}
event.create("mcgougou_furnace_2","multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("electric_furnace").machine((holder) => new ConfigurableElectricParallelMachine(holder, 10000,1,0.005))
        .recipeModifiers(true,GTRecipeModifiers.BATCH_MODE, GTRecipeModifiers.PARALLEL_HATCH,(machine, recipe) => furn_2(machine, recipe),(machine, recipe) => ConfigurableElectricParallelMachine.recipeModifier(machine, recipe))
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('AAAAA', 'A###A', 'A###A', 'A###A', 'A###A', 'AAAAA')
  .aisle('AAAAA', '#BBB#', '#BBB#', '#BBB#', '#BBB#', 'AAAAA')
  .aisle('AAAAA', '#B#B#', '#B#B#', '#B#B#', '#B#B#', 'AACAA')
  .aisle('AAAAA', '#BBB#', '#BBB#', '#BBB#', '#BBB#', 'AAAAA')
  .aisle('AADAA', 'A###A', 'A###A', 'A###A', 'A###A', 'AAAAA')
  .where('A',  Predicates.blocks(GTBlocks.CASING_INVAR_HEATPROOF.get()).or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
  .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)).or(Predicates.autoAbilities(definition.getRecipeTypes())))
  .where('B', Predicates.heatingCoils())
  .where('D', Predicates.controller(Predicates.blocks(definition.get())))
  .where('C', Predicates.abilities(PartAbility.MUFFLER))
  .where('#', Predicates.any())
  .build()
)
.workableCasingModel("gtceu:block/casings/solid/machine_casing_heatproof",
            "gtceu:block/multiblock/pyrolyse_oven");
/*
event.create('kjs_config_parallel', 'multiblock')
      .machine((holder) => new ConfigurableElectricParallelMachine(holder, 32))
      //32 -> Max_Parallels(int)
      //32 -> 设置最大并行数（int）
      .rotationState(RotationState.ALL)
      .appearanceBlock(GCYMBlocks.CASING_INDUSTRIAL_STEAM)
      .recipeType('forge_hammer')
      .recipeModifier((machine, recipe) => ConfigurableElectricParallelMachine.recipeModifier(machine, recipe), true)
      .addOutputLimit(ItemRecipeCapability.CAP, 1)
      .pattern(definition => FactoryBlockPattern.start()
          .aisle('AAAAAA', 'ACCCCA', 'AAAAAA')
          .aisle('AAAAAA', 'ADDDDA', 'AAAAAA')
          .aisle('AAAAAA', 'ACACCA', 'AAAAAA')
          .aisle('AAA###', 'AKA###', 'AAA###')
          .where('#', Predicates.any())
          .where('K', Predicates.controller(Predicates.blocks(definition.get())))
          .where('D', Predicates.blocks('gtceu:bronze_gearbox'))
          .where('C', Predicates.blocks('gtceu:frame_bronze'))
          .where('A', Predicates.blocks('gtceu:industrial_steam_casing').setMinGlobalLimited(45)
              .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
              .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
              .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1)))
          .build())
      .model(GTMachineModels.createWorkableCasingMachineModel(
          GTCEu.id('block/casings/gcym/industrial_steam_casing'),
          GTCEu.id('block/multiblock/large_chemical_reactor')))
*/
// event.create("mv_machine","multiblock")
//         .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeTypes("electric_furnace")
//         .recipeTypes("alloy_smelter")
//         .recipeTypes("arc_furnace")
//         .recipeTypes("assembler")
//         .recipeTypes("autoclave")
//         .recipeTypes("bender")
//         .recipeTypes("brewery")
//         .recipeTypes("canner")
//         .recipeTypes("centrifuge")
//         .recipeTypes("chemical_bath")
//         .recipeTypes("chemical_reactor")
//         .recipeTypes("compressor")
//         .recipeTypes("cutter")
//         .recipeTypes("distillery")
//         .recipeTypes("electrolyzer")
//         .recipeTypes("electromagnetic_separator")
//         .recipeTypes("extractor")
//         .recipeTypes("extruder")
//         .recipeTypes("fermenter")
//         .recipeTypes("fluid_heater")
//         .recipeTypes("fluid_solidifier")
//         .recipeTypes("forge_hammer")
//         .recipeTypes("forming_press")
//         .recipeTypes("lathe")
//         .recipeTypes("mixer")
//         .recipeTypes("ore_washer")
//         .recipeTypes("packer")
//         .recipeTypes("polarizer")
//         .recipeTypes("laser_engraver") .recipeTypes("sifter")
//         .recipeTypes("thermal_centrifuge")
//         .recipeTypes("wiremill")
//         .recipeTypes("circuit_assembler")
//         .recipeTypes("macerator")
//         .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH,GTRecipeModifiers.OC_PERFECT])
//         .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
//         .pattern(definition => FactoryBlockPattern.start()
//   .aisle('AAA', 'AEA', '#A#')
//   .aisle('AAA', 'ACA', '#D#')
//   .aisle('AAA', 'ACA', '#D#')
//   .aisle('AAA', 'ABA', '#A#')
//   .where('B',Predicates.controller(Predicates.blocks(definition.get())))
//   .where('C', Predicates.blocks('gtceu:steel_pipe_casing'))
//   .where('E', Predicates.blocks('gtceu:steel_gearbox'))
//   .where('A', Predicates.blocks('gtceu:heatproof_machine_casing').setMinGlobalLimited(15)
//   .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
//   .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
//   .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
//   .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
//   .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
//   .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1))
//   .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
//   .where('D', Predicates.abilities(PartAbility.MUFFLER))
//   .where('#', Predicates.any())
//   .build()
// )
//         .workableCasingModel("gtceu:block/casings/solid/machine_casing_heatproof",
//             "gtceu:block/multiblock/pyrolyse_oven");
})
 
GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('advanced_turbine', 'multiblock')
//         .rotationState(RotationState.NON_Y_AXIS)
//         .machine((holder) => new $LargeTurbineMachine(holder, GTValues.HV))
//         //LargeTurbineMachine(IMachineBlockEntity holder, int tier)
//         //tier 电压等级，是发电量计算的变量之一
//         .recipeType('steam_turbine')
//         //注册recipeType，这里不再给出示范
//         .generator(true)
//         .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, (machine, recipe) => $LargeTurbineMachine.recipeModifier(machine, recipe)])
event.create('mv_generator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        //LargeTurbineMachine(IMachineBlockEntity holder, int tier)
        //tier 电压等级，是发电量计算的变量之一
        .recipeType('mv_generator_recipe')
        //注册recipeType，这里不再给出示范
        .generator(true)
        .appearanceBlock(GTBlocks.CASING_STAINLESS_TURBINE)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('AAA', 'AAA', 'AAA')
  .aisle('AAA', 'A#A', 'AAA')
  .aisle('AAA', 'A#A', 'ACA')
  .aisle('AAA', 'A#A', 'ACA')
  .aisle('AAA', 'A#A', 'AAA')
  .aisle('AAA', 'ADA', 'AAA')
  .where('D',Predicates.controller(Predicates.blocks(definition.get())))
  .where('A', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
  .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)).or(Predicates.abilities(PartAbility.IMPORT_ITEMS)).or(Predicates.abilities(PartAbility.EXPORT_ITEMS)).or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
.or(Predicates.abilities(PartAbility.OUTPUT_ENERGY)))
  // .where('B', Predicates.abilities(PartAbility.IMPORT_FLUIDS))
  .where('C', Predicates.abilities(PartAbility.MUFFLER))
  .where('#', Predicates.air())
  .build()
)
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/pyrolyse_oven");
event.create('hv_generator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        //LargeTurbineMachine(IMachineBlockEntity holder, int tier)
        //tier 电压等级，是发电量计算的变量之一
        .recipeType('hv_generator_recipe')
        //注册recipeType，这里不再给出示范
        .generator(true)
        .appearanceBlock(GTBlocks.CASING_STAINLESS_TURBINE)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('###########AAAAA', '###########BBBBB', '###########BBBBB', '################', '################')
  .aisle('##########AAAAAA', '###########CCCCC', '###########CCCCC', '###########BBBBB', '################')
  .aisle('DDDDDDDDD#AAAAAA', 'EEEEEEEEE#######', 'EEEEEEEEE#######', 'EEEEEEEEE##CCCCC', 'EEEEEEEEE##BBBBB')
  .aisle('DDDDDDDDD#AAAAAA', 'E#######E#######', 'E#######E#######', 'E#######E#######', 'EFEFEFEFE##CCCCC')
  .aisle('DDDDDDDDD#AAAAAA', 'E#######E#######', 'EGGGGGGGGGGGGGGG', 'E#######E#######', 'EEFEFEFEE##CCCCC')
  .aisle('DDDDDDDDD#AAAAAA', 'E#######E#######', 'E#######E#######', 'E#######E#######', 'EFEFEFEFE##CCCCC')
  .aisle('DDDDDDDDD#AAAAAA', 'EEEEHEEEE#######', 'EEEEEEEEE#######', 'EEEEEEEEE##CCCCC', 'EEEEEEEEE##BBBBB')
  .aisle('##########AAAAAA', '###########CCCCC', '###########CCCCC', '###########BBBBB', '################')
  .aisle('###########AAAAA', '###########BBBBB', '###########BBBBB', '################', '################')
  .where('C', Predicates.blocks(GTBlocks.COIL_KANTHAL.get()))
  .where('H', Predicates.controller(Predicates.blocks(definition.get())))
  .where('G', Predicates.blocks('gtceu:tuag_hex_wire'))
  .where('B', Predicates.blocks(GTBlocks.CASING_STEEL_TURBINE.get()))
  .where('A', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()))
  .where('D', Predicates.blocks('gtceu:steel_firebox_casing'))
  .where('E', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)).or(Predicates.abilities(PartAbility.EXPORT_ITEMS)).or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)).or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
.or(Predicates.abilities(PartAbility.OUTPUT_ENERGY)))
  .where('F', Predicates.abilities(PartAbility.MUFFLER))
  .where('#', Predicates.any())
  .build()
)
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/pyrolyse_oven");
event.create('ev_generator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        //LargeTurbineMachine(IMachineBlockEntity holder, int tier)
        //tier 电压等级，是发电量计算的变量之一
        .recipeType('ev_generator_recipe')
        //注册recipeType，这里不再给出示范
        .generator(true)
        .appearanceBlock(GTBlocks.CASING_STAINLESS_TURBINE)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('AAAAAAAAAAAAAAAA', 'ABBBBABBBBABBBBA', 'ABBBBABBBBABBBBA', 'ABBBBABBBBABBBBA', 'ABBBBABBBBABBBBA', 'AAAAAAAAAAAAAAAA', 'ABBBBABBBBABBBBA', 'ABBBBABBBBABBBBA', 'ABBBBABBBBABBBBA', 'ABBBBABBBBABBBBA', 'AAAAAAAAAAAAAAAA', 'ABBBBABBBBABBBBA', 'ABBBBABBBBABBBBA', 'ABBBBABBBBABBBBA', 'ABBBBABBBBABBBBA', 'AAAAAAAAAAAAAAAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'A##############A', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'A##############A', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'AAAAAAAAAAAAAAAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'A##############A', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'A##############A', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'AADDAAAAAAAADDAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'A##############A', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'A##############A', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'AADDAAAAAAAADDAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'A##############A', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'A##############A', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'CCCCC#CCCC#CCCCC', 'AAAAAAAAAAAAAAAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'AAAAAAAAAAAAAAAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A##############A', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A##############A', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'AAAAAAAAAAAAAAAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A##############A', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A##############A', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'AADDAAAAAAAADDAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A##############A', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A##############A', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'AADDAAAAAAAADDAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A##############A', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A##############A', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'AAAAAAAAAAAAAAAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'A##############A', 'AAAAAAAAAAAAAAAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'AAAAAAAAAAAAAAAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'B##############B', 'AAAAAAAAAAAAAAAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'AAAAAAAAAAAAAAAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A#############AA', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A#############AA', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'AAAAAAAAAAAAAAAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A#############AA', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A#############AA', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'AADDAAAAAAAADDAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A#############AA', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A#############AA', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'AADDAAAAAAAADDAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A#############AA', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A#############AA', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'AAAAAAAAAAAAAAAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'A#############AA', 'AAAAAAAAAAAAAAAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A#############AA', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A#############AA', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'AAAAAAAAAAAAAAAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A#############AA', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A#############AA', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'AADDAAAAAAAADDAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A#############AA', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A#############AA', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'AADDAAAAAAAADDAA')
  .aisle('AAAAAAAAAAAAAAAA', 'CCCCCCCCCCCCCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A#############AA', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'A#############AA', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'CCCCC######CCCCC', 'AAAAAAAAAAAAAAAA')
  .aisle('EAAAAAAAAAAAAAAA', 'ABBBBCCCCCCBBBBA', 'ABBBBAAAAAABBBBA', 'ABBBBAAAAAABBBBA', 'ABBBBAAAAAABBBBA', 'AAAAAAAAAAAAAAAA', 'ABBBBAAAAAABBBBA', 'ABBBBAAAAAABBBBA', 'ABBBBAAAAAABBBBA', 'ABBBBAAAAAABBBBA', 'AAAAAAAAAAAAAAAA', 'ABBBBAAAAAABBBBA', 'ABBBBAAAAAABBBBA', 'ABBBBAAAAAABBBBA', 'ABBBBAAAAAABBBBA', 'AAAAAAAAAAAAAAAA')
  .where('A', Predicates.blocks(GTBlocks.CASING_TITANIUM_STABLE.get()).or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)).or(Predicates.abilities(PartAbility.EXPORT_ITEMS)).or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)).or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
.or(Predicates.abilities(PartAbility.OUTPUT_ENERGY)).or(Predicates.abilities(PartAbility.OUTPUT_LASER)))
  .where('E', Predicates.controller(Predicates.blocks(definition.get())))
  .where('C', Predicates.blocks('gtceu:titanium_firebox_casing'))
  .where('B', Predicates.blocks(GTBlocks.CASING_ENGINE_INTAKE.get()))
  .where('D', Predicates.blocks('gtceu:ev_muffler_hatch'))
  .where('#', Predicates.any())
  .build()
)
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_stable_titanium",
            "gtceu:block/multiblock/pyrolyse_oven");
})
const $ParallelHatchPartMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.part.ParallelHatchPartMachine"); 
const $RecipeLogic = Java.loadClass("com.gregtechceu.gtceu.api.machine.trait.RecipeLogic" );
GTCEuStartupEvents.registry("gtceu:machine", (event) => {
event.create('thread_hatch', 'custom')
    .tiers(GTValues.UV,GTValues.UHV,GTValues.UEV, GTValues.UIV,GTValues.UXV)
    .machine((holder, tier, tankScaling) => new ThreadHatchPartMachine(holder, tier))
    .definition((tier, builder) => builder
        .langValue(GTValues.VNF[tier] + '线程控制仓')
        .rotationState(RotationState.ALL)
        .abilities(GTUFPartAbility.THREAD_HATCH)
        .workableTieredHullModel(GTCEu.id('block/machines/parallel_hatch_mk4'))
        .tooltips(Component.translatable('gtuf.machine.thread_hatch.tooltip', 1 << (tier - 6)),
            Component.translatable('gtceu.part_sharing.disabled')))
  event
      .create("new_parallel_hatch", "custom")
      .tiers(GTValues.UEV, GTValues.UIV,GTValues.UXV)
      .machine((holder, tier, tankScaling) => {
        return new $ParallelHatchPartMachine(holder, tier);
      })
      .definition((tier, builder) => {
        let name = "Simple";
        switch (tier) {
          case GTValues.UEV:
            name = "UEV";
            break;
          case GTValues.UIV:
            name = "UIV";
            break;
          case GTValues.UXV:
            name = "UXV";
            break;
        }
        builder
            .langValue(name + " 并行控制仓")
            .rotationState(RotationState.ALL)
            .abilities(PartAbility.PARALLEL_HATCH)
            .modelProperty($RecipeLogic.STATUS_PROPERTY, $RecipeLogic.Status.IDLE)
            .model(
                    GTMachineModels.createWorkableTieredHullMachineModel(
                    GTCEu.id("block/machines/parallel_hatch_mk4")
                )[
                    "andThen(com.gregtechceu.gtceu.api.registry.registrate.MachineBuilder$ModelInitializer)"
                    ]((ctx, prov, model) => {
                  model.addReplaceableTextures("bottom", "top", "side");
                })
            )
      });
});
