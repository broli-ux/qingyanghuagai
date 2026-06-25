@echo off
chcp 65001 >nul
setlocal

where git >nul 2>nul
if errorlevel 1 (
  echo [错误] 未检测到 Git，请先安装 Git for Windows。
  pause
  exit /b 1
)

if exist node_modules (
  echo 正在删除不应上传的 node_modules...
  rmdir /s /q node_modules
)

if not exist .git (
  git init
)

git branch -M main

echo.
set /p REPO_URL=请输入 GitHub 仓库地址（例如 https://github.com/用户名/仓库名.git）：
if "%REPO_URL%"=="" (
  echo [错误] 仓库地址不能为空。
  pause
  exit /b 1
)

git remote remove origin >nul 2>nul
git remote add origin "%REPO_URL%"

git add .
git commit -m "Initial commit"
if errorlevel 1 (
  echo 提示：如果显示 nothing to commit，可继续推送。
)

git push -u origin main
if errorlevel 1 (
  echo.
  echo [失败] 请检查仓库地址、登录授权或远程仓库是否已有冲突提交。
  pause
  exit /b 1
)

echo.
echo 上传完成。
pause
