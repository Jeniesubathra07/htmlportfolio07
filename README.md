# HTML Developer Portfolio

This is a single-page personal portfolio website built with HTML, CSS, JavaScript, and Bootstrap 5.

## How to Customize

### Adding More Projects
1. Open `index.html`.
2. Locate the **HTML Projects** section (`section id="projects"`).
3. Find the `div` with class `col-md-6 col-lg-3`.
4. Copy the entire `col-md-6 col-lg-3` block.
5. Paste it after the last project block.
6. Update the Title, Description, and Link (`href="#"`).

### Adding More Certificates
1. **Add the Slide**:
    - Go to the **Certificates** section (`section id="certificates"`).
    - Inside `.carousel-inner`, duplicate a `.carousel-item` block.
    - **Important**: Remove the `active` class from the duplicated item so only one is active at start.
    - Change the button's `data-bs-target` to a new unique ID (e.g., `#certModal3`).

2. **Add the Modal**:
    - Scroll down to the Modals area (before `#contact`).
    - Duplicate an entire `.modal` block.
    - Change the `id` of the modal to match your new target (e.g., `certModal3`).
    - Update the content inside the `.modal-body`.

## Files
- `index.html`: Main structure.
- `styles.css`: Custom styling and animations.
- `script.js`: Smooth scroll and interaction logic.
