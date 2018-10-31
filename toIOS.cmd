@echo off
set FROMWINDOWS=C:\Users\Dave\Dropbox\notes\fromWindows.txt
set CMD=%*

call %CMD%
call %CMD% > %FROMWINDOWS%
call powershell dos2unix %FROMWINDOWS%
