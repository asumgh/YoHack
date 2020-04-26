import pandas as pd
def update(data, string):
    newdata = pd.read_csv(data)
    df = pd.DataFrame({'Questions': [string], 'Answers': ['']})
    newdata = newdata.concat([newdata, df])
    return newdata.to_csv('question.csv')