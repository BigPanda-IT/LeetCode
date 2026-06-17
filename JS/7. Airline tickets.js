/**
 * Для тестирования можно пользоваться моком функции fetchFlights
 * 
 * ```
 * const FLIGHTS = {
 *  A: ['B', 'D'],
 *  B: ['C', 'N', 'Z'],
 *  D: ['E', 'F'],
 *  F: ['S']
 * };
 * 
 * const fetchFlights = (from) => Promise.resolve(FLIGHTS[from]);
 * ```
 */

export async function findPath(from, to, fetchFlights) {
    if (from === to) return [from];
    
    const visited = new Map();  
    const parent = new Map();
    const queue = [from];
    let head = 0;
    
    visited.set(from, true);
    
    while (head < queue.length) {
        const current = queue[head++];
        const flights = (await fetchFlights(current)) || [];
        
        for (const next of flights) {
            if (!visited.has(next)) {
                visited.set(next, true);
                parent.set(next, current);
                
                if (next === to) {
                    const path = [];
                    let node = to;

                    while (node !== from) {
                        path.unshift(node);
                        node = parent.get(node);
                        if (!node) return [];
                    }
                    path.unshift(from);
                    return path;
                }
                
                queue.push(next);
            }
        }
    }
    
    return [];
}