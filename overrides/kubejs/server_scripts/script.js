// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

// Listen to player login event
onEvent('player.tick', event => {
  if (!event.player.stages.has('starting_items')) {
    // Add the stage
    event.player.stages.add('starting_items')

    // Give some items to player
    event.player.give(Item.of('waystones:warp_stone', '{Damage:0}'))
  }
  
  if (event.player.stages.has('vote_reward')) {
    // Give some items to player
    event.player.give(Item.of('inventorypets:pet_meta', '{Damage:0}'))
	
	  // Remove the stage
    event.player.stages.remove('vote_reward')
  }
})
