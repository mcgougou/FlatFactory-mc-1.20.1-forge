ServerEvents.recipes(event=>{
event.custom({
    "type": "lychee:block_interacting",
    "item_in": {
        "item": 'mcgougou:fire_starter'
    },
    "block_in": "oak_log",
    "post": [
        {
            "type": "place",
            "block": "fire"
        }
    ]
})
event.custom({"type": "lychee:item_burning","item_in": {"item": 'minecraft:grass'},
    "post": {"type": "drop_item","item": 'gtceu:plant_dust_dust'}})
event.custom({"type": "lychee:item_burning","item_in": {"item": 'minecraft:dirt'},
    "post": {"type": "drop_item","item": 'gtceu:small_stone_dust'}})
event.custom({"type": "lychee:item_burning","item_in": {"item": 'gtceu:stone_dust'},
    "post": {"type": "drop_item","item": 'gravel'}})
event.custom({"type": "lychee:item_burning","item_in": {"item": 'gravel'},
    "post": {"type": "drop_item","item": 'cobblestone'}})
event.custom({"type": "lychee:item_inside",
    "item_in": {"item": "oak_leaves"},
    "block_in": {"blocks": ["air"]},
    "time":30,
    "post": [//{"type": "drop_item","item": "water_bucket"},
        {"type": "place","block": "water"}]})
})

