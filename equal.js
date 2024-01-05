// Comparação de valores primitivos, também conhecidos como scalars:

1 === 1;
'Platão' === 'Platão';
true === true;
true === false;

//Comparação de valores complexos, objetos e arrays:
const a = { number: 1, filosofo: 'Platão' };
const b = a;

// [] === [];
// [1] === [1];
// console.log(a === b);

// const philosopher = 'Platão';
// philosopher = 'Platão';
// const mathematician = philosopher;
// mathematician === philosopher;

// const oldDeps = [/* options.url */ '../server/plato.json'];
// const newDeps = [/* options.url  */ '../server/plato.json'];

// Comparação feita pelo React. Compara o tamanho do array de dependências e depois cada elemento dele.
const deepCompare = (oldDeps, newDeps) =>
	oldDeps.length === newDeps.length &&
	oldDeps.every((dep, i) => dep === newDeps[i]);
