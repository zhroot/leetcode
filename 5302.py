class Solution:
    def maxScore(self, s: str) -> int:
        onecnt = 0
        zorecnt = 0
        for ch in s:
            if ch == '1':
                onecnt += 1
        maxret = 0
        if s[0] == '0':
            zorecnt = 1
            maxret = zorecnt + onecnt
        else:
            onecnt -= 1
            zorecnt = 0
            maxret = zorecnt + onecnt
        
        for i in range(1,len(s)-1):
            ret = 0
            if s[i] == '0':
                zorecnt += 1
                ret = zorecnt + onecnt
            else:
                onecnt -= 1
                ret = zorecnt + onecnt
            if ret > maxret:
                maxret = ret
        return maxret


s = Solution()
ss = "011101"
print(s.maxScore(ss))

ss = "00111"
print(s.maxScore(ss))

ss = "1111"
print(s.maxScore(ss))

ss = "000"
print(s.maxScore(ss))