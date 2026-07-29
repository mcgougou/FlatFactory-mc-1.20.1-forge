// [customrecipe] type=Shaped 3x3 | out=minecraft:furnace | in=minecraft:cobblestone,mcgougou:fire_starter
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:furnace', 1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'minecraft:cobblestone',
      B: 'mcgougou:fire_starter'
    }
  )
})
