Write-Host "Building React app..."
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build completed successfully!"
    Write-Host "Starting server..."
    node server.js
} else {
    Write-Host "Build failed!"
    exit 1
}
