/* ==========================
   ELEMENT REFERENCES
========================== */
const modalaisOverlay = document.getElementById("modalaisOverlay");
const closeBtn = document.getElementById("closemodalais");
const openBtn = document.getElementById("openmodalais");

const content = document.getElementById("content");
const blocks = Array.from(content.children);

/* ==========================
   TIMING CONFIG
========================== */
const modalais_DELAY = 500;

const WORD_BASE = 45;
const WORD_JITTER = 40;
const BLOCK_BASE_PAUSE = 250;
const BLOCK_JITTER = 200;
const INITIAL_PAUSE = 250;

/* ⏱ SPEED CONTROL */
const SPEEDUP_AFTER = 4000;   // ms
const SPEED_MULTIPLIER = 10;  // 10× faster

/* ==========================
   STATE
========================== */
let hasLoadedOnce = false;
let revealStartTime = 0;

/* ==========================
   UTILS
========================== */
const sleep = ms => new Promise(r => setTimeout(r, ms));
const randomDelay = (base, jitter) => base + Math.random() * jitter;

function getSpeedMultiplier() {
  if (!revealStartTime) return 1;
  const elapsed = performance.now() - revealStartTime;
  return elapsed > SPEEDUP_AFTER ? SPEED_MULTIPLIER : 1;
}

async function smartSleep(ms) {
  const speed = getSpeedMultiplier();
  await sleep(ms / speed);
}

/* ==========================
   ELLIPSIS
========================== */
const ellipsis = document.createElement("span");
ellipsis.className = "ellipsis";

function attachEllipsisTo(node) {
  if (node) node.appendChild(ellipsis);
}

function removeEllipsis() {
  ellipsis.remove();
}

/* ==========================
   RESET
========================== */
function resetForAnimation() {
  removeEllipsis();

  blocks.forEach(block => {
    block.style.visibility = "hidden";

    block.querySelectorAll(".word").forEach(w => {
      w.classList.remove("visible");
    });

    block.querySelectorAll(".reveal-item").forEach(el => {
      el.classList.remove("visible");
    });
  });
}

function showAllImmediately() {
  removeEllipsis();
  blocks.forEach(block => {
    block.style.visibility = "visible";
    block.querySelectorAll(".word, .reveal-item").forEach(el => {
      el.classList.add("visible");
    });
  });
}

/* ==========================
   PREPARE NODES (SAFE)
========================== */
function prepareNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    if (!node.textContent.trim()) return;

    const parts = node.textContent.split(/(\s+)/);
    const fragment = document.createDocumentFragment();

    parts.forEach(part => {
      if (part.trim() === "") {
        fragment.appendChild(document.createTextNode(part));
      } else {
        const span = document.createElement("span");
        span.className = "word";
        span.textContent = part;
        fragment.appendChild(span);
      }
    });

    node.replaceWith(fragment);
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    node.classList.add("reveal-item");
    Array.from(node.childNodes).forEach(prepareNode);
  }
}

/* ==========================
   REVEAL BLOCK
========================== */
async function revealBlock(block, isFirst, hasNext) {
  // Reveal container first
  block.style.visibility = "visible";
  block.classList.add("reveal-item");

  await smartSleep(160);
  block.classList.add("visible");

  // Prepare children
  Array.from(block.childNodes).forEach(prepareNode);

  const words = Array.from(block.querySelectorAll(".word"));
  const elements = Array.from(
    block.querySelectorAll(".reveal-item:not(.visible)")
  );

  const revealQueue = [...words, ...elements].sort((a, b) =>
    a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
  );

  if (isFirst && revealQueue.length) {
    attachEllipsisTo(revealQueue[0]);
    await smartSleep(INITIAL_PAUSE);
    removeEllipsis();
  }

  let index = 0;

  for (const item of revealQueue) {
    item.classList.add("visible");

    const progress = index / revealQueue.length;
    const speedFactor = 0.3 + 0.7 * (1 - progress);
    const delay =
      Math.max(30, randomDelay(WORD_BASE, WORD_JITTER)) * speedFactor;

    index++;
    await smartSleep(delay);
  }

  if (hasNext && revealQueue.length) {
    attachEllipsisTo(revealQueue[revealQueue.length - 1]);
    await smartSleep(randomDelay(BLOCK_BASE_PAUSE, BLOCK_JITTER));
    removeEllipsis();
  }
}

/* ==========================
   START REVEAL
========================== */
async function startReveal() {
  revealStartTime = performance.now();

  for (let i = 0; i < blocks.length; i++) {
    await revealBlock(blocks[i], i === 0, i < blocks.length - 1);
  }
}

/* ==========================
   MODAL OPEN
========================== */
async function openmodalais() {
  await sleep(modalais_DELAY);
  modalaisOverlay.classList.add("visible");

  await sleep(400);

  if (hasLoadedOnce) {
    showAllImmediately();
    closeBtn.disabled = false;
    return;
  }

  closeBtn.disabled = true;
  resetForAnimation();
  await startReveal();

  hasLoadedOnce = true;
  closeBtn.disabled = false;
}

/* ==========================
   MODAL CLOSE
========================== */
closeBtn.onclick = async () => {
  modalaisOverlay.classList.remove("visible");
  await sleep(450);
};

/* ==========================
   EVENTS
========================== */
openBtn.onclick = openmodalais;
window.addEventListener("load", openmodalais);
// JavaScript Document