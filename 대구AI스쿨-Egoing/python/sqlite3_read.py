import sqlite3
conn = sqlite3.connect('db.sqlite3')
curor = conn.cursor()
curor.execute('SELECT * FROM topics')
topics = curor.fetchall()

for topic in topics:
  print(topic[0], topic[1])

conn.close()
