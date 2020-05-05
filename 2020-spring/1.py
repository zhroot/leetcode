from typing import List

class Solution:
    def minCount(self, coins: List[int]) -> int:
        ret = 0
        for coin in coins:
            ret += int(coin / 2) + coin % 2
        return ret

s = Solution()

print(s.minCount([4,2,1]))

print(s.minCount([2,3,10]))