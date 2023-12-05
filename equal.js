// Comparação de valores primitivos, também conhecidos como scalars: 

1 === 1;
'Platão' === 'Platão';
true === true;
true === false;

// Comparação de valores complexos, objetos e arrays:
{ a: 1 } === { a: 1 };
[] === [];
[1] === [1];

const philosopher = "Platão";
philosopher = "Platão";
const mathematician = philosopher;
mathematician === philosopher;

// Comparação feita pelo React. Compara o tamanho do array de dependências e depois cada elemento dele.
const deepCompare = (oldDeps, newDeps) => oldDeps.length === newDeps.length && oldDeps.every((dep, i) => dep === newDeps[i]); 