import random

num = int(input("lotto를 몇개 뽑으실건가요?"))

print("lotto 자동 번호입니다.")
print("---------------------")

for x in range(1, num+1):
    lotto = [0,0,0,0,0,0]

    lotto[0] = random.randint(1, 45)

    lotto[1] = lotto[0]
    lotto[2] = lotto[0]
    lotto[3] = lotto[0]
    lotto[4] = lotto[0]
    lotto[5] = lotto[0]

    while (lotto[0] == lotto[1]):
        lotto[1] = random.randint(1,45)
    while (lotto[0] == lotto[2] or lotto[1] == lotto[2]):
        lotto[2] = random.randint(1,45)
    while (lotto[0] == lotto[3] or lotto[1] == lotto[3] or lotto[2] == lotto[3]):
        lotto[3] = random.randint(1,45)
    while (lotto[0] == lotto[4] or lotto[1] == lotto[4] or lotto[2] == lotto[4] or lotto[3] == lotto[4]):
        lotto[4] = random.randint(1,45)
    while (lotto[0] == lotto[5] or lotto[1] == lotto[5] or lotto[2] == lotto[5] or lotto[3] == lotto[5] or lotto[4] == lotto[5]):
        lotto[5] = random.randint(1,45)

    lotto.sort()

    print(lotto)