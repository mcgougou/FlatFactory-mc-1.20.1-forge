ServerEvents.recipes(e => {
    e.shaped(
        "mcgougou:unfired_bucket",
        [
            "C C",
            "C C",
            "CCC"
        ], {
            "C": "minecraft:clay_ball"
        }
    );

    e.shapeless(
        "mcgougou:bucket_with_stone", 
        [
            "minecraft:bucket",
            Item.of("gtceu:stone_dust", 3)
        ]
    );

    e.shapeless(
        Item.of("sbmgrowmeal:growmeal", 2), 
        [
            Item.of("gtceu:plant_dust_dust", 2)
        ]
    );

    e.shaped(
        "gtceu:wood_gear",
        [
            "SPS",
            "PWP",
            "SPS"
        ],
        {
            S: "minecraft:stick",
            P: "minecraft:oak_planks",
            W: "#gtceu:tools/crafting_wrenches"
        }
    );

    e.shaped(
        "gtceu:ore_breaker",
        [
            "FGF",
            "GOG",
            "FGF"
        ],
        {
            F: "gtceu:wood_frame",
            G: "gtceu:wood_gear",
            O: "minecraft:obsidian"
        }
    );

    e.shapeless(
        "expatternprovider:ex_interface",
        [
            "ae2:interface",
            "ae2:interface"
        ]
    );

    e.shapeless(
        "expatternprovider:oversize_interface",
        [
            "expatternprovider:ex_interface",
            "expatternprovider:ex_interface"
        ]
    );

    e.shapeless(
        "expatternprovider:ex_pattern_provider",
        [
            "ae2:pattern_provider",
            "ae2:pattern_provider"
        ]
    );

    e.shapeless(
        "gtceu:me_output_bus",
        [
            "expatternprovider:oversize_interface",
            "gtceu:lv_machine_hull"
        ]
    );

    e.shapeless(
        "gtceu:me_output_hatch",
        [
            "expatternprovider:ex_interface",
            "gtceu:lv_machine_hull"
        ]
    );

    e.shaped(
        "gtceu:monster_killer",
        [
            "SIS",
            "MDM",
            "SIS"
        ],
        {
            "S": "minecraft:smooth_stone",
            "I": "minecraft:iron_bars",
            "M": "gtceu:lv_electric_motor",
            "D": "minecraft:diamond_sword"
        }
    );

    e.shaped(
        "gtceu:steel_fluid_drilling",
        [
            "CGC",
            "MDM",
            "CGC"
        ],
        {
            "C": "gtceu:solid_machine_casing",
            "G": "gtceu:steel_gear",
            "M": "gtceu:lv_electric_motor",
            "D": "gtceu:steel_drill_head"
        }
    );

    e.shaped(
        "gtceu:nh3_factory",
        [
            "CMC",
            "FRF",
            "CMC"
        ],
        {
            "C": "gtceu:solid_machine_casing",
            "M": "gtceu:mv_electric_motor",
            "F": "#gtceu:circuits/mv",
            "R": "gtceu:mv_fluid_regulator"
        }
    );

    e.shaped(
        "gtceu:simple_air_distillery",
        [
            "FRF",
            "CSC",
            "FRF"
        ],
        {
            "F": "gtceu:frostproof_machine_casing",
            "R": "gtceu:lv_fluid_regulator",
            "C": "#gtceu:circuits/lv",
            "S": "gtceu:lv_fluid_solidifier"
        }
    );

    e.shaped(
        "gtceu:bayer",
        [
            "CRC",
            "FFF",
            "CAC"
        ],
        {
            "C": "gtceu:solid_machine_casing",
            "R": "gtceu:lv_fluid_regulator",
            "F": "gtceu:filter_casing",
            "A": "gtceu:lv_robot_arm"
        }
    );

    e.shaped(
        "gtceu:h2so4_factory",
        [
            "HHH",
            "CVC",
            "HHH"
        ],
        {
            "H": "gtceu:heatproof_machine_casing",
            "C": "#gtceu:circuits/lv",
            "V": "gtceu:vanadium_pentoxide_block"
        }
    );

    e.shaped(
        "gtceu:plastic_factory",
        [
            "CBC",
            "BLB",
            "CBC"
        ],
        {
            "L": "#gtceu:circuits/lv",
            "C": "gtceu:solid_machine_casing",
            "B": "gtceu:cupronickel_coil_block"
        }
    );

    e.shaped(
        "gtceu:mv_generator",
        [
            "CFC",
            "FTF",
            "CFC"
        ],
        {
            "C": "gtceu:solid_machine_casing",
            "F": "gtceu:steel_firebox_casing",
            "T": "gtceu:mv_steam_turbine"
        }
    );

    e.shaped(
        "gtceu:cleaning_maintenance_hatch",
        [
            "CMC",
            "AHA",
            "CFC"
        ],
        {
            "C": "#gtceu:circuits/hv",
            "M": "gtceu:auto_maintenance_hatch",
            "A": "gtceu:hv_robot_arm",
            "H": "gtceu:hv_machine_hull",
            "F": "gtceu:filter_casing"
        }
    );

    e.shaped(
        "gtceu:hv_generator",
        [
            "CSC",
            "TGB",
            "CSC"
        ],
        {
            "C": "#gtceu:circuits/hv",
            "S": "gtceu:solid_machine_casing",
            "T": "gtceu:hv_steam_turbine",
            "G": "gtceu:steel_turbine_casing",
            "B": "gtceu:hv_gas_turbine"
        }
    );

    e.shaped(
        "ad_astra:rocket_nose_cone",
        [
            "SRS",
            "DRD",
            "DRD"
        ],
        {
            "S": "gtceu:rocket_1_material_screw",
            "R": "gtceu:long_rocket_1_material_rod",
            "D": "gtceu:dense_rocket_1_material_plate"
        }
    );

    e.shaped(
        "ad_astra:rocket_fin",
        [
            "SDS",
            "DDD",
            "DSD"
        ],
        {
            "S": "gtceu:rocket_1_material_screw",
            "D": "gtceu:dense_rocket_1_material_plate"
        }
    );

    e.shaped(
        "ad_astra:steel_tank",
        [
            "DDS",
            "DGR",
            "DDS"
        ],
        {
            "D": "gtceu:dense_rocket_1_material_plate",
            "S": "gtceu:rocket_1_material_screw",
            "G": "ad_astra:gas_tank",
            "R": "gtceu:rocket_1_material_ring"
        }
    );

    e.shaped(
        "gtceu:mcgougou_furnace",
        [
            "FFF",
            "FFF",
            "FFF"
        ],
        {
            "F": "minecraft:furnace"
        }
    );

    e.shaped(
        "gtceu:hv_yasuo",
        [
            "CKC",
            "C C",
            "CKC"
        ],
        {
            "C": "gtceu:clean_machine_casing",
            "K": "#gtceu:circuits/hv"
        }
    );

    e.shaped(
        "gtceu:hv_fenli",
        [
            "CKC",
            "CKC",
            "C C"
        ],
        {
            "C": "gtceu:clean_machine_casing",
            "K": "#gtceu:circuits/hv"
        }
    );

    e.shaped(
        "gtceu:hv_jiagong",
        [
            "C C",
            "CKC",
            "CKC"
        ],
        {
            "C": "gtceu:clean_machine_casing",
            "K": "#gtceu:circuits/hv"
        }
    );

    e.shaped(
        "gtceu:hv_jiare",
        [
            "CKC",
            "CBC",
            "CKC"
        ],
        {
            "C": "gtceu:clean_machine_casing",
            "K": "#gtceu:circuits/hv",
            "B": "gtceu:cupronickel_coil_block"
        }
    );

    e.shapeless(
        Item.of('gtceu:programmed_circuit', '{Configuration:0}'),
        [
            "#gtceu:circuits/ulv"
        ]
    );

    e.shaped(
        "gtceu:hno3_factory",
        [
            "CIC",
            "IHI",
            "CIC"
        ],
        {
            "C": "gtceu:inert_machine_casing",
            "I": "mcgougou:iv_universal_circuit",
            "H": "gtceu:ev_machine_hull"
        }
    );
});