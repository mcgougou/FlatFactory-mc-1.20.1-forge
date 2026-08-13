// priority: 97
ServerEvents.recipes(event=>{
//mo
event.remove({type:"minecraft:smelting",output:'gtceu:molybdenum_ingot'})
event.remove({type:"minecraft:blasting",output:'gtceu:molybdenum_ingot'})
event.replaceOutput({ type:'gtceu:thermal_centrifuge' }, 'gtceu:molybdenum_dust', 'gtceu:molybdenite_dust')  
event.replaceOutput({ type:'gtceu:ore_washer' }, 'gtceu:molybdenum_dust', 'gtceu:molybdenite_dust')  
event.replaceOutput({ type:'gtceu:forge_hammer' }, 'gtceu:molybdenum_dust', 'gtceu:molybdenite_dust')  
event.replaceOutput({ type:'gtceu:macerator' }, 'gtceu:molybdenum_dust', 'gtceu:molybdenite_dust')  
    //ca
event.replaceOutput({ type:'gtceu:centrifuge' }, 'gtceu:calcium_dust', 'gtceu:calcite_dust')      
    //nd

event.replaceOutput({ type:'gtceu:thermal_centrifuge' }, 'gtceu:neodymium_dust', 'gtceu:rare_earth_dust')  
event.replaceOutput({ type:'gtceu:ore_washer' }, 'gtceu:neodymium_dust', 'gtceu:rare_earth_dust')  
event.replaceOutput({ type:'gtceu:macerator' }, 'gtceu:neodymium_dust', 'gtceu:rare_earth_dust')  
event.replaceOutput({ type:'gtceu:centrifuge' }, 'gtceu:neodymium_dust', 'gtceu:rare_earth_dust')  
//pt
event.replaceOutput({ type:'gtceu:chemical_bath' }, 'gtceu:platinum_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ type:'gtceu:forge_hammer' }, 'gtceu:platinum_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ type:'gtceu:ore_washer' }, 'gtceu:platinum_dust', 'gtceu:platinum_group_sludge_dust')

//pd
event.replaceOutput({ type:'gtceu:chemical_bath' }, 'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ type:'gtceu:thermal_centrifuge' }, 'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ type:'gtceu:ore_washer' }, 'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
    //ti

event.replaceOutput({ type:'gtceu:centrifuge' }, 'gtceu:rutile_dust', 'gtceu:hematite_dust')
event.replaceOutput({ type:'gtceu:chemical_bath' }, 'gtceu:rutile_dust', 'gtceu:hematite_dust')
event.replaceOutput({ type:'gtceu:macerator' }, 'gtceu:rutile_dust', 'gtceu:hematite_dust')
event.replaceOutput({ type:'gtceu:thermal_centrifuge' }, 'gtceu:rutile_dust', 'gtceu:hematite_dust')
    //mn
event.replaceOutput({ type:'gtceu:macerator' }, 'gtceu:manganese_dust', 'gtceu:pyrolusite_dust')
event.replaceOutput({ type:'gtceu:ore_washer' }, 'gtceu:manganese_dust', 'gtceu:pyrolusite_dust')
event.replaceOutput({ type:'gtceu:thermal_centrifuge' }, 'gtceu:manganese_dust', 'gtceu:pyrolusite_dust')
event.remove({type:"minecraft:smelting",output:"gtceu:manganese_ingot"})
event.remove({type:"minecraft:blasting",output:"gtceu:manganese_ingot"})
//al
event.replaceOutput({ type:'gtceu:macerator' }, 'gtceu:aluminium_dust', 'gtceu:sapphire_dust')
event.replaceOutput({ type:'gtceu:ore_washer' }, 'gtceu:aluminium_dust', 'gtceu:sapphire_dust')
event.replaceOutput({ type:'gtceu:thermal_centrifuge' }, 'gtceu:aluminium_dust', 'gtceu:sapphire_dust')
//k
event.replaceOutput({ type:'gtceu:thermal_centrifuge' }, 'gtceu:potassium_dust', 'gtceu:rock_salt_dust')
event.replaceOutput({ type:'gtceu:ore_washer' }, 'gtceu:potassium_dust', 'gtceu:rock_salt_dust')
event.replaceOutput({ type:'gtceu:macerator' }, 'gtceu:potassium_dust', 'gtceu:rock_salt_dust')
//ca
event.replaceOutput({ type:'gtceu:thermal_centrifuge' }, 'gtceu:calcium_dust', 'gtceu:calcite_dust')
event.replaceOutput({ type:'gtceu:ore_washer' }, 'gtceu:calcium_dust', 'gtceu:calcite_dust')
event.replaceOutput({ type:'gtceu:macerator' }, 'gtceu:calcium_dust', 'gtceu:calcite_dust')
//ga
event.replaceOutput({ type:'gtceu:thermal_centrifuge' }, 'gtceu:gallium_dust', 'gtceu:bauxite_dust')
event.replaceOutput({ type:'gtceu:ore_washer' },  'gtceu:gallium_dust', 'gtceu:bauxite_dust')
event.replaceOutput({ type:'gtceu:chemical_bath' },  'gtceu:gallium_dust', 'gtceu:bauxite_dust')
//si
event.replaceOutput({ type:'gtceu:thermal_centrifuge' }, 'gtceu:silicon_dust', 'gtceu:silicon_dioxide_dust')
//cr
event.replaceOutput({ type:'gtceu:ore_washer' },  'gtceu:chromium_dust', 'gtceu:chromite_dust')
event.replaceOutput({ type:'gtceu:macerator' },  'gtceu:chromium_dust', 'gtceu:chromite_dust')
//na
event.replaceOutput({ type:'gtceu:ore_washer' },  'gtceu:sodium_dust', 'gtceu:salt_dust')
event.replaceOutput({ type:'gtceu:macerator' },  'gtceu:sodium_dust', 'gtceu:salt_dust')
//sb
event.replaceOutput({ type:'gtceu:ore_washer' },  'gtceu:antimony_dust', 'gtceu:stibnite_dust')
event.replaceOutput({ type:'gtceu:macerator' },  'gtceu:antimony_dust', 'gtceu:stibnite_dust')
event.replaceOutput({ type:'gtceu:thermal_centrifuge' },  'gtceu:antimony_dust', 'gtceu:stibnite_dust')
event.remove({type:"minecraft:smelting",output:"gtceu:antimony_ingot"})
event.remove({type:"minecraft:blasting",output:"gtceu:antimony_ingot"})
//pb

event.replaceOutput({ type:'gtceu:ore_washer' },  'gtceu:lead_dust','gtceu:galena_dust')
event.replaceOutput({ type:'gtceu:macerator' },  'gtceu:lead_dust', 'gtceu:galena_dust')
event.replaceOutput({ type:'gtceu:thermal_centrifuge' },  'gtceu:lead_dust', 'gtceu:galena_dust')
event.remove({type:"minecraft:smelting",output:"gtceu:lead_ingot"})
event.remove({type:"minecraft:blasting",output:"gtceu:lead_ingot"})
//mg

event.replaceOutput({type:'gtceu:ore_washer' },  'gtceu:magnesium_dust','gtceu:magnesite_dust')
event.replaceOutput({ type:'gtceu:macerator'  },  'gtceu:magnesium_dust','gtceu:magnesite_dust')
event.replaceOutput({ type:'gtceu:centrifuge'  },  'gtceu:magnesium_dust','gtceu:magnesite_dust')
event.replaceOutput({ type:'gtceu:thermal_centrifuge' },  'gtceu:magnesium_dust','gtceu:magnesite_dust')
event.remove({type:"minecraft:smelting",output:'gtceu:magnesium_dust'})
event.remove({type:"minecraft:blasting",output:'gtceu:magnesium_dust'})
})