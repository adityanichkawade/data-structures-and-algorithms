const moveDisks = (sourcePeg, auxillaryPeg, destinationPeg, numOfDisks, callback) => {
  if (numOfDisks === 1) {
    callback(sourcePeg, auxillaryPeg, destinationPeg, numOfDisks);
    return;
  }

  // Move n-1 disk from source peg to auxilary peg
  moveDisks(sourcePeg, destinationPeg, auxillaryPeg, numOfDisks - 1, callback);
  // Move the bottom disk from source peg to destination peg
  moveDisks(sourcePeg, auxillaryPeg, destinationPeg, 1, callback);
  // Move n-1 disk from auxilary peg to desination peg
  moveDisks(auxillaryPeg, sourcePeg, destinationPeg, numOfDisks - 1, callback);
};

const towerOfHanoi = (numOfDisks, callback) => {
  moveDisks('A', 'B', 'C', numOfDisks, callback);
};

export default towerOfHanoi;
