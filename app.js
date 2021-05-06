(() => {
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const sum = (input.length * (input.length + 1)) / 2;
  if (sum % 2 !== 0) {
    console.log("No answer");
    return 0;
  }

  const dp = [];
  for (let i = 0; i <= input.length; i++) {
    dp.push([]);
  }

  for (let i = 0; i <= sum / 2; i++) {
    dp[0][i] = 0;
  }
  for (let i = 0; i <= input.length; i++) {
    dp[i][0] = 0;
  }

  for (let i = 0; i <= sum / 2; i++) {
    if (i === input[0]) {
      dp[1][i] = 1;
    } else {
      dp[1][i] = 0;
    }
  }

  for (let i = 2; i <= input.length; i++) {
    for (let j = 1; j <= sum / 2; j++) {
      const factor = j - input[i - 1];
      if (factor > 0) {
        dp[i][j] = dp[i - 1][j - input[i - 1]];
      } else if (factor === 0) {
        dp[i][j] = dp[i - 1][j] + 1;
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
})();
