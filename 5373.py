class Solution:
    def findMinFibonacciNumbers(self, k: int) -> int:
        arr = [1,1]
        f1 = 1
        f2 = 1
        while True:
            f = f1+f2
            if f > k:
                break
            arr.append(f)
            f1 = f2
            f2 = f
        ret = 0
        stop = len(arr)-1
        while True:
            for i in range(stop,-1,-1):
                if arr[i] <= k:
                    ret += 1
                    k -= arr[i]
                    stop = i
                    break
            if k == 0:
                break

        return ret


s = Solution()

print(s.findMinFibonacciNumbers(7))
print(s.findMinFibonacciNumbers(10))
print(s.findMinFibonacciNumbers(19))
print(s.findMinFibonacciNumbers(1000000000))

            
