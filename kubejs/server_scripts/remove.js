// priority: 9
ServerEvents.recipes(event=>{
    const remove_id =[
        'sbmgrowmeal:growmeal',
        'minecraft:furnace',
        'gtceu:shaped/crafting_table',
        'gtceu:shaped/gear_wood',
        'gtceu:electrolyzer/bentonite_electrolysis',
        'gtceu:blasting/smelt_raw_magnesite_ore_to_ingot',
        'gtceu:electrolyzer/decomposition_electrolyzing_olivine',
        'gtceu:electrolyzer/decomposition_electrolyzing_glauconite_sand',
        'gtceu:electrolyzer/decomposition_electrolyzing_almandine',
        'gtceu:electrolyzer/decomposition_electrolyzing_pyrope',
        'gtceu:centrifuge/decomposition_centrifuging__goethite',
        'gtceu:centrifuge/decomposition_centrifuging__yellow_limonite',
        'gtceu:electrolyzer/decomposition_electrolyzing_malachite',
        'gtceu:electrolyzer/decomposition_electrolyzing_soapstone',
        'gtceu:electrolyzer/decomposition_electrolyzing_talc',
        'gtceu:electrolyzer/decomposition_electrolyzing_glauconite_sand',
        'expatternprovider:oversize_interface',
        'expatternprovider:eis',
        'expatternprovider:ei',
        'ae2:network/blocks/controller',
        'expatternprovider:epp',
        'ad_astra:compressor',
        'ad_astra:etrionic_blast_furnace',
        'ad_astra:compressing/iron_plate_from_compressing_iron_ingot',
        'ad_astra:compressing/iron_plate_from_compressing_iron_block',
        'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals',
        'gtceu:electrolyzer/decomposition_electrolyzing_sapphire',
        'gtceu:electrolyzer/decomposition_electrolyzing_alunite',
        'gtceu:electrolyzer/decomposition_electrolyzing_lazurite',
        'gtceu:electrolyzer/decomposition_electrolyzing_lepidolite',
        'gtceu:electrolyzer/decomposition_electrolyzing_spodumene',
        'gtceu:electrolyzer/decomposition_electrolyzing_ruby',
        'gtceu:electrolyzer/decomposition_electrolyzing_mica',
        'gtceu:electrolyzer/decomposition_electrolyzing_granite_red',
        'gtceu:electrolyzer/decomposition_electrolyzing_grossular',
        'gtceu:electrolyzer/decomposition_electrolyzing_kyanite',
        'gtceu:electrolyzer/decomposition_electrolyzing_sodalite',
        'gtceu:electrolyzer/decomposition_electrolyzing_pollucite',
        'gtceu:electrolyzer/decomposition_electrolyzing_topaz',
        'gtceu:electrolyzer/decomposition_electrolyzing_potassium_feldspar',
        'gtceu:electrolyzer/decomposition_electrolyzing_blue_topaz',
        'gtceu:electrolyzer/bauxite_electrolysis',
        'gtceu:electrolyzer/decomposition_electrolyzing_clay',
        'gtceu:electrolyzer/decomposition_electrolyzing_spessartine',
        'gtceu:electrolyzer/decomposition_electrolyzing_aluminium_sulfite',
        'gtceu:electrolyzer/decomposition_electrolyzing_watertight_steel',
        'gtceu:electrolyzer/decomposition_electrolyzing_emerald',
        'gtceu:electrolyzer/decomposition_electrolyzing_zeolite',
        'gtceu:electrolyzer/decomposition_electrolyzing_green_sapphire',
        'gtceu:centrifuge/ruby_slurry_centrifuging',
        'gtceu:centrifuge/sapphire_slurry_centrifuging',
        'gtceu:electrolyzer/decomposition_electrolyzing_tantalite',
        'gtceu:electrolyzer/decomposition_electrolyzing_pyrolusite',
        'gtceu:electrolyzer/decomposition_electrolyzing_biotite',
        'gtceu:electrolyzer/decomposition_electrolyzing_magnalium',
        'gtceu:mixer/bauxite_slurry_from_crushed_bauxite',
        'gtceu:mixer/bauxite_slurry_from_washed_bauxite',
        'gtceu:cracker/cracked_bauxite_slurry',
        'gtceu:large_chemical_reactor/bauxite_sludge_from_slurry',
        'gtceu:smelting/smelt_dust_pyrolusite_to_ingot',
        'gtceu:electrolyzer/decomposition_electrolyzing_obsidian',
        'gtceu:electrolyzer/decomposition_electrolyzing_asbestos',
        'gtceu:electrolyzer/decomposition_electrolyzing_magnesite',
        'gtceu:electrolyzer/decomposition_electrolyzing_fullers_earth',
        'gtceu:electrolyzer/decomposition_electrolyzing_magnesia',
        'gtceu:electrolyzer/decomposition_electrolyzing_magnesium_diboride',
        'gtceu:mixer/manganese_phosphide',
        'gtceu:electric_blast_furnace/blast_manganese_phosphide',
        'gtceu:electric_blast_furnace/blast_manganese_phosphide_gas',
        'gtceu:alloy_blast_smelter/manganese_phosphide_gas',
        'gtceu:alloy_blast_smelter/manganese_phosphide',
        'gtceu:alloy_smelter/alloy_smelt_tuag_dust_to_block',
        'gtceu:electric_blast_furnace/aluminium_from_ruby_gem',
        'gtceu:electric_blast_furnace/aluminium_from_green_sapphire_dust',
        'gtceu:electric_blast_furnace/aluminium_from_ruby_dust',
        'gtceu:electric_blast_furnace/aluminium_from_sapphire_dust',
        'gtceu:electric_blast_furnace/aluminium_from_green_sapphire_gem',
        'gtceu:electric_blast_furnace/aluminium_from_sapphire_gem',
        'gtceu:chemical_reactor/sulfuric_acid_from_sulfide',
        'gtceu:large_chemical_reactor/sulfuric_acid_from_sulfur',
        'gtceu:electrolyzer/decomposition_electrolyzing_manganese_phosphide',
        'gtceu:electrolyzer/decomposition_electrolyzing_tantalite',
        'gtceu:electrolyzer/decomposition_electrolyzing_spessartine',
        'gtceu:electrolyzer/decomposition_electrolyzing_pyrolusite',
        'ae2:shaped/not_so_mysterious_cube',
        'gtceu:electrolyzer/decomposition_electrolyzing_cobaltite',
        'gtceu:electrolyzer/decomposition_electrolyzing_arsenic_trioxide',
        'gtceu:centrifuge/decomposition_centrifuging__vanadium_magnetite',
        'gtceu:electrolyzer/decomposition_electrolyzing_potassium_ferrocyanide',
        'gtceu:electrolyzer/decomposition_electrolyzing_rock_salt',
        'gtceu:electrolyzer/decomposition_electrolyzing_potassium_carbonate',
        'gtceu:electrolyzer/decomposition_electrolyzing_saltpeter',
        'gtceu:electrolyzer/decomposition_electrolyzing_potassium_cyanide',
        'gtceu:electrolyzer/decomposition_electrolyzing_potassium_sulfate',
        'gtceu:electrolyzer/decomposition_electrolyzing_potassium_dichromate',
        'gtceu:electrolyzer/decomposition_electrolyzing_ender_pearl',
        'gtceu:electrolyzer/decomposition_electrolyzing_potassium_iodide',
        'gtceu:electrolyzer/decomposition_electrolyzing_potassium_hydroxide',
        'gtceu:electrolyzer/decomposition_electrolyzing_potash',
        'gtceu:large_chemical_reactor/potassium_hydroxide',
        'gtceu:chemical_reactor/ammonia_from_elements',
        'gtceu:electrolyzer/decomposition_electrolyzing_uvarovite',
        'gtceu:electrolyzer/decomposition_electrolyzing_calcium_carbonate',
        'gtceu:electrolyzer/decomposition_electrolyzing_mercury_barium_calcium_cuprate',
        'gtceu:electrolyzer/decomposition_electrolyzing_calcium_chloride',
        'gtceu:electrolyzer/decomposition_electrolyzing_gypsum',
        'gtceu:electrolyzer/bone_meal_electrolysis',
        'gtceu:electrolyzer/decomposition_electrolyzing_calcium_hydroxide',
        'gtceu:electrolyzer/decomposition_electrolyzing_andradite',
        'gtceu:electrolyzer/decomposition_electrolyzing_calcium_ferrocyanide',
        'gtceu:electrolyzer/decomposition_electrolyzing_powellite',
        'gtceu:electrolyzer/decomposition_electrolyzing_calcium_phosphide',
        'gtceu:electrolyzer/decomposition_electrolyzing_calcite',
        'gtceu:electrolyzer/decomposition_electrolyzing_pyrochlore',
        'gtceu:electrolyzer/apatite_electrolysis',
        'gtceu:electrolyzer/decomposition_electrolyzing_quicklime',
        'gtceu:electrolyzer/decomposition_electrolyzing_basaltic_mineral_sand',
        'gtceu:electrolyzer/decomposition_electrolyzing_granitic_mineral_sand',
        'gtceu:chemical_reactor/potassium_hydroxide',
        'gtceu:electrolyzer/decomposition_electrolyzing_salt',
        'gtceu:electrolyzer/decomposition_electrolyzing_lithium_chloride',
        'gtceu:electrolyzer/raw_platinum_separation',
        'gtceu:electric_blast_furnace/soda_ash_from_calcite',
        'gtceu:electrolyzer/trona_electrolysis',
        'gtceu:electrolyzer/decomposition_electrolyzing_diatomite',
        'gtceu:electrolyzer/soda_ash_from_bicarbonate',
        'gtceu:electrolyzer/decomposition_electrolyzing_soda_ash',
        'gtceu:centrifuge/air_separation',
        'gtceu:electrolyzer/decomposition_electrolyzing_sodium_nitrite',
        'gtceu:electrolyzer/decomposition_electrolyzing_ammonia',
        'gtceu:electrolyzer/decomposition_electrolyzing_nitric_oxide',
        'gtceu:electrolyzer/decomposition_electrolyzing_formamide',
        'gtceu:electrolyzer/decomposition_electrolyzing_glyceryl_trinitrate',
        'gtceu:electrolyzer/decomposition_electrolyzing_dinitrogen_tetroxide',
        'gtceu:electrolyzer/decomposition_electrolyzing_niobium_nitride',
        'gtceu:electrolyzer/decomposition_electrolyzing_ammonium_formate',
        'gtceu:electrolyzer/decomposition_electrolyzing_nitrous_oxide',
        'gtceu:electrolyzer/decomposition_electrolyzing_nitrosyl_chloride',
        'gtceu:electrolyzer/decomposition_electrolyzing_monochloramine',
        'gtceu:electrolyzer/decomposition_electrolyzing_nitrogen_dioxide',
        'gtceu:electrolyzer/decomposition_electrolyzing_hydrogen_cyanide',
        'gtceu:centrifuge/green_sapphire_slurry_centrifuging',
        'gtceu:electrolyzer/decomposition_electrolyzing_ammonium_chloride',
        'gtceu:electrolyzer/rhodium_sulfate_separation',
        'gtceu:large_chemical_reactor/sulfuric_acid_from_sulfide',
        'gtceu:centrifuge/decomposition_centrifuging__realgar',
        'gtceu:electrolyzer/decomposition_electrolyzing_gallium_sulfide',
        'gtceu:electrolyzer/sphalerite_electrolysis',
        'gtceu:centrifuge/decomposition_centrifuging__gallium_arsenide',
        'gtceu:centrifuge/decomposition_centrifuging__indium_gallium_phosphide',
        'gtceu:centrifuge/bauxite_sludge_centrifuge',
        'gtceu:mixer/gallium_arsenide',
        'gtceu:shaped/good_circuit_board',
        'gtceu:chemical_reactor/iron_3_chloride',
        'gtceu:large_chemical_reactor/iron_3_chloride',
        'gtceu:electrolyzer/sodium_bisulfate_electrolysis',
        'gtceu:electrolyzer/decomposition_electrolyzing_ferrosilite',
        'gtceu:centrifuge/decomposition_centrifuging__molybdenum_disilicide',
        'gtceu:electrolyzer/decomposition_electrolyzing_silicon_dioxide',
        'gtceu:electrolyzer/decomposition_electrolyzing_borosilicate_glass',
        'gtceu:electrolyzer/decomposition_electrolyzing_amethyst',
        'gtceu:electrolyzer/sand_electrolysis',
        'gtceu:electrolyzer/decomposition_electrolyzing_echo_shard',
        'gtceu:chemical_reactor/sulfur_trioxide',
        'gtceu:large_chemical_reactor/sulfur_trioxide',
        'gtceu:electromagnetic_separator/bauxite_slag_separation',
        'gtceu:electrolyzer/decomposition_electrolyzing_chromite',
        'gtceu:electrolyzer/decomposition_electrolyzing_chromium_trioxide',
        'gtceu:electrolyzer/decomposition_electrolyzing_cupric_oxide',
        'gtceu:electric_blast_furnace/blast_silicon_dioxide',
        'gtceu:electrolyzer/decomposition_electrolyzing_phosphate',
        'gtceu:chemical_reactor/saltpeter',
        'gtceu:large_chemical_reactor/saltpeter',
        'gtceu:large_chemical_reactor/polyethylene_from_tetrachloride_air',
        'gtceu:large_chemical_reactor/polyethylene_from_tetrachloride_oxygen',
        'gtceu:alloy_smelter/alloy_smelt_vanadium_pentoxide_dust_to_block',
        'gtceu:chemical_reactor/sulfuric_acid_from_trioxide',
        'gtceu:electrolyzer/decomposition_electrolyzing_sulfur_trioxide',
        'gtceu:electrolyzer/decomposition_electrolyzing_barite',
        'gtceu:electrolyzer/decomposition_electrolyzing_chalcopyrite',
        'gtceu:electrolyzer/decomposition_electrolyzing_pyrite',
        'gtceu:electrolyzer/decomposition_electrolyzing_galena',
        'gtceu:electrolyzer/decomposition_electrolyzing_pentlandite',
        'gtceu:electrolyzer/decomposition_electrolyzing_barium_sulfide',
        'gtceu:electrolyzer/decomposition_electrolyzing_chalcocite',
        'gtceu:electrolyzer/decomposition_electrolyzing_molybdenite',
        'gtceu:electrolyzer/decomposition_electrolyzing_bornite',
        'gtceu:electrolyzer/decomposition_electrolyzing_cooperite',
        'gtceu:electrolyzer/decomposition_electrolyzing_sulfur_dioxide',
        'gtceu:electrolyzer/decomposition_electrolyzing_sodium_persulfate',
        'gtceu:electrolyzer/decomposition_electrolyzing_mirabilite',
        'gtceu:electrolyzer/decomposition_electrolyzing_tetrahedrite',
        'gtceu:chemical_reactor/polyethylene_from_air',
        'gtceu:chemical_reactor/polyethylene_from_oxygen',
        'gtceu:electrolyzer/distilled_water_electrolysis',
        'gtceu:large_chemical_reactor/polyethylene_from_air',
        'gtceu:large_chemical_reactor/polyethylene_from_oxygen',
        'gtceu:electrolyzer/decomposition_electrolyzing_cassiterite',
        'gtceu:electrolyzer/decomposition_electrolyzing_indium_tin_barium_titanium_cuprate',
        'gtceu:electrolyzer/decomposition_electrolyzing_cassiterite_sand',
        'gtceu:electrolyzer/decomposition_electrolyzing_yttrium_barium_cuprate',
        'gtceu:electrolyzer/diamond_electrolysis',
        'gtceu:electrolyzer/decomposition_electrolyzing_massicot',
        'gtceu:electrolyzer/decomposition_electrolyzing_perlite',
        'gtceu:electrolyzer/decomposition_electrolyzing_concrete',
        'gtceu:electrolyzer/decomposition_electrolyzing_nickel_zinc_ferrite',
        'gtceu:electrolyzer/decomposition_electrolyzing_blackstone',
        'gtceu:electrolyzer/decomposition_electrolyzing_zincite',
        'gtceu:electrolyzer/decomposition_electrolyzing_tantalum_carbide',
        'gtceu:electrolyzer/decomposition_electrolyzing_gunpowder',
        'gtceu:electrolyzer/decomposition_electrolyzing_antimony_trioxide',
        'gtceu:centrifuge/decomposition_centrifuging__stibnite',
        'gtceu:electrolyzer/decomposition_electrolyzing_fluoroantimonic_acid',
        'gtceu:electrolyzer/graphite_electrolysis',
        'gtceu:electrolyzer/decomposition_electrolyzing_wulfenite',
        'gtceu:forge_hammer/hammer_lead_refined_ore_to_dust',
        'gtceu:centrifuge/centrifuge_lead_pure_dust_to_dust',
        'gtceu:centrifuge/centrifuge_lead_dirty_dust_to_dust',
        'gtceu:centrifuge/decomposition_centrifuging__lead_zinc_solution',
        'gtceu:electrolyzer/decomposition_electrolyzing_borax',
        'gtceu:electrolyzer/decomposition_electrolyzing_sodium_sulfide',
        'gtceu:electrolyzer/sodium_hydroxide_electrolysis',
        'gtceu:shaped/maintenance_hatch_cleaning',
        'gtceu:large_chemical_reactor/salt_from_magnesium_chloride',
        'gtceu:chemical_reactor/salt_from_magnesium_chloride',
        'gtceu:chemical_reactor/chloroform',
        'gtceu:large_chemical_reactor/chloroform',
        'gtceu:chemical_reactor/chloromethane_from_methane',
        'gtceu:large_chemical_reactor/chloromethane_from_methane',
        'gtceu:chemical_reactor/methanol_from_dioxide',
        'gtceu:chemical_reactor/methanol_from_carbon',
        'gtceu:chemical_reactor/methanol_from_monoxide',
        'gtceu:large_chemical_reactor/methanol_from_dioxide',
        'gtceu:large_chemical_reactor/methanol_from_carbon',
        'gtceu:large_chemical_reactor/methanol_from_monoxide',
        //'gtceu:distillery/distilll_cxhxclx_mix_to_ccl4',
        'gtceu:chemical_reactor/tetrafluoroethylene_from_chloroform',
        'gtceu:large_chemical_reactor/tetrafluoroethylene_from_chloroform',
        'gtceu:chemical_reactor/ptfe_from_air',
        'gtceu:chemical_reactor/ptfe_from_oxygen',
        'gtceu:large_chemical_reactor/ptfe_from_oxygen',
        'gtceu:large_chemical_reactor/ptfe_from_tetrachloride_air',
        'gtceu:large_chemical_reactor/ptfe_from_tetrachloride_oxygen', 
        'gtceu:large_chemical_reactor/ptfe_from_air',
        'gtceu:chemical_reactor/vinyl_chloride_from_hydrochloric',
        'gtceu:chemical_reactor/vinyl_chloride_from_chlorine',
        'gtceu:chemical_reactor/vinyl_chloride_from_ethane',
        'gtceu:large_chemical_reactor/vinyl_chloride_from_chlorine',
        'gtceu:large_chemical_reactor/vinyl_chloride_from_hydrochloric',
        'gtceu:large_chemical_reactor/vinyl_chloride_from_ethane',
        'ad_astra:rocket_fin',
        'ad_astra:rocket_nose_cone',
        'ad_astra:steel_tank',
        'gtceu:chemical_reactor/nitric_acid_from_dioxide_2',
        'gtceu:large_chemical_reactor/nitric_acid_from_dioxide_2',
        'gtceu:large_chemical_reactor/nitric_acid_from_elements',
        'gtceu:distillation_tower/acidic_osmium_solution_separation',
        'gtceu:chemical_reactor/osmium_tetroxide_separation',
        'gtceu:large_chemical_reactor/osmium_tetroxide_separation',
        'gtceu:large_chemical_reactor/rarest_metal_mixture_separation',
        'gtceu:centrifuge/pgs_separation',
        'gtceu:chemical_reactor/raw_palladium_separation',
        'gtceu:large_chemical_reactor/raw_palladium_separation',
        'gtceu:large_chemical_reactor/inert_metal_mixture_separation',
        'gtceu:large_chemical_reactor/ruthenium_tetroxide_separation',
        'gtceu:chemical_reactor/ruthenium_tetroxide_separation',
        'gtceu:chemical_reactor/inert_metal_mixture_separation',
        'gtceu:electrolyzer/decomposition_electrolyzing_ruthenium_trinium_americium_neutronate',
        'gtceu:electrolyzer/rhodium_sulfate_separation',
        'gtceu:chemical_reactor/iridium_chloride_separation',
        'gtceu:large_chemical_reactor/iridium_chloride_separation',
        'gtceu:forge_hammer/hammer_palladium_refined_ore_to_dust',
        'gtceu:electrolyzer/water_electrolysis',
        'gtceu:chemical_reactor/calcium_hydroxide',
        'gtceu:large_chemical_reactor/calcium_hydroxide',
        'gtceu:electric_blast_furnace/blast_kanthal',
        'gtceu:electric_blast_furnace/blast_kanthal_gas',
        'gtceu:large_chemical_reactor/nitrogen_dioxide_from_elements',
        'gtceu:large_chemical_reactor/nitric_acid_from_ammonia',
        'gtceu:large_chemical_reactor/formic_acid',
        'gtceu:chemical_reactor/formic_acid',
        'gtceu:chemical_reactor/nitric_acid_from_dioxide_1',
        'gtceu:large_chemical_reactor/nitric_acid_from_dioxide_1',
        'gtceu:chemical_reactor/dinitrogen_tetroxide_from_ammonia',
        'gtceu:large_chemical_reactor/dinitrogen_tetroxide_shortcut',
        'gtceu:large_chemical_reactor/dinitrogen_tetroxide_from_ammonia'
    ]
    remove_id.forEach(recipeId =>{
       event.remove({id:recipeId})
        })
event.replaceOutput({id:'gtceu:distillation_tower/distill_liquid_air'},Fluid.of('gtceu:helium'),Fluid.of('gtceu:air'))
event.replaceOutput({id:'gtceu:assembler/cover_advanced_energy_detector'},'gtceu:hv_sensor','gtceu:lv_sensor')
// event.replaceInput({id:'gtceu:shaped/filter_casing'},'gtceu:mv_electric_motor','gtceu:lv_electric_motor')
event.replaceInput({id:'gtceu:macerator/macerate_certus_quartz_gem'},'gtceu:certus_quartz_gem','#ae2:all_certus_quartz')
event.replaceInput({id:'advanced_ae:reactionchamber'},'minecraft:glowstone_dust','minecraft:redstone')
event.replaceInput({id:'gtceu:assembler/smd_diode'},'gtceu:fine_platinum_wire','gtceu:fine_electrum_wire')
event.replaceOutput({ type:"minecraft:blasting" }, 'gtceu:certus_quartz_gem', 'ae2:certus_quartz_crystal')
event.replaceOutput({ type:"minecraft:smelting" }, 'gtceu:certus_quartz_gem', 'ae2:certus_quartz_crystal')
event.replaceInput({ id:'gtceu:assembler/cover_advanced_energy_detector' }, 'gtceu:hv_sensor', 'gtceu:lv_sensor')
//ti
event.replaceOutput({ id: 'gtceu:chemical_reactor/titanium_tetrachloride' }, Fluid.of('gtceu:titanium_tetrachloride'), Fluid.of('gtceu:raw_ticl4'))
event.replaceOutput({ id: 'gtceu:large_chemical_reactor/titanium_tetrachloride' }, Fluid.of('gtceu:titanium_tetrachloride'), Fluid.of('gtceu:raw_ticl4'))
event.replaceOutput({ id: 'gtceu:centrifuge/metal_mixture_separation' }, 'gtceu:ilmenite_dust', 'gtceu:hematite_dust')
event.replaceOutput({ id: 'gtceu:macerator/macerate_aluminium_refined_ore_to_dust' }, 'gtceu:ilmenite_dust', 'gtceu:hematite_dust')
// event.replaceOutput({ id: '' }, 'gtceu:ilmenite_dust', 'gtceu:hematite_dust')
// event.replaceOutput({ id: '' }, 'gtceu:ilmenite_dust', 'gtceu:hematite_dust')
// event.replaceOutput({ id: '' }, 'gtceu:ilmenite_dust', 'gtceu:hematite_dust')
// event.replaceOutput({ id: '' }, 'gtceu:ilmenite_dust', 'gtceu:hematite_dust')
        //Al
event.replaceOutput({ id: 'gtceu:centrifuge/centrifuge_emerald_pure_dust_to_dust' }, 'gtceu:aluminium_dust', 'gtceu:sapphire_dust')
event.replaceOutput({ id: 'gtceu:centrifuge/centrifuge_bentonite_dirty_dust_to_dust' }, 'gtceu:aluminium_dust', 'gtceu:sapphire_dust')
event.replaceOutput({ id: 'gtceu:centrifuge/centrifuge_green_sapphire_dirty_dust_to_dust' }, 'gtceu:aluminium_dust', 'gtceu:sapphire_dust')
event.replaceOutput({ id: 'gtceu:centrifuge/centrifuge_glauconite_sand_pure_dust_to_dust' }, 'gtceu:aluminium_dust', 'gtceu:sapphire_dust')
event.replaceOutput({ id: 'gtceu:centrifuge/centrifuge_almandine_pure_dust_to_dust' }, 'gtceu:aluminium_dust', 'gtceu:sapphire_dust')
event.replaceOutput({ id: 'gtceu:centrifuge/centrifuge_mica_pure_dust_to_dust' }, 'gtceu:aluminium_dust', 'gtceu:sapphire_dust')
event.replaceOutput({ id: 'gtceu:centrifuge/centrifuge_pollucite_pure_dust_to_dust' }, 'gtceu:aluminium_dust', 'gtceu:sapphire_dust')
event.replaceOutput({ id: 'gtceu:centrifuge/centrifuge_sapphire_dirty_dust_to_dust' }, 'gtceu:aluminium_dust', 'gtceu:sapphire_dust')
event.replaceOutput({ id: 'gtceu:centrifuge/green_sapphire_slurry_centrifuging' }, 'gtceu:aluminium_dust', 'gtceu:sapphire_dust')
event.replaceOutput({ id: 'gtceu:centrifuge/centrifuge_fullers_earth_dirty_dust_to_dust' }, 'gtceu:aluminium_dust', 'gtceu:sapphire_dust')
event.replaceOutput({ id: 'gtceu:centrifuge/centrifuge_kyanite_pure_dust_to_dust' }, 'gtceu:aluminium_dust', 'gtceu:sapphire_dust')
event.replaceOutput({ id: 'gtceu:centrifuge/centrifuge_spodumene_dirty_dust_to_dust' }, 'gtceu:aluminium_dust', 'gtceu:sapphire_dust')
event.replaceOutput({ id: 'gtceu:macerator/macerate_aluminium_ingot' },  'gtceu:sapphire_dust','gtceu:aluminium_dust')

//Mn
event.replaceOutput({ id:'gtceu:macerator/macerate_double_manganese_plate' }, 'gtceu:pyrolusite_dust', 'gtceu:manganese_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_manganese_turbine_blade' }, 'gtceu:pyrolusite_dust', 'gtceu:manganese_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_manganese_plate' }, 'gtceu:pyrolusite_dust', 'gtceu:manganese_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_manganese_block' }, 'gtceu:pyrolusite_dust', 'gtceu:manganese_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_manganese_ingot' }, 'gtceu:pyrolusite_dust', 'gtceu:manganese_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_tungstate_dirty_dust_to_dust' }, 'gtceu:manganese_dust', 'gtceu:pyrolusite_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_spessartine_pure_dust_to_dust' }, 'gtceu:manganese_dust', 'gtceu:pyrolusite_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_pyrolusite_dirty_dust_to_dust' }, 'gtceu:manganese_dust', 'gtceu:pyrolusite_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_scheelite_dirty_dust_to_dust' }, 'gtceu:manganese_dust', 'gtceu:pyrolusite_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_tantalite_dirty_dust_to_dust' }, 'gtceu:manganese_dust', 'gtceu:pyrolusite_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_wulfenite_pure_dust_to_dust' }, 'gtceu:manganese_dust', 'gtceu:pyrolusite_dust')
//k
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_mica_dirty_dust_to_dust' }, 'gtceu:potassium_dust', 'gtceu:rock_salt_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_saltpeter_pure_dust_to_dust' }, 'gtceu:potassium_dust', 'gtceu:rock_salt_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_powellite_pure_dust_to_dust' }, 'gtceu:potassium_dust', 'gtceu:rock_salt_dust')
//v
event.replaceOutput({ id:'gtceu:macerator/macerate_vanadium_magnetite_refined_ore_to_dust' }, 'gtceu:vanadium_dust', 'gtceu:vanadium_slag_dust')
//ga
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_sphalerite_pure_dust_to_dust' },  'gtceu:gallium_dust', 'gtceu:bauxite_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_bauxite_refined_ore_to_dust' },  'gtceu:gallium_dust', 'gtceu:bauxite_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_sphalerite_crushed_ore_to_dust' },  'gtceu:gallium_dust', 'gtceu:bauxite_dust')
//si

