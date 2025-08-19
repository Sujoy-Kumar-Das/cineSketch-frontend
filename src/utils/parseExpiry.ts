export default function parseExpiry(expiresIn: string): number {
  if (!expiresIn) {
    return Date.now();
  }

  const match = expiresIn.match(/^(\d+)([smhd])$/);
  if (!match) {
    return Date.now();
  }

  const value = parseInt(match[1], 10);
  const unit = match[2];

  const multipliers: Record<string, number> = {
    s: 1000,
    m: 60 * 1000,
    h: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
  };

  return Date.now() + value * (multipliers[unit] || 0);
}
