const { chromium } = require("playwright");
const assert = require("node:assert/strict");

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
    headless: true,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(process.env.TEST_URL || "http://127.0.0.1:5173", {
    waitUntil: "domcontentloaded",
  });
  await page.locator("h1").waitFor();
  assert.equal(await page.locator(".match-card").count(), 6);
  await page.getByRole("button", { name: "Menang", exact: true }).click();
  assert.equal(await page.locator(".match-card").count(), 4);
  await page.getByRole("button", { name: "Seri", exact: true }).click();
  assert.equal(await page.locator(".match-card").count(), 2);
  await page
    .locator("#matches")
    .getByRole("button", { name: "Semua", exact: true })
    .click();
  assert.equal(await page.locator(".player-card").count(), 24);
  await page.getByRole("button", { name: "Goalkeeper", exact: true }).click();
  assert.equal(await page.locator(".player-card").count(), 2);
  await page
    .locator("#squad")
    .getByRole("button", { name: "Semua", exact: true })
    .click();
  await page
    .getByRole("textbox", { name: "Cari nama pemain" })
    .fill("Febriyoga");
  assert.equal(await page.locator(".player-card").count(), 1);
  await page
    .getByRole("textbox", { name: "Cari nama pemain" })
    .fill("tidak-ada");
  await page.getByText("Pemain belum ditemukan.").waitFor();
  await page.getByRole("button", { name: "RESET FILTER" }).click();
  assert.equal(await page.locator(".player-card").count(), 24);
  await page
    .getByRole("button", {
      name: "Baca Satu keluarga. Satu perjuangan. Satu gelar.",
      exact: true,
    })
    .click();
  assert.equal(await page.getByRole("dialog").isVisible(), true);
  await page.keyboard.press("Escape");
  assert.equal(await page.getByRole("dialog").count(), 0);
  await page
    .getByRole("button", { name: "BACA CERITA", exact: true })
    .nth(1)
    .click();
  await page.getByRole("button", { name: "Tutup cerita" }).click();
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({
    path: "/tmp/komputerfc-desktop.png",
    fullPage: true,
  });
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
      `Horizontal overflow at ${width}px`,
    );
  }
  await page.getByRole("button", { name: "Buka menu" }).click();
  await page
    .locator("#main-navigation")
    .getByRole("link", { name: "Skuad", exact: true })
    .click();
  assert.equal(
    await page
      .getByRole("button", { name: "Buka menu" })
      .getAttribute("aria-expanded"),
    "false",
  );
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: "/tmp/komputerfc-mobile.png", fullPage: true });
  assert.deepEqual(errors, []);
  console.log(
    "PASS: results filters, 24-player roster, position/search/reset, article dialogs, mobile navigation, no page errors, no overflow at 320/390/768/1440px.",
  );
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
