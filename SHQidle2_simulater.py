import random

p = [1, 0.92, 0.84, 0.76, 0.68, 0.6, 0.52, 0.44, 0.36, 0.28]
c = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]

def simul():
    gang = 0
    cost = 0
    while(gang!=10):
        if(random.random() < p[gang]):
            cost += c[gang]
            gang+=1
        else:
            cost += c[gang]
            gang-=1
        
    return cost


avg=0
TMP = 10000
for i in range(TMP):
    avg+=simul()

print(avg/TMP)