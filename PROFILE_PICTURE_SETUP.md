# Profile Picture Setup Instructions

## Steps to Add Your Profile Picture:

1. **Save your profile picture** as `profile.jpg` in the `public` folder:
   ```
   public/profile.jpg
   ```

2. **Image Requirements:**
   - Format: JPG, PNG, or WebP
   - Recommended size: 800x800px or larger (square aspect ratio works best)
   - File name: `profile.jpg` (or update the path in `components/About.jsx` if using a different name)

3. **If your image has a different name**, update the path in `components/About.jsx`:
   ```jsx
   <Image
     src="/your-image-name.jpg"  // Change this
     alt="Shivam Jaiswal"
     ...
   />
   ```

## Features Added:

✅ **Circular profile picture** with smooth rounded edges
✅ **Background enhancement** with brightness, contrast, and saturation filters
✅ **Gradient overlays** for better integration with the portfolio theme
✅ **Animated decorative rings** around the profile picture
✅ **Hover effects** with scale and glow animations
✅ **Decorative particles** around the image
✅ **Vignette effect** for professional look

## Background Improvements:

The component now includes:
- Enhanced image filters (brightness, contrast, saturation)
- Purple/pink gradient overlays matching your portfolio theme
- Subtle vignette effect
- Animated glow effects
- Smooth hover transitions

Your profile picture will automatically display with all these enhancements once you add the image file!
