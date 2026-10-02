export interface DiffLine {
  type: "added" | "removed" | "unchanged";
  text: string;
  originalLineNumber?: number;
  modifiedLineNumber?: number;
}

export interface DiffResult {
  lines: DiffLine[];
  additionsCount: number;
  deletionsCount: number;
  unchangedCount: number;
}

/**
 * Calcola il diff riga per riga tra due testi usando l'algoritmo LCS (Longest Common Subsequence)
 */
export function computeLineDiff(originalText: string, modifiedText: string): DiffResult {
  const originalLines = originalText.split(/\r?\n/);
  const modifiedLines = modifiedText.split(/\r?\n/);

  const m = originalLines.length;
  const n = modifiedLines.length;

  // Matrice dinamica per LCS
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (originalLines[i] === modifiedLines[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  // Backtracking per ricavare la sequenza di diff
  let i = m;
  let j = n;

  let origNum = m;
  let modNum = n;

  const rawDiff: DiffLine[] = [];

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && originalLines[i - 1] === modifiedLines[j - 1]) {
      rawDiff.push({
        type: "unchanged",
        text: originalLines[i - 1],
        originalLineNumber: origNum--,
        modifiedLineNumber: modNum--
      });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      rawDiff.push({
        type: "added",
        text: modifiedLines[j - 1],
        modifiedLineNumber: modNum--
      });
      j--;
    } else if (i > 0 && (j === 0 || dp[i][j - 1] < dp[i - 1][j])) {
      rawDiff.push({
        type: "removed",
        text: originalLines[i - 1],
        originalLineNumber: origNum--
      });
      i--;
    }
  }

  rawDiff.reverse();

  let additions = 0;
  let deletions = 0;
  let unchanged = 0;

  for (const line of rawDiff) {
    if (line.type === "added") additions++;
    else if (line.type === "removed") deletions++;
    else unchanged++;
  }

  return {
    lines: rawDiff,
    additionsCount: additions,
    deletionsCount: deletions,
    unchangedCount: unchanged
  };
}
