# Email Setup Instructions

To make the contact form work, you need to configure email settings.

## Steps:

1. **Install nodemailer** (if not already installed):
   ```bash
   npm install nodemailer
   ```

2. **Create a `.env.local` file** in the root directory with the following:

   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   RECIPIENT_EMAIL=shiv2002am@gmail.com
   ```

3. **Get Gmail App Password**:
   - Go to your Google Account: https://myaccount.google.com/
   - Security > 2-Step Verification (must be enabled first)
   - App passwords > Generate app password
   - Use that password for `EMAIL_PASS`

4. **Set EMAIL_USER** to your Gmail address
5. **Set RECIPIENT_EMAIL** to `shiv2002am@gmail.com` (where messages will be sent)

## Important Notes:

- Never commit `.env.local` to git (it's already in .gitignore)
- Use App Password, not your regular Gmail password
- 2-Step Verification must be enabled on your Google Account

## Testing:

After setup, restart your dev server:
```bash
npm run dev
```

Then test the contact form - messages will be sent to shiv2002am@gmail.com
