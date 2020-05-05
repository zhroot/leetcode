from typing import List

import heapq

class Solution:
    def kthSmallest(self, mat: List[List[int]], k: int) -> int:
        res = [0]
        for row in mat:
            res = sorted([ x+r for x in row for r in res ])[:k]
        return res[-1]
    
s = Solution()
mat = [[1,3,11],[2,4,6]]
k = 5
print(s.kthSmallest(mat,k))
            
mat = [[1,3,11],[2,4,6]]
k = 9
print(s.kthSmallest(mat,k))

mat = [[1,10,10],[1,4,5],[2,3,6]]
k = 7
print(s.kthSmallest(mat,k))


mat = [[1,1,10],[2,2,9]]
k = 7
print(s.kthSmallest(mat,k))