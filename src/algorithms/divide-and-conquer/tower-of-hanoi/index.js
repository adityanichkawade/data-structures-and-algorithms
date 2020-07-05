const moveDisks = (sourcePeg, auxillaryPeg, destinationPeg, numOfDisks, callback) => {
  if (numOfDisks === 1) {
    callback(sourcePeg, auxillaryPeg, destinationPeg, numOfDisks);
    return;
  }

  moveDisks(sourcePeg, destinationPeg, auxillaryPeg, numOfDisks - 1, callback);
  moveDisks(sourcePeg, auxillaryPeg, destinationPeg, 1, callback);
  moveDisks(auxillaryPeg, sourcePeg, destinationPeg, numOfDisks - 1, callback);
};

const towerOfHanoi = (numOfDisks, callback) => {
  moveDisks('A', 'B', 'C', numOfDisks, callback);
};

export default towerOfHanoi;
