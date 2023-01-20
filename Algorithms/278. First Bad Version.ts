/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {

    return function (n: number): number {
        if (n === 1 && isBadVersion(n)) {
            return 1;
        }
        let indicator: number = n;
        while (true) {
            // true: bad, false: good
            if (isBadVersion(indicator)) {
                if (isBadVersion(indicator - 1)) {
                    indicator -= 2;
                } else {
                    return indicator;
                }
            } else {
                if (isBadVersion(indicator + 1)) {
                    return indicator + 1;
                } else {
                    indicator += 2;
                }
            }
        }
    };
};
