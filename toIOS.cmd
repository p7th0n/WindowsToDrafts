@echo off
set FROMWINDOWS=%USERPROFILE%\Dropbox\notes\fromWindows.txt
set CMD=%*

call %CMD%
call %CMD% > %FROMWINDOWS%
call powershell dos2unix %FROMWINDOWS%
