$fromwindows = "~\Dropbox\notes\fromWindows.txt"
$cmd = $Args -join " "
$d2u = "dos2unix " + $fromwindows

Write-Host $cmd
iex $cmd
iex $cmd *> $fromwindows
iex $d2u
