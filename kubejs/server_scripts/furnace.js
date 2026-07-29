ServerEvents.recipes(event=>{
    //output,input
    event.smelting('2x minecraft:clay_ball','minecraft:mud')
    event.smelting('bucket','mcgougou:unfired_bucket')
    event.smelting("mcgougou:unfinished_lava_bucket_33","mcgougou:bucket_with_stone")
    event.smelting("mcgougou:unfinished_lava_bucket_66","mcgougou:unfinished_lava_bucket_33")
    event.smelting("lava_bucket","mcgougou:unfinished_lava_bucket_66")
    event.smelting('gtceu:manganese_monoxide_dust','gtceu:pyrolusite_dust')
})