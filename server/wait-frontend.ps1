$count = 0
$ok = $false
while ($count -lt 20 -and -not $ok) {
  Start-Sleep -Seconds 2
  $count++
  try {
    $r = Invoke-WebRequest -Uri 'http://localhost:5173' -UseBasicParsing -TimeoutSec 5 -ErrorAction Stop
  } catch {
    $r = $null
  }
  if ($null -ne $r) {
    Write-Output ("Attempt " + $count + ": status=" + $r.StatusCode)
  } else {
    Write-Output ("Attempt " + $count + ": connection failed")
  }
  if ($null -ne $r -and $r.StatusCode -eq 200) {
    if ($r.Content -match 'PEN Academy') {
      $ok = $true
      Write-Output 'Frontend READY at http://localhost:5173'
    }
  }
}
if (-not $ok) {
  Write-Output 'Frontend did NOT become ready'
  exit 1
}
