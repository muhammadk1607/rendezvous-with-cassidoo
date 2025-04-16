const DIRECTIONS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
] as const;

export const largestPathSum = (grid: number[][]): number => {
  const rows = grid.length;

  if (!grid[0]) return 0;

  const cols = grid[0].length;

  let maxSum = 0;

  function dfs(x: number, y: number, visited: boolean[][], currentSum: number) {
    maxSum = Math.max(maxSum, currentSum);

    for (const [dx, dy] of DIRECTIONS) {
      const nx = x + dx;
      const ny = y + dy;

      if (!visited[nx] || !grid[nx]) continue;

      if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && !visited[nx][ny]) {
        visited[nx][ny] = true;
        dfs(nx, ny, visited, currentSum + (grid[nx][ny] || 0));
        visited[nx][ny] = false;
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

      // @ts-ignore
      visited[i][j] = true;
      // @ts-ignore
      dfs(i, j, visited, grid[i][j]);
    }
  }

  return maxSum;
};
