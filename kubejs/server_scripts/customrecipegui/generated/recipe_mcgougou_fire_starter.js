// [customrecipe] type=Shaped 3x3 | out=mcgougou:fire_starter | in=minecraft:stick
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('mcgougou:fire_starter', 1),
    [
      'A A',
      ' A ',
      'A A'
    ],
    {
      A: 'minecraft:stick'
    }
  )
})
