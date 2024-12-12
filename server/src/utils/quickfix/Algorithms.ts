export function findClosestMatches(word: string, validIdentifiers: string[] | null, threshold = 2): string[] {
	if (validIdentifiers === null) return [];

    return validIdentifiers
        .map(identifier => ({ identifier, distance: levenshtein(word, identifier) }))
        .filter(item => item.distance <= threshold)
        .sort((a, b) => a.distance - b.distance)
        .map(item => item.identifier);
}

export function levenshtein(a: string, b: string): number {
    const matrix = Array.from({ length: a.length + 1 }, (_, i) =>
        Array(b.length + 1).fill(0)
    );

    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,      // Deletion
                matrix[i][j - 1] + 1,      // Insertion
                matrix[i - 1][j - 1] + cost // Substitution
            );
        }
    }

    return matrix[a.length][b.length];
}