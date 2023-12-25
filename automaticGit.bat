@echo off
setlocal

if "%~1"=="" (
    echo Fail!
    exit /b 1
)

set "mensagemCommit=%~1"

git add .
git commit -m "%mensagemCommit%"
git push

echo Sucess!
exit /b 0