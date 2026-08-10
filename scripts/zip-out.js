const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const outDir = path.join(__dirname, "..", "out");
const zipPath = path.join(__dirname, "..", "out.zip");

if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

console.log("Packaging out/ directory into out.zip including hidden files (.htaccess)...");

// Use PowerShell to compress everything inside out/ including hidden files
const psCommand = `powershell -ExecutionPolicy Bypass -Command "Get-ChildItem -Path '${outDir}' -Force | Compress-Archive -DestinationPath '${zipPath}' -Force"`;
execSync(psCommand, { stdio: "inherit" });

console.log("Successfully generated out.zip with all hidden files & .htaccess included!");
