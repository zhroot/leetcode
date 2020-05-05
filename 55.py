from typing import List

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        size = len(nums)
        goals = [0]*size
        goals[size-1] = 1
        for i in range(1,size+1):
            index = size-i
            num = nums[index]
            end = min(size,index+num+1)
            go = goals[end-1]
            if go == 1:
                for j in range(index,end):
                    if goals[j] == 1:
                        break;
                    goals[j] = 1
        return goals[0] == 1

s = Solution()

print(s.canJump([2,3,1,1,4]))

print(s.canJump([3,2,1,0,4]))