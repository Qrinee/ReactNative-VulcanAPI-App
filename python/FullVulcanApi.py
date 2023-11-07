
import datetime
from datetime import date
import json
from vulcan import Keystore
from flask_session import Session
from vulcan import Account
from vulcan import Vulcan
from flask import Flask,jsonify, redirect,session
from flask import request
from datetime import timedelta
import asyncio

currentSeasonDate = datetime.date(datetime.datetime.now().year, 9, 1)


app = Flask(__name__)
app.secret_key = 'secretkey'
app.config['SESSION_TYPE'] = 'filesystem'
@app.before_request
def makeSessionPermanent():
    session.permanent = True
    app.permanent_session_lifetime = timedelta(minutes=1)
@app.route("/",methods=["GET"])
async def mainPage():
    if not session.get("client"):
        return redirect("/login")
    print(session["client"])
    return "no siema"
#    session["name"] = request.form.get("name")
@app.route("/login", methods=["POST","GET"])
async def loginEndpoint():
    if request.method == "POST":
        data=request.get_json()
        token=data['token']
        symbol=data['symbol']
        pin=data['pin']
        wynik=await registrationClien(token,symbol,pin)
        session["client"]=wynik
        if wynik==False:
            return "rejected"
        else:
            return "looged"
       # session["client"]=wynik
    return "notlogged"
 #   start = time.perf_counter()
@app.get("/getGrades")
async def getGradesEndpoint():
    client=await creatingClient()
    gradesArray=await selectingGrades(client)
    await client.close()
    return gradesArray
@app.get("/getExams")
async def getExamsEndpoint():
    client=await creatingClient()
    examsArray=await selectingTests(client,currentSeasonDate)
    await client.close()
    return examsArray

@app.get("/getNextExams")
async def getNextExamsEndpoint():
    client=await creatingClient()
    actualDate = date.today()
    examsArray=await selectingTests(client,actualDate)
    await client.close()
    return examsArray

@app.get("/getUser")
async def getUser():
    client=await creatingClient()
    userinfo= await getUserInfo(client)
    await client.close()
    return str(userinfo)

@app.get("/getHomeworks")
async def getHomeworksEndpoint():
    client=await creatingClient()
    homeworksArray=await selectingHomeworks(client,currentSeasonDate)
    await client.close()
    return homeworksArray
@app.get("/getNextHomeworks")
async def getNextHomeworksEndpoint():
    client=await creatingClient()
    actualDate = date.today()
    homeworksArray=await selectingHomeworks(client,actualDate)
    await client.close()
    return homeworksArray

async def main():
      client= await creatingClient()
     # print(await selectingHomeworks(client))
     # print(await selectingTests(client))
     # print(await selectingGrades(client))
      await client.close()

async def registrationClien(token,symbol,pin):
    try:
        keystore = await Keystore.create()
        account =await Account.register(keystore, token, symbol, pin)
        client=Vulcan(keystore,account)
        await client.close()
        keystab=[keystore.as_json,account.as_json]
        return keystab
    except:
        return False
async def creatingClient():

    SessionData=session["client"]
    keystore=Keystore.load(SessionData[0])
    account=Account.load(SessionData[1])
    client = Vulcan(keystore, account)
    print(client)
    return client


async def selectingRule(client):
    await client.select_student()
    kwater=await client.data.get_addressbook()
    print(kwater)
    async for x in kwater:
        print(x)
    #print(client.student)


async def getUserInfo(client):
    await client.select_student()
    student=await client.get_students()
    return student[0]


async def selectingGrades(client):
    await client.select_student()
    subjecttable={}
    lekcja= await client.data.get_grades()
    async for grade in lekcja:

        GradeSubjectName=grade.column.subject.name
        gradeValue=grade.content_raw

        if GradeSubjectName is not subjecttable:

            subjecttable.setdefault(GradeSubjectName,[])
            subjecttable[GradeSubjectName].append(gradeValue)

        elif GradeSubjectName in subjecttable:
            subjecttable[GradeSubjectName].append(gradeValue)
    return json.dumps(subjecttable)



async def selectingTests(client,actualDate):
    await client.select_student()
    exams=await client.data.get_exams()
    ExamSprawdzian=[]
    async for examPar in exams:
        examsHoldArr={}
        examDate=examPar.deadline.date
        if actualDate<examDate:
            ExamSubject=examPar.subject.name
            ExamType=examPar.type
            ExamID=examPar.id
            ExamTopic=examPar.topic
            examsHoldArr.setdefault("ExamType",ExamType)
            examsHoldArr.setdefault("LessonName",ExamSubject)
            examsHoldArr.setdefault("Topic",ExamTopic)
            examsHoldArr.setdefault("SprawdzianID",ExamID)
            examsHoldArr.setdefault("SprawdzianDate",str(examDate))
            ExamSprawdzian.append(examsHoldArr)
    print(ExamSprawdzian)
    return json.dumps(ExamSprawdzian)


async def selectingHomeworks(client,actualDate):
    await client.select_student()
    HomeworksList=[]
    homeworks=await client.data.get_homework()
    async for x in homeworks:
        homeworksHoldArr={}
        homeworksDate=x.deadline.date
        if actualDate<homeworksDate:
            HomeworkSubject=x.subject.name
            HomeworksID=x.homework_id
            HomeworksTopic=x.content
            homeworksHoldArr.setdefault('HomeworkSubject',HomeworkSubject)
            homeworksHoldArr.setdefault('HomeworksTopic',HomeworksTopic)
            homeworksHoldArr.setdefault('HomeworksID',HomeworksID)

            HomeworksList.append(homeworksHoldArr)
    return json.dumps(HomeworksList)



if __name__ == "__main__":

    app.run(debug=True)




