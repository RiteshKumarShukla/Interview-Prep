// Write Code here

function PlayPause(){

function onclick(){
  document.getElementById('h1').textContent="The state is playing"
  document.getElementById('ram').textContent="playing"
}

  return [
    <h1 id="h1">The state is paused</h1>,
    <button onClick={onclick} id="ram">paused</button>
  ]
}

export default PlayPause;