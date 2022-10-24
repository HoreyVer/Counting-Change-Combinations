var countChange = function (money, coins) {
	return findComboCount(money, coins, 0);
}

function findComboCount(money, coin, index) {
	if (money === 0) {
		return 1;
	}
	else if (money < 0 || coin.length == index) {
		return 0;
	}
	else {
		var withFirstCoin = findComboCount(money - coin[index], coin, index);
		var withoutFirstCoin = findComboCount(money, coin, index + 1);
		return withFirstCoin + withoutFirstCoin;
	}
} 