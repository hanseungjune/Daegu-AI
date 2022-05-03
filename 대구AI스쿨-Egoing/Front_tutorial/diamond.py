from math import floor


length = int(input("다이아몬드의 길이:"))

for x in range(1, length+1, 1):
    print(" " * (length-x) + ("*"*(2*x-1)))

for y in range(1, length, 1):
    print(" " * y + ("*"*((2*length-1)-2*y)))

# for y in range(length*2-3, 0, -2):
