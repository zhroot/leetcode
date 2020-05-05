import math

class Solution:
    def getHappyString(self, n: int, k: int) -> str:
        total = 3 * pow(2,n-1)
        if total < k:
            return ''
        str = ['a','b','c']
        lasttab = [
            [1,2],
            [0,2],
            [0,1]
        ]
        last = math.ceil(k/pow(2,n-1))-1
        ret = str[last]
        k %= pow(2,n-1)
        n -= 1
        while n > 0:
            index = math.ceil(k/pow(2,n-1))-1
            last = lasttab[last][index]
            ret += str[last]
            k %= pow(2,n-1)
            n -= 1
        return ret
            
s = Solution()

print(s.getHappyString(1,3))
print(s.getHappyString(1,4))

print(s.getHappyString(3,9))
print(s.getHappyString(2,7))
print(s.getHappyString(10,100))