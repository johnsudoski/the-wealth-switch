const fs = require("fs");
const { execSync } = require("child_process");

const BASH = "C:\\Program Files\\Git\\usr\\bin\\bash.exe";
const bashPath = fs.existsSync(BASH) ? BASH : "/usr/bin/bash";

const weekByDay = (n) => {
  if (n <= 7) return "release";
  if (n <= 14) return "worth";
  if (n <= 21) return "action";
  return "gratitude"; // 22-30
};

const OUT_DIR = "daily-tracks";

function mixOne(n) {
  const padded = String(n).padStart(2, "0");
  const rawPath = `${OUT_DIR}/day-${padded}-raw.mp3`;
  if (!fs.existsSync(rawPath)) {
    console.log(`Day ${n}: raw file missing, skip`);
    return;
  }
  const week = weekByDay(n);
  const finalPath = `${OUT_DIR}/day-${padded}-${week}.mp3`;
  const durCmd = `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${rawPath}"`;
  const dur = execSync(durCmd, { shell: bashPath }).toString().trim();
  const mixCmd = `ffmpeg -y -i "${rawPath}" -i "music-beds/bed-${week}.mp3" -filter_complex "[1:a]aloop=loop=-1:size=2000000000[loopedbed];[loopedbed]atrim=0:${dur}[bedtrim];[0:a]volume=1.0[voice];[bedtrim][voice]amix=inputs=2:duration=longest:normalize=0[out]" -map "[out]" -ac 2 -b:a 160k "${finalPath}"`;
  try {
    execSync(mixCmd, { stdio: ["ignore", "ignore", "pipe"], shell: bashPath });
    fs.unlinkSync(rawPath);
    console.log(`Day ${n}: mixed -> ${finalPath}`);
  } catch (e) {
    console.error(`Day ${n}: MIX FAILED`, e.stderr ? e.stderr.toString().slice(0, 300) : e.message);
  }
}

console.log("Using bash at:", bashPath);
for (let n = 1; n <= 30; n++) mixOne(n);
console.log("MIX PASS DONE");
