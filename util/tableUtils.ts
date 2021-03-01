// calculates height based on a regular interval 
export function calcHeight(index: number) {
  return (15 + (10 * (index+1))).toString() + "%"
}

// proportional width to largest table group
export function calcWidth(tableGroupCount: number, highestTableGroupCount: number) {
  return ((tableGroupCount / highestTableGroupCount) * 100.0).toString() + "%";
}