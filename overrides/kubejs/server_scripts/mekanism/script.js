onEvent('recipes', event => {
	event.remove({output: 'mekanism:teleporter_frame'})
	event.remove({output: 'mekanism:digital_miner'})
})

onEvent('recipes', event => {
	event.shaped('mekanism:teleporter_frame', [
	    'OOO',
	    'OGO',
	    'OOO'
	], {
	    O: 'mekanism:ingot_refined_obsidian',
	    G: 'mekanism:ingot_refined_glowstone'
	})
})