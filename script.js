document.getElementById('colour-input').placeholder = 'Insert Colour'
document.getElementById('plate-input').placeholder = 'Insert Plate'

function addNewCar() {
  const newCar = document.createElement('div') // creates a new div ROW element
  newCar.classList.add('row') // gives the newCar variable the ROW style

  const newColour = document.createElement('div') // creates a new div CELL element - colour
  newColour.classList.add('colour-cell') // gives the newColour variable the COLOUR style

  const newPlate = document.createElement('div') // creates a new div CELL element - plate
  newPlate.classList.add('plate-cell') // gives the newPlate variable the PLATE style

  const table = document.getElementById('table') // finds the table element

  console.log('entrou')

  let colourField = document.getElementById('colour-input').value // gets the value in the colour field
  let plateField = document.getElementById('plate-input').value // gets the value in the plate field

  newColour.textContent = colourField // shows the new cell with the just added colour value
  newPlate.textContent = plateField // shows the new cell with the just added plate value
  table.append(newCar)

  return newCar.append(newColour, newPlate)
}

const button = document.getElementById('button')

button.onclick = addNewCar