event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_zeolite_pure_dust_to_dust' },  'gtceu:silicon_dust', 'gtceu:silicon_dioxide_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_asbestos_pure_dust_to_dust' },  'gtceu:silicon_dust', 'gtceu:silicon_dioxide_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_fullers_earth_pure_dust_to_dust' },  'gtceu:silicon_dust', 'gtceu:silicon_dioxide_dust')
event.replaceOutput({ id:'gtceu:centrifuge/decomposition_centrifuging__redstone' },  'gtceu:silicon_dust', 'gtceu:silicon_dioxide_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_fullers_earth_crushed_ore_to_dust' },  'gtceu:silicon_dust', 'gtceu:silicon_dioxide_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_kyanite_refined_ore_to_dust' },  'gtceu:silicon_dust', 'gtceu:silicon_dioxide_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_zeolite_crushed_ore_to_dust' },  'gtceu:silicon_dust', 'gtceu:silicon_dioxide_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_asbestos_crushed_ore_to_dust' },  'gtceu:silicon_dust', 'gtceu:silicon_dioxide_dust')
//sb
event.replaceOutput({ id:'gtceu:macerator/macerate_antimony_block' }, 'gtceu:stibnite_dust',  'gtceu:antimony_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_antimony_ingot' }, 'gtceu:stibnite_dust',  'gtceu:antimony_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_stibnite_pure_dust_to_dust' },  'gtceu:antimony_dust', 'gtceu:stibnite_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_tetrahedrite_dirty_dust_to_dust' },  'gtceu:antimony_dust', 'gtceu:stibnite_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_realgar_pure_dust_to_dust' },  'gtceu:antimony_dust', 'gtceu:stibnite_dust')
//pb
event.replaceOutput({ id:'gtceu:macerator/macerate_lead_ingot' }, 'gtceu:galena_dust',  'gtceu:lead_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_thorium_pure_dust_to_dust' },   'gtceu:lead_dust', 'gtceu:galena_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_plutonium_pure_dust_to_dust' },  'gtceu:lead_dust', 'gtceu:galena_dust')
event.replaceOutput({ id:'gtceu:centrifuge/decomposition_centrifuging__pitchblende' },  'gtceu:lead_dust', 'gtceu:galena_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_silver_dirty_dust_to_dust' },  'gtceu:lead_dust', 'gtceu:galena_dust')
//mg(none)
//na
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_glauconite_sand_dirty_dust_to_dust' },  'gtceu:sodium_dust', 'gtceu:salt_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_trona_dirty_dust_to_dust' },  'gtceu:sodium_dust', 'gtceu:salt_dust')

