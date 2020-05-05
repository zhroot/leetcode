from typing import List

class Solution:
    def minStartValue(self, nums: List[int]) -> int:
        sum = 0
        minv = 1
        for num in nums:
            sum += num
            if sum + minv < 1:
                minv = 1- sum
        return minv

s = Solution()

nums = [-3,2,-3,4,2]
print(s.minStartValue(nums))

nums = [1,2]
print(s.minStartValue(nums))

nums = [1,-2,-3]
print(s.minStartValue(nums))

                