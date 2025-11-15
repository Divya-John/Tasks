export function SortByScoreRank(data: number[]): { score: number; rank: number }[] {
  if (
    !Array.isArray(matrix)
  )
    return "Invalid input";
  const result: { score: number; rank: number }[] = [];
  const sorted: number[] = [];
  for (let i = 0; i < data.length; i++) {
    sorted.push(data[i]);
  }
  sorted.sort((a, b) => b - a);

  let scores: { [score: number]: number } = {};
  
  let rank = 1;
  for (let i = 0; i < sorted.length; i++) {
    const score = sorted[i];
    if (!(score in scores)) {
      scores[score] = rank;
      rank++;
    }
  }

  for (let i = 0; i < data.length; i++) {
    result.push({ score: data[i], rank: scores[data[i]] });
  }
  return result;
}
