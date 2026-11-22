# ClutchUp

Live tracking for your player props, multis and slips. It's free and runs in your browser, so there's nothing to install.

**[Open ClutchUp](https://alistairunie.github.io/clutchup/)**

## What it does

- **Tracks props live.** Pick a player, a stat and your line, then watch it count up as the game goes. You can see how far off the line they are, the pace they're on and their chance of getting there.
- **Sends alerts.** You get a notification when a pick lands or busts, or when a multi is one leg away.
- **Follows your slips.** Group your legs into the slip you actually placed. It tracks every leg, settles the slip when the games finish and keeps your profit and hit rate on the Results tab.
- **Adds bets from a screenshot.** Screenshot your bet slip and ClutchUp reads it and adds the legs. The screenshot is read on your phone and never uploaded anywhere.
- **Finds plays.** The Plays tab has four tools:
  - **Ladder** finds the next step for your ladder, a single or double in your price range with the best chance of landing.
  - **Screener** lists every prop on the next day's games, filtered by hit rate, price and average.
  - **Pick'em** builds More/Less entries for pick'em apps, one player per game.
  - **100%** shows the props that landed in every one of a player's last 5, 10 or 15 games, team by team.
- **Covers lots of sports.** NBA, WNBA, NBL, NFL, NHL, soccer (EPL, A-League, Champions League and plenty more) and tennis (ATP and WTA singles).
- **Shows prices.** Lines and prices come from DraftKings through ESPN for the US leagues and the bigger soccer leagues. For NBL and tennis, type in your bookie's price.
- **Posts to Discord.** Share picks, slips and ladder steps to a Discord channel with a webhook.

## How to use it

1. Open the link on your phone.
2. Put it on your home screen so it opens like an app.
   - **iPhone:** in Safari tap Share, then Add to Home Screen.
   - **Android:** open the browser menu, then tap Install app or Add to Home screen.
3. Go to **Games**, tap a game, then tap a player (or **Match** for game bets). Pick the stat, your line and More or Less, then add it.
4. In **Settings**, turn on notifications and send yourself a test alert. On iPhone this only works once it's on your home screen.
5. Leave it open during games.

A few more things to try:

- **Placed a multi?** On **My picks** tap **Make a slip**, tick the legs, then put in your stake and price.
- **Got a screenshot of your slip?** Tap **Add from screenshot** and choose it. Check the legs it found, then add them.
- **Want to see it working first?** Go to **Settings** and tap **Start demo game**. It plays a fake basketball game in fast motion and sends real alerts.

## Good to know

- **Keep the page open.** The web version only tracks while it's open, in any tab. Once you close it, nothing updates and no alerts come through. If you're on Android, you can get the app from **Settings**. It keeps tracking with your phone locked.
- **Your picks stay on your device.** There are no accounts. Everything is saved in your browser, so it won't carry over to another phone, and clearing your browser data wipes it.
- **Use one tab at a time.** If it's open in two tabs, the second one waits until you close the first.
- **Stats can lag.** Live stats come from ESPN and can be up to a minute behind the broadcast. Bookies settle on official stats, which sometimes differ.
- **Some picks settle differently:**
  - Soccer settles on 90 minutes, so extra time doesn't count.
  - NFL yardage can go backwards, so those picks only settle at full time.
  - In tennis, if a player retires, match winner bets stand once a set is finished. Other tennis bets stand only if they'd already been decided, otherwise they're void. A walkover voids everything.
- **It's a tracker, not a bookie.** It never places bets or touches your betting accounts.

## Privacy

There are no accounts, ads or analytics. ClutchUp only connects to ESPN's public scores feeds, ESPN's image server for logos and headshots, and Discord if you add a webhook.

## Bet responsibly

18+ only. If betting stops being fun, free and confidential help is available 24/7 from the National Gambling Helpline on 1800 858 858 or at [gamblinghelponline.org.au](https://www.gamblinghelponline.org.au). You can block yourself from Australian betting sites with [BetStop](https://www.betstop.gov.au).

## Credits

- Live scores, stats and prices come from ESPN's public feeds. ClutchUp isn't affiliated with ESPN, any league or any bookmaker.
- Screenshots are read with [Tesseract.js](https://github.com/naptha/tesseract.js) (Apache 2.0).
- The fonts are Big Shoulders Display and Figtree (SIL Open Font License).
- The app's engine is compiled for the web with [TeaVM](https://teavm.org) (Apache 2.0).
