export const hungryBears = (bears: { name: string; hunger: number }[]) =>
  bears
    .filter(bear => bear.hunger > bears.reduce((sum, bear) => sum + bear.hunger, 0) / bears.length)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(bear => bear.name);
