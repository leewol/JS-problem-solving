// (nums.length)/2 하고, SET(nums) 해서 lengthSET
// lengthSET > length/2 이면 후자 아니라면 전자 
function solution(nums) {
    const half = nums.length / 2;
    const maxType = new Set(nums).size;
    
    return maxType > half ? half : maxType;
}