from typing import List

class Solution:
    def kLengthApart(self, nums: List[int], k: int) -> bool:
        last_index = -k-1
        for i in range(0,len(nums)):
            if nums[i] == 1:
                diff = i - last_index - 1
                if diff < k:
                    return False
                last_index = i
        return True

s = Solution()

nums = [1,0,0,0,1,0,0,1]
k = 2

print(s.kLengthApart(nums,k))

nums = [1,0,0,1,0,1]
k = 2

print(s.kLengthApart(nums,k))

nums = [1,1,1,1,1]
k = 0
print(s.kLengthApart(nums,k))

nums = [0,1,0,1]
k = 1
print(s.kLengthApart(nums,k))