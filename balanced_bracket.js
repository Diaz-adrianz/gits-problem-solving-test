const isBrackedBalanced = (str) => {
	const stack = [],
		trimmed = str.replace(/\s/g, ''),
		allowed_bracket = {
			')': '(',
			'}': '{',
			']': '[',
		};

	for (let i = 0; i < trimmed.length; i++) {
		const bracket = trimmed[i];
		if (bracket in allowed_bracket) {
			const topEl = stack.pop();
			if (allowed_bracket[bracket] !== topEl) {
				return 'NO';
			}
		} else {
			stack.push(bracket);
		}
	}

	return stack.length == 0 ? 'YES' : 'NO';
};

const run_balanced_bracker = async (question) => {
	console.log('\n----- Balanced Bracket  -----');

	const inp_bracket_pattern = await question('Masukkan pola tanda kurung: ');
	console.log('> Seimbang? ' + isBrackedBalanced(inp_bracket_pattern));
};

module.exports = { run_balanced_bracker };
