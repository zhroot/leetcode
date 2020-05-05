from typing import List
import random

class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        l = len(nums)
        length = 1
        for i in range(0,l):
            max_num = nums[i]
            min_num = nums[i]
            diff = 0
            for j in range(i+1,l):
                cur_num = nums[j]
                if cur_num > max_num:
                    max_num = cur_num
                elif cur_num < min_num:
                    min_num = cur_num
                else:
                    continue
                diff = max_num - min_num
                if diff > limit:
                    cur_len = j - i
                    if length < cur_len:
                        length = cur_len
                    break
            if diff <= limit:
                cur_len = l - i
                if length < cur_len:
                        length = cur_len
                        break;
        return length


s = Solution()
nums = [8,2,4,7]
limit = 4
print(s.longestSubarray(nums,limit))

nums = [10,1,2,4,7,2]
limit = 5
print(s.longestSubarray(nums,limit))

nums = [4,2,2,2,4,4,2,2]
limit = 0
print(s.longestSubarray(nums,limit))

nums = []
for i in range(0,10**5):
    nums.append(random.randint(1,10**9))

limit = random.randint(1,10**9)

print(s.longestSubarray(nums,limit))