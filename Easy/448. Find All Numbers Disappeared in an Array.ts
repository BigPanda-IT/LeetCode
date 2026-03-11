function findDisappearedNumbers(nums: number[]): number[] {
    let n = nums.length;
    let newarr = new Set(nums);
    let result: number[] =  [];

    for (let i=1; i<=n; i++) {
        if (!newarr.has(i)){
            result.push(i);
        }
    }
    return result;

};