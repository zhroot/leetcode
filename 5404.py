from typing import List

class Solution:
    def buildArray(self, target: List[int], n: int) -> List[str]:
        ret = []
        top = 1
        for i in range(0,len(target)):
            cur = target[i]
            if cur == top:
                ret.append('Push')
            else: # cur > top
                while top < cur:
                    ret.append('Push')
                    ret.append('Pop')
                    top +=1
                ret.append('Push')
            top += 1
        return ret

s = Solution()
target = [1,3]
n = 3

print(s.buildArray(target,n))

target = [1,2,3]
n = 3

print(s.buildArray(target,n))

target = [1,2]
n = 4
print(s.buildArray(target,n))

target = [2,3,4]
n = 4
print(s.buildArray(target,n))