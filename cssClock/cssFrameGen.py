COUNT = 60
STEP_PERCENTAGE = 100/COUNT
FORMAT = "{}% {{ content: '{}' ; }}"

for i in range(COUNT):
    print(FORMAT.format(STEP_PERCENTAGE*i, i if i>9 else "0"+str(i)))