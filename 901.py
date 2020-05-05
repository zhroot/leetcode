class StockSpanner:

    def __init__(self):
        self.l = []
        self.index = 0

    def next(self, price: int) -> int:
        self.index += 1
        delete = []
        for i in range(len(self.l)-1,-1,-1):
            if self.l[i][1] <= price:
                delete.append(i)
            else:
                break
        for i in delete:
            self.l.pop(i)
        self.l.append([self.index,price])
        size = len(self.l)
        if size > 1:
            return self.index - self.l[size-2][0]
        return self.index

# Your StockSpanner object will be instantiated and called as such:
obj = StockSpanner()

price_list = [[100],[80],[60],[70],[60],[75],[85]]
ret = []
for price in price_list:
    ret.append(obj.next(price[0]))

print(ret)