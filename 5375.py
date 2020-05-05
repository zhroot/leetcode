class Solution:
    def numberOfArrays(self, s: str, k: int) -> int:
        size = len(s)
        dplist = [[int(s[0]),1]]
        for i in range(1,size):
            c = s[i]
            newdplist = []
            num = int(c)
            total = 0
            for dp in dplist:
                append = dp[0] * 10 + num
                notappend = num
                if append <= k:
                    newdplist.append([append,dp[1]])
                total += dp[1]
            if notappend >= 1 and notappend <= k:
                newdplist.append([notappend,total % 1000000007])
            dplist = newdplist
            #print(dplist)
        ret = 0
        for dp in dplist:
            ret += dp[1]
            ret %= 1000000007
        return ret

so = Solution()

s = "1000"
k = 10000

print(so.numberOfArrays(s,k))

s = "1000"
k = 10

print(so.numberOfArrays(s,k))

s = "1317"
k = 2000

print(so.numberOfArrays(s,k))

s = "2020"
k = 30

print(so.numberOfArrays(s,k))

s = "1234567890"
k = 90
print(so.numberOfArrays(s,k))