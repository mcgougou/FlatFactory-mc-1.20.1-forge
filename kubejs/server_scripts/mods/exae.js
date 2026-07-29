ServerEvents.recipes(event=>{
    event.custom({
  "type": "expatternprovider:circuit_cutter",
  "fluid_input": {
    "amount": 10,
    "ingredient": {
      "fluid": "minecraft:water"
    }
  },
  "item_input": {
    "amount": 1,
    "ingredient": {
      "item": 'expatternprovider:silicon_block'
    }
  },
  "output": {
    "count": 9,
    "item": "ae2:printed_silicon"
  }
})
})