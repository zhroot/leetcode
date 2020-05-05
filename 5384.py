from typing import List

class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxCandies = 0
        for c in candies:
            if c > maxCandies:
                maxCandies = c
        ret = []
        for c in candies:
            ret.append(c+extraCandies >= maxCandies)
        return ret

s = Solution()

candies = [2,3,5,1,3]
extraCandies = 3
print(s.kidsWithCandies(candies,extraCandies))

candies = [12,1,12]
extraCandies = 10
print(s.kidsWithCandies(candies,extraCandies))