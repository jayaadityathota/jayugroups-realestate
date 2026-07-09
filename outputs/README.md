# Jay U Groups Real Estate Static Website

This is a complete static website package for Jay U Groups as an investment consulting brand. It uses HTML, CSS, Bootstrap, and JavaScript only. No backend or database is required.

## Files

- `index.html` - website structure and sections
- `styles.css` - professional responsive styling and CSS-generated graphics
- `app.js` - editable business data, project phases, gallery items, video links, WhatsApp, and email settings
- `assets/jay-u-groups-logo.png` - website, favicon, footer, and social preview logo

## What To Update First

Open `app.js` and update these values:

```js
phoneInternational: "919999999999",
email: "enquiries@example.com",
```

Use the full WhatsApp number with country code and no `+` sign.

## Adding Current Phases

In `app.js`, add or edit items inside `projects`.

```js
{
  name: "Phase 5 - New Location",
  location: "Near main road",
  status: "Bookings open",
  summary: "Short customer-friendly explanation.",
  facilities: ["School nearby", "Hospital", "Road access"]
}
```

## Adding YouTube Videos

Use the embed format:

```js
embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

Leave `embedUrl` blank until the video is ready. The website will show a clean placeholder instead of a broken video frame.

## Adding Instagram Reels

Use the public reel embed format:

```js
embedUrl: "https://www.instagram.com/reel/YOUR_REEL_ID/embed"
```

Leave `embedUrl` blank until the reel is ready. The website will show a clean placeholder instead of a broken reel frame.

## Simple Advanced Features To Add Later

- WhatsApp automation: connect the WhatsApp button to WATI, Interakt, Twilio, or Meta WhatsApp Cloud API when you are ready for a backend or automation account.
- Email auto-replies: use Zoho Mail, Brevo, Mailchimp Transactional, or Google Apps Script to send automatic replies.
- Lead tracking: start with Google Sheets through a form tool, then move to a CRM later.
- Project updates: keep editing the `projects`, `gallery`, `youtubeVideos`, and `instagramReels` arrays in `app.js`.
- Document downloads: add PDF links to the legal section only after final verification.

## Important Notes

- The website does not visibly use Navya Sai Projects names or logos.
- Direct enquiry messages include a private follow-up note so you can disclose the relevant trusted company partner details after the customer contacts you.
- CSS graphics are used for the designed backgrounds instead of photo backgrounds.
- Real gallery photos/videos can be added later by replacing the placeholder gallery frames with actual media tags.
- WhatsApp Cloud API automation and automatic email replies require a backend or a third-party tool such as Meta WhatsApp Cloud API, Twilio, WATI, Interakt, Brevo, Zoho, or Google Apps Script. This static version prepares clean enquiry flows without a database.
