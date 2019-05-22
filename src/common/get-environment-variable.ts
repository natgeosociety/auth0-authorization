// Get environment variable or throw. This is a helper for testing.
// The library itself should not depened on environment variables.
export function getEnvironmentVariable(name: string): string {
  const variable = process.env[name];
  if (!variable) {
    throw new Error(`Environment variable does not exist: ${name}`);
  }
  return variable;
}
