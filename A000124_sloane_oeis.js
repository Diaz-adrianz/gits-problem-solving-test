const calculate = (n) => {
	const list = [1];

	for (let i = 1; i < n; i++) list.push(list[i - 1] + i);

	return list;
};

const run_sloane = async (question) => {
	console.log('\n----- A000124 Sloane oeis  -----');
	const num = await question('Masukkan angka: ');

	const result = calculate(parseInt(num));
	console.log('output: ' + result.join('-'));
};

module.exports = { run_sloane };
