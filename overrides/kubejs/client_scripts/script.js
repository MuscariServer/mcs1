// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
  event.hide('mekanism:digital_miner')
  event.hide('tconstruct:copper_ore')
  event.hide('tconstruct:copper_ingot')
  event.hide('tconstruct:copper_block')
  event.hide('projectred-core:copper_ingot')
  event.hide('projectred-core:tin_ingot')
  event.hide('waystones:return_scroll')
  event.hide('waystones:bound_scroll')
  event.hide('waystones:warp_scroll')
  event.hide('#inventorypets:all_pets')
})

onEvent('jei.information', event => {
	event.add('#inventorypets:all_pets', ['Voting reward!!'])
})