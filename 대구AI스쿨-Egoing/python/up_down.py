import random

randomNumber = random.randint(1,100)
num = -1

count = 0

print('숫자맞추기 게임 시작!')
print('--------------------')
while ( randomNumber != num):

    num = int(input("1~100 사이의 숫자를 입력하세요 : "))

    if num > randomNumber:
        print("Down")
    elif num < randomNumber:
        print("Up")
    
    count += 1
print("--------------------")
print("%d번 만에 정답을 맞추셨습니다" % count)

