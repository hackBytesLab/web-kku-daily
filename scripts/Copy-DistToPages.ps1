param(
    [string]$DistPath = "$(Join-Path $PSScriptRoot '..\frontend\dist')",
    [string]$PagesPath = "$(Join-Path $PSScriptRoot '..\deploy\github-pages')",
    [switch]$Force
)

function Write-Section($message) {
    Write-Host ""
    Write-Host "=== $message ===" -ForegroundColor Cyan
}

if (-not (Test-Path $DistPath)) {
    throw "Dist directory not found: $DistPath. Run 'npm --prefix frontend run build' first."
}

if (-not (Test-Path $PagesPath)) {
    Write-Section "Creating destination folder"
    New-Item -ItemType Directory -Path $PagesPath -Force | Out-Null
}

Write-Section "Cleaning destination (except .git)"
Get-ChildItem -LiteralPath $PagesPath -Force |
    Where-Object { $_.Name -notmatch '^\.git$' } |
    Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

Write-Section "Copying dist -> destination"
Copy-Item -Path (Join-Path $DistPath '*') -Destination $PagesPath -Recurse -Force

if ($Force.IsPresent) {
    Write-Section "Staging files for commit"
    git -C $PagesPath add . | Out-Null
}

Write-Section "Done"
Write-Host "Dist copied to $PagesPath" -ForegroundColor Green
