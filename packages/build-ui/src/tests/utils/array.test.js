import {filterInPlace} from '../../utils/array';

describe('array utils', () => {

    describe('filterInPlace', () => {
        
        it('should return the same array', () => {
            const array = [1, 2, 3, 4, 5, 6, 7];
            const filter = number => number > 5;
            expect(filterInPlace(array, filter)).toBe(array);
        });
    
        it('should filter elements', () => {
            const array = [1, 2, 3, 4, 5, 6, 7];
            const filter = number => number % 2 === 0;
            expect(filterInPlace(array, filter)).toEqual([2, 4, 6]);
        });

        it('should return same unmutated array if filter does not apply', () => {
            const array = [1, 2, 3];
            const filter = number => number > 0;
            expect(filterInPlace(array, filter)).toEqual([1, 2, 3]);
        });

        it('should return empty array if filter applies to all', () => {
            const array = [1, 2, 3];
            const filter = number => number > 3;
            expect(filterInPlace(array, filter)).toEqual([]);
        });

    });

})