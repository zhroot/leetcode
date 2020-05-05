from typing import List
import random

class Solution:
    def updateMatrix(self, matrix: List[List[int]]) -> List[List[int]]:
        height = len(matrix)
        weight = len(matrix[0])

        close = set()
        open = set()

        res = []     
        for x in range(0,height):
            res.append([-1] * weight)
            for y in range(0,weight):
                if matrix[x][y] == 0:
                    res[x][y] = 0
                    open.add(x*weight+y)z
        
        while len(open) > 0:
            newopen = set()
            for pos in open:
                x = int(pos / weight)
                y = pos % weight
                curdis = res[x][y]
                dir = [[-1,0],[1,0],[0,-1],[0,1]]
                for subdir in dir:
                    newX = x + subdir[0]
                    newY = y + subdir[1]
                    index = newX*weight+newY
                    if (index in close):
                        continue
                    if newX >=  0 and newX < height and newY >= 0 and newY < weight:
                        newDis = curdis + 1
                        if res[newX][newY] == -1 or newDis < res[newX][newY]:
                            res[newX][newY] = newDis
                            newopen.add(index)
                close.add(pos)
            open = newopen
        return res

s = Solution()

matrix = [[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0]]
print(s.updateMatrix(matrix))

matrix = [[0,0,0],[0,1,0],[0,0,0]]

print(s.updateMatrix(matrix))

matrix = [[0,0,0],[0,1,0],[1,1,1]]

print(s.updateMatrix(matrix))

matrix = [[1,0,1,1,0,0,1,0,0,1],[0,1,1,0,1,0,1,0,1,1],[0,0,1,0,1,0,0,1,0,0],[1,0,1,0,1,1,1,1,1,1],[0,1,0,1,1,0,0,0,0,1],[0,0,1,0,1,1,1,0,1,0],[0,1,0,1,0,1,0,0,1,1],[1,0,0,0,1,1,1,1,0,1],[1,1,1,1,1,1,1,0,1,0],[1,1,1,1,0,1,0,0,1,1]]
print(s.updateMatrix(matrix))


height = 100
weight = 100

matrix = []
for i in range(0,height):
    l = []
    for j in range(0,weight):
        l.append(random.randint(0,1))
    matrix.append(l)

s.updateMatrix(matrix)
