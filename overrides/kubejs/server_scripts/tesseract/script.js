onEvent('recipes', event => {
	event.remove({output: 'tesseract:tesseract'})
	event.shaped('tesseract:tesseract', [
    'OUO',
    'MFM',
    'OUO'
	], {
	  O: 'minecraft:obsidian',
		U: 'mekanism:ultimate_universal_cable',
		M: 'mekanism:ultimate_mechanical_pipe',
		F: 'mekanism:teleporter_frame'
	})
	event.shaped('tesseract:tesseract', [
    'OMO',
    'UFU',
    'OMO'
	], {
	  O: 'minecraft:obsidian',
		U: 'mekanism:ultimate_universal_cable',
		M: 'mekanism:ultimate_mechanical_pipe',
		F: 'mekanism:teleporter_frame'
	})
})
