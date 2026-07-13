<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Image file naming rules (CRITICAL)

Next.js image optimization rejects paths containing spaces, uppercase letters, percent-encoded sequences (%20 etc.), Korean characters, or special characters. Violations cause 400 INVALID_IMAGE_OPTIMIZE_REQUEST on the deployed site.

Rules that apply to EVERY image file and folder under public/:
- Use only English lowercase letters, digits, and underscores in filenames and folder names
- Extension must be lowercase (jpg, png, webp, avif, svg)
- No spaces, hyphens, uppercase, brackets, percent signs, Korean, or any other special characters
- Always verify with git ls-files that images are tracked before committing articles that reference them
- When adding images: create a clean folder name (e.g. zeekr_9x/), copy files with compliant names, git add the new folder
