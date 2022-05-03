import sqlite3
conn = sqlite3.connect('db.sqlite3')
curor = conn.cursor()
title = input('title? ')
body = input('body? ')
curor.execute('INSERT INTO topics (title, body) VALUES (?, ?)', (title, body))
conn.commit()
conn.close()

# import read 추가되자마자 읽음