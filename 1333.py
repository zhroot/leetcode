from typing import List

class Solution:
    def filterRestaurants(self, restaurants: List[List[int]], veganFriendly: int, maxPrice: int, maxDistance: int) -> List[int]:
        r1 = [[x[0],x[1]] for x in restaurants if (veganFriendly & x[2] == veganFriendly) and  x[3] <= maxPrice and x[4] <= maxDistance ]
        r2 = sorted(r1,key=lambda x:(x[1],x[0]),reverse=True)
        r3 = map(lambda x:x[0],r2)
        return list(r3)

s = Solution()

restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]]
veganFriendly = 1
maxPrice = 50
maxDistance = 10

print(s.filterRestaurants(restaurants,veganFriendly,maxPrice,maxDistance))