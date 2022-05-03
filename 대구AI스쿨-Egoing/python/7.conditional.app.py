from pickle import TRUE


name = input('이름을 입력하시오.')
pwd = float(input('몇년도에 태어났나요?'))

if name == '한승준':
    if pwd == 1995:
        print(f'{name}님 안녕하세요!')
    else:
        print('잘못된 정보입니다.')
else:
    print(f'{name}님은 누구신가요?')