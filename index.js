const readline = require('readline');
const { run_sloane } = require('./A000124_sloane_oeis');
const { run_dense_rangking } = require('./dense_ranking');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const question = (quest) => {
	return new Promise((resolve) => {
		rl.question(quest, (answer) => {
			resolve(answer);
		});
	});
};

async function main() {
	let play = true;

	while (play) {
		console.log('\n======  INTERNSHIP - PROBLEM SOLVING TEST  ======');
		console.log(
			'Pilih nomor opsi fungsi dijalankan: \n(1) A000124 Sloane oeis\n(2) Dense Ranking\n(3) Balanced Bracket'
		);

		const option = await question('\nOpsi anda: ');

		switch (option) {
			case '1':
				await run_sloane(question);
				break;
			case '2':
				await run_dense_rangking(question);
				break;
			default:
				play = false;
				rl.close();
				break;
		}
	}
}

main();
