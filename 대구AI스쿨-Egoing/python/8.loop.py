members = ['egoing','duru']     #같은 성격인 경우에는 리스트(배열)
for member in members:
    print('member:',member)
members2 = [
    ['egoing','seoul','programmer'],
    ['duru','daegu','dba'],
    ['taeho','busan','designer']
]
print(members2[0][0])
for member2 in members2:
    print(member2[0], member2[1])

egoing1 = ['egoing','seoul','programmer']
egoing2 = {'name':'egoing', 'city':'seoul', 'job':'programmer'} #다른 성격끼리는 사전형(dictionary)
print(egoing2['city'])
for value in egoing2:
    print(egoing2[value])

members3 = [
    {'name':'egoing','city':'seoul','job':'programmer'},
    {'name':'duru','city':'daegu','job':'dba'},
    {'name':'taeho','city':'busan','job':'designer'}
]

for member in members3:
    print(member['name'])

