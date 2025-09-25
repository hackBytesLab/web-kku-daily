@echo off
setlocal enabledelayedexpansion

rem --- ตรวจสอบให้แน่ใจว่า Node.js อยู่ใน PATH ---
set "NODE_HOME=C:\Program Files\nodejs"
if exist "%NODE_HOME%\node.exe" (
    set "PATH=%NODE_HOME%;%PATH%"
)

where node >nul 2>nul
if errorlevel 1 (
    echo [!] ไม่พบ Node.js (node.exe) กรุณาติดตั้งจาก https://nodejs.org/ แล้วลองใหม่อีกครั้ง
    pause
    exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
    echo [!] ไม่พบ npm กรุณาตรวจสอบให้แน่ใจว่าได้ติดตั้ง Node.js เรียบร้อยแล้ว
    pause
    exit /b 1
)

set "PROJECT_ROOT=%~dp0"
call :ensureDependencies "%PROJECT_ROOT%backend" backend || goto :end
call :ensureDependencies "%PROJECT_ROOT%frontend" frontend || goto :end
call :checkFrontendEnv "%PROJECT_ROOT%frontend"

call :startProcess "backend" "%PROJECT_ROOT%backend" "npm run dev" || goto :end
call :startProcess "frontend" "%PROJECT_ROOT%frontend" "npm run dev" || goto :end

echo.
echo Backend พร้อมที่ http://localhost:5000
if exist "%PROJECT_ROOT%frontend\vite.config.js" (
    echo Frontend พร้อมที่ http://localhost:5173
)
echo ปิดหน้าต่าง backend/frontend เพื่อหยุดเซิร์ฟเวอร์

echo.
pause

:end
endlocal
exit /b 0

:ensureDependencies
set "TARGET_DIR=%~1"
set "NAME=%~2"
if not exist "%TARGET_DIR%\package.json" (
    echo [!] ไม่พบ package.json ในโฟลเดอร์ %NAME% (%TARGET_DIR%)
    exit /b 0
)
if exist "%TARGET_DIR%\node_modules" (
    echo [%NAME%] ติดตั้ง dependencies แล้ว
    exit /b 0
)
echo [%NAME%] กำลังติดตั้ง dependencies (npm install)...
pushd "%TARGET_DIR%" >nul
call npm install
set "RESULT=%ERRORLEVEL%"
popd >nul
if not %RESULT%==0 (
    echo [!] ติดตั้ง npm install ของ %NAME% ไม่สำเร็จ กรุณาแก้ไขข้อผิดพลาดด้านบนแล้วรันสคริปต์ใหม่
    exit /b 1
)
exit /b 0

:checkFrontendEnv
set "FRONTEND_DIR=%~1"
set "ENV_FILE=%FRONTEND_DIR%\.env"
if not exist "%ENV_FILE%" (
    echo [!] ไม่พบ frontend\.env กรุณาตั้งค่า VITE_GOOGLE_MAPS_API_KEY ก่อนใช้งานหน้าแผนที่
    exit /b 0
)
findstr /b /c:"VITE_GOOGLE_MAPS_API_KEY=" "%ENV_FILE%" >nul 2>nul
if errorlevel 1 (
    echo [!] frontend\.env ยังไม่ได้กำหนด VITE_GOOGLE_MAPS_API_KEY อาจทำให้ Google Maps ไม่แสดงผล
)
exit /b 0

:startProcess
set "TITLE=%~1"
set "DIR=%~2"
set "CMD=%~3"
if not exist "%DIR%" (
    echo [!] ไม่พบโฟลเดอร์ %TITLE%: %DIR%
    exit /b 1
)
start "%TITLE%" cmd /k "cd /d %DIR% && %CMD%"
exit /b 0
