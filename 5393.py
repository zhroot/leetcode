from typing import List

class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        left = 0
        right = 0
        maxret = 0
        size = len(cardPoints)
        for i in range(0,k):
            right += cardPoints[size-1-i]

        maxret = left+right
        for i in range(0,k):
            left += cardPoints[i]
            right -= cardPoints[size-k+i]
            total = left + right
            if maxret < total:
                maxret = total
        return maxret

s = Solution()

cardPoints = [1,2,3,4,5,6,1]
k = 3
print(s.maxScore(cardPoints,k))

cardPoints = [2,2,2]
k = 2
print(s.maxScore(cardPoints,k))

cardPoints = [9,7,7,9,7,7,9]
k = 7

print(s.maxScore(cardPoints,k))

cardPoints = [1,1000,1]
k = 1
print(s.maxScore(cardPoints,k))

cardPoints = [1,79,80,1,1,1,200,1]
k = 3

print(s.maxScore(cardPoints,k))


cardPoints = [100,40,17,9,73,75]
k = 3
print(s.maxScore(cardPoints,k))