//event.replaceInput({ id:'gtceu:electric_blast_furnace/blast_silicon_dioxide' },   'gtceu:silicon_dioxide_dust','gtceu:quartz_sand_dust')
//event.replaceOutput({ id:'' },  'gtceu:gallium_dust', 'gtceu:bauxite_dust')
//cr
event.replaceOutput({id:'gtceu:macerator/macerate_chromium_ingot' },  'gtceu:chromite_dust','gtceu:chromium_dust')
event.replaceOutput({id:'gtceu:macerator/macerate_chromium_turbine_blade' },  'gtceu:chromite_dust','gtceu:chromium_dust')
event.replaceOutput({id:'gtceu:macerator/macerate_chromium_quadruple_fluid_pipe' },  'gtceu:chromite_dust','gtceu:chromium_dust')
event.replaceOutput({id:'gtceu:macerator/macerate_chromium_large_fluid_pipe' },  'gtceu:chromite_dust','gtceu:chromium_dust')
event.replaceOutput({id:'gtceu:macerator/macerate_chromium_normal_fluid_pipe' },  'gtceu:chromite_dust','gtceu:chromium_dust')
event.replaceOutput({id:'gtceu:macerator/macerate_double_chromium_plate' },  'gtceu:chromite_dust','gtceu:chromium_dust')
event.replaceOutput({id:'gtceu:macerator/macerate_chromium_block' },  'gtceu:chromite_dust','gtceu:chromium_dust')
event.replaceOutput({id:'gtceu:macerator/macerate_hv_world_accelerator' },  'gtceu:chromite_dust','gtceu:chromium_dust')
event.replaceOutput({id:'gtceu:macerator/macerate_chromium_huge_fluid_pipe' },  'gtceu:chromite_dust','gtceu:chromium_dust')
event.replaceOutput({id:'gtceu:macerator/macerate_chromium_small_fluid_pipe' },  'gtceu:chromite_dust','gtceu:chromium_dust')
event.replaceOutput({id:'gtceu:macerator/macerate_chromium_nonuple_fluid_pipe' },  'gtceu:chromite_dust','gtceu:chromium_dust')
event.replaceOutput({id:'gtceu:macerator/macerate_hv_emitter' },  'gtceu:chromite_dust','gtceu:chromium_dust')
event.replaceOutput({id:'gtceu:macerator/macerate_chromium_plate' },  'gtceu:chromite_dust','gtceu:chromium_dust')
event.replaceOutput({id:'gtceu:macerator/macerate_chromium_rotor' },  'gtceu:chromite_dust','gtceu:chromium_dust')
event.replaceOutput({id:'gtceu:macerator/macerate_advanced_power_thruster' },  'gtceu:chromite_dust','gtceu:chromium_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_ruby_dirty_dust_to_dust' },  'gtceu:chromium_dust', 'gtceu:chromite_dust')
//sijingyuan
event.replaceInput({ id:'gtceu:electric_blast_furnace/silicon_boule' },  'gtceu:silicon_dust', 'gtceu:pure_si_dust')
event.replaceInput({ id:'gtceu:electric_blast_furnace/phosphorus_boule' },  'gtceu:silicon_dust', 'gtceu:pure_si_dust')
event.replaceInput({ id:'gtceu:electric_blast_furnace/naquadah_boule' },  'gtceu:silicon_block', 'gtceu:pure_si_block')
event.replaceInput({ id:'gtceu:electric_blast_furnace/neutronium_boule' },  'gtceu:silicon_block', 'gtceu:pure_si_block')
//pd
event.replaceOutput({ id:'gtceu:macerator/macerate_basalt_palladium_ore_to_crushed_ore' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_palladium_refined_ore_to_dust' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_palladium_ore_to_crushed_ore' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_granite_palladium_ore_to_crushed_ore' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_deepslate_palladium_ore_to_crushed_ore' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_marble_palladium_ore_to_crushed_ore' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_tuff_palladium_ore_to_crushed_ore' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_red_granite_palladium_ore_to_crushed_ore' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_diorite_palladium_ore_to_crushed_ore' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_red_sand_palladium_ore_to_crushed_ore' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_raw_palladium_ore_to_crushed_ore' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_palladium_crushed_ore_to_dust' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_endstone_palladium_ore_to_crushed_ore' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_netherrack_palladium_ore_to_crushed_ore' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_gravel_palladium_ore_to_crushed_ore' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_sand_palladium_ore_to_crushed_ore' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_palladium_crushed_ore_to_impure_dust' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_andesite_palladium_ore_to_crushed_ore' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_blackstone_palladium_ore_to_crushed_ore' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_palladium_dirty_dust_to_dust' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_palladium_pure_dust_to_dust' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')

//// event.replaceOutput({ id:'' },  'gtceu:palladium_dust', 'gtceu:platinum_group_sludge_dust')
//pt
event.replaceOutput({ id:'gtceu:centrifuge/endstone_separation' }, 'gtceu:platinum_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_platinum_pure_dust_to_dust' }, 'gtceu:platinum_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:centrifuge/centrifuge_platinum_dirty_dust_to_dust' }, 'gtceu:platinum_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_platinum_refined_ore_to_dust' }, 'gtceu:platinum_dust', 'gtceu:platinum_group_sludge_dust')
event.replaceOutput({ id:'gtceu:macerator/macerate_nickel_refined_ore_to_dust' }, 'gtceu:platinum_dust', 'gtceu:platinum_group_sludge_dust')
// event.replaceOutput({ id:'' }, 'gtceu:platinum_dust', 'gtceu:platinum_group_sludge_dust')
// event.replaceOutput({ id:'' }, 'gtceu:platinum_dust', 'gtceu:platinum_group_sludge_dust')


})