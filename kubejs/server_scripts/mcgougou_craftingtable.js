ServerEvents.recipes(event => {
    //               event.custom()
       event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "gtceu:wrought_iron_nugget"
    }
  },
  "result": {
    "item": 'gtceu:wrought_iron_ingot'
  }
})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A A",
    "BCB",
    "B B"
  ],
  "key": {
    "A": {
      "item": "gtceu:steel_screw"
    },
    "B": {
      "item": "gtceu:steel_plate"
    },
    "C": {
      "item": "gtceu:terminal"
    }
  },
  "result": {
    "item": 'f2core:multiblock_validator'
  }
})
})