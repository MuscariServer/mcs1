onEvent('recipes', event => {
  event.remove({output: 'waystones:return_scroll'})
  event.remove({output: 'waystones:bound_scroll'})
  event.remove({output: 'waystones:warp_scroll'})
})
