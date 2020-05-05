from typing import List

class Solution:
    def minJump(self, jump: List[int]) -> int:
        size = len(jump)
        maxTime = [-1]*(size+1)
        maxTime[size] = 0
        for i in range(size-1,-1,-1):
            maxseek = min(jump[i] + i,size)
            if maxTime[maxseek] != -1:
                maxTime[i] = maxTime[maxseek] + 1
                for j in range(i+1,size):
                    if maxTime[j] == -1 or maxTime[j] >  maxTime[i]:
                        maxTime[j] = maxTime[i]+1
                    else:
                        break
        #print(maxTime)
        return maxTime[0]

s = Solution()
jump = [2, 5, 1, 1, 1,1]
print(s.minJump(jump))

jump = [1] * 1000000
print(s.minJump(jump))