import random
 
list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 

random.shuffle(list) 

print("????",list) 

X = 5 

Y=int(len(list)/X) 

list_2 = [] 

for i in range(0,len(list),Y): 
    
    list_2.append(list[i:i+Y]) 

    
print("????",list_2) 

