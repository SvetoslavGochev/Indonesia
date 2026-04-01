# Git commit script
$dir = "c:\Users\ss3434\Downloads\IndonesiaData"
Set-Location $dir

Write-Host "Current directory: $(Get-Location)" -ForegroundColor Cyan
Write-Host ""

# Check status
Write-Host "Git status:" -ForegroundColor Yellow
git status --short
Write-Host ""

# Add all changes
Write-Host "Adding changes..." -ForegroundColor Cyan
git add -A
Write-Host ""

# Commit
Write-Host "Creating commit..." -ForegroundColor Cyan
$commitMsg = "Mobile responsive fix: Move language selector from fixed to static position on mobile"
git commit -m $commitMsg
Write-Host ""

# Push
Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push origin main
Write-Host ""

# Show log
Write-Host "Recent commits:" -ForegroundColor Yellow
git log --oneline -3
