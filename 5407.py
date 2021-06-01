from typing import List

class Solution:
    def ways(self, pizza: List[str], k: int) -> int:
        mod = 10**9 + 7
        rows = len(pizza)
        cols = len(pizza[0])
        ## dp f(x,y,k)
        dp = []
        for i in range(0,rows):
            dp.append([]*cols)
            for j in range(0,cols):
                dp[i].append([0] * (k+1))
        
        ## 从当前坐标到右下角的总苹果数
        apples = []
        for i in range(0,rows+1):
            apples.append([0] * (cols+1))
        
        for i in range(rows-1,-1,-1):
            for j in range(cols-1,-1,-1):
                apples[i][j] = apples[i][j+1] + apples[i+1][j] - apples[i+1][j+1]
                if pizza[i][j] == 'A':
                    apples[i][j] += 1
                if apples[i][j] > 0:    ## 顺带把最后一块是否可行也计算了
                    dp[i][j][1] = 1
        
        ## f(x,y,k) 
        for i in range(rows-1,-1,-1):
            for j in range(cols-1,-1,-1):
                for cnt in range(2,k+1):  # k = 1已经计算过，从k=2开始
                    if cnt > apples[i][j]:
                        break
                    ret = 0
                    ## f(x,y,k) = f(x`,y`,k-1) 
                    ## x` [x+1,rows]
                    ## y` [y+1,rows]
                    for x in range(i+1,rows):
                        if (apples[i][j] - apples[x][j]) > 0:
                            ret += dp[x][j][cnt-1]
                            ret %= mod
                    for y in range(j+1,cols):
                        if (apples[i][j] - apples[i][y]) > 0:
                            ret += dp[i][y][cnt-1]
                            ret %= mod
                    dp[i][j][cnt] = ret
        return dp[0][0][k]

s = Solution()
pizza = ["A..","AAA","..."]
k = 3
print(s.ways(pizza,k))

pizza = ["A..","AA.","..."]
k = 3
print(s.ways(pizza,k))

pizza = ["A..","A..","..."]
k = 1
print(s.ways(pizza,k))