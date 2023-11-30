const AnimalShelter = require('./AnimalShelter'); 

describe('AnimalShelter', () => {
  it('should enqueue and dequeue dogs and cats in the correct order', () => {
    const animalShelter = new AnimalShelter();

    animalShelter.enqueue({ species: 'dog', name: 'Buddy' });
    animalShelter.enqueue({ species: 'cat', name: 'Whiskers' });
    animalShelter.enqueue({ species: 'dog', name: 'Max' });

    expect(animalShelter.dequeue('dog')).to.deep.equal({ species: 'dog', name: 'Buddy' });
    expect(animalShelter.dequeue('cat')).to.deep.equal({ species: 'cat', name: 'Whiskers' });
    expect(animalShelter.dequeue('bird')).to.be.null;
  });

  it('should handle dequeue on an empty shelter gracefully', () => {
    const animalShelter = new AnimalShelter();

    expect(animalShelter.dequeue('dog')).to.be.null;
    expect(animalShelter.dequeue('cat')).to.be.null;
    expect(animalShelter.dequeue('bird')).to.be.null;
  });

  it('should return null for invalid preferences', () => {
    const animalShelter = new AnimalShelter();

    animalShelter.enqueue({ species: 'dog', name: 'Buddy' });
    animalShelter.enqueue({ species: 'cat', name: 'Whiskers' });

    expect(animalShelter.dequeue('fish')).to.be.null;
    expect(animalShelter.dequeue('')).to.be.null;
    expect(animalShelter.dequeue()).to.be.null;
  });
});