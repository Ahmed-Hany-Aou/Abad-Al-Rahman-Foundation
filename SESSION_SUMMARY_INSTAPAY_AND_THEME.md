# Session Summary: InstaPay Redesign & Egyptian Rural Theme Overhaul

**Date:** May 1st, 2026
**Project:** Abad Al-Rahman Foundation Website

## Key Accomplishments

### 1. InstaPay Donation Flow Redesign
- **Direct Payment Links:** Replaced the static 4-step InstaPay guide with a highly actionable interface featuring a direct clickable IPN link (`ebad-al-rahmantestqr`) and a dedicated QR code area.
- **WhatsApp Integration:** Built a confirmation form that captures the donor's Reference Number and Mobile Number, automatically formatting a WhatsApp message ready to be sent to the foundation's official number (prompting the donor to attach their receipt screenshot).
- **Strict Input Validation:** 
  - Implemented strict regex validation for the Reference Number (forcing 6-20 numeric digits only) to prevent random text submissions.
  - Integrated the `react-international-phone` component to ensure professional and accurate mobile number formatting before submission.

### 2. Website Imagery & Thematic Overhaul
- **Egyptian Rural Village Theme (القرى المصرية / النمروط):** Replaced all placeholder and generic AI images with custom-generated, highly realistic scenes reflecting the simplicity and authenticity of traditional Egyptian rural villages.
- **Strict Constraints:** Enforced a strict visual rule across all images: **NO women or girls** (only simple Egyptian village men and boys), and **NO text, letters, numbers, or dates**.
- **Images Updated:**
  - Hero Background (`hero-bg-clean.png`)
  - Community Kitchen (`act-kitchen-ai.png`)
  - Modern Pharmacy serving simple villagers (`act-pharmacy-ai.png` / `pharmacy-interior-ai.png`)
  - Modern Medical Clinic (`act-medical-ai.png`)
  - Aid Distribution (`act-aid-ai.png`)
  - Inspiring Vision Statement (`about-vision-ai.png`)
  - Volunteer Team (`volunteer-team-ai.png`)

### 3. Medical Complex Reversion & Text Removal
- Restored the user's preferred modern 6-story medical complex image.
- Successfully edited the image to completely remove the Arabic hospital name and the expected completion date from the facade, leaving the architecture and scene perfectly intact.

### 4. Trust & Credibility CSS Framing (البرواز)
- Instead of risking AI mangling the Arabic text on the official Ministry document, implemented a highly realistic CSS frame.
- The document is now displayed in a dark wood frame with a white passe-partout (matting), subtle wall drop shadows, a glass glare effect, and an interactive zoom overlay, simulating a professionally scanned and framed official certificate.

### 5. Version Control
- All changes, configurations, and new image assets were successfully committed and pushed to the remote GitHub repository under the `main` branch.

## Outstanding Actions for Next Session
- Provide and upload the *real* InstaPay QR code image generated directly from the InstaPay app.
- Provide the final official foundation IPA and bank details for `DONATION_CONFIG`.
- Complete the final localization and translations across the site.
